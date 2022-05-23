# Configurar ambiente React-dom (Atividades 7 e 8)
<hr>

![](https://img.shields.io/static/v1?label=&message=Bibliotecas/Plugins&color=green)

- webpack dev server
- webpack source map
- html-webpack-plugin
- react-refresh
- types/react-dom e types/react
- javascript e babel-typescript
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
    * typescript (tsc)

* npm run dev
    * para usar Webpack Dev Server com Source Map neste projeto

* npm run build
    * para deixar o bundle adequado para o ambiente de produção

<hr>

![](https://img.shields.io/static/v1?label=&message=Anotações&color=orange)

* para transformar JSX para TSX:
    * crie interfaces
    * defina os tipos das 'variáveis menores' em questão
    * se necessário, defina a 'variável maior' como do tipo da interface

* O bundle.js não estava atualizando. então apaguei essa configuração do dev server:

```diff
! static: path.resolve(__dirname, 'public')
```

* E copiei essa do StackOverflow:

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

* Porém para usar o react-refresh, tive que mudar para:

```javascript
devServer: {
        static: path.resolve(__dirname, 'public'),
        hot: true
    },
```
