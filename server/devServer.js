/**
 * This server is to run your dev locally
 */

const path = require('path');
const colors = require('colors');
const open = require('open');
const express = require('express');
const webpack = require('webpack');
const httpProxy = require('http-proxy');
const webpackDevConfig = require('../webpack.config.dev');
const webpackDevMiddleware = require('webpack-dev-middleware');

const port = 3000;
const app = express();
const compiler = webpack(webpackDevConfig);
const apiProxy = httpProxy.createProxyServer();

let webpackDevMiddlewareInstance = webpackDevMiddleware(compiler, {
    publicPath: webpackDevConfig.output.publicPath,
    stats: {
        colors: true
    },
    historyApiFallback: true
});

app.use(webpackDevMiddlewareInstance);
app.use(require('webpack-hot-middleware')(compiler));
app.use('/api/*', (req, res) => {
    let proxiedUrl = req.baseUrl;
    const url = require('url');
    let url_parts = url.parse(req.url, true);
    if (url_parts.search !== null) {
        proxiedUrl += url_parts.search;
    }
    req.url = proxiedUrl;

    apiProxy.web(req, res, {
        target: {
            host: 'localhost',
            port: 80
        }
    });
});
app.get('*', function (req, res, next) {
    let filename = path.join(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(filename, function(err, result) {
        if (err) {
            return next(err);
        }
        res.set('content-type','text/html');
        res.send(result);
        res.end();
    });
});

// app.use('*', function(req, res, next) {
//     let pathExp = /((?:\/\w+)+)(\.\w+)?\??/;
//     pathExp.exec(req.originalUrl.replace(/\/dist/, ''))
//     let filepath = RegExp.$1 + ( RegExp.$2 ? RegExp.$2 : '.html');
//     try {
//         res.sendFile(path.join(__dirname, '../dist', filepath));
//     } catch(err) {
//         res.end('not found');
//     }
// }); 
/* eslint-disable no-console */
app.listen(port, function(err) {
    if(err) {
        console.log(err);
    } else {
        webpackDevMiddlewareInstance.waitUntilValid(() => {
            open(`http://localhost:${port}`);
            
            console.log(colors.green(`Server has started !`));
        });
    }
});

