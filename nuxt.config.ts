// nuxt.config.ts
export default defineNuxtConfig({
  modules:['@sidebase/nuxt-auth'],
  auth: {
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
    typeCheck: true
  }})
