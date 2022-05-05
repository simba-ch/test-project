<script setup lang="ts">
import {
  addEmployee,
  getNoJoinEmployee,
  deleteEmployee,
  addNoInductionEmployee,
  modifyEmployee
} from '@/api/job'
import { JobManagementHeader } from '@/components/JobManagementHeader'
import { reactive, onBeforeMount, computed, ref } from 'vue'
import { IEmployee } from './type'
import {
  ElTable,
  ElTableColumn,
  ElDialog,
  ElMessageBox,
  ElMessage,
  ElButton,
  ElInput,
  ElPagination
} from 'element-plus'
import AddEmployee from './components/AddEmployee.vue'
import { stringChannelDate } from './helper'
let noJoinPerson: IEmployee[] = reactive([])
onBeforeMount(async () => {
  const data: any = await getNoJoinEmployee()
  noJoinPerson.push(...data)
})
const personNumber = computed(() => noJoinPerson.length)
const addJob = () => {
  addEmployeeDialog.value = true
}

const confirmJoin = (record) => {
  ElMessageBox.confirm('确认员工已到岗', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    center: true,
    draggable: true
  })
    .then(async () => {
      await deleteEmployee(record.id)
      const index = noJoinPerson.findIndex((item) => item.id === record.id)
      noJoinPerson.splice(index, 1)
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
const noJoinDialog = ref(false)
const noJoinReason: any = ref('')
let noInductionPerson: any = {}
const noJoin = (record) => {
  noJoinDialog.value = true
  noInductionPerson = { ...record }
}
const confirmNoJoin = async () => {
  noJoinDialog.value = false
  noInductionPerson.reason = noJoinReason.value
  await deleteEmployee(noInductionPerson.id)
  const index = noJoinPerson.findIndex((item) => item.id === noInductionPerson.id)
  noJoinPerson.splice(index, 1)
  addNoInductionEmployee(noInductionPerson)
  noJoinReason.value = ''
}
const editEmployeeDialog = ref(false)
const editEmployee: any = reactive({})
const edit = (record) => {
  editEmployeeDialog.value = true
  Object.assign(editEmployee, record)
}
const cancelEdit = () => {
  editEmployeeDialog.value = false
}
const confirmEdit = async (record) => {
  editEmployeeDialog.value = false
  const resEmployee: any = await modifyEmployee(editEmployee.id, record)
  const index = noJoinPerson.findIndex((item) => item.id === resEmployee.id)
  noJoinPerson.splice(index, 1, resEmployee)
}
const addEmployeeDialog = ref(false)
const cancelAdd = () => {
  addEmployeeDialog.value = false
}
const confirmAdd = async (employee) => {
  addEmployeeDialog.value = false
  const reqData = {
    ...employee,
    join: stringChannelDate(employee.join)
  }
  const res: any = await addEmployee(reqData)
  noJoinPerson.push(res)
}
const currentPage = ref(5)
const pageSize = ref(10)
const handleSizeChange = (value) => {
  console.log('🚀 ~ file: Induction.vue ~ line 88 ~ handleSizeChange ~ value', value)
}
const handleCurrentChange = (value) => {
  console.log('🚀 ~ file: Induction.vue ~ line 92 ~ handleCurrentChange ~ value', value)
}
</script>

<template>
  <JobManagementHeader title="入职管理" sub="待入职员工" :person="personNumber" @add-job="addJob" />
  <el-table :data="noJoinPerson" style="width: 100%" class="mt-20">
    <el-table-column prop="name" label="姓名" width="120" />
    <el-table-column prop="department" label="部门" width="120" />
    <el-table-column prop="post" label="职位" width="120" />
    <el-table-column prop="phone" label="联系电话" width="150" />
    <el-table-column prop="join" label="入职时间" width="120" />
    <el-table-column label="操作">
      <template #default="scope">
        <div class="operation">
          <div @click="confirmJoin(scope.row)"> 确认到岗 </div>
          <div @click="noJoin(scope.row)"> 未到岗 </div>
          <div @click="edit(scope.row)"> 编辑 </div>
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
  <el-dialog v-model="addEmployeeDialog" destroy-on-close>
    <AddEmployee @cancel="cancelAdd" @confirm="confirmAdd" class="add-employee-dialog" />
  </el-dialog>
  <el-dialog v-model="noJoinDialog" destroy-on-close :show-close="false">
    <p class="no-join-dialog-title">确认员工未到岗</p>
    <label for="noJoinReason" class="reason-textarea clear">
      原因：
      <el-input
        id="noJoinReason"
        v-model="noJoinReason"
        :rows="4"
        type="textarea"
        placeholder="请输入原因"
        class="textarea"
      />
    </label>

    <template #footer>
      <div class="nojoin-dialog-footer">
        <el-button @click="noJoinDialog = false">取消</el-button>
        <el-button type="primary" @click="confirmNoJoin">确定</el-button>
      </div>
    </template>
  </el-dialog>
  <el-dialog v-model="editEmployeeDialog" destroy-on-close>
    <AddEmployee
      :name="editEmployee.name"
      :department="editEmployee.department"
      :post="editEmployee.post"
      :phone="editEmployee.phone"
      :join="editEmployee.join"
      @cancel="cancelEdit"
      @confirm="confirmEdit"
      class="add-employee-dialog"
    />
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

.add-employee-dialog {
  margin: 0 60px 30px;
}

.no-join-dialog-title {
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
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

.nojoin-dialog-footer {
  display: flex;
  justify-content: space-between;

  button {
    width: 45%;
  }
}
</style>
