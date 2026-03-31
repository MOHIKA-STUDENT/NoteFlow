<script lang="ts">
  import { Search, Plus, Cloud, CloudOff, RefreshCw, AlertCircle, Trash2, Sparkles } from "lucide-svelte";
  import ThemeToggle from "./ThemeToggle.svelte";
  import { searchQuery } from "../stores/notes";
  import { syncStatus, syncQueue, clearQueue } from "../stores/sync";
  import { clsx } from "clsx";
  import { twMerge } from "tailwind-merge";
  import { addToast } from "../stores/ui";

  let { onNewNote } = $props<{ onNewNote: () => void }>();

  let debounceTimer: any;
  function handleSearch(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      searchQuery.set(value);
    }, 300);
  }

  const syncInfo = $derived({
    icon: $syncStatus === "synced" ? Cloud : $syncStatus === "offline" ? CloudOff : $syncStatus === "syncing" ? RefreshCw : AlertCircle,
    color: $syncStatus === "synced" ? "text-emerald-500" : $syncStatus === "offline" ? "text-slate-400" : $syncStatus === "syncing" ? "text-primary" : "text-rose-500",
    text: $syncStatus === "synced" ? "Synced" : $syncStatus === "offline" ? "Offline" : $syncStatus === "syncing" ? "Syncing" : "Error"
  });

  async function handleClearSync() {
    if (confirm("System Reset: This will clear the pending upload queue to fix connection errors. Local notes will be preserved. Proceed?")) {
      await clearQueue();
      addToast({ message: "System re-aligned successfully", type: "success" });
      setTimeout(() => window.location.reload(), 500); 
    }
  }
</script>

<header class="sticky top-0 z-40 w-full glass-panel border-b border-white/10 dark:border-slate-800/10 ">
  <div class="container mx-auto px-4 h-24 flex items-center justify-between gap-6">
    <!-- Logo as Button -->
    <button 
      class="flex items-center gap-4 group text-left outline-none" 
      onclick={() => window.location.href = '/'}
    >
      <div class="relative w-12 h-12">
        <div class="absolute inset-0 bg-primary/30 rounded-2xl blur-lg group-hover:blur-xl transition-all animate-pulse"></div>
        <div class="relative w-full h-full bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
          <Plus class="w-8 h-8 text-white transform rotate-45" />
        </div>
      </div>
      <div class="hidden md:block">
        <h1 class="text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
          NoteFlow
          <Sparkles class="w-4 h-4 text-primary animate-bounce" />
        </h1>
        <p class="text-[10px] uppercase tracking-[0.2em] font-black text-primary/60 -mt-1">Creative Suite</p>
      </div>
    </button>

    <!-- Ultra Modern Search -->
    <div class="flex-1 max-w-2xl relative group hidden sm:block">
      <div class="absolute inset-0 bg-primary/5 rounded-[2rem] scale-95 opacity-0 group-focus-within:scale-100 group-focus-within:opacity-100 transition-all duration-500"></div>
      <div class="relative flex items-center bg-slate-100/50 dark:bg-slate-950/50 border-2 border-transparent focus-within:border-primary/30 rounded-[2rem] transition-all px-6 py-1">
        <Search class="w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
        <input
          type="text"
          placeholder="What's your next big idea?"
          oninput={handleSearch}
          class="w-full pl-4 pr-4 py-3 bg-transparent outline-none font-bold text-slate-600 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-700"
        />
        <div class="hidden lg:flex items-center gap-1.5 px-3 py-1 bg-white dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800 text-[10px] font-black text-slate-400">
          <span>CTRL</span>
          <span>K</span>
        </div>
      </div>
    </div>

    <!-- Advanced Status & Actions -->
    <div class="flex items-center gap-3">
      <button 
        onclick={handleClearSync}
        class={twMerge(
          "flex flex-col items-center justify-center w-14 h-14 rounded-2xl transition-all shadow-premium border outline-none focus:ring-2 focus:ring-primary/50",
          $syncStatus === 'error' 
            ? "bg-rose-500/10 border-rose-500/50 animate-pulse" 
            : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800"
        )}
        aria-label="Sync status"
      >
        <syncInfo.icon class={clsx("w-5 h-5", $syncStatus === "syncing" && "animate-spin", syncInfo.color)} />
        <span class={clsx("text-[9px] font-black uppercase mt-1", syncInfo.color)}>{syncInfo.text}</span>
      </button>

      <button
        onclick={onNewNote}
        class="btn-primary flex items-center gap-3 sm:px-8 group"
      >
        <Plus class="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
        <span class="hidden lg:block">Add Note</span>
      </button>

      <ThemeToggle />
    </div>
  </div>
</header>
