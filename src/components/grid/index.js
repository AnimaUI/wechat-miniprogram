import { prefix } from '../config';

Component({
    options: {
        multipleSlots: true,
        styleIsolation: 'shared'
    },
    properties: {
        gridBorder: {
            type: Boolean,
            value: true
        },
        gridCol: {
            type: Number,
            value: 3,
            observer(col) {
                return col > 5 ? 5 : col;
            }
        }
    },
    data: {
        prefix
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
    methods: {}
});
