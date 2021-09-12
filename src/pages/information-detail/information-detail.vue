<template>
  <div class="information-detail">
    <page-header :title="title"></page-header>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="message-content" v-html="detail"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  // import * as Helpers from '@state/helpers'
  import API from '@api'
  import PageHeader from '@components/page-header/page-header'
  const PAGE_NAME = 'PERSONNEL_MESSAGE'
  const TITLE = '详情'

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
        detail: '',
        title: '',
        type: 0
      }
    },
    computed: {
      // ...Helpers.computed,
    },
    created() {
      this.id = this.$route.query.id || ''
      this.type = this.$route.query.type || 0
      if (this.id) {
        this.getDetail()
      } else {
        this.$router.back()
      }
    },
    methods: {
      // ...Helpers.methods,
      getDetail() {
        let api = ['getInformationDetail', 'getShowDetail']
        let data = [{InfoPublishID: this.id}, {MienID: this.id}]
        API.Global[api[this.type]](data[this.type])
          .then(res => {
            if (+res.returnCode === 1) {
              this.detail = res.data.CONTENT
              this.title = res.data.TITLE.slice(0, 15) + '......'
            }
          })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@design"

  .information-detail
    width: 100vw
    height: 100vh
    box-sizing: border-box
    padding: 3.43vh 2.14vw
    background: #019cfe
    background: url("../../assets/page_bg.png")
    background-size: 100% 100%
    position: relative
    .message-content    
      margin-top: 2.3vh
      width: 100%
      height: 86.8vh
      box-sizing: border-box
      padding: 2.2vw 1vw 0
      background: #FFF
      border-radius: 1vw
      position: relative
      display: flex
      flex-direction: column
      align-items: center
     

        

</style>
