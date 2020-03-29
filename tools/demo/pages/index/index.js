//index.js
// 获取应用实例
const app = getApp();
Page({
    data: {
        tabBar: app.globalData.tabBar,
        list: [
            {
                icon: 'ani-icon-color',
                en: 'color',
                cn: '颜色',
                linear: 'linear-gradient(120deg, #f093fb 0%, #f5576c 100%);'
            },
            {
                icon: 'ani-icon-layout-fill',
                en: 'layout',
                cn: '布局',
                linear: 'linear-gradient(to right, #ff758c 0%, #ff7eb3 100%);'
            },
            {
                icon: 'ani-icon-icon',
                en: 'icon',
                cn: '图标',
                linear: 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);'
            },
            {
                icon: 'ani-icon-btn',
                en: 'button',
                cn: '按钮',
                linear: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);'
            },
            {
                icon: 'ani-icon-text',
                en: 'text',
                cn: '文本',
                linear: 'linear-gradient(to left, #ffecd2 0%, #fcb69f 100%);'
            },
            {
                icon: 'ani-icon-text-shadow',
                en: 'textShadow',
                cn: '文本阴影',
                linear:
                    'linear-gradient(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%);'
            },
            {
                icon: 'ani-icon-tag',
                en: 'tag',
                cn: '标签',
                linear: 'linear-gradient(to left, #9ee6fe 0%, #52d2fe 100%);'
            },
            {
                icon: 'ani-icon-portrait',
                en: 'avatar',
                cn: '头像',
                linear: 'linear-gradient(-20deg, #f794a4 0%, #fdd6bd 100%);'
            },
            {
                icon: 'ani-icon-progress',
                en: 'progress',
                cn: '进度条',
                linear: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);'
            },
            {
                icon: 'ani-icon-box-shadow',
                en: 'boxShadow',
                cn: '边框阴影',
                linear: 'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);'
            },
            {
                icon: 'ani-icon-loading3',
                en: 'loading',
                cn: '加载',
                linear: 'linear-gradient(to left, #f3ebe5 0%, #e2d1c3 100%);'
            },
            {
                icon: 'ani-icon-badge',
                en: 'badge',
                cn: '徽标',
                linear: 'linear-gradient(to right, #ffc3a0 0%, #ffafbd 100%);'
            }
        ]
    },
    onLoad() {
        wx.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: '#ffffff'
        });
    },
    onShareAppMessage() {},
    onShow() {}
});
