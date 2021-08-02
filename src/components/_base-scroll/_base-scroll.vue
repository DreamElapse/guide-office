<template>
  <div
    ref="scrollBox"
    class="scroll-box"
    :style="{height: maxHeight}"
    @mouseenter="clear"
    @mouseleave="keepOn"
  >
    <div ref="scroll" :class="['scroll', {'down': !type}]">
      <slot name="content"> </slot>
    </div>

    <div v-if="showChild" ref="scrollChild" class="scroll">
      <slot name="content"> </slot>
    </div>

  </div>

</template>

<script type="text/ecmascript-6">

  export default {
    name: 'BaseScroll',
    props: {
      maxHeight: {
        type: String,
        default: 'auto'
      },
      data: {
        type: Array,
        default: () => []
      },
      type: { // 滚动方向
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        cancelAnimation: true,
        showChild: false,
        translate: 0,
        timer: '',
        run: ''
      }
    },
    watch: {
      data(newVal, oldVal) {
        if (newVal.length > oldVal.length && !this.type) {
          // this.$nextTick(() => {
          //   setTimeout(() => {
          //     this.dataScroll()
          //   }, 400)
          // })
        }
      }
    },
    mounted() {
      // this.dataScroll()
    },
    methods: {
      dataScroll() {
        if (this.type) { // 循环滚动
          // 高度没超过容器，就不显示两套数据
          let boxBottom = this.$refs.scrollBox.offsetHeight
          let scrollBottom = this.$refs.scroll.offsetHeight
          if (scrollBottom <= boxBottom - 5) {
            this.showChild = false
            return
          }
          this.showChild = true
          // setTimeout用于防止页面结构没渲染完成
          this.timer = () => {
            this.translate = this.translate + 0.5
            this.$refs.scroll && (this.$refs.scroll.style.transform = `translateY(${this.translate}px)`)
            this.$refs.scrollChild && this.$refs.scrollChild && (this.$refs.scrollChild.style.transform = `translateY(${this.translate}px)`)
            let boxTop = this.$refs.scrollBox && this.$refs.scrollBox.getBoundingClientRect().bottom
            let scrollTop = (this.$refs.scroll && this.$refs.scroll.getBoundingClientRect().bottom) || 0
            if (scrollTop >= boxTop - 1) {
              this.translate = 0
              this.$refs.scroll && (this.$refs.scroll.style.transform = `translateY(0)`)
              this.$refs.scrollChild && (this.$refs.scrollChild.style.transform = `translateY(0)`)
            }
            if (!this.cancelAnimation) return
            this.run = window.requestAnimationFrame(this.timer)
          }

          window.cancelAnimationFrame(this.run)
          this.cancelAnimation = true
          this.timer()
        } else { // 单次滚动
          if (!this.cancelAnimation) return
          let scroll = this.$refs.scroll
          let boxBottom = this.$refs.scrollBox.offsetHeight
          let scrollBottom = scroll.offsetHeight
          scroll.style.bottom = `${(boxBottom - scrollBottom)/2}px`
          setTimeout(() => {
            scroll.style.bottom = `${boxBottom - scrollBottom}px`
            scroll.className = 'scroll down down-scroll'
            setTimeout(() => {
              scroll.className = 'scroll down'
            }, 800)
          }, 600)
        }
      },
      clear() {
        this.cancelAnimation = false
        window.cancelAnimationFrame(this.run)
      },
      keepOn() {
        this.cancelAnimation = true
        this.dataScroll()
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .scroll-box
    overflow: hidden
    position: relative
    display: flex
    flex-direction: column
    justify-content: flex-end
  .scroll
    transform: translateZ(0)
    -webkit-backface-visibility:hidden
    -webkit-perspective: 1000
  .down
    position: absolute
    bottom: 0
    left: 0
    width: 100%
  .down-scroll
    transition: all 0.8s ease-in-out
</style>
