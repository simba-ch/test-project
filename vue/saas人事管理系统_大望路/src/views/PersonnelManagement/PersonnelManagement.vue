<script setup lang="ts">
import { ElRow, ElCol } from 'element-plus'
import { Calendar } from '@/components/Calendar'
import { Remind } from '@/components/Remind'
import { WorkBar } from '@/components/WorkBar'
import { ReportForm } from '@/components/ReportForm'
</script>

<template>
  <div class="wrapper">
    <el-row :gutter="20">
      <el-col :span="8">
        <Calendar />
      </el-col>
      <el-col :span="16">
        <suspense>
          <Remind />
        </suspense>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <WorkBar />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <ReportForm />
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="less">
.wrapper {
  padding: 30px 20px 0;
}

.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  min-height: 36px;
  border-radius: 4px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
