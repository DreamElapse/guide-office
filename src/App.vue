<template>
  <transition name="fade">
    <div id="app">
      <keep-alive include="SEARCH_LIST">
        <router-view></router-view>
      </keep-alive>
    </div>
  </transition>
</template>

<script>
  /** eslint-disable **/
  import appConfig from '@src/app.config'
  // import { globalActions } from '@state/helpers'

  export default {
    page: {
      titleTemplate(title) {
        title = typeof title === 'function' ? title(this.$store) : title
        return title || appConfig.title
      }
    },
    created() {
    },
    methods: {
      // ...globalActions
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./design/_globals.styl"
  @import "~nprogress/nprogress.css"

  #nprogress .bar
    background: $color-main !important

  #nprogress .peg
    box-shadow: 0 0 10px $color-main, 0 0 5px $color-main !important
</style>
