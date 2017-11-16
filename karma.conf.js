var webpackConfig = require("./webpack.config");

module.exports = function (config) {
    config.set({
    // to run in additional browsers:
    // 1. install corresponding karma launcher
    //    http://karma-runner.github.io/0.13/config/browsers.html
    // 2. add it to the `browsers` array below.
        browsers: ["jsdom"], // ["Firefox", "Chrome", "Edge"],
        //exclude: ['./node_modules/**', './website-dev/**'],
        frameworks: ['mocha', 'sinon-chai', "karma-typescript"],
        files: [
            { pattern: "./app/**/*.ts" },
            { pattern: "./spec/**/*.spec.ts" }
        ],
        singleRun: true,
        karmaTypescriptConfig: {
            compilerOptions: {
                module: "commonjs",
                "noEmitHelpers": true
            },
            bundlerOptions: {
                transforms: [
                    require("karma-typescript-es6-transform")()
                ]
            },
            tsconfig: "./tsconfig.json",
        },
        preprocessors: {
            "./app/**/*.ts": ["karma-typescript"],
            "./spec/**/*.spec.ts": ["karma-typescript"]
        },
        resolve: {
            extensions: ['', '.js', '.ts']
        },         
        webpackMiddleware: {
            noInfo: true
        },
        webpack: {
            module: webpackConfig.module,
            resolve: webpackConfig.resolve
        },
        logLevel: config.LOG_INFO,
        reporters: ['mocha'],
    })
}