<template>
  <div class="page-header">
    <div class="page-header">
      <span class="back-btn" @click="pageBack">返回</span>
      <span class="title">{{title}}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'PAGE_HEADER'

  export default {
    name: COMPONENT_NAME,
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    data() {
      return {

      }
    },
    methods: {
      pageBack() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@design"

  .page-header
    height: 5.4vh
    .back-btn
      width: 9.66vw
      height: 5.4vh
      line-height: @height
      text-align: center
      border-radius: 1vw
      background: #FFF
      box-shadow: 0 0 0 0 rgba(110, 107, 107, 0.06)
      font-size: 1.74vw
      color: #006AF0
      position: absolute
      left: 2.14vw
      top: 3.34vh
    .title
      text-align: center
      height: 5.4vh
      line-height: 5.4vh
      font-size: 2.17vw
      font-weight: bold
      color: #FFF
      display: block
</style>
