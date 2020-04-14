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
                color: 'red'
            },
            {
                icon: 'ani-icon-menu',
                en: 'menuBar',
                cn: '底部操作条',
                color: 'fusion-red'
            },
            {
                icon: 'ani-icon-tab',
                en: 'nav',
                cn: 'tab导航',
                color: 'orange'
            },
            {
                icon: 'ani-icon-form',
                en: 'form',
                cn: '表单',
                color: 'fusion-orange'
            },
            {
                icon: 'ani-icon-carousel',
                en: 'swiper',
                cn: '轮播',
                color: 'yellow'
            },
            {
                icon: 'ani-icon-steps',
                en: 'steps',
                cn: '步骤条',
                color: 'fusion-yellow'
            },
            {
                icon: 'ani-icon-card',
                en: 'card',
                cn: '卡片',
                color: 'olive'
            },
            {
                icon: 'ani-icon-time-line',
                en: 'timeLine',
                cn: '时间轴',
                color: 'fusion-olive'
            },
            {
                icon: 'ani-icon-modal',
                en: 'modal',
                cn: '模态框',
                color: 'green'
            },
            {
                icon: 'ani-icon-list',
                en: 'list',
                cn: '列表',
                color: 'fusion-green'
            },
            {
                icon: 'ani-icon-date',
                en: 'date',
                cn: '日期',
                color: 'blue-green'
            },
            {
                icon: 'ani-icon-time2',
                en: 'time',
                cn: '时间',
                color: 'fusion-blue-green'
            },
            {
                icon: 'ani-icon-slider',
                en: 'slider',
                cn: '滑块',
                color: 'cyan'
            },
            {
                icon: 'ani-icon-rate',
                en: 'rate',
                cn: '评分',
                color: 'fusion-cyan'
            }
        ]
    },
    onLoad() {},
    onShareAppMessage() {},
    onShow() {}
});