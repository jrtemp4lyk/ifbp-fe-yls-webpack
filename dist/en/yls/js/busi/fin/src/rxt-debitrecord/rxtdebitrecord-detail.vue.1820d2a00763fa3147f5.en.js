define("yls//busi/fin/src/rxt-debitrecord/rxtdebitrecord-detail.vue", function(require, exports, module) {


  return  module.exports = 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 752);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    var oThis = this;
    return {
      delDialogVisible: false,
      funnode: "BT021",
      nexusKey: "debitRecord",
      //固定写法
      scrollDom: document.getElementsByClassName("view")[0],
      //主键
      pk_debit_record: "",

      // 主模板 baseTemplateRef start
      tplData: {
        DebitRecord_f: {}
      },
      //是否编辑态
      editable: false
      // 主模板 baseTemplateRef end      
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    //返回按钮
    goBack() {
      window.history.back(-1);
    },
    // 主模板 baseTemplateRef 事件处理 start
    clickCancel() {
      this.editable = false;
    },
    // 主模板 baseTemplateRef 事件处理 end
    //加载数据方法
    loadData() {
      this.pk_debit_record = this.$root.$router.currentRoute.params.id;
      //详情页面
      if (this.pk_debit_record && this.pk_debit_record != "") {
        //加载扣款记录信息
        this.loadDeductRecord(this.pk_debit_record);
      } else {
        this.editable = true;
      }
    },
    //加载融信通扣款记录信息
    loadDeductRecord(pk_debit_record) {
      this.$http({
        url: "/yls-busi-web/fin/debitrecord/getById",
        headers: { 'Content-Type': 'application/json' },
        method: "post",
        data: pk_debit_record
      }).then(res => {
        var originalValue = res.data.data;
        this.$refs["baseTemplateRef"].setData("DebitRecord_f", JSON.parse(JSON.stringify(originalValue)));
      }).catch(e => {
        this.$message({
          message: "扣款记录详情获取失败",
          type: "error"
        });
      });
    }
  }
});

/***/ }),

/***/ 551:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 651:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-panel"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "detail-main-container clearfix"
  }, [_c('ifbp-panel-group', {
    attrs: {
      "navbar": false,
      "base-scroll-top": 50,
      "scroll-dom": _vm.scrollDom,
      "base-nav-bar-top": 125
    }
  }, [_c('div', {
    staticClass: "detail-button-header"
  }, [_c('el-button', {
    staticClass: "fr",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.goBack
    }
  }, [_vm._v("返回")])], 1), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "basePanel",
      "title": "融信通扣款记录"
    }
  }, [_c('ifbp-template', {
    ref: "baseTemplateRef",
    attrs: {
      "tplId": "baseTemplate",
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexusKey,
      "show-type": "form",
      "tplData": _vm.tplData,
      "editable": _vm.editable
    }
  }), _vm._v(" "), (_vm.editable) ? _c('div', {
    staticClass: "form-button-div"
  }, [_c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "default"
    },
    on: {
      "click": _vm.clickCancel
    }
  }, [_vm._v("取消")])], 1) : _vm._e()], 1)], 1)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title-container"
  }, [_c('h2', {
    staticClass: "name"
  }, [_vm._v("融信通扣款记录")])])
}]}

/***/ }),

/***/ 752:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(551)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(449),
  /* template */
  __webpack_require__(651),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

/******/ })});;
//# sourceMappingURL=rxtdebitrecord-detail.vue.1820d2a00763fa3147f5.en.js.map