//index.js
// 获取应用实例
const app = getApp();
Page({
    data: {
        tabBar: app.globalData.tabBar,
        weatherStyle: '',
        snowShow: true,
        rainShow: false,
        rabbitAnimated: '',
        flowerAnimated: ''
    },
    onLoad() {
        wx.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: '#ffffff'
        });
    },
    onShareAppMessage() {},
    onShow() {
        this.weatherAnmation();
    },
    weatherAnmation() {
        this.lightColours = ['#93d5eb', '#add63a', '#c5d63a', '#febe42'];
        this.mediumColours = ['#66bbd8', '#92c938', '#acc52b', '#ff9d25'];
        this.darkColours = ['#4da2bb', '#2a9d5c', '#89a503', '#ff6b2f'];
        this.backgroundColours = ['#cbe9f4', '#daf8ff', '#feec98', '#ffdc8a'];
        this.bushColours = ['#ffffff', '#3ebf6d', '#99b31a', '#fd6d2e'];
        this.cloudColours = ['#ffffff', '#ffffff', '#ffffff', '#eaf9fe'];
        this.seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];
        this.c = 1;
        this.season = this.seasons[this.c];
        //animate all
        this.nF = 0;
        this.animate();
    },
    animate() {
        let weatherInterval;
        clearTimeout(weatherInterval);
        if (this.nF === 2400) {
            this.nF = 0;
        }
        if (++this.nF % 600 === 0) {
            this.updateSeasons();
        }
        // requestAnimationFrame(this.animate);
        weatherInterval = setTimeout(this.animate, 60);
    },
    updateSeasons() {
        this.season = this.seasons[this.c];
        let var_rabbit = '';
        let var_sun = '';
        if (this.season === this.seasons[1]) {
            var_rabbit = '--rabbit: #9E6255';
        }
        // add sun and rabbit if season = summer
        if (this.season === this.seasons[2]) {
            var_rabbit = '--rabbit: #9E6255';
            var_sun = '--sun: #ffb53a';
        } else {
            var_rabbit = '--rabbit: #ffffff';
            var_sun = '--sun: #transparent';
        }
        this.setData({
            weatherStyle: `--bgd-color: ${this.backgroundColours[this.c]};--light: ${this.lightColours[this.c]};--medium: ${this.mediumColours[this.c]};--dark: ${this.darkColours[this.c]};--bush: ${this.bushColours[this.c]};--cloud: ${this.cloudColours[this.c]};${var_rabbit};${var_sun}`,
            // add snow if season = winter
            snowShow: this.season === this.seasons[0],
            // add rain if season = autumn
            rainShow: this.season === this.seasons[3],
            // add rabbit if season = winter
            rabbitAnimated: this.season === this.seasons[0] ||
                this.season === this.seasons[2] ?
                'animated' : '',
            // add rainbow if season = spring
            rainbowAnimated: this.season === this.seasons[1] ? 'animated' : '',
            // add flowers if season = spring
            flowerAnimated: this.season === this.seasons[1] ? 'animated' : ''
        });
        // increment array index
        this.c = (this.c + 1) % this.seasons.length;
    }
});