const srcContext = require.context('./src', true, /^\.\/(?!index(\.html)?$)/);
srcContext.keys().forEach(srcContext);

var specContext;

specContext = require.context('./spec/inversify', true, /\.spec$/)
specContext.keys().forEach(specContext)

specContext = require.context('./spec/poc', true, /\.spec$/)
specContext.keys().forEach(specContext)

specContext = require.context('./spec/scopes/navigation/components', true, /\.spec$/)
specContext.keys().forEach(specContext)


