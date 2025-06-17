// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/icon", "@nuxt/image", "@pinia/nuxt"],
  typescript: {
    strict: true,
  },
  css: ["@/assets/scss/main.scss"],
  runtimeConfig: {
    public: {
      baseUrl: process.env.API_BASE_URL,
    },
  },
});
