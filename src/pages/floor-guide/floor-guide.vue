<template>
  <div class="floor-guide">
    
  </div>
</template>

<script type="text/ecmascript-6">
  // import * as Helpers from '@state/helpers'
  // import API from '@api'
  const PAGE_NAME = 'FLOOR_GUIDE'
  const TITLE = '楼层指引'

  export default {
    name: PAGE_NAME,
    page: {
      title: TITLE
    },
    data() {
      return {

      }
    },
    computed: {
      // ...Helpers.computed,
    },
    methods: {
      // ...Helpers.methods,
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@design"

  .floor-guide
    width: 100vw
    height: 100vh
    box-sizing: border-box
    padding: 3.43vh 2.14vw
    background: #019cfe
    overflow: hidden
</style>
