<script lang="ts" setup>

const types = [
  {
    label: 'Burgere',
    key: 'burgers'
  },
  {
    label: 'Sides',
    key: 'sides'
  },
  {
    label: 'Drikke',
    key: 'drinks'
  }
]

const query = groq`*[_id == 'fee4228d-eee8-4911-a53f-7a9e5dab63a2'][0]{burgers, drinks, sides}`
const { data } = useSanityQuery(query)

</script>

<template>
  <div class="mx-8">
    <PageTitle title="Meny" />
    <Card :is-menu="true" :burgers="data.burgers" :drinks="data.drinks" :sides="data.sides"/>
  </div>
</template>

<style scoped>
</style>
