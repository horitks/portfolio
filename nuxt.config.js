export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'portfolio',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'poriweb' },
      {
        name: 'format-detection',
        content: 'telephone=no, email=no, address=no'
      },
      { hid: 'description', name: 'description', content: "pori(@t_pori418)の個人サイトです。開発したもの等を載せていくかもしれません。" },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'poriweb,pori,t_hori418,Web,Vue.js'
      },
      { hid: 'author', name: 'author', content: 'pori' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  env: {
    gaTrackingId: process.env.GA_TRACKING_ID || ''
  },

  loading: { color: '#fff' },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '@/assets/main.scss', lang: 'scss' }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/utils.js',
    { src: '~plugins/ga.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
