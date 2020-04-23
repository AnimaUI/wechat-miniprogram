const { watch } = require('../../assets/js/vuefy');

Component({
    options: {
        multipleSlots: true,
        styleIsolation: 'shared'
    },
    behaviors: [],
    properties: {
        tabConfig: {
            type: Object,
            value: {
                currentTab: {
                    type: Number,
                    value: 0
                },
                activeColorClass: {
                    type: String,
                    value: 0
                },
                tabData: {
                    type: Array,
                    value: []
                }
            }
        }
    },
    data: {
        windowHeight: 0,
        swiperHeight: 0,
        tabScrollLeft: 0
    },
    /**
     * 声明周期函数
     */
    lifetimes: {
        // 在组件实例被创建
        created() {},
        // 在组件实例进入页面节点树时执行
        attached() {
            const that = this;
            wx.getSystemInfo({
                success: (res) => {
                    that.setData({
                        pixelRatio: res.pixelRatio,
                        windowHeight: res.windowHeight,
                        windowWidth: res.windowWidth
                    });
                }
            });
            watch(this, {
                ['tabConfig'['currentTab']]: function (newVal) {
                    console.log(newVal);
                }
            });
        },
        // 在组件实例被移动到节点树另一个位置时执行
        moved() {},
        // 在组件实例被从页面节点树移除时执行
        detached() {}
    },
    pageLifetimes: {
        // 页面被展示
        show() {}
    },
    methods: {
        // tab切换函数，让swiper当前滑块的current的index与tab头部index一一对应
        switchNav(e) {
            const index = e.target.dataset.current;
            // 设置data属性中的navbarActiveIndex为当前点击的navbar
            const singleNavWidth = this.data.windowWidth / 5;
            if (+this.data.currentTab === index) {
                return false;
            } else {
                // 设置data属性中的currentTab为当前点击的navbar
                this.setData({
                    currentTab: index,
                    tabScrollLeft: (index - 2) * singleNavWidth
                });
                this.triggerEvent('changeEvent', index);
            }
        }
    }
});
