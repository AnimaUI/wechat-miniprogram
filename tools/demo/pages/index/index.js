//index.js
// 获取应用实例
const app = getApp();
Page({
    data: {
        imgBaseUrl: app.imgBaseUrl,
        tabBar: app.globalData.tabBar,
        isFixed: false,
        navbarInitTop: 190,
        list: [{
                icon: 'ani-icon-color',
                en: 'color',
                cn: '颜色',
                color: 'ruby'
            },
            {
                icon: 'ani-icon-layout-fill',
                en: 'layout',
                cn: '布局',
                color: 'grapefruit'
            },
            {
                icon: 'ani-icon-icon',
                en: 'icon',
                cn: '图标',
                color: 'bittersweet'
            },
            {
                icon: 'ani-icon-btn',
                en: 'button',
                cn: '按钮',
                color: 'sunflower'
            },
            {
                icon: 'ani-icon-text',
                en: 'text',
                cn: '文本',
                color: 'straw'
            },
            {
                icon: 'ani-icon-text-shadow',
                en: 'textShadow',
                cn: '文本阴影',
                color: 'grass'
            },
            {
                icon: 'ani-icon-tag',
                en: 'tag',
                cn: '标签',
                color: 'mint'
            },
            {
                icon: 'ani-icon-portrait',
                en: 'avatar',
                cn: '头像',
                color: 'teal'
            },
            {
                icon: 'ani-icon-progress',
                en: 'progress',
                cn: '进度条',
                color: 'aqua'
            },
            {
                icon: 'ani-icon-box-shadow',
                en: 'boxShadow',
                cn: '边框阴影',
                color: 'blue-jeans'
            },
            {
                icon: 'ani-icon-loading3',
                en: 'loading',
                cn: '加载',
                color: 'plum'
            },
            {
                icon: 'ani-icon-badge',
                en: 'badge',
                cn: '徽标',
                color: 'lavender'
            }
        ]
    },
    onLoad() {
        wx.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: '#ffffff'
        });
    },
    onShareAppMessage() {},
    /**
     * 监听页面滑动事件
     */
    onPageScroll: function(e) {
        console.log(1);
        let that = this;
        // 滚动条距离顶部高度
        let scrollTop = parseInt(e.scrollTop);
        // 判断'滚动条'滚动的距离 和 '元素在初始时'距顶部的距离进行判断
        let isSatisfy = scrollTop >= that.data.navbarInitTop;
        // 为了防止不停的setData, 这儿做了一个等式判断。 只有处于吸顶的临界值才会不相等
        if (that.data.isFixed === isSatisfy) {
            return false;
        }
        console.log(2);
        that.setData({
            isFixed: isSatisfy
        });
    },
    onShow() {
        let that = this;
        if (that.data.navbarInitTop == 0) {
            //获取节点距离顶部的距离
            wx.createSelectorQuery().select('#navbar').boundingClientRect(function(rect) {
                if (rect && rect.top > 0) {
                    let navbarInitTop = parseInt(rect.top);
                    that.setData({
                        navbarInitTop: navbarInitTop
                    });
                }
            }).exec();
        }
    }
});