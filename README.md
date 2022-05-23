# Configurar ambiente React-dom (Atividades 7 e 8)
<hr>

![](https://img.shields.io/static/v1?label=&message=Bibliotecas/Plugins&color=green)

- webpack dev server
- webpack source map
- html-webpack-plugin
- babel-loader
- style-loader
- css-loader
- sass-loader e node-sass
- runtime: automatic no babel.config.js
- variável de ambiente: cross-env -D

<hr>

![](https://img.shields.io/static/v1?label=&message=Comandos&color=blue)

* npx ao invés de npm para os comandos:
    * babel
    * webpack

* npm run dev
    * para usar Webpack Dev Server com Source Map neste projeto

* npm run build
    * para deixar o bundle adequado para o ambiente de produção

<hr>

![](https://img.shields.io/static/v1?label=&message=Anotações&color=orange)

* O bundle.js não estava atualizando. então apaguei essa configuração do dev server:

```diff
! static: path.resolve(__dirname, 'public')
```

* Eis a nova configuração:

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
