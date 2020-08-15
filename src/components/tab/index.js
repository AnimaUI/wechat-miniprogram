import { prefix } from '../config';

Component({
    options: {
        multipleSlots: true,
        styleIsolation: 'shared'
    },
    behaviors: [],
    properties: {
        currentTab: {
            type: Number,
            value: 0
        },
        color: {
            type: String,
            value: ''
        },
        activeColor: {
            type: String,
            value: ''
        },
        colorClass: {
            type: String,
            value: 'text-black'
        },
        activeColorClass: {
            type: String,
            value: 'olive'
        },
        tabBackground: {
            type: Object,
            value: {}
        },
        tabData: {
            type: Array,
            value: []
        }
    },
    data: {
        prefix,
        swiperHeight: 0,
        pixelRatio: 1,
        windowWidth: 0,
        windowHeight: 0,
        singleNavWidth: 0
    },
    /**
     * 声明周期函数
     */
    lifetimes: {
        // 在组件实例被创建
        created() {},
        // 在组件实例进入页面节点树时执行
        attached() {
            const me = this;
            wx.getSystemInfo({
                success: res => {
                    me.setData({
                        pixelRatio: res.pixelRatio,
                        windowHeight: res.windowHeight,
                        windowWidth: res.windowWidth,
                        singleNavWidth: res.windowWidth / 5
                    });
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
            const index = e.currentTarget.dataset.current;
            // 设置data属性中的navbarActiveIndex为当前点击的navbar
            if (+this.data.currentTab === index) {
                return;
            }
            // 设置data属性中的currentTab为当前点击的navbar
            this.setData({
                currentTab: index
            });
            this.triggerEvent('changeEvent', index);
        },
        getSelectedBg() {
            return 'red';
        }
    }
});
