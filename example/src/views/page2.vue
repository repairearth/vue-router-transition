<template>
  <div>
    <x-header>Page 2</x-header>

    <group title="万物苍生，幻化由心！">
      <cell title="Go to Page 4" link="/page/4" inline-desc='link="/page/4"'></cell>
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
