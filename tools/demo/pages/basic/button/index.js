// 获取应用实例
const app = getApp();
const {
    colour,
    colourText,
    basicColor,
    basicColorText,
    gradualColor,
    gradualColorText
} = require('../../../utils/colour');
Page({
    data: {
        colour,
        colourText,
        basicColor,
        basicColorText,
        gradualColor,
        gradualColorText,
        swiperHeight: 0,
        currentTab: 3,
        activeColorClass: 'cyan',
        tabData: [
            {
                name: '背景色',
                icon: 'background'
            },
            {
                name: '线框',
                icon: 'border'
            },
            {
                name: '图标',
                icon: 'icon'
            },
            {
                name: '其他',
                icon: 'other'
            }
        ]
    },
    onLoad() {},
    onShareAppMessage() {},
    onShow() {
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
    copyText(e) {
        const text = e.currentTarget.dataset.text;
        wx.setClipboardData({
            data: text,
            success(res) {
                wx.getClipboardData({
                    success(res) {
                        wx.showToast({
                            title: '复制成功'
                        });
                    }
                });
            }
        });
    }
});
