// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['@nuxt/ui-pro'],
  modules: ["@nuxt/image", "@nuxt/fonts", '@nuxt/ui'],
  ui: {
    icons: ['heroicons', "pixelarticons"]
  },
})