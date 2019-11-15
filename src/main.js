import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import feather from 'vue-feather-icons'

import $ from 'jquery'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/js/bootstrap.js'

Vue.use(BootstrapVue)
// Vue.use(feather)
Vue.config.productionTip = false

// feather.icons.home

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
