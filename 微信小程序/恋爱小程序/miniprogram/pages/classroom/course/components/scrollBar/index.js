const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: Array,
    width: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 0,
    left: 0,
    items: [],
  },
  observers: {
    active(active) {
      let offsetX = this.data.items[active] / 2 - app.globalData.screenWidth / 2;
      for (let i = 0; i < active; i++) {
        offsetX += this.data.items[i];
      }
      this.setData({
        left: offsetX
      })
    },
  },
  attached() {
    const items = []
    wx
      .createSelectorQuery()
      .in(this)
      .selectAll('.scroll-view-item_H')
      .boundingClientRect(res => {
        for (let i = 0; i < res.length; i++) {
          const cur = res[i]
          items.push(cur.width)
        }
        this.setData({
          items
        })
      })
      .exec()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeCourse(e) {
      this.setData({
        active: e.target.dataset.index
      })
    }
  }

})
