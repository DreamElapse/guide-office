<template>
  <transition name="fade">
    <div v-if="showToast" class="toast">
      <div class="content">{{content}}</div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        showToast: false,
        content: 'carNumber error!'
      }
    },
    methods: {
      show(content, time) {
        if (!content) return
        this.content = content
        this.showToast = true
        const showTime = time || 1500
        setTimeout(() => {
          this.showToast = false
        }, showTime)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@design"

  .toast
    position: fixed
    left: 50%
    transform: translateX(-50%)
    z-index: 9999
    top: 30%
    padding: 1vh 1vw
    border-radius: 0.5vw
    transition: all .5s ease-out
    text-align: center
    background-color: rgba(40,40,40,0.9)
    .content
      min-width: 12vw
      max-width: 30vw
      text-align: center
      font-family: $font-family-regular
      line-height: 2vw
      font-size: 1.2vw
      color: #f1f1f1
      word-break :break-all

</style>
