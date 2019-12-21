import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import animate from 'animate.css'

import $ from 'jquery'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/js/bootstrap.js'
import 'font-awesome/css/font-awesome.css'

// import echarts from 'echarts'

Vue.use(animate);
Vue.use(BootstrapVue)
Vue.config.productionTip = false
// Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')