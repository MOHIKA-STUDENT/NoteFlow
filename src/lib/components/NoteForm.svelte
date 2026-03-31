<script lang="ts">
  import type { Note, CreateNoteDto } from "../types/note";
  import { Loader2 } from "lucide-svelte";

  let { initialData, onsubmit, oncancel, isSubmitting } = $props<{
    initialData?: Partial<Note>;
    onsubmit: (data: CreateNoteDto) => void;
    oncancel: () => void;
    isSubmitting: boolean;
  }>();

  let title = $state("");
  let content = $state("");
  let errors = $state({ title: "", content: "" });

  // Update local state when initialData changes (e.g. switching between different notes to edit)
  $effect(() => {
    title = initialData?.title || "";
    content = initialData?.content || "";
    errors = { title: "", content: "" };
  });

  function validate() {
    let isValid = true;
    errors = { title: "", content: "" };

    if (!title.trim()) {
      errors.title = "Title is required";
      isValid = false;
    } else if (title.length > 100) {
      errors.title = "Title is too long (max 100)";
      isValid = false;
    }

    if (!content.trim()) {
      errors.content = "Content is required";
      isValid = false;
    }

    return isValid;
  }

  function handleSubmit() {
    if (validate()) {
      onsubmit({ title, content });
    }
  }
</script>

<div class="space-y-6">
  <div class="space-y-2">
    <label for="title" class="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">Note Title</label>
    <input
      id="title"
      type="text"
      bind:value={title}
      placeholder="Give it a name..."
      class="premium-input"
    />
    {#if errors.title}
      <p class="text-xs text-rose-500 font-bold ml-1 animate-pulse">{errors.title}</p>
    {/if}
  </div>

  <div class="space-y-2">
    <label for="content" class="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">Note Content</label>
    <textarea
      id="content"
      bind:value={content}
      placeholder="What's on your mind?"
      rows="8"
      class="premium-input resize-none"
    ></textarea>
    {#if errors.content}
      <p class="text-xs text-rose-500 font-bold ml-1 animate-pulse">{errors.content}</p>
    {/if}
  </div>

  <div class="flex items-center justify-end gap-3 pt-6">
    <button
      onclick={oncancel}
      class="px-6 py-3 text-slate-400 dark:text-slate-500 font-bold hover:text-slate-900 dark:hover:text-white transition-colors"
    >
      Discard
    </button>
    <button
      onclick={handleSubmit}
      disabled={isSubmitting}
      class="btn-primary min-w-[140px] flex items-center justify-center gap-2"
    >
      {#if isSubmitting}
        <Loader2 class="w-4 h-4 animate-spin" />
        <span>Saving...</span>
      {:else}
        <span>Store Note</span>
      {/if}
    </button>
  </div>
</div>
