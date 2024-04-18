<script lang="ts" setup>
import type { Menu } from '~/types';

const query = groq`*[_id == 'efadea53-c2a7-448d-abf6-36d69011b7f1'][0]{burgers, drinks, sides, extraStuff, allergies, menyDeal}`
const { data } = await useSanityQuery<Menu>(query)

</script>

<template>
  <div>
    <PageTitle title="Menu" />
    <Card :is-menu="true" :burgers="data?.burgers" :drinks="data?.drinks" :sides="data?.sides" :allergies="data?.allergies" :extra-stuff="data?.extraStuff" :menyDeal="data?.menyDeal"  />
  </div>
</template>

<style scoped>
</style>
