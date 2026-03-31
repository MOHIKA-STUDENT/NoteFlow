<script lang="ts">
  import { page } from "$app/stores";
  import { Home, ArrowLeft } from "lucide-svelte";
</script>

<div class="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
  <div class="relative mb-8">
    <h1 class="text-9xl font-black text-slate-100 dark:text-slate-900 select-none">
      404
    </h1>
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
        <Home class="w-12 h-12 text-primary" />
      </div>
    </div>
  </div>

  <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-4">
    Oops! Page Not Found
  </h2>
  
  <p class="text-slate-500 dark:text-slate-400 max-w-md mb-8">
    The page you're looking for doesn't exist or has been moved. 
    Let's get you back to your notes.
  </p>

  <a
    href="/"
    class="flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:-translate-y-0.5 active:scale-95"
  >
    <ArrowLeft class="w-5 h-5" />
    Back to Home
  </a>
</div>
