// 获取应用实例
const app = getApp();
Page({
    data: {
        imgBaseUrl: app.imgBaseUrl,
        index: 0,
        picker: ['露娜', '芈月', '诸葛亮'],
        multiIndex: [0, 0, 0],
        multiArray: [
            ['打野', '法师'],
            ['荆轲', '兰陵王', '李白'],
            ['迷踪丽影', '节奏热浪', '致命风华', '爱心护理', '原皮']
        ],
        time: '11:30',
        date: '2020-05-19',
        region: ['四川省', '成都市', '成华区']
    },
    onLoad() {},
    onShareAppMessage() {},
    onShow() {},
    pickerChange(e) {
        this.setData({
            index: e.detail.value
        });
    },
    multiChange(e) {
        this.setData({
            multiIndex: e.detail.value
        });
    },
    multiColumnChange(e) {
        let multiObj = {
            multiArray: this.data.multiArray,
            multiIndex: this.data.multiIndex
        };
        multiObj.multiIndex[e.detail.column] = e.detail.value;
        const COLUMN = e.detail.column;
        switch (COLUMN) {
            case 0:
                switch (multiObj.multiIndex[0]) {
                    case 0:
                        multiObj.multiArray[1] = ['荆轲', '兰陵王', '李白'];
                        multiObj.multiArray[2] = [
                            '迷踪丽影',
                            '节奏热浪',
                            '致命风华',
                            '爱心护理',
                            '原皮'
                        ];
                        break;
                    case 1:
                        multiObj.multiArray[1] = ['芈月', '甄姬', '王昭君'];
                        multiObj.multiArray[2] = [
                            '重明',
                            '大秦宣太后',
                            '红桃皇后',
                            '原皮'
                        ];
                        break;
                }
                multiObj.multiIndex[1] = 0;
                multiObj.multiIndex[2] = 0;
                break;
            case 1:
                switch (multiObj.multiIndex[0]) {
                    case 0:
                        switch (multiObj.multiIndex[1]) {
                            case 0:
                                multiObj.multiArray[2] = [
                                    '迷踪丽影',
                                    '节奏热浪',
                                    '致命风华',
                                    '爱心护理',
                                    '原皮'
                                ];
                                break;
                            case 1:
                                multiObj.multiArray[2] = [
                                    '驯魔猎人',
                                    '暗影猎兽者',
                                    '隐忍',
                                    '原皮'
                                ];
                                break;
                            case 2:
                                multiObj.multiArray[2] = [
                                    '敏锐之力',
                                    '凤求凰',
                                    '千年之狐',
                                    '范海辛',
                                    '原皮'
                                ];
                                break;
                        }
                        break;
                    case 1:
                        switch (multiObj.multiIndex[1]) {
                            case 0:
                                multiObj.multiArray[2] = [
                                    '重明',
                                    '大秦宣太后',
                                    '红桃皇后',
                                    '原皮'
                                ];
                                break;
                            case 1:
                                multiObj.multiArray[2] = [
                                    '幽恒',
                                    '游园惊梦',
                                    '花好人间',
                                    '冰雪圆舞曲',
                                    '原皮'
                                ];
                                break;
                            case 2:
                                multiObj.multiArray[2] = [
                                    '幻想奇妙夜',
                                    '凤凰于飞',
                                    '偶像歌手',
                                    '精灵歌手',
                                    '原皮'
                                ];
                                break;
                        }
                        break;
                }
                multiObj.multiIndex[2] = 0;
                break;
        }
        this.setData({
            ...multiObj
        });
    },
    timeChange(e) {
        this.setData({
            time: e.detail.value
        });
    },
    dateChange(e) {
        this.setData({
            date: e.detail.value
        });
    },
    regionChange(e) {
        console.log(e.detail);
        this.setData({
            region: e.detail.value
        });
    }
});
