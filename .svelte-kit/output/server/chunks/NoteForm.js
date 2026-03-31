import { w as writable, g as get, d as derived } from "./index.js";
import { set } from "idb-keyval";
import { s as sanitize_props, a as spread_props, b as slot, f as escape_html, aa as attr } from "./index2.js";
import "clsx";
import { I as Icon } from "./Icon.js";
function X($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.446.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["path", { "d": "M18 6 6 18" }],
    ["path", { "d": "m6 6 12 12" }]
  ];
  Icon($$renderer, spread_props([
    { name: "x" },
    $$sanitized_props,
    {
      /**
       * @component @name X
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTggNiA2IDE4IiAvPgogIDxwYXRoIGQ9Im02IDYgMTIgMTIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/x
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
const BASE_URL = "https://665df053ce350b91d2d37c86.mockapi.io/api/v1";
class ApiWrapper {
  async request(endpoint, options = {}) {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers
      }
    });
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }
    return response.json();
  }
  getNotes(page = 1, limit = 20, search = "") {
    let url = `/notes?page=${page}&limit=${limit}&sortBy=createdAt&order=desc`;
    if (search) url += `&search=${search}`;
    return this.request(url);
  }
  createNote(note) {
    return this.request("/notes", {
      method: "POST",
      body: JSON.stringify(note)
    });
  }
  updateNote(id, note) {
    return this.request(`/notes/${id}`, {
      method: "PUT",
      body: JSON.stringify(note)
    });
  }
  deleteNote(id) {
    return this.request(`/notes/${id}`, {
      method: "DELETE"
    });
  }
}
const api = new ApiWrapper();
const syncStatus = writable("synced");
const syncQueue = writable([]);
const QUEUE_KEY = "note-sync-queue";
async function persistQueue(queue) {
  await set(QUEUE_KEY, queue);
}
async function addToQueue(action) {
  syncQueue.update((q) => {
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
let isProcessing = false;
async function processQueue() {
  if (isProcessing) return;
  const currentQueue = get(syncQueue);
  if (currentQueue.length === 0) {
    syncStatus.set("synced");
    return;
  }
  isProcessing = true;
  syncStatus.set("syncing");
  const [action, ...remaining] = currentQueue;
  try {
    switch (action.type) {
      case "CREATE":
        await api.createNote(action.data);
        break;
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
  } catch (error) {
    console.error("Sync error:", error);
    syncStatus.set("error");
    isProcessing = false;
  }
}
const notes = writable([]);
const isLoading = writable(false);
const searchQuery = writable("");
const sortBy = writable("createdAt");
const sortOrder = writable("desc");
const filteredNotes = derived(
  [notes, searchQuery, sortBy, sortOrder],
  ([$notes, $search, $sortBy, $sortOrder]) => {
    let result = $notes.filter(
      (note) => note.title.toLowerCase().includes($search.toLowerCase()) || note.content.toLowerCase().includes($search.toLowerCase())
    );
    result.sort((a, b) => {
      let valA = a[$sortBy] ?? "";
      let valB = b[$sortBy] ?? "";
      if ($sortBy === "createdAt") {
        valA = new Date(valA).getTime();
        valB = new Date(valB).getTime();
      }
      if (valA < valB) return $sortOrder === "asc" ? -1 : 1;
      if (valA > valB) return $sortOrder === "asc" ? 1 : -1;
      return 0;
    });
    return result;
  }
);
async function createNote(dto) {
  const tempId = crypto.randomUUID();
  const tempNote = {
    ...dto,
    id: tempId,
    createdAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  notes.update((n) => [tempNote, ...n]);
  await addToQueue({ type: "CREATE", data: dto, tempId });
}
async function updateNote(id, dto) {
  notes.update((n) => n.map((note) => note.id === id ? { ...note, ...dto } : note));
  await addToQueue({ type: "UPDATE", id, data: dto });
}
const toasts = writable([]);
function addToast(toast) {
  const id = crypto.randomUUID();
  const newToast = { ...toast, id };
  toasts.update((t) => [...t, newToast]);
  if (toast.duration !== 0) {
    setTimeout(() => {
      removeToast(id);
    }, toast.duration || 5e3);
  }
  return id;
}
function removeToast(id) {
  toasts.update((t) => t.filter((toast) => toast.id !== id));
}
function Modal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { isOpen, title, children, onclose } = $$props;
    if (isOpen) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-sm flex items-center justify-center p-4"><div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800"><div class="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between"><h2 class="text-xl font-bold text-slate-900 dark:text-white">${escape_html(title)}</h2> <button class="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors">`);
      X($$renderer2, { class: "w-5 h-5" });
      $$renderer2.push(`<!----></button></div> <div class="p-6">`);
      children($$renderer2);
      $$renderer2.push(`<!----></div></div></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function NoteForm($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { initialData, onsubmit, oncancel, isSubmitting } = $$props;
    let title = initialData?.title || "";
    let content = initialData?.content || "";
    $$renderer2.push(`<div class="space-y-4"><div class="space-y-1.5"><label for="title" class="text-sm font-semibold text-slate-700 dark:text-slate-300">Title</label> <input id="title" type="text"${attr("value", title)} placeholder="Enter title..." class="w-full px-4 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"/> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="space-y-1.5"><label for="content" class="text-sm font-semibold text-slate-700 dark:text-slate-300">Content</label> <textarea id="content" placeholder="Start typing..." rows="6" class="w-full px-4 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none">`);
    const $$body = escape_html(content);
    if ($$body) {
      $$renderer2.push(`${$$body}`);
    }
    $$renderer2.push(`</textarea> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="flex items-center justify-end gap-3 pt-4"><button class="px-5 py-2 text-slate-600 dark:text-slate-400 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors">Cancel</button> <button${attr("disabled", isSubmitting, true)} class="px-5 py-2 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed">${escape_html(isSubmitting ? "Saving..." : "Save Note")}</button></div></div>`);
  });
}
export {
  Modal as M,
  NoteForm as N,
  X,
  addToast as a,
  sortBy as b,
  createNote as c,
  sortOrder as d,
  searchQuery as e,
  filteredNotes as f,
  isLoading as i,
  notes as n,
  syncStatus as s,
  toasts as t,
  updateNote as u
};
