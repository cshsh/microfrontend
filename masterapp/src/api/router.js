import fetch from '../libs/axios'
// import { moduleApiUrl } from '@/api/urlConfig'
// const url = moduleApiUrl.permission_manager;
// const axios = new HttpRequest(url)

export const getRouters = () => {
  return new fetch({
    url: 'admin/get_routers',
    method: 'get'
  })
}
