import { prefix } from '../config';

// const app = getApp();
Component({
    options: {
        styleIsolation: 'apply-shared',
        multipleSlots: true
    },
    behaviors: [],
    properties: {
        border: {
            type: Boolean,
            value: true
        },
        hideTitle: {
            type: Boolean,
            value: false
        }
    },
    data: {
        prefix
    },
    methods: {}
});
