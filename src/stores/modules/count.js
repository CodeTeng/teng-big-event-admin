import { defineStore } from 'pinia'
import { ref } from 'vue'

// 计数器模块
export const useCountStore = defineStore('big-count', () => {
  const count = ref(100)
  const addCount = () => {
    count.value++
  }
  return {
    count,
    addCount
  }
})
