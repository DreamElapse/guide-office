<template>
  <div class="floor-guide">
    <div class="page-content">
      <div class="left-nav">
        <div ref="nav" class="left-content">
          <span v-for="(item, index) in navList" :key="index" :class="['nav-item',{'active':navIndex === index}]" @click="changeNav(index, item.STOREYID)">{{item.STOREYNAME}}</span>
        </div>
        <img src="../../assets/scroll_more.png" alt="" :class="['scroll-icon',{'active': !hasMore}]" @click="scrollNav">
      </div>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="right-content">
        <img v-if="floorImg" :src="floorImg" alt="" class="floor-img">
        <div class="guide-box">
          <p v-for="(item, index) in floorGuide" :key="index" class="guide-item" @click="toFloor(item.URL)">
            <span class="color-block" :style="{backgroundColor: item.CORLOR}"></span>
            <span>{{item.OFFICENAME}}</span>
          </p>
          <p class="floor-tip">(点击编号查看详情)</p>
        </div>
      </div>
    </div>
    <div class="bottom-text">操作指引：点击首页 -- 选择查询主列表 -- 选择所属部门 -- 选择列表内容查看办事指南</div>
  </div>
</template>

<script type="text/ecmascript-6">
  // import * as Helpers from '@state/helpers'
  import API from '@api'
  const PAGE_NAME = 'FLOOR_GUIDE'
  const TITLE = '楼层指引'

  // const navList = ['一楼', '一楼', '一楼', '一楼', '一楼', '一楼', '一楼', '一楼', '一楼', '一楼', '一楼', '一楼', '一楼', '一楼', '一楼', '一楼', '一楼', '一楼', '一楼', '一楼', ]
  export default {
    name: PAGE_NAME,
    page: {
      title: TITLE
    },
    data() {
      return {
        navList: [],
        navIndex: 0,
        hasMore: true,
        navId: '',
        floorImg: '',
        floorGuide: []
      }
    },
    computed: {
      // ...Helpers.computed,
    },
    created() {
      this.getFloor()
    },
    methods: {
      // ...Helpers.methods,
      getFloor() {
        API.Global.getFloor()
          .then(res => {
            if(+res.returnCode === 1) {
              this.navList = res.data
              this.navId = res.data[0].STOREYID
              this.getFloorDetail()
            }
          })
      },
      getFloorDetail() {
        API.Global.getFloorDetail({StoreyID: this.navId})
          .then(res => {
            this.floorImg = res.data.PHOTOPATH
            this.floorGuide = res.data.STOREYDETAILS
          })
      },
      changeNav(index, id) {
        this.navIndex = index
        this.navId = id
        this.getFloorDetail()
      },
      scrollNav() {
        console.log(this.$refs.nav.scrollTop, this.$refs.nav.clientHeight, this.$refs.nav.scrollHeight - this.$refs.nav.clientHeight)
        
        if (this.hasMore) {
          this.$refs.nav.scrollTop = this.$refs.nav.scrollTop + 200
        } else {
          this.$refs.nav.scrollTop = this.$refs.nav.scrollTop - 200
        }

        // if(this.$refs.nav.scrollTop >= this.$refs.nav.scrollHeight - this.$refs.nav.clientHeight) {
        //   this.hasMore = false
        // } else {
        //   this.hasMore = true
        // }
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
      display: flex
      .left-nav
        width: 9.11vw
        height: 100%
        background: #21A5F3
        border-radius: 1vw 0 0 1vw
        overflow: hidden
        display: flex
        flex-direction: column
        align-items: center
        flex: 0 0 9.11vw
      .left-content
        flex: 1
        overflow-y: scroll
        margin-bottom: 1vw
        height: 100%
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
      .right-content
        flex: 1
        box-sizing: border-box
        padding: 1.6vw 1.52vw
        position: relative
      .floor-img
        width: 72%
      
      .guide-box
        border: 2px solid #000000
        border-radius: 0.78vw
        position: absolute
        right: 1.2vw
        bottom: 1vw
        padding: 1.4vw   
      .guide-item
        display: flex       
        align-items: center
        color: #000
        font-size: 1.3vw
        padding: 0.3vw
      .color-block
        width: 4.32vw
        height: 1.2vw
        margin-right: 0.89vw
        display: block
        border-radius: 5vw
      .floor-tip
        font-size: 1.3vw
        color: #999
        margin-top: 0.5vw
        text-align: center
       
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
