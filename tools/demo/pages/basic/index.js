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
                icon: 'ani-icon-color',
                en: 'color',
                cn: '色彩',
                url: '/pages/basic/color/index'
            },
            {
                icon: 'ani-icon-layout-fill',
                en: 'layout',
                cn: '布局',
                url: '/pages/basic/layout/index'
            },
            {
                icon: 'ani-icon-icon',
                en: 'icon',
                cn: '图标',
                url: '/pages/basic/icon/index'
            },
            {
                icon: 'ani-icon-btn',
                en: 'button',
                cn: '按钮',
                url: '/pages/basic/button/index'
            },
            {
                icon: 'ani-icon-text',
                en: 'text',
                cn: '文本',
                url: '/pages/basic/text/index'
            },
            {
                icon: 'ani-icon-tag',
                en: 'tag',
                cn: '标签',
                url: '/pages/basic/tag/index'
            },
            {
                icon: 'ani-icon-portrait',
                en: 'avatar',
                cn: '头像',
                url: '/pages/basic/avatar/index'
            },
            {
                icon: 'ani-icon-progress',
                en: 'progress',
                cn: '进度条',
                url: '/pages/basic/progress/index'
            },
            {
                icon: 'ani-icon-box-shadow',
                en: 'boxShadow',
                cn: '边框阴影',
                url: '/pages/basic/box-shadow/index'
            },
            {
                icon: 'ani-icon-loading3',
                en: 'loading',
                cn: '加载',
                url: '/pages/basic/loading/index'
            },
            {
                icon: 'ani-icon-badge',
                en: 'badge',
                cn: '徽标',
                url: '/pages/basic/badge/index'
            },
            {
                icon: 'ani-icon-css',
                en: 'css3-filter',
                cn: 'css3滤镜',
                url: '/pages/basic/css3-filter/index'
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