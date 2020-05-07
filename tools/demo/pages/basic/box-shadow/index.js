// 获取应用实例
const app = getApp();
let { shadowColor, shadowColorText } = require('../../../utils/colour');
console.log(shadowColor, shadowColorText);
Page({
    data: {
        imgBaseUrl: app.imgBaseUrl,
        shadowColor,
        shadowColorText
    },
    onLoad() {},
    onShareAppMessage() {},
    onShow() {}
});
