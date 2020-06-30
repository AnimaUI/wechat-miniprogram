// 获取应用实例
const app = getApp();
import Modal from '../../../animaUi/components/modal/modal';
Page({
    data: {
        imgBaseUrl: app.imgBaseUrl
    },
    onLoad() {},
    onShareAppMessage() {},
    onShow() {},
    tap1() {
        Modal.alert({
            title: '标题',
            message: '代码是写给人看的，不是写给人算的~~'
        }).then(() => {
            // on close
            console.log('onClose');
        }).catch(() => {
            // on cancel
            console.log('onCancel');
        });
    },
    tap2() {
        Modal.alert({
            message: '代码是写给人看的，不是写给人算的~~'
        }).then(() => {
            // on close
            console.log('onClose');
        }).catch(() => {
            // on cancel
            console.log('onCancel');
        });
    }
});
