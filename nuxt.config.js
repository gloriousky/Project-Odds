import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@element-plus/nuxt",
    "nuxt-icon",
    "nuxt-swiper",
  ],
  base: "/",
  server: {
    port: 3000,
  },
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    chunkSizeWarningLimit: 10000,
  },
  ssr: true,
});
