import { defineStore } from 'pinia'
import { ref } from 'vue'
import { userGetUserInfoService } from '@/api/user'

// 用户模块 token  setToken  removeToken
export const useUserStore = defineStore(
  'big-user',
  () => {
    const token = ref('')
    const setToken = (newToken) => {
      token.value = newToken
    }
    const removeToken = () => {
      token.value = ''
    }
    const user = ref({})
    const getUserInfo = async () => {
      const res = await userGetUserInfoService()
      user.value = res.data.data
    }
    const setUSer = (obj) => (user.value = obj)
    return {
      token,
      setToken,
      removeToken,
      user,
      getUserInfo,
      setUSer
    }
  },
  {
    persist: true
  }
)
