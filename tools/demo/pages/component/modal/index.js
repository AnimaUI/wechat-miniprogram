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
            message: '弹窗内容'
        }).then(() => {
            // on close
        });
    }
});
