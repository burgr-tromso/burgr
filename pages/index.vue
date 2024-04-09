<script lang="ts" setup>

const links = [
  {
  to: '/burgr',
  label: 'Burgr'
  },{
  to: '/smash-burgr',
  label: 'Burgr Smash'
  },{
  to: '/about',
  label: 'About Burgr'
  },{
  to: '/gifts',
  label: 'Gift Cards'
  },{
  to: '/contact',
  label: 'Kontakt Oss'
  },
]

</script>

<template>
  <div>
    <PageTitle title="BURGR"/>
    <span class="space-y-4">
      <RetroLink class="md:text-3xl" :label="link.label" :to="link.to" v-for="link in links"/>
    </span>
  </div>
</template>

<style scoped>
.font {
  font-family: 'Press Start 2P';
}
</style>
