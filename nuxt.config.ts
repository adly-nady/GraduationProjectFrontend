export default defineNuxtConfig({
  modules: ['nuxt-icon', '@pinia/nuxt','@nuxtjs/tailwindcss','@hypernym/nuxt-gsap'],

  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  css: ['~/assets/css/main.css', '~/assets/css/tailwindcss.css'],
  app: {
    head: {
      htmlAttrs: {
        dir: 'rtl',
        lang: 'ar'
      } ,
      meta: [
        {
          'http-equiv': 'Content-Type',
          content: 'text/html;charset=UTF-8'
        },
      ],
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      apiURL: 'http://127.0.0.1:8000/api',
      baseURL: 'http://127.0.0.1:8000',
      domain: 'http://localhost:3000',
      score: 50,
    },
  },

  plugins: [
   
  ],
})
