const app = getApp();
Component({
    /**
     * 组件的一些选项
     */
    options: {
        addGlobalClass: true,
        multipleSlots: true
    },
    /**
     * 组件的对外属性
     */
    properties: {
        // 当前索引
        current: {
            type: Number,
            value: 0
        },
        // 字体颜色
        color: {
            type: String,
            value: '#888'
        },
        // 字体选中颜色
        selectedColor: {
            type: String,
            value: '#f35352'
        },
        // 背景颜色
        backgroundColor: {
            type: String,
            value: '#fff'
        },
        // 是否需要中间凸起按钮
        hump: {
            type: Boolean,
            value: false
        },
        // 固定在底部
        isFixed: {
            type: Boolean,
            value: true
        },
        // tabbar列表
        list: {
            type: Array,
            value: []
        },
        // 角标字体颜色
        badgeColor: {
            type: String,
            value: '#fff'
        },
        // 角标背景颜色
        badgeBgColor: {
            type: String,
            value: '#f35352'
        },
        // 去掉顶部细线
        unlined: {
            type: Boolean,
            value: false
        }
    },
    /**
     * 组件的初始数据
     */
    data: {
        statusBar: app.globalData.statusBar,
        customBar: app.globalData.customBar,
        custom: app.globalData.custom
    },
    lifetimes: {
        attached() {
            // 在组件实例进入页面节点树时执行
            this.editTabBar();
        },
        detached() {
            // 在组件实例被从页面节点树移除时执行
        }
    },
    pageLifetimes: {
        show() {},
        hide() {}
    },
    /**
     * 组件的方法列表
     */
    methods: {
        tabbarSwitch(e) {
            const DATASET = e.currentTarget.dataset;
            const INDEX = DATASET.index;
            wx.redirectTo({
                url: this.data.list[INDEX].pagePath
            });
            // this.triggerEvent('tabbarSwitch', {
            //     index: INDEX
            // });
        },
        editTabBar() {
            const curPageArr = getCurrentPages();
            const curPage = curPageArr[curPageArr.length - 1];
            let pagePath = curPage.route;
            if (pagePath.indexOf('/') !== 0) {
                pagePath = '/' + pagePath;
            }
            const tabBar = app.globalData.tabBar;
            for (let i = 0; i < tabBar.list.length; i++) {
                if (tabBar.list[i].pagePath === pagePath) {
                    tabBar.current = i;
                    app.globalData.tabBar.current = i;
                    break;
                }
            }
            curPage.setData({
                tabBar
            });
        }
    }
});