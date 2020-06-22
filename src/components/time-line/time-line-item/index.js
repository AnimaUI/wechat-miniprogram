import { prefix } from '../../config';

Component({
    options: {
        multipleSlots: true,
        styleIsolation: 'shared'
    },
    behaviors: [],
    properties: {
        color: {
            type: String,
            value: 'var(--blue)'
        },
        custom: {
            type: Boolean,
            value: false
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
        attached() {
            const query = wx.createSelectorQuery();
            query
                .select('slot')
                .context(function (res) {
                    console.log(res);
                })
                .exec();
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
    methods: {}
});
