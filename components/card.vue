<script lang="ts" setup>
</script>

<template>
  <div class=" rounded-md bg-slate-200 dark:bg-slate-700 bg-opacity-95 max-w-2xl mx-8 md:mx-auto px-8 py-12  border-slate-700 dark:border-slate-200 border-4 shadow-xl space-y-6">
    <slot />
    <RetroLink class="pb-4" label="TILBAKE" to="/burgr" />
  </div>
</template>

<style scoped></style>
