export default defineNuxtConfig({
  app: {
    head: {
      title: 'ERP System', 
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'وصف قصير للمشروع' },
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
    '~/public/dist/libs/apexcharts/dist/apexcharts.min.js',
    '~/public/dist/libs/jsvectormap/dist/js/jsvectormap.min.js',
    '~/public/dist/libs/jsvectormap/dist/maps/world.js',
    '~/public/dist/libs/jsvectormap/dist/maps/world-merc.js',
    '~/public/dist/js/tabler.min.js',
    '~/public/dist/js/demo.min.js',
    '~/public/dist/js/demo-theme.min.js'
  ],
})
