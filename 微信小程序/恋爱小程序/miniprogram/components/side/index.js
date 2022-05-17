const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    collapse:false,
    collapseText:'收起',
    init:true,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    collapseHandler(){
    if(this.data.init) this.setData({init:false})
     const collapse = this.data.collapse;
     app.globalData.collapse = !collapse;
      this.setData({
        collapse:!collapse,
        collapseText:collapse ? '收起' : '展开'
      })
    }
  },
  externalClasses:['side-wrapper'],
  pageLifetimes:{
    show() {
      const collapse = app.globalData.collapse;
      this.setData({
        collapse:collapse,
        collapseText:collapse ? '展开' : '收起',
        init:true
      }) 
    },
  }
})
