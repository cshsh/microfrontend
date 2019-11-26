import fetch from '../libs/axios'
// import { moduleApiUrl } from '@/api/urlConfig'
// const url = moduleApiUrl.permission_manager;
// const axios = new HttpRequest(url)

export const getUserInfo = (token) => {
    return new fetch({
        url: 'admin/get_info',
        params: {
            token
        },
        method: 'get'
    })
}

