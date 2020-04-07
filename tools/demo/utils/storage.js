module.exports = {
    setStorageSync: function(k, v, time) {
        var effTime = parseInt(Date.parse(new Date())) + 86400000 * time; //有效时期时间戳
        wx.setStorageSync(k, v ? v : effTime);
    },
    openNotice: function() {
        this.setStorageSync('oldStorTime', '', 7);
    }
};