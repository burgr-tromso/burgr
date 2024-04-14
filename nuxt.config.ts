// https://nuxt.com/docs/api/configuration/nuxt-config

import { getIconCollections } from '@egoist/tailwindcss-icons'

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
    icons: ['heroicons', "pixelarticons", 'ph']
  },
  app: {
    pageTransition: {name:'page', mode: 'in-out'}
  },
  sanity: {
    projectId: '09r4q6pe',
    visualEditing: {
      token: process.env.NUXT_SANITY_VISUAL_EDITING_TOKEN,
      studioUrl: process.env.NUXT_SANITY_VISUAL_EDITING_STUDIO_URL
    }
  }
})