<template>
  <div class="personnel-info">
    <div class="page-content">
      <div class="left-nav">
        <span v-for="(item, index) in navList" :key="index" :class="['nav-item',{'active':navIndex === index}]" @click="changeNav(index)">{{item}}</span>
      </div>

      <div class="right-content">
        <div class="top-content">
          <div class="search-box">
            <img src="../../assets/search.png" alt="" class="search-icon">
            <input type="text" class="search-input">
            <span class="search-btn">搜索人员</span>
          </div>
          <p class="tip">注：点击头像可查看人员详细信息</p>
        </div>
        <div class="personnel-list">
          <div v-for="(item, index) in personnelList" :key="index" class="personnel-item">
            <img :src="item.avat" alt="" class="personnel-avat">
            <p class="name">{{item.name}}</p>
            <p class="text">{{item.business}}</p>
            <p class="text">{{item.office}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-text">操作指引：点击首页 -- 选择查询主列表 -- 选择所属部门 -- 选择列表内容查看办事指南</div>
  </div>
</template>

<script type="text/ecmascript-6">
  // import * as Helpers from '@state/helpers'
  // import API from '@api'
  const PAGE_NAME = 'PERSONNEL_INFO'
  const TITLE = '人员信息'

  const navList = ['局领导', '科长', '科员']

  export default {
    name: PAGE_NAME,
    page: {
      title: TITLE
    },
    data() {
      return {
        navList,
        navIndex: 0,
        personnelList: [
          {avat: '', name: '李曜', business: '党组书记、局长', office: '6楼-601局长办公室'},
          {avat: '', name: '李曜', business: '党组书记、局长', office: '6楼-601局长办公室'},
          {avat: '', name: '李曜', business: '党组书记、局长', office: '6楼-601局长办公室'},
          {avat: '', name: '李曜', business: '党组书记、局长', office: '6楼-601局长办公室'},
          {avat: '', name: '李曜', business: '党组书记、局长', office: '6楼-601局长办公室'},
          {avat: '', name: '李曜', business: '党组书记、局长', office: '6楼-601局长办公室'},
          {avat: '', name: '李曜', business: '党组书记、局长', office: '6楼-601局长办公室'},
          {avat: '', name: '李曜', business: '党组书记、局长', office: '6楼-601局长办公室'},
          {avat: '', name: '李曜', business: '党组书记、局长', office: '6楼-601局长办公室'},
          {avat: '', name: '李曜', business: '党组书记、局长', office: '6楼-601局长办公室'},
          {avat: '', name: '李曜', business: '党组书记、局长', office: '6楼-601局长办公室'},
          {avat: '', name: '李曜', business: '党组书记、局长', office: '6楼-601局长办公室'},
          {avat: '', name: '李曜', business: '党组书记、局长', office: '6楼-601局长办公室'},
        ]
      }
    },
    computed: {
      // ...Helpers.computed,
    },
    methods: {
      // ...Helpers.methods,
      changeNav(index) {
        this.navIndex = index
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
    background: #019cfe
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
        .tip
          font-size: 1.3vw
          color: #B2B2B2
        .personnel-list
          display: flex
          flex-wrap: wrap
        .personnel-item
          text-align: center
          font-size: 1.3vw
          color: #999999
          width: 15vw
          white-space: nowrap
          padding: 3.8vw 1vw 0 0
        .text
          text-overflow: ellipsis
          overflow: hidden
          margin-top 0.6vw
        .name
          font-size: 1.52vw
          color: #000
          margin-top 0.6vw


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
