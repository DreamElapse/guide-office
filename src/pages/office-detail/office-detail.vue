<template>
  <div class="office-detail">
    <page-header :title="pageTitle"></page-header>
    <div class="page-content">
      <div class="top-nav">
        <span v-for="(item, index) in navList" :key="'n'+index" :class="['nav-item', {'active':+navIndex === index}]" @click="navClick(index)">{{item}}</span>
      </div>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-if="navIndex === 0" class="office-context" v-html="officeInfo"></div>
      <div v-else-if="navIndex === 1" ref="contentDetail" class="content-detail">
        <div class="personnel-title">
          <span v-for="(item, index) in personnelTitle" :key="index" class="item" :style="{flex: item.flex}">{{item.name}}</span>
        </div>
        <div ref="personnelList" class="personnel-list-box">
          <div v-for="(item, index) in personnelData" :key="'p'+index" class="personnel-item">
            <span class="item" style="flex: 1 ">{{index+1}}</span>
            <p v-for="(val, ind) in personnelTitle.slice(1)" :key="'i'+ind" class="item" :style="{flex: val.flex}">
              <img v-if="val.value === 'PHOTOPATH'" :src="item[val.value]" class="personnel-img">
              <span v-else>{{item[val.value]}}</span>
            </p>
          </div>
        </div>
        
      </div>
      <div v-else ref="officeShow" class="office-show">
        <div ref="showList" class="show-list">
          <div v-for="(item, index) in showList" :key="index" class="show-item" @click="toDetail(item.MIENID)">
            <img :src="item.PHOTOPATH" class="item-img" alt="">
            <p class="item-text">{{item.TITLE}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  // import * as Helpers from '@state/helpers'
  import API from '@api'
  import PageHeader from '@components/page-header/page-header'
  const PAGE_NAME = 'OFFICE_DETAIL'
  const TITLE = '科室详情'

  const personnelTitle = [
    {name: '序号', value: '', flex: 1},
    {name: '姓名', value: 'NAME', flex: 1},
    {name: '照片', value: 'PHOTOPATH', flex: 1},
    {name: '职务', value: 'JOBNAME', flex: 1},
    {name: '岗位职责', value: 'RESPONSIBILITIES', flex: 2},
    {name: '所在办公室门牌号', value: 'ROOMNUMBER', flex: 1},
    {name: '办公电话', value: 'TELPHONE', flex: 1}
  ]

  export default {
    name: PAGE_NAME,
    page: {
      title: TITLE
    },
    components: {
      PageHeader
    },
    data() {
      return {
        navList: ['科室简介', '科室指南', '部门风采'],
        personnelTitle,
        pageTitle: '',
        officeInfo: '',
        id: '',
        personnelData: [],
        showList: [],
        navIndex: 0,
        officePage: 1,
        officeTotal: 10,
        getMoreOffice: false,
        getMoreShow: false,
        showPage: 1,
        showTotal: 10

      }
    },
    computed: {
      // ...Helpers.computed,
      // pageTitle() {
      //   return this.$route.query ? this.$route.query.id : ''
      // }
    },
    created() {
      this.id = this.$route.query.id || ''
      if (this.id) {
        this.getOfficeDetail()
        this.getOfficePersonList()
        this.getOfficeShow()
      } else {
        this.$router.back()
      }
    },
    mounted() {
      
    },
    methods: {
      // ...Helpers.methods,
      getOfficeDetail() {
        API.Global.getOfficeDetail({OfficeID: this.id})
          .then(res => {
            if (+res.returnCode === 1) {
              this.pageTitle = res.data.OFFICENAME
              this.officeInfo = res.data.OFFICEINTRO
            }
          })
      },
      getOfficePersonList() {
        if(this.getMoreOffice || this.personnelData.length === +this.officeTotal) return
        this.getMoreOffice = true
        let data = {
          OfficeID: +this.id,
          PageSize: 10,
          CurrentPage: this.officePage
        }
        API.Global.getOfficePersonList(data)
          .then(res => {
            if (+res.returnCode === 1) {
              this.officePage ++
              this.personnelData = [...this.personnelData, ...res.data.OfficePersonList]
              this.officeTotal = res.data.TotalRecords
              setTimeout(() => {
                this.getMoreOffice = false
              }, 200)
            }
          })
      },
      getOfficeShow() {
        if(this.getMoreShow || this.showList.length === +this.showTotal) return
        this.getMoreShow = true
        let data = {
          OfficeID: +this.id,
          PageSize: 10,
          CurrentPage: this.showPage
        }
        API.Global.getOfficeShow(data)
          .then(res => {
            if(+res.returnCode === 1) {
              this.showList = [...this.showList, ...res.data.OfficeMienList]
              this.showTotal = res.data.OfficeMienList
              setTimeout(() => {
                this.getMoreShow = false
              }, 200)
            }
          })
      },
      navClick(index) {
        if(index === this.navIndex) return
        this.navIndex = index
        this.officePage = 1
        this.showPage = 1
        this.showList = []
        this.personnelData = []
        if (index === 1) {
          this.getOfficePersonList()
          this.$nextTick(() => {
            this.$refs.contentDetail.addEventListener('scroll', () => {
              let boxHeight = this.$refs.contentDetail.offsetHeight
              let listHeight = this.$refs.personnelList.offsetHeight
              let scrollTop = this.$refs.contentDetail.scrollTop
              if (scrollTop >= listHeight-boxHeight-20) {
                this.getOfficePersonList()
              }
            }, false)
          })
        } else if (index === 2) {
          this.getOfficeShow()
          this.$nextTick(() => {
            this.$refs.officeShow.addEventListener('scroll', () => {
              let boxHeight = this.$refs.officeShow.offsetHeight
              let listHeight = this.$refs.showList.offsetHeight
              let scrollTop = this.$refs.officeShow.scrollTop
              if (scrollTop >= listHeight-boxHeight-20) {
                this.getOfficeShow()
              }
            }, false)
          })
        }
      },
      toDetail(id) {
        this.$router.push(`/information-detail?id=${id}&type=1`)
      },
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@design"

  .office-detail
    width: 100vw
    height: 100vh
    box-sizing: border-box
    padding: 3.43vh 2.14vw
    background: #019cfe
    background: url("../../assets/page_bg.png")
    background-size: 100% 100%
    overflow: hidden
    .page-content    
      margin-top: 2.3vh
      width: 100%
      height: 86.8vh
      box-sizing: border-box
      padding: 0.21vw 
      background: #FFF
      border-radius: 1vw
      position: relative
      display: flex
      flex-direction: column
      align-items: center
      overflow: hidden
      .top-nav
        height: 4.62vw
        flex: 0 0 @height
        width: 100%
        display: flex
        align-items: center
        border-radius: 1vw 1vw 0 0
        overflow: hidden
        font-size: 0
        background: #21A5F3
      .nav-item
        height: 4.57vw
        line-height: @height
        color: #FFF
        background: #21A5F3
        font-weight: bold
        font-size: $font-size-14
        text-align: center
        flex: 0 0 13.22vw
        border: 0
        &.active
          transition: all 0.2s
          color: #005EED
          background: #FFF
          box-shadow: 0 2px 8px 4px rgba(110, 107, 107, 0.06)
    .office-context
      line-height: 1.2
      padding: 0 0.4vw
      overflow-Y: scroll
    .content-detail
      padding: 0 1vw 1vw
      margin-top: 0.5vw
      background: #FFF
      overflow: scroll
      width: 100%
      box-sizing: border-box
      .personnel-title
        height: 9.5vh
        background: #21A5F3
        border-radius: 1vw 1vw 0 0
        box-shadow: 0 0 0 0 rgba(110, 107, 107, 0.06)
        color: #FFF
        line-height: @height
        font-size: $font-size-14
        font-weight: bold
        display: flex
        text-align: center
      .personnel-list-box
        border: 1px solid #006AF0
      .personnel-item
        display: flex
        height: 13vw
        margin: 0.5vw 0
        display: flex
        align-items: center
        .item
          overflow: hidden
          font-size: 1.47vw
          line-height: 1.4
          color: #666
          text-align: center
        .personnel-img
          width: 7.5vw
          height: 11.61vw
    .office-show
      padding: 1vw
      background: #FFF
      padding: 1.5vw 0 1.5vw 1.5vw
      width: 100%
      overflow: hidden
      .show-list
        overflow-y: scroll
        display: flex
        flex-wrap: wrap
      .show-item
        height: 18vw
        width: 13.54vw
        margin-right: 2vw
        overflow: hidden
        word-break: break-all
      .item-img
        width: 13.54vw
        height: 9.9vw
        object-fit: contain
      .item-text
        font-size: 1.3vw
        color: #666
        line-height: 1.4
        display: -webkit-box
        overflow: hidden
        -webkit-line-clamp: 3
        -webkit-box-orient: vertical
        height: 5.3vw


      
</style>
