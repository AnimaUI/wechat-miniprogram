// 云函数入口文件
const cloud = require('wx-server-sdk');
const got = require('got');
cloud.init();
// cloud.init();

// 云函数入口函数
exports.main = async(event, context) => {
    const response = await got(
        'https://api.github.com/repos/AnimaUI/wechat-miniprogram'
    );
    return {
        getGithubInfo: JSON.parse(response.body)
    };
};;