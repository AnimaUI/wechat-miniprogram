// 获取应用实例
const app = getApp();
Page({
    data: {
        imgBaseUrl: app.imgBaseUrl,
        show1: false
    },
    onLoad() {},
    onShareAppMessage() {},
    onShow() {},
    tap1() {
        console.log(124);
        this.setData({
            show1: true
        });
    }
});
