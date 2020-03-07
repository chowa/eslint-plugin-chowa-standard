<p align="center">
    <img src="http://upload.ouliu.net/i/20200108163318i47lq.png" width="240">
</p>

# eslint-plugin-chowa-standard

[![npm](https://img.shields.io/npm/v/eslint-plugin-chowa-standard.svg)](https://www.npmjs.com/package/eslint-plugin-chowa-standard)
[![npm](https://img.shields.io/npm/dm/eslint-plugin-chowa-standard.svg)](https://www.npmjs.com/package/eslint-plugin-chowa-standard)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](https://opensource.org/licenses/MIT)


Chowa project javascript and typescript syntax standard

## Install

```
npm i eslint-plugin-chowa-standard --save-dev
```

## Usage

If you don't have eslint installed

```
npm i eslint eslint-loader eslint-friendly-formatter  --save-dev
```

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
### eslintrc

```js
{
    extends: [
        'plugin:chowa-standard/recommended'
    ]
}
```


## Configuration

### React

#### Install plugin

```
npm i eslint-plugin-react --save-dev
```

#### eslintrc

```js
{
    extends: [
        'plugin:react/recommended',
        'plugin:chowa-standard/recommended'
    ],
    plugins: [
        'react'
    ],
    env: {
        node: false,
        browser: true,
        es6: true
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
    }
}
```

### Typescript

#### Install plugin and parser

```
npm i @typescript-eslint/eslint-plugin @typescript-eslint/parser --save-dev
```

#### eslintrc

```js
{
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:chowa-standard/recommended'
    ],
    plugins: [
        '@typescript-eslint'
    ],
    env: {
        node: true,
        es6: true
    },
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module'
    }
}
```
