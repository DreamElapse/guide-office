<template>
  <div class="common-question">
    
  </div>
</template>

<script type="text/ecmascript-6">
  // import * as Helpers from '@state/helpers'
  // import API from '@api'
  const PAGE_NAME = 'COMMON_QUESTION'
  const TITLE = '常见问题'

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

  .common-question
    width: 100vw
    height: 100vh
    box-sizing: border-box
    padding: 3.43vh 2.14vw
    background: #019cfe
    overflow: hidden
</style>
