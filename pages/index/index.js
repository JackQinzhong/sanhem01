//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ad_img2: "",
    jieguo: "",
    jeguo2: true,
    indicat: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 500,
    images: [
      '/tupian/1.jpg',
      '/tupian/2.jpg',
      '/tupian/3.jpg',
    ],

    teacher: {
      "Name": "秦钟老师",
      "address": "湖北监利陶市村"
    },

    vectfruit: [
      { fruit: "apple" },
      { fruit: "banana" },
      { fruit: "琵琶" },
      { fruit: "饿胶" }


    ]
    ,
    userData: [
      {
        "data": 101,
        "title": "2019年春节放假通知道!"
      },
      {
        "data": 102,
        "title": "年夜饭最新通知"
      },
      {
        "data": 103,
        "title": "2019年开始上班的通知"
      }
    ],
    nodes: []
    ,
    images2: [],
    //数据不是通过数据库，而是json格式[{"myid":99,"mybiaoti":"2019年春节","myshijian":"02-17"},{}]
    vectnews: [],

    lastests: []

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this//重点
    wx.request({
      url: 'http://www.yaoyiwangluo.com/wxshop/100-lunbotupian.html',
      success: function (res) {
        self.setData({
          images: res.data

        })
      }
    })

    wx.request({
      url: 'http://www.yaoyiwangluo.com/wxshop/100-lunbotupian-link.html',
      success: function (res) {
        self.setData({
          images2: res.data

        })
      }
    })
    //新闻
    wx.request({
      url: 'http://www.yaoyiwangluo.com/wx_news_list.asp',
      success: function (res) {
        self.setData({
          vectnews: res.data

        })
      }
    })

    //新闻
    wx.request({
      url: 'http://www.yaoyiwangluo.com/wx_CpList_top4.asp',
      success: function (res) {
        self.setData({
          lastests: res.data

        })
      }
    })

    var laoshi = {

      "Name": "秦钟",
      "address": "湖北监利"
    }
    console.log(laoshi.Name)
    console.log(laoshi.address)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})