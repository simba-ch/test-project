<script setup lang="ts">
import { ElButton, ElMessage } from 'element-plus'
import { reactive, onMounted } from 'vue'
import RemindSetItem from '@/components/RemindSet/src/components/RemindSetItem.vue'
import { IRemindSet } from './type'
import { getRemindSet } from '@/api/remind'
import { setRemindSet } from '../../api/remind'
import { BackButton } from '@/components/BackButton'
let remindSet: IRemindSet[] = reactive([])
const modify: Set<number> = new Set()

const changeRadio = (i, id) => {
  remindSet[i].remind = id
  modify.add(i)
}
const changeDay = (i, day) => {
  if (validateDay(day)) {
    remindSet[i].day = day
    modify.add(i)
  }
}
onMounted(async () => {
  const data: any = await getRemindSet()
  return remindSet.push(...data)
})
const save = async () => {
  const temp: any = []
  for (const i of modify) {
    temp[i] = setRemindSet(remindSet[i].id, JSON.stringify(remindSet[i]))
  }
  await Promise.all(temp)
  remindSet.splice(0)
  const data: any = await getRemindSet()
  remindSet.push(...data)
}
function validateDay(day) {
  const numberForDay = +day
  if (numberForDay <= 0 || numberForDay % 1 !== 0 || numberForDay >= 1000) {
    ElMessage({
      type: 'error',
      message: '请输入正确的天数【正整数且小于1000】'
    })
    return false
  }
  return true
}
</script>

<template>
  <div class="remind-set-wrapper">
    <div class="top">
      <BackButton />
      <p class="title">设置待办提醒</p>
    </div>
    <RemindSetItem
      v-for="(item, i) in remindSet"
      :radio="item.remind"
      :day="item.day"
      :key="item.title"
      @change-item="(id) => changeRadio(i, id)"
      @update-day="(day) => changeDay(i, day)"
      >{{ item.title }}
    </RemindSetItem>
    <el-button type="primary" class="save" @click="save">保存</el-button>
  </div>
</template>

<style scoped lang="less">
.remind-set-wrapper {
  background-color: #fff;
  margin: -20px 0 0 -20px;
  width: calc(100% + 40px);
  padding: 30px;

  .top {
    display: flex;
    align-items: center;
    margin-bottom: 40px;

    .title {
      font-weight: bolder;
      font-size: 18px;
      margin-left: 30px;
    }
  }

  .save {
    display: block;
    margin: auto;
  }
}
</style>
