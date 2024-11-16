// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  modules: [
    "@nuxt/image",
    "@nuxt/fonts",
    '@nuxt/ui',
    "@nuxtjs/sanity",
    'nuxt-icon',
    '@nuxt/scripts'
  ],
  css: ['~/assets/css/main.css'],
  sanity: {
    projectId: '09r4q6pe',
    apiVersion: '2022-03-07'
  },
  compatibilityDate: '2024-11-16'
})