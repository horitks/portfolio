<template>
  <div class="layout-wrapper">
    <transition name="fade" appear>
      <div class="layout-container">
        <header class="navbar is-dark">
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
        <main class="main-content">
          <slot />
        </main>
        <footer class="footer-fixed">
          <div class="content has-text-centered">
            <small>
              Copyright © Takashi Hori All Rights Reserved.
            </small>
          </div>
        </footer>
      </div>
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

.layout-wrapper {
  background-color: #363636;
}

.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: white;
}

.navbar {
  flex-shrink: 0;
}

.main-content {
  flex: 1 0 auto;
}

.footer-fixed {
  flex-shrink: 0;
  padding: 1.5rem 0;
}
</style>
