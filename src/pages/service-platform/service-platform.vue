<template>
  <div class="service-platform">
    <div class="page-content">
      <p class="title">湛江市财政局办事指南</p>
      <div class="top-nav">
        <p class="name">
          <span class="text">业务</span>
          <span class="text">科室</span>
        </p>
        <div :class="['nav-list', {'active': showMore}]">
          <span v-for="(item, index) in navList" :key="'n'+index" class="nav-item" @click="toDetail(item.OFFICEID)">{{item.OFFICENAME}}</span>
          <img src="../../assets/arrow_more.png" alt="" :class="['show-more',{'active':showMore}]" @click="showList">
        </div>
      </div>
      <div class="office-guide">
        <div class="guide-box">
          <p v-for="(item, index) in guideList.slice(0, guideList.length/2)" :key="'g'+index" class="guide-item">{{item}}</p>
        </div>
        <div class="guide-box">
          <p v-for="(item, index) in guideList.slice(guideList.length/2)" :key="'u'+index" class="guide-item">{{item}}</p>
        </div>
      </div>
    </div>
    <div class="bottom-text">操作指引：点击首页 -- 选择查询主列表 -- 选择所属部门 -- 选择列表内容查看办事指南</div>
  </div>
</template>

<script type="text/ecmascript-6">
  // import * as Helpers from '@state/helpers'
  import API from '@api'
  const PAGE_NAME = 'SERVICE_PLATFORM'
  const TITLE = '办事平台'

  const GUIDE_LIST = [
    '业务科室指引：',
    '一楼：湛江市工程预结算审核中心;政府采购监管科 ',
    '二楼：会计科;湛江市财政票据服务中心;科教和文化科;市纪委派驻纪检组 ',
    '三楼：经济建设科;资产管理科;机关党委 ',
    '四楼：办公室;三级调研员室;四级调研员室;文印室;保密室 ',
    '五楼：副局长办公室；纪检组长办公室；总会计师办公室；三级调研员室；二级调研员室',
    '六楼：局长办公室;预算科;政府债务管理科',
    '七楼：监督科;行政政法科',
    '八楼：国库科(国库支付办公室) ;人事教育科公开',
    '九楼：社会保障科;综合科;金融科;湛江市农村财务事务中心',     
    '十楼：工贸发展科;法规科;农业农村科',    
    '十一楼：绩效管理科;资源环境科'
  ]

  export default {
    name: PAGE_NAME,
    page: {
      title: TITLE
    },
    data() {
      return {
        // navList: ['湛江市工程预结算审核中心', '政府采购监管科', '会计科', '机关党委', '经济建设科', '资源管理科', '湛江市财政票据服务中心', '会计科', '机关党委', '经济建设科', '资源管理科', '湛江市财政票据服务中心'],
        navList: [],
        allList: [],
        guideList: GUIDE_LIST,
        showMore: false,

      }
    },
    computed: {
      // ...Helpers.computed,
    },
    created() {
      this.getOfficeList()
    },
    methods: {
      // ...Helpers.methods,
      getOfficeList() {
        API.Global.getOfficeList()
          .then(res => {
            if (+res.returnCode === 1) {
              this.navList = res.data.slice(0, 13)
              this.allList = res.data
            }
          })
      },
      showList() {
        this.showMore = !this.showMore
        this.showMore && (this.navList = this.allList.slice(0))
        !this.showMore && (this.navList = this.allList.slice(0, 13))
      },
      toDetail(id) {
        this.$router.push(`/office-detail?id=${id}`)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@design"

  .service-platform
    width: 100vw
    height: 100vh
    box-sizing: border-box
    padding: 3.43vh 2.14vw
    overflow: hidden
    .page-content
      margin-top: 14.8vh
      height: 72.76vh
      background: #FFF
      border-radius: 0.75vw
      .title
        padding-top: 7.4vh
        font-size: 2.5vw
        color: #005EED
        text-align: center
      .top-nav
        margin-top: 6vh
        padding: 0 6.4vw
        display: flex
      .name
        width: 8vw
        height: @width
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center
        background: #333333
        border-radius: 0.75vw
        box-shadow: 0 0 0 0 rgba(110, 107, 107, 0.06)
        font-size: 1.74vw
        flex: 0 0 8vw
        color: #FFF 
      .nav-list
        border: 1px solid #333333;
        box-shadow: 0 0 0 0 rgba(110, 107, 107, 0.06)
        border-radius: 0.75vw
        margin-left: 0.52vw
        padding: 0.64vw 0.23vw
        height: 8vw
        box-sizing: border-box
        flex: 1 1 auto
        overflow: hidden
        position: relative
        transition: all 0.2s
        background: #FFF
        z-index: 2
        &.active
          height: auto
      .nav-item
        padding: 0.72vw 2.26vw
        border-radius: 0.75vw
        line-height: 1
        font-size: 1.12vw
        font-weight: bold
        color: #333
        border: 1px solid #333
        margin: 0.4vw
        display: inline-block
      .show-more
        width: 2.45vw
        height: 1.77vw
        bottom: 1.25vw
        right: 4vw
        position: absolute
        &.active
          transform: rotate(180deg)
    .office-guide
      margin-top: 5vh
      display: flex
      padding-left: 6.45vw
      position: absolute
      bottom: 15vh
      .guide-box
        flex: 1
        color: #333
        &:first-child
          margin-right: 4.4vw
          flex: 0 0 auto
          .guide-item:first-child
            font-weight: bold
            color: #FF8A01
            font-size: 1.52vw
      .guide-item
        font-size: 1.28vw
        line-height: 2

    
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
