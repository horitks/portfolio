export default defineNuxtConfig({
  ssr: false,
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  
  app: {
    head: {
      title: 'portfolio',
      htmlAttrs: {
        lang: 'ja'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:title', content: 'poriweb' },
        { name: 'format-detection', content: 'telephone=no, email=no, address=no' },
        { name: 'description', content: "pori(@t_pori418)の個人サイトです。開発したもの等を載せていくかもしれません。" },
        { name: 'keywords', content: 'poriweb,pori,t_hori418,Web,Vue.js' },
        { name: 'author', content: 'pori' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  runtimeConfig: {
    public: {
      gaTrackingId: process.env.GA_TRACKING_ID || ''
    }
  },

  css: ['bulma/css/bulma.min.css', '@/assets/main.scss'],

  plugins: [
    '~/plugins/utils.client.js',
    '~/plugins/ga.client.js'
  ],

  components: true,

  modules: ['@nuxt/ui'],

  devtools: { enabled: true }
})
