const pkg = require('./package')

module.exports = {
  mode: 'spa',

  head: {
    htmlAttrs: {
      lang: 'ja'
    },
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'poriweb' },
      {
        name: 'format-detection',
        content: 'telephone=no, email=no, address=no'
      },
      { hid: 'description', name: 'description', content: pkg.description },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'poriweb,pori,t_hori418,Web,Vue.js'
      },
      { hid: 'author', name: 'author', content: 'pori' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src:
          '//cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.min.js'
      },
      { src: '//polyfill.io/v2/polyfill.min.js?features=IntersectionObserver' },
      {
        src:
          '//cdnjs.cloudflare.com/ajax/libs/web-animations/2.3.1/web-animations.min.js'
      }
    ]
  },

  env: {
    gaTrackingId: process.env.GA_TRACKING_ID || ''
  },

  loading: { color: '#fff' },

  css: [{ src: '@/assets/main.scss', lang: 'scss' }],

  plugins: [
    '@/plugins/axios',
    '@/plugins/sanitize',
    { src: '~plugins/ga.js', ssr: false }
  ],

  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy'
  ],

  axios: {},

  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    postcss: {
      plugins: {
        'postcss-preset-env': {
          autoprefixer: { grid: true }
        }
      }
    }
  }
}
