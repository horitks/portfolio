<template>
  <div>
    <section class="hero is-dark is-fullheight">
      <header class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <router-link class="navbar-item" to="/">
              <h1>PORIWEB.com</h1>
            </router-link>
            <span
              :class="{ 'is-active': menuActive }"
              role="button"
              class="navbar-burger burger"
              data-target="navbarBasic"
              @click="menuToggle()"
            >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div
            id="navbarBasic"
            :class="{ 'is-active': menuActive }"
            class="navbar-menu">
            <div class="navbar-end">
              <router-link
                :class="{'is-active': $route.path === '/'}"
                class="navbar-item"
                to="/"
              >Home</router-link>
              <router-link
                :class="{'is-active': $route.path === '/about'}"
                class="navbar-item"
                to="/about"
              >About</router-link>
            </div>
          </div>
        </div>
      </header>
      <nuxt/>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuActive: false
    }
  },
  methods: {
    menuToggle() {
      this.menuActive = !this.menuActive
    }
  }
}
</script>


<style lang="scss" scoped>
.navbar-item h1 {
  font-size: 28px;
}
</style>
