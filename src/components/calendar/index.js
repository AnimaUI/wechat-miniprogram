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
    methods: {
        onClickOverlay() {
            this.close();
        },
        close() {
            this.setData({
                show: false
            });
        }
    }
});
