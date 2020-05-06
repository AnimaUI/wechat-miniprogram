// 获取应用实例
const app = getApp();
let {
    colour,
    colourText,
    gradualColor,
    gradualColorText
} = require('../../../utils/colour');
gradualColor = gradualColor.map((item) => `gradual-${item}`);
Page({
    data: {
        imgBaseUrl: app.imgBaseUrl,
        colour,
        colourText,
        gradualColor,
        gradualColorText
    },
    onLoad() {},
    onShareAppMessage() {},
    onShow() {}
});
