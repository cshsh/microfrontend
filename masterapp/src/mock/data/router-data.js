export default [
  // {
  //   path: '/login',
  //   name: 'login',
  //   icon: '',
  //   component: () => import('@/components/Login.vue'),
  //   hidden: true
  // },
  // {
  //   path: '/sub-app',
  //   name: 'sub-app',
  //   hidden: true
  // },
  {
    path: '/',
    name: 'index',
    component: 'components/Framework.vue',
    redirect: '/home',
    title: '系统管理',
    hidden: false,
    icon: 'md-book',
    children: [
      {
        path: '/home',
        name: 'home',
        title: '首页',
        hidden: false,
        icon: 'ios-at',
        // redirect: '/home/system',
        component:  'components/publish-center.vue',
        children: [
          {
            path: '/system',
            name: 'system',
            title: '系统用户',
            hidden: false,
            icon: 'md-bulb',
            component: 'views/User.vue'
          },
          {
            path: '/permission',
            name: 'permission',
            title: '系统权限',
            hidden: false,
            icon: 'ios-analytics',
            component: 'views/Permission.vue'
          }
        ]
      },
      {
        path: '/about',
        hidden: false,
        name: 'about',
        title: '关于我们',
        icon: 'ios-alert',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        component: 'views/About.vue',
      }
    ]
  }
]
