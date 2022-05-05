<script setup lang="ts">
import { ElTag } from 'element-plus'
</script>

<template>
  <li class="remindItem">
    <el-tag type="info">
      <slot name="tag"></slot>
    </el-tag>
    <div class="info">
      <slot></slot>
    </div>
  </li>
</template>

<style scoped lang="less">
.remindItem {
  list-style: none;
}

.info {
  display: inline-block;
  margin-left: 10px;
  font-weight: bolder;
  vertical-align: bottom;
}
</style>
