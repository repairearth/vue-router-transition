<template>
  <div>
    <div class="center">
      <svg style="width:60px;height:60px;" version="1.1" id="图形" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1024px" height="1024px" viewBox="0 0 1024 1024" enable-background="new 0 0 1024 1024" xml:space="preserve"><path class="svgpath" data-index="path_0" fill="#35495e" d="M512 816.64 51.2 985.6l460.8-947.2 460.8 947.2L512 816.64 512 816.64zM509.44 207.36 189.44 862.72l317.44-117.76L506.88 207.36 509.44 207.36zM509.44 207.36" /></svg>

      <h1 class="vux-title" style="display:none;">
        <span class="demo-icon" slot="icon" style="font-size:60px;color:#35495e;display: block;">&#xe637;</span>
      </h1>
      <p class="vux-notice">Vue router transition demo</p>
      <p class="vux-notice">Powered by Vux</p>
    </div>
    <group>
      <cell title="Demo" link="/page/1" value="Forward">
        <span class="demo-icon" slot="icon" style="color:#F70968">&#xe633;</span>
      </cell>
      <cell title="UI" link="http://github.com/airyland/vux" value="Vux">
        <span class="demo-icon" slot="icon" style="color:#F70968;">&#xe630;</span>
      </cell>
      <cell title="Github" link="https://github.com/weinot/vue-router-transition" value="Star me">
        <span class="demo-icon" slot="icon" style="color:#35495e;">&#xe62f;</span>
      </cell>
    </group>
  </div>
</template>

<script>
  import Cell from 'vux-components/cell'
  import Group from 'vux-components/group'

  export default {
    components: {
      Cell,
      Group
    },
    data () {
      return {
        version: '1.0.0'
      }
    }
  }
</script>

<style>
  @import '../style.css';
  .center {
    margin-top: 15px;
    text-align: center;
  }
  .vux-notice {
    color: #666;
    line-height: 40px;
  }
  .vux-title {
    vertical-align: middle;
    text-align: center;
    color: #04BE02;
    display: inline-block;
    width: 75px;
    height: 75px;
    line-height: 75px;
    border-radius: 50%;
  }
  body {
    font-family: Helvetica, sans-serif;
    background-color: #fbf9fe;
    padding-bottom: 50px;
  }
</style>
