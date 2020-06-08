// 获取应用实例
const app = getApp();
Page({
    data: {
        imgBaseUrl: app.imgBaseUrl,
        type1: 'line-icon', // 'square-text',
        list: [
            {
                icon: 'ani-icon-start',
                name: 'start'
            },
            {
                icon: 'ani-icon-wait',
                name: 'wait'
            },
            {
                icon: 'ani-icon-close-fill',
                name: 'error'
            },
            {
                icon: 'ani-icon-checked-fill',
                name: 'finised'
            }
        ],
        activeColor: 'var(--red)',
        step: 0
    },
    onLoad() {},
    onShareAppMessage() {},
    onShow() {},
    next() {
        this.setData({
            step: this.data.step == this.data.list.length - 1
                    ? 0
                    : this.data.step + 1
        });
    }
});
