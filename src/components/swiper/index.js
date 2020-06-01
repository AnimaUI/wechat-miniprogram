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
        swiperType: {
            type: String,
            value: 'screen-swiper'
        },
        height: {
            type: String,
            value: '320rpx'
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
            value: 'round-dot'
        },
        indicatorActiveColor: {
            type: String,
            value: 'var(--white)'
        }
    },
    data: {
        imgHeight: ''
    },
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
    methods: {
        changeSwiper(e) {
            this.setData({
                current: e.detail.current
            });
        },
        loadImgHheight(e) {
            // 获取当前屏幕的宽度
            const winWid = wx.getSystemInfoSync().windowWidth;
            // 图片高度
            const imgh = e.detail.height;
            const imgw = e.detail.width;
            // 等比设置swiper的高度。  即 屏幕宽度 / swiper高度 = 图片宽度 / 图片高度 ==> swiper高度 = 屏幕宽度 * 图片高度 / 图片宽度
            const swiperH = (winWid * imgh) / imgw + 'px';
            console.log((winWid * imgh) / imgw);
            this.setData({
                imgHeight: swiperH // 设置高度
            });
        }
    }
});
