<script lang="ts" setup>

const links = [
  {
  to: '/burgr',
  label: 'Burgr'
  },{
  to: '/burgr-smash',
  label: 'Burgr Smash'
  }
]

</script>

<template>
  <div>
    <PageTitle title="Choose your location!"/>
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
