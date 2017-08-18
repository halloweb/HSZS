import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import ElementUI from 'element-ui'
import routerConfig from './router/index.js'
import axios from 'axios'
import store from './store/store'
import $ from 'jquery'

import utils from './common/js/utils.js'
import 'element-ui/lib/theme-default/index.css'
import './common/js/bootstrap/css/bootstrap.min.css'
import './common/js/bootstrap/js/bootstrap.min.js'
import  './common/css/common.css'
import  './common/css/sprite.css'
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(utils)
Vue.prototype.$ajax = axios



var router = new VueRouter({
	mode: 'history',
    routes: routerConfig
})
new Vue({
  router,
  store,	
  render: h => h(App)
}).$mount('#app')
