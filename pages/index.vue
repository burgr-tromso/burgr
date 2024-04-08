<script lang="ts" setup>

const links = [
  {
  to: '/meny',
  label: 'Meny'
  },
  {
  to: '/contact',
  label: 'Kontakt Oss'
  },
  {
  to: '/mer',
  label: 'Noe Mer'
  },
]

</script>

<template>
  <div>
    <h1 class="font text-4xl md:text-8xl text-center pt-48 pb-24" >
      Burgr
    </h1>
    <span class="space-y-4">
      <RetroLink class="md:text-2xl" :label="link.label" :to="link.to" v-for="link in links"/>
    </span>
  </div>
</template>

<style scoped>
.font {
  font-family: 'Press Start 2P';
}
</style>
