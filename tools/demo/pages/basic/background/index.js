//index.js
// 获取应用实例
const app = getApp();
let {
    colour,
    basicColor,
    colourText,
    basicColorText
} = require('../../../utils/colour');
let bgColors = ['', 'dark', 'disabled', 'light'].map((item) => {
    let prefix = 'bg';
    let prefix2 = '';
    if (item !== '') {
        prefix2 = '-';
    }
    prefix = prefix + prefix2 + item;
    return colour.map((color) => {
        return `${prefix}-${color}`;
    });
});
let prefix = 'bg';
basicColor = basicColor.map((item) => `${prefix}-${item}`);
Page({
    data: {
        imgBaseUrl: app.imgBaseUrl,
        bgColors,
        basicColor,
        colourText,
        basicColorText
    },
    onLoad() {},
    onShareAppMessage() {},
    onShow() {},
    copyText(e) {
        const COLOR = e.currentTarget.dataset.text;
        wx.setClipboardData({
            data: COLOR,
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