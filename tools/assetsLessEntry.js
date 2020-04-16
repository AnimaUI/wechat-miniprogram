/**
 * @file:      assetsLess entery
 * @author:    花夏(huaxia@animaui.com)
 * @version:   V1.0.0
 * @date:      2020-04-16 10:39:57
 */
const glob = require('glob');
// module.exports = ['components/custom-bar/index', 'components/tab-bar/index'];
const getEntry = () => {
    // 匹配src目录下的所有文件夹中的less文件
    const globPath = 'src/assets/style/**/*.less';
    // (\/|\\\\) 这种写法是为了兼容 windows和 mac系统目录路径的不同写法
    /* eslint-disable no-useless-escape */
    const pathDir = 'src(/|\\\\)(.*?)(/|\\\\)'; // 路径为src目录下的所有文件夹
    const files = glob.sync(globPath);
    const entries = [];
    const reg = new RegExp('^' + pathDir);
    for (let i = 0; i < files.length; i++) {
        entries.push(
            'assets/' + files[i].replace(reg, '$`')
        );
    }
    return entries;
};
module.exports = getEntry();