var config = require('../config')
var express = require('express')
var proxyMiddleware = require('http-proxy-middleware')
var opn = require('opn')
var app = express()
var port = process.env.PORT || config.dev.port
var autoOpenBrowser = !!config.dev.autoOpenBrowser
var autoOpenUrl = config.dev.autoOpenUrl
// 处理代理
var proxyTable = config.dev.proxyTable
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = {
      target: options
    }
  }
  app.use(proxyMiddleware(options.filter || context, options))
});

app.use('/', express.static('./dist'))

var uri = 'http://localhost:' + port;
module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }

  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    // opn(uri + '/wbalone/index.html')
    opn(uri + autoOpenUrl);
  }
})
