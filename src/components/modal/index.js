import { prefix } from '../config';
import { openType } from '../../mixins/open-type';

Component({
    options: {
        multipleSlots: true,
        styleIsolation: 'shared'
    },
    behaviors: [openType],
    properties: {
        useSlot: Boolean,
        useTitleSlot: Boolean,
        show: {
            type: Boolean,
            observer(show) {
                !show && this.stopLoading();
            }
        },
        title: {
            type: String,
            value: '标题'
        },
        message: {
            type: String,
            value: '代码是写给人看的，不是写给人算的~~'
        },
        zIndex: {
            type: Number,
            value: 2000
        },
        asyncClose: {
            type: Boolean,
            value: false
        },
        closeOnClickOverlay: {
            type: Boolean,
            value: false
        },
        confirmButtonText: {
            type: String,
            value: '确认'
        },
        cancelButtonText: {
            type: String,
            value: '取消'
        },
        confirmButtonColor: {
            type: String,
            value: 'var(--blue)'
        },
        cancelButtonColor: {
            type: String,
            value: 'var(--dark-gray)'
        },
        showConfirmButton: {
            type: Boolean,
            value: true
        },
        showCancelButton: {
            type: Boolean,
            value: false
        },
        overlay: {
            type: Boolean,
            value: false
        },
        confirmButtonOpenType: {
            type: String,
            observer(confirmButtonOpenType) {
                let openType = 'contact';
                if (confirmButtonOpenType === 'lang') {
                    openType = 'getUserInfo';
                }
                this.setData({
                    openType
                });
            }
        },
        lang: {
            type: String,
            value: 'en'
        },
        businessId: Number
    },
    data: {
        prefix,
        loading: {
            confirm: false,
            cancel: false
        }
    },
    /**
     * 声明周期函数
     */
    lifetimes: {
        // 在组件实例被创建
        created() {},
        // 在组件实例进入页面节点树时执行
        attached() {},
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
        onConfirm() {
            !this.data.openType && this.handleAction('confirm');
        },
        onCancel() {
            this.data.confirmButtonOpenType && this.handleAction('cancel');
        },
        onClickOverlay() {
            this.data.closeOnClickOverlay && this.onClose('overlay');
        },
        handleAction(action) {
            if (this.data.asyncClose) {
                this.setData({
                    [`loading.${action}`]: true
                });
            }
            this.onClose(action);
        },
        close() {
            this.setData({
                show: false,
                overlay: false
            });
        },
        stopLoading() {
            this.setData({
                loading: {
                    confirm: false,
                    cancel: false
                }
            });
        },
        onClose(action) {
            if (!this.data.asyncClose) {
                this.close();
            }
            this.triggerEvent('close', action);
            // 把 modal 实例传递出去，可以通过 stopLoading() 在外部关闭按钮的 loading
            this.triggerEvent(action, { modal: this });
            const callback = this.data[
                action === 'confirm' ? 'onConfirm' : 'onCancel'
            ];
            if (callback) {
                callback(this);
            }
        }
    }
});
