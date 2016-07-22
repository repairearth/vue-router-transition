<template>
  <div>
    <x-header :left-options="{showBack: false, preventGoBack: true}">Wechat</x-header>

    <div style="overflow: hidden;">
      <masker style="border-radius: 2px;">
        <div class="m-img" style="background-image:url(https://cdn.xiaotaojiang.com/uploads/82/1572ec37969ee263735262dc017975/_.jpg)"></div>
        <div slot="content" class="m-title">
          洗颜新潮流！人气洁面皂排行榜
          <br/>
          <span class="m-time">2016-03-18</span>
        </div>
      </masker>
    </div>
  </div>
</template>

<script>
  import xHeader from 'vux-components/x-header'
  import Masker from 'vux-components/masker'

  export default {
    components: {
      xHeader,
      Masker
    }
  }
</script>
