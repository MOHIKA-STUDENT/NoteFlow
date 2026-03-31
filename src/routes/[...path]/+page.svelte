<script lang="ts">
  import { fly, fade } from "svelte/transition";
  import { Ghost, Home, ArrowLeft } from "lucide-svelte";
</script>

<div class="min-h-[80vh] flex flex-col items-center justify-center p-4 text-center">
  <div in:fly={{ y: 20, duration: 1000 }} class="relative mb-12">
    <div class="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse"></div>
    <div class="relative w-32 h-32 bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-premium flex items-center justify-center border border-slate-100 dark:border-slate-800">
      <Ghost class="w-16 h-16 text-primary animate-bounce" />
    </div>
    <div class="absolute -top-4 -right-4 px-4 py-2 bg-rose-500 text-white text-xs font-black uppercase tracking-widest rounded-full shadow-lg rotate-12">
      404 Error
    </div>
  </div>

  <div in:fade={{ delay: 300, duration: 800 }} class="space-y-6 max-w-md">
    <h1 class="text-5xl font-black text-slate-900 dark:text-white tracking-tighter">
      Lost in the <span class="text-primary">Flow</span>
    </h1>
    <p class="text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed">
      This thought doesn't exist in our current dimension. It might have been archived or never conceived.
    </p>

    <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
      <button 
        onclick={() => window.history.back()}
        class="flex items-center gap-3 px-8 py-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all active:scale-95"
      >
        <ArrowLeft class="w-4 h-4" />
        Go Back
      </button>
      <a 
        href="/"
        class="flex items-center gap-3 px-8 py-4 bg-primary text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-primary/90 transition-all active:scale-95 shadow-lg shadow-primary/20"
      >
        <Home class="w-4 h-4" />
        Return Home
      </a>
    </div>
  </div>
</div>
