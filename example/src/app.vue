<template>
  <router-view
    class="r-view animated"
    transition
    v-r-transition="routerTransition"
    keep-alive>
  </router-view>
</template>

<script>
  export default {
    data () {
      return {
        routerTransition: {
          forward: 'slideRL',
          back: 'slideLR'
        }
      }
    }
  }
</script>

<style>
  @import "~animate.css/animate.min.css";
  .r-view {
    position: absolute;
    width: 100%;
    min-height: 100%;
    animation-duration: .5s;
  }
</style>
