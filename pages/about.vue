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
          <div class="infomation">
            <h1 class="title">
              <span class="infomation-title-text">PORI's Web Site</span>
            </h1>
            <p>このサイトはpori(@t_pori418)の個人サイトです。</p>
          </div>
          <div class="infomation">
            <h1 class="title">
              <b-icon
                icon="account"
                size="is-small"
                type="" />
              <span class="infomation-title-text">Profile</span>
            </h1>
            <p>群馬在住ですが、都内の案件をメインでやっています。都内に出ることも多いです。</p>
            <p>主に業務Webシステム構築をしています。</p>
            <p>現在はVue.js/Laravelを使用したSPA/API構成でのwebアプリケーション開発がメインです。環境構築、DB設計からフロントエンド、サーバーサイド共実装、リリース整備などわりと幅広く触っています。</p>
          </div>
          <div class="infomation">
            <h1 class="title">
              <b-icon
                icon="lightbulb"
                size="is-small"
                type="" />
              <span class="infomation-title-text">Skill</span>
            </h1>
            <p>AWS/docker/vagrant/nginx/apache http server</p><br>
            <p>MySQL/SQL Server/DynamoDB</p><br>
            <p>html5/css3/scss/JavaScript/TypeScript/PHP/python</p><br>
            <p>Vue.js/React.js/AngularJS/Laravel/CodeIgniter</p><br>
          </div>
          <div class="infomation">
            <h1 class="title">
              <b-icon
                icon="link"
                size="is-small"
                type="" />
              <span class="infomation-title-text">Links</span>
            </h1>
            <p>・<a href="https://github.com/horitks">github</a></p><br>
            <p>・<a href="https://speakerdeck.com/t_pori418">Speaker Deck</a></p><br>
            <p>・<a href="https://twitter.com/t_pori418?lang=ja">twitter</a></p><br>
            <p>・<a href="https://poriweb.hatenablog.com/">blog</a></p><br>
            <p>・<a href="https://teratail.com/users/thori">teratail</a></p><br>
          </div>
          <div class="infomation">
            <h1 class="title">
              <b-icon
                icon="email"
                size="is-small"
                type="" />
              <span class="infomation-title-text">Contact</span>
            </h1>
            <p>Email: t.pori418@gmail.com</p>
            <br>
            <p>or Twitter DM</p>
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
.has-image-centered {
  margin-left: auto;
  margin-right: auto;
}

.infomation {
  margin: 50px 0;
}

.infomation-title-text {
  margin: 0 10px;
}
</style>
