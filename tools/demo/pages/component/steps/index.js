// 获取应用实例
const app = getApp();
Page({
    data: {
        imgBaseUrl: app.imgBaseUrl,
        mode1: 'iconDefault',
        mode2: 'icon',
        mode3: 'num',
        mode4: 'square-text',
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
        activeColor1: 'var(--red)',
        activeColor2: 'var(--orange)',
        activeColor3: 'var(--yellow)',
        activeColor4: 'var(--green)',
        activeColor5: 'var(--cyan)',
        activeColor6: 'var(--sky-blue)',
        step: 0
    },
    onLoad() {},
    onShareAppMessage() {},
    onShow() {},
    next() {
        this.setData({
            step:
                this.data.step == this.data.list.length - 1
                    ? 0
                    : this.data.step + 1
        });
    }
});
