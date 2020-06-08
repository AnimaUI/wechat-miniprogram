import { prefix } from '../config';

// const app = getApp();
Component({
    options: {
        styleIsolation: 'apply-shared'
    },
    behaviors: [],
    properties: {
        type: {
            type: String,
            value: 'line'
        },
        mode: {
            type: String,
            value: 'iconDefault'
        },
        list: {
            type: Array,
            value: [
                {
                    icon: `${prefix}-icon-start`,
                    name: '开始'
                },
                {
                    icon: `${prefix}-icon-wait`,
                    name: '等待'
                },
                {
                    icon: `${prefix}-icon-close-fill`,
                    name: '错误'
                },
                {
                    icon: `${prefix}-icon-checked-fill`,
                    name: '结束'
                }
            ]
        },
        activeColor: {
            type: String,
            value: 'var(--green)'
        },
        step: {
            type: Number,
            value: 0
        }
    },
    data: {
        prefix
    },
    methods: {}
});
