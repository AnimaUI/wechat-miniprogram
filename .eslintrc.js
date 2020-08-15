const isDev = process.argv.indexOf('--develop') >= 0;
const isWatch = process.argv.indexOf('--watch') >= 0;
module.exports = {
    extends: ['airbnb-base', 'plugin:promise/recommended'],
    parserOptions: {
        ecmaVersion: 9,
        ecmaFeatures: {
            jsx: false
        },
        sourceType: 'module'
    },
    env: {
        es6: true,
        node: true,
        jest: true
    },
    plugins: ['import', 'node', 'promise'],
    rules: {
        'no-console': isDev || isWatch ? 'off' : 'error',
        'no-debugger': isDev || isWatch ? 'off' : 'error',
        indent: ['error', 4],
        'tabWidth': 4,
        // 函数名称或function关键字与开始参数之间允许有空格
        'space-before-function-paren': ['error', 'never'],
        // 必须使用 === 或 !==，禁止使用 == 或 !=，与 null 比较时除外
        // @warn 在异步接口返回时不确定参数是数值还是字符串，有时可利用这个类型转换
        'eqeqeq': 'error',
        // 禁止在 if 代码块内出现函数声明
        // @off 在for循环中会经常使用定义var  for(var i = 0; i < 10; ++i)
        'no-inner-declarations': 'error',
        // switch 的 case 内有变量定义的时候，必须使用大括号将 case 内变成一个代码块
        // @off 太严格
        'no-case-declarations': 'error',
        // 禁止使用 !! ~ 等难以理解的运算符
        // @off 有些时候会用到 if (!!abc)   '' + 100   +new Date() 等
        'no-implicit-coercion': 'off',
        // 禁止在全局作用域下定义变量或申明函数
        // @off 太严格
        'no-implicit-globals': 'off',
        // 禁止使用没必要的 {} 作为代码块
        // @off 有时候需要用代码块做逻辑区分
        'no-lone-blocks': 'off',
        // 禁止出现 location.href = 'javascript:void(0)';
        // @off 有时候需要用便捷的 javascript:;
        'no-script-url': 'off',
        // 对象字面量只有一行时，大括号内的首尾必须有空格
        // @off 没有必要限制
        'object-curly-spacing': 'off',
        // 禁止对函数的参数重新赋值
        // @warn 警示即可
        'no-param-reassign': ['error', { 'props': true, 'ignorePropertyModificationsFor': ['options'] }],
        // 文件最后一行必须有一个空行
        // @error 应该在文件末尾保持一个换行
        'eol-last': 'error',
        // 代码块嵌套的深度禁止超过 4 层
        'max-depth': [
            'error',
            4
        ],
        // 禁止函数的循环复杂度超过 10
        // @error 最大值可以宽松点
        'complexity': [
            'error',
            {
                max: 30
            }
        ],
        // 定义过的变量必须使用
        // @warn 多文件互相引用时 偶尔会出现无引用的情况
        'no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'none',
                caughtErrors: 'none',
                ignoreRestSiblings: true
            }
        ],
        // 在ES5中需使用var
        // @off 没有必要限制
        'no-var': 'off',
        // 禁止使用未定义的变量  建议将相关变量在上方 globals 配置项中配置
        // @warn 警示即可
        'no-undef': 'error',
        // 函数的参数禁止超过3个
        // @warn 警示即可
        'max-params': ['warn', 3],
        // 回调函数嵌套禁止超过 3 层
        // @warn 警示即可
        'max-nested-callbacks': ['warn', 3],
        // 循环内的函数中不能出现循环体条件语句中定义的变量
        // @warn 警示即可
        'no-loop-func': 'warn',
        // Promise 的 reject 中必须传入 Error 对象
        // @off 不需要限制
        'prefer-promise-reject-errors': 'off',
        // 变量声明时尽量使用一个var声明连续的多个
        // @warn 警示即可
        'one-var': [
            'off',
            'consecutive'
        ],
        // 变量申明必须每行一个
        // @error 赋值时保证处于一行即可
        'one-var-declaration-per-line': [
            'error',
            'initializations'
        ],
        // 禁止使用alert confirm prompt
        'no-alert': 'error',
        // 禁止使用数组构造器
        'no-array-constructor': 'error',
        // 禁止使用按位运算符
        'no-bitwise': 'error',
        // 禁止修改const声明的变量
        'no-const-assign': 'error',
        // 禁止在条件中使用常量表达式 if(true) if(1)
        'no-constant-condition': 'error',
        // 在创建对象字面量时不允许键重复 {a:1,a:1}
        'no-dupe-keys': 'error',
        // 函数参数不能重复
        'no-dupe-args': 'error',
        // switch中的case标签不能重复
        'no-duplicate-case': 'error',
        // 如果if语句里面有return,后面不能跟else语句
        'no-else-return': 'error',
        // 块语句中的内容不能为空
        'no-empty': 'error',
        // 禁止使用eval
        'no-eval': 'error',
        // 禁止非必要的括号
        'no-extra-parens': 'error',
        // 禁止多余的冒号
        'no-extra-semi': 'error',
        // 禁止重复的函数声明
        'no-func-assign': 'error',
        // 不能有不规则的空格
        'no-irregular-whitespace': 'error',
        // 禁止不必要的嵌套块
        'no-lone-blocks': 'error',
        // 禁止else语句内只有if语句
        'no-lonely-if': 'error',
        // 禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
        'no-loop-func': 'error',
        // 禁止混用tab和空格
        'no-mixed-spaces-and-tabs': 'error',
        // 不能用多余的空格
        'no-multi-spaces': 'error',
        // 空行最多不能超过2行
        'no-multiple-empty-lines': ['error', { "max": 3 }],
        // 禁止使用嵌套的三目运算
        'no-nested-ternary': 'error',
        // 禁止在使用new构造一个实例后不赋值
        'no-new': 'error',
        // 禁止使用new Function
        'no-new-func': 'error',
        // 禁止使用new Object()
        'no-new-object': 'error',
        // 禁止使用new创建包装实例，new String new Boolean new Number
        'no-new-wrappers': 'error',
        // 不能调用内置的全局对象，比如Math() JSON()
        'no-obj-calls': 'error',
        // 禁止使用八进制数字
        'no-octal': 'error',
        // 禁止使用__proto__属性
        'no-proto': 'error',
        // 禁止重复声明变量
        'no-redeclare': 'error',
        // return 语句中不能有赋值表达式
        'no-return-assign': 'error',
        // 不能比较自身
        'no-self-compare': 'error',
        // 禁止使用逗号运算符
        'no-sequences': 'error',
        // 外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
        'no-shadow': 'off',
        // 函数调用时 函数名与()之间不能有空格
        'no-spaced-func': 'error',
        // 禁止稀疏数组， [1,,2]
        'no-sparse-arrays': 'error',
        // 一行结束后面不要有空格
        'no-trailing-spaces': 'error',
        // 变量初始化时不能直接给它赋值为undefined
        'no-undef-init': 'error',
        // 禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
        'no-unneeded-ternary': 'error',
        // 未定义前不能使用
        'no-use-before-define': 'error',
        // 禁止不必要的call和apply
        'no-useless-call': 'error',
        // 禁用void操作符
        'no-void': 'error',
        // 禁用var，用let和const代替
        'no-var': 'error',
        // 禁用with
        'no-with': 'error',
        // 是否允许非空数组里面有多余的空格
        'array-bracket-spacing': 'error',
        // 大括号风格
        'brace-style': ['error', '1tbs'],
        // 避免多次调用回调什么的
        'callback-return': 'off',
        // 强制驼峰法命名
        'camelcase': 'error',
        // this别名
        'consistent-this': ['error', 'me'],
        // 必须使用 if(){} 中的{}
        'curly': ['error', 'all'],
        // switch语句最后必须有default
        'default-case': 'error',
        // 变量名长度
        'id-length': ['error', { max: 30, min: 1 }],
        // 对象字面量中冒号的前后空格
        'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
        // 函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
        'new-cap': 'error',
        // 换行时运算符在行尾还是行首
        'operator-linebreak': ['error', 'before'],
        // 引号类型 `` "" ''
        'quotes': ['error', 'single'],
        // parseInt必须指定第二个参数
        'radix': 'error',
        // 命名检测
        'id-match': 'error',
        // 语句强制分号结尾
        'semi': ['error', 'always'],
        // 分号前后空格
        'semi-spacing': ['error', { 'before': false, 'after': true }],
        // 一元运算符的前/后要不要加空格
        'space-unary-ops': ['error', { 'words': true, 'nonwords': false }],
        // 禁止比较时使用NaN，只能用isNaN()
        'use-isnan': 'error',
        // 必须使用合法的typeof的值
        'valid-typeof': 'error',
        // json 后不允许有逗号
        'comma-dangle': ['error', 'never'],
        'prefer-destructuring': ['error', {
            'array': false,
            'object': false
        }, {
            'enforceForRenamedProperties': false
        }],
        // 允许 ++ --
        'no-plusplus': [
            'error',
            {
                'allowForLoopAfterthoughts': true
            }
        ],
        'no-unused-expressions': [
            'error',
            {
                allowShortCircuit: true,
                allowTernary: true,
                allowTaggedTemplates: true
            }
        ],
        // 导出模块一个是默认是否需要default
        'import/prefer-default-export': 'off',
        'no-param-reassign': ['error', { 'props': false }],
        'arrow-parens': ['error', 'as-needed']
    },
    globals: {
        window: true,
        document: true,
        App: true,
        Page: true,
        Component: true,
        Behavior: true,
        wx: true,
        getCurrentPages: true,
        getApp: true
    }
};
