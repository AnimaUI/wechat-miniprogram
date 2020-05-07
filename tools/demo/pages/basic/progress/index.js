// 获取应用实例
const app = getApp();
let {
    colour,
    gradualColor
} = require('../../../utils/colour');
let prefix = 'bg';
gradualColor = gradualColor.map((item) => `${prefix}-gradual-${item}`);
Page({
    data: {
        imgBaseUrl: app.imgBaseUrl,
        colour,
        gradualColor
    },
    onLoad() {},
    onShareAppMessage() {},
    onShow() {}
});
