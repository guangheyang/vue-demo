import axios from 'axios'

// 请求拦截器
axios.interceptors.request.use(request => {
    request.url += '.json'
    return request
})

// 响应拦截器
axios.interceptors.response.use(response => {
    if (response.status === 200) {
        return response.data.data
    }
    return response
})

export default axios