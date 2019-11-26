import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/Main.vue'),
    children: [
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue')
      },
      {
        path: '/order',
        name: 'order',
        component: () => import('../views/Order.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  // mode: 'history'
})

export default router
