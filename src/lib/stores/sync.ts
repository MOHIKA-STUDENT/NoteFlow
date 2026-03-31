import { writable, get } from "svelte/store";
import { set as idbSet, get as idbGet, del as idbDel } from "idb-keyval";
import { api, BASE_URL } from "../api";

type SyncAction = 
  | { type: "CREATE"; data: any; tempId: string }
  | { type: "UPDATE"; id: string; data: any }
  | { type: "DELETE"; id: string };

export type SyncStatus = "synced" | "syncing" | "offline" | "error";

export const syncStatus = writable<SyncStatus>("synced");
export const syncQueue = writable<SyncAction[]>([]);

const QUEUE_KEY = "note-sync-queue";
const BASE_URL_KEY = "note-api-base-url";

export async function initSync() {
  const storedBaseUrl = await idbGet<string>(BASE_URL_KEY);
  
  // Auto-clear queue if API endpoint changed to avoid 404 loops
  if (storedBaseUrl && storedBaseUrl !== BASE_URL) {
    console.log("API Endpoint changed. Clearing sync queue.");
    await idbDel(QUEUE_KEY);
  }
  
  await idbSet(BASE_URL_KEY, BASE_URL);

  const storedQueue = await idbGet<SyncAction[]>(QUEUE_KEY);
  if (storedQueue) {
    syncQueue.set(storedQueue);
  }

  if (typeof window !== "undefined") {
    window.addEventListener("online", () => {
      syncStatus.set("syncing");
      processQueue();
    });
    window.addEventListener("offline", () => {
      syncStatus.set("offline");
    });

    if (navigator.onLine) {
      processQueue();
    } else {
      syncStatus.set("offline");
    }
  }
}

async function persistQueue(queue: SyncAction[]) {
  await idbSet(QUEUE_KEY, queue);
}

export async function addToQueue(action: SyncAction) {
  syncQueue.update(q => {
    const newQueue = [...q, action];
    persistQueue(newQueue);
    return newQueue;
  });

  if (typeof navigator !== "undefined" && navigator.onLine) {
    processQueue();
  } else {
    syncStatus.set("offline");
  }
}

export async function clearQueue() {
  syncQueue.set([]);
  await idbDel(QUEUE_KEY);
  syncStatus.set("synced");
}

let isProcessing = false;
async function processQueue() {
  if (isProcessing) return;
  const currentQueue = get(syncQueue);
  if (currentQueue.length === 0) {
    syncStatus.set("synced");
    isProcessing = false;
    return;
  }

  isProcessing = true;
  syncStatus.set("syncing");

  const [action, ...remaining] = currentQueue;

    try {
      switch (action.type) {
        case "CREATE": {
          const result = await api.createNote(action.data);
          const realId = (result as any).id;
          const tempId = action.tempId;

          // Update the rest of the queue
          remaining.forEach(act => {
            if ("id" in act && act.id === tempId) {
              act.id = realId;
            }
          });

          // Update the notes store to match
          const { notes } = await import("./notes");
          notes.update(allNotes => 
            allNotes.map(n => n.id === tempId ? { ...n, id: realId } : n)
          );
          break;
        }
        case "UPDATE":
          await api.updateNote(action.id, action.data);
          break;
        case "DELETE":
          await api.deleteNote(action.id);
          break;
      }

      syncQueue.set(remaining);
      await persistQueue(remaining);
      isProcessing = false;
      processQueue(); 
    } catch (error: any) {
      console.error("Sync Critical Error:", error.message || error);
      
      // If it's a client error (400) or missing resource (404), skip it
      if (error.message?.includes("400") || error.message?.includes("404")) {
        console.warn("Skipping invalid sync action:", action.type, "Reason:", error.message);
        syncQueue.set(remaining);
        await persistQueue(remaining);
        isProcessing = false;
        processQueue();
        return;
      }

      syncStatus.set("error");
      isProcessing = false;
    }
}
