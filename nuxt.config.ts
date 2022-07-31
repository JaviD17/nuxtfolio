import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  modules: ["@nuxtjs/tailwindcss"],
  vite: {
    build: {
      rollupOptions: {
        external: [
          "/assets/images/Nuxtfolio.png",
          "/assets/images/profile.jpg",
          "/assets/images/Arrive.png",
        ],
      },
    },
  },
});
