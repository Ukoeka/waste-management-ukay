// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      apiBase: 'https://lilli-unrestrictable-gayla.ngrok-free.dev',
    },
  },
  devtools: { enabled: true },
})
