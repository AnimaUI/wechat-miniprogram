// 获取应用实例
import { prefix } from '../config';

Component({
    options: {
        styleIsolation: 'apply-shared'
    },
    /**
     * 组件的属性列表
     */
    properties: {
        bgColor: {
            type: String,
            value: 'bg-white'
        },
        placeholder: {
            type: String,
            value: '请输入搜索内容'
        }
    },
    /**
     * 组件的初始数据
     */
    data: {
        prefix,
        key: ''
    },
    /**
     * 组件的方法列表
     */
    methods: {
        changeValue(e) {
            const val = e.detail.value;
            this.setData({
                key: val
            });
        },
        clear() {
            this.setData({
                key: ''
            });
            this.triggerEvent('search', '');
        },
        bindSearch() {
            this.triggerEvent('search', this.data.key);
        }
    }
});
