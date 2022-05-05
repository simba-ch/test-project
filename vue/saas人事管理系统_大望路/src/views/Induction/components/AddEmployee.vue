<script setup lang="ts">
import { reactive } from 'vue'
import { ElForm, ElFormItem, ElInput, ElDatePicker, ElButton } from 'element-plus'
const props = defineProps<{
  name?: string
  department?: string
  post?: string
  phone?: string
  join?: any
}>()
const emit = defineEmits(['cancel', 'confirm'])
const employeeForm = reactive({
  name: props.name,
  department: props.department,
  post: props.post,
  phone: props.phone,
  join: props.join
})
const cancel = () => emit('cancel')
const confirm = () => emit('confirm', employeeForm)
</script>

<template>
  <div class="employee-form">
    <div class="title">添加入职</div>
    <el-form
      label-position="left"
      label-width="100px"
      :model="employeeForm"
      style="max-width: 460px"
    >
      <el-form-item label="面试者姓名">
        <el-input v-model="employeeForm.name" placeholder="请输入面试姓名" />
      </el-form-item>
      <el-form-item label="部门">
        <el-input v-model="employeeForm.department" placeholder="请选择部门" />
      </el-form-item>
      <el-form-item label="职位">
        <el-input v-model="employeeForm.post" placeholder="请选择职位" />
      </el-form-item>
      <el-form-item label="电话号码">
        <el-input v-model="employeeForm.phone" placeholder="请输入电话号码" />
      </el-form-item>
      <el-form-item label="预计入职日期">
        <el-date-picker v-model="employeeForm.join" type="date" placeholder="请选择入职日期" />
      </el-form-item>
    </el-form>
    <div class="btn-group">
      <el-button class="cancel-btn" @click="cancel">取消</el-button>
      <el-button type="primary" size="large" class="confirm-btn" @click="confirm">确定</el-button>
    </div>
  </div>
</template>

<style scoped lang="less">
.employee-form {
  text-align: center;
  .title {
    font-size: 18px;
    margin-bottom: 20px;
  }

  form {
    margin: auto;
  }
  .btn-group {
    margin-top: 40px;
    .cancel-btn {
      width: 100px;
      height: 40px;
      font-size: 15px;
    }
    .confirm-btn {
      width: 150px;
      height: 40px;
      font-size: 15px;
    }
  }
}
</style>
