<script lang="ts" setup>


const links = [
  {
  to: '/burgr/meny',
  label: 'Meny'
  },{
  to: '/burgr/about',
  label: 'About Burgr'
  },{
  to: '/burgr/gifts',
  label: 'Gift Cards'
  },{
  to: '/burgr/contact',
  label: 'Kontakt Oss'
  },
]

</script>

<template>
  <div>
    <PageTitle title="BURGR"/>
    <span class="space-y-4">
      <RetroLink :label="link.label" :to="link.to" v-for="link in links"/>
      <RetroLink  label="Bytt lokasjon" to="/burgr-smash" />
    </span>
  </div>
</template>

<style scoped>
.font {
  font-family: 'Press Start 2P';
}
</style>
