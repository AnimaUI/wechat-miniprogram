import $dayjs from 'dayjs';
import computedBehavior from 'miniprogram-computed';
import { prefix } from '../config';
import './locale/zh-cn'; // ES 2015

$dayjs.locale('zh-cn');

Component({
    options: {
        multipleSlots: true,
        styleIsolation: 'shared'
    },
    properties: {
        // mode 选择日期的模式，date 为单个日期，range 为选择日期范围
        mode: {
            type: String,
            value: 'date'
        },
        zIndex: {
            type: Number,
            value: 999
        },
        timing: {
            type: String,
            value: 'linear',
            observer(val) {
                const timingArr = this.data.timingArr;
                if (timingArr.indexOf(val) < 0) {
                    this.setData({
                        timing: 'linear'
                    });
                }
            }
        },
        show: {
            type: Boolean,
            value: false,
            observer(val) {
                // 弹出动画
                const timing = this.data.timing;
                if (val) {
                    const animation = wx.createAnimation({
                        duration: 300,
                        timingFunction: timing
                    });
                    setTimeout(() => {
                        animation.bottom(0).step();
                        this.setData({
                            animation: animation.export()
                        });
                    }, 0);
                } else {
                    const animation = wx.createAnimation({
                        duration: 300,
                        timingFunction: timing
                    });
                    animation.bottom(-320).step();
                    this.setData({
                        animation: animation.export()
                    });
                }
            }
        },
        title: {
            type: String,
            value: '日期选择'
        },
        closeOnClickOverlay: {
            type: Boolean,
            value: false
        },
        // 选中日期
        activeDate: {
            type: [Number, String],
            value: +new Date(),
            observer(val) {
                if (/年|月|日/.test(val)) {
                    val = $dayjs(
                        val.replace(/年|月|日/g, '-')
                    ).valueOf();
                }
                if (val) {
                    this.setData({
                        subDate: val,
                        activeDate: val
                    });
                }
            }
        },
        // 开始时间默认今天
        startDate: {
            type: [Number, String],
            value: +new Date()
        },
        // 结束时间默认明天
        endDate: {
            type: [Number, String],
            value: +new Date().setTime(+new Date() + 24 * 60 * 60 * 1000)
        },
        subDateFormat: {
            type: String,
            value: 'YYYY年MM月'
        },
        dateFormat: {
            type: String,
            value: 'YYYY年MM月DD日'
        },
        weekStart: {
            type: Number,
            value: 0,
            observer(weekStart) {
                return +weekStart === 0 ? 0 : 1;
            }
        },
        // 选中|起始结束日期字体颜色
        activeBgColor: {
            type: String,
            value: 'var(--red)'
        },
        // 范围内日期背景色
        rangeBgColor: {
            type: String,
            default: 'var(--light-red)'
        },
        // 是否允许切换年份
        changeYear: {
            type: Boolean,
            value: true
        },
        // 是否允许切换月份
        changeMonth: {
            type: Boolean,
            value: true
        },
        // 可切换的最大年份
        maxYear: {
            type: [Number, String],
            value: 2040
        },
        // 可切换的最小年份
        minYear: {
            type: [Number, String],
            value: 1970
        },
        // 最小可选日期(不在范围内日期禁用不可选)
        minDate: {
            type: [Number, String],
            value: '1970-01-01'
        },
        /**
         * 最大可选日期
         * 2040-12-31
         * */
        maxDate: {
            type: [Number, String],
            value: '2040-12-31'
        },
        // 是否使用确定按钮
        useConfirm: {
            type: Boolean,
            value: true
        },
        asyncClose: {
            type: Boolean,
            value: false
        },
        confirmBtnText: {
            type: String,
            value: '确定'
        },
        confirmBtnClass: {
            type: String,
            value: 'bg-red'
        },
        confirmBtnColor: {
            type: String,
            value: 'var(--red)'
        }
    },
    data: {
        prefix,
        weekdays: ['日', '一', '二', '三', '四', '五', '六'],
        daysArr: [],
        subDate: +new Date(),
        curMonth: '',
        // 当前月有多少天
        days: 0,
        // 当月为星期几开始,值为0-6
        weekday: 0,
        timingArr: ['linear', 'ease', 'ease-out', 'ease-in-out']
    },
    behaviors: [computedBehavior],
    computed: {
        subDateStr(data) {
            const date = data.subDate;
            return $dayjs(date).format(data.subDateFormat);
        },
        weekStartArr(data) {
            if (+data.weekStart === 1) {
                const weekdaysTemp = data.weekdays;
                const concatWeekdaysTemp = weekdaysTemp.__rawObject__.concat();
                const ELE = concatWeekdaysTemp.splice(0, 1);
                concatWeekdaysTemp.push(ELE[0]);
                return concatWeekdaysTemp;
            } else {
                return data.weekdays;
            }
        },
        curMonth(data) {
            return $dayjs(data.subDate).month() + 1;
        },
        activeDateStr(data) {
            let activeDate = data.activeDate;
            if (/年|月|日/.test(activeDate)) {
                activeDate = $dayjs(
                    activeDate.replace(/年|月|日/g, '-')
                ).valueOf();
            }
            return $dayjs(activeDate).format(data.dateFormat);
        }
    },
    /**
     * 声明周期函数
     */
    lifetimes: {
        // 在组件实例被创建
        created() {
            wx.loadFontFace({
                family: 'Monoton',
                source:
                    'url("http://fonts.gstatic.com/s/monoton/v9/5h1aiZUrOngCibe4TkHLQka4BU4.woff2")',
                success: () => {}
            });
            this.$dayjs = $dayjs;
        },
        // 在组件实例进入页面节点树时执行
        attached() {
            this.changeDate();
        },
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
        onClickOverlay() {
            this.closeOnClickOverlay && this.close();
        },
        close() {
            const timing = this.data.timing;
            const animation = wx.createAnimation({
                duration: 300,
                timingFunction: timing
            });
            animation.bottom(-320).step();
            this.setData({
                animation: animation.export()
            });
            setTimeout(() => {
                this.setData({
                    animation: animation.export(),
                    show: false
                });
            }, 200);
        },
        /**
         * checkRange 检查是否超出预设年份
         * @param {Number} year 传入年份
         */
        checkRange(year) {
            let stepState = false;
            if (year < this.data.minYear || year > this.data.maxYear) {
                wx.showToast({
                    title: `年范围不在${this.data.minYear}-${this.data.maxYear}之间`,
                    icon: 'none',
                    duration: 2000
                });
                stepState = true;
            }
            return stepState;
        },
        /**
         * changeYear 点击左右按钮切换年份
         * @param {Objetc} e 点击的当前对象
         */
        changeYear(e) {
            const TYPE = +e.currentTarget.dataset.type;
            const SUBDATE = this.data.subDate;
            /* eslint-disable */
            const newSubDate = TYPE
                ? new Date(SUBDATE).setFullYear(
                      new Date(SUBDATE).getFullYear() + 1
                  )
                : new Date(SUBDATE).setFullYear(
                      new Date(SUBDATE).getFullYear() - 1
                  );
            /* eslint-disable */
            const YEAR = $dayjs(newSubDate).year();
            if (!this.checkRange(YEAR)) {
                this.setData({
                    subDate: newSubDate
                });
                this.changeDate();
            }
        },
        /**
         * changeMonth 点击左右按钮切换月份
         * @param {Objetc} e 点击的当前对象
         */
        changeMonth(e) {
            const TYPE = +e.currentTarget.dataset.type;
            const SUBDATE = this.data.subDate;
            const YEAR = $dayjs(SUBDATE).year();
            const MONTH = $dayjs(SUBDATE).month();
            let month = MONTH;
            let newSubDate;
            let year = YEAR;
            if (TYPE) {
                month = MONTH + 1;
                year = month > 12 ? YEAR + 1 : YEAR;
                month = month > 12 ? 1 : month;
            } else {
                month = MONTH - 1;
                year = month < 0 ? YEAR - 1 : YEAR;
                month = month < 0 ? 11 : month;
            }
            if (!this.checkRange(year)) {
                newSubDate = new Date(
                    new Date(SUBDATE).setFullYear(year)
                ).setMonth(month);
                this.setData({
                    subDate: newSubDate
                });
                this.changeDate();
            }
        },
        /**
         * changeDate 改变日期
         */
        changeDate() {
            const me = this;
            const SUBDATE = this.data.subDate;
            const YEAR = $dayjs(SUBDATE).year();
            const MONTH = $dayjs(SUBDATE).month();
            this.data.days = this.getMonthDay(YEAR, MONTH + 1);
            let daysArr = this.generateArray(1, this.data.days);
            const weekday = this.getWeekday(SUBDATE);
            daysArr = daysArr.map(function (item) {
                return {
                    day: item,
                    active: me.getActive(item)
                };
            });
            this.setData({
                daysArr,
                weekday
            });
        },
        /**
         * generateArray 根据传入参数获取指定数组
         * @param {Number} start
         * @param {Number} end
         */
        generateArray(start, end) {
            return Array.from(new Array(end + 1).keys()).slice(start);
        },
        /**
         * 获取当年当月一个月有多少天
         * @param {Number} year
         * @param {Number} month
         */
        getMonthDay(year, month) {
            return new Date(year, month, 0).getDate();
        },
        /**
         * getWeekday 根据时间戳获取该月是星期几开始
         * @param {Number} date
         */
        getWeekday(date) {
            return new Date(new Date(date).setDate(1)).getDay();
        },
        /**
         * getActive 根据传入参数判断是否是选择状态
         * @param {Number} dayNum
         */
        getActive(dayNum) {
            const ACTIVE_EDATE = this.data.activeDate;
            const SUBDATE = this.data.subDate;
            const YEAR = $dayjs(SUBDATE).year();
            const MONTH = $dayjs(SUBDATE).month();
            const date = `${YEAR}-${this.formatNum(MONTH + 1)}-${this.formatNum(
                dayNum
            )}`;
            const activeDate = $dayjs(ACTIVE_EDATE).format('YYYY-MM-DD');
            return activeDate === date;
        },
        /**
         * formatNum 格式数据为01格式
         * @param {Number} num
         */
        formatNum(num) {
            return num < 10 ? '0' + num : num + '';
        },
        /**
         * dateClick 点击选中单个日历
         * @param {Objetc} e 点击的当前对象
         */
        dateClick(e) {
            const DAY = e.currentTarget.dataset.day;
            const SUBDATE = this.data.subDate;
            const YEAR = $dayjs(SUBDATE).year();
            const MONTH = $dayjs(SUBDATE).month();
            const date = `${YEAR}-${this.formatNum(MONTH + 1)}-${this.formatNum(
                DAY
            )} 00:00:00`;
            // 获取时间戳，不能使用 +new Date()形式, ios获为NaN
            const newSubDate = $dayjs(date).valueOf();
            this.setData({
                activeDate: newSubDate
            });
            this.changeDate();
            this.confirm(0);
        },
        /**
         * confirm 确认按钮点击事件
         * @param {Number} type 点击非确定按钮判断
         */
        confirm(type) {
            // 设置不使用确定按钮
            if (!this.data.useConfirm) {
                this.triggerEvent('changeDate', {
                    date: this.data.activeDateStr,
                    timeStamp: this.data.activeDate
                });
                this.close();
            }
            // 如果是使用确定按钮且单击日期则不作任何关闭操作
            if (type === 0) {
                return;
            }
            // 如果使用确定按钮
            if (this.data.asyncClose) {
                this.triggerEvent('confirm', {
                    calendar: this,
                    date: this.data.activeDateStr,
                    timeStamp: this.data.activeDate
                });
            } else {
                this.triggerEvent('changeDate', {
                    date: this.data.activeDateStr,
                    timeStamp: this.data.activeDate
                });
                this.close();
            }
        }
    }
});
