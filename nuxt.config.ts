// nuxt.config.ts
export default defineNuxtConfig({
  modules:['@sidebase/nuxt-auth'],
  auth: {
    baseURL: process.env.AUTH_ORIGIN,
    isEnabled: true,
    provider: {
        type: 'authjs'
      }
},
  devtools: { enabled: true },
  css: [
    '@/assets/css/tailwind.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  typescript: {
    typeCheck: true,
    shim: false
  }})
