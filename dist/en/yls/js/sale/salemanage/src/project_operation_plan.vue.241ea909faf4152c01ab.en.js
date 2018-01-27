define("yls//sale/salemanage/src/project_operation_plan.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 388);
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

/***/ 237:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    //应用vue传过来接收参数
    props: ["pk_sale_info"],
    data() {
        var oThis = this;
        return {
            scrollDom: document.getElementsByClassName("view")[0],
            delId: "",
            projectOperationPlanFunnode: "YLSBT003",
            projectOperationPlanNexusKey: "project_operation_plan",
            projectOperationPlanEdit: false,
            projectOperationPlanCacheData: '',
            projectOperationPlanData: {
                rules: {}
            }
        };
    },

    //页面操作
    mounted() {
        this.request();
    },

    methods: {
        request() {
            if (this.pk_sale_info) {
                this.requestProjectOperationPlan();
            }
        },

        //请求项目操作方案数据
        requestProjectOperationPlan() {
            var url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["a" /* ylsSale */] + "sale/projectOperationPlan/getByParentId";
            this.$http({
                url: url,
                headers: { "Content-Type": "application/json" },
                method: "post",
                data: this.pk_sale_info,
                dataType: "json"
            }).then(res => {
                this.$refs.projectOperationPlanRef.setData("ProjectOperationPlan", res.data.data);
                //列表数据缓存
                this.projectOperationPlanCacheData = JSON.parse(JSON.stringify(this.$refs.projectOperationPlanRef.getData('ProjectOperationPlan')));
            }).catch(() => {
                this.$message({
                    message: "项目操作方案信息获取失败",
                    type: "error"
                });
            });
        },

        //取消按钮
        projectOperationPlanFormCancel: function (type) {
            this.projectOperationPlanEdit = false;
            //还原数据
            this.$refs.projectOperationPlanRef.setData('ProjectOperationPlan', this.projectOperationPlanCacheData);
        },

        //保存
        projectOperationPlanFormConfirm: function () {
            //获取当前数据
            let url = "";
            var data = this.$refs.projectOperationPlanRef.comp.ProjectOperationPlan;
            data.pk_sale_info = this.pk_sale_info;
            if (data.pk_prj_operation_plan) {
                url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["a" /* ylsSale */] + '/sale/projectOperationPlan/update';
            } else {
                url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["a" /* ylsSale */] + '/sale/projectOperationPlan/create';
            }
            this.$http({
                url: url,
                headers: { "Content-Type": "application/json" },
                method: "post",
                data: JSON.parse(JSON.stringify(data))
            }).then(res => {
                if (res.data.success === true) {
                    this.$message({
                        message: "保存成功！",
                        type: "success"
                    });
                    this.projectOperationPlanEdit = false;
                    this.$refs.projectOperationPlanRef.setData("ProjectOperationPlan", res.data.data);
                    //列表数据缓存
                    this.projectOperationPlanCacheData = JSON.parse(JSON.stringify(this.$refs.projectOperationPlanRef.getData('ProjectOperationPlan')));
                } else {
                    this.$message({
                        message: res.data.error.errorMessage,
                        type: "error"
                    });
                }
            }).catch(() => {
                this.$message({
                    message: "更新失败",
                    type: "error"
                });
            });
        }
    }
});

/***/ }),

/***/ 288:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 338:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "projectOperationPlanRef",
    attrs: {
      "tplId": "projectOperationPlan",
      "funnode": _vm.projectOperationPlanFunnode,
      "nexuskey": _vm.projectOperationPlanNexusKey,
      "tplData": _vm.projectOperationPlanData,
      "show-type": "form",
      "editable": _vm.projectOperationPlanEdit
    },
    on: {
      "form-confirm-click": _vm.projectOperationPlanFormConfirm,
      "form-cancel-click": _vm.projectOperationPlanFormCancel
    }
  }), _vm._v(" "), (_vm.projectOperationPlanEdit) ? _c('div', {
    staticClass: "form-button-div"
  }, [_c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "default"
    },
    on: {
      "click": _vm.projectOperationPlanFormCancel
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.projectOperationPlanFormConfirm
    }
  }, [_vm._v("保存")])], 1) : _vm._e()], 1)
},staticRenderFns: []}

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(288)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(237),
  /* template */
  __webpack_require__(338),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

/******/ })});;
//# sourceMappingURL=project_operation_plan.vue.241ea909faf4152c01ab.en.js.map