// pages/home/components/hot-word/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:Array
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goPattern(){
      wx.switchTab({
        url: '/pages/pattern/pattern',
      })
    }
  }
})
