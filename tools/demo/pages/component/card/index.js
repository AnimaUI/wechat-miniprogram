// 获取应用实例
const app = getApp();
Page({
    data: {
        imgBaseUrl: app.imgBaseUrl
    },
    onLoad() {},
    onShareAppMessage() {},
    onShow() {},
    extra() {
        wx.showToast({
            title: '点击了extra',
            icon: 'success',
            duration: 2000
        });
    }
});
