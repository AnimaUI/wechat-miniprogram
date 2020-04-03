/**
 * @file:      组件 entery
 * @author:    花夏(huaxia@animaui.com)
 * @version:   V1.0.0
 * @date:      2020-03-21 11:35:40
 */
const glob = require('glob');
// module.exports = ['components/custom-bar/index', 'components/tab-bar/index'];
const getEntry = () => {
    const globPath = 'src/components/**/*.js'; // 匹配src目录下的所有文件夹中的html文件
    // (\/|\\\\) 这种写法是为了兼容 windows和 mac系统目录路径的不同写法
    /* eslint-disable no-useless-escape */
    const pathDir = 'src(/|\\\\)(.*?)(/|\\\\)'; // 路径为src目录下的所有文件夹
    const files = glob.sync(globPath);
    const entries = [];
    const reg = new RegExp('^' + pathDir);
    for (let i = 0; i < files.length; i++) {
        entries.push('components/' + files[i].replace(reg, '$`').replace('.js', ''));
    }
    return entries;
};
module.exports = getEntry();