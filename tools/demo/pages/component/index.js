//index.js
// 获取应用实例
const app = getApp();
Page({
    data: {
        imgBaseUrl: app.imgBaseUrl,
        menuBar: app.globalData.menuBar,
        list: [{
                icon: 'ani-icon-color',
                en: 'customBar',
                cn: '顶部操作条',
                color: 'ruby'
            },
            {
                icon: 'ani-icon-layout-fill',
                en: 'menuBar',
                cn: '底部操作条',
                color: 'grapefruit'
            },
            {
                icon: 'ani-icon-icon',
                en: 'nav',
                cn: 'tab导航',
                color: 'bittersweet'
            },
            {
                icon: 'ani-icon-btn',
                en: 'form',
                cn: '表单',
                color: 'sunflower'
            },
            {
                icon: 'ani-icon-text',
                en: 'swiper',
                cn: '轮播',
                color: 'straw'
            },
            {
                icon: 'ani-icon-text-shadow',
                en: 'steps',
                cn: '步骤条',
                color: 'grass'
            },
            {
                icon: 'ani-icon-tag',
                en: 'card',
                cn: '卡片',
                color: 'mint'
            },
            {
                icon: 'ani-icon-portrait',
                en: 'timeLine',
                cn: '时间轴',
                color: 'teal'
            },
            {
                icon: 'ani-icon-progress',
                en: 'modal',
                cn: '模态框',
                color: 'aqua'
            },
            {
                icon: 'ani-icon-box-shadow',
                en: 'list',
                cn: '列表',
                color: 'blue-jeans'
            },
            {
                icon: 'ani-icon-badge',
                en: 'date',
                cn: '日期',
                color: 'plum'
            }, {
                icon: 'ani-icon-badge',
                en: 'time',
                cn: '时间',
                color: 'lavender'
            }, {
                icon: 'ani-icon-badge',
                en: 'time',
                cn: '时间',
                color: 'pink-rose'
            }, {
                icon: 'ani-icon-badge',
                en: 'slider',
                cn: '滑块',
                color: 'pink-rose'
            }, {
                icon: 'ani-icon-badge',
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