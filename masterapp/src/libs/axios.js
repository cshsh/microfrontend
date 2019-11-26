import axios from 'axios'
import config from '../config'
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
let instance = axios.create({
  baseURL: baseUrl
})

instance.interceptors.request.use(config => {
  return config
}, (error) => {

})

instance.interceptors.response.use(response => {
  return response
}, (error) => {
})
export default instance
