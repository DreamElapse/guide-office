<template>
  <div class="bottom-btn">
    <div class="bottom-box">
      <p class="box-text" @click="menuHandle"><span>功能视图</span><span :class="['box-icon', {'active': showMenu}]"></span></p>
      <div :class="['btn-box', {'active': showMenu}]">
        <div v-for="(item, index) in btnList" :key="'b'+index" class="btn-item" @click="toPage(item.route)">
          <p class="icon-box">
            <img :src="item.icon" alt="" class="btn-icon">
          </p>
          <span class="item-name">{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'BOTTOM_BTN'

  export default {
    name: COMPONENT_NAME,
    data() {
      return {
        showMenu: false
      }
    },
    computed: {
      btnList() {
        let arr = ['service_icon', 'floor_icon', 'personnel_icon', 'public_icon', 'question_icon']
        let navList = ['/service-platform', '/floor-guide', '/personnel-info', '/announcement', '/common-question']
        let arr2 = ['办事平台', '楼层指引', '人员信息', '政策公告', '常见问答']
        let btnArr = arr.map((item, index) => {
          return {
            icon: require(`@assets/${item}.png`),
            name: arr2[index],
            route: navList[index]
          }
        })
        return btnArr
      }
    
    },
    methods: {
      menuHandle() {
        this.showMenu = !this.showMenu
      },
      toPage(route) {
        this.menuHandle()
        let thisPage = this.$route.name
        if(route.includes(thisPage)) return
        this.$router.push(route)
      },
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@design"

  .bottom-btn
    .bottom-box
      position: fixed
      left: 50%
      bottom: 0
      transform: translate(-50%)
      width: 20.42vw
      height: 2.69vw
      background: #7276f8
      border-radius: 20px 20px 0 0
      margin-top: 5.56vh
      display: flex
      align-items: center
      justify-content: center
      z-index: 10
      .box-text
        width: 20.42vw
        height: 2.69vw
        background: #7276f8
        border-radius: 20px 20px 0 0
        font-size: 1.28vw
        color: #FFF
        display: flex
        align-items: center
        justify-content: center
        position: relative
        z-index: 10

      .box-icon
        width: 1vw
        height: 1.4vw
        margin-left: 0.4vw
        display: flex
        align-items: center
        flex-direction: column
        justify-content: center
        &:before,&:after
          content: ''
          width: 0.4vw
          height: 0.4vw
          margin-top: -0.1vw
          border-right: 3px solid #FFF
          border-bottom: 3px solid #FFF
          transform: rotate(45deg)
          border-radius: 0 0 3px 0
        &:before
          margin-top: -0.3vw
        &.active
          transform: rotate(180deg)
      .btn-box
        position: absolute
        bottom: -15vw
        left: 50%
        width: 61.91vw
        height: 14.95vw
        background: #FFF
        border-radius: 20px
        transform: translate(-50%)
        display: flex
        align-items: center
        justify-content: center
        z-index: 5
        opacity: 0
        box-shadow: 0 0 6px 1px rgba(50,50,50,0.1)
        transition: all 0.2s
        &.active
          bottom: 1.38vw
          opacity: 1
        .btn-item
          display: flex
          flex-direction: column
          justify-content: center
          align-items: center
          margin-right: 3.6vw
          &:last-child
            margin-right: 0
        .icon-box
          background: #56B8FF
          width: 6.78vw
          height: @width
          border-radius: 50%
          display: flex
          justify-content: center
          align-items: center
        .btn-icon
          width: 2.6vw 
          height: @width
        .item-name
          font-size: 1.3vw
          color: #666666
          margin-top: 0.68vw
          
</style>
