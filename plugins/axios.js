export default function({ app, redirect }) {
  // app.$axios.defaults.baseURL = ''

  app.$axios.interceptors.response.use(
    response => response,
    error => {
      console.log(error.message)
    }
  )
}
