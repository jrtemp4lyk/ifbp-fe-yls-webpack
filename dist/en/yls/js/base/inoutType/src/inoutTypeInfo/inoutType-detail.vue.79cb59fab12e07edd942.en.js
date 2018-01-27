define("yls//base/inoutType/src/inoutTypeInfo/inoutType-detail.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 700);
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

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__publicDataJson_js__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return pubPageSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return pubSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return pubPageMethods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return pagination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ylsBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ylsBusi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ylsSale; });

const pageSizes = __WEBPACK_IMPORTED_MODULE_0__publicDataJson_js__["a" /* default */].page.pageSizes;
const pageSize = (() => {
        let pubScrHeight = window.screen.height;
        let pubSize;
        let storedSize = localStorage.getItem('yls-default-page-size');
        if (storedSize != null && pageSizes.includes(Number(storedSize))) {
                //查找到存储的页显示条数且验证该页面存在页码数组中
                pubSize = Number(storedSize);
        } else {
                if (pubScrHeight < 900) {
                        //通过浏览器可视高度判断页页面显示条数
                        pubSize = __WEBPACK_IMPORTED_MODULE_0__publicDataJson_js__["a" /* default */].page.pageSet.lowSet;
                } else if (pubScrHeight >= 900 && pubScrHeight < 1000) {
                        pubSize = __WEBPACK_IMPORTED_MODULE_0__publicDataJson_js__["a" /* default */].page.pageSet.midSet;
                } else {
                        pubSize = __WEBPACK_IMPORTED_MODULE_0__publicDataJson_js__["a" /* default */].page.pageSet.highSet;
                }
        }
        return pubSize;
})();
function pubPageMethods(requestName = 'request') {
        let mixin = {
                data() {
                        return {
                                pageSize,
                                pageSizes,
                                currentPage: 1,
                                totalElements: 0
                        };
                },
                methods: {
                        handleSizeChange(val) {
                                this.pageSize = val;
                                localStorage.setItem('yls-default-page-size', this.pageSize);
                                this.currentPage = 1;
                                this[requestName](this.currentPage - 1, this.pageSize);
                        },
                        handleCurrentChange(val) {
                                this.currentPage = val;
                                this[requestName](this.currentPage - 1, this.pageSize);
                        },
                        changePage(pageIndex) {
                                this.currentPage = pageIndex;
                                this[requestName](this.currentPage - 1, this.pageSize);
                        }
                }
        };
        return mixin;
}
function pubSizes() {
        return pageSize;
}
const pagination = pubPageMethods;
const pubPageSizes = pageSizes;
const { ylsBase, ylsBusi, ylsSale } = __WEBPACK_IMPORTED_MODULE_0__publicDataJson_js__["a" /* default */].baseUrl;



/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let publicData = {
        page: {
                pageSizes: [10, 20, 30, 40],
                pageSet: {
                        lowSet: 10,
                        midSet: 10,
                        highSet: 20
                }
        },
        baseUrl: {
                ylsBase: '/yls-base-web/',
                ylsBusi: '/yls-busi-web/',
                ylsSale: '/yls-sale-web/'
        }
};
/* harmony default export */ __webpack_exports__["a"] = (publicData);

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__ = __webpack_require__(1);
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
    let oThis = this;
    let validateInoutType = function (rule, value, callback) {
      debugger;
      // 编码非空校验
      if (rule.field == 'inout_code') {
        if (value === '') {
          callback(new Error('编码不能为空! '));
        } else {
          let datam = {
            code: value
          };
          if (oThis.pk_inoutType != '') {
            datam.pk = oThis.pk_inoutType;
          }
          oThis.$http({
            url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["g" /* ylsBase */] + 'inoutType/isUnique',
            hearders: { 'Content-Type': 'application/json' },
            method: 'post',
            data: JSON.parse(JSON.stringify(datam))
          }).then(res => {
            if (res.data.success === true) {
              if (res.data.data === true) {
                callback();
              } else {
                callback(new Error('编码已存在! '));
              }
            } else {
              callback(new Error(res.data.error.errorMessage));
            }
          }).catch(() => {
            callback(new Error("后台服务有误，请联系管理员！"));
          });
        }
      }
      // 名称非空校验
      if (rule.field == 'inout_name') {
        if (value === '') {
          callback(new Error('名称不能为空! '));
        } else {
          let datam = {
            name: value
          };
          if (oThis.pk_inoutType != '') {
            datam.pk = oThis.pk_inoutType;
          }
          oThis.$http({
            url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["g" /* ylsBase */] + 'inoutType/isUnique',
            hearders: { 'Content-Type': 'application/json' },
            method: 'post',
            data: JSON.parse(JSON.stringify(datam))
          }).then(res => {
            if (res.data.success === true) {
              if (res.data.data === true) {
                callback();
              } else {
                callback(new Error('名称已存在! '));
              }
            } else {
              callback(new Error(res.data.error.errorMessage));
            }
          }).catch(() => {
            callback(new Error("后台服务有误，请联系管理员！"));
          });
        }
      }
    };
    return {
      scrollDom: document.getElementsByClassName('view')[0],
      pk_inoutType: '',
      baseIcons: [{
        icon: 'edit',
        click: function () {
          if (oThis.inoutTypeFormEdit === false) {
            oThis.inoutTypeFormEdit = true;
            // 备份数据
            let copyData = oThis.$refs.inoutTypeForm.comp.InoutType;
            oThis.copyForData = JSON.parse(JSON.stringify(copyData));
          } else {
            oThis.inoutTypeCancel();
          }
        }
      }],
      funNode: 'BT002',
      nexusKey: 'Inout_type',
      inoutTypeFormEdit: false,
      inoutTypeFormData: {
        rules: {
          inout_code: [{ validator: validateInoutType, trigger: 'blur' }],
          inout_name: [{ validator: validateInoutType, trigger: 'blur' }]
        }
      }
    };
  },

  mounted() {
    this.request();
  },

  methods: {
    request() {
      // debugger;
      this.pk_inoutType = this.$root.$router.currentRoute.params.id;
      // 如果是编辑请求, 则请求客户基本信息详情
      if (this.pk_inoutType && this.pk_inoutType != '') {
        this.requestInoutTypeInfo();
      } else {
        this.inoutTypeFormEdit = true;
      }
    },

    requestInoutTypeInfo() {

      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["g" /* ylsBase */] + 'inoutType/getById',
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        data: this.pk_inoutType,
        dataType: 'json'
      }).then(res => {
        if (res.data.success === true) {
          let originalValue = res.data.data;
          this.$refs.inoutTypeForm.setData('InoutType', JSON.parse(JSON.stringify(originalValue)));
        } else {
          this.$message({
            message: res.data.error.errorMessage,
            type: 'error'
          });
        }
      }).catch(e => {
        this.$message({
          message: '基本信息详情获取失败',
          type: 'error'
        });
      });
    },

    inoutTypeCancel() {
      this.inoutTypeFormEdit = false;
      this.$refs.inoutTypeForm.setData('InoutType', this.copyForData);
    },

    inoutTypeConfirm() {
      debugger;
      let url;
      let baseUrl = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["g" /* ylsBase */] + 'inoutType/';
      let data = this.$refs.inoutTypeForm.comp.InoutType;
      this.$refs.inoutTypeForm.validate(valid => {
        if (valid) {
          if (this.pk_inoutType) {
            url = baseUrl + 'update';
          } else {
            url = baseUrl + 'create';
          }
          this.$http({
            url: url,
            headers: { 'Content-Type': 'application/json' },
            method: 'post',
            data: JSON.parse(JSON.stringify(data))
          }).then(res => {
            if (res.data.success === true) {
              this.$message({
                message: '操作成功！',
                type: 'success'
              });
              debugger;
              this.originalValue = res.data.data;
              this.$refs.inoutTypeForm.setData('InoutType', JSON.parse(JSON.stringify(this.originalValue)));
              this.inoutTypeFormEdit = false;
            } else {
              this.$message({
                message: res.data.error.errorMessage,
                type: 'error'
              });
            }
          }).catch(() => {
            this.$message({
              message: '更新失败',
              type: 'error'
            });
          });
        } else {
          this.$message('校验未通过! ');
        }
      });
    }

  }

});

/***/ }),

/***/ 521:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 621:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-panel"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "detail-main-container clearfix"
  }, [_c('ifbp-panel-group', {
    attrs: {
      "navbar": true,
      "base-scroll-top": 50,
      "scroll-dom": _vm.scrollDom,
      "base-nav-bar-top": 125
    }
  }, [_c('ifbp-panel', {
    attrs: {
      "id": "basePanel",
      "title": "基本信息",
      "icons": _vm.baseIcons
    }
  }, [_c('ifbp-template', {
    ref: "inoutTypeForm",
    attrs: {
      "tpl-id": "inoutTypeForm-id",
      "funnode": _vm.funNode,
      "nexuskey": _vm.nexusKey,
      "tpl-data": _vm.inoutTypeFormData,
      "show-type": "form",
      "editable": _vm.inoutTypeFormEdit
    }
  }), _vm._v(" "), (_vm.inoutTypeFormEdit) ? _c('div', {
    staticClass: "form-button-div"
  }, [_c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "default"
    },
    on: {
      "click": _vm.inoutTypeCancel
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.inoutTypeConfirm
    }
  }, [_vm._v("保存")])], 1) : _vm._e()], 1)], 1)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title-container"
  }, [_c('h2', {
    staticClass: "name"
  }, [_vm._v("收支信息设置")])])
}]}

/***/ }),

/***/ 700:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(521)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(397),
  /* template */
  __webpack_require__(621),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

/******/ })});;
//# sourceMappingURL=inoutType-detail.vue.79cb59fab12e07edd942.en.js.map