// 获取应用实例
const app = getApp();
let {
    colour,
    colourText,
    basicColor,
    basicColorText,
    gradualColor,
    gradualColorText
} = require('../../../utils/colour');
basicColor = basicColor.slice(0, 3);
Page({
    data: {
        imgBaseUrl: app.imgBaseUrl,
        colour,
        colourText,
        basicColor,
        basicColorText,
        gradualColor,
        gradualColorText
    },
    onLoad() {},
    onShareAppMessage() {},
    onShow() {}
});
