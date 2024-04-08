<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <div>
    <PageTitle :title="route.params.slug" />
  </div>
</template>

<style scoped></style>
