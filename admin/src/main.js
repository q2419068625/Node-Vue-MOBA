import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
Vue.config.productionTip = false

import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/admin/api'

axios.interceptors.request.use(function (config) {
  if(localStorage.getItem('token')){
    config.headers.Authorization ='Bearer ' + localStorage.getItem('token')
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});


axios.interceptors.response.use(res=>{
  return res
},err=>{
  if(err.response.data.message){
    Vue.prototype.$message({
      type:'error',
      message:err.response.data.message
    })

    if(err.response.status === 401){
      router.push('/login')
    }
  }
  return Promise.reject(err)
})

Vue.mixin({
  computed: {
    uploadUrl(){
      return this.$axios.defaults.baseURL+'/upload'
    }
  },
  methods:{
    getAuthHeaders(){
      return{
        Authorization:`Bearer ${localStorage.getItem('token') || ''}`
      }
    }
  }
})


Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
