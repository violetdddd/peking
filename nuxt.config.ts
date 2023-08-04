// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', "@nuxtjs/tailwindcss", "nuxt-icon","@vueuse/nuxt"],
  content: {
    documentDriven: true,
    navigation: {
      fields: ["cover"],
    },
  },
  app: {
    baseURL: "/A-website-script/",
  },
})
