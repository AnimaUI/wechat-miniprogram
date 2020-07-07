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
        indent: ['error', 4],
        'no-console': 'off',
        'arrow-parens': 'off',
        'comma-dangle': ['error', 'only-multiline'],
        'eol-last': ['error', 'always'],
        complexity: ['error', 10],
        'func-names': 'off',
        'global-require': 'off',
        'handle-callback-err': ['error', '^(err|error)$'],
        'import/no-unresolved': [
            'error',
            {
                caseSensitive: true,
                commonjs: true,
                ignore: ['^[^.]']
            }
        ],
        'import/prefer-default-export': 'off',
        'linebreak-style': 'off',
        'no-catch-shadow': 'error',
        'no-continue': 'off',
        'no-div-regex': 'warn',
        'no-else-return': 'off',
        'no-param-reassign': 'off',
        'no-plusplus': 'off',
        'no-shadow': 'off',
        'no-multi-assign': 'off',
        'no-underscore-dangle': 'off',
        'node/no-deprecated-api': 'error',
        'node/process-exit-as-throw': 'error',
        'object-curly-spacing': ['error', 'never'],
        'operator-linebreak': [
            'error',
            'after',
            {
                overrides: {
                    ':': 'before',
                    '?': 'before'
                }
            }
        ],
        'prefer-arrow-callback': 'off',
        'prefer-destructuring': 'off',
        'prefer-template': 'off',
        'quote-props': [
            1,
            'as-needed',
            {
                unnecessary: true
            }
        ],
        semi: ['error', 'always'],
        'no-await-in-loop': 'off',
        'no-restricted-syntax': 'off',
        'promise/always-return': 'off',
        'object-curly-spacing': ['error', 'always'],
        'object-shorthand': ['error', 'always'],
        'no-lonely-if': 'off',
        'consistent-return': 'off',
        'no-unused-expressions': ['error', { allowShortCircuit: true }],
        'max-len': ['error', { code: 300 }],
        'no-debugger': isDev || isWatch ? 'off' : 'error'
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
