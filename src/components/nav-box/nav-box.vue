<template>
  <div class="nav-box">
    <div class="left-nav">
      <div class="left-btn" @click="toPage('/')">
        <img v-if="page === 'home'" src="../../assets/home_active.png" alt="" class="icon">
        <img v-else src="../../assets/home.png" alt="" class="icon">
        <span :class="['btn-text', {'active': (page === 'home')}]">首页</span>
      </div>
      <!-- <div v-if="!showLogo" class="left-btn" @click="toPage('/detail')"> -->
      <div v-if="show" class="left-btn" @click="toPage('/detail')">
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
    <div v-if="page === 'home'" class="exit-btn" @click="exitHandle">
      <img src="../../assets/exit.png" alt="" class="exit-icon">
      <span class="exit-text">退出</span>
    </div>
    <img v-if="showLogo" src="../../assets/logo.png" alt="" class="logo">
    <transition name="fade">
      <div v-if="showExit" class="exit-content">
        <div class="exit-bg"></div>
        <div class="exit-context">
          <p class="exit-close" @click="closeExit"></p>
          <img src="../../assets/exit_icon.png" alt="" class="exit-icon">
          <p class="context-title">退出系统</p>
          <p class="context-tip">为确保系统安全，请使用密码退出</p>
          <input key="i" v-model="firstPass" type="text" placeholder="请输入密码" class="exit-input">
          <input key="n" v-model="secondPass" type="text" placeholder="确认密码" class="exit-input">
          <p class="exit-confirm" @click="confirmExit">确认退出</p>
        </div>
      </div>
    </transition>
    
  </div>
 
</template>

<script type="text/ecmascript-6">
  import API from '@api'
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
        topBtn: TOP_BTN,
        show: false,
        showExit: false,
        firstPass: '',
        secondPass: ''
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
      },
      exitHandle() {
        this.showExit = !this.showExit
      },
      closeExit() {
        this.showExit = false
      },
      confirmExit() {
        if (!this.firstPass) {
          this.$toast.show('请输入密码')
          return
        } else if (!this.secondPass) {
          this.$toast.show('请输入确认密码')
          return
        } else if (this.secondPass !== this.firstPass) {
          this.$toast.show('两次输入密码不一致，请从新输入')
          return
        } else if (/[\u4E00-\u9FA5]/g.test(this.firstPass)) {
          this.$toast.show('不支持中文密码')
          return
        }
        API.Global.checkPassword({App_Secret: this.firstPass})
          .then(res => {
            if (+res.returnCode === 1) {
              this.firstPass = ''
              this.secondPass = ''
              if (/密码正确/.test(res.msg)) {
                this.showExit = false
                // window.open('/empty-page','_self')
                window.opener=null;
                window.open('about:blank','_self')
                window.close()
              } else {
                this.$toast.show('密码错误')
              }
              
            }
          })
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
    .exit-btn
      width: 6.25vw
      height: @width
      background: #006AF0
      border-radius: 14px
      display: flex
      flex-direction: column
      align-items: center
      justify-content: center
      position: absolute
      right: 2.97vw
      top: 1.35vw
      .exit-icon
        width: 3.02vw
        height: 2.81vw
      .exit-text
        font-size: 1.28vw
        font-weight: bold
        color: #FFF
        margin-top: 0.52vw

    .exit-bg
      position: fixed
      left: 0
      top: 0
      width: 100%
      height: 100%
      background: rgba(0,0,0,0.8)
      z-index: 99
    .exit-context
      width: 31.14vw  
      height: 27.15vw
      background: #FFF
      border-radius: 14px
      position: fixed
      z-index: 100
      left: 50%
      top: 50%
      transform: translate(-50%, -50%)
      box-sizing: border-box
      padding: 4.58vw 4.8vw
      .context-title
        font-size: 2.19vw
        color: #5794FF
      .context-tip
        font-size: 1.09vw
        margin-top: 0.9vw
        color: #9289A6
        margin-bottom: 1.19vw
      .exit-input
        width: 100%
        height: 2.92vw
        border: 1px solid #B1B3CC
        border-radius: 8px
        color: #333
        font-size: 1.09vw
        padding: 0 1.04vw
        line-height: 2.92vw
        margin-top: 1vw
        &::-webkit-input-placeholder
          color: #B2B2B2
      .exit-confirm
        width: 100%
        height: 2.92vw
        border-radius: 3vw
        background: #5794FF
        text-align: center
        line-height: 2.92vw
        color: #FFF
        font-size: 1.31vw
        margin-top: 1.82vw
      .exit-icon
        width: 2.14vw
        height: 6.82vw
        position: absolute
        right: 5vw
        top: 0
      .exit-close
        width: 1.3vw
        height: @width
        position: absolute
        right: 2.2vw
        top: 2.08vw
        &:before,&:after
          content: ''
          display: block
          width: 1px
          height: 1.5vw
          transform: rotate(45deg)
          position: absolute
          left: 0
          top: 0
          background: #9289A6
        &:after
          transform: rotate(-45deg)




    .logo
      position: absolute
      right: 1.88vw
      top: 2.03vw
      width: 5.42vw
      height: 5.42vw


</style>
