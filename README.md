# Configurar ambiente React-dom (Atividades 7 e 8)

## ![#c5f015] bibliotecas e plugins utilizados

- webpack dev server
- webpack source map
- html-webpack-plugin
- babel-loader
- style-loader
- css-loader
- sass-loader e node-sass
- runtime: automatic no babel.config.js
- variável de ambiente: cross-env -D

## ![#1589F0] comandos

### npx babel || npm webpack
use npx para babel e webpack *em qualquer projeto*

### npm run dev
para usar Webpack Dev Server com Source Map neste projeto

## ![#f03c15] Demais anotações

### dev server
Para contornar o erro do dist não atualizar, a configuração do dev server dentro do webpack.config.js foi alterada de:

```diff
- static: path.resolve(__dirname, 'public')
```
Para:

```javascript
devServer: {
        static: './dist/',
        hot: false,
        devMiddleware: {
            publicPath: '/dist/',
            writeToDisk: true,
        },
    },
```