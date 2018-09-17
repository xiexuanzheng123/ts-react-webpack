/**
 * This server is to run your build locally
 */

const express = require('express');
const path = require('path');
const open = require('open');
const colors = require('colors');
const compression =  require('compression');

const port = 3001;
const host = 'helpcenter.worksmobile.com';
const app = express();

/* eslint-disable no-console */
app.use(compression());
app.use('/dist', express.static('dist'));//静态托管

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    }
    open(`http://${host}:${port}`);
    console.log(colors.green(`prodServer has started...`));
});