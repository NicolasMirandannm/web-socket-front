import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import JsonExcel from 'vue-json-excel'
import '@mdi/font/css/materialdesignicons.css';

import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false
Vue.component("downloadExcel", JsonExcel)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
