const _ = require('../utils');

Component({
    properties: {
        prop: {
            type: String,
            value: '六牛流牛油'
        }
    },
    data: {
        flag: false
    },
    lifetimes: {
        attached() {
            wx.getSystemInfo({
                success: () => {
                    this.setData({
                        flag: _.getFlag()
                    });
                }
            });
        }
    }
});
