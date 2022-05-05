<script setup lang="ts">
import { deleteNoInductionEmployee, getNoInductionEmployee } from '@/api/job'
import { JobManagementHeader } from '@/components/JobManagementHeader'
import {
  ElMessage,
  ElMessageBox,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElDialog,
  ElInput
} from 'element-plus'
import { computed, onBeforeMount, reactive, ref } from 'vue'
import { INoInductionEmployee } from '../Induction/type'
let noInductionEmployee: INoInductionEmployee[] = reactive([])
onBeforeMount(async () => {
  const data: any = await getNoInductionEmployee()
  noInductionEmployee.push(...data)
})
const personNumber = computed(() => noInductionEmployee.length)
const currentPage = ref(5)
const pageSize = ref(10)
const handleSizeChange = (value) => {
  console.log('🚀 ~ file: Induction.vue ~ line 88 ~ handleSizeChange ~ value', value)
}
const handleCurrentChange = (value) => {
  console.log('🚀 ~ file: Induction.vue ~ line 92 ~ handleCurrentChange ~ value', value)
}
const confirmJoin = (record) => {
  ElMessageBox.confirm('确认员工已到岗', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    center: true,
    draggable: true
  })
    .then(async () => {
      await deleteNoInductionEmployee(record.id)
      const index = noInductionEmployee.findIndex((item) => item.id === record.id)
      noInductionEmployee.splice(index, 1)
      ElMessage({
        type: 'success',
        message: '确认成功'
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消删除'
      })
    })
}

const deletePerson = (record) => {
  ElMessageBox.confirm('确认删除？', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    center: true,
    draggable: true
  })
    .then(async () => {
      await deleteNoInductionEmployee(record.id)
      const index = noInductionEmployee.findIndex((item) => item.id === record.id)
      noInductionEmployee.splice(index, 1)
      ElMessage({
        type: 'success',
        message: '删除成功'
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消删除'
      })
    })
}

const showReason = (record) => {
  reasonDialog.value = true
  reason.value = record.reason
}

const reasonDialog = ref(false)
const reason = ref('')
</script>

<template>
  <JobManagementHeader title="未入职管理" sub="未入职员工" :person="personNumber" />
  <el-table :data="noInductionEmployee" style="width: 100%" class="mt-20">
    <el-table-column prop="name" label="姓名" width="120" />
    <el-table-column prop="department" label="部门" width="120" />
    <el-table-column prop="post" label="职位" width="120" />
    <el-table-column prop="phone" label="联系电话" width="150" />
    <el-table-column prop="join" label="入职时间" width="120" />
    <el-table-column label="操作">
      <template #default="scope">
        <div class="operation">
          <div @click="showReason(scope.row)"> 原因 </div>
          <div @click="confirmJoin(scope.row)"> 确认到岗 </div>
          <div @click="deletePerson(scope.row)"> 删除 </div>
        </div>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    v-model:currentPage="currentPage"
    v-model:page-size="pageSize"
    :page-sizes="[10, 20, 30, 50]"
    layout="total, sizes, prev, pager, next, jumper"
    :total="400"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
  <el-dialog v-model="reasonDialog" destroy-on-close :show-close="false">
    <label for="noJoinReason" class="reason-textarea clear">
      原因：
      <el-input
        id="noJoinReason"
        v-model="reason"
        :rows="4"
        type="textarea"
        class="textarea"
        disabled
      />
    </label>
  </el-dialog>
</template>

<style scoped lang="less">
.operation {
  display: flex;

  div {
    margin-right: 20px;
    color: #067bff;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
  }
}

.reason-textarea {
  font-weight: bold;

  .textarea {
    width: 80%;
    float: right;
  }
}

.clear::after {
  content: '';
  display: block;
  clear: both;
}
</style>
