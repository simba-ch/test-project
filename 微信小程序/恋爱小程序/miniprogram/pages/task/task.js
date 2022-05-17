// pages/task/task.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    taskList: [
      {
        type: 'new-person',
        title: '邀请新人奖励',
        text: '奖励时间 +1 分钟；每日 无限制'
      },
      {
        type: 'video',
        title: '观看视频奖励',
        text: '奖励时间 +1 分钟；每日限1次'
      },
      {
        type: 'miniprogram',
        title: '体验小程序0.001秒奖励',
        text: '奖励时间 +1 分钟；每日限1次'
      },
      {
        type: 'heart',
        title: '关注公众号奖励',
        text: '奖励时间 +1 分钟；仅限1次'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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