<script lang="ts" setup>

const query = groq`*[_id == '602c9f97-59b6-4089-8611-ea51688e0080'][0]`
const { data } = await useSanityQuery(query)

</script>

<template>
  <div>
    <PageTitle title="About Burgr" />
    <Card  class="text-center text-white">
      <div class="prose dark:prose-invert">
        <SanityContent :blocks="data.body" class="prose-h2:font" />
        <h2 class="font">Her finner du oss</h2>
        <h4>{{data.address.street}}</h4>
        <p>{{ data.address.zipcode }} {{ data.address.state }}</p>
      </div>
    </Card>
  </div>
</template>

<style>
.font {
  font-family: 'Press Start 2P';
}
</style>
