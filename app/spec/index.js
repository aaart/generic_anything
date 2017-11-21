import Vue from 'vue'

Vue.config.productionTip = false

// require all test files (files that ends with .spec.js)
const pocContext = require.context('./poc', true, /\.spec$/)
pocContext.keys().forEach(pocContext)

const componentsContext = require.context('./components', true, /\.spec$/)
componentsContext.keys().forEach(componentsContext)

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcContext = require.context('./../src', true, /^\.\/(?!index(\.html)?$)/)
srcContext.keys().forEach(srcContext)