import {getRouters}from '@/api/router'
import {staticRoutes} from '@/router'
import {
  getBreadCrumbList,
  getHomeRoute
} from '@/libs/util'

export default {
  state: {
    systemRouters: [],
    breadCrumbList: []
  },
  mutations: {
   setRouters(state, routes){
     state.systemRouters = routes
   },
   setBreadCrumb (state, route) {
      // debugger
      state.breadCrumbList = getBreadCrumbList(route, state.homeRoute)
    },
   setHomeRoute (state, routes) {
      state.homeRoute = getHomeRoute(routes, homeName)
    },
  },
  actions: {
     getRouters({commit}) {
       return new Promise((resolve, reject) => {
         getRouters().then(response => {
           console.log('menus...', response.data)
           let routers = response.data
           // let formRouers = formatRoutes(routers)
           let formRouers = makeRoute(routers)
           let systemRouters = staticRoutes.concat(formRouers)
           console.log('systemRouters>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', systemRouters)
           commit('setRouters', systemRouters)
           // window.sessionStorage.setItem('SYSTEM_ROUTER', JSON.stringify(systemRouters))
           // console.log('xxxxxxxxxxxxxxxxxxx', (JSON.parse(window.sessionStorage.getItem('SYSTEM_ROUTER'))))
           resolve(response)
         }).catch(error => {
           reject(error)
         })
       })
     }
  },

  generateRouter({commit}, routers) {
    console.log('routers~~~~~~~~~~~~~~~~~~~~~~~~`', routers)
    commit('setRouters', routers)
  }
}
export const makeRoute = function(items) {
  let routes = []
  for (var i =0;i<items.length;i++) {
    items[i] = formateRoute(items[i])
    if (items[i].children && items[i].children.length > 0) {
      items[i].children = makeRoute(items[i].children)
    }
  }
  return items
}
export const formateRoute = (item) => {
  let route = item
  let a = item.component
  route.component = () => import(`@/${a}`)
  return route
}
export const formatRoutes = (routers) => {
  let sysRouters = []
  for (let r of routers) {
    if (r.children && r.children.length > 0 ) {
      var children = formatRoutes(r.children)
    }
    const router = {
      path: r.path,
      redirect: r.redirect,
      component: () => import(eval(r.component)),
      // component: () => eval(import(r.component)),
      name: r.name, // 唯一标识
      icon: r.icon,
      hidden: r.hidden,
      children: children
    }
    sysRouters.push(router)
  }
  return sysRouters
}
