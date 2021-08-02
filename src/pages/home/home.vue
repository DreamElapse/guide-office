<template>
  <div class="home">
    <div class="left-nav">

    </div>
    <div class="top-nav">

    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  // import * as Helpers from './modules/helpers'
  // import API from '@api'

  const PAGE_NAME = 'HOME'
  const TITLE = '首页'

  export default {
    name: PAGE_NAME,
    page: {
      title: TITLE
    },
    components: {
      
    },
    data() {
      return {
        
      }
    },
    computed: {
      // ...Helpers.computed,
    },
    created() {
      
    },
    mounted() {
      
    },
    beforeDestroy() {
      
    },
    methods: {
      // ...Helpers.methods,
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@design"

  .home
    width: 100vw
    height: 100vw
    background: #0199fd
    box-sizing: border-box
    padding: 0.1vw
    .left-nav
      width 0.06vw
      
  .bottom
    bottom: 20px
</style>
