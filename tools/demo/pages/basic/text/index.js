// 获取应用实例
const app = getApp();
let {
    colour,
    basicColor,
    colourText,
    basicColorText,
    gradualColor,
    gradualColorText
} = require('../../../utils/colour');
let textColors = ['', 'dark', 'disabled', 'light'].map((item) => {
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
basicColor = basicColor.slice(0, basicColor.length - 1);
let basicColorShadow = basicColor.slice(0, 5);
gradualColor = gradualColor.map((item) => `gradual-${item}`);
Page({
    data: {
        imgBaseUrl: app.imgBaseUrl,
        textColors,
        colourText,
        basicColor,
        basicColorText,
        gradualColor,
        gradualColorText,
        basicColorShadow
    },
    onLoad() {},
    onShareAppMessage() {},
    onShow() {}
});
