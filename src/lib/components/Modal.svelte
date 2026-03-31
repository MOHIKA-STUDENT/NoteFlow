<script lang="ts">
  import { X } from "lucide-svelte";
  import { fade, scale } from "svelte/transition";
  import { onMount } from "svelte";

  let { isOpen, title, onclose, children } = $props<{
    isOpen: boolean;
    title: string;
    onclose: () => void;
    children: any;
  }>();

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Escape" && isOpen) {
      onclose();
    }
  }

  onMount(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  });
</script>

{#if isOpen}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    transition:fade={{ duration: 200 }}
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-md"
    onclick={onclose}
  >
    <div
      transition:scale={{ start: 0.95, duration: 200 }}
      class="glass-panel w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden"
      onclick={(e) => e.stopPropagation()}
    >
      <div class="px-8 py-6 border-b border-white/10 dark:border-slate-800/20 flex items-center justify-between bg-white/50 dark:bg-slate-900/50">
        <h2 class="text-xl font-black text-slate-900 dark:text-white tracking-tight">{title}</h2>
        <button
          onclick={onclose}
          class="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors text-slate-400 hover:text-slate-900 dark:hover:text-white"
          aria-label="Close modal"
        >
          <X class="w-5 h-5" />
        </button>
      </div>
      
      <div class="p-8">
        {@render children()}
      </div>
    </div>
  </div>
{/if}
