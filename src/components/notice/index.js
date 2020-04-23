// const app = getApp();
Component({
    options: {
        styleIsolation: 'apply-shared'
    },
    behaviors: [],
    properties: {
        scroll: {
            type: Boolean,
            value: false
        },
        isShow: {
            type: Boolean,
            value: true
        },
        notice: {
            type: String,
            value: ''
        },
        bgColor: {
            type: String,
            value: '#ffecdb' // 通告栏背景色
        },
        color: {
            type: String,
            value: '#f24849' // 文字颜色
        },
        showIcon: {
            type: Boolean,
            value: false
        },
        iconColor: {
            type: String,
            value: '#f24849'
        },
        close: {
            type: Boolean,
            value: false
        },
        closeColor: {
            type: String,
            value: '#f24849'
        },
        bgRgba: {
            type: String,
            value: 'rgba(255, 236, 219, 1);' // 背景颜色的rgba形式，a的值为0，配合close使用
        }
    },
    data: {},
    methods: {
        onDismissNotice: function onDismissNotice(event) {
            this.setData({
                isShow: false
            });
            const detail = event.detail;
            const option = {};
            this.triggerEvent('close', detail, option);
        }
    }
});
