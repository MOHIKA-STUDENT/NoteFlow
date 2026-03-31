<script lang="ts">
  import { ChevronDown, Calendar, Type, Hash, Check, SortAsc, SortDesc } from "lucide-svelte";
  import { fade, slide, scale } from "svelte/transition";
  import { sortBy, sortOrder } from "../stores/notes";
  import { clsx } from "clsx";
  import { onMount } from "svelte";

  let isOpen = $state(false);
  let container: HTMLDivElement;

  const options = [
    { id: "createdAt", label: "Date Created", icon: Calendar },
    { id: "title", label: "Alphabetical", icon: Type },
    { id: "id", label: "Reference ID", icon: Hash }
  ] as const;

  const currentOption = $derived(options.find(o => o.id === $sortBy) || options[0]);

  function handleSelect(id: typeof options[number]["id"]) {
    sortBy.set(id);
    if (id === "title" || id === "id") {
      sortOrder.set("asc");
    } else {
      sortOrder.set("desc");
    }
    isOpen = false;
  }

  function toggleOrder() {
    sortOrder.update(o => o === "asc" ? "desc" : "asc");
  }

  // Click outside to close
  onMount(() => {
    const handleClick = (e: MouseEvent) => {
      if (container && !container.contains(e.target as Node)) {
        isOpen = false;
      }
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  });
</script>

<div class="flex items-center gap-2" bind:this={container}>
  <!-- Main Dropdown -->
  <div class="relative">
    <button
      onclick={() => (isOpen = !isOpen)}
      class="flex items-center gap-4 px-6 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-primary/50 transition-all shadow-premium group min-w-[200px]"
    >
      <div class="p-2 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform">
        <currentOption.icon class="w-4 h-4" />
      </div>
      <div class="flex-1 text-left">
        <p class="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">Sort by</p>
        <p class="text-xs font-black text-slate-900 dark:text-white leading-none">{currentOption.label}</p>
      </div>
      <ChevronDown class={clsx("w-4 h-4 text-slate-400 transition-transform duration-300", isOpen && "rotate-180")} />
    </button>

    {#if isOpen}
      <div
        transition:scale={{ start: 0.95, duration: 150 }}
        class="absolute top-full mt-3 left-0 right-0 z-50 p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl backdrop-blur-xl"
      >
        {#each options as option}
          <button
            onclick={() => handleSelect(option.id)}
            class="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
          >
            <div class={clsx(
              "p-2 rounded-xl transition-colors",
              $sortBy === option.id ? "bg-primary text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:text-primary"
            )}>
              <option.icon class="w-4 h-4" />
            </div>
            <span class={clsx(
              "flex-1 text-left text-xs font-bold",
              $sortBy === option.id ? "text-slate-900 dark:text-white" : "text-slate-500"
            )}>
              {option.label}
            </span>
            {#if $sortBy === option.id}
              <Check class="w-4 h-4 text-primary" />
            {/if}
          </button>
        {/each}
      </div>
    {/if}
  </div>

  <!-- Order Toggle -->
  <button
    onclick={toggleOrder}
    class="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-primary/50 transition-all shadow-premium group text-primary active:scale-95"
    title="Toggle Order"
  >
    {#if $sortOrder === "asc"}
      <SortAsc class="w-6 h-6 group-hover:scale-110 transition-transform" />
    {:else}
      <SortDesc class="w-6 h-6 group-hover:scale-110 transition-transform" />
    {/if}
  </button>
</div>
