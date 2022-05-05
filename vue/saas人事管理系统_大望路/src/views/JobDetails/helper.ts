import { ElMessage } from 'element-plus'
const recruitInfoMap = {
  job: '招聘岗位',
  experience: '工作经验',
  education: '学历',
  salary: '薪资待遇',
  area: '工作地区',
  number: '招聘人数',
  who: '需求人',
  department: '招聘部门',
  jobDescribe: '职位描述',
  requirements: '岗位要求'
}
export function validate(target) {
  const errValidates: string[] = []
  if (typeof target === 'object') {
    for (const key in target) {
      const value = target[key]
      if (!value || (Array.isArray(value) && value.length === 0)) {
        errValidates.push(key)
      }
    }
  }
  if (errValidates.length === 0) return true
  for (let i = 0; i < errValidates.length; i++) {
    const errValidate = errValidates[i]
    ElMessage.error(`【${recruitInfoMap[errValidate]}】 为空或者不合法`)
  }
  return false
}
