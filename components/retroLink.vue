<script lang="ts" setup>

defineProps({
  label:String,
  to: String
})

</script>

<template>
  <div class="font text-center md:text-3xl ">
    <NuxtLink class="group opacity-85 hover:opacity-100 hover:text-white" :to="to">
      <UIcon class=" opacity-0 group-hover:opacity-100 group-aria-selected:opacity-100" name="i-pixelarticons-chevron-right" />
        {{label}}
      <UIcon class=" opacity-0 group-hover:opacity-100 group-aria-selected:opacity-100" name="i-pixelarticons-chevron-left" />
    </NuxtLink>
  </div>
</template>

<style scoped>
.font { font-family: 'Press Start 2P' }
</style>
