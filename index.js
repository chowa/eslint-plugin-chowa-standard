module.exports = {
    configs: {
        recommended: {
            parser: '@typescript-eslint/parser',
            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/eslint-recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:react/recommended'
            ],
            plugins: [
                '@typescript-eslint',
                'react'
            ],
            env: {
                node: false,
                browser: true
            },
            parserOptions: {
                ecmaVersion: 2017,
                sourceType: 'module',
                jsx: true
            },
            settings: {
                react: {
                    pragma: 'React',
                    version: 'detect'
                }
            },
            rules: {
                'no-unused-vars': 'error',
                '@typescript-eslint/no-explicit-any': 0,
                'react/prop-types': 0,
                'react/no-find-dom-node': 0,
                '@typescript-eslint/explicit-function-return-type': 'off',
                'quotes': ['error', 'single'],
                'no-console': 'error',
                'no-debugger': 'error',
                'no-alert': 'error',
                'indent': ['error', 4, { 'SwitchCase': 1 }],
                'semi': ['error', 'always'],
                'no-caller': 'error',
                'eqeqeq': ['error', 'always'],
                'linebreak-style': ['error', 'unix'],
                'comma-style': ['error', 'last'],
                'no-var': 'error',
                'keyword-spacing': ['error', { 'before': true }],
                'key-spacing': ['error', { 'beforeColon': false }],
                'no-useless-constructor': 'error',
                'curly': 'error',
                'no-empty-function': 'error',
                'no-extend-native': 'error',
                'no-multi-spaces': 'error',
                'no-multi-str': 'error',
                'no-new-wrappers': 'error',
                'no-proto': 'error',
                'no-sequences': 'error',
                'no-useless-return': 'error',
                'no-useless-call': 'error',
                'radix': ['error', 'always'],
                'array-bracket-spacing': ['error', 'never'],
                'block-spacing': 'error',
                'comma-dangle': ['error', 'never'],
                'computed-property-spacing': ['error', 'never'],
                'eol-last': ['error', 'always'],
                'jsx-quotes': ['error', 'prefer-single'],
                'max-len': ['error', { 'code': 120, 'tabWidth': 4 }],
                'no-bitwise': 'error',
                'no-tabs': 'error',
                'no-trailing-spaces': 'error',
                'object-curly-spacing': ['error', 'always'],
                'padding-line-between-statements': [
                    'error',
                    { blankLine: 'always', prev: 'directive', next: '*' },
                    { blankLine: 'any',    prev: 'directive', next: 'directive' }
                ],
                'arrow-parens': ['error', 'always'],
                'arrow-spacing': 'error',
                'brace-style': ['error', 'stroustrup']
            }
        }
    }
};
