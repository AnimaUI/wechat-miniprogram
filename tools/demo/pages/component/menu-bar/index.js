// 获取应用实例
const app = getApp();
Page({
    data: {
        imgBaseUrl: app.imgBaseUrl,
        menuBar1: {
            // 当前索引
            current: 0,
            // 字体颜色
            color: '#b4bbc8',
            // 字体选中颜色
            selectedColor: '#8854d0',
            // 背景颜色
            backgroundColor: '#fff',
            // 固定在底部
            isFixed: true,
            // 角标字体颜色
            badgeColor: '#fff',
            // 角标背景颜色
            badgeBgColor: '#8854d0',
            // 去掉顶部细线
            unlined: false,
            // tabbar列表
            list: [
                {
                    pagePath: '/pages/basic/index',
                    action: 'click',
                    text: '基础',
                    icon: 'ani-icon-basic',
                    className: 'menu-item',
                    selectedColor: '#8854d0',
                    hump: false
                },
                {
                    pagePath: '/pages/component/index',
                    action: 'click',
                    text: '组件',
                    icon: 'ani-icon-component',
                    selectedColor: '#8854d0',
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
                    action: 'click',
                    text: '解决方案',
                    icon: 'ani-icon-solution',
                    selectedColor: '#8854d0',
                    className: 'menu-item',
                    hump: false
                },
                {
                    pagePath: '/pages/about/index',
                    action: 'click',
                    text: '关于',
                    icon: 'ani-icon-person',
                    selectedColor: '#8854d0',
                    className: 'menu-item',
                    hump: false
                }
            ]
        },
        menuBar2: {
            // 当前索引
            current: 0,
            // 字体颜色
            color: '#b4bbc8',
            // 字体选中颜色
            selectedColor: '#8854d0',
            // 背景颜色
            backgroundColor: '#fff',
            // 固定在底部
            isFixed: true,
            // 角标字体颜色
            badgeColor: '#fff',
            // 角标背景颜色
            badgeBgColor: '#8854d0',
            // 去掉顶部细线
            unlined: false,
            // tabbar列表
            list: [
                {
                    pagePath: '/pages/basic/index',
                    action: 'click',
                    text: '基础',
                    icon: 'ani-icon-basic',
                    className: 'menu-item',
                    selectedColor: '#8854d0',
                    hump: false
                },
                {
                    pagePath: '/pages/component/index',
                    action: 'click',
                    text: '组件',
                    icon: 'ani-icon-component',
                    selectedColor: '#8854d0',
                    className: 'menu-item',
                    hump: false,
                    badge: {
                        show: true,
                        num: 16,
                        class: 'bg-gradual-purple text-white',
                        style: 'width: 32rpx; height: 32rpx'
                    }
                },
                {
                    pagePath: '/pages/solution/index',
                    action: 'click',
                    text: '解决方案',
                    icon: 'ani-icon-solution',
                    selectedColor: '#8854d0',
                    className: 'menu-item',
                    hump: false
                },
                {
                    pagePath: '/pages/about/index',
                    action: 'click',
                    text: '关于',
                    icon: 'ani-icon-person',
                    selectedColor: '#8854d0',
                    className: 'menu-item',
                    hump: false
                }
            ]
        },
        menuBar3: {
            // 当前索引
            current: 0,
            // 字体颜色
            color: '#b4bbc8',
            // 字体选中颜色
            selectedColor: '#8854d0',
            // 背景颜色
            backgroundColor: '#fff',
            // 固定在底部
            isFixed: true,
            // 角标字体颜色
            badgeColor: '#fff',
            // 角标背景颜色
            badgeBgColor: '#8854d0',
            // 去掉顶部细线
            unlined: false,
            // tabbar列表
            list: [
                {
                    pagePath: '/pages/basic/index',
                    action: 'click',
                    text: '基础',
                    icon: 'ani-icon-basic',
                    className: 'menu-item',
                    selectedColor: '#8854d0',
                    hump: false
                },
                {
                    pagePath: '/pages/component/index',
                    action: 'click',
                    text: '组件',
                    icon: 'ani-icon-component',
                    selectedColor: '#8854d0',
                    className: 'menu-item',
                    hump: false,
                    badge: {
                        show: true,
                        num: '',
                        class: 'bg-gradual-purple text-white dot'
                    }
                },
                {
                    pagePath: '/pages/solution/index',
                    action: 'click',
                    text: '解决方案',
                    icon: 'ani-icon-solution',
                    selectedColor: '#8854d0',
                    className: 'menu-item',
                    hump: false
                },
                {
                    pagePath: '/pages/about/index',
                    action: 'click',
                    text: '关于',
                    icon: 'ani-icon-person',
                    selectedColor: '#8854d0',
                    className: 'menu-item',
                    hump: false
                }
            ]
        },
        menuBar4: {
            // 当前索引
            current: 0,
            // 字体颜色
            color: '#b4bbc8',
            // 字体选中颜色
            selectedColor: '#8854d0',
            // 背景颜色
            backgroundColor: '#fff',
            // 固定在底部
            isFixed: true,
            // 角标字体颜色
            badgeColor: '#fff',
            // 角标背景颜色
            badgeBgColor: '#8854d0',
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
                    selectedColor: '#8854d0'
                },
                {
                    pagePath: '/pages/component/index',
                    action: 'link',
                    text: '组件',
                    icon: 'ani-icon-component',
                    selectedColor: '#8854d0',
                    className: 'menu-item'
                },
                {
                    pagePath: '/pages/solution/index',
                    action: 'link',
                    text: '解决方案',
                    icon: 'ani-icon-solution',
                    selectedColor: '#8854d0',
                    className: 'menu-item'
                },
                {
                    pagePath: '/pages/about/index',
                    action: 'link',
                    text: '关于',
                    icon: 'ani-icon-person',
                    selectedColor: '#8854d0',
                    className: 'menu-item'
                }
            ]
        }
    },
    onLoad() {},
    onShareAppMessage() {},
    onShow() {}
});
