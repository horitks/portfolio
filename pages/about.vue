<template>
  <div class="hero-body">
    <div class="container">
      <div class="columns is-1 is-horizontal-center">
        <div class="column is-two-fifths">
          <div class="has-text-centered">
            <figure class="image is-128x128 has-image-centered">
              <img src="/icons/iconCoffee.jpg">
            </figure>
            <br>
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
              <b-icon
                icon="account"
                size="is-small"
                type="" />
              <span class="information-title-text">Profile</span>
            </h1>
            <p>神奈川⇆東京⇄群馬</p>
            <p>Web Developer</p>
            <p>シェアリングプラットフォーム事業のサーバーサイドエンジニアをやりつつ、バックオフィス系のSaaSの立ち上げエンジニアをやっています。AWS等を利用したアーキテクト検討/設計/構築等も行なっています。過去の経歴としては環境構築、DB設計からフロントエンド、サーバーサイド共実装、リリース整備などわりと幅広く触っています。</p>
          </div>
          <div class="information">
            <h1 class="title">
              <b-icon
                icon="lightbulb"
                size="is-small"
                type="" />
              <span class="information-title-text">Skill</span>
            </h1>
            <p>☆☆☆</p>
            <p>AWS/docker/MySQL/Laravel/PHP/Python/Vue.js/Nuxt.js/JavaScript/TypeScript</p><br>
            <p>☆☆</p>
            <p>SQLServer/DynamoDB/.NET Core/Ruby on Rails/React.js/HTML/CSS</p><br>
            <p>☆</p>
            <p>Firebase/Django/Go/Angular</p><br>
          </div>
          <div class="information">
            <h1 class="title">
              <b-icon
                icon="link"
                size="is-small"
                type="" />
              <span class="information-title-text">Links</span>
            </h1>
            <p><a href="https://github.com/horitks">github</a></p><br>
            <p><a href="https://speakerdeck.com/t_pori418">Speaker Deck</a></p><br>
            <p><a href="https://twitter.com/t_pori418?lang=ja">Twitter</a></p><br>
            <p><a href="https://poriweb.hatenablog.com/">Blog</a></p><br>
            <p><a href="https://teratail.com/users/thori">teratail</a></p><br>
          </div>
          <div class="information">
            <h1 class="title">
              <b-icon
                icon="email"
                size="is-small"
                type="" />
              <span class="information-title-text">Contact</span>
            </h1>
            <p>Email: t.pori418@gmail.com</p>
            <br>
            <p>or <a href="https://twitter.com/t_pori418?lang=ja">Twitter</a> DM</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: 'slide-right'
}
</script>

<style lang="scss" scoped>
a {
  background: royalblue;
  border-radius: 4px;
  padding: 8px;
}

.has-image-centered {
  margin-left: auto;
  margin-right: auto;
}

.information {
  margin: 50px 0;
}

.information-title-text {
  margin: 0 10px;
}
</style>
