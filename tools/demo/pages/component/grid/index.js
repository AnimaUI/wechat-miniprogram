// 获取应用实例
const app = getApp();
Page({
    data: {
        imgBaseUrl: app.imgBaseUrl,
        iconList: [
            {
                icon: 'ani-icon-apple',
                color: 'dark-gray',
                badge: 120,
                name: 'IPhone'
            },
            {
                icon: 'ani-icon-android',
                color: 'green',
                badge: 89,
                name: '安卓'
            },
            {
                icon: 'ani-icon-applepay',
                color: 'dark-gray',
                badge: 120,
                name: '苹果支付'
            },
            {
                icon: 'ani-icon-appstore-fill-round',
                color: 'blue',
                badge: 22,
                name: 'appstore'
            },
            {
                icon: 'ani-icon-baidu',
                color: 'sky-blue',
                badge: 0,
                name: '百度'
            },
            {
                icon: 'ani-icon-bytedance',
                color: 'orange',
                badge: 0,
                name: '字节跳动'
            },
            {
                icon: 'ani-icon-bitcoin',
                color: 'fusion-orange',
                badge: 0,
                name: '比特币'
            },
            {
                icon: 'ani-icon-chrome',
                color: 'red',
                badge: 0,
                name: 'chrome'
            },
            {
                icon: 'ani-icon-dribbble',
                color: 'pink',
                badge: 0,
                name: 'dribbble'
            },
            {
                icon: 'ani-icon-facebook',
                color: 'dark-blue',
                badge: 0,
                name: 'facebook'
            },
            {
                icon: 'ani-icon-dts',
                color: 'orange',
                badge: 0,
                name: 'dts'
            },
            {
                icon: 'ani-icon-dropbox',
                color: 'dark-blue',
                badge: 0,
                name: 'dropbox'
            },
            {
                icon: 'ani-icon-github-fill-round',
                color: 'dark-gray',
                badge: 0,
                name: 'github'
            },
            {
                icon: 'ani-icon-iqiyi',
                color: 'green',
                badge: 0,
                name: 'iqiyi'
            },
            {
                icon: 'ani-icon-netease-fill-square',
                color: 'red',
                badge: 0,
                name: 'netease'
            }
        ]
    },
    onLoad() {},
    onShareAppMessage() {},
    onShow() {}
});
