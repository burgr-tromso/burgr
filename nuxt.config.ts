// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  extends: ['@nuxt/ui-pro'],
  modules: ["@nuxt/image", "@nuxt/fonts", '@nuxt/ui', "@nuxtjs/sanity", 'nuxt-icon'],
  ui: {
    icons: ['heroicons', "pixelarticons", 'ph']
  },
  sanity: {
    projectId: '09r4q6pe',
    apiVersion: '2022-03-07',
    useCdn: false
  }
})