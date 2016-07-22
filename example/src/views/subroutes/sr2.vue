<template>
  <div>
    <x-header :left-options="{showBack: false, preventGoBack: true}">Message</x-header>

    <div style="overflow: hidden;">
      <masker style="border-radius: 2px;">
        <div class="m-img" style="background-image:url(https://cdn.xiaotaojiang.com/uploads/59/b22e0e62363a4a652f28630b3233b9/_.jpg)"></div>
        <div slot="content" class="m-title">
          美容用品 & 日用品（上）
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
