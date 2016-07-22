<template>
  <div>
    <x-header :left-options="{showBack: false, preventGoBack: true}">Explore</x-header>

    <div style="overflow: hidden;">
      <masker style="border-radius: 2px;">
        <div class="m-img" style="background-image:url(https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg)"></div>
        <div slot="content" class="m-title">
          远离车内毒气，车载空气净化器精选
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
