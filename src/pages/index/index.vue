<template>
  <div class="index">
    <nav-box></nav-box>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  // import * as Helpers from './modules/helpers'
  // import API from '@api'
  import NavBox from '@components/nav-box/nav-box'

  const PAGE_NAME = 'INDEX'
  const TITLE = '首页'

  export default {
    name: PAGE_NAME,
    page: {
      title: TITLE
    },
    components: {
      NavBox
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

  .index
    width: 100vw
    height: 100vh
    background: #019cfe
    background: url("../../assets/page_bg.png")
    background-size: 100% 100%
    box-sizing: border-box
    position: relative
    overflow: hidden
        

  .bottom
    bottom: 20px
</style>
