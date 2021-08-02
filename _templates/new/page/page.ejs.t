---
to: "src/pages/<%= h.inflection.dasherize(name) %>/<%= h.inflection.dasherize(name) %>.vue"
---
<template>
  <div class="<%= h.inflection.dasherize(name.replace('_', '')) %>">
    <base-page-header title="<%= title %>"> </base-page-header>
  </div>
</template>

<script type="text/ecmascript-6">
  // import * as Helpers from './modules/helpers'
  // import API from '@api'
  const PAGE_NAME = '<%=  h.inflection.dasherize(name.replace('_', '')).toUpperCase().replace(/-/g, '_')%>'
  const TITLE = '<%= title %>'

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

  .<%= h.inflection.dasherize(name.replace('_', '')) %>
    width: 100%
    background: url("https://minicart.oss-cn-shanghai.aliyuncs.com/shejian_dataview/bg.png")
    background-size: 100% 100%
    height: 100vh
    overflow: hidden
</style>
