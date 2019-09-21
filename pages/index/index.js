//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   region:['江西省','赣州市','章贡区']
  },
  //更新省市区信息
  regionChange: function(e) {
    this.setData({region: e.detail.value});
    this.getWeather();
  }
  ,
  //获取实况天气数据
  getWeather: function() {
    var that = this;
    wx.request({
      url: 'https://free-api.heweather.net/s6/weather/now',
      data:{
        location:that.data.region[1],
        key:'33c272fe16164e328090164ea5459002'
      },
      success: function(res) {
        that.setData({now:res.data.HeWeather6[0].now});
        that.setData({time:res.data.HeWeather6[0].update})
      }
    })
  },
  onLoad: function (options) {
    this.getWeather();
  }
})
