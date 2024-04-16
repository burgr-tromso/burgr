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

const query = groq`*[_id == 'efadea53-c2a7-448d-abf6-36d69011b7f1'][0]{burgers, drinks, sides, extraStuff, allergies}`
const { data } = await useSanityQuery(query)
console.log(data)

</script>

<template>
  <div>
    <PageTitle title="Menu" />
    <Card :is-menu="true" :burgers="data.burgers" :drinks="data.drinks" :sides="data.sides" :allergies="data.allergies" :extra-stuff="data.extraStuff"  />
  </div>
</template>

<style scoped>
</style>
