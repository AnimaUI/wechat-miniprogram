//app.js
const config = require('./utils/config');
App({
    imgBaseUrl: config.imgBaseUrl,
    onLaunch: function () {
        wx.cloud.init({
            traceUser: true
        });
        wx.getSystemInfo({
            success: (e) => {
                this.globalData.statusBar = e.statusBarHeight;
                let capsule = wx.getMenuButtonBoundingClientRect();
                if (capsule) {
                    this.globalData.custom = capsule;
                    this.globalData.customBar =
                        capsule.bottom + capsule.top - e.statusBarHeight + 4;
                } else {
                    this.globalData.customBar = e.statusBarHeight + 54;
                }
            }
        });
    },
    globalData: {
        home: '/pages/basic/index',
        menuBar: {
            // 当前索引
            current: 0,
            // 字体颜色
            color: '#b4bbc8',
            // 字体选中颜色
            selectedColor: '#0fb9b1',
            // 背景颜色
            backgroundColor: '#fff',
            // 固定在底部
            isFixed: true,
            // 角标字体颜色
            badgeColor: '#fff',
            // 角标背景颜色
            badgeBgColor: '#0fb9b1',
            // 去掉顶部细线
            unlined: false,
            // tabbar列表
            list: [
                {
                    pagePath: '/pages/basic/index',
                    action: 'link',
                    text: '基础',
                    icon: 'ani-icon-basic',
                    className: 'menu-item',
                    selectedColor: '#0fb9b1',
                    hump: false
                },
                {
                    pagePath: '/pages/component/index',
                    action: 'link',
                    text: '组件',
                    icon: 'ani-icon-component',
                    selectedColor: '#0fb9b1',
                    className: 'menu-item',
                    hump: false,
                    badge: {
                        show: false,
                        num: 16,
                        class: 'bg-gradual-purple text-white',
                        style: 'width: 32rpx; height: 32rpx'
                    }
                },
                {
                    pagePath: '/pages/solution/index',
                    action: 'link',
                    text: '解决方案',
                    icon: 'ani-icon-solution',
                    selectedColor: '#0fb9b1',
                    className: 'menu-item',
                    hump: false
                },
                {
                    pagePath: '/pages/about/index',
                    action: 'link',
                    text: '关于',
                    icon: 'ani-icon-person',
                    selectedColor: '#0fb9b1',
                    className: 'menu-item',
                    hump: false
                }
            ]
        },
        userInfo: null,
        auth: 1
    }
});