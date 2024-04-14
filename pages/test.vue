<script lang="ts" setup>
const query = groq`*[_type == 'menu' && slug.current == 'burgr']`
const { data } = await useSanityQuery(query)
console.log(data)

</script>

<template>
  <div class="mx-auto">
    {{ data }}
  </div>
</template>

<style scoped></style>
