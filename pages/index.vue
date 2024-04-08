<script lang="ts" setup></script>

<template>
  <div>
    <h1 class="font text-8xl text-center pt-24" >
      Burgr
    </h1>
    <div class="font text-center my-24 flex flex-col">
      <NuxtLink class="group" to="/test1" ><UIcon class=" opacity-0 group-hover:opacity-100 group-aria-selected:opacity-100" name="i-pixelarticons-play"/>Meny 1</NuxtLink>
      <NuxtLink class="group" to="/test2" ><UIcon class=" opacity-0 group-hover:opacity-100 group-aria-selected:opacity-100" name="i-pixelarticons-play"/>Meny 2</NuxtLink>
      <NuxtLink class="group" to="/test3" ><UIcon class=" opacity-0 group-hover:opacity-100 group-aria-selected:opacity-100" name="i-pixelarticons-play"/>Meny 3</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.font {
  font-family: 'Press Start 2P';
}
</style>
