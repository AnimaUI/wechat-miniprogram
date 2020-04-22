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
                icon: 'ani-icon-color',
                en: 'color',
                cn: '色彩'
            },
            {
                icon: 'ani-icon-layout-fill',
                en: 'layout',
                cn: '布局'
            },
            {
                icon: 'ani-icon-icon',
                en: 'icon',
                cn: '图标'
            },
            {
                icon: 'ani-icon-btn',
                en: 'button',
                cn: '按钮'
            },
            {
                icon: 'ani-icon-text',
                en: 'text',
                cn: '文本'
            },
            {
                icon: 'ani-icon-text-shadow',
                en: 'textShadow',
                cn: '文本阴影'
            },
            {
                icon: 'ani-icon-tag',
                en: 'tag',
                cn: '标签'
            },
            {
                icon: 'ani-icon-portrait',
                en: 'avatar',
                cn: '头像'
            },
            {
                icon: 'ani-icon-progress',
                en: 'progress',
                cn: '进度条'
            },
            {
                icon: 'ani-icon-box-shadow',
                en: 'boxShadow',
                cn: '边框阴影'
            },
            {
                icon: 'ani-icon-loading3',
                en: 'loading',
                cn: '加载'
            },
            {
                icon: 'ani-icon-badge',
                en: 'badge',
                cn: '徽标'
            }
        ]
    },
    onLoad() {},
    onShareAppMessage() {},
    onShow() {}
});