define("yls//busi/iface/src/fin/iface-prevouchercard.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 760);
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

/***/ 457:
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
  mixins: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["b" /* pagination */])('request')], //分页
  data() {
    return {
      curServiceConfig: {},
      formEditable: false,
      //删除对话框
      delDialogVisible: false,
      //待删除数据id
      delId: ""
    };
  },
  mounted() {
    this.requestVoucherEntity();
  },
  methods: {
    goBack() {
      window.history.back(-1);
    },
    // 添加按钮
    addInfo() {
      // 新增清空表单数据
      this.$refs.valuemapForm.setData('InterfaceConfig', {});
      this.$refs.valuemapForm.formShow = true;
      this.$refs.valuemapForm.getTableComp().closeExpandRow();
    },
    //删除操作
    tableDeleteClick(scope) {
      this.delId = scope.row.pk_iface_name;
      this.delDialogVisible = true;
    },
    //删除确定
    deleteConfirmClick() {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "/iface/serviceconfig/deleteById",
        headers: { "Content-Type": "application/json" },
        method: "post",
        dataType: "json",
        data: this.delId
      }).then(res => {
        if (res.data.success === true) {
          this.$message({
            message: "删除成功",
            type: "success"
          });
          this.delDialogVisible = false;
          this.request();
        } else {
          this.$message({
            message: res.data.msg,
            type: "error"
          });
        }
      }).catch(e => {
        this.$message({
          message: "信息删除失败！",
          type: "error"
        });
      });
    },
    // 查询凭证主表实体
    requestVoucherEntity() {
      var url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "iface/serviceconfig/getById";
      this.$http({
        url: url,
        headers: { "Content-Type": "application/json" },
        method: "post",
        data: this.$root.$router.currentRoute.params.configid,
        dataType: "json"
      }).then(res => {
        console.log(JSON.stringify(res));
        var originalValue = res.data.data;
        this.$refs.serviceconfigForm.setData('InterfaceConfig', originalValue);
      }).catch(e => {
        console.log(e);
        this.$message({
          message: "获取接口信息",
          type: "error"
        });
      });
    },
    //后台请求
    request() {
      var url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "iface/servicelog/page";
      var data = {
        orderList: [{
          direction: "desc",
          property: "ts"
        }],
        pageNum: this.currentPage - 1,
        pageSize: this.pageSize,
        searchParams: {
          searchMap: { qtAggVO: JSON.stringify(this.searchTemplateParam) }
        }
      };
      this.$http({
        url: url,
        headers: { "Content-Type": "application/json" },
        method: "post",
        data: data,
        dataType: "json"
      }).then(res => {
        var originalValue = res.data.data.content;
        this.$refs.servicelog.setData('IfaceCallLog_t', originalValue);
        this.totalElements = res.data.data.totalElements; // 总条数
      }).catch(e => {
        console.log(e);
        this.$message({
          message: "信息获取失败",
          type: "error"
        });
      });
    }
  }
});

/***/ }),

/***/ 494:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 593:
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
      "title": "凭证信息",
      "icons": _vm.baseIcons
    }
  }, [_c('ifbp-template', {
    ref: "prevoucherForm",
    attrs: {
      "editable": _vm.formEditable,
      "funnode": "YLSBT010",
      "nexuskey": "ylsifaceprevoucher",
      "show-type": "form",
      "tplid": "prevoucher-template"
    }
  })], 1), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "basePanel",
      "title": "分录信息",
      "icons": _vm.baseIcons
    }
  }, [_c('ifbp-template', {
    ref: "prevoucherdetailForm",
    attrs: {
      "funnode": "YLSBT010",
      "nexuskey": "ylsprevoucherdetail",
      "show-type": "table",
      "tplid": "prevoucherdetail-template"
    }
  })], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "modal": true,
      "size": "tiny",
      "title": "提示"
    },
    model: {
      value: (_vm.delDialogVisible),
      callback: function($$v) {
        _vm.delDialogVisible = $$v
      },
      expression: "delDialogVisible"
    }
  }, [_c('span', [_vm._v("\n        确认删除该凭证分录？删除后无法恢复。\n      ")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.delDialogVisible = false
      }
    }
  }, [_vm._v("\n          取 消\n        ")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.deleteConfirmClick
    }
  }, [_vm._v("\n          确 定\n        ")])], 1)])], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title-container"
  }, [_c('h2', {
    staticClass: "name"
  }, [_vm._v("\n      凭证明细\n    ")])])
}]}

/***/ }),

/***/ 760:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(494)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(457),
  /* template */
  __webpack_require__(593),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

/******/ })});;
//# sourceMappingURL=iface-prevouchercard.vue.decb0afa9cd7ace0fad9.en.js.map