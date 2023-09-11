import axios from 'axios'
import { useUserStore } from '@/stores'
import { ElMessage } from 'element-plus'
import router from '@/router'

const baseURL = 'http://big-event-vue-api-t.itheima.net'

const instance = axios.create({
  // 1. 基础地址，超时时间
  baseURL,
  timeout: 3000
})

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 2. 携带token
    const userStore = useUserStore()
    const token = userStore.token
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 4. 摘取核心响应数据
    if (response.data.code === 0) {
      return response
    }
    // 3. 处理业务失败
    // 处理业务失败, 给错误提示，抛出错误
    ElMessage.error(response.data.message || '服务异常')
    return Promise.reject(response.data)
  },
  function (error) {
    // 错误的默认情况 => 只要给提示
    ElMessage.error(error.response.data.message || '服务异常')
    // 5. 处理401错误
    // 错误的特殊情况 => 401 权限不足 或 token 过期 => 拦截到登录
    if (error.response?.status === 401) {
      router.push('/login')
    }

    return Promise.reject(error)
  }
)

export default instance
export { baseURL }
