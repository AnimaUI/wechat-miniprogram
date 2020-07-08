import $dayjs from 'dayjs';
import computedBehavior from 'miniprogram-computed';
import { prefix } from '../config';

Component({
    options: {
        multipleSlots: true,
        styleIsolation: 'shared'
    },
    properties: {
        zIndex: {
            type: Number,
            value: 999
        },
        show: {
            type: Boolean,
            value: false
        },
        title: {
            type: String,
            value: '日期选择'
        },
        closeOnClickOverlay: {
            type: Boolean,
            value: false
        },
        subDate: {
            type: Number,
            value: +new Date()
        },
        subDateFormat: {
            type: String,
            value: 'YYYY年MM月'
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
        // date-单个日期选择，range-开始日期+结束日期选择
        mode: {
            type: String,
            value: 'date'
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
         * 默认最大值为今天，之后的日期不可选
         * 2030-12-31
         * */
        maxDate: {
            type: [Number, String],
            value: ''
        }
    },
    data: {
        prefix,
        weekdays: ['日', '一', '二', '三', '四', '五', '六'],
        daysArr: [],
        curMonth: '',
        // 当前月有多少天
        days: 0,
        // 当月为星期几开始,值为0-6
        weekday: 0,
        // 选中日期
        activeDate: +new Date()
    },
    behaviors: [computedBehavior],
    computed: {
        subDateStr(data) {
            return $dayjs(data.subDate).format(data.subDateFormat);
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
                source: 'url("http://fonts.gstatic.com/s/monoton/v9/5h1aiZUrOngCibe4TkHLQka4BU4.woff2")',
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
            this.setData({
                show: false
            });
        },
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
        changeDate() {
            const me = this;
            // const ACTIVE_EDATE = this.data.activeDate;
            const SUBDATE = this.data.subDate;
            const YEAR = $dayjs(SUBDATE).year();
            const MONTH = $dayjs(SUBDATE).month();
            this.data.days = this.getMonthDay(YEAR, MONTH + 1);
            let daysArr = this.generateArray(1, this.data.days);
            const weekday = this.getWeekday();
            console.log(weekday);
            // const activeDate = $dayjs(ACTIVE_EDATE).format(this.data.subDateFormat);
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
        generateArray(start, end) {
            return Array.from(new Array(end + 1).keys()).slice(start);
        },
        // 一个月有多少天
        getMonthDay(year, month) {
            return new Date(year, month, 0).getDate();
        },
        getWeekday() {
            const SUBDATE = this.data.subDate;
            return $dayjs(SUBDATE).day();
        },
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
        formatNum(num) {
            return num < 10 ? '0' + num : num + '';
        }
    }
});
