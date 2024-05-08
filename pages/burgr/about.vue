<script lang="ts" setup>

const query = groq`*[_id == '602c9f97-59b6-4089-8611-ea51688e0080'][0]`
const { data } = await useSanityQuery(query)

</script>

<template>
  <div>
    <PageTitle class="text-5xl" title="About Burgr" />
    <Card class="text-center">
      <div class="prose dark:prose-invert">
        <SanityContent :blocks="data.body" class="prose-h2:font prose-h1:font" />
        <h3 class="underline">How to reach us</h3>
        <span class="flex flex-col text-center">
          <ULink v-if="data.phone" :to="'tel:' + data.phone" >Phone: {{ data.phone }}</ULink>
          <ULink icon="i-pixelarticons-mail" v-if="data.email" :to="'mail:' + data.email" >Email: {{ data.email }}</ULink>
        </span>
        <h4><UIcon name="i-pixelarticons-pin" /> {{data.address.street}}</h4>
        <p>{{ data.address.zipcode }} {{ data.address.state }}</p>

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
