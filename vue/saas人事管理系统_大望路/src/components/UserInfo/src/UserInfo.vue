<script setup lang="ts">
import { ElMessageBox, ElMessage } from 'element-plus'
import { useCache } from '@/hooks/web/useCache'
import { resetRouter } from '@/router'
import { useRouter } from 'vue-router'
import { loginOutApi } from '@/api/login'
import { useTagsViewStore } from '@/store/modules/tagsView'
import { ref } from 'vue'
const companyName = ref('大海科技')
const tagsViewStore = useTagsViewStore()
const creativeCommonsNumber = ref(0)

const { wsCache } = useCache()

const { replace } = useRouter()

const loginOut = () => {
  ElMessageBox.confirm('是否退出本系统？', '温馨提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(async () => {
      const res = await loginOutApi().catch(() => {})
      if (res) {
        wsCache.clear()
        tagsViewStore.delAllViews()
        resetRouter() // 重置静态路由表
        replace('/login')
      }
    })
    .catch(() => {})
}

const alertMassage = () => {
  ElMessage({
    message: `共${creativeCommonsNumber.value}条共享知识`,
    type: 'success'
  })
}
</script>

<template>
  <div class="topHeaderRight">
    <Icon :size="18" icon="svg-icon:creativeCommons" class="cursor-pointer" @click="alertMassage" />
    <span class="companyName">{{ companyName }}</span>
    <Icon :size="18" icon="svg-icon:logout" class="cursor-pointer" @click="loginOut" />
  </div>
</template>

<style lang="less">
.topHeaderRight {
  display: flex;
  margin: 0 10px;
  color: #fff;
  align-items: center;

  .companyName {
    margin: 0 10px;
  }
}
</style>
