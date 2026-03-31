<script lang="ts">
  import "../app.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Toasts from "$lib/components/Toasts.svelte";
  import Modal from "$lib/components/Modal.svelte";
  import NoteForm from "$lib/components/NoteForm.svelte";
  import { onMount } from "svelte";
  import { initSync } from "$lib/stores/sync";
  import { createNote } from "$lib/stores/notes";
  import { addToast } from "$lib/stores/ui";

  let { children } = $props();
  
  let showNewNoteModal = $state(false);
  let isSubmitting = $state(false);

  onMount(() => {
    initSync();

    // Global keyboard shortcuts
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'n') {
        e.preventDefault();
        showNewNoteModal = true;
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  });

  async function handleCreateNote(data: any) {
    isSubmitting = true;
    try {
      await createNote(data);
      showNewNoteModal = false;
      addToast({ message: "Note created successfully", type: "success" });
    } catch (e) {
      addToast({ message: "Failed to create note", type: "error" });
    } finally {
      isSubmitting = false;
    }
  }
</script>

<div class="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
  <Header onNewNote={() => showNewNoteModal = true} />
  
  <main class="flex-1 py-8">
    {@render children()}
  </main>

  <Footer />
  
  <Toasts />

  <Modal 
    isOpen={showNewNoteModal} 
    title="Create New Note" 
    onclose={() => showNewNoteModal = false}
  >
    <NoteForm 
      onsubmit={handleCreateNote} 
      oncancel={() => showNewNoteModal = false}
      {isSubmitting}
    />
  </Modal>
</div>
