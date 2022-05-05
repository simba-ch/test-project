import { computed } from 'vue'
import { useAppStore } from '@/store/modules/app'
import { Menu } from '@/components/Menu'
import AppView from './AppView.vue'
import ToolHeader from './ToolHeader.vue'
import { ElScrollbar } from 'element-plus'
import { useDesign } from '@/hooks/web/useDesign'

const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('layout')

const appStore = useAppStore()

const pageLoading = computed(() => appStore.getPageLoading)

// 菜单折叠
const collapse = computed(() => appStore.getCollapse)

export const renderTopLeft = () => {
  return (
    <>
      <div class="flex items-center bg-[var(--top-header-bg-color)] border-bottom-1 border-solid border-[var(--top-tool-border-color)]">
        <ToolHeader class="flex-1"></ToolHeader>
      </div>
      <div class="absolute top-[var(--logo-height)+1px] left-0 w-full h-[calc(100%-1px-var(--logo-height))] flex">
        <Menu class="!h-full"></Menu>
        <div
          class={[
            `${prefixCls}-content`,
            'h-[100%]',
            {
              'w-[calc(100%-var(--left-menu-min-width))] left-[var(--left-menu-min-width)]':
                collapse.value,
              'w-[calc(100%-var(--left-menu-max-width))] left-[var(--left-menu-max-width)]':
                !collapse.value
            }
          ]}
          style="transition: all var(--transition-time-02);"
        >
          <ElScrollbar
            v-loading={pageLoading.value}
            class={[`${prefixCls}-content-scrollbar`]}
            style={{ backgroundColor: '#f5f7f9' }}
          >
            <AppView></AppView>
          </ElScrollbar>
        </div>
      </div>
    </>
  )
}
