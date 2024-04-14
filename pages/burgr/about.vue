<script lang="ts" setup>

const query = groq`*[_id == '602c9f97-59b6-4089-8611-ea51688e0080'][0]`
const { data } = await useSanityQuery(query)
console.log(data)

</script>

<template>
  <div>
    <PageTitle title="About Burgr" />
    <Card  class="text-center text-white pt-8">
      <div class="prose dark:prose-invert">
        <SanityContent :blocks="data.body" class="prose-h2:font prose-h1:font" />
        <h2>Her finner du oss</h2>
        <!-- <UButtonGroup orientation="vertical">
          <UButton size="xl" v-if="data.phone" :to="'tel:' + data.phone" :label="data.phone" color="gray" icon="i-pixelarticons-device-phone" />
          <UButton size="xl" v-if="data.email" :to="'mail:' + data.email" :label="data.email" color="gray" icon="i-pixelarticons-mail" />
        </UButtonGroup> -->
        <div class="grid grid-cols-3">
          <span class="col-span-1 col-start-2">
            <NuxtLink v-if="data.phone" :to="'tel:' + data.phone" class="w-full" ><UIcon name="i-pixelarticons-device-phone" /> {{ data.phone }}</NuxtLink>
            <ULink icon="i-pixelarticons-mail" v-if="data.email" :to="'mail:' + data.email" class="w-full" ><UIcon name="i-pixelarticons-mail" /> {{ data.email }}</ULink>
          </span>
        </div>
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
