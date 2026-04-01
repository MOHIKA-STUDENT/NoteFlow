import { writable, derived, get } from "svelte/store";
import { set as idbSet, get as idbGet } from "idb-keyval";
import { api } from "../api";
import { addToQueue, syncStatus, syncQueue, removeFromQueue } from "./sync";
import type { SyncAction } from "./sync";
import type { Note, CreateNoteDto, UpdateNoteDto } from "../types/note";

const NOTES_CACHE_KEY = "note-flow-cache";

export const notes = writable<Note[]>([]);
export const isLoading = writable(false);
export const searchQuery = writable("");
export const sortBy = writable<"title" | "createdAt" | "id">("createdAt");
export const sortOrder = writable<"asc" | "desc">("desc");

// Intercept store updates to persist to IndexedDB
let isInitialSubscription = true;
notes.subscribe(value => {
  if (isInitialSubscription) {
    isInitialSubscription = false;
    return;
  }
  if (typeof window !== "undefined") {
    // We allow saving 0 length (empty) arrays to clear the cache when the last note is deleted
    idbSet(NOTES_CACHE_KEY, value);
  }
});

/**
 * Helper to apply the background sync queue to a set of notes.
 * This is used for BOTH cache loading and server data fetching.
 */
function applySyncQueue(notes: Note[], queue: SyncAction[]): Note[] {
  let merged = [...notes];

  // 1. Apply PENDING DELETES
  const pendingDeleteIds = new Set(
    queue
      .filter(a => a.type === "DELETE")
      .map(a => (a as any).id)
  );
  merged = merged.filter(n => !pendingDeleteIds.has(n.id));

  // 2. Apply PENDING UPDATES
  queue.forEach(action => {
    if (action.type === "UPDATE") {
      const index = merged.findIndex(n => n.id === action.id);
      if (index !== -1) {
        merged[index] = { ...merged[index], ...action.data };
      }
    }
  });

  // 3. Apply PENDING CREATES
  queue.forEach(action => {
    if (action.type === "CREATE") {
      const exists = merged.some(n => n.id === action.tempId);
      if (!exists) {
        const tempNote: Note = {
          ...action.data,
          id: action.tempId,
          createdAt: new Date().toISOString()
        };
        merged.unshift(tempNote);
      }
    }
  });

  return merged;
}

// Derived store for filtered and sorted notes
export const filteredNotes = derived(
  [notes, searchQuery, sortBy, sortOrder],
  ([$notes, $search, $sortBy, $sortOrder]) => {
    let result = $notes.filter(note => 
      note.title.toLowerCase().includes($search.toLowerCase()) ||
      note.content.toLowerCase().includes($search.toLowerCase())
    );

    result.sort((a, b) => {
      let valA = a[$sortBy] ?? "";
      let valB = b[$sortBy] ?? "";
      
      if ($sortBy === "createdAt") {
        const timeA = typeof valA === "number" ? (valA < 1e11 ? valA * 1000 : valA) : new Date(valA as string).getTime();
        const timeB = typeof valB === "number" ? (valB < 1e11 ? valB * 1000 : valB) : new Date(valB as string).getTime();
        return $sortOrder === "asc" ? timeA - timeB : timeB - timeA;
      }

      if ($sortBy === "title") {
        const comparison = (valA as string).localeCompare(valB as string, undefined, { sensitivity: 'base' });
        return $sortOrder === "asc" ? comparison : -comparison;
      }

      if (valA < valB) return $sortOrder === "asc" ? -1 : 1;
      if (valA > valB) return $sortOrder === "asc" ? 1 : -1;
      return 0;
    });

    return result;
  }
);

export async function fetchNotes(page = 1) {
  isLoading.set(true);
  
  // Load from cache first for instant UI
  const cache = await idbGet<Note[]>(NOTES_CACHE_KEY);
  if (cache && get(notes).length === 0) {
    // CRITICAL: Apply the current sync queue filters to the cached data
    // to prevent deleted notes from "flashing" before the server responds.
    const currentQueue = get(syncQueue) as SyncAction[];
    const filteredCache = applySyncQueue(cache, currentQueue);
    notes.set(filteredCache);
  }

  try {
    const serverData = await api.getNotes(page);
    const currentQueue = get(syncQueue) as SyncAction[];
    
    // Use the helper to merge server data with queue
    const mergedNotes = applySyncQueue(serverData, currentQueue);

    notes.set(mergedNotes);
  } catch (error) {
    console.error("Failed to fetch notes:", error);
  } finally {
    isLoading.set(false);
  }
}

export async function createNote(dto: CreateNoteDto) {
  const tempId = crypto.randomUUID();
  const tempNote: Note = {
    ...dto,
    id: tempId,
    createdAt: new Date().toISOString()
  };

  // Optimistic update
  notes.update(n => [tempNote, ...n]);

  await addToQueue({ type: "CREATE", data: dto, tempId });
}

export async function updateNote(id: string, dto: UpdateNoteDto) {
  // Optimistic update
  notes.update(n => n.map(note => note.id === id ? { ...note, ...dto } : note));

  await addToQueue({ type: "UPDATE", id, data: dto });
}

export async function deleteNote(id: string) {
  const originalNotes = get(notes);
  const deletedNote = originalNotes.find(n => n.id === id);

  if (!deletedNote) return { undo: () => {} };

  // Optimistic update
  notes.update(n => n.filter(note => note.id !== id));

  await addToQueue({ type: "DELETE", id });

  return { 
    undo: async () => {
      // 1. Attempt to remove the delete action from the sync queue
      const wasCanceled = removeFromQueue(id, "DELETE");
      
      // 2. If it was already processed, we must "re-create" it
      if (!wasCanceled) {
        console.log("Delete action already processed. Re-creating note...");
        await addToQueue({ 
           type: "CREATE", 
           data: { 
             title: deletedNote.title, 
             content: deletedNote.content 
           }, 
           tempId: id 
        });
      }
      
      // 3. Restore the local store
      notes.set(originalNotes);
    } 
  };
}
