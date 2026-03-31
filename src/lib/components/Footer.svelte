<script lang="ts">
  import { Github } from "lucide-svelte";
</script>

<footer class="mt-auto py-8 border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 backdrop-blur-md">
  <div class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
    <div class="text-sm text-slate-500 dark:text-slate-400">
      &copy; 2026 NoteFlow. All rights reserved.
    </div>
    
    <div class="flex items-center gap-6">
      <a 
        href="https://github.com/MOHIKA-STUDENT/NoteFlow" 
        target="_blank" 
        rel="noopener noreferrer"
        class="flex items-center gap-2 text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors"
      >
        <Github class="w-5 h-5" />
        <span class="text-sm font-medium">GitHub Repository</span>
      </a>
      
      <div class="text-xs text-slate-400">
        Built with <span class="text-primary font-semibold">Svelte 5</span> & <span class="text-primary font-semibold">Tailwind 4</span>
      </div>
    </div>
  </div>
</footer>
