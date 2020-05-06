// 获取应用实例
const app = getApp();
let {
    colour,
    basicColor,
    gradualColor
} = require('../../../utils/colour');
gradualColor = gradualColor.map((item) => `gradual-${item}`);
basicColor = basicColor.slice(0, 5);
Page({
    data: {
        imgBaseUrl: app.imgBaseUrl,
        colour,
        basicColor,
        gradualColor
    },
    onLoad() {},
    onShareAppMessage() {},
    onShow() {}
});
