<script setup>
import { RouterView } from 'vue-router'
import { useRoute, useRouter } from 'vue-router'

import { useCountStore, useUserStore } from '@/stores'

const router = useRouter()
const route = useRoute()

const userStore = useUserStore()
const counterStore = useCountStore()

const goList = () => {
  router.push('/list')
  console.log(router, route)
}
</script>

<template>
  <div>
    我是APP
    <el-button @click="$router.push('/home')">跳首页</el-button>
    <el-button @click="goList">跳转列表</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <p>{{ userStore.token }}</p>
    <el-button
      @click="userStore.setToken('Bearer sdhasjkdkajshdkjahsk')"
      type="primary"
      >登录</el-button
    >
    <el-button @click="userStore.removeToken()" type="success">退出</el-button>
    <div>{{ counterStore.count }}</div>
    <el-button @click="counterStore.addCount()" type="primary">增加</el-button>
    <RouterView />
  </div>
</template>

<style scoped></style>
