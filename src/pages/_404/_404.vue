<template>
  <div>
    <p class="tip">404</p>
    <p class="text">您访问的页面不存在</p>
  </div>
</template>

<script type="text/ecmascript-6">
  const PAGE_NAME = 'NOT_FOUND'

  export default {
    name: PAGE_NAME,
    page: {
      title: '404',
      meta: [{name: 'description', content: '404'}]
    },
    props: {
      resource: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@design"
  div
    background: #333
    width: 100%
    height: 100vh
    padding-top: 200px
  .tip
    font-size: 160px
    color: #ccc
    text-align: center
  .text
    font-size: 24px
    color: #999
    text-align: center
    margin-top: 40px
</style>
