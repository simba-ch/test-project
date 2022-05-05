<script setup lang="ts">
import { ElCalendar } from 'element-plus'
import { onMounted, reactive, ref } from 'vue'
import Today from './components/Today.vue'
import { includeDay, equalDay, includeRest } from './helper'
import { getCustomRest, getRemind } from '@/api/remind'
import Rest from './components/Rest.vue'
const calendar = ref()
const selectDate = (val: string) => {
  calendar.value.selectDate(val)
}
let mark: any = reactive([])
let customRest: any = reactive(['abc'])
onMounted(async () => {
  mark.value = await getRemind()
  customRest.value = await getCustomRest()
})
</script>

<template>
  <el-calendar ref="calendar">
    <template #header="{ date }">
      <div>
        <span>{{ date }}</span>
        <el-button size="small" @click="selectDate('prev-month')" class="btnSwitchMonth"
          >&lt;</el-button
        >
        <el-button size="small" @click="selectDate('next-month')" class="btnSwitchMonth"
          >></el-button
        >
      </div>
      <el-button size="small" @click="selectDate('today')" class="pointer">回今天</el-button>
    </template>
    <template #dateCell="{ data }">
      <div :class="data.isSelected ? 'is-selected' : ''" class="date">
        <div style="position: relative">
          <Today v-if="equalDay(new Date(), data.day)" />
          <div v-else>
            {{ parseInt(data.day.split('-')[2]) }}
          </div>
          <div class="mark" v-if="includeDay(mark, data.day)"> · </div>
          <Rest class="rest" v-if="includeRest(customRest, data.day)" />
        </div>
      </div>
    </template>
  </el-calendar>
</template>

<style scoped lang="less">
.pointer {
  cursor: pointer;
}

.btnSwitchMonth {
  .pointer();
  margin: 0 5px;
}

.date {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mark {
  text-align: center;
  position: absolute;
  font-size: 40px;
  position: absolute;
  top: -10%;
  color: red;
}

.rest {
  position: absolute;
  transform: scale(0.8);
  right: -60%;
  top: -70%;
}
</style>
