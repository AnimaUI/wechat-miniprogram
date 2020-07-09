// 获取应用实例
const app = getApp();
import Modal from '../../../animaUi/components/modal/modal';

Page({
    data: {
        imgBaseUrl: app.imgBaseUrl,
        show1: true
    },
    onLoad() {},
    onShareAppMessage() {},
    onShow() {},
    tap1() {
        this.setData({
            show1: true
        });
    },
    changeDate(e) {
        Modal.alert({
            message: `选择时间: ${e.detail.date}\n时间戳: ${e.detail.timeStamp}\n点击确定2S后该弹窗关闭`,
            asyncClose: true
        }).then(() => {
            // on close
            Modal.close();
            setTimeout(() => {
                Modal.close();
            }, 1000);
        })
        .catch(() => {
            // on cancel
            Modal.close();
            setTimeout(() => {
                Modal.close();
            }, 1000);
        });
    },
    closeCalendar(e) {
        const CALENDAR = e.detail.calendar;
        Modal.alert({
            message: `选择时间: ${e.detail.date}\n时间戳: ${e.detail.timeStamp}\n点击确定2S后日历关闭`,
            asyncClose: true
        }).then(() => {
            // on close
            Modal.close();
            setTimeout(() => {
                CALENDAR.close();
            }, 1000);
        })
        .catch(() => {
            // on cancel
            Modal.close();
            setTimeout(() => {
                CALENDAR.close();
            }, 1000);
        });
    }
});
