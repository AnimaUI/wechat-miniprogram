//index.js
// 获取应用实例
const app = getApp();
const { colour } = require('../../utils/colour');
Page({
    data: {
        imgBaseUrl: app.imgBaseUrl,
        menuBar: app.globalData.menuBar,
        colour,
        list: [{
                icon: 'ani-icon-bar',
                en: 'topBar',
                cn: '顶部Bar'
            },
            {
                icon: 'ani-icon-menu',
                en: 'menuBar',
                cn: '底部Bar'
            },
            {
                icon: 'ani-icon-tab',
                en: 'tab',
                cn: 'tab导航'
            },
            {
                icon: 'ani-icon-form',
                en: 'form',
                cn: '表 单'
            },
            {
                icon: 'ani-icon-carousel',
                en: 'swiper',
                cn: '轮 播'
            },
            {
                icon: 'ani-icon-steps',
                en: 'steps',
                cn: '步骤条'
            },
            {
                icon: 'ani-icon-card',
                en: 'card',
                cn: '卡 片'
            },
            {
                icon: 'ani-icon-time-line',
                en: 'timeLine',
                cn: '时间轴'
            },
            {
                icon: 'ani-icon-modal',
                en: 'modal',
                cn: '模态框'
            },
            {
                icon: 'ani-icon-list',
                en: 'list',
                cn: '列 表'
            },
            {
                icon: 'ani-icon-date',
                en: 'date',
                cn: '日 期'
            },
            {
                icon: 'ani-icon-time2',
                en: 'time',
                cn: '时 间'
            },
            {
                icon: 'ani-icon-slider',
                en: 'slider',
                cn: '滑 块'
            },
            {
                icon: 'ani-icon-rate',
                en: 'rate',
                cn: '评 分'
            }
        ]
    },
    onLoad() {},
    onShareAppMessage() {},
    onShow() {}
});