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
                en: 'icon',
                cn: '图标',
                color: 'bittersweet'
            },
            {
                icon: 'ani-icon-btn',
                en: 'button',
                cn: '按钮',
                color: 'sunflower'
            },
            {
                icon: 'ani-icon-text',
                en: 'text',
                cn: '文本',
                color: 'straw'
            },
            {
                icon: 'ani-icon-text-shadow',
                en: 'textShadow',
                cn: '文本阴影',
                color: 'grass'
            },
            {
                icon: 'ani-icon-tag',
                en: 'tag',
                cn: '标签',
                color: 'mint'
            },
            {
                icon: 'ani-icon-portrait',
                en: 'avatar',
                cn: '头像',
                color: 'teal'
            },
            {
                icon: 'ani-icon-progress',
                en: 'progress',
                cn: '进度条',
                color: 'aqua'
            },
            {
                icon: 'ani-icon-box-shadow',
                en: 'boxShadow',
                cn: '边框阴影',
                color: 'blue-jeans'
            },
            {
                icon: 'ani-icon-loading3',
                en: 'loading',
                cn: '加载',
                color: 'plum'
            },
            {
                icon: 'ani-icon-badge',
                en: 'badge',
                cn: '徽标',
                color: 'lavender'
            }
        ]
    },
    onLoad() {},
    onShareAppMessage() {},
    onShow() {}
});