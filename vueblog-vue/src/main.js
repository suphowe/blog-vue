import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import axios from 'axios'                             //请求拦截

import mavonEditor from 'mavon-editor'                //markdown编辑器

import "element-ui/lib/theme-chalk/index.css"
import 'mavon-editor/dist/css/index.css'

import "./axios"
import './permission.js'                              //路由拦截

//引入element-ui
Vue.use(Element)
//使用markdown编辑器
Vue.use(mavonEditor)

Vue.config.productionTip = false
//引入axios
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
