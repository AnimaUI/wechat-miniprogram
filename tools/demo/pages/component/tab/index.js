// 获取应用实例
const app = getApp();
Page({
    data: {
        imgBaseUrl: app.imgBaseUrl,
        swiperHeight: 0,
        currentTab: 0,
        tabData1: [
            {
                name: 'tab1'
            },
            {
                name: 'tab2'
            },
            {
                name: 'tab3'
            }
        ],
        tabData2: [
            {
                name: 'comic',
                icon: 'ani-icon-comic'
            },
            {
                name: 'menu',
                icon: 'ani-icon-menu'
            },
            {
                name: 'badge',
                icon: 'ani-icon-badge'
            }
        ],
        tabBackground3: {
            class: 'bg-gradual-olive'
        },
        tabData3: [
            {
                name: 'comic',
                icon: 'ani-icon-comic'
            },
            {
                name: 'menu',
                icon: 'ani-icon-menu'
            },
            {
                name: 'badge',
                icon: 'ani-icon-badge'
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
    }
});
