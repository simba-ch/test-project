// pages/pattern/pattern.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardList:[],
    watcher: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const db = wx.cloud.database()
    const _this = this
    const watcher = db.collection('patterns')
      .where({})
      .watch({
        onChange: function (snapshot) {
          _this.setData({
            cardList: snapshot.docs
          })

        },
        onError: function (err) {
          console.error('the watch closed because of error', err)
        }
      })

    this.setData({
      watcher
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.getTabBar().init()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    this.data.watcher.close()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})