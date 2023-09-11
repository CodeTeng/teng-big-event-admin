<script setup>
import { ref } from 'vue'
import { articleGetChannelService } from '@/api/article'

const channelList = ref([])
const emit = defineEmits(['update:modelValue'])
const getChannelList = async () => {
  const res = await articleGetChannelService()
  channelList.value = res.data.data
}
getChannelList()

defineProps({
  modelValue: {
    type: [Number, String]
  }
})
</script>

<template>
  <el-select
    :model-value="modelValue"
    @update:modelValue="emit('update:modelValue', $event)"
  >
    <el-option
      v-for="item in channelList"
      :key="item.id"
      :label="item.cate_name"
      :value="item.id"
    ></el-option>
  </el-select>
</template>

<style scoped></style>
