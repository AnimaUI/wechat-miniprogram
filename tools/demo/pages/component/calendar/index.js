// 获取应用实例
const app = getApp();
import Modal from '../../../animaUi/components/modal/modal';

Page({
    data: {
        imgBaseUrl: app.imgBaseUrl,
        show1: false,
        show2: false,
        date1: '2020年07月07日',
        date2: '2020年07月07日'
    },
    onLoad() {},
    onShareAppMessage() {},
    onShow() {},
    tap1() {
        this.setData({
            show1: true
        });
    },
    tap2() {
        this.setData({
            show2: true
        });
    },
    changeDate(e) {
        Modal.alert({
            message: `选择时间: ${e.detail.date}\n时间戳: ${e.detail.timeStamp}\n点击确定2S后该弹窗关闭`
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
    confirmCalendar(e) {
        const DETAIL = e.detail;
        const CALENDAR = DETAIL.calendar;
        Modal.alert({
            message: `选择时间: ${e.detail.date}\n时间戳: ${e.detail.timeStamp}\n点击确定2S后日历关闭`,
            asyncClose: true
        }).then(() => {
            Modal.close();
            this.setData({
                date1: DETAIL.date
            });
            setTimeout(() => {
                CALENDAR.close();
            }, 1000);
        })
        .catch(() => {
            Modal.close();
            setTimeout(() => {
                CALENDAR.close();
            }, 1000);
        });
    },
    changeMultipleDate() {},
    confirmMultipleCalendar() {}
});
