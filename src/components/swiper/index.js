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
        attached() {
            if (this.data.swiperType === 'stack-swiper') {
                this.stackrSwiper();
            }
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
            this.setData({
                imgHeight: swiperH // 设置高度
            });
        },
        // 初始化stackSwiper
        stackrSwiper() {
            let list = this.data.swiperList;
            // 如果小于4张，则需要手动复制
            const len = list.length;
            const temp1 = JSON.stringify(list[0]);
            const temp2 = JSON.stringify(list[1]);
            if (len === 1) {
                list = new Array(4)
                    .join()
                    .split(',')
                    .map(() => JSON.parse(temp1));
            } else if (len === 2) {
                list.push(JSON.parse(temp1), JSON.parse(temp2));
            } else if (len === 3) {
                list.push(JSON.parse(temp2));
            }
            for (let i = 0; i < list.length; i++) {
                list[i].zIndex =
                    parseInt(list.length / 2, 10) +
                    1 -
                    Math.abs(i - parseInt(list.length / 2, 10));
                list[i].mLeft = i - parseInt(list.length / 2, 10);
                if (list[i].mLeft === 0) {
                    this.setData({
                        current: i
                    });
                }
            }
            this.setData({
                swiperList: list
            });
        },
        // stackSwiper触摸开始
        stackStart(e) {
            this.setData({
                stackStart: e.touches[0].pageX
            });
        },
        // stackSwiper计算方向
        stackMove(e) {
            this.setData({
                direction:
                    e.touches[0].pageX - this.data.stackStart > 0
                        ? 'right'
                        : 'left'
            });
        },
        // stackSwiper计算滚动
        stackEnd() {
            const direction = this.data.direction;
            const list = this.data.swiperList;
            if (direction === 'right') {
                const mLeft = list[0].mLeft;
                const zIndex = list[0].zIndex;
                for (let i = 1; i < list.length; i++) {
                    list[i - 1].mLeft = list[i].mLeft;
                    list[i - 1].zIndex = list[i].zIndex;
                }
                list[list.length - 1].mLeft = mLeft;
                list[list.length - 1].zIndex = zIndex;
                this.setData({
                    swiperList: list
                });
            } else {
                const mLeft = list[list.length - 1].mLeft;
                const zIndex = list[list.length - 1].zIndex;
                for (let i = list.length - 1; i > 0; i--) {
                    list[i].mLeft = list[i - 1].mLeft;
                    list[i].zIndex = list[i - 1].zIndex;
                }
                list[0].mLeft = mLeft;
                list[0].zIndex = zIndex;
                this.setData({
                    swiperList: list
                });
            }
            // 设置选中点
            list.forEach((item, index) => {
                if (item.mLeft === 0) {
                    this.setData({
                        current: index
                    });
                }
            });
        }
    }
});
