<script setup lang="ts">
import { onBeforeMount, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import { BackButton } from '@/components/BackButton'
import { ElRow, ElCol, ElInput, ElSelect, ElOption, ElButton } from 'element-plus'
import { IJob } from '../Recruit/type'
import { validate } from './helper'
import { getRecruitJobInfo, modifyRecruitJobInfo } from '@/api/recruit'
import { stringToArrayMap } from '../Recruit/helper'
const route = useRoute()
const posts = ['产品经理']
const eductions = ['高中', '大专', '本科及以上', '博士']
const recruitInfo: IJob = reactive({}) as IJob
onBeforeMount(async () => {
  const resRecruitInfo = await getRecruitJobInfo(route.params.id as string)
  Object.assign(recruitInfo, resRecruitInfo)
})
const baseInfo = ref(false)
let tempBaseInfo = {}
const editBaseInfo = () => {
  baseInfo.value = true
  tempBaseInfo = {
    job: recruitInfo.job,
    education: recruitInfo.education,
    area: recruitInfo.area,
    experience: recruitInfo.experience,
    salary: recruitInfo.salary,
    number: recruitInfo.number
  }
}
const cancelBaseInfoEdit = () => {
  baseInfo.value = false
  Object.assign(recruitInfo, tempBaseInfo)
}
const saveBaseInfoEdit = async () => {
  if (validate(recruitInfo)) {
    baseInfo.value = false
    const resRecruitInfo = await modifyRecruitJobInfo(route.params.id as string, recruitInfo)
    Object.assign(recruitInfo, resRecruitInfo)
  }
}
const jobDescribe = ref(false)
const jobDescribeTextarea = ref('')
const editJobDescribe = () => {
  jobDescribe.value = true
  jobDescribeTextarea.value = stringToArrayMap(recruitInfo.jobDescribe) as string
}
const saveJobDescribe = async () => {
  recruitInfo.jobDescribe = stringToArrayMap(jobDescribeTextarea.value) as string[]
  if (validate(recruitInfo)) {
    jobDescribe.value = false
    const resRecruitInfo = await modifyRecruitJobInfo(route.params.id as string, recruitInfo)
    Object.assign(recruitInfo, resRecruitInfo)
  }
}
const requirements = ref(false)
const requirementsTextarea = ref('')
const editRequirements = () => {
  requirements.value = true
  requirementsTextarea.value = stringToArrayMap(recruitInfo.requirements) as string
}
const saveRequirements = async () => {
  recruitInfo.requirements = stringToArrayMap(requirementsTextarea.value) as string[]
  if (validate(recruitInfo)) {
    requirements.value = false
    const resRecruitInfo = await modifyRecruitJobInfo(route.params.id as string, recruitInfo)
    Object.assign(recruitInfo, resRecruitInfo)
  }
}
</script>

<template>
  <div class="header">
    <BackButton />
    <h1 class="header-title">招聘详情页</h1>
  </div>
  <div class="content">
    <el-row>
      <el-row class="base-info">
        <div class="item-title">基本信息</div>
        <div class="edit-btn" @click="editBaseInfo" v-if="!baseInfo">编辑</div>
      </el-row>
      <el-row :gutter="100" class="w-100">
        <el-col :span="12">
          <div class="mv-20px">
            招聘岗位:
            <el-select v-model="recruitInfo.job" placeholder="请选择招聘岗位" class="item">
              <el-option v-for="post in posts" :key="post" :label="post" :value="post" />
            </el-select>
          </div>
          <div class="mv-20px">
            学历:
            <el-select v-model="recruitInfo.education" placeholder="请选择招聘岗位" class="item">
              <el-option
                v-for="educiton in eductions"
                :key="educiton"
                :label="educiton"
                :value="educiton"
              />
            </el-select>
          </div>
          <div class="mv-20px">
            工作地点:
            <el-input v-model="recruitInfo.area" placeholder="请输入工作地点" class="item" />
          </div>
        </el-col>
        <el-col :span="12">
          <div class="mv-20px">
            工作经验:
            <el-input v-model="recruitInfo.experience" placeholder="请输入薪资待遇" class="item" />
          </div>
          <div class="mv-20px">
            薪资待遇:
            <el-input v-model="recruitInfo.salary" placeholder="输入薪资待遇" class="item" />
          </div>
          <div class="mv-20px">
            人数:
            <el-input v-model="recruitInfo.number" placeholder="请输入招聘人数" class="item" />
          </div>
        </el-col>
      </el-row>
      <el-row class="w-100" v-if="baseInfo">
        <el-col class="operation-btn">
          <el-button @click="cancelBaseInfoEdit">取消</el-button>
          <el-button type="primary" @click="saveBaseInfoEdit">保存</el-button>
        </el-col>
      </el-row>
    </el-row>
    <el-row class="mv-20px">
      <el-row class="base-info">
        <div class="item-title">职位描述</div>
        <div class="edit-btn" @click="editJobDescribe" v-if="!jobDescribe">编辑</div>
      </el-row>
      <el-row class="w-100 mv-20px">
        <ul v-if="!jobDescribe" class="decimal">
          <li v-for="(item, i) in recruitInfo.jobDescribe" :key="i">{{ item }}</li>
        </ul>
        <el-input type="textarea" v-if="jobDescribe" v-model="jobDescribeTextarea"
      /></el-row>
      <el-row class="w-100" v-if="jobDescribe">
        <el-col class="operation-btn">
          <el-button @click="jobDescribe = false">取消</el-button>
          <el-button type="primary" @click="saveJobDescribe">保存</el-button>
        </el-col>
      </el-row>
    </el-row>
    <el-row class="mv-20px">
      <el-row class="base-info">
        <div class="item-title">岗位要求</div>
        <div class="edit-btn" @click="editRequirements" v-if="!requirements">编辑</div>
      </el-row>
      <el-row class="w-100 mv-20px">
        <ul v-if="!requirements" class="decimal">
          <li v-for="(item, i) in recruitInfo.requirements" :key="i">{{ item }}</li>
        </ul>
        <el-input type="textarea" v-if="requirements" v-model="requirementsTextarea"
      /></el-row>
      <el-row class="w-100" v-if="requirements">
        <el-col class="operation-btn">
          <el-button @click="requirements = false">取消</el-button>
          <el-button type="primary" @click="saveRequirements">保存</el-button>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<style scoped lang="less">
.header {
  background-color: #fff;
  padding: 10px;

  .header-title {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 30px;
  }
}

.content {
  padding: 30px;
  background-color: #fff;
  margin-top: 40px;

  .base-info {
    width: 100%;
    justify-content: space-between;

    .item-title {
      font-weight: bold;
    }

    .edit-btn {
      float: right;
      color: #067bff;
      cursor: pointer;
    }
  }

  .item {
    float: right;
    width: 80%;
  }

  .operation-btn {
    text-align: center;
    margin-top: 20px;

    button {
      width: 20%;
    }
  }

  .decimal {
    list-style: decimal;
    margin-left: 20px;
  }
}

.w-100 {
  width: 100%;
}

.mv-20px {
  margin: 20px 0;
}
</style>
