define("yls//busi/project/src/application/apply-submitting.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 377);
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

/***/ 226:
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


/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["b" /* pagination */])()], //分页方法引入
  data() {
    return {
      funnode: "BT008",
      nexuskey: "application",
      applingTableData: {},
      showDeleteButton: false,

      delDialogVisible: false,
      applingTableResetFun: function ($node) {
        var $table = $node.find('el-table');
        var operateArr = [{
          title: '编辑',
          icon: 'edit'
        }, {
          title: '删除',
          icon: 'delete'
        }, {
          title: '提交',
          icon: 'pt-shangchuan'
        }];
        var operateHtml = this.getTableOperateHtml(operateArr);
        $table.append(operateHtml);
        return $node[0].outerHTML;
      }
    };
  },

  created() {
    var requestDefer = this.request(this.currentPage - 1, this.size);
    this.initPromise(requestDefer);
  },

  methods: {
    // table行的编辑操作
    tableEditClick(scope) {
      var pk_application = scope.row.pk_application;
      var pk_customer = scope.row.pk_customer;
      var customer_type = scope.row.customer_type;
      this.$emit('chang-apply-submitting', ['toapplycustomerlist', pk_customer, pk_application, customer_type]);
    },
    //提交
    tableSubmitClick(scope) {
      this.submitappling(scope);
    },
    tableDeleteClick(scope) {
      this.delDialogVisible = true;
      this.delId = scope.row.pk_application;
    },

    submitApplication() {
      // location.hash = "/inoutType/add";
      var url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/apply/createapply';
      var data = {
        'issubmit': '0',
        'pk_customer': pk_customer
      };
      this.$http({
        url: url,
        headers: { 'Content-Type': 'application/json' },
        method: "post",
        data: JSON.parse(JSON.stringify(data))
      }).then(res => {
        if (res.data.success === true) {
          this.$message({
            message: '操作成功！',
            type: "success"
          });
          this.inoutTypeFormEdit = false;
        } else {
          this.$message({
            message: res.data.msg,
            type: "error"
          });
        }
      }).catch(() => {
        this.$message({
          message: "操作失败",
          type: "error"
        });
      });
    },

    handleSelectionChange: function (selection) {
      if (selection && selection.length > 0) {
        this.showDeleteButton = true;
      } else {
        this.showDeleteButton = false;
      }
    },

    initPromise(request) {
      Promise.all([request]).then(() => {
        // this.$refs.cover.remove();
      });
    },

    request() {
      var data = {
        "orderList": [{
          "direction": "desc",
          "property": "ts"
        }],
        "pageNum": this.currentPage - 1,
        "pageSize": this.pageSize,
        "searchParams": {
          "searchMap": {
            custCondList: [{ key: "issubmit", oper: "=", value: "0" }]
          }
        }
      };

      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/apply/page',
        headers: { 'Content-Type': 'application/json' },
        method: "post",
        data: data,
        dataType: "json"
      }).then(res => {
        this.originalValue = res.data.data.content;
        this.$refs["application-table"].setData("application_t", JSON.parse(JSON.stringify(this.originalValue)));
        this.totalElements = res.data.data.totalElements; // 总条数
        this.pageSize = res.data.data.pageSize; // 每页的条数
      }).catch(() => {
        this.$message({
          message: "信息获取失败",
          type: "error"
        });
      });
    },

    deleteClick() {
      var delId = this.delId;
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'apply/deleteById',
        headers: { 'Content-type': 'application/json' },
        method: 'post',
        dataType: 'json',
        data: delId
      }).then(res => {
        if (res.data.success === true) {
          this.$message({
            message: "删除成功",
            type: "success"
          });
          this.delDialogVisible = false;
          this.request(this.currentPage - 1, this.size);
        } else {
          this.$message({
            message: res.data.msg,
            type: "error"
          });
        }
      }).catch(() => {
        this.$message({
          message: "Network Error",
          type: "error"
        });
      });
    },

    //提交待申请
    submitappling(scope) {
      var pk_application = scope.row.pk_application;
      var url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/apply/updateapply';
      var data = {
        "pk_application": pk_application
      };
      this.$http({
        url: url,
        headers: { 'Content-Type': 'application/json' },
        method: "post",
        data: JSON.parse(JSON.stringify(data))
      }).then(res => {
        if (res.data.success === true) {
          this.$message({
            message: "操作成功！",
            type: "success"
          });
          this.$emit('chang-apply-submitting', ['flushapplysubmitting', '', '', '']);
          this.inoutTypeFormEdit = false;
        } else {
          this.$message({
            message: res.data.msg,
            type: "error"
          });
        }
      }).catch(() => {
        this.$message({
          message: "操作失败",
          type: "error"
        });
      });
    }

  }
});

/***/ }),

/***/ 246:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 296:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-panel"
  }, [_c('div', {
    staticClass: "list-main-container clearfix"
  }, [_c('ifbp-template', {
    ref: "application-table",
    attrs: {
      "tpl-id": "appling-table-id",
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexuskey,
      "tpl-data": _vm.applingTableData,
      "show-type": "table",
      "tpl-reset-fun": _vm.applingTableResetFun
    },
    on: {
      "selection-change": _vm.handleSelectionChange,
      "edit-table-click": _vm.tableEditClick,
      "delete-table-click": _vm.tableDeleteClick,
      "pt-shangchuan-table-click": _vm.tableSubmitClick
    }
  }), _vm._v(" "), _c('el-pagination', {
    attrs: {
      "current-page": _vm.currentPage,
      "page-sizes": _vm.pageSizes,
      "page-size": _vm.pageSize,
      "layout": "total, sizes, prev, pager, next, jumper",
      "total": _vm.totalElements
    },
    on: {
      "size-change": _vm.handleSizeChange,
      "current-change": _vm.handleCurrentChange
    }
  }), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    on: {
      "update:visible": function (val) { return _vm.delDialogVisible = val; }
    },
    model: {
      value: (_vm.delDialogVisible),
      callback: function($$v) {
        _vm.delDialogVisible = $$v
      },
      expression: "delDialogVisible"
    }
  }, [_c('span', [_vm._v("确认删除该数据？删除后无法恢复。")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.delDialogVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.deleteClick
    }
  }, [_vm._v("确 定")])], 1)])], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(246)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(226),
  /* template */
  __webpack_require__(296),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

/******/ })});;
//# sourceMappingURL=apply-submitting.vue.b3ed3aacf933fdb5b14e.en.js.map