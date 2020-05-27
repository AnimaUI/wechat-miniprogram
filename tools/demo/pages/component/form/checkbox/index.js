// 获取应用实例
const app = getApp();
let {
    colour
} = require('../../../../utils/colour');
let colors = ['', 'dark', 'disabled'].map((item) => {
    let prefix = 'text';
    let prefix2 = '';
    if (item !== '') {
        prefix2 = '-';
    }
    prefix = prefix + prefix2 + item;
    return colour.map((color) => {
        return `${prefix}-${color}`;
    });
});
Page({
    data: {
        imgBaseUrl: app.imgBaseUrl,
        colors,
        isRound: false
    },
    onLoad() {},
    onShareAppMessage() {},
    onShow() {},
    changeRound(e) {
        this.setData({
            isRound: e.detail.value
        });
    }
});
