<template>
  <div class="nav-box">
    <div class="left-nav">
      <div class="left-btn" @click="toPage('/')">
        <img v-if="page === 'home'" src="../../assets/home_active.png" alt="" class="icon">
        <img v-else src="../../assets/home.png" alt="" class="icon">
        <span :class="['btn-text', {'active': (page === 'home')}]">首页</span>
      </div>
      <div v-if="!showLogo" class="left-btn" @click="toPage('/detail')">
        <img v-if="page === 'detail'" src="../../assets/detail_active.png" alt="" class="icon">
        <img v-else src="../../assets/detail.png" alt="" class="icon">
        <span :class="['btn-text', {'active': (page === 'detail')}]">局内概况</span>
      </div>
    </div>
    <div class="top-nav">
      <div v-for="(item, index) in topBtn" :key="'n'+index" :class="['nav-item', {'active': navIndex === index}]" @click="toPage(item.route)">
        {{item.name}}
      </div>
    </div>
    <img v-if="showLogo" src="../../assets/logo.png" alt="" class="logo">
  </div>
 
</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'NAV_BOX'

  const TOP_BTN = [
    {name: '办事平台', route: '/service-platform'},
    {name: '楼层指引', route: '/floor-guide'},
    {name: '人员信息', route: '/personnel-info'},
    {name: '政策公告', route: '/announcement'},
    {name: '常见问题', route: '/common-question'},
  ]

  export default {
    name: COMPONENT_NAME,
    props: {
      // page: {
      //   type: String,
      //   default: 'home'
      // }
    },
    data() {
      return {
        topBtn: TOP_BTN
      }
    },
    computed: {
      page() {
        return this.$route.name
      },
      showLogo() {
        let arr = ['detail', 'service-platform', 'floor-guide', 'personnel-info', 'announcement', 'common-question']
        return arr.includes(this.$route.name)
      },
      navIndex() {
        let name = this.$route.name
        let navList = ['service-platform', 'floor-guide', 'personnel-info', 'announcement', 'common-question']
        let index = navList.findIndex(item => {
          return item === name
        })
        return index > -1 ? index : ''
      }
    },
    watch: {
    },
    methods: {
      navClick(index) {
        this.navIndex = index
      },
      toPage(route) {
        this.$router.push(route)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@design"
  .nav-box
    position: absolute
    left: 0
    top: 0
    width: 100%
    padding: 1.35vw 2.29vw
    box-sizing: border-box
    z-index: 100
   .left-nav
      width: 6.6vw
      display: flex  
      flex-direction: column
      align-items: center
      .left-btn
        width: 6.6vw
        height: 6.6vw
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center
        background: #21a5f3
        border-radius: 1vw
        &:first-child
          margin-bottom: 2.86vw
          .icon
            width: 2.86vw
            height: 2.86vw
      .icon
        width: 3.7vw
        height: 3.13vw
      .btn-text
        font-size: 1.25vw
        color: #FFF
        font-weight: bold
        padding-top: 0.63vw
        &.active
          color: #0182F7
    .top-nav
      display: flex
      align-items: center
      height: 3.22vw
      position: absolute
      left: 10.6vw
      top: 3.13vw
      .nav-item
        width: 12.46vw
        height: 3.22vw
        border-radius: 1vw
        background: #FFF
        color: #0074F3
        font-size: $font-size-14
        font-weight: bold
        border: 1px solid #FFF
        margin-right: 1.93vw
        text-align: center
        line-height: 3.22vw
        &.active
          background: #005EED
          color: #FFF
    .logo
      position: absolute
      right: 1.88vw
      top: 2.03vw
      width: 5.42vw
      height: 5.42vw


</style>
