<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { ElTabs, ElTabPane } from 'element-plus'
import RemindItem from './components/RemindItem.vue'
import { getMonthBirthdays, getReminds, getTodayBirthdays, getTodayReminds } from '@/api/remind'
const activeName = ref('first')
const todayItems: any = reactive(await getTodayReminds())
const reminds: any = reactive(await getReminds())
const todayBirthdays: any = reactive(await getTodayBirthdays())
const monthBirthdays: any = reactive(await getMonthBirthdays())
const todayItemsCount = computed(() => todayItems.length)
const remindsCount = computed(() => reminds.length)
const todayBirthdaysCount = computed(() => todayBirthdays.length)
const monthBirthdaysCount = computed(() => monthBirthdays.length)
</script>

<template>
  <div class="remindWrapper">
    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane :label="`今日待办（${todayItemsCount}）`" name="first">
        <div v-if="todayItemsCount === 0" class="noRemind"> 今日所有的待办已经完成了！ </div>
        <RemindItem v-else v-for="(item, i) in todayItems" :key="i">
          <template #tag>
            {{ item.type }}
          </template>
          <template #default>
            {{ item.affair.describe }}
          </template>
        </RemindItem>
      </el-tab-pane>
      <el-tab-pane :label="`提前提醒（${remindsCount}）`" name="second">
        <div v-if="remindsCount === 0" class="noRemind"> 当前没有提醒！ </div>
        <RemindItem v-else v-for="(item, i) in reminds" :key="i">
          <template #tag>
            {{ item.type }}
          </template>
          <template #default>
            {{ item.affair.describe }}
          </template>
        </RemindItem>
      </el-tab-pane>
      <el-tab-pane :label="`今日生日员工(${todayBirthdaysCount})`" name="third">
        <div v-if="todayBirthdaysCount === 0" class="noRemind"> 今日没有到员工生日！ </div>
        <RemindItem v-else v-for="(item, i) in todayBirthdays" :key="i">
          <template #tag>
            {{ item.type }}
          </template>
          <template #default>
            {{ item.affair.describe }}
          </template>
        </RemindItem>
      </el-tab-pane>
      <el-tab-pane :label="`本月员工生日（${monthBirthdaysCount}）`" name="fourth">
        <div v-if="monthBirthdaysCount === 0" class="noRemind"> 本月没有员工生日！ </div>
        <RemindItem v-else v-for="(item, i) in monthBirthdays" :key="i">
          <template #tag>
            {{ item.type }}
          </template>
          <template #default>
            <div class="monthBirthDescribe">
              <span>{{ item.affair.name }}</span>
              <span>{{ item.affair.office }}</span>
              <span>{{ item.affair.join }}</span>
              <span>{{ item.affair.id }}</span>
            </div>
          </template>
        </RemindItem>
      </el-tab-pane>
    </el-tabs>
    <div class="seting">
      <router-link :to="{ name: 'remindSet' }">
        <img src="@/assets/imgs/remindSeting.png" />
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="less">
.remindWrapper {
  position: relative;
  margin: 20px;
  height: calc(100% - 20px);

  .seting {
    position: absolute;
    top: 8px;
    right: 27px;
    margin: 0 16px;
  }
}

.demo-tabs {
  background-color: #fff;
  height: 100%;
  padding-left: 40px;

  .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
  }
}

.monthBirthDescribe {
  span:not(:first-child) {
    margin: 0 20px;
  }
}

.noRemind {
  text-align: center;
  color: #afafaf;
  margin-top: 200px;
}
</style>
