//index.js
// 获取应用实例
const app = getApp();
Page({
    data: {
        imgBaseUrl: app.imgBaseUrl,
        menuBar: app.globalData.menuBar,
        list: [{
                icon: 'ani-icon-bar',
                en: 'customBar',
                cn: '顶部操作条',
                color: 'ruby'
            },
            {
                icon: 'ani-icon-menu',
                en: 'menuBar',
                cn: '底部操作条',
                color: 'grapefruit'
            },
            {
                icon: 'ani-icon-tab',
                en: 'nav',
                cn: 'tab导航',
                color: 'bittersweet'
            },
            {
                icon: 'ani-icon-form',
                en: 'form',
                cn: '表单',
                color: 'sunflower'
            },
            {
                icon: 'ani-icon-carousel',
                en: 'swiper',
                cn: '轮播',
                color: 'straw'
            },
            {
                icon: 'ani-icon-steps',
                en: 'steps',
                cn: '步骤条',
                color: 'grass'
            },
            {
                icon: 'ani-icon-card',
                en: 'card',
                cn: '卡片',
                color: 'mint'
            },
            {
                icon: 'ani-icon-time-line',
                en: 'timeLine',
                cn: '时间轴',
                color: 'teal'
            },
            {
                icon: 'ani-icon-modal',
                en: 'modal',
                cn: '模态框',
                color: 'aqua'
            },
            {
                icon: 'ani-icon-list',
                en: 'list',
                cn: '列表',
                color: 'blue-jeans'
            },
            {
                icon: 'ani-icon-date',
                en: 'date',
                cn: '日期',
                color: 'plum'
            },
            {
                icon: 'ani-icon-time2',
                en: 'time',
                cn: '时间',
                color: 'lavender'
            },
            {
                icon: 'ani-icon-slider',
                en: 'slider',
                cn: '滑块',
                color: 'pink-rose'
            },
            {
                icon: 'ani-icon-rate',
                en: 'rate',
                cn: '评分',
                color: 'pink-rose'
            }
        ]
    },
    onLoad() {},
    onShareAppMessage() {},
    onShow() {}
});