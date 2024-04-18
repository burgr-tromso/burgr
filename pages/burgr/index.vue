<script lang="ts" setup>


const links = [
  {
  to: '/burgr/menu',
  label: 'Menu',
  prefetch: true
  },{
  to: '/burgr/about',
  label: 'About Burgr'
  },{
  to: 'https://webshop.diggecard.com/no/merchant/2099/20',
  label: 'Gift Cards',
  external: true
  },{
  to: '/burgr-smash',
  label: 'Fast travel to Burgr Smash'
  }
]

</script>

<template>
  <div>
    <PageTitle title="BURGR"/>
    <span class="space-y-4">
      <RetroLink :label="link.label" :to="link.to" v-for="link in links"/>
    </span>
  </div>
</template>

<style scoped>
.font {
  font-family: 'Press Start 2P';
}
</style>
