//index.js
// 获取应用实例
const app = getApp();
Page({
    data: {
        tabBar: app.globalData.tabBar
    },
    onLoad() {
        wx.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: '#ffffff'
        });
    },
    onShareAppMessage() {},
    onShow() {}
});
