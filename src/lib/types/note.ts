export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  isPinned?: boolean;
}

export type CreateNoteDto = Omit<Note, "id" | "createdAt">;
export type UpdateNoteDto = Partial<CreateNoteDto>;
