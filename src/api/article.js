import request from '@/utils/request'

// 获取文章分类
export const articleGetChannelService = () => request.get('/my/cate/list')
// 添加文章分类
export const articleAddChannelService = (data) =>
  request.post('/my/cate/add', data)
// 编辑文章分类
export const articleEditChannelService = (data) =>
  request.put('/my/cate/info', data)
// 删除文章分类
export const articleDeleteChannelService = (id) =>
  request.delete('/my/cate/del', {
    params: { id }
  })

// 获取文章
export const articleGetListService = (params) =>
  request.get('/my/article/list', { params })
// 文章：添加文章
// 注意：data需要是一个formData格式的对象
export const articlePublishService = (data) =>
  request.post('/my/article/add', data)

// 文章：获取文章详情
export const articleGetDetailService = (id) =>
  request.get('/my/article/info', {
    params: { id }
  })

// 文章：编辑文章接口
export const articleEditService = (data) =>
  request.put('/my/article/info', data)

// 文章：删除文章接口
export const articleDeleteService = (id) =>
  request.delete('/my/article/info', { params: { id } })
