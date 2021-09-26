<template>
  <div class="information-detail">
    <page-header :title="title"></page-header>
    
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="message-content" v-html="detail" @click="clickContent"></div>
    <transition nam="fade">
      <div v-if="showFile" class="message-box">
        <div class="message-bg"></div>
        <div class="message-context">
          <p class="top-title">
            <img src="../../assets/pdf_icon.png" alt="" class="title-icon">
            <span class="title-text">{{fileTitle.length > 10 ? fileTitle.slice(0, 10)+'...' : fileTitle}}>附件</span>
          </p>
          <p class="close-content" @click="closeFile">
            <span class="close-tip">关闭预览</span>
            <span class="close-icon"></span>
          </p>
          <iframe :src="api+file" frameborder="0" class="file"></iframe>
        </div>
      </div>
    </transition>
    
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
        file: '',
        fileTitle: '',
        showFile: false,
        api: '',
        type: 0
      }
    },
    computed: {
      // ...Helpers.computed,
    },
    created() {
      this.id = this.$route.query.id || ''
      this.type = this.$route.query.type || 0
      this.file = this.$route.query.file || ''
      if (this.file) {
        this.api = process.env.VUE_APP_API
        this.title = this.$route.query.name || ''
        this.showFile = true
      } else if (this.id) {
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
      },
      clickContent(e) {
        // console.log(e.target.__proto__)
        console.log(e.target.parentNode.tagName)
        let tag = e.target.parentNode
        if ( tag && tag.tagName === 'A') {
          let href = tag.getAttribute('href')
          let title = tag.getAttribute('title')
          this.file = href
          this.fileTitle = title
          this.showFile = true
        }
        e.preventDefault()
      },
      closeFile() {
        this.showFile = false
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
      overflow-y: scroll
    .message-box
      .message-bg
        position: fixed
        width: 100%
        height: 100%
        background: rgba(0,0,0,0.6)
        left: 0
        top: 0
        z-index: 50
      .message-context
        position: fixed
        left: 50%
        top: 50%
        transform: translate(-50%, -50%)
        width: 88vw
        padding: 2.75vw 0
        height: 48vw
        box-sizing: border-box
        background: #E3E4E7
        overflow-y: scroll
        z-index: 51
      .top-title
        display: flex
        align-items: center
        justify-content: center
        position: absolute
        width: 100%
        height: 2.75vw
        line-height: 2.75vw
        top: 0
        left: 0
      .title-icon
        width: 1.36vw
        height: 1.7vw
        object-fit: contain
      .title-text
        font-size: 0.96vw
        color: #333333
        margin-left: 0.8vw
      .close-content
        position: absolute
        right: 1.1vw
        top: 0
        height: 2.75vw
        line-height: 2.75vw
        font-size: 0.96vw
        color: #333
        display: flex
        align-items: center
      .close-icon
        margin-left: 1.4vw
        width: 1.5vw
        height: @width
        position: relative
        &:before,&:after
          content: ''
          display: block
          position: absolute
          left: 0
          top: 0
          transform: rotate(45deg)
          width: 1px
          height: 1.4vw
          background: #333
        &:after
          transform: rotate(-45deg)

    .file
      width: 100%
      height: 100%
      margin: 0 auto
      display: block
     

        

</style>
