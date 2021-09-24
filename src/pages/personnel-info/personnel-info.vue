<template>
  <div class="personnel-info">
    <div class="page-content">
      <div class="left-nav">
        <span v-for="(item, index) in navList" :key="index" :class="['nav-item',{'active':navIndex === index}]" @click="changeNav(index, item.LEVELID)">{{item.LEVELNAME}}</span>
      </div>

      <div class="right-content">
        <div class="top-content">
          <div class="search-box">
            <img src="../../assets/search.png" alt="" class="search-icon">
            <input v-model="keyword" type="text" class="search-input">
            <span class="search-btn" @click="search">搜索人员</span>
          </div>
          <p class="tip">注：点击头像可查看人员详细信息</p>
        </div>
        <div ref="personnelBox" class="personnel-box">
          <div v-if="personnelList.length" ref="personnelList" class="personnel-list">
            <div v-for="(item, index) in personnelList" :key="index" class="personnel-item" @click="toPerson(item.PERSONID)">
              <img :src="item.PHOTOPATH" alt="" class="personnel-avat">
              <p class="name">{{item.NAME}}</p>
              <p class="text">{{item.JOBNAME}}</p>
              <p v-if="navIndex !== 0" class="text">{{item.STOREYNAME}}-{{item.ROOMNUMBER}}</p>
            </div>
          </div>
          <img v-else src="../../assets/no_list.png" alt="" class="no-list">
        </div>
      </div>
    </div>
    <div class="bottom-text">操作指引：点击首页 -- 选择查询主列表 -- 选择所属部门 -- 选择列表内容查看办事指南</div>
  </div>
</template>

<script type="text/ecmascript-6">
  // import * as Helpers from '@state/helpers'
  import API from '@api'
  const PAGE_NAME = 'PERSONNEL_INFO'
  const TITLE = '人员信息'

  export default {
    name: PAGE_NAME,
    page: {
      title: TITLE
    },
    data() {
      return {
        navList: [],
        navIndex: 0,
        navId: '',
        personnelList: [],
        hasGetmore: false,
        personTotal: 10,
        keyword: '',
        page: 1
      }
    },
    computed: {
      // ...Helpers.computed,
    },
    created() {
      this.getPersonType()
    },
    beforeDestroy() {
      this.$refs.personnelBox && this.$refs.personnelBox.removeEventListener('scroll', this.scrollFun)
    },
    methods: {
      // ...Helpers.methods,
      getPersonType() {
        API.Global.getPersonType()
          .then(res => {
            if(+res.returnCode === 1) {
              this.navList = res.data
              this.navId = res.data[0].LEVELID
              this.getPersonList()
            }
          })
      },
      getPersonList() {
        if(this.hasGetmore || this.personnelList.length >= +this.personTotal) return
        this.hasGetmore = true
        let data = {
          LevelID: +this.navId,
          Pagesize: 10,
          CurrentPage: this.page,
          Key: this.keyword
        }
        API.Global.getPersonList(data)
          .then(res => {
            if (+res.returnCode === 1) {
              this.page ++
              this.personnelList = [...this.personnelList, ...res.data.OfficePersonList]
              this.personTotal = res.data.TotalRecords
              this.$nextTick(() => {
                this.$refs.personnelBox.addEventListener('scroll', this.scrollFun, false)
              })
              setTimeout(() => {
                this.hasGetmore = false
              }, 200)
            }
          })
      },
      scrollFun() {
        let boxHeight = this.$refs.personnelBox && this.$refs.personnelBox.offsetHeight
        let listHeight = this.$refs.personnelList && this.$refs.personnelList.offsetHeight
        let scrollTop = this.$refs.personnelBox && this.$refs.personnelBox.scrollTop
        if (scrollTop >= listHeight-boxHeight-100) {
          this.getPersonList()
        }
      },
      changeNav(index, id) {
        this.navIndex = index
        this.navId = id
        this.page = 1
        this.personnelList = []
        this.personTotal = 10
        this.getPersonList()
      },
      search() {
        this.page = 1
        this.personnelList = []
        this.personTotal = 10
        this.getPersonList()
      },
      toPerson(id) {
        this.$router.push(`/personnel-message?id=${id}`)
      }

    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@design"

  .personnel-info
    width: 100vw
    height: 100vh
    box-sizing: border-box
    padding: 3.43vh 2.14vw
    overflow: hidden
    position: relative
    .page-content
      margin-top: 14.8vh
      height: 72.76vh
      background: #FFF
      border-radius: 1vw
      padding: 0.26vw
      display: flex
      box-sizing: border-box
      .left-nav
        width: 9.11vw
        height: 100%
        background: #21A5F3
        border-radius: 1vw 0 0 1vw
        overflow: hidden
        flex: 0 0 9.11vw
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
        display: flex
        flex-direction: column
        height: 100%
        overflow: hidden
        .top-content
          display: flex
          align-items: center
          justify-content: space-between
          padding-right: 2vw
        .search-box
          display: flex
          align-items: center
          background: #EDF3FB
          height: 3.39vw
          width: 32.4vw
        .search-icon
          width: 1.77vw
          height: 1.77vw
          margin: 0 0.94vw
        .search-input
          background: #EDF3FB
          height: 3.39vw
          line-height: @height
          font-size: 1.47vw
          color: $color-text-main
          flex: 1
        .search-btn
          width: 7.6vw
          height: 3.39vw
          line-height: @height
          text-align: center
          color: #FFF
          background: #01A1FF
          font-size: 1.3vw
        .tip
          font-size: 1.3vw
          color: #B2B2B2
        .personnel-box
          flex: 1
          overflow-y: scroll
          margin-top: 3vw
          position: relative
        .personnel-list
          display: flex
          flex-wrap: wrap
          padding: 0 5vw
        .personnel-item
          text-align: center
          font-size: 1.3vw
          color: #999999
          width: 11vw
          flex: 0 0 11vw
          white-space: nowrap
          padding: 0 4vw 3vw 0
          &:nth-child(5n)
            padding-right: 0
        .personnel-avat
          width: 7vw
          height: 9.92vw
        .text
          text-overflow: ellipsis
          overflow: hidden
          margin-top 0.6vw
        .name
          font-size: 1.52vw
          color: #000
          margin-top 0.6vw
    .no-list
      width: 20vw
      position: absolute
      left: 50%
      top: 50%
      transform: translate(-50%, -50%)


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
