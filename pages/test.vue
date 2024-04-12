<script lang="ts" setup>
// const sanity = useSanity()
// const query = groq`*[_type == "about"]`



</script>

<template>
  <div>
    <p v-for="item in data" >{{ item.title }} </p>
  </div>
</template>

<style scoped></style>
