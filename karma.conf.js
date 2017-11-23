var webpackConfig = require("./webpack.config");

module.exports = function (config) {
    config.set({
        browsers: ["Firefox"], // ["Firefox", "Chrome", "Edge"],
        frameworks: ['mocha', 'sinon-chai', /*"karma-typescript"/**/],
        files: [
            { pattern: "./app/specIndex.js" } //,
        ],
        singleRun: true,
        // karmaTypescriptConfig: {
        //     tsconfig: "./tsconfig.json",
        // },
        preprocessors: {
            "./app/specIndex.js":  [ "webpack", 'sourcemap'/**/ /*"karma-typescript"/**/] //,
        },
        resolve: {
            extensions: ['', '.js', '.ts', '.vue']
        },
        webpack: webpackConfig,
        logLevel: config.LOG_INFO,
        reporters: ['mocha'],
    })
}