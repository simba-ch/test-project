<script setup lang="ts">
import { ElRow, ElCol, ElRadio, ElInput } from 'element-plus'
const props = defineProps<{
  radio: number
  day: number
}>()
const emit = defineEmits<{
  (e: 'changeItem', id: number): void
  (e: 'updateDay', value: string): void
}>()
const changeItem = (id: number) => {
  emit('changeItem', id)
}
const updateDay = (day: string) => {
  emit('updateDay', day)
}
</script>

<template>
  <el-row class="remind-item">
    <el-col :span="4">
      <slot></slot>
    </el-col>
    <el-col :span="4">
      <el-radio :model-value="props.radio" :label="0" size="large" @click="changeItem(0)"
        >不提醒</el-radio
      >
    </el-col>
    <el-col :span="4">
      <el-radio :model-value="props.radio" :label="1" size="large" @click="changeItem(1)"
        >仅当天提醒</el-radio
      >
    </el-col>
    <el-col :span="12" class="last-item">
      <el-radio :model-value="props.radio" :label="2" size="large" @click="changeItem(2)"
        >提前提醒，当天提醒</el-radio
      >
      <div class="set-day"
        >提前
        <el-input
          :model-value="props.day"
          :input-style="{ textAlign: 'center' }"
          @input="updateDay"
          class="input"
        />天提醒
      </div>
    </el-col>
  </el-row>
</template>

<style scoped lang="less">
.remind-item {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.last-item {
  display: flex;

  .set-day {
    display: flex;
    align-items: center;
  }

  .input {
    margin: 0 20px;
    width: 50px;

    .el-input__wrapper {
      padding: 0;
    }
  }
}
</style>
