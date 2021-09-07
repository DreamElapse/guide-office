<template>
  <div class="office-detail">
    <page-header :title="pageTitle"></page-header>
    <div class="page-content">
      <div class="top-nav">
        <span v-for="(item, index) in navList" :key="'n'+index" :class="['nav-item', {'active':+navIndex === index}]" @click="navClick(index)">{{item}}</span>
      </div>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-if="navIndex === 0" class="office-context" v-html="officeInfo"></div>
      <div v-else-if="navIndex === 1" class="content-detail">
        <div class="personnel-title">
          <span v-for="(item, index) in personnelTitle" :key="index" class="item" :style="{flex: item.flex}">{{item.name}}</span>
        </div>
        <div class="personnel-list-box">
          <div v-for="(item, index) in personnelData" :key="'p'+index" class="personnel-item">
            <span class="item" style="flex: 1 ">{{index+1}}</span>
            <p v-for="(val, ind) in personnelTitle.slice(1)" :key="'i'+ind" class="item" :style="{flex: val.flex}">
              <img v-if="val.value === 'PHOTOPATH'" :src="item[val.value]" class="personnel-img">
              <span v-else>{{item[val.value]}}</span>
            </p>
          </div>
        </div>
        
      </div>
      <div v-else class="office-show">
        <div v-for="(item, index) in showList" :key="index" class="show-item">
          <img :src="item.image" class="item-img" alt="">
          <p class="item-text">{{item.text}}</p>
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

  const personnelData = [
    {
      name: '卢春',
      image: '',
      business: '科员',
      duty: '专管员岗位。负责政法委、市纪委监委、统战部、直属机关工委、总工会、团委、各民主党派、台办、党史研究室、侨联、妇联、政研室等单位财务管理工作。',
      office: '702',
      tell: '32007'

    },
    {
      name: '卢春',
      image: '',
      business: '科员',
      duty: '专管员岗位。负责政法委、市纪委监委、统战部、直属机关工委、总工会、团委、各民主党派、台办、党史研究室、侨联、妇联、政研室等单位财务管理工作。',
      office: '702',
      tell: '32007'

    },
    {
      name: '卢春',
      image: '',
      business: '科员',
      duty: '专管员岗位。负责政法委、市纪委监委、统战部、直属机关工委、总工会、团委、各民主党派、台办、党史研究室、侨联、妇联、政研室等单位财务管理工作。',
      office: '702',
      tell: '32007'

    },
    {
      name: '卢春',
      image: '',
      business: '科员',
      duty: '专管员岗位。负责政法委、市纪委监委、统战部、直属机关工委、总工会、团委、各民主党派、台办、党史研究室、侨联、妇联、政研室等单位财务管理工作。',
      office: '702',
      tell: '32007'

    }
  ]

  const showList = [
    { image: '', text: '市财政局举措持续加强政府非税收入收缴管理' },
    { image: '', text: '市财政局举措持续加强政府非税收入收缴管理' },
    { image: '', text: '市财政局举措持续加强政府非税收入收缴管理' },
    { image: '', text: '市财政局举措持续加强政府非税收入收缴管理' },
    { image: '', text: '市财政局举措持续加强政府非税收入收缴管理' },
    { image: '', text: '市财政局举措持续加强政府非税收入收缴管理' },
    { image: '', text: '市财政局举措持续加强政府非税收入收缴管理' },
    { image: '', text: '市财政局举措持续加强政府非税收入收缴管理' },
    { image: '', text: '市财政局举措持续加强政府非税收入收缴管理' },
    { image: '', text: '市财政局举措持续加强政府非税收入收缴管理' },
    { image: '', text: '市财政局举措持续加强政府非税收入收缴管理' },
    
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
        showList,
        navIndex: 0,
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
      } else {
        this.$router.back()
      }
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
        API.Global.getOfficePersonList({OfficeID: this.id})
          .then(res => {
            if (+res.returnCode === 1) {
              this.personnelData = res.data
            }
          })
      },
      navClick(index) {
        this.navIndex = index
      }
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
      overflow: scroll
      display: flex
      flex-wrap: wrap
      padding: 1.5vw 0 1.5vw 1.5vw
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
