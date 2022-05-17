// components/background-image/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index:{
      type:Number,
      value:0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    imageList: [
      'cloud://cloud1-5gx9dmrx128b99b2.636c-cloud1-5gx9dmrx128b99b2-1311792498/恋爱小程序/1.jpg',
      'cloud://cloud1-5gx9dmrx128b99b2.636c-cloud1-5gx9dmrx128b99b2-1311792498/恋爱小程序/2.jpg',
      'cloud://cloud1-5gx9dmrx128b99b2.636c-cloud1-5gx9dmrx128b99b2-1311792498/恋爱小程序/3.jpg',
      'cloud://cloud1-5gx9dmrx128b99b2.636c-cloud1-5gx9dmrx128b99b2-1311792498/恋爱小程序/4.jpg',
      'cloud://cloud1-5gx9dmrx128b99b2.636c-cloud1-5gx9dmrx128b99b2-1311792498/恋爱小程序/5.jpg',
      'cloud://cloud1-5gx9dmrx128b99b2.636c-cloud1-5gx9dmrx128b99b2-1311792498/恋爱小程序/6.jpg',
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  /**
   * 外部样式类
   */
  externalClasses:['container-class', 'background-image-class'],
})
