//index.js
// 获取应用实例
const app = getApp();
const { colour } = require('../../utils/colour');
Page({
    data: {
        imgBaseUrl: app.imgBaseUrl,
        menuBar: app.globalData.menuBar,
        colour,
        list: [
            {
                icon: 'ani-icon-bar',
                en: 'topBar',
                cn: '顶部Bar',
                url: '/pages/component/custom-bar/index'
            },
            {
                icon: 'ani-icon-menu',
                en: 'menuBar',
                cn: '底部Bar',
                url: '/pages/component/menu-bar/index'
            },
            {
                icon: 'ani-icon-tab',
                en: 'tab',
                cn: 'tab导航',
                url: '/pages/component/tab/index'
            },
            {
                icon: 'ani-icon-form',
                en: 'form',
                cn: '表 单',
                url: '/pages/component/form/index'
            },
            {
                icon: 'ani-icon-carousel',
                en: 'swiper',
                cn: '轮 播',
                url: '/pages/component/swiper/index'
            },
            {
                icon: 'ani-icon-steps',
                en: 'steps',
                cn: '步骤条',
                url: '/pages/component/steps/index'
            },
            {
                icon: 'ani-icon-card',
                en: 'card',
                cn: '卡 片',
                url: '/pages/component/card/index'
            },
            {
                icon: 'ani-icon-time-line',
                en: 'timeLine',
                cn: '时间轴',
                url: '/pages/component/time-line/index'
            },
            {
                icon: 'ani-icon-modal',
                en: 'modal',
                cn: '模态框',
                url: '/pages/component/modal/index'
            },
            {
                icon: 'ani-icon-grid',
                en: 'grid',
                cn: '宫格',
                url: '/pages/component/grid/index'
            },
            {
                icon: 'ani-icon-date',
                en: 'calendar',
                cn: '日 历',
                url: '/pages/component/calendar/index'
            },
            {
                icon: 'ani-icon-time2',
                en: 'time',
                cn: '时 间',
                url: ''
            },
            {
                icon: 'ani-icon-slider',
                en: 'slider',
                cn: '滑 块',
                url: ''
            },
            {
                icon: 'ani-icon-rate',
                en: 'rate',
                cn: '评 分',
                url: ''
            }
        ]
    },
    onLoad() {},
    onShareAppMessage() {},
    onShow() {},
    link(e) {
        const url = e.currentTarget.dataset.url;
        wx.navigateTo({
            url,
            success: function (res) {},
            fail: function (res) {},
            complete: function (res) {}
        });
    }
});