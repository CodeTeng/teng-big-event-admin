import request from '@/utils/request'

// 用户注册请求
export const userRegisterService = ({ username, password, repassword }) =>
  request.post('/api/reg', { username, password, repassword })

// 用户登录请求
export const userLoginService = ({ username, password }) =>
  request.post('/api/login', { username, password })

// 获取用户的基本信息
export const userGetUserInfoService = () => request.get('/my/userinfo')

// 更新用户信息
export const userUpdateUserInfoService = ({ id, nickname, email }) =>
  request.put('/my/userinfo', { id, nickname, email })

// 上传用户头像
export const userUploadAvatarService = (avatar) =>
  request.patch('/my/update/avatar', { avatar })

// 重置密码
export const userUpdatePasswordService = ({ old_pwd, new_pwd, re_pwd }) =>
  request.patch('/my/updatepwd', { old_pwd, new_pwd, re_pwd })
