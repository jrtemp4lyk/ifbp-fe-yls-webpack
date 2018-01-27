define("yls//busi/fin/src/bankflow/bankflow-detail.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 728);
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

/***/ 425:
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
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    var oThis = this;
    return {
      delDialogVisible: false,
      //固定写法
      scrollDom: document.getElementsByClassName("view")[0],
      //主键
      pk_bank_flow: "",

      // 银行到账主模板 baseTemplateRef start
      funnode: "BT017",
      nexusKey: "bankflow",
      tplData: {},
      editable: false,
      baseIcons: [{
        icon: "edit",
        click: function () {
          oThis.editable = !oThis.editable;
        }
      }]
      // 银行到账主模板 baseTemplateRef end

    };
  },

  attmData: {},
  created() {
    this.loadData();
  },
  methods: {
    //返回按钮
    goBack() {
      window.history.back(-1);
    },
    clickCancel() {
      this.editable = false;
    },
    clickSave() {
      var data = this.$refs.baseTemplateRef.comp.BankFlow_f;
      var jsonData = JSON.parse(JSON.stringify(data));
      let url = '';
      if (data.pk_bank_flow) {
        url = '/yls-busi-web/fin/bankflow/update';
      } else {
        url = '/yls-busi-web/fin/bankflow/create';
      }
      this.$http({
        url: url,
        method: "post",
        data: jsonData
      }).then(res => {
        this.editable = false;
        var originalValue = res.data.data;
        this.pk_bank_flow = res.data.data.pk_bank_flow;
        this.$refs["baseTemplateRef"].setData("BankFlow_f", JSON.parse(JSON.stringify(originalValue)));
      }).catch(e => {
        this.$message({
          message: "保存失败！",
          type: "error"
        });
      });
    },
    //加载数据方法
    loadData() {
      this.pk_bank_flow = this.$root.$router.currentRoute.params.id;
      //详情页面
      if (this.pk_bank_flow && this.pk_bank_flow != "") {
        //加载银行到账信息
        this.loadfinbankflow(this.pk_bank_flow);
      } else {
        this.editable = true;
      }
    },
    //加载银行到账信息
    loadfinbankflow(pk_bank_flow) {
      this.$http({
        url: "/yls-busi-web/fin/bankflow/getById",
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        data: pk_bank_flow
      }).then(res => {
        let originalValue = res.data.data;
        this.$refs['baseTemplateRef'].setData('BankFlow_f', JSON.parse(JSON.stringify(originalValue)));
      }).catch(e => {
        this.$message({
          message: '银行到账详情获取失败',
          type: 'error'
        });
      });
    },
    attmFormConfirm() {
      if (this.pk_bank_flow != null) {
        var data = this.$refs.BankFlow_f_ref.comp.BankFlow_f;
        data.pk_bank_flow = this.pk_bank_flow;
        var jsonData = JSON.parse(JSON.stringify(data));
        this.$http({
          url: "/yls-busi-web/fin/bankflow/create",
          method: "post",
          data: jsonData
        }).then(res => {
          if (res.data.success === true) {
            this.$message({
              message: "保存成功！",
              type: "success"
            });
            this.$refs.BankFlow_f_ref.comp.formShow = false;
            this.loadAttm(this.pk_bank_flow);
          } else {
            this.$message({
              message: res.data.msg,
              type: "error"
            });
          }
        }).catch(e => {
          this.$message({
            message: "保存失败！",
            type: "error"
          });
        });
      } else {
        this.$message({
          message: "",
          type: "error"
        });
      }
    }
  }
});

/***/ }),

/***/ 545:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 645:
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
      "title": "银行到账",
      "icons": _vm.baseIcons
    }
  }, [_c('ifbp-template', {
    ref: "baseTemplateRef",
    attrs: {
      "tplId": "baseTemplate",
      "show-type": "form",
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexusKey,
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
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.clickSave
    }
  }, [_vm._v("保存")])], 1) : _vm._e()], 1)], 1)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title-container"
  }, [_c('h2', {
    staticClass: "name"
  }, [_vm._v("银行到账")])])
}]}

/***/ }),

/***/ 728:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(545)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(425),
  /* template */
  __webpack_require__(645),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

/******/ })});;
//# sourceMappingURL=bankflow-detail.vue.f6b375ef9dd56ef44c17.en.js.map