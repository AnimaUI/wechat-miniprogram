// 获取应用实例
const app = getApp();
const icon = require('./icon');
Page({
    data: {
        imgBaseUrl: app.imgBaseUrl,
        icon,
        searchInfo: ''
    },
    onLoad() {},
    onShareAppMessage() {},
    onShow() {},
    search(e) {
        let key = e.detail;
        this.setData({
            searchInfo: key
        });
    },
    copyText(e) {
        const text = e.currentTarget.dataset.text;
        wx.setClipboardData({
            data: text,
            success(res) {
                wx.getClipboardData({
                    success(res) {
                        wx.showToast({
                            title: '复制成功'
                        });
                    }
                });
            }
        });
    }
});
