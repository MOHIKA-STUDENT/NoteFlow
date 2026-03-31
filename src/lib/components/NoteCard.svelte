<script lang="ts">
  import { Trash2, Edit3, Pin, Calendar, Sparkle } from "lucide-svelte";
  import { fade, fly } from "svelte/transition";
  import type { Note } from "../types/note";
  import { clsx } from "clsx";

  let { note, index = 0, onEdit, onDelete, onPin } = $props<{
    note: Note;
    index?: number;
    onEdit: (note: Note) => void;
    onDelete: (id: string) => void;
    onPin: (id: string) => void;
  }>();

  const formattedDate = $derived((() => {
    const rawDate = note.createdAt;
    const date = typeof rawDate === "number" 
      ? new Date(rawDate < 1e11 ? rawDate * 1000 : rawDate)
      : new Date(rawDate as string);
    
    return date.toLocaleDateString(undefined, {
      month: 'short', day: 'numeric', year: 'numeric'
    });
  })());
</script>

<article
  in:fly={{ y: 20, delay: index * 100, duration: 500 }}
  class={clsx(
    "group relative flex flex-col h-full rounded-[2rem] transition-all duration-500",
    "glass-panel hover:shadow-premium-hover hover:-translate-y-2",
    note.isPinned 
      ? "ring-2 ring-primary/40 bg-primary/[0.03] dark:bg-primary/[0.05] shadow-lg shadow-primary/10" 
      : "hover:ring-2 hover:ring-primary/30"
  )}
>
  <!-- Pinned Indicator -->
  {#if note.isPinned}
    <div class="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-xl transform rotate-12 z-20 group-hover:rotate-0 transition-all duration-500">
      <Pin class="w-5 h-5 text-white fill-current" />
    </div>
  {/if}

  <div class="p-8 flex-1">
    <div class="flex items-start justify-between gap-4 mb-5">
      <h3 class="font-black text-2xl text-slate-900 dark:text-white tracking-tight line-clamp-2 leading-tight group-hover:text-primary transition-colors duration-300">
        {note.title || "Untethered Thought"}
      </h3>
    </div>

    <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-6 whitespace-pre-wrap font-semibold tracking-tight">
      {note.content || "Silence is the space for new ideas..."}
    </p>
  </div>

  <div class="px-8 py-6 bg-slate-50/20 dark:bg-slate-950/20 rounded-b-[2rem] flex items-center justify-between border-t border-white/5 dark:border-slate-800/10 backdrop-blur-3xl">
    <div class="flex items-center gap-3">
      <div class="flex flex-col">
        <span class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-none mb-1">Created At</span>
        <span class="text-xs font-black text-slate-600 dark:text-slate-300 uppercase tracking-tighter">{formattedDate}</span>
      </div>
    </div>

    <!-- Actions: Always visible on mobile, hover on desktop -->
    <div class="flex items-center gap-2 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-0 lg:translate-y-2 group-hover:translate-y-0">
      <button
        onclick={() => onPin(note.id)}
        class={clsx(
          "p-3 rounded-2xl transition-all shadow-sm active:scale-90",
          note.isPinned 
            ? "text-primary bg-primary/10 hover:bg-primary/20" 
            : "text-slate-400 hover:text-primary hover:bg-white dark:hover:bg-slate-900"
        )}
        title={note.isPinned ? "Unpin note" : "Pin note"}
      >
        <Pin class={clsx("w-4 h-4", note.isPinned && "fill-current")} />
      </button>

      <button
        onclick={() => onEdit(note)}
        class="p-3 text-slate-400 hover:text-primary hover:bg-white dark:hover:bg-slate-900 rounded-2xl transition-all shadow-sm active:scale-90"
        title="Edit note"
      >
        <Edit3 class="w-4 h-4" />
      </button>
      <button
        onclick={() => onDelete(note.id)}
        class="p-3 text-slate-400 hover:text-rose-500 hover:bg-white dark:hover:bg-slate-900 rounded-2xl transition-all shadow-sm active:scale-90"
        title="Delete note"
      >
        <Trash2 class="w-4 h-4" />
      </button>
    </div>
  </div>
</article>
