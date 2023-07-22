// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', "@nuxtjs/tailwindcss", "nuxt-icon"],
  content: {
    documentDriven: true,
    navigation: {
      fields: ["cover"],
    },
  },
})
