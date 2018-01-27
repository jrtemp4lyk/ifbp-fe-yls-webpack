define("yls//busi/project/src/buni/busi_corp.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
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

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(61)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(52),
  /* template */
  __webpack_require__(69),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 52:
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




/* harmony default export */ __webpack_exports__["default"] = ({
  //应用vue传过来接收参数
  props: ["pk_customer"],
  data() {
    let oThis = this;
    return {
      scrollDom: document.getElementsByClassName("view")[0],
      CustEdit: false,

      funnode: "BT003",
      CustBasicnexuskey: "cust_basic_busi_apply",
      CustBasicData: {
        custBasic_busi: {}
      },
      CustPknexuskey: "corp_busi_apply",
      CustData: {},
      cropResetFun: function ($node) {
        //地区级联参照
        let $refNode1 = this.getNodeById($node, 'axik3iubxq');
        let $refNode2 = this.getNodeById($node, 'wxatv844dr');

        if ($refNode1.length) {
          $refNode1.attr("v-on:trigger", "ccrsRefChang");
        }
        if ($refNode2.length) {
          $refNode2.attr("v-on:trigger", "handleRefChange2");
        }
      },
      t_Methods: {
        ccrsRefChang: function (type, data) {
          if (type === 'change') {
            let refParams = { 'refcode': data.value[0].innercode };
            oThis.$refs.CustRef.setData('citySel', refParams);
          }
        },
        handleRefChange2: function (type, data) {
          if (type === 'change') {
            let refParams = { 'refcode': data.value[0].innercode };
            oThis.$refs.CustRef.setData('districtSel', refParams);
          }
        }
      },
      CustCancel() {
        oThis.CustEdit = false;
        // 重置value
      },

      //客户基本信息保存
      CustConfirm() {
        let data = oThis.$refs.CustBasicRef.comp.customer;
        let data1 = oThis.$refs.CustRef.comp.CustCorp;
        let a = [data1];
        data.cust_corp_list = a;
        //表单formRef  表格tableRef
        oThis.$refs.CustBasicRef.comp.$refs["formRef"].validate(valid => {
          if (valid) {
            oThis.$http({
              url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/customer/create",
              headers: { "Content-Type": "application/json" },
              method: "post",
              data: JSON.parse(JSON.stringify(data))
            }).then(res => {
              if (res.data.success === true) {
                oThis.$message({
                  message: "保存成功",
                  type: "success"
                });
                oThis.originalValue = res.data.data;
                console.log(oThis.$refs.CustBasicRef);
                oThis.$refs.CustBasicRef.setData("customer", JSON.parse(JSON.stringify(oThis.originalValue)));
                oThis.pk_customer = oThis.originalValue.pk_cust_customer;
                oThis.CustEdit = false;
              } else {
                oThis.$message({
                  message: "res.data.error.errorMessage",
                  type: "error"
                });
              }
            }).catch(() => {
              oThis.$message({
                message: "更新失败",
                type: "error"
              });
            });
          }
        });
      }
    };
  },
  //监听引用传参后实时变动
  computed: {
    currentpk_customer() {
      return this.pk_customer;
    }
  },
  //获取数据数据初始化操作
  created() {},
  //监听参数变动后方法
  watch: {
    pk_customer(val) {
      this.requestCustCorp();
    }
  },
  //页面操作
  mounted() {
    this.request();
  },
  methods: {
    /**
       *   初始响应方法
       **/
    request() {
      if (this.pk_customer != "") {
        this.requestCustCorp();
      }
    },
    //请求客户联系人
    requestCustCorp() {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/customer/getById",
        headers: { 'Content-Type': 'application/json' },
        method: "post",
        data: this.pk_customer
      }).then(res => {
        console.log(this.pk_customer);
        let originalValue = res.data.data;
        console.log(originalValue);
        this.$refs.CustBasicRef.setData("customer", JSON.parse(JSON.stringify(originalValue)));
        this.$refs.CustRef.setData("CustCorp", JSON.parse(JSON.stringify(originalValue.cust_corp_list[0])));
      }).catch(e => {
        console.error(e);
        this.$message({
          message: "客户基本信息详情获取失败",
          type: "error"
        });
      });
    }
  }
});

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 69:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "CustBasicRef",
    attrs: {
      "tplId": "CustBasic",
      "funnode": _vm.funnode,
      "nexuskey": _vm.CustBasicnexuskey,
      "show-type": "form",
      "tplData": _vm.CustBasicData,
      "editable": _vm.CustEdit
    }
  }), _vm._v(" "), _c('ifbp-template', {
    ref: "CustRef",
    attrs: {
      "tplId": "CustBusi",
      "funnode": _vm.funnode,
      "nexuskey": _vm.CustPknexuskey,
      "show-type": "form",
      "tplData": _vm.CustData,
      "tplResetFun": _vm.cropResetFun,
      "methods": _vm.t_Methods,
      "editable": _vm.CustEdit
    }
  }), _vm._v(" "), (_vm.CustEdit) ? _c('div', {
    staticClass: "form-button-div"
  }, [_c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "default"
    },
    on: {
      "click": _vm.CustCancel
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.CustConfirm
    }
  }, [_vm._v("保存")])], 1) : _vm._e()], 1)
},staticRenderFns: []}

/***/ })

/******/ })});;
//# sourceMappingURL=busi_corp.vue.586de70562404bd653f9.en.js.map