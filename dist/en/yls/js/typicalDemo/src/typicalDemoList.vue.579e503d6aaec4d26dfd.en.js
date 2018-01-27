define("yls//typicalDemo/src/typicalDemoList.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 792);
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

/***/ 489:
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
    return {
      // 查询模板传入参数
      searchCode: "TYPICAL_SEARCH",
      searchData: "",
      // UI模板传入参数
      typicalDemoTableFunnode: "CJGL",
      typicalDemoTableNexuskey: "typical",
      typicalDemoTableData: {},
      typicalDemoTableResetFun: function ($node) {
        // 增加默认的新增删除按钮
        var $table = this.getTableDom($node);
        var operateHtml = this.getBaseTableOperateHtml();
        $table.append(operateHtml);
        return $node[0].outerHTML;
      },

      // 分页组件传入参数
      totalElements: 0,
      currentPage: 0,
      size: 10,
      // 是否显示批量删除按钮
      showDeleteButton: false,
      // 是否显示删除dialog
      delDialogVisible: false,
      multiDelDialogVisible: false
    };
  },
  created() {
    this.request();
  },
  methods: {
    // 请求数据
    request(curPage, size) {
      var data = {
        pageNum: curPage || 0,
        pageSize: size || this.size
      };
      if (this.searchData) {
        data.searchParams = {
          searchMap: {
            qtAggVO: JSON.stringify(this.searchData)
          }
        };
      }
      this.$http({
        url: "/ifbp-app-sm-infoset-web/typical_demo/page",
        method: "post",
        data: data,
        headers: {
          "Content-Type": "application/json"
        },
        dataType: "application/json"
      }).then(res => {
        this.$refs.typicalDemoTableRef.setData("TypicalDemoEntity_t", res.data.data.content);
        this.totalElements = res.data.data.totalElements;
        this.size = res.data.data.size;
      }).catch(() => {
        this.$message({
          message: "信息获取失败",
          type: "error"
        });
      });
    },

    // 查询区点击搜索后的处理
    handleSearch(searchData) {
      if (!searchData) {
        return;
      }
      this.searchData = searchData;
      this.request();
    },

    // 跳转到添加地点页面
    addtypicalDemo() {
      location.hash = "/typicalDemo/add";
    },

    // table行的编辑操作
    typicalDemoTableEditClick(scope) {
      location.hash = "/typicalDemo/detail/" + scope.row.id;
    },

    // table行的删除操作
    typicalDemoTableDeleteClick(scope) {
      this.delDialogVisible = true;
      this.delId = scope.row.id;
    },

    // 删除处理
    deleteClick() {
      var vm = this;
      var data = {
        id: this.delId
      };
      this.$http({
        url: "/ifbp-app-sm-infoset-web/typical_demo/delete",
        method: "post",
        data: data,
        headers: {
          "Content-Type": "application/json"
        },
        dataType: "application/json"
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
            message: res.data.error.errorMessage,
            type: "error"
          });
        }
      }).catch(e => {
        this.$message({
          message: "删除失败",
          type: "error"
        });
      });
    },

    // table选中改变
    customerSelectionChange(selection) {
      if (selection && selection.length > 0) {
        this.showDeleteButton = true;
      } else {
        this.showDeleteButton = false;
      }
    },

    // 批量删除点击处理
    multiDeleteDialgShow() {
      this.multiDelDialogVisible = true;
    },

    // 批量删除处理
    multiDeleteClick() {
      var tableSelections = this.$refs.typicalDemoTableRef.getTableComp().getSelection();

      this.$http({
        url: "/ifbp-app-sm-infoset-web/typical_demo/deleteBatch",
        method: "post",
        data: tableSelections,
        headers: {
          "Content-Type": "application/json"
        },
        dataType: "application/json"
      }).then(res => {
        if (res.data.success === true) {
          this.$message({
            message: "删除成功",
            type: "success"
          });
          this.multiDelDialogVisible = false;
          this.request();
        } else {
          this.$message({
            message: res.data.error.errorMessage,
            type: "error"
          });
        }
      }).catch(e => {
        this.$message({
          message: "删除失败",
          type: "error"
        });
      });
    },

    // 翻页标签改变每页显示数据
    handleSizeChange(val) {
      this.request(0, val);
    },

    // 翻页标签改变当前页
    handleCurrentChange(val) {
      this.request(val - 1, this.size);
    }
  }
});

/***/ }),

/***/ 505:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 605:
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
      "click": _vm.addtypicalDemo
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
  }, [_vm._v("删除")])], 1), _vm._v(" "), _c('ifbp-search', {
    staticClass: "fr",
    attrs: {
      "template-code": _vm.searchCode
    },
    on: {
      "search": _vm.handleSearch
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "list-main-container clearfix"
  }, [_c('ifbp-template', {
    ref: "typicalDemoTableRef",
    attrs: {
      "tpl-id": "typicalDemoTableId",
      "funnode": _vm.typicalDemoTableFunnode,
      "nexuskey": _vm.typicalDemoTableNexuskey,
      "tpl-data": _vm.typicalDemoTableData,
      "show-type": "table",
      "tplResetFun": _vm.typicalDemoTableResetFun
    },
    on: {
      "selection-change": _vm.customerSelectionChange,
      "edit-table-click": _vm.typicalDemoTableEditClick,
      "delete-table-click": _vm.typicalDemoTableDeleteClick
    }
  }), _vm._v(" "), _c('el-pagination', {
    attrs: {
      "current-page": _vm.currentPage,
      "page-sizes": [10, 20, 30, 40],
      "page-size": _vm.size,
      "layout": "total, sizes, prev, pager, next, jumper",
      "total": _vm.totalElements
    },
    on: {
      "size-change": _vm.handleSizeChange,
      "current-change": _vm.handleCurrentChange
    }
  })], 1), _vm._v(" "), _c('ifbp-del-dialog', {
    attrs: {
      "message": "确认删除该数据？删除后无法恢复。"
    },
    on: {
      "click": _vm.deleteClick
    },
    model: {
      value: (_vm.delDialogVisible),
      callback: function($$v) {
        _vm.delDialogVisible = $$v
      },
      expression: "delDialogVisible"
    }
  }), _vm._v(" "), _c('ifbp-del-dialog', {
    attrs: {
      "message": "确认删除所选数据？删除后无法恢复。"
    },
    on: {
      "click": _vm.multiDeleteClick
    },
    model: {
      value: (_vm.multiDelDialogVisible),
      callback: function($$v) {
        _vm.multiDelDialogVisible = $$v
      },
      expression: "multiDelDialogVisible"
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title-container"
  }, [_c('h2', {
    staticClass: "name"
  }, [_vm._v("典型页面")])])
}]}

/***/ }),

/***/ 792:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(505)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(489),
  /* template */
  __webpack_require__(605),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

/******/ })});;
//# sourceMappingURL=typicalDemoList.vue.579e503d6aaec4d26dfd.en.js.map