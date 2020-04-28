// 获取应用实例
const app = getApp();
const {
    colour,
    colourText,
    basicColor,
    basicColorText,
    gradualColor,
    gradualColorText
} = require('../../../utils/colour');
Page({
    data: {
        colour,
        colourText,
        basicColor,
        basicColorText,
        gradualColor,
        gradualColorText
    },
    onLoad() {},
    onShareAppMessage() {},
    onShow() {},
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
