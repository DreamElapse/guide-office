<template>
  <modal ref="modal" :modalWidth="styles">
    <div slot="content" class="modal-content" @click.stop>
      <div class="title-box">
        <div class="title">{{title}}</div>
        <!--<span class="close" @click.stop="hideModal"> </span>-->
      </div>
      <div class="modal-contain">
        <slot name="box"> </slot>
        <p class="close-btn" @click.stop="hideModal">关闭</p>
      </div>
      <p class="modal-bottom"> </p>
    </div>
  </modal>
</template>

<script type="text/ecmascript-6">
  import Modal from '@components/modal/modal'
  const COMPONENT_NAME = 'DEFAULT_MODAL'

  export default {
    name: COMPONENT_NAME,
    components: {
      Modal
    },
    props: {
      styles: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      }
    },
    data() {
      return {

      }
    },
    methods: {
      showModal() {
        this.$refs.modal.showModal()
      },
      hideModal() {
        this.$refs.modal.hideModal()
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .modal-content
    background: #FFF
    border-radius: 3px
    box-shadow: 0 8px 14px 0 rgba(12, 6, 14, 0.08)
    /*padding: 0 20px 30px*/
    box-sizing: border-box
    position: relative
    font-size: 0.73vw
    color: #333
   
    background-size: 100% 100%
    .title-box
      display: flex
      box-sizing: border-box
      height: 5vh
      line-height: 5vh
      align-items: center
      justify-content: center
      
      background-size: 100% 5vh
      background-repeat: no-repeat
      background-position: 0 0
    .title
      font-size: 1.3vw
      line-height: 1
      color: #FFF
    .close
      width: 2vh
      height: 2vh
      
      background-size: 100% 100%
      cursor: pointer
    .close-btn
      width: 14vw
      height: 4vh
      line-height: 4vh
      margin: 0 auto
      margin-top: 2vh
      color: #FFF
      font-size: 1.2vw
      text-align: center
      background: #559af7
      display: block
      cursor: pointer
    
</style>
