// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "nuxt-vitest"],
  css: ["@/assets/scss/main.scss"],
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Quiz app",
      meta: [{ name: "description", content: "Yasna Team's coding challenge" }],
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@use '@/assets/_vars.scss' as *;",
        },
      },
    },
  },
});
