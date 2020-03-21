//app.js
App({
    onLaunch: function() {
        wx.getSystemInfo({
            success: e => {
                this.globalData.statusBar = e.statusBarHeight;
                let capsule = wx.getMenuButtonBoundingClientRect();
                if (capsule) {
                    this.globalData.custom = capsule;
                    this.globalData.customBar =
                        capsule.bottom + capsule.top - e.statusBarHeight;
                } else {
                    this.globalData.customBar = e.statusBarHeight + 50;
                }
            }
        });
    },
    globalData: {}
});