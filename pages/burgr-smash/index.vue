<script lang="ts" setup>

const links = [
  {
    to: '/burgr-smash/menu',
    label: 'Menu'
  },{
    to: '/burgr-smash/about',
    label: 'About Burgr Smash'
  },{
    to: '/burgr-smash/giftcards',
    label: 'Gift Cards'
  },{
    to: '/burgr',
    label: 'Fast travel to Burgr'
  }
]

</script>

<template>
  <div>
    <PageTitle title="BURGR SMASH"/>
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
