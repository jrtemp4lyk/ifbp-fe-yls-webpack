var fs = require('fs');
var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

var basePath = __dirname + '/../src/apps/pages';
var entryObj = {};
var parseFile = function (curPath, name) {
  var filePath = path.join(basePath, curPath, name);
  var state = fs.statSync(filePath);
  if (!state.isFile()) {
    var dir = fs.readdirSync(filePath);
    dir.forEach((index) => {
      var p = (curPath ? curPath : '') + (name ? '/' + name : '');
      parseFile(p, index);
    });
  } else if (name.indexOf('.vue') > 0) {
    entryObj[curPath  + '/' + name] = './src/apps/pages' + curPath + '/' + name;
  }
}
parseFile('', '');

console.log(entryObj);
module.exports = {
  entry: entryObj,
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: '/ap/',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: [
      resolve('src'),
      resolve('node_modules')
    ],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'src': resolve('src'),
      'assets': resolve('src/assets'),
      'components': resolve('src/components'),
      // 'jquery': path.join(__dirname, 'src/login/cas/js/jquery.min.js'),
      'jquery.cookie': path.join(__dirname, 'src/login/cas/js/jquery.cookie.js'),
      'cas': path.join(__dirname, 'src/login/cas/js/cas.js'),
      'u': path.join(__dirname, 'src/login/cas/js/u.js'),

    }
  },
  externals: [{
      "src/login/cas/js/jquery.min.js": '$'
    },
    {
      "src/login/cas/js/jquery.cookie.js": '$.cookie'
    },
    {
      "src/login/cas/js/cas.js'": 'cas'
    },
    {
      "src/login/cas/js/u.js'": 'u'
    },
    // {"vue": 'Vue'},
    // {"vue-router": "VueRouter"},
    // {"vuex": "Vuex"},
  ],
  module: {
    rules: [
      // {
      //   test: /\.(js|vue)$/,
      //   loader: 'eslint-loader',
      //   enforce: "pre",
      //   include: [resolve('src'), resolve('test')],
      //   options: {
      //     formatter: require('eslint-friendly-formatter')
      //   }
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/vue-echarts')],
        exclude: /node_modules(?![\\/]vue-echarts[\\/])/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 3000,
          name: utils.assetsPath('img/[name].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf|woff)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, "src/login")],
        //loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!cssnext-loader")
        //loader:  ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
        loader: "style!css?sourceMap"
      }
    ]
  }
}