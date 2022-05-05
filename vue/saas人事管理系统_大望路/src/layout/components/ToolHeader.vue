<script lang="tsx">
import { defineComponent } from 'vue'
import { Collapse } from '@/components/Collapse'
import { UserInfo } from '@/components/UserInfo'
import { useDesign } from '@/hooks/web/useDesign'

const { getPrefixCls, variables } = useDesign()

const prefixCls = getPrefixCls('tool-header')

export default defineComponent({
  name: 'ToolHeader',
  setup() {
    return () => (
      <div
        id={`${variables.namespace}-tool-header`}
        class={[
          prefixCls,
          'h-[var(--top-tool-height)] relative px-[var(--top-tool-p-x)] flex items-center justify-between'
        ]}
      >
        <div class="h-full flex items-center">
          <Collapse class="hover-tigger" color="var(--top-header-text-color)"></Collapse>
        </div>

        <div class="h-full flex items-center">
          <UserInfo></UserInfo>
        </div>
      </div>
    )
  }
})
</script>

<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-tool-header';

.@{prefix-cls} {
  transition: left var(--transition-time-02);
}
</style>
