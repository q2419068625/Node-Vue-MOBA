import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
Vue.config.productionTip = false

import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/admin/api'


Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
