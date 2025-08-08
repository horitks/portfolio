<template>
  <div class="page-content">
    <div class="container">
      <div class="columns is-1 is-horizontal-center about-columns">
        <div class="column is-two-fifths">
          <div class="has-text-centered">
            <figure class="image is-128x128 has-image-centered">
              <img src="/icons/iconCoffee.jpg">
            </figure>
            <h1 class="title">
              Takashi Hori
            </h1>
          </div>
        </div>
        <div class="column">
          <div class="information">
            <h1 class="title">
              <span class="information-title-text">PORI's Web Site</span>
            </h1>
            <p>このサイトはpori(@t_pori418)の個人サイトです。</p>
          </div>
          <div class="information">
            <h1 class="title">
              <Icon name="mdi:account" size="24"/>
              <span class="information-title-text">Profile</span>
            </h1>
            <p>事業会社・テックカンパニーでエンジニアリングマネージャーとして従事</p>
            <p>特にweb開発を中心として、開発・プロマネ・プロセス設計などいろいろやります。</p>
          </div>
          <div class="information">
            <h1 class="title">
              <Icon name="mdi:lightbulb" size="24"/>
              <span class="information-title-text">Skill</span>
            </h1>
            <ul>
              <li>PHP  Python  JavaScript  TypeScript  Ruby  Go  C#（.NET Core）</li>
              <li>Vue.js  Nuxt.js  React.js  Angular  HTML</li>
              <li>Laravel（PHP）  Django（Python）  Ruby on Rails（Ruby）  .NET Core（C#）</li>
              <li>AWS</li>
            </ul>
          </div>
          <div class="information">
            <h1 class="title">
              <Icon name="mdi:link" size="24"/>
              <span class="information-title-text">Links</span>
            </h1>
            <ul>
              <li><a href="https://github.com/horitks">github</a></li>
              <li><a href="https://speakerdeck.com/t_pori418">Speaker Deck</a></li>
              <li><a href="https://twitter.com/t_pori418?lang=ja">X (Twitter)</a></li>
              <li><a href="https://poriweb.hatenablog.com/">Blog</a></li>
              <li><a href="https://teratail.com/users/thori">teratail</a></li>
            </ul>
          </div>
          <div class="information">
            <h1 class="title">
              <Icon name="mdi:email" size="24"/>
              <span class="information-title-text">Contact</span>
            </h1>
            <p>Email: t.pori418@gmail.com</p>
            <p>or <a href="https://twitter.com/t_pori418?lang=ja">X (Twitter)</a> DM</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  pageTransition: 'slide-right'
})
</script>

<style lang="scss" scoped>
.information a {
  background: royalblue;
  border-radius: 4px;
  padding: 8px;
  color: white;
  text-decoration: none;
}

.has-image-centered {
  margin-left: auto;
  margin-right: auto;
}

.has-text-centered h1.title {
  margin-top: 1rem; /* replace <br> after profile image */
}

.information {
  margin: 50px 0;
}

.information-title-text {
  margin: 0 10px;
}

.information p {
  margin: 0; /* reset to control spacing consistently */
}

.information p + p {
  margin-top: 8px; /* replace <br> between paragraphs */
}

.information ul {
  list-style-type: none;
  padding: 0;
}

.information li {
  margin-bottom: 24px;
}

@media screen and (max-width: 768px) {
  .about-columns {
    flex-direction: column;
  }
  
  .information {
    margin: 30px 0;
  }
}
</style>
