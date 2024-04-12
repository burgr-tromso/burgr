<script lang="ts" setup>

defineProps({
  title:String
})

</script>

<template>
  <h1 class="font text-4xl md:text-7xl text-center py-16 select-none" >
    {{ title }}
  </h1>
</template>

<style scoped>
.font { font-family: 'Press Start 2P' }
</style>
