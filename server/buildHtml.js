/*eslint-disable no-console */
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.prod');
const colors = require('colors');

//process.env.NODE_ENV = 'production';
console.log(colors.blue(`Generating minified bundle for production file...`));

webpack(webpackConfig).run((err, stats) => {
    if (err) {
        console.log(err.bold.red);
        return 1;
    }

    const jsonStats = stats.toJson();
    if (jsonStats.hasErrors) {
        return jsonStats.erros.map(error => console.log(error.red));
    }
    if (jsonStats.hasWarning) {
        console.log(colors.bold.red(`Webpack generated the following warnings: `));
        jsonStats.warnings.map((warning) => {
            console.log(colors.yellow(warning));
        });
    }
    console.log(`Webpack stats: ${stats}`);
    console.log(colors.green(`Your app has been compiled in production mode and written to /dist`));

    return 0;
});