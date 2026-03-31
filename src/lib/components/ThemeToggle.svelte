<script lang="ts">
  import { Sun, Moon } from "lucide-svelte";
  import { theme, toggleTheme } from "../stores/theme";
</script>

<button
  onclick={toggleTheme}
  class="group relative p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary transition-all shadow-premium active:scale-95"
  aria-label="Toggle theme"
>
  <div class="relative w-5 h-5 flex items-center justify-center">
    {#if $theme === "dark"}
      <Sun class="w-5 h-5 text-yellow-500 animate-in spin-in-180 duration-500" />
    {:else}
      <Moon class="w-5 h-5 text-slate-700 animate-in spin-in-180 duration-500" />
    {/if}
  </div>
</button>
