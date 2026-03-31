<script lang="ts">
  import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";
  import { CheckCircle, AlertCircle, Info, RefreshCw, X, RotateCcw } from "lucide-svelte";
  import { toasts, removeToast } from "../stores/ui";

  const icons = {
    success: CheckCircle,
    error: AlertCircle,
    info: Info,
    sync: RefreshCw
  };

  const colors = {
    success: "bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-900/50",
    error: "bg-rose-50 text-rose-800 border-rose-200 dark:bg-rose-950/30 dark:text-rose-400 dark:border-rose-900/50",
    info: "bg-primary/10 text-primary border-primary/20 dark:bg-primary/20 dark:text-primary-light",
    sync: "bg-indigo-50 text-indigo-800 border-indigo-200 dark:bg-indigo-950/30 dark:text-indigo-400 dark:border-indigo-900/50"
  };
</script>

<div class="fixed bottom-8 right-8 z-[100] flex flex-col gap-4 max-w-sm w-full">
  {#each $toasts as toast (toast.id)}
    {@const Icon = icons[toast.type]}
    <div
      in:fly={{ x: 50, duration: 400 }}
      out:fade={{ duration: 200 }}
      class="flex items-center gap-4 p-5 rounded-3xl border shadow-2xl backdrop-blur-xl {colors[toast.type]} group"
    >
      <div class="shrink-0 p-2 bg-white/20 dark:bg-black/20 rounded-xl">
        <Icon class="w-5 h-5 {toast.type === 'sync' ? 'animate-spin' : ''}" />
      </div>
      
      <div class="flex-1 min-w-0">
        <p class="text-sm font-black tracking-tight">{toast.message}</p>
        
        {#if toast.action}
          <button
            onclick={() => {
              toast.action?.onClick();
              removeToast(toast.id);
            }}
            class="mt-3 flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 text-[10px] font-black uppercase tracking-widest rounded-xl shadow-lg border border-white/20 dark:border-slate-800/50 hover:scale-105 active:scale-95 transition-all text-slate-900 dark:text-white"
          >
            <RotateCcw class="w-3 h-3" />
            {toast.action.label}
          </button>
        {/if}
      </div>

      <button
        onclick={() => removeToast(toast.id)}
        class="shrink-0 p-2 opacity-0 group-hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/10 rounded-xl transition-all"
        aria-label="Dismiss"
      >
        <X class="w-4 h-4" />
      </button>
    </div>
  {/each}
</div>
