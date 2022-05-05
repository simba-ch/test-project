<script setup lang="ts">
import { BackButton } from '@/components/BackButton'
import { ElRow, ElCol, ElButton } from 'element-plus'
import SearchIcon from './SearchIcon.vue'
const props = defineProps<{
  title: string
  sub?: string
  person?: number
}>()
const emit = defineEmits(['searchHandler', 'resetHandler'])
const searchHandler = () => {
  emit('searchHandler')
}
const resetHandler = () => {
  emit('resetHandler')
}
</script>

<template>
  <div class="header">
    <el-row class="top-row">
      <el-col :span="6" class="left-top">
        <BackButton />
        <div class="describe">
          <p class="title">{{ props.title }}</p>
          <p class="sub-describe"> {{ `${props?.sub} （${props?.person}）` }}</p>
        </div>
      </el-col>
      <el-col class="align-end" :span="18">
        <slot name="rightTop"></slot>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="20" class="vertical-center">
        <slot name="leftBottom"></slot>
        <div class="vertical-center">
          <el-button :icon="SearchIcon" type="primary" class="search" @click="searchHandler" />
          <el-button type="primary" @click="resetHandler">重置</el-button>
        </div>
      </el-col>
      <el-col :span="4">
        <slot></slot>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="less">
body {
  background-color: black;
}

.header {
  background-color: #fff;
  padding: 20px;

  .top-row {
    margin-bottom: 30px;

    .left-top {
      display: flex;

      .describe {
        margin-left: 30px;

        .title {
          font-size: 18px;
          font-weight: bolder;
        }

        .sub-describe {
          color: #808080;
          margin-top: 10px;
        }
      }
    }
  }

  .vertical-center {
    display: flex;
    align-items: center;
  }
  .align-end {
    .vertical-center();
    justify-content: flex-end;
  }

  .search {
    margin-right: 10px;
  }
}
</style>
