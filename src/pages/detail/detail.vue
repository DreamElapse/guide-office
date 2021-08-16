<template>
  <div class="detail">
    <page-header title="局内概况"></page-header>
    <div class="message-content">
      <div class="top-nav">
        <span v-for="(item, index) in navList" :key="'n'+index" :class="['nav-item', {'active':+navIndex === index}]" @click="navClick(index)">{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  // import * as Helpers from '@state/helpers'
  // import API from '@api'
  import PageHeader from '@components/page-header/page-header'
  const PAGE_NAME = 'DETAIL'
  const TITLE = '局内概况'

  export default {
    name: PAGE_NAME,
    components: {
      PageHeader
    },
    page: {
      title: TITLE
    },
    data() {
      return {
        navList: ['局内职能', '内设机构', '直属行政机构', '所属事业单位', '权责清单（政务服务事项实施清单）'],
        navIndex: 0
      }
    },
    computed: {
      // ...Helpers.computed,
    },
    methods: {
      // ...Helpers.methods,
      navClick(index) {
        this.navIndex = index
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@design"

  .detail
    width: 100vw
    height: 100vh
    box-sizing: border-box
    padding: 3.43vh 2.14vw
    background: #019cfe
    overflow: hidden
    .message-content    
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
      .top-nav
        height: 4.57vw
        width: 100%
        display: flex
        align-items: center
        border-radius: 1vw 1vw 0 0
        overflow: hidden
        font-size: 0
      .nav-item
        height: 4.57vw
        line-height: @height
        color: #FFF
        background: #21A5F3
        font-weight: bold
        font-size: $font-size-14
        text-align: center
        flex: 1 1 auto
        border: 0
        &.active
          transition: all 0.2s
          color: #005EED
          background: #FFF
          box-shadow: 0 0 0 0 rgba(110, 107, 107, 0.06)
</style>
