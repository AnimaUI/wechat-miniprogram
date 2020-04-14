//index.js
// 获取应用实例
const app = getApp();
Page({
    data: {
        imgBaseUrl: app.imgBaseUrl,
        menuBar: app.globalData.menuBar,
        list: [{
                icon: 'ani-icon-color',
                en: 'color',
                cn: '颜色',
                color: 'red'
            },
            {
                icon: 'ani-icon-layout-fill',
                en: 'layout',
                cn: '布局',
                color: 'fusion-red'
            },
            {
                icon: 'ani-icon-icon',
                en: 'icon',
                cn: '图标',
                color: 'orange'
            },
            {
                icon: 'ani-icon-btn',
                en: 'button',
                cn: '按钮',
                color: 'fusion-orange'
            },
            {
                icon: 'ani-icon-text',
                en: 'text',
                cn: '文本',
                color: 'yellow'
            },
            {
                icon: 'ani-icon-text-shadow',
                en: 'textShadow',
                cn: '文本阴影',
                color: 'fusion-yellow'
            },
            {
                icon: 'ani-icon-tag',
                en: 'tag',
                cn: '标签',
                color: 'olive'
            },
            {
                icon: 'ani-icon-portrait',
                en: 'avatar',
                cn: '头像',
                color: 'fusion-olive'
            },
            {
                icon: 'ani-icon-progress',
                en: 'progress',
                cn: '进度条',
                color: 'green'
            },
            {
                icon: 'ani-icon-box-shadow',
                en: 'boxShadow',
                cn: '边框阴影',
                color: 'fusion-green'
            },
            {
                icon: 'ani-icon-loading3',
                en: 'loading',
                cn: '加载',
                color: 'blue-green'
            },
            {
                icon: 'ani-icon-badge',
                en: 'badge',
                cn: '徽标',
                color: 'fusion-blue-green'
            }
        ]
    },
    onLoad() {},
    onShareAppMessage() {},
    onShow() {}
});