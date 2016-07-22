<template>
  <div>
    <x-header>Page 4</x-header>

    <group title="圣人不仁，以百姓为刍狗。">
      <cell title="Go to Page 5" link="/page/5" inline-desc='link="/page/5"'></cell>
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
