// import { prefix } from '../config';

Component({
    options: {
        multipleSlots: true,
        styleIsolation: 'shared'
    },
    behaviors: [],
    properties: {
        swiperList: {
            type: Array,
            value: []
        },
        // 当前所在滑块的 index
        current: {
            type: Number,
            value: 0
        },
        // 是否显示面板指示点
        indicatorDots: {
            type: Boolean,
            value: true
        },
        // 是否采用衔接滑动
        circular: {
            type: Boolean,
            value: true
        },
        // 是否自动切换
        autoplay: {
            type: Boolean,
            value: true
        },
        // 自动切换时间间隔
        interval: {
            type: Number,
            value: 5000
        },
        // 滑动动画时长
        duration: {
            type: Number,
            value: 500
        },
        dotStyle: {
            type: String,
            value: 'round'
        }
    },
    data: {},
    /**
     * 声明周期函数
     */
    lifetimes: {
        // 在组件实例被创建
        created() {},
        // 在组件实例进入页面节点树时执行
        attached() {},
        // 在组件实例被移动到节点树另一个位置时执行
        moved() {},
        // 在组件实例被从页面节点树移除时执行
        detached() {}
    },
    pageLifetimes: {
        // 页面被展示
        show() {}
    },
    methods: {}
});
