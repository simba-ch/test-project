<script lang="tsx">
import { computed, defineComponent } from 'vue'
import { useAppStore } from '@/store/modules/app'
import { Backtop } from '@/components/Backtop'
import { renderTopLeft } from './components/useRenderLayout'
import { useDesign } from '@/hooks/web/useDesign'

const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('layout')

const appStore = useAppStore()

const layout = computed(() => appStore.getLayout)

export default defineComponent({
  name: 'Layout',
  setup() {
    return () => (
      <section class={[prefixCls, `${prefixCls}__${layout.value}`, 'w-[100%] h-[100%] relative']}>
        {renderTopLeft()}

        <Backtop></Backtop>
      </section>
    )
  }
})
</script>

<style lang="less" scoped>
:deep(.@{elNamespace}-scrollbar__view) {
  height: 100% !important;
}
</style>
