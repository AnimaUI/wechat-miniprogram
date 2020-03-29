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
                linear: 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);'
            },
            {
                icon: 'ani-icon-color',
                en: 'color',
                cn: '颜色',
                linear: 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);'
            },
            {
                icon: 'ani-icon-color',
                en: 'color',
                cn: '颜色',
                linear: 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);'
            },
            {
                icon: 'ani-icon-color',
                en: 'color',
                cn: '颜色',
                linear: 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);'
            },
            {
                icon: 'ani-icon-color',
                en: 'color',
                cn: '颜色',
                linear: 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);'
            },
            {
                icon: 'ani-icon-color',
                en: 'color',
                cn: '颜色',
                linear: 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);'
            },
            {
                icon: 'ani-icon-color',
                en: 'color',
                cn: '颜色',
                linear: 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);'
            },{
                icon: 'ani-icon-color',
                en: 'color',
                cn: '颜色',
                linear: 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);'
            },
            {
                icon: 'ani-icon-color',
                en: 'color',
                cn: '颜色',
                linear: 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);'
            },
            {
                icon: 'ani-icon-color',
                en: 'color',
                cn: '颜色',
                linear: 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);'
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
