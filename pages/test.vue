<script lang="ts" setup>

const query = groq`*[_id == 'menyBurgrSmash'][0]{burgers, drinks, sides}`
const { data } = useSanityQuery(query)

console.log(data.value)


</script>

<template>
  <div>
    <Card :is-menu="true" :burgers="data.burgers" :sides="data.sides" :drinks="data.drinks" ></Card>
  </div>
</template>

<style scoped></style>
