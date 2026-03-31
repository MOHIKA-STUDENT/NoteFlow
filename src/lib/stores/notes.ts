import { writable, derived, get } from "svelte/store";
import { set as idbSet, get as idbGet } from "idb-keyval";
import { api } from "../api";
import { addToQueue, syncStatus, syncQueue } from "./sync";
import type { SyncAction } from "./sync";
import type { Note, CreateNoteDto, UpdateNoteDto } from "../types/note";

const NOTES_CACHE_KEY = "note-flow-cache";

export const notes = writable<Note[]>([]);
export const isLoading = writable(false);
export const searchQuery = writable("");
export const sortBy = writable<"title" | "createdAt" | "id">("createdAt");
export const sortOrder = writable<"asc" | "desc">("desc");

// Intercept store updates to persist to IndexedDB
notes.subscribe(value => {
  if (typeof window !== "undefined" && value.length > 0) {
    idbSet(NOTES_CACHE_KEY, value);
  }
});

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
    notes.set(cache);
  }

  try {
    const serverData = await api.getNotes(page);
    const currentQueue = get(syncQueue) as SyncAction[];
    
    // Create a working set starting with server data
    let mergedNotes = [...serverData];

    // 1. Apply PENDING DELETES
    const pendingDeleteIds = new Set(
      currentQueue
        .filter(a => a.type === "DELETE")
        .map(a => (a as any).id)
    );
    mergedNotes = mergedNotes.filter(n => !pendingDeleteIds.has(n.id));

    // 2. Apply PENDING UPDATES
    currentQueue
      .filter(a => a.type === "UPDATE")
      .forEach(action => {
        const act = action as any;
        const index = mergedNotes.findIndex(n => n.id === act.id);
        if (index !== -1) {
          mergedNotes[index] = { ...mergedNotes[index], ...act.data };
        }
      });

    // 3. Apply PENDING CREATES
    currentQueue
      .filter(a => a.type === "CREATE")
      .forEach(action => {
        const act = action as any;
        const exists = mergedNotes.some(n => n.id === act.tempId);
        if (!exists) {
          const tempNote: Note = {
            ...act.data,
            id: act.tempId,
            createdAt: new Date().toISOString()
          };
          mergedNotes.unshift(tempNote);
        }
      });

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

  // Optimistic update
  notes.update(n => n.filter(note => note.id !== id));

  await addToQueue({ type: "DELETE", id });

  return { undo: () => notes.set(originalNotes) };
}
