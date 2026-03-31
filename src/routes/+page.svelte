<script lang="ts">
  import { onMount } from "svelte";
  import { 
    filteredNotes, 
    fetchNotes, 
    notes, 
    isLoading, 
    searchQuery,
    sortBy,
    sortOrder,
    updateNote,
    deleteNote
  } from "$lib/stores/notes";
  import { addToast } from "$lib/stores/ui";
  import NoteCard from "$lib/components/NoteCard.svelte";
  import Skeleton from "$lib/components/Skeleton.svelte";
  import EmptyState from "$lib/components/EmptyState.svelte";
  import Modal from "$lib/components/Modal.svelte";
  import NoteForm from "$lib/components/NoteForm.svelte";
  import SortDropdown from "$lib/components/SortDropdown.svelte";
  import { Zap, Info, Trash2 } from "lucide-svelte";
  import type { Note } from "$lib/types/note";
  import { fade, fly } from "svelte/transition";

  let editingNote = $state<Note | null>(null);
  let noteToDeleteId = $state<string | null>(null);
  let isUpdating = $state(false);
  let currentPage = $state(1);

  onMount(() => {
    fetchNotes();
  });

  const pinnedNotes = $derived($filteredNotes.filter(n => n.isPinned));
  const otherNotes = $derived($filteredNotes.filter(n => !n.isPinned));

  async function handleUpdateNote(data: any) {
    if (!editingNote) return;
    isUpdating = true;
    try {
      await updateNote(editingNote.id, data);
      editingNote = null;
      addToast({ message: "Note evolve successfully", type: "success" });
    } catch (e) {
      addToast({ message: "Evolution failed", type: "error" });
    } finally {
      isUpdating = false;
    }
  }

  async function confirmDelete() {
    if (!noteToDeleteId) return;
    const id = noteToDeleteId;
    noteToDeleteId = null;
    
    const { undo } = await deleteNote(id);
    
    addToast({ 
      message: "Note archived in space", 
      type: "info",
      duration: 10000,
      action: {
        label: "Bring it back",
        onClick: () => {
          undo();
          addToast({ message: "Restored from the void", type: "success" });
        }
      }
    });
  }

  function handlePin(id: string) {
    const note = $notes.find(n => n.id === id);
    if (note) {
      updateNote(id, { isPinned: !note.isPinned } as any);
      addToast({ message: note.isPinned ? "Unpinned from top" : "Pinned to the peak", type: "info" });
    }
  }

  async function loadMore() {
    currentPage++;
    addToast({ message: "Expanding your mind...", type: "info" });
    setTimeout(fetchNotes, 800); 
  }
</script>

<div class="container mx-auto px-4 space-y-12 pb-24">
  <!-- Interactive Dashboard Header -->
  <div in:fade={{ duration: 1000 }} class="glass-panel p-8 md:p-10 rounded-[3rem] flex flex-col md:flex-row justify-between items-start md:items-center gap-8 shadow-premium relative z-20">
    <div class="absolute top-0 right-0 p-8 opacity-10 pointer-events-none overflow-hidden rounded-[3rem] w-full h-full">
       <Zap class="absolute top-8 right-8 w-32 h-32 text-primary" />
    </div>
    
    <div class="relative z-10">
      <h2 class="text-4xl font-black text-slate-900 dark:text-white tracking-tighter leading-none mb-3">
        Infinite Studio
      </h2>
      <div class="flex items-center gap-3">
        <span class="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full border border-primary/20">
          {$filteredNotes.length} inspirations
        </span>
        <span class="text-xs font-bold text-slate-400">|</span>
        <span class="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none">
          Ready to sync
        </span>
      </div>
    </div>

    <SortDropdown />
  </div>

  <!-- Notes Grid Section -->
  {#if $isLoading && $notes.length === 0}
    <Skeleton />
  {:else if $filteredNotes.length === 0}
    <div in:fade>
      <EmptyState type={$searchQuery ? "no-results" : "no-notes"} />
    </div>
  {:else}
    <div class="space-y-16">
      <!-- Pinned Content -->
      {#if pinnedNotes.length > 0}
        <section class="space-y-6">
          <div class="flex items-center gap-3 px-2">
            <div class="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
            <div class="flex items-center gap-2 text-primary font-black uppercase tracking-[0.3em] text-[10px]">
              Critical Focus
            </div>
            <div class="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {#each pinnedNotes as note, i (note.id)}
              <NoteCard 
                {note} 
                index={i}
                onEdit={(n) => editingNote = n}
                onDelete={(id) => noteToDeleteId = id}
                onPin={handlePin}
              />
            {/each}
          </div>
        </section>
      {/if}

      <!-- Main Content Stream -->
      <section class="space-y-6">
        {#if pinnedNotes.length > 0}
           <div class="flex items-center gap-3 px-2">
            <div class="flex items-center gap-2 text-slate-400 font-black uppercase tracking-[0.3em] text-[10px]">
              Stream of Thoughts
            </div>
            <div class="h-px flex-1 bg-gradient-to-r from-slate-200/50 dark:from-slate-800/50 to-transparent"></div>
          </div>
        {/if}
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {#each otherNotes as note, i (note.id)}
            <NoteCard 
              {note} 
              index={i + (pinnedNotes.length)}
              onEdit={(n) => editingNote = n}
              onDelete={(id) => noteToDeleteId = id}
              onPin={handlePin}
            />
          {/each}
        </div>
      </section>

      <!-- Advanced Pagination -->
      {#if $filteredNotes.length >= 20}
        <div class="flex flex-col items-center gap-4 pt-12">
          <button
            onclick={loadMore}
            class="group px-12 py-4 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2rem] font-black text-[11px] uppercase tracking-[0.2em] text-slate-500 hover:text-primary hover:border-primary transition-all active:scale-95 shadow-premium"
          >
            Expand Repository
          </button>
          <div class="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <Info class="w-3 h-3" />
            Infinite scroll coming in v2.0
          </div>
        </div>
      {/if}
    </div>
  {/if}
</div>

<!-- Premium Modals with Svelte 5 logic -->
<Modal
  isOpen={!!editingNote}
  title="Finalize Insight"
  onclose={() => editingNote = null}
>
  {#if editingNote}
    <NoteForm 
      initialData={editingNote}
      onsubmit={handleUpdateNote}
      oncancel={() => editingNote = null}
      isSubmitting={isUpdating}
    />
  {/if}
</Modal>

<Modal
  isOpen={!!noteToDeleteId}
  title="Safety Check"
  onclose={() => noteToDeleteId = null}
>
  <div class="space-y-6 text-center">
    <div class="w-16 h-16 bg-rose-500/10 rounded-full flex items-center justify-center mx-auto mb-2">
      <Trash2 class="w-8 h-8 text-rose-500" />
    </div>
    <div class="space-y-2">
      <h3 class="text-xl font-black text-slate-900 dark:text-white">Relocate to Void?</h3>
      <p class="text-sm text-slate-500 max-w-xs mx-auto">
        You're about to archive this thought. Don't worry, you'll have 10 seconds to recover it.
      </p>
    </div>
    <div class="flex flex-col gap-2 pt-4">
      <button
        onclick={confirmDelete}
        class="w-full py-4 bg-rose-500 text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-rose-600 transition-all active:scale-95 shadow-lg shadow-rose-500/20"
      >
        Confirm Archive
      </button>
      <button
        onclick={() => noteToDeleteId = null}
        class="w-full py-4 text-slate-400 font-bold uppercase tracking-widest text-[10px] hover:bg-slate-100 dark:hover:bg-slate-800 rounded-2xl transition-colors"
      >
        Stay Here
      </button>
    </div>
  </div>
</Modal>
