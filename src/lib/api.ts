export const BASE_URL = "https://69cc067f0b417a19e07bb457.mockapi.io"; // Placeholder, can be moved to .env

class ApiWrapper {
  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      let message = errorData.message || response.statusText;
      
      if (response.status === 404 && endpoint.includes("/notes")) {
        message += " - TIP: Check if your MockAPI resource is named 'notes' (lowercase). If it's 'Notes' or something else, update your resource name or the code.";
      }
      
      throw new Error(`API Error (${response.status}): ${message}`);
    }

    return response.json();
  }

  getNotes(page = 1, limit = 20, search = ""): Promise<Note[]> {
    // Try sorting by createdAt, but fallback to simple list if MockAPI rejects the parameters (400)
    let url = `/notes?page=${page}&limit=${limit}&sortBy=createdAt&order=desc`;
    if (search) url += `&search=${search}`;
    return this.request<Note[]>(url).catch(() => {
        // Fallback for misconfigured MockAPI resources
        return this.request<Note[]>(`/notes?page=${page}&limit=${limit}${search ? `&search=${search}` : ''}`);
    });
  }

  createNote(note: CreateNoteDto): Promise<Note> {
    return this.request<Note>("/notes", {
      method: "POST",
      body: JSON.stringify(note),
    });
  }

  updateNote(id: string, note: UpdateNoteDto): Promise<Note> {
    return this.request<Note>(`/notes/${id}`, {
      method: "PUT",
      body: JSON.stringify(note),
    });
  }

  deleteNote(id: string): Promise<void> {
    return this.request<void>(`/notes/${id}`, {
      method: "DELETE",
    });
  }
}

export const api = new ApiWrapper();

import type { CreateNoteDto, Note, UpdateNoteDto } from "./types/note";
