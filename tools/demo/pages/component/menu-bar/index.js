// 获取应用实例
const app = getApp();
// let {
//     colour,
//     colourText,
//     basicColor,
//     basicColorText,
//     gradualColor,
//     gradualColorText
// } = require('../../../utils/colour');
// basicColor = basicColor.slice(0, 3);
Page({
    data: {
        imgBaseUrl: app.imgBaseUrl,
        menuBar: {}
    },
    onLoad() {},
    onShareAppMessage() {},
    onShow() {
        let menuBar = JSON.parse(JSON.stringify(app.globalData.menuBar));
        menuBar.list[1].badge.show = true;
        console.log(menuBar);
        this.setData({
            menuBar
        });
    }
});
