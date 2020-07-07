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
            value: 0
        }
    },
    data: {
        prefix,
        weekdays: ['日', '一', '二', '三', '四', '五', '六']
    },
    behaviors: [computedBehavior],
    computed: {
        subDateStr(data) {
            return $dayjs(data.subDate).format(data.subDateFormat);
        },
        weekStartArr(data) {
            if (+data.weekStart === 1) {
                return data.weekdays.push(data.weekdays.splice(0, 1));
            } else {
                return data.weekdays;
            }
        }
    },
    /**
     * 声明周期函数
     */
    lifetimes: {
        // 在组件实例被创建
        created() {
            this.$dayjs = $dayjs;
        },
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
        onClickOverlay() {
            this.closeOnClickOverlay && this.close();
        },
        close() {
            this.setData({
                show: false
            });
        }
    }
});
