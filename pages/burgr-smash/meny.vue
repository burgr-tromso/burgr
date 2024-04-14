<script lang="ts" setup>

const query = `*[_id == 'ddd42a25-2b92-4f86-8781-eece16f8aeed'][0]{ burgers, drinks, sides, extraStuff }`
const {data} = useSanityQuery(query)
console.log(data.value)

</script>

<template>
<div class="mx-8">
  <PageTitle title="Meny"/>
  <Card :is-menu="true" :burgers="data.burgers" :drinks="data.drinks" :sides="data.sides" :extra-stuff="data.extraStuff" />
</div>
</template>

<style scoped>
</style>
