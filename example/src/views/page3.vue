<template>
  <div>
    <x-header :left-options="{showBack: true, preventGoBack: true}" @on-click-back="back">Sub Routes Demo</x-header>
    <router-view
      class="r-view animated"
      transition
      v-r-transition="{forward: 'bounceRL', back: 'bounceLR'}"
      keep-alive>
    </router-view>
    <tabbar>
      <tabbar-item link="/page/3/wechat" selected>
        <img slot="icon" src="../assets/icon_nav_button.png">
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item link="/page/3/message" show-dot>
        <img slot="icon" src="../assets/icon_nav_msg.png">
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item link="/page/3/explore">
        <img slot="icon" src="../assets/icon_nav_article.png">
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item link="/page/3/news">
        <img slot="icon" src="../assets/icon_nav_cell.png">
        <span slot="label">News</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import xHeader from 'vux-components/x-header'
  import { Tabbar, TabbarItem } from 'vux-components/tabbar'

  export default {
    methods: {
      back () {
        console.log(this.$router)
        this.$router.replace('/')
      }
    },
    components: {
      xHeader,
      Tabbar,
      TabbarItem
    }
  }
</script>

<style>
  .weui_tabbar {
    bottom: 5px !important;
  }
  .m-img {
    padding-bottom: 33%;
    display: block;
    position: relative;
    max-width: 100%;
    background-size: cover;
    background-position: 50%;
    cursor: pointer;
    border-radius: 2px;
  }
  .m-title {
    color: #fff;
    text-shadow: 0 0 2px rgba(0,0,0,.5);
    font-weight: 500;
    font-size: 16px;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
  }
</style>
