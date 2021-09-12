<template>
  <div class="personnel-message">
    <page-header :title="personnel.NAME"></page-header>
    <div class="message-content">
      <span class="personnel-name">{{personnel.NAME}}</span>
      <div class="personnel-detail">
        <img :src="personnel.PHOTOPATH" alt="" class="head-img">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="message" v-html="personnel.PERSONALDETAILS"></div>
        <!-- <span class="business">{{personnel.business}}</span>
        <span class="msg">{{personnel.message}}</span>
        <span class="office">{{personnel.office}}</span> -->
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  // import * as Helpers from '@state/helpers'
  import API from '@api'
  import PageHeader from '@components/page-header/page-header'
  const PAGE_NAME = 'PERSONNEL_MESSAGE'
  const TITLE = '人员信息'

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
        id: '',
        personnel: {}
      }
    },
    computed: {
      // ...Helpers.computed,
    },
    created() {
      this.id = this.$route.query.id || ''
      if (this.id) {
        this.getPersonnelDetail()
      } else {
        this.$router.back()
      }
    },
    methods: {
      // ...Helpers.methods,
      getPersonnelDetail() {
        API.Global.getPersonnelDetail({PersonID: this.id})
          .then(res => {
            if (+res.returnCode === 1) {
              this.personnel = res.data
            }
          })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@design"

  .personnel-message
    width: 100vw
    height: 100vh
    box-sizing: border-box
    padding: 3.43vh 2.14vw
    background: #019cfe
    background: url("../../assets/page_bg.png")
    background-size: 100% 100%
    .message-content    
      margin-top: 2.3vh
      width: 100%
      height: 86.8vh
      box-sizing: border-box
      padding-top: 5.2vh
      background: #FFF
      border-radius: 1vw
      position: relative
      display: flex
      flex-direction: column
      align-items: center
      .personnel-name
        font-size: 2.17vw
        width: 100%
        padding: 0 5vw
        box-sizing: border-box
        color: #006AF0
        font-weight: bold
        position: relative
        &:before
          content: ""
          width 0.94vw
          height: @width
          border-radius: 2vw
          background: #006AF0
          position: absolute
          left: 3vw
          top: 50%
          transform: translateY(-50%)
      .personnel-detail
        display: flex
        flex-direction: column
        align-items: center
        color: #222222
        font-size: 1.51vw
        line-height: 2
        box-sizing: border-box
        padding-top: 11vh
      .message
        padding: 0 4vw
      .head-img
        width: 12.71vw
        height: 17.4vw
        margin-bottom: 6vh
      .business,p:first-child
        font-weight: bold

        

</style>
