export type LayoutType = 'classic' | 'topLeft' | 'top' | 'cutMenu'

export type ThemeTypes = {
  elColorPrimary?: string
  leftMenuBorderColor?: string
  leftMenuBgColor?: string
  leftMenuBgLightColor?: string
  leftMenuBgActiveColor?: string
  leftMenuCollapseBgActiveColor?: string
  leftMenuTextColor?: string
  leftMenuTextActiveColor?: string
  logoTitleTextColor?: string
  logoBorderColor?: string
  topHeaderBgColor?: string
  topHeaderTextColor?: string
  topHeaderHoverColor?: string
  topToolBorderColor?: string
}
export interface AppState {
  breadcrumb: boolean
  breadcrumbIcon: boolean
  collapse: boolean
  hamburger: boolean
  screenfull: boolean
  size: boolean
  locale: boolean
  tagsView: boolean
  logo: boolean
  fixedHeader: boolean
  greyMode: boolean
  pageLoading: boolean
  layout: LayoutType
  title: string
  userInfo: string
  isDark: boolean
  currentSize: ElememtPlusSize
  sizeMap: ElememtPlusSize[]
  mobile: boolean
  footer: boolean
  theme: ThemeTypes
}

export const appModules: AppState = {
  userInfo: 'userInfo',
  sizeMap: ['default', 'large', 'small'],
  mobile: false,
  title: import.meta.env.VITE_APP_TITLE,
  pageLoading: false,

  // 面包屑
  breadcrumb: false,
  // 面包屑图标
  breadcrumbIcon: false,
  // 折叠图标
  hamburger: true,
  // 全屏图标
  screenfull: false,
  // 尺寸图标
  size: false,
  // 多语言图标
  locale: false,
  // 标签页
  tagsView: false,
  // logo
  logo: false,
  // 固定header
  fixedHeader: false,
  // 页脚
  footer: false,
  // 灰色模式
  greyMode: false,
  // layout布局
  layout: 'topLeft',
  // 暗黑模式
  isDark: false,
  // 组件尺寸
  currentSize: 'default',
  // 主题相关
  theme: {
    // 主题色
    elColorPrimary: '#447ED9',
    // 左侧菜单边框颜色
    leftMenuBorderColor: '#eee',
    // 左侧菜单背景颜色
    leftMenuBgColor: '#fff',
    // 左侧菜单浅色背景颜色
    leftMenuBgLightColor: '#fff',
    // 左侧菜单选中背景颜色
    leftMenuBgActiveColor: '#F1F4F7',
    // 左侧菜单收起选中背景颜色
    leftMenuCollapseBgActiveColor: '#F1F4F7',
    // 左侧菜单字体颜色
    leftMenuTextColor: '#000',
    // 左侧菜单选中字体颜色
    leftMenuTextActiveColor: '#000',
    // logo字体颜色
    logoTitleTextColor: 'inherit',
    // logo边框颜色
    logoBorderColor: '#eee',
    // 头部背景颜色
    topHeaderBgColor: '#447ED9',
    // 头部字体颜色
    topHeaderTextColor: '#fff',
    // 头部悬停颜色
    topHeaderHoverColor: '#4C8AEB',
    // 头部边框颜色
    topToolBorderColor: '#eee'
  },
  collapse: false
}
