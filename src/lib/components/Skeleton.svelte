<script lang="ts">
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {#each Array(8) as _}
    <div class="h-[200px] bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 space-y-4">
      <div class="flex justify-between items-center">
        <div class="h-6 w-2/3 bg-slate-200 dark:bg-slate-800 rounded-lg animate-pulse"></div>
        <div class="h-8 w-8 bg-slate-100 dark:bg-slate-800 rounded-lg animate-pulse"></div>
      </div>
      <div class="space-y-2">
        <div class="h-4 w-full bg-slate-100 dark:bg-slate-800 rounded animate-pulse"></div>
        <div class="h-4 w-5/6 bg-slate-100 dark:bg-slate-800 rounded animate-pulse"></div>
        <div class="h-4 w-4/6 bg-slate-100 dark:bg-slate-800 rounded animate-pulse"></div>
      </div>
      <div class="pt-4 flex justify-between items-center border-t border-slate-50 dark:border-slate-800">
        <div class="h-4 w-24 bg-slate-100 dark:bg-slate-800 rounded animate-pulse"></div>
        <div class="flex gap-2">
          <div class="h-8 w-8 bg-slate-100 dark:bg-slate-800 rounded-lg animate-pulse"></div>
          <div class="h-8 w-8 bg-slate-100 dark:bg-slate-800 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>
  {/each}
</div>
