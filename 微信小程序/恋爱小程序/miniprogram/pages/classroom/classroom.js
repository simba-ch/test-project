// pages/classroom/classroom.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stages: [
      [
        {
          type: 'advanced',
          text: '进阶阶段'
        },
        {
          type: 'single',
          text: '单身期'
        },
        {
          type: 'pursuit',
          text: '追求期'
        }
      ], [
        {
          type: 'love',
          text: '恋爱期'
        },
        {
          type: 'lovelorn',
          text: '失恋期'
        },
        {
          type: 'marriaged',
          text: '婚后期'
        }
      ]

    ],
    hotCourses:[
      "这样搭配，女神瞬间爱上你",
      "深度解析婚姻关系，让你婚姻挽回成功率达到9弗兰克斯副经理看的撒父接口"
    ]
  },
  goCourse(){
    wx.navigateTo({
      url: '/pages/classroom/course/index',
    })
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