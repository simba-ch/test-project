// components/side/side-content/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    collapse: Boolean,
    init: Boolean,
  },

  /**
   * 组件的初始数据
   */
  data: {
    show: true
  },
  observers: {
    "collapse, init": function (collapse, init) {
      if (!init) {
        this.setData({
          show: true
        })
        return
      } else {
        this.setData({
          show: false
        })
      }
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
