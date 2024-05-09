<script setup lang="ts">

useSeoMeta({
  ogImage: '/favicon.ico',
  title: 'Burgr',
  ogTitle: 'Burgr',
  description: 'The homepage of Burgr and Burgr Smash, located in Tromsø',
  ogDescription: 'The homepage of Burgr and Burgr Smash, located in Tromsø'
})

useHead({
  script: [
    { src: "https://analytics.eu.umami.is/script.js", defer: true, async: false, data-website-id="b9ba91cb-2d4d-422a-9694-b0245977dd3e"}
  ]
})
</script>



<template>
  <div class=" min-h-dvh overscroll-none bg-fixed bg-cover bg-center bg-[url('/assets/background-light.png')] dark:bg-[url('/assets/background-dark.png')]" >
    <UPage>
      <UPageBody>
        <NuxtPage/>
      </UPageBody>
    </UPage>
  </div>
</template>

<style scoped> 
</style>
