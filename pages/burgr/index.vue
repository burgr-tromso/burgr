<script lang="ts" setup>


const links = [
  {
  to: '/burgr/menu',
  label: 'Menu'
  },{
  to: '/burgr/about',
  label: 'About Burgr'
  },{
  to: '/burgr/giftcards',
  label: 'Gift Cards'
  },{
  to: '/burgr-smash',
  label: 'Fast travel to Burgr Smash'
  },{
    to: '/',
    label: 'To home Menu'
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
