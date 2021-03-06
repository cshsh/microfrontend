import Vue from 'vue'
import Vuex from 'vuex'
import user from './module/user'
import app from './module/app'
import microApps from './module/microApps'
Vue.use(Vuex)

export default new Vuex.Store({
   state: {
   },
   mutation: {
   },
   actions: {
   },
   modules: {
     user,
     app,
     microApps
   }
})
// export default store
