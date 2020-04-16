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
        className: {
            type: String,
            default: ''
        },
        isCustom: {
            type: [Boolean, String],
            default: false
        },
        isBack: {
            type: [Boolean, String],
            default: false
        },
        bgImage: {
            type: String,
            default: ''
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
    /**
     * 组件的方法列表
     */
    methods: {
        BackPage() {
            wx.navigateBack({
                delta: 1
            });
        },
        toHome() {
            wx.reLaunch({
                url: '/pages/index/index'
            });
        }
    }
});