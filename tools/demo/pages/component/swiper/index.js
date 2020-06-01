// 获取应用实例
const app = getApp();
let swiperList = ['1.jpg'].map((item, index) => {
    return {
        id: index,
        url: `${app.imgBaseUrl}/${item}`
    }
});
Page({
    data: {
        imgBaseUrl: app.imgBaseUrl,
        isSquare: false,
        swiperList
    },
    onLoad() {},
    onShareAppMessage() {},
    onShow() {},
    changeSquare(e) {
        this.setData({
            isSquare: e.detail.value
        });
    }
});
