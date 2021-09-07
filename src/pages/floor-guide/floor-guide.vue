<template>
  <div class="floor-guide">
    <div class="page-content">
      <div class="left-nav">
        <div ref="nav" class="left-content">
          <span v-for="(item, index) in navList" :key="index" :class="['nav-item',{'active':navIndex === index}]" @click="changeNav(index)">{{item}}</span>
        </div>
        <img src="../../assets/scroll_more.png" alt="" :class="['scroll-icon',{'active': !hasMore}]" @click="scrollNav">
      </div>
      div.
    </div>
    <div class="bottom-text">操作指引：点击首页 -- 选择查询主列表 -- 选择所属部门 -- 选择列表内容查看办事指南</div>
  </div>
</template>

<script type="text/ecmascript-6">
  // import * as Helpers from '@state/helpers'
  // import API from '@api'
  const PAGE_NAME = 'FLOOR_GUIDE'
  const TITLE = '楼层指引'

  const navList = ['一楼', '一楼', '一楼', '一楼', '一楼', '一楼', '一楼', '一楼', '一楼', '一楼', '一楼', '一楼', '一楼', '一楼', '一楼', '一楼', '一楼', '一楼', '一楼', '一楼', ]
  export default {
    name: PAGE_NAME,
    page: {
      title: TITLE
    },
    data() {
      return {
        navList,
        navIndex: 0,
        hasMore: true
      }
    },
    computed: {
      // ...Helpers.computed,
    },
    methods: {
      // ...Helpers.methods,
      changeNav(index) {
        this.navIndex = index
      },
      scrollNav() {
        console.log(this.$refs.nav.scrollTop, this.$refs.nav.clientHeight, this.$refs.nav.scrollHeight - this.$refs.nav.clientHeight)
        
        if (this.hasMore) {
          this.$refs.nav.scrollTop = this.$refs.nav.scrollTop + 200
        } else {
          this.$refs.nav.scrollTop = this.$refs.nav.scrollTop - 200
        }

        if(this.$refs.nav.scrollTop >= this.$refs.nav.scrollHeight - this.$refs.nav.clientHeight) {
          this.hasMore = false
        } else {
          this.hasMore = true
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@design"

  .floor-guide
    width: 100vw
    height: 100vh
    box-sizing: border-box
    padding: 3.43vh 2.14vw
    background: #019cfe
    overflow: hidden
    position: relative
    .page-content
      margin-top: 14.8vh
      height: 72.76vh
      background: #FFF
      border-radius: 1vw
      padding: 0.26vw
      box-sizing: border-box
      .left-nav
        width: 9.11vw
        height: 100%
        background: #21A5F3
        border-radius: 1vw 0 0 1vw
        overflow: hidden
        display: flex
        flex-direction: column
        align-items: center
      .left-content
        flex: 1
        overflow-y: scroll
        margin-bottom: 1vw
      .scroll-icon
        width: 3.65vw
        height: 2.6vw
        margin-bottom: 1vw
        &.active
          transform: rotate(180deg)
      .nav-item
        width: 9.11vw
        height: 3.44vw
        line-height: @height
        text-align: center
        color: #FFF
        font-size: 1.46vw
        font-weight: bold
        display: block
        margin: 1vw 0
        &.active
          background: #FFF
          color: #21A5F3
          
    .bottom-text
      font-size: 1.61vw
      color: #005EED
      text-shadow: #FFF 2px 0 2px,#FFF 0 2px 2px,#FFF -2px 0 2px,#FFF 0 -2px 2px
      font-weight: bold
      position: absolute
      text-align: center
      width: 100%
      bottom: 3.33vh
      left: 0
</style>
