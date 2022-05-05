<script setup lang="ts">
import { ref } from 'vue'
import { ContentHeader } from '@/components/ContentHeader'
import { ElMessage, ElButton, ElInput, ElDatePicker } from 'element-plus'
import { useRouter } from 'vue-router'

const props = defineProps<{
  title: '入职管理' | '未入职管理'
  sub: '待入职员工' | '未入职员工'
  person: number
}>()
const emit = defineEmits(['addJob'])
const searchHandler = () => {
  ElMessage({
    message: '查询条件已成功发往后台，预计查询时间【半年】，请半年后再来查看结果',
    type: 'success'
  })
}
const resetHandler = () => {
  department.value = ''
  employee.value = ''
  date.value = ''
}
const router = useRouter()
const goNoInduction = () => {
  router.push({
    name: 'noInduction'
  })
}
const addJob = () => {
  emit('addJob')
}
const department = ref('')
const employee = ref('')
const date = ref('')
const disabledDate = (time: Date) => {
  if (props.title === '入职管理') return time.getTime() < Date.now() - 86400000
  return true
}
</script>

<template>
  <ContentHeader
    :title="props.title"
    :sub="props.sub"
    :person="props.person"
    @search-handler="searchHandler"
    @reset-handler="resetHandler"
  >
    <template #rightTop v-if="props.title === '入职管理'">
      <div>
        <el-button type="primary" plain class="float-right" @click="goNoInduction"
          >未入职管理</el-button
        >
      </div>
    </template>
    <template #leftBottom>
      <div class="left-bottom">
        <el-input
          v-model="department"
          placeholder="请输入部门"
          input-style="text-align:center;"
          v-if="props.title === '入职管理'"
          class="w-100"
        />

        <el-input
          v-model="employee"
          placeholder="搜索员工"
          input-style="text-align:center;"
          class="w-100"
        />
        <el-date-picker
          v-model="date"
          type="date"
          placeholder="日期"
          input-style="text-align:center;"
          :disabled-date="disabledDate"
          style="width: 150px"
        />
      </div>
    </template>
    <template #default v-if="props.title === '入职管理'">
      <div>
        <el-button type="primary" class="float-right" @click="addJob">添加入职</el-button>
      </div>
    </template>
  </ContentHeader>
</template>

<style scoped lang="less">
.left-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;
  .w-100 {
    width: 150px;
    margin-right: 30px;
  }
}

.float-right {
  float: right;
}

.text-center {
  text-align: center;
}
</style>
