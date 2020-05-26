// 获取应用实例
const app = getApp();
let {
    colour
} = require('../../../../utils/colour');
let bgColors = ['', 'dark', 'disabled'].map((item) => {
    let prefix = 'radio';
    let prefix2 = '';
    if (item !== '') {
        prefix2 = '-';
    }
    prefix = prefix + prefix2 + item;
    return colour.map((color) => {
        return `${prefix}-${color}`;
    });
});
Page({
    data: {
        imgBaseUrl: app.imgBaseUrl,
        bgColors,
        swiperHeight: 0,
        currentTab: 0,
        activeColorClass: 'red',
        tabData: [
            {
                name: '基础'
            },
            {
                name: '自定义形状'
            }
        ]
    },
    onLoad() {},
    onShareAppMessage() {},
    onShow() {
        wx.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: 'rgba(0, 0, 0, 0)'
        });
        this.setSwiperHeight(this.data.currentTab);
    },
    // 滑动swiper切换，让swiper当前滑块的current的index与tab头部index一一对应
    switchTabContent(e) {
        const index = e.detail.current;
        this.setData({
            currentTab: e.detail.current
        });
        this.setSwiperHeight(index);
    },
    /**
     * setSwiperHeight 动态设置swiper 高度
     * @param {*} index
     */
    setSwiperHeight(index) {
        const query = wx.createSelectorQuery().in(this);
        const select = '.ani-swiper-item';
        const that = this;
        this.setData({
            currentTab: index
        });
        query
            .selectAll(select)
            .boundingClientRect(function (rect) {
                that.setData({
                    swiperHeight: rect[index].height
                });
            })
            .exec();
    },
    changeEvent({ detail }) {
        this.switchTabContent({
            detail: {
                current: detail
            }
        });
    },
    changeRadius(e) {
        this.setData({
            isRadius: e.detail.value
        });
    }
});
