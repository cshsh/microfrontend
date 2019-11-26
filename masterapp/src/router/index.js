import Vue from 'vue'
import VueRouter from 'vue-router'
import About from  '../views/About.vue'
import {getToken} from '../libs/util'
import cookie from 'js-cookie'
import store from '@/store'
Vue.use(VueRouter)

export const staticRoutes = [
  {
    path: '/login',
    name: 'login',
    icon: '',
    component: () => import('@/components/Login.vue'),
    hidden: true
  },
  {
    path: '/page/404',
    name: '404',
    component: () => import('@/components/404.vue'),
    hidden: true
  },
  {
    path: '/sub-app',
    name: 'sub-app',
    hidden: true
  },
  // {
  //   path: '/',
  //   name: 'index',
  //   component: () => import('@/components/Framework.vue'),
  //   redirect: '/home',
  //   title: '系统管理',
  //   hidden: false,
  //   icon: 'md-book',
  //   children: [
  //     {
  //       path: '/home',
  //       name: 'home',
  //       title: '首页',
  //       hidden: false,
  //       icon: 'ios-at',
  //       // redirect: '/home/system',
  //       component:  () => import('@/components/publish-center.vue'),
  //       children: [
  //         {
  //           path: '/system',
  //           name: 'system',
  //           title: '系统用户',
  //           hidden: false,
  //           icon: 'md-bulb',
  //           component: () => import('@/views/User.vue')
  //         },
  //         {
  //           path: '/permission',
  //           name: 'permission',
  //           title: '系统权限',
  //           hidden: false,
  //           icon: 'ios-analytics',
  //           component: () => import('@/views/Permission.vue')
  //         }
  //       ]
  //     },
  //     {
  //       path: '/about',
  //       hidden: false,
  //       name: 'about',
  //       title: '关于我们',
  //       icon: 'ios-alert',
  //       // route level code-splitting
  //       // this generates a separate chunk (about.[hash].js) for this route
  //       // which is lazy-loaded when the route is visited.
  //       // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  //       component: () => import('@/views/About.vue'),
  //       children: []
  //     }
  //   ]
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes: staticRoutes
})

const login_page = '/login'
const index_page = '/'

router.beforeEach((to, from ,next) => {
// debugger
 let token = cookie.get('TOKEN')
 let path = to.path
 // console.log('login_token', token)
 // 没有token 跳转到登录页
 if (!token && path === login_page) {
   next()
 } else if (!token && path !== login_page) {
   next ({path: login_page})
 } else {
   //有登录,且路由到登录页
   if (token && path === login_page) {
     next({path: index_page})
   } else {
     // debugger
     let hasGetInfo = store.state.user.hasGetInfo
     if (!hasGetInfo) {
       store.dispatch('getUserInfo', token).then(response => {
         store.dispatch('getRouters').then(response => {
           // debugger
           // let routers = response.data
           // let systemRouters = JSON.parse(window.sessionStorage.getItem('SYSTEM_ROUTER'))
           // console.log('routers', routers)
           // console.log('staticRoutes.concat(routers)', staticRoutes.concat(routers))
           let systemRouters = store.state.app.systemRouters
           router.addRoutes(systemRouters.concat([{
             path: '*',
             redirect: '/page/404',
             hidden: true
           }]))
           next({ ...to })
         })
       })
       // next()
     } else {
       next()
     }
   }
 }
})

export default router
