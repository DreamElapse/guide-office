<template>
  <div className="empty-page">
    
  </div>
</template>
<script type="text/ecmascript-6">window.close()</script>    
<script type="text/ecmascript-6">
  const PAGE_NAME = 'EMPTY_PAGE'

  export default {
    name: PAGE_NAME,
    page: {
      
    },
    props: {
      
    },
    created() {
      window.close()
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@design"
  .empty-page
    background: #666
    width: 100%
    height: 100vh
    padding-top: 200px
  .tip
    font-size: 160px
    color: #ccc
    text-align: center
  .text
    font-size: 24px
    color: #ccc
    text-align: center
    margin-top: 40px
</style>
