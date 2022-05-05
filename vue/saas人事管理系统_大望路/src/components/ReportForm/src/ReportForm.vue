<script setup lang="ts">
import { ElTable, ElTableColumn, ElPagination, ElButton, ElButtonGroup } from 'element-plus'
import { ref } from 'vue'
const currentPage4 = ref(4)
const pageSize4 = ref(20)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)
const active = ref(0)
const changeActiveHandler = (num: number) => {
  console.log('🚀 ~ file: ReportForm.vue ~ line 11 ~ changeActiveHandler ~ num', num)
  active.value = num
}
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]
</script>

<template>
  <div class="report-form-wrapper">
    <div class="report-form-list">
      <div class="day-report-form" @click="changeActiveHandler(0)">HR日报表</div>
      <el-button-group size="large">
        <el-button :class="{ active: active === 1 }" @click="changeActiveHandler(1)"
          >HR周报表</el-button
        >
        <el-button :class="{ active: active === 2 }" @click="changeActiveHandler(2)"
          >HR月报表</el-button
        >
        <el-button :class="{ active: active === 3 }" @click="active = 3">HR年报表</el-button>
        <el-button :class="{ active: active === 4 }" @click="active = 4">培训学院报表</el-button>
        <el-button :class="{ active: active === 5 }" @click="active = 5">测评中心</el-button>
      </el-button-group>
    </div>
    <div class="details">详细内容</div>
    <el-table :data="tableData" stripe>
      <el-table-column prop="date" label="Date" width="" align="center" />
      <el-table-column prop="name" label="Name" width="180" align="center" />
      <el-table-column prop="date" label="Date" width="180" align="center" />
      <el-table-column prop="name" label="Name" width="180" align="center" />
      <el-table-column prop="date" label="Date" width="180" align="center" />
      <el-table-column prop="name" label="Name" width="180" align="center" />
      <el-table-column prop="address" label="Address" align="center" />
    </el-table>
    <el-pagination
      v-model:currentPage="currentPage4"
      v-model:page-size="pageSize4"
      :page-sizes="[5, 10, 20, 50]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<style scoped lang="less">
.report-form-wrapper {
  background-color: #fff;
  padding: 20px 20px 10px 10px;

  .report-form-list {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    .day-report-form {
      margin-right: 20px;
      cursor: pointer;
    }

    .el-button-group {
      button {
        background-color: #f9f9f9;

        &:hover {
          border: 2px solid #067bff;
        }

        &.active {
          color: #fff;
          background-color: #067bff;
          border: #067bff;
          box-shadow: -1px -1px 5px 1px rgba(6, 123, 255, 0.6);

          &:hover {
            transform: scale(1.1, 1.1);
            box-shadow: none;
          }
        }
      }
    }
  }

  .details {
    display: flex;
    font-weight: bolder;
    margin-bottom: 15px;

    &::before {
      content: '';
      display: inline-block;
      background-color: black;
      width: 5px;
      margin-right: 10px;
    }
  }
}
</style>
