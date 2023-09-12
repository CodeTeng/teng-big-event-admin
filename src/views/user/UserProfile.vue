<script setup>
import PageContainer from '@/components/PageContainer.vue'
import { ref } from 'vue'
import { useUserStore } from '@/stores'
import { userUpdateUserInfoService } from '@/api/user'

// 是在使用仓库中数据的初始值 (无需响应式) 解构无问题
const {
  user: { email, id, nickname, username },
  getUserInfo
} = useUserStore()

const userForm = ref({
  id,
  username,
  nickname,
  email
})

const rules = ref({
  nickname: [
    { required: true, message: '请输入用户昵称', trigger: 'blur' },
    {
      pattern: /^\S{2,10}$/,
      message: '昵称长度在2-10个非空字符',
      trigger: 'blur'
    }
  ],
  email: [
    { required: true, message: '请输入用户邮箱', trigger: 'blur' },
    {
      type: 'email',
      message: '请输入正确的邮箱格式',
      trigger: ['blur', 'change']
    }
  ]
})

const formRef = ref()

const onSubmit = async () => {
  // 等待校验结果
  await formRef.value.validate()
  // 提交修改
  await userUpdateUserInfoService(userForm.value)
  // 通知 user 模块，进行数据的更新
  getUserInfo()
  // 提示用户
  ElMessage.success('修改成功')
}
</script>

<template>
  <page-container title="基本资料">
    <el-row>
      <el-col :span="12">
        <el-form
          ref="formRef"
          :model="userForm"
          :rules="rules"
          label-width="100px"
          size="large"
        >
          <el-form-item label="登录名称">
            <el-input v-model="userForm.username" disabled></el-input>
          </el-form-item>
          <el-form-item label="用户昵称" prop="nickname">
            <el-input v-model="userForm.nickname"></el-input>
          </el-form-item>
          <el-form-item label="用户邮箱" prop="email">
            <el-input v-model="userForm.email"></el-input>
          </el-form-item>
          <el-button type="primary" @click="onSubmit">提交修改</el-button>
        </el-form>
      </el-col>
    </el-row>
  </page-container>
</template>

<style scoped></style>
