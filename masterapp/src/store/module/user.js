import cookie from 'js-cookie'
const Tokenkey = 'TOKEN'
import {login} from '@/api/login'
import {getUserInfo} from '@/api/user'
export default {
  state: {
    token: '',
    userId: '',
    username: '',
    hasGetInfo: false, // 标识是否有用户信息
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      var expiryDate = new Date()
      // cookie 有效时间 1 * 60 * 60 * 1000 毫秒
      var expiryTime = expiryDate.setTime(60 * 60 * 1000) // 一小时
      cookie.set(Tokenkey, token, {expires: expiryTime})
    },
    removeToken(state, token) {
      state.token = ''
      cookie.remove(Tokenkey)
    },
    setUserId(state, userId) {
      state.userId = userId
    },
    setUsername(state, username) {
      state.username = username
      console.log('state.username', state.username)
    },
    setHasGetInfo(state, hasGetInfo) {
      state.hasGetInfo = hasGetInfo
    }
  },
  actions: {
    handleLogin({commit}, {username, password}) {
      console.log(username, password)
      return new Promise((resolve, reject) => {
        login(username, password).then(response => {
          if(response.status === 200) {
            let token = response.data.token
            commit('setToken', token)
            resolve(response)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    getUserInfo({commit}, token) {
      return new Promise((resolve, reject) => {
         getUserInfo(token).then(res => {
           let userId = res.data.userId
           commit('setUserId', userId)
           console.log('res.data', res.data)
           let username = res.data.name
           commit('setUsername',username)
           commit('setHasGetInfo',true)
           resolve(res)
         }).catch(error => {
           reject(error)
         })
      })
    },
    logout({commit}) {
      cookie.remove(Tokenkey)
      commit('setHasGetInfo',false)
    }
  }
}
