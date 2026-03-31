import { writable } from "svelte/store";

export type ToastType = "success" | "error" | "info" | "sync";

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export const toasts = writable<Toast[]>([]);

export function addToast(toast: Omit<Toast, "id">) {
  const id = crypto.randomUUID();
  const newToast = { ...toast, id };
  toasts.update(t => [...t, newToast]);

  if (toast.duration !== 0) {
    setTimeout(() => {
      removeToast(id);
    }, toast.duration || 5000);
  }

  return id;
}

export function removeToast(id: string) {
  toasts.update(t => t.filter(toast => toast.id !== id));
}
