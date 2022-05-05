<script setup lang="ts">
import { computed, onBeforeMount, reactive, ref } from 'vue'
import { ContentHeader, SearchIcon } from '@/components/ContentHeader'
import {
  ElMessage,
  ElButton,
  ElInput,
  ElDatePicker,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElMessageBox,
  ElDrawer,
  ElForm,
  ElFormItem,
  ElSelect,
  ElOption,
  FormInstance,
  FormRules
} from 'element-plus'
import { getJobs, deleteJob, addRecruitJob } from '@/api/recruit'
import { stringToArrayMap } from './helper'

const date = ref('')
const post = ref('')
const jobs: any = reactive([])
const jobsNumber = computed(() => jobs.length)
onBeforeMount(async () => {
  const resData: any = await getJobs()
  jobs.push(...resData)
})
const searchHandler = () => {
  ElMessage({
    message: '查询条件已成功发往后台，预计查询时间【半年】，请半年后再来查看结果',
    type: 'success'
  })
}
const resetHandler = () => {
  post.value = ''
  date.value = ''
}
const addJob = () => {
  drawer.value = true
}
const currentPage = ref(5)
const pageSize = ref(10)
const handleSizeChange = (value) => {
  console.log('🚀 ~ file: Induction.vue ~ line 88 ~ handleSizeChange ~ value', value)
}
const handleCurrentChange = (value) => {
  console.log('🚀 ~ file: Induction.vue ~ line 92 ~ handleCurrentChange ~ value', value)
}

const deleteJobHandler = (record) => {
  ElMessageBox.confirm('确认删除？', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    center: true,
    draggable: true
  })
    .then(async () => {
      await deleteJob(record.id)
      const index = jobs.findIndex((item) => item.id === record.id)
      jobs.splice(index, 1)
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
const drawer = ref(false)
const jobFormRef = ref<FormInstance>()
const jobForm = reactive({
  job: '产品经理',
  experience: '',
  education: '本科及以上',
  salary: '',
  area: '',
  number: 1,
  who: '',
  department: '研发部',
  jobDescribe: '',
  requirements: ''
})
const rules = reactive<FormRules>({
  job: [{ required: true, message: '请输入招聘岗位', trigger: 'blur' }],
  experience: [{ required: true, message: '请输入工作经验', trigger: 'blur' }],
  education: [{ required: true, message: '请选择学历', trigger: 'blur' }],
  salary: [{ required: true, message: '请输入薪资待遇', trigger: 'blur' }],
  area: [{ required: true, message: '请输入工作地区', trigger: 'blur' }],
  number: [{ required: true, message: '请输入招聘人数', trigger: 'blur' }],
  who: [{ required: true, message: '请输入需求人', trigger: 'blur' }],
  department: [{ required: true, message: '请选择部门', trigger: 'blur' }],
  jobDescribe: [{ required: true, message: '请输入职位描述', trigger: 'blur' }],
  requirements: [{ required: true, message: '岗位要求', trigger: 'blur' }]
})
const departments = ['研发部']
const educations = ['高中', '大专', '本科及以上', '博士']
const saveForm = async (formInstance) => {
  drawer.value = false
  const req = {
    ...jobForm,
    jobDescribe: stringToArrayMap(jobForm.jobDescribe) as string[],
    requirements: stringToArrayMap(jobForm.requirements) as string[],
    time: new Date().toLocaleDateString()
  }
  if (!formInstance) return
  await formInstance.validate(async (valid, fields) => {
    if (valid) {
      const res: any = await addRecruitJob(req)
      jobs.push(res)
    } else {
      console.log('error submit!', fields)
    }
  })
}
const cancelForm = (formInstance) => {
  drawer.value = false
  if (!formInstance) return
  formInstance.resetFields()
}
const posts = ['产品经理']
</script>

<template>
  <ContentHeader
    title="招聘计划"
    sub="招聘岗位"
    :person="jobsNumber"
    @search-handler="searchHandler"
    @reset-handler="resetHandler"
  >
    <template #rightTop>
      <div>
        <router-link :to="{ name: 'innerPush' }">
          <el-button type="primary" plain class="ml-3">内推管理</el-button>
        </router-link>
        <router-link :to="{ name: 'platformInfo' }">
          <el-button type="primary" plain class="ml-3">招聘信息平台管理</el-button>
        </router-link>
        <router-link :to="{ name: 'interviewManagement' }">
          <el-button type="primary" plain class="ml-3">面试管理</el-button>
        </router-link>
        <router-link :to="{ name: 'resumeDatabase' }">
          <el-button type="primary" plain class="ml-3">简历库</el-button>
        </router-link>
      </div>
    </template>
    <template #leftBottom>
      <div class="left-bottom">
        <el-input
          v-model="post"
          placeholder="岗位"
          input-style="text-align:center;"
          class="w-100"
          :suffix-icon="SearchIcon"
        />

        <el-date-picker v-model="date" type="date" placeholder="时间" style="width: 150px" />
      </div>
    </template>
    <template #default>
      <div>
        <el-button type="primary" class="float-right" @click="addJob">添加岗位</el-button>
      </div>
    </template>
  </ContentHeader>
  <el-table :data="jobs" style="width: 100%" class="mt-20">
    <el-table-column prop="job" label="招聘岗位" width="120" />
    <el-table-column prop="experience" label="工作经验" width="120" />
    <el-table-column prop="education" label="学历" width="120" />
    <el-table-column prop="salary" label="薪资待遇" width="120" />
    <el-table-column prop="area" label="工作地点" width="150" />
    <el-table-column prop="number" label="招聘人数" width="120" />
    <el-table-column prop="who" label="需求人" width="120" />
    <el-table-column prop="time" label="发布时间" width="120" />
    <el-table-column label="操作">
      <template #default="scope">
        <div class="operation">
          <div>
            <router-link :to="{ name: 'jobDetails', params: { id: scope.row.id } }">
              查看
            </router-link>
          </div>
          <div @click="deleteJobHandler(scope.row)"> 删除 </div>
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
  <el-drawer
    v-model="drawer"
    direction="rtl"
    :with-header="false"
    destroy-on-close
    class="recruit-drawer"
  >
    <div>
      <h2 class="recruit-drawer-title">添加岗位</h2>
      <h3 class="recruit-drawer-subtitle">基本信息</h3>

      <el-form
        ref="jobFormRef"
        :model="jobForm"
        label-width="120px"
        class="demo-ruleForm"
        :rules="rules"
      >
        <el-form-item label="招聘部门" prop="department">
          <el-select v-model="jobForm.department" placeholder="请选择招聘部门">
            <el-option
              v-for="department in departments"
              :key="department"
              :label="department"
              :value="department"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="招聘岗位" prop="job">
          <el-select v-model="jobForm.job" placeholder="请输入招聘岗位">
            <el-option v-for="job in posts" :key="job" :label="job" :value="job" />
          </el-select>
        </el-form-item>
        <el-form-item label="工作经验" prop="experience">
          <el-input v-model="jobForm.experience" placeholder="请输入工作经验" />
        </el-form-item>
        <el-form-item label="薪资待遇" prop="salary">
          <el-input v-model="jobForm.salary" placeholder="请输入薪资待遇" />
        </el-form-item>
        <el-form-item label="学历" prop="education">
          <el-select v-model="jobForm.education" placeholder="请选择学历要求">
            <el-option
              v-for="education in educations"
              :key="education"
              :label="education"
              :value="education"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="工作地点" prop="area">
          <el-input v-model="jobForm.area" placeholder="请输入工作地点" />
        </el-form-item>
        <el-form-item label="招聘人数" prop="number">
          <el-input v-model.number="jobForm.number" placeholder="请输入招聘人数" />
        </el-form-item>
        <el-form-item label="需求人" prop="who">
          <el-input v-model="jobForm.who" placeholder="请输入需求人" />
        </el-form-item>
        <el-form-item label="职位描述" prop="jobDescribe">
          <el-input
            v-model="jobForm.jobDescribe"
            type="textarea"
            placeholder="请输入职位描述，用‘;’分隔"
          />
        </el-form-item>
        <el-form-item label="岗位要求" prop="requirements">
          <el-input
            v-model="jobForm.requirements"
            type="textarea"
            placeholder="请输入岗位要求，用‘;’分隔"
          />
        </el-form-item>
        <el-form-item>
          <el-button @click="cancelForm(jobFormRef)">取消</el-button>
          <el-button type="primary" @click="saveForm(jobFormRef)">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-drawer>
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

.ml-3 {
  margin-left: 30px;
}
.recruit-drawer-title {
  font-size: 18px;
  font-weight: bolder;
  text-align: center;
}
.recruit-drawer-subtitle {
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 20px 44px;
}
.recruit-drawer {
  label {
    font-weight: bold;
    color: #f00;
  }
}
</style>
