<template>
  <div>
    <x-header>Page 1</x-header>

    <group title="天地不仁，以万物为刍狗。">
      <cell title="Go to Page 2" link="/page/2"></cell>
      <cell title="Go to Page 3" link="/page/3/wechat" value='sub routes demo'></cell>
    </group>
  </div>
</template>

<script>
  import xHeader from 'vux-components/x-header'
  import Cell from 'vux-components/cell'
  import Group from 'vux-components/group'

  export default {
    components: {
      xHeader,
      Group,
      Cell
    }
  }
</script>
