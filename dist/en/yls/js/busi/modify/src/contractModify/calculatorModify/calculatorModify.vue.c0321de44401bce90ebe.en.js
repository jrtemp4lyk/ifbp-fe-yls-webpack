define("yls//busi/modify/src/contractModify/calculatorModify/calculatorModify.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 367);
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

/***/ 216:
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



/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["source_bill"],
  data() {
    return {
      scrollDom: document.getElementsByClassName("view")[0],
      funnode: "BT022",
      nexusKey: "calculatorModify",
      calculators: [],
      caltplData: {},
      //渲染表格
      calRestFun: function ($node) {
        let $table = $node.find("el-table");
        var operateArr = [{
          icon: "search",
          title: "查看"
        }, {
          icon: "edit",
          title: "编辑"
        }];
        var operateHtml = this.getTableOperateHtml(operateArr);
        $table.append(operateHtml);
        return $node[0].outerHTML;
      }
    };
  },
  computed: {
    cur_source_bill() {
      return this.source_bill;
    }
  },
  watch: {
    source_bill(val) {
      this.calForQuery();
    },
    calculators(val) {
      this.$emit("onChangeInoutPlan", val);
    }
  },
  //页面操作
  mounted() {
    this.calForQuery();
  },
  methods: {

    //查询
    calForQuery() {
      if (this.cur_source_bill) {
        let url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "contr/modify/quoteCalculator/page";
        let dataParams = {
          orderList: [{
            direction: "desc",
            property: "ts"
          }],
          searchParams: {
            searchMap: {
              custCondList: [{ key: "source_bill", oper: "=", value: this.cur_source_bill }]
            }
          }
        };
        this.$http.post(url, dataParams, { headers: { "Content-Type": "application/json" } }).then(res => {
          let originalValue = res.data.data.content;
          if (originalValue.length) {
            originalValue.forEach((item, index) => {
              let name = index == 0 ? "基础报价" : "起租报价" + index;
              let obj = { text: name, value: item.pk_quote_calculator };
              this.calculators.push(obj);
            });
          }
          this.$refs.calculatorRef.setTableData(JSON.parse(JSON.stringify(originalValue)));
        });
      }
    },
    //查看
    calSearchRow: function (scope) {
      this.$refs.calculatorRef.getTableComp().expandRow(scope.row);
      this.$refs.calculatorRef.comp.formShow = false;
      this.$refs.calculatorRef.editable = false;
      this.$refs.calculatorRef.setFormData(scope.row);
    },
    //编辑
    calEditRow: function (scope) {
      //备份数据
      this.baseData = JSON.parse(JSON.stringify(scope.row));
      this.baseEditIndex = scope.$index;

      this.$refs.calculatorRef.getTableComp().expandRow(scope.row);
      this.$refs.calculatorRef.comp.formShow = false;
      this.$refs.calculatorRef.editable = true;
      this.$refs.calculatorRef.setFormData(scope.row);
    },

    //编辑/保存-取消
    calForCancel: function (type) {
      if (type === "form") {
        this.$refs.calculatorRef.comp.formShow = false;
      } else {
        this.$refs.calculatorRef.getTableComp().closeExpandRow();
        //回复为取消前的数据
        this.caltplData.calculatorModifyTable[this.baseEditIndex] = this.baseData;
      }
    },

    //保存
    calFormConfirm: function (type) {
      let data = this.$refs.calculatorRef.comp.calculatorModifyForm;
      if (type === "form") {
        data.source_bill = this.cur_source_bill;
        let url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "contr/modify/quoteCalculator/create";
        this.$http.post(url, data, { headers: { "Content-Type": "application/json" } }).then(res => {
          if (res.data.success === true) {
            this.$message({
              message: "保存成功！",
              type: "success"
            });
            this.paytplData.calculatorModifyTable.unshift(res.data.data);
          } else {
            this.$message({
              message: res.data.error.errorMessage,
              type: "error"
            });
          }
        });
        this.$refs.calculatorRef.comp.formShow = false;
      } else {
        //更新
        let url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "contr/modify/quoteCalculator/save";
        this.$http.post(url, data, { headers: { "Content-Type": "application/json" } }).then(res => {
          if (res.data.success === true) {
            this.$message({
              message: "更新成功！",
              type: "success"
            });
          } else {
            this.$message({
              message: res.data.error.errorMessage,
              type: "error"
            });
          }
        });
        this.$refs.calculatorRef.getTableComp().closeExpandRow();
      }
    },
    //报价发生变动
    calculatorChange: function (val) {
      this.$emit("onChangeInoutPlan", val);
    }
  }
});

/***/ }),

/***/ 283:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 333:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "calculatorRef",
    attrs: {
      "tplId": "calculatorTemplate",
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexusKey,
      "tplData": _vm.caltplData,
      "show-type": "table-form",
      "tplResetFun": _vm.calRestFun
    },
    on: {
      "edit-table-click": _vm.calEditRow,
      "search-table-click": _vm.calSearchRow,
      "form-confirm-click": _vm.calFormConfirm,
      "form-cancel-click": _vm.calForCancel
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(283)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(216),
  /* template */
  __webpack_require__(333),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

/******/ })});;
//# sourceMappingURL=calculatorModify.vue.c0321de44401bce90ebe.en.js.map