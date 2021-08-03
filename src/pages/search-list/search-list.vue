<template>
  <div class="search-list">
    <base-page-header title="搜索借过"> </base-page-header>
  </div>
</template>

<script type="text/ecmascript-6">
  // import * as Helpers from './modules/helpers'
  // import API from '@api'
  const PAGE_NAME = 'SEARCH_LIST'
  const TITLE = '搜索结果'

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

  .search-list
    width: 100vw
    height: 100vh
</style>
