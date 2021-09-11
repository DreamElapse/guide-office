<template>
  <div class="search-list">
    <div class="search-box">
      <div class="search-content">
        <input :value="value" type="text" placeholder="请输入科室 、人员、事件进行查询" class="search-input" @input="inputValue">
        <span v-if="value" class="search-clear" @click="clear"></span>
      </div>
      <div class="search-btn">
        <span class="btn-text" @click="search">搜索</span>
        <span class="btn-text" @click="back">返回</span>
      </div>
    </div>
    <div class="data-list">
      <div class="data-main">
        <div class="data-title">
          <span v-for="(title, index) in dataTitle" :key="'t'+index" class="title-name">{{title}}</span>
        </div>
        <div class="data-box">
          <p v-for="(co, ind) in searchData" :key="'c'+ind" class="data-content" @click="toDetail(co)">
            <span v-for="(val, index) in dataValue" :key="'v'+index" class="data-value">{{co[val] || '---'}}</span>
          </p>
          <img v-if="!searchData.length" src="../../assets/no_search.png" alt="" class="no-search">
        </div>
      </div>
      
    </div>
    <div class="bottom-text">操作指引：点击首页 -- 选择查询主列表 -- 选择所属部门 -- 选择列表内容查看办事指南</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import * as Helpers from '@state/helpers'
  import API from '@api'
  const PAGE_NAME = 'SEARCH_LIST'
  const TITLE = '搜索结果'

  const DATA_TITLE = ['姓名', '职务', '科室', '楼层', '办公电话', '工作内容']
  const DATA_VALUE = ['NAME', 'JOBNAME', 'OFFICENAME', 'STOREYNAME', 'TELPHONE', 'RESPONSIBILITIES']

  export default {
    name: PAGE_NAME,
    page: {
      title: TITLE
    },
    data() {
      return {
        dataTitle: DATA_TITLE,
        dataValue: DATA_VALUE,
        newKeyword: '',
        showClear: false,
        searchData: []
      }
    },
    computed: {
      ...Helpers.globalComputed,
      value() {
        return this.newKeyword || this.keyword
      }
    },
    created() {
      this.value && this.search()
    },
    beforeDestroy() {
      this.setKeyword('')
    },
    methods: {
      ...Helpers.globalActions,
      inputValue(e) {
        this.newKeyword = e.target.value
        this.setKeyword('')
      },
      search() {
        if (!this.value.trim()) {
          this.$toast.show('请输入搜索内容')
          return
        }
        API.Search.searchMessage({Key: this.value})
          .then(res => {
            if (+res.returnCode === 1) {
              this.searchData = res.data.RestData
            }
          })
      },
      back() {
        this.$router.back()
      },
      clear() {
        this.newKeyword = ''
        this.keyword && this.setKeyword('')
      },
      toDetail(personnel) {
        this.$router.push(`/personnel-message?id=${personnel.PERSONID}`)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@design"

  .search-list
    width: 100vw
    height: 100vh
    background: #019cfe
    background: url("../../assets/page_bg.png")
    background-size: 100% 100%
    padding: 2.41vh 2.08vw
    box-sizing: border-box
    .search-box
      display: flex
      aline-items: center
      justify-content: center
      height: 6.25vw
      line-height: 6.25vw
      margin-bottom: 4.72vh
      width: 100%
      border-radius: 1vw
      overflow: hidden
      .search-content
        background: #FFF
        height: 6.25vw
        display: flex
        align-items: center
        justify-content: space-between
        padding: 0 2.5vw
        flex: 1
      
      .search-btn
        width: 14.84vw
        height: 6.25vw
        font-size: 1.74vw
        line-height: 1.4
        color: #FFF
        text-align: center
        background: #006AF0
        display: flex
        align-items: center
      .btn-text:first-child
        border-right: 2px solid #FFF
      .btn-text
        padding: 0 1.93vw
      
      .search-clear
        width: 1.51vw
        height: @width
        position: relative
        &:before,&:after
          content: ""
          width: 3px
          height: 2vw
          background: #999
          border-radius: 10px
          position: absolute
          left: 0
          top: 0
          transform: rotate(45deg)
        &:after
          transform: rotate(-45deg)
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
    .data-list
      height: 72.8vh
      width: 100%
      box-sizing: border-box
      padding: 3.15vh 2.45vw
      background: #FFF
      box-shadow: 0 2px 0 0 rgba(110, 107, 107, 0.06)
      border-radius: 1vw
      .data-main
        border: 2px solid #006AF0
        border-radius: 1vw
        overflow: hidden
        height: 100%
        width: 100%
        display: flex
        flex-direction: column
      .data-title
        background: #21A5F3
        border-bottom: 2px solid #006AF0
        box-shadow: 0 0 0 0 rgba(110, 107, 107, 0.06)
        display: flex
        justify-content: space-around
        color: #FFF
        font-size: $font-size-14
        font-weight: bold
      .title-name
        flex: 1
        text-align: center
        height: 9.49vh
        line-height: @height
      .data-box
        flex: 1
        overflow-y: scroll
        position: relative
      .data-content
        height: 9vh
        line-height: 9vh
        font-size: $font-size-14
        color: #666
        display: flex
        justify-content: space-around
      .data-value
        flex: 1
        text-align: center
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis
    .no-search
      width: 18vw
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
      width: 100%
      bottom: 3.33vh
      left: 0
      text-align: center
</style>
