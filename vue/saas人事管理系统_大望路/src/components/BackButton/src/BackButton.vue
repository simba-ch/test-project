<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ElButton } from 'element-plus'
const router = useRouter()
const back = () => {
  router.go(-1)
}
</script>

<template>
  <el-button @click="back" class="back-button">
    <i class="left-arrow">&lt;</i>
    返回
  </el-button>
</template>

<style scoped lang="less">
.back-button {
  display: flex;
  align-items: center;
  cursor: pointer;
  .left-arrow {
    color: #17b3e6;
    font-size: 24px;
    margin-right: 10px;
  }
}
</style>
