<template>
  <div class="hero-body">
    <div
      :class="{ 'smart-device': device !== 'other' }"
      class="container has-text-centered">
      <div class="columns is-mobile is-centered">
        <div class="column is-narrow">
          <figure class="image is-128x128 main-icon">
            <NuxtLink to="/about">
              <img class="is-rounded" src="/icons/iconCoffee.jpg">
              <div class="middle">
                <div>About</div>
              </div>
            </NuxtLink>
          </figure>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <a class="button is-large" href="https://github.com/horitks">
            <Icon name="mdi:github" size="48"/>
            <span>GitHub</span>
          </a>
        </div>
        <div class="column display-none"/>
        <div class="column display-none"/>
        <div class="column">
          <a class="button is-large" href="https://speakerdeck.com/t_pori418">
            <Icon name="mdi:message-bulleted" size="48"/>
            <span class="is-size-5">Speaker
              <br>Deck
            </span>
          </a>
        </div>
      </div>
      <div class="columns">
        <div class="column display-none"/>
        <div class="column">
          <a class="button is-large" href="https://twitter.com/t_pori418?lang=ja">
            <Icon name="mdi:twitter" size="48"/>
            <span>Twitter</span>
          </a>
        </div>
        <div class="column">
          <a class="button is-large" href="https://poriweb.hatenablog.com/">
            <HatenaIcon width="53" height="72"/>
            <span>Blog</span>
          </a>
        </div>
        <div class="column display-none"/>
      </div>
    </div>
  </div>
</template>

<script setup>
const { $getDevice } = useNuxtApp()
const device = computed(() => $getDevice())

definePageMeta({
  pageTransition: 'slide-left'
})
</script>

<style lang="scss" scoped>
.main-icon {
  cursor: pointer;
}

.main-icon:hover {
  opacity: 0.5;
  cursor: pointer;
  .middle {
    opacity: 1;
  }
}

.middle {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  color: #ffffff;
}

.button {
  height: 150px;
  width: 150px;
  border-radius: 300px;
}

.button:hover {
  box-shadow: 0 0 50px gray;
}

.button:hover:after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: solid thin white;
  animation: wave 2s infinite;
}

.smart-device {
  .button:hover:after,
  .button:active:after,
  .button:focus:after {
    display: none;
  }
}

@keyframes wave {
  from {
    top: 50%;
    left: 50%;
    width: 0%;
    height: 0%;
    box-shadow: 0 0 100px inset white;
  }
  to {
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    opacity: 0;
  }
}

@media screen and (max-width: 768px) {
  .display-none {
    display: none;
  }
}
</style>
