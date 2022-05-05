<script setup lang="ts">
import { ref } from 'vue'
import Today from '@/components/Calendar/src/components/Today.vue'
import Rest from '@/components/Calendar/src/components/Rest.vue'
import RemindItem from '@/components/Remind/src/components/RemindItem.vue'
import { WorkBar } from '@/components/WorkBar'
import { JobManagementHeader } from '@/components/JobManagementHeader'
import AddEmployee from '@/views/Induction/components/AddEmployee.vue'

const title = ref('这是一个测试页')
</script>

<template>
  <h1>{{ title }}</h1>
  <Today />
  <Rest />
  <RemindItem>
    <template #tag> 入职 </template>
    <template #default> 王俊凯明天入职 </template>
  </RemindItem>
  <WorkBar />
  <JobManagementHeader title="入职管理" sub="待入职员工" :person="16" />
  <AddEmployee />
</template>

<style scoped lang="less"></style>
