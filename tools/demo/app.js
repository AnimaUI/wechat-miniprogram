//app.js
const config = require('./utils/config');
App({
    imgBaseUrl: config.imgBaseUrl,
    onLaunch: function() {
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
                        capsule.bottom + capsule.top - e.statusBarHeight;
                } else {
                    this.globalData.customBar = e.statusBarHeight + 50;
                }
            }
        });
    },
    globalData: {
        menuBar: {
            // 当前索引
            current: 0,
            // 字体颜色
            color: '#b4bbc8',
            // 字体选中颜色
            selectedColor: '#ff8800',
            // 背景颜色
            backgroundColor: '#fff',
            // 是否需要中间凸起按钮
            hump: false,
            // 固定在底部
            isFixed: true,
            // 角标字体颜色
            badgeColor: '#fff',
            // 角标背景颜色
            badgeBgColor: 'f35352',
            // 去掉顶部细线
            unlined: false,
            // tabbar列表
            list: [{
                    pagePath: '/pages/basic/index',
                    text: '基础',
                    icon: 'ani-icon-basic',
                    className: 'menu-item',
                    selectedColor: '#ff8800'
                },
                {
                    pagePath: '/pages/component/index',
                    text: '组件',
                    icon: 'ani-icon-component',
                    selectedColor: '#ff8800',
                    className: 'menu-item'
                },
                {
                    pagePath: '/pages/solution/index',
                    text: '解决方案',
                    icon: 'ani-icon-solution',
                    selectedColor: '#ff8800',
                    className: 'menu-item'
                },
                {
                    pagePath: '/pages/about/index',
                    text: '关于',
                    icon: 'ani-icon-person',
                    selectedColor: '#ff8800',
                    className: 'menu-item'
                }
            ]
        },
        userInfo: null,
        auth: 1
    }
});