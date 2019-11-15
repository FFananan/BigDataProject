import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import pro1 from '../views/Pro1.vue'
import pro2 from '../views/Pro2.vue'
import intro from '../components/Introduction/intro.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: home },
  {
    path: '/pro1', component: pro1, children: [
      { path: '/pro1/intro', component: intro }
    ]
  },
  { path: '/pro2', component: pro2 },
]

const router = new VueRouter({
  routes,
  linkActiveClass: "active",
})

export default router
