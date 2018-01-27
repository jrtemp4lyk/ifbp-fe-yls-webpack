define("yls//busi/quote/src/product-list.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 785);
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

/***/ 482:
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
  mixins: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["b" /* pagination */])('request')],
  data() {
    var oThis = this;
    return {
      productPk: "f820f976-e378-4051-acda-ef645ceb070c",
      showDeleteButton: false,
      search_input: "",
      isHide: true,
      delDialogVisible: false,
      multiDelDialogVisible: false,
      productTableData: {
        quoteScheme_t: []
      },
      productTableResetFun: function ($node) {
        var $table = this.getNodeById($node, "9uh48offlq5");
        var operateArr = [{
          title: "编辑",
          icon: "edit"
        }, {
          title: "删除",
          icon: "delete"
        }];
        // getTableOperateHtml方法需要传一个操作按钮数组
        var operateHtml = this.getTableOperateHtml(operateArr);
        var labelStr = 'label="';
        var newLabelStr = 'label="操作';
        // 直接操作operateHtml字符串，为新增的最后一列加标题“操作”
        $table.append(operateHtml.replace(labelStr, newLabelStr));
        return $node[0].outerHTML;
      }
    };
  },
  created() {
    var requestDefer = this.request();
    this.initPromise(requestDefer);
  },
  methods: {
    handleSelectionChange: function (selection) {
      if (selection && selection.length > 0) {
        this.showDeleteButton = true;
      } else {
        this.showDeleteButton = false;
      }
    },
    tableEditClick: function (scope) {
      location.hash = "/productsolution/detail/" + scope.row.pk_quote_scheme;
    },
    tableDeleteClick: function (scope) {
      this.delDialogVisible = true;
      this.delId = scope.row.pk_quote_scheme;
    },
    initPromise(request) {
      Promise.all([request]).then(() => {
        // this.$refs.cover.remove();
      });
    },
    searchInputEnterClick() {
      alert(this.search_input);
    },
    request() {
      var url;
      // var search =
      //   "&search_LIKE_code=&search_LIKE_name=&search_LIKE_enable_state=";
      // if (n === undefined) {
      //   url = "/uapbd/custbaseinfo/pageList?pn=1&ps=10&sortColumn=" + search;
      // } else {
      //   url = "/uapbd/custbaseinfo/pageList?pn=" + n + "&ps=" + s + search;
      // }
      // var baseUrl = '/yls-busi-web/';
      url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'quote/scheme/page';

      var data = {
        "orderList": [{
          "direction": "desc",
          "property": "scheme_name"
        }],
        "pageNum": this.currentPage - 1,
        "pageSize": this.pageSize,
        "searchParams": {
          "searchMap": {}
        }
      };
      this.$http({
        url: url,
        headers: { 'Content-Type': 'application/json' },
        method: "post",
        data: data,
        dataType: "json"
      }).then(res => {
        this.originalValue = res.data.data.content;
        this.$refs["template-table"].setData("quoteScheme_t", JSON.parse(JSON.stringify(this.originalValue)));
        this.totalElements = res.data.data.totalElements; // 总条数
        // this.size = res.data.data.size; // 每页的条数
      }).catch(() => {
        this.$message({
          message: "信息获取失败",
          type: "error"
        });
      });
    },
    // 高级搜索
    showSearch() {
      this.isHide = !this.isHide;
    },

    search() {
      this.request();
    },

    // 跳转到添加产品方案
    addProductSolution() {
      location.hash = "/productsolution/add";
    },

    multiDeleteDialgShow() {
      this.multiDelDialogVisible = true;
    },

    deleteClick() {
      // var baseUrl = '/yls-busi-web/';
      var url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'quote/scheme/deleteById';
      var delId = this.delId; //this.$refs["template-table"].comp.delId;
      console.log("delete" + delId);
      this.$http({
        url: url,
        headers: { 'Content-Type': 'application/json' },
        method: "post",
        dataType: "json",
        data: delId
      }).then(res => {
        if (res.data.success === true) {
          this.$message({
            message: "删除成功",
            type: "success"
          });
          this.request();
        } else {
          this.$message({
            message: res.data.msg,
            type: "error"
          });
        }
      }).catch(() => {
        this.$message({
          message: "Network error",
          type: "error"
        });
      });
      this.delDialogVisible = false;
    },

    multiDeleteClick() {
      var tableSelections = this.$refs["template-table"].comp.$refs["product_solution_table"].getSelection();
      var delIds = [];
      if (tableSelections && tableSelections.length > 0) {
        for (var i = 0; i < tableSelections.length; i++) {
          var row = tableSelections[i];
          var id = row.pk_customer;
          delIds.push(id);
        }
      }
      console.log("multi" + delIds);
      this.delDialogVisible = false;
      return;
    }
  }
});

/***/ }),

/***/ 525:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 625:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-panel"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "operator-container"
  }, [_c('div', {
    staticClass: "fl"
  }, [_c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.addProductSolution
    }
  }, [_vm._v("新增")]), _vm._v(" "), _c('el-button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showDeleteButton),
      expression: "showDeleteButton"
    }],
    staticClass: "button-no-radius",
    on: {
      "click": _vm.multiDeleteDialgShow
    }
  }, [_vm._v("删除")])], 1), _vm._v(" "), _c('div', {
    staticClass: "fr"
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请选择编码/方案",
      "icon": "search",
      "on-icon-click": _vm.searchInputEnterClick
    },
    nativeOn: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.searchInputEnterClick($event)
      }
    },
    model: {
      value: (_vm.search_input),
      callback: function($$v) {
        _vm.search_input = $$v
      },
      expression: "search_input"
    }
  }), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "text"
    },
    on: {
      "click": _vm.showSearch
    }
  }, [_vm._v("\n        高级\n        "), (this.isHide) ? _c('i', {
    staticClass: "el-icon-arrow-down"
  }) : _vm._e(), _vm._v(" "), (!this.isHide) ? _c('i', {
    staticClass: "el-icon-arrow-up"
  }) : _vm._e()])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "advanced-search-panel",
    class: {
      hide: _vm.isHide
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "list-main-container clearfix"
  }, [_c('ifbp-template', {
    ref: "template-table",
    attrs: {
      "tplId": "product-table-template",
      "pkTemp": _vm.productPk,
      "tplData": _vm.productTableData,
      "show-type": "table",
      "tplResetFun": _vm.productTableResetFun
    },
    on: {
      "selection-change": _vm.handleSelectionChange,
      "edit-table-click": _vm.tableEditClick,
      "delete-table-click": _vm.tableDeleteClick
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
  })], 1), _vm._v(" "), _c('el-dialog', {
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
  }, [_c('span', [_vm._v("确认删除该数据？删除后无法恢复。")]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("确 定")])], 1)]), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    on: {
      "update:visible": function (val) { return _vm.multiDelDialogVisible = val; }
    },
    model: {
      value: (_vm.multiDelDialogVisible),
      callback: function($$v) {
        _vm.multiDelDialogVisible = $$v
      },
      expression: "multiDelDialogVisible"
    }
  }, [_c('span', [_vm._v("确认删除所选数据？删除后无法恢复。")]), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.multiDelDialogVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.multiDeleteClick
    }
  }, [_vm._v("确 定")])], 1)])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title-container"
  }, [_c('h2', {
    staticClass: "name"
  }, [_vm._v("产品方案列表")])])
}]}

/***/ }),

/***/ 785:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(525)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(482),
  /* template */
  __webpack_require__(625),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

/******/ })});;
//# sourceMappingURL=product-list.vue.916eda9d3866cba04135.en.js.map