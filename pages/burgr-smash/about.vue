<script lang="ts" setup>
import type { About } from '~/types/sanity.types';


const query = groq`*[_id == '05fe043f-4edc-48c5-89a8-f3b998d046e5'][0]`
const { data } = await useSanityQuery<About>(query)

</script>

<template>
  <div>
    <PageTitle title="About Burgr" />
    <Card v-if="data"  class="text-center">
      <div class="prose dark:prose-invert">
        <SanityContent :blocks="data.body" class="prose-h2:font prose-h1:font" />
        <h3 class="underline">How to reach us</h3>
        <span class="flex flex-col justify-center">
          <ULink v-if="data.phone" :to="'tel:' + data.phone" >Phone: {{ data.phone }}</ULink>
          <ULink v-if="data.email" :to="'mail:' + data.email" >Email: {{ data.email }}</ULink>
        </span>
        <h4 v-if="data.address?.street" ><UIcon name="i-pixelarticons-pin" /> {{data.address.street}}</h4>
        <p v-if="data.address?.zipcode && data.address.state">{{ data.address.zipcode }} {{ data.address.state }}</p>
        
      </div>
    </Card>
  </div>
</template>

<style>
.font {
  font-family: 'Press Start 2P';
}

h2 {
  font-family: 'Press Start 2P';
}
</style>
