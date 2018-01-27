var HtmlWebpackPlugin = require('html-webpack-plugin')

process.env.NODE_ENV = 'production'
var fs = require('fs')
var path = require('path')
var ora = require('ora')
var rm = require('rimraf')
var cpr = require('cpr')
var cpr = require('cpr').cpr
var path = require('path')
var chalk = require('chalk')
var execSync = require('child_process').execSync
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')
var crypto = require('crypto')
var I18nPlugin = require("i18n-webpack-plugin")
var languages = require('./languages.js')
var utils = require('./utils')
var language = process.argv.splice(2);

var pkg = require('../package.json')
var pkgName = pkg.name


var spinner = ora('building for production...')
spinner.start();

var assetsRoot = config.build.assetsRoot;
if (language.length > 0) {
  assetsRoot = config.build.assetsRoot + '/' + language;
}

rm(path.resolve(__dirname, assetsRoot), err => {
  if (err) {
    throw err
    spinner.stop()
    process.exit()
  }

  cpr(path.resolve(__dirname, '../src/apps/assets/'), path.resolve(__dirname, assetsRoot + '/' + pkgName + '/assets/'), {}, err => {
    if (err) {
      throw err
      spinner.stop()
      process.exit()
    }
    if (language.length > 0) {
      webpackConfig.output = {
        path: assetsRoot,
        filename: utils.assetsPath('js/[name].[chunkhash].' + language + '.js'),
        chunkFilename: utils.assetsPath('js/[name].[chunkhash].' + language + '.js')
      }
      webpackConfig.plugins.push(new I18nPlugin(languages[language]));
    } else {}
    webpack(webpackConfig, function (err, stats) {

      var buildConfig = function (lang) {
        var srcBasePath = __dirname + '/../src/apps/pages';
        var distBasePath = __dirname + '/../dist/' + pkgName
        if (lang) {
          distBasePath = __dirname + '/../dist/' + lang + '/' + pkgName
        }

        var relObj = {} // 用于产出config.js
        relArr = relObj[pkgName] = {}
        if (lang) {
          relArr['curLang'] = lang;
        }
        relArr['routers'] = []

        var parsePagesFile = function (curPath, name) {
          var filePath = path.join(srcBasePath, curPath, name)
          var state = fs.statSync(filePath)
          if (state.isDirectory()) {
            var dir = fs.readdirSync(filePath)
            if (name.length > 0) {
              curPath = curPath + '/' + name
            }
            dir.forEach((index) => {
              if (index != 'src')
                parsePagesFile(curPath, index)
            })
          } else if (name === 'index.js') {
            // console.log('get index.js in ' + curPath)
            buildPagesFile(curPath)
          }
        }

        var buildPagesFile = function (curPath) {
          // 记录路由与js css的对应关系
          var routerFile = require(path.join(srcBasePath, curPath, 'index.js'))
          for (var i in routerFile.routes) {
            var oldComponent = routerFile.routes[i]['component'];
            if (oldComponent.indexOf('.') === 0) {
              oldComponent = oldComponent.substring(1);
            }
            routerFile.routes[i]['component'] = curPath.slice(1) + oldComponent;
            routerFile.routes[i]['pkgName'] = pkgName

            routerFile.routes[i]['js'] = getDistFileName(curPath.slice(1) + oldComponent, 'js');
            routerFile.routes[i]['css'] = getDistFileName(curPath.slice(1) + oldComponent, 'css');
          }
          relArr['routers'] = relArr['routers'].concat(routerFile.routes)
        }

        var getDistFileName = function (filename, type) {
          var lastIndex = filename.lastIndexOf('/');
          var dir = filename.substring(0, lastIndex);
          var file = filename.substring(lastIndex + 1);
          var rt = '';

          var distDir = path.join(__dirname + '/../dist/' + pkgName + '/' + type, dir);
          if (lang) {
            distDir = path.join(__dirname + '/../dist/' + lang + '/' + pkgName + '/' + type, dir);
          }
          try {
            var distState = fs.statSync(distDir)
            if (distState.isDirectory()) {
              var distDirs = fs.readdirSync(distDir)
              distDirs.forEach((index) => {
                if (index.indexOf(file) === 0 && index.indexOf('.map') < 0) {
                  rt = pkgName + '/' + type + '/' + dir + '/' + index;
                }
              })
            }
          } catch (e) {

          }

          return rt
        }

        parsePagesFile('', '')

        // 处理common
        var srcCommonBasePath = __dirname + '/../src/apps/common';
        var distCommonBasePath = __dirname + '/../dist/' + pkgName + '/common';
        if (lang) {
          distCommonBasePath = __dirname + '/../dist/' + lang + '/' + pkgName + '/common';
        }
        fs.mkdirSync(path.resolve(distCommonBasePath));
        var distCommonBasePathCss = distCommonBasePath + '/index.css';
        fs.writeFileSync(distCommonBasePathCss, '');
        var parseCommonFile = function (curPath, name) {
          var filePath = path.join(srcCommonBasePath, curPath, name)
          var state = fs.statSync(filePath)
          if (state.isDirectory()) {
            var dir = fs.readdirSync(filePath)
            if (name.length > 0) {
              curPath = curPath + '/' + name
            }
            dir.forEach((index) => {
              parseCommonFile(curPath, index)
            })
          } else if (endsWith(name, '.css')) {
            var c = fs.readFileSync(distCommonBasePathCss);
            var b = fs.readFileSync(filePath);
            fs.writeFileSync(distCommonBasePathCss, b.toString() + ' \n ' + c.toString());
          }
        }

        var md5Fun = function (basePath, name, type) {
          var b = fs.readFileSync(path.join(basePath, name + '.' + type))
          var md5 = crypto.createHash('md5')
          var md5Str = md5.update(b.toString()).digest('hex')
          var md5FileName = name + '.' + md5Str + '.' + type
          fs.writeFileSync(path.join(basePath, md5FileName), b.toString())
          return md5FileName
        }
        var endsWith = function (str, endStr) {
          return str.slice(-endStr.length) == endStr
        }
        parseCommonFile('', '');
        var md5cssFileName = md5Fun(distCommonBasePath, '/index', 'css')
        relArr['common'] = {}
        relArr['common']['css'] = md5cssFileName.slice(1)

        fs.writeFileSync(distBasePath + '/config.js', JSON.stringify(relObj));

        console.log('Build completed')
      }

      if (language.length > 0) {
        buildConfig(language[0]);
      } else {
        buildConfig();
      }

      spinner.stop()
      process.exit()
    })
  })
});