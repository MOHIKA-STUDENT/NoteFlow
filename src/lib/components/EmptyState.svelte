<script lang="ts">
  import { FileQuestion, SearchX } from "lucide-svelte";
  
  let { type = "no-notes" } = $props<{ type?: "no-notes" | "no-results" }>();
</script>

<div class="flex flex-col items-center justify-center py-20 text-center px-4">
  <div class="w-20 h-20 bg-slate-100 dark:bg-slate-900 rounded-3xl flex items-center justify-center mb-6 text-slate-400">
    {#if type === "no-notes"}
      <FileQuestion class="w-10 h-10" />
    {:else}
      <SearchX class="w-10 h-10" />
    {/if}
  </div>
  
  <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">
    {#if type === "no-notes"}
      No notes yet
    {:else}
      No results found
    {/if}
  </h3>
  
  <p class="text-slate-500 dark:text-slate-400 max-w-sm">
    {#if type === "no-notes"}
      Click the "New Note" button to start capturing your thoughts and ideas.
    {:else}
      We couldn't find any notes matching your search. Try adjusting your keywords.
    {/if}
  </p>
</div>
