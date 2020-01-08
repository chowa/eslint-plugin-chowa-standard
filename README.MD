# eslint-plugin-chowa-standard

[![npm](https://img.shields.io/npm/v/eslint-plugin-chowa-standard.svg)](https://www.npmjs.com/package/eslint-plugin-chowa-standard)
[![npm](https://img.shields.io/npm/dm/eslint-plugin-chowa-standard.svg)](https://www.npmjs.com/package/eslint-plugin-chowa-standard)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](https://opensource.org/licenses/MIT)


> Chowa Js & Ts 统一编码规则

## 安装

> 无须单独安装 `eslint`、`eslint-loader`、`eslint-friendly-formatter`

```
npm i eslint-plugin-chowa-standard --save-dev
```

## 使用

### webpack loader

```
module.exports = {
    module: {
        rules: [{
            test: /\.(j|t)sx?$/,
            enforce: 'pre',
            use: [
                {
                    loader: 'eslint-loader',
                    options: {
                        emitWarning: true,
                        emitError: true,
                        formatter: require('eslint-friendly-formatter')
                    }
                }
            ]
        }]
    }
}

```
## eslintrc

```js
{
    extends: [
        'plugin:ege-standard/recommended'
    ]
}
```
