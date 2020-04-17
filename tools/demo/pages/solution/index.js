//index.js
// 获取应用实例
const app = getApp();
const gradualColour = require('../../utils/gradual-colour');
Page({
    data: {
        imgBaseUrl: app.imgBaseUrl,
        menuBar: app.globalData.menuBar,
        gradualColour,
        list: [{
                icon: 'ani-icon-bar',
                en: 'drawer',
                cn: '抽屉'
            },
            {
                icon: 'ani-icon-bar',
                en: 'animation',
                cn: '动画'
            },
            {
                icon: 'ani-icon-bar',
                en: 'comic',
                cn: '动漫'
            }
        ]
    },
    onLoad() {},
    onShareAppMessage() {},
    onShow() {}
});