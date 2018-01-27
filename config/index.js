// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var pkg = require('../package.json')
var pkgName = pkg.name

//demo服务
var baseHost = 'http://localhost:8082';

//应用平台服务地址
var proxyAPHost = baseHost;


module.exports = {
  build: {
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: pkgName,
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    assetsSubDirectory: pkgName,
    port: 8083,
    autoOpenBrowser: true,
    // autoOpenUrl: '/wbalone/devlogin.html',
    // autoLogin:false,
    autoOpenUrl: '/ap/index.html',
    autoLogin: true,
    loginname: 'admin',
    pwd: '123456',
    proxyTable: {
        '/ifbp-app-attach/**': { target: proxyAPHost, secure: false },
        '/ifbp-print/**': {target: proxyAPHost,secure: false},
        '/ifbp-msg/**': {target: proxyAPHost,secure: false},
        '/ifbp-bpm-service/**': {target: proxyAPHost,secure: false},
        '/fin-ifbp-base/**':{target: proxyAPHost,secure: false},
        '/wbalone/**': {target:  proxyAPHost,secure: false,},
        '/ap/**': {target:  proxyAPHost,secure: false,},
        '/integration/**': {target: proxyAPHost,secure: false,},
        '/uui/**': {target: proxyAPHost,secure: false,},
        '/busilog': {target: proxyAPHost,secure: false,},
        '/securitylog': {target: proxyAPHost,secure: false,},
        '/ifbp-eiap-bpm-service/**': {target: proxyAPHost,secure: false,},
        '/billcode/**': {target: proxyAPHost,secure: false,},
        '/iuap-saas-message-center/**': {target: proxyAPHost,secure: false,},
        '/iuap-saas-dispatch-service': {target: proxyAPHost,secure: false,},
        '/ifbp-app-bd/**': {target: proxyAPHost,secure: false,},
        '/ifbp-app-sm/**': {target: proxyAPHost,secure: false,},
        '/oss/**': {target: proxyAPHost,secure: false,},
        '/ifbp-bop-web/**': {target: proxyAPHost,secure: false,},
        '/user/getBopUserAccount': {target: proxyAPHost,secure: false,},
        '/ifbp-uc-web/token/**': {target: proxyAPHost,secure: false},
        '/ifbp-app-sm-defdoc-web/**': { target: proxyAPHost, secure: false },
        '/uitemplate_web/**': { target: proxyAPHost, secure: false},
        '/ifbp-app-sm-infoset-web/**': { target: proxyAPHost, secure: false },
        '/imfbp-ins-web/**': { target: proxyAPHost, secure: false },
        '/ifbp-app-sm-qt-web/**': { target: proxyAPHost, secure: false },
        '/yls-busi-web/**': { target: 'http://ylstest.imfbp.com', secure: false },
        
    },
    cssSourceMap: false
  }
}
