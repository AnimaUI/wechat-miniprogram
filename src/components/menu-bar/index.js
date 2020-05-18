import { prefix } from '../config';

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
        prefix,
        statusBar: app.globalData.statusBar,
        customBar: app.globalData.customBar,
        custom: app.globalData.custom
    },
    lifetimes: {
        attached() {
            // 在组件实例进入页面节点树时执行
            this.editMenuBar();
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
        menuBarSwitch(e) {
            const DATASET = e.currentTarget.dataset;
            const INDEX = DATASET.index;
            const ACTION = DATASET.action;
            // const menuBar = app.globalData.menuBar;
            if (INDEX === this.current) {
                return;
            }
            if (ACTION === 'link') {
                wx.redirectTo({
                    url: this.data.list[INDEX].pagePath
                });
            } else if (ACTION === 'click') {
                this.setData({
                    current: INDEX
                });
                this.triggerEvent('menuBarSwitch', {
                    index: INDEX
                });
            }
        },
        editMenuBar() {
            const curPageArr = getCurrentPages();
            const curPage = curPageArr[curPageArr.length - 1];
            let pagePath = curPage.route;
            if (pagePath.indexOf('/') !== 0) {
                pagePath = '/' + pagePath;
            }
            const menuBar = app.globalData.menuBar;
            for (let i = 0; i < menuBar.list.length; i++) {
                if (menuBar.list[i].pagePath === pagePath) {
                    menuBar.current = i;
                    app.globalData.menuBar.current = i;
                    break;
                }
            }
            curPage.setData({
                menuBar
            });
        }
    }
});
