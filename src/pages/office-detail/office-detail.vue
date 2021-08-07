<template>
  <div class="office-detail">
    <page-header :title="pageTitle"></page-header>
    <div class="page-content">

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  // import * as Helpers from '@state/helpers'
  // import API from '@api'
  import PageHeader from '@components/page-header/page-header'
  const PAGE_NAME = 'OFFICE_DETAIL'
  const TITLE = '科室详情'

  export default {
    name: PAGE_NAME,
    page: {
      title: TITLE
    },
    components: {
      PageHeader
    },
    data() {
      return {
        
      }
    },
    computed: {
      // ...Helpers.computed,
      pageTitle() {
        return this.$route.query ? this.$route.query.id : ''
      }
    },
    methods: {
      // ...Helpers.methods,
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@design"

  .office-detail
    width: 100vw
    height: 100vh
    box-sizing: border-box
    padding: 3.43vh 2.14vw
    background: #019cfe
    overflow: hidden
    .page-content    
      margin-top: 2.3vh
      width: 100%
      height: 86.8vh
      box-sizing: border-box
      padding: 0.21vw 
      background: #FFF
      border-radius: 1vw
      position: relative
      display: flex
      flex-direction: column
      align-items: center
      overflow: hidden
</style>
