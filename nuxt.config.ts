// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  extends: ['@nuxt/ui-pro'],
  modules: ["@nuxt/image", "@nuxt/fonts", '@nuxt/ui', "@nuxtjs/sanity"],
  ui: {
    icons: ['heroicons', "pixelarticons"]
  },
  app: {
    pageTransition: {name:'page', mode: 'in-out'}
  },
  sanity: {
    projectId: '09r4q6pe'
  }
})