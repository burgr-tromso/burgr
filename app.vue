<script setup lang="ts">

useSeoMeta({
  ogImage: '/favicon.ico',
  title: 'Burgr',
  ogTitle: 'Burgr',
  description: 'The homepage of Burgr and Burgr Smash, located in Tromsø',
  ogDescription: 'The homepage of Burgr and Burgr Smash, located in Tromsø'
})
</script>



<template>
  <div class=" min-h-dvh pb-16 overscroll-none bg-fixed bg-cover bg-center bg-[url('/assets/background-light.png')] dark:bg-[url('/assets/background-dark.png')]" >
    <UApp>
      <NuxtPage/>
    </UApp>
  </div>
</template>
