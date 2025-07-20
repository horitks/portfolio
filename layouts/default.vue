<template>
  <div>
    <transition name="fade" appear>
      <section class="hero is-dark is-fullheight">
        <header class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <NuxtLink class="navbar-item" to="/">
                <h1>PORIWEB.com</h1>
              </NuxtLink>
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
                <NuxtLink
                  :class="{'is-active': route.path === '/'}"
                  class="navbar-item"
                  to="/"
                >Home</NuxtLink>
                <NuxtLink
                  :class="{'is-active': route.path === '/about'}"
                  class="navbar-item"
                  to="/about"
                >About</NuxtLink>
              </div>
            </div>
          </div>
        </header>
        <slot />
        <footer class="hero-foot">
          <div class="content has-text-centered">
            <small>
              Copyright © Takashi Hori All Rights Reserved.
            </small>
          </div>
        </footer>
      </section>
    </transition>
  </div>
</template>

<script setup>
const route = useRoute()
const menuActive = ref(false)

const menuToggle = () => {
  menuActive.value = !menuActive.value
}
</script>


<style lang="scss" scoped>
.navbar-item h1 {
  font-size: 28px;
}

.hero.is-fullheight {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.hero-foot {
  margin-top: auto;
}
</style>
