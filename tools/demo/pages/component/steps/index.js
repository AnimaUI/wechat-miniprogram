// 获取应用实例
const app = getApp();
Page({
    data: {
        imgBaseUrl: app.imgBaseUrl,
        type1: 'line',
        type2: 'arrow',
        mode1: 'iconDefault',
        mode2: 'icon',
        mode3: 'num',
        mode4: 'wizard',
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
        activeColor6: 'var(--fusion-sky-blue)',
        activeColor7: 'var(--purple)',
        activeColor8: 'var(--mauve)',
        step: 0,
        scrollList: [
            'step1',
            'step2',
            'step3',
            'step4',
            'step5',
            'step6',
            'step7',
            'step8',
            'step9',
            'step10',
            'step11',
            'step12'
        ],
        scrollStep: 0,
        wizardStep: 0
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
    },
    scrollSteps() {
        this.setData({
            scrollStep:
                this.data.scrollStep == this.data.scrollList.length - 1
                    ? 0
                    : this.data.scrollStep + 1
        });
    },
    wizardSteps() {
        this.setData({
            wizardStep:
                this.data.wizardStep == this.data.scrollList.length - 1
                    ? 0
                    : this.data.wizardStep + 1
        });
    }
});
