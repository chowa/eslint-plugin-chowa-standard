<p align="center">
    <img src="http://upload.ouliu.net/i/20200108163318i47lq.png" width="240">
</p>

# eslint-plugin-chowa-standard

[![npm](https://img.shields.io/npm/v/eslint-plugin-chowa-standard.svg)](https://www.npmjs.com/package/eslint-plugin-chowa-standard)
[![npm](https://img.shields.io/npm/dm/eslint-plugin-chowa-standard.svg)](https://www.npmjs.com/package/eslint-plugin-chowa-standard)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](https://opensource.org/licenses/MIT)


Chowa project javascript and typescript syntax standard

## Install

High version npm can be installed without `eslint`、`eslint-loader`、`eslint-friendly-formatter`

```
npm i eslint-plugin-chowa-standard --save-dev
```

## Usage

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
        'plugin:chowa-standard/recommended'
    ]
}
```
