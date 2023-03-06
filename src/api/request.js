import axios from 'axios'

const service = axios.create({
  baseURL: 'https://netease-cloud-music-api-lucky-ya-q.vercel.app',
  timeout: 10000
})

service.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    return response.data
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    return Promise.reject(error)
  }
)

export default service
