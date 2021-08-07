<template>
  <div class="personnel-message">
    <page-header :title="personnel.name"></page-header>
    <div class="message-content">
      <span class="personnel-name">{{personnel.name}}</span>
      <div class="personnel-detail">
        <img src="" alt="" class="head-img">
        <span class="business">{{personnel.business}}</span>
        <span class="msg">{{personnel.message}}</span>
        <span class="office">{{personnel.office}}</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  // import * as Helpers from '@state/helpers'
  // import API from '@api'
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
        personnel: {
          name: '李曜',
          url: '',
          business: '党组书记、局长,主持全面工作，分管预算科。',
          message: '1966年12月出生，湖北南漳人,中南财经大学财政专业毕业，2020年2月任现职。',
          office: '六楼局长办公室'
        }
      }
    },
    computed: {
      // ...Helpers.computed,
    },
    methods: {
      // ...Helpers.methods,
      
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
      .head-img
        width: 12.71vw
        height: 17.4vw
        margin-bottom: 6vh
      .business
        font-weight: bold

        

</style>
