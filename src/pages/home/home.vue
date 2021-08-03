<template>
  <div class="home">
    <img src="../../assets/logo.png" alt="" class="logo">
    <span class="title">欢迎使用</span>
    <div class="search-box">
      <div class="search-content">
        <img src="../../assets/search.png" alt="" class="search-icon">
        <span class="search-line"></span>
        <input type="text" placeholder="请输入科室 、人员、事件进行查询" class="search-input">
      </div>
      <span class="search-btn">搜索</span>
    </div>
    <div class="bottom-text">操作指引：点击首页 -- 选择查询主列表 -- 选择所属部门 -- 选择列表内容查看办事指南</div>
  </div>
</template>

<script type="text/ecmascript-6">
  // import * as Helpers from './modules/helpers'
  // import API from '@api'

  const PAGE_NAME = 'HOME'
  const TITLE = '首页'

  export default {
    name: PAGE_NAME,
    page: {
      title: TITLE
    },
    components: {
      
    },
    data() {
      return {
        
      }
    },
    computed: {
      // ...Helpers.computed,
    },
    created() {
      
    },
    mounted() {
      
    },
    beforeDestroy() {
      
    },
    methods: {
      // ...Helpers.methods,
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@design"

  .home
    width: 100vw
    height: 100vh
    display: flex
    flex-direction: column
    align-items: center
    justify-content: space-between
    padding: 27.59vh 0 3.33vh
    box-sizing: border-box
    .logo
      width: 11.46vw
      height: 11.46vw
      margin-bottom: 5.83vh 
    .title
      font-size: 7.23vw
      margin-bottom: 5.65vh
      color: #FFF
    .search-box
      display: flex
      aline-items: center
      justify-content: center
      height: 4.66vw
      line-height: 4.66vw
      margin-bottom: 13.5vh
      .search-content
        background: #FFF
        height: 4.66vw
        display: flex
        align-items: center
        padding: 0 1.35vw
      .search-btn
        width: 8.76vw
        height: 4.66vw
        font-size: 1.79vw
        color: #FFF
        text-align: center
        background: #006AF0
      .search-icon
        width: 2.34vw
        height: @width
        margin-right: 1.3vw
      .search-line
        width: 2px
        display: block
        background: #d0d0d0
        height: 2.03vw
        margin-right: 1.5vw
      .search-input
        background: #fff
        border: 0
        outline: none
        color: $color-text-main
        height: 4.66vw
        width: 40vw
        font-size: 1.74vw
        &::-webkit-input-placeholder
          color: #C0C0C0
          font-size: 1.74vw
    .bottom-text
      font-size: 1.61vw
      color: #005EED
      text-shadow: #FFF 2px 0 2px,#FFF 0 2px 2px,#FFF -2px 0 2px,#FFF 0 -2px 2px
      font-weight: bold
  .bottom
    bottom: 20px
</style>
