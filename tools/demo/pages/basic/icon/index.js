// 获取应用实例
const app = getApp();
let icon = require('./icon');
icon = icon.map(item => {
    return {
        iconName: item,
        isShow: true
    }
});
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
        const key = e.detail.toLowerCase();
        let list = this.data.icon;
        this.setData({
            searchInfo: key
        });
        list = list.map(item => {
            let iconName = item.iconName.toLowerCase();
            item.isShow = iconName.search(key) != -1;
            return item;
        });
        this.setData({
            icon: list
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
