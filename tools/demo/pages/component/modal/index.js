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
        })
        .catch(() => {
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
        })
        .catch(() => {
            // on cancel
            console.log('onCancel');
        });
    },
    tap3() {
        Modal.confirm({
            title: '我才不写代码呢~',
            message: '代码是写给人看的，不是写给人算的~~'
        }).then(() => {
            // on close
            console.log('onClose');
        })
        .catch(() => {
            // on cancel
            console.log('onCancel');
        });
    },
    tap4() {
        Modal.confirm({
            title: '我才不写代码呢~',
            message: '代码是写给人看的，不是写给人算的~~',
            asyncClose: true
        }).then(() => {
            // on close
            setTimeout(() => {
                Modal.close();
            }, 1000);
            console.log('onClose');
        })
        .catch(() => {
            // on cancel
            setTimeout(() => {
                Modal.close();
            }, 1000);
            console.log('onCancel');
        });
    },
    tap5() {
        this.setData({ show: true });
    }
});
