import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// const JsonExcel = require("vue-json-excel")
import JsonExcel from 'vue-json-excel'

Vue.config.productionTip = false
Vue.component("downloadExcel", JsonExcel)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
