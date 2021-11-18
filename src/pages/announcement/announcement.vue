<template>
  <div class="announcement" @click="pageClick">
    <div class="page-content">
      <div class="left-nav">
        <span v-for="(item, index) in navList" :key="index" :class="['nav-item',{'active':navIndex === index}]" @click="changeNav(index, item.DATAID)">{{item.COLUMN}}</span>
      </div>
      <div class="right-content">
        <div v-if="messageList.length" class="content-box">
          <p v-for="(item, index) in messageList" :key="'r'+index" class="message" @click="toDetail(item.INFOPUBLISHID)">
            <span class="icon"></span>
            <span class="text">{{item.TITLE}}</span>
            <span class="text date">{{item.CREATETIME}}</span>
          </p>
        </div>
        <div v-if="messageList.length" class="paganition">
          <span class="first-page pag-btn" @click="changePage(1)">第一页</span>
          <span class="prev-page pag-btn" @click="changePage(2)">上一页</span>
          <span class="next-page pag-btn" @click="changePage(3)">下一页</span>
          <span class="last-page pag-btn" @click="changePage(4)">最后一页</span>
          <div class="page-num" @click.stop="showNumber">
            <div v-if="numberShow" class="page-box">
              <p v-for="(item, index) in pageNum" :key="index" class="num-handle" @click.stop="pageHandle(item)">{{item}}</p>
            </div>
            <span class="num">{{page}}</span>
          </div>
        </div>
        <img v-else src="../../assets/no_list.png" alt="" class="no-list">
      </div>
    </div>
    <!-- <div class="bottom-text">操作指引：点击首页 -- 选择查询主列表 -- 选择所属部门 -- 选择列表内容查看办事指南</div> -->
  </div>
</template>

<script type="text/ecmascript-6">
  // import * as Helpers from '@state/helpers'
  import API from '@api'
  const PAGE_NAME = 'ANNOUNCEMENT'
  const TITLE = '政策公告'

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
        messageList: [],
        page: 1,
        totalPage: 10,
        numberShow: false,
        pageNum: []
      }
    },
    computed: {
      // ...Helpers.computed,
    },
    created() {
      this.getPublicType()
    },
    methods: {
      // ...Helpers.methods,
      getPublicType() {
        API.Global.getPublicType({DataType: 1})
          .then(res => {
            if (+res.returnCode === 1) {
              this.navList = res.data
              this.navId = res.data[0].DATAID
              this.getPublicList()
            }
          })
      },
      getPublicList() {
        let data = {
          DataType: 1,
          DataID: this.navId,
          Pagesize: 10,
          CurrentPage: this.page,
          Key: ''
        }
        API.Global.getPublicList(data)
          .then(res => {
            if(+res.returnCode === 1) {
              this.messageList = res.data.InfoOpen
              this.totalPage = Math.ceil(res.data.TotalRecords / 10)
              this.pageNum = new Array(Math.ceil(res.data.TotalRecords / 10)).fill(1).map((item, index) => {
                return index+1
              })
            }
          })
      },
      changeNav(index, id) {
        this.navIndex = index
        this.navId = id
        this.page = 1
        this.getPublicList()
      },
      changePage(num) {
        switch(num) {
        case 1:
          this.page = 1
          break
        case 2:
          if (this.page > 1) {
            this.page --
          } else {
            return
          }
          break
        case 3:
          if (this.page < this.totalPage) {
            this.page ++
          } else {
            return
          }
          break
        default:
          this.page = this.totalPage
        }
        
        this.getPublicList()
      },
      showNumber() {
        this.numberShow = !this.numberShow
      },
      pageHandle(num) {
        this.page = num
        this.numberShow = false
        this.getPublicList()
      },
      toDetail(id) {
        this.$router.push(`/information-detail?id=${id}`)
      },
      pageClick() {
        this.numberShow = false
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@design"

  .announcement
    width: 100vw
    height: 100vh
    box-sizing: border-box
    padding: 3.43vh 2.14vw
    background: #019cfe
    background: url("../../assets/page_bg.png")
    background-size: 100% 100%
    overflow: hidden
    position: relative
    .page-content
      margin-top: 14.8vh
      height: 72.76vh
      background: #FFF
      border-radius: 0.78vw
      padding: 0.26vw
      display: flex
      box-sizing: border-box
    .left-nav
        width: 9.11vw
        height: 100%
        background: #21A5F3
        border-radius: 0.78vw 0 0 0.78vw
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
      padding: 2.77vw 3.07vw 2vw 1.7vw
      overflow: hidden
      display: flex
      flex-direction: column
      justify-content: space-between
      .content-box
        flex: 1
      .message
        margin-bottom: 1.85vw
        color: #222222
        font-size: 1.35vw
        display: flex
        align-items: center
        justify-content: space-between
        box-sizing: border-box
      .icon
        width: 0.69vw
        height: @width
        border-radius: @width
        margin-right: 1.55vw
        display: block
        background: #999
        flex: 0 0 @width
      .text
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap
        flex: 1
      .date
        margin-left: 5.52vw
        flex: 0 0 auto
    .paganition
      height: 3.44vw
      display: flex
      position: relative
      justify-content: center
      .pag-btn
        width: 10.57vw
        height: 3.44vw
        border-radius: 0.78vw
        box-shadow: 0 0 0 0 rgba(110, 107, 107, 0.06)
        background: #FF8A01
        color: #FFF
        font-size: $font-size-14
        text-align: center
        line-height: @height
        margin-right: 2.55vw
      .prev-page,.next-page
        background: #21A5F3
      .page-num
        display: flex
        align-items: center
        justify-content: center
        position: relative
        background: #D6DBE2
        border-radius: 0.78vw
        position: absolute
        right: 3.02vw
        bottom: 0
        width: 4.85vw
        height: 3.44vw
      .page-box
        position: absolute
        bottom: 3.44vw
        left: 0
        max-height: 12vw
        min-height: 3.44vw
        width: 4.85vw
        background: #D6DBE2
        border-radius: 0.78vw
        font-size: $font-size-14
        line-height: 1.4
        text-align: center
        color: #FFF
        overflow: scroll
        padding: 0.4vw 0
        box-sizing: border-box
      .num-handle:active
        background: #ccc
      .num
        font-size: $font-size-14
        color: #FFF
        margin-right: 0.5vw
      .page-num:after
        content: ""
        width: 0
        height: 0
        border: 0.84vw solid #EDF3FB
        border-top: 0.84vw solid transparent
        border-right: 0.6vw solid transparent
        border-left: 0.6vw solid transparent
        margin-top: -0.64vw
    .no-list
      width: 35vw
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
