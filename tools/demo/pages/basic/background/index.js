//index.js
// 获取应用实例
const app = getApp();
let { colour, basicColor, colourText } = require('../../../utils/colour');
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
bgColors = bgColors.concat([basicColor]);
console.log(bgColors);
Page({
    data: {
        imgBaseUrl: app.imgBaseUrl,
        bgColors,
        colourText
    },
    onLoad() {},
    onShareAppMessage() {},
    onShow() {}
});