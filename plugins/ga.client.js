export default defineNuxtPlugin(() => {
  const { $config } = useNuxtApp()
  
  if (process.env.NODE_ENV !== 'production') return

  useHead({
    script: [
      {
        src: 'https://www.google-analytics.com/analytics.js',
        async: true
      }
    ]
  })

  if (process.client) {
    window.ga = window.ga || function() {
      (window.ga.q = window.ga.q || []).push(arguments)
    }
    window.ga.l = +new Date()
    
    window.ga('create', $config.public.gaTrackingId, 'auto')
    
    const router = useRouter()
    router.afterEach((to) => {
      window.ga('set', 'page', to.fullPath)
      window.ga('send', 'pageview')
    })
  }
})
