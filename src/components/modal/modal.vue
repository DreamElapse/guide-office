<template>
  <transition name="fade">
    <section v-if="isShow" class="base-modal" @click="hideModal">
      <div :class="[showActive ? 'model-active' : 'model-un-active', 'modal-box']" :style="modalWidth">
        <slot name="content"></slot>
      </div>
    </section>
  </transition>
</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'DEFAULT_MODAL'

  export default {
    name: COMPONENT_NAME,
    props: {
      styles: {
        type: String,
        default: ''
      },
      modalWidth: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        showActive: false,
        isShow: false
      }
    },
    watch: {
      $route() {
        this.isShow = false
      }
    },
    methods: {
      showModal() {
        this.isShow = true
        this.showActive = true
      },
      hideModal() {
        setTimeout(() => {
          this.isShow = false
        }, 100)
        this.showActive = false
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .base-modal
    position: fixed
    background: rgba(0, 0, 0, 0.50)
    top: 0
    bottom: 0
    right: 0
    left: 0
    z-index: 100
    display: flex
    justify-content: center
    align-items: center
  .modal-box
    width: 1100px
  .model-active
    position: relative
    animation: layerFadeIn .3s

  .model-un-active
    animation: hideFadeIn .6s

  @keyframes layerFadeIn {
    0% {
      opacity: 0;
      transform: scale(.5);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes hideFadeIn {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      transform: scale(.5);
      opacity: 0;
    }
  }
</style>
