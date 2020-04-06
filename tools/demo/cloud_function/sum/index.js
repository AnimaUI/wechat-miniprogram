// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
    // 默认环境配置，传入字符串形式的环境 ID
    // 可以指定所有服务的默认环境，传入对象可以分别指定各个服务的默认环境
    env: 'animaui-cloud-9cp9e'
});

// 云函数入口函数
exports.main = async(event, context) => {
    const { a, b } = event;
    const { OPENID, APPID } = cloud.getWXContext(); // 这里获取到的 openId 和 appId 是可信的
    const sum = a + b;
    return {
        OPENID,
        APPID,
        sum
    };
};