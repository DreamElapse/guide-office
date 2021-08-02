import Vue from 'vue'
// import storage from 'storage-controller'
import base from '@mixins/base'
// const ERR_OK = 0

// 定义插件
export const Plugins = {
  install: function() {
    Vue.mixin(base)
    Vue.prototype.$imgUrl = process.env.VUE_APP_IMG_URL
    // Vue.prototype.$ERR_OK = ERR_OK
    // Vue.prototype.$storage = storage
  }
}
// 使用插件
// Vue.use(AwesomePicker) todo
