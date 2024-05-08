<script lang="ts" setup>
import type { Menu } from '~/types/sanity.types';

const query = `*[_id == 'ddd42a25-2b92-4f86-8781-eece16f8aeed'][0]{ burgers, drinks, sides, extraStuff, allergies, menyDeal}`
const {data} = await useSanityQuery<Menu>(query)


</script>

<template>
<div>
  <PageTitle title="Meny"/>
  <Card 
    :is-menu="true" 
    :burgers="data?.burgers" 
    :drinks="data?.drinks" 
    :sides="data?.sides" 
    :extra-stuff="data?.extraStuff" 
    :allergies="data?.allergies" 
    :menyDeal="data?.menyDeal" 
  />
</div>
</template>

<style scoped>
</style>
