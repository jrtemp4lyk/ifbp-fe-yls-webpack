define("yls//busi/customer/src/operation_list.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 727);
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

/***/ 424:
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    let oThis = this;
    return {
      //模版主键
      pk_temp: '51775896-9d65-4a80-b88f-35daf4608d09',
      currentPage: 1,
      pageSize: [10, 20, 30, 40],
      size: 20,
      totalSize: 0,
      operationListData: {},
      delDialogVisible: false,
      //子表详情
      detailIcons: [{
        icon: "plus",
        click: function () {
          debugger;
          var uitemplateComp = oThis.$refs.operationTable.comp;
          var table = uitemplateComp.$refs['OperationProtocol_t_ref'];
          table.closeExpandRow();
          uitemplateComp.linkman = {};
          uitemplateComp.formShow = true;
        }
      }],

      templateTableFormResetFun($node) {
        //获取table,此id为ui模板上面的表格Id
        let $table = this.getNodeById($node, 'dgngfb74qds');
        //定义操作
        let operateArr = [{
          icon: 'edit',
          title: "查看"
        }, {
          title: '删除',
          icon: 'delete'
        }];
        //获取操作按钮html片段
        let operateHtml = this.getTableOperateHtml(operateArr);
        $table.append(operateHtml);
        return $node[0].outerHTML;
      }
    };
  },
  created() {
    this.request(this.currentPage - 1, this.size);
  },
  methods: {
    handleSizeChange(sizeVal) {
      this.size = window.pageSize = sizeVal;
      var maxPage = Math.ceil(this.totalSize / sizeVal);
      if (maxPage >= this.currentPage) {
        this.request(this.currentPage - 1, this.size);
      }
    },
    handleCurrentChange(currVal) {
      this.currentPage = currVal;
      this.request(this.currentPage - 1, this.size);
    },
    //查看按钮
    tableSearchClick(scope) {
      debugger;
      var uitemplateComp = this.$refs.operationTable.comp;
      var table = uitemplateComp.$refs['OperationProtocol_ref'];
      table.closeExpandRow;
      uitemplateComp.formShow = true;
      var row = scope.row;
      this.$refs.operationTable.setData("OperationProtocol", JSON.parse(JSON.stringify(row)));
    },
    // 添加按钮
    addInterrateInfo() {
      location.hash = '/operation/add';
    },

    //返回按钮
    goBack() {
      window.history.back(-1);
    },
    // 主模板 baseTemplateRef 事件处理 start
    clickCancel() {
      this.editable = false;
    },
    clickSave() {
      debugger;
      let data1 = this.$refs.operationTable.comp.OperationProtocol;
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'cust/operation/UpdateOrCreate',
        // headers: {'Content-Type': 'application/json'},  
        method: 'post',
        data: data1
      }).then(res => {
        location.hash = '/operation/list';
        this.editable = false;
        let originalValue = res.data.data;
        this.$refs["operationTable"].setData('OperationProtocol_t', originalValue);
        this.$message({
          message: '保存成功',
          type: 'success'
        });
      }).catch(e => {
        this.$message({
          message: '保存失败',
          type: 'error'
        });
      });
    },
    // 主模板 baseTemplateRef 事件处理 end

    //删除操作
    tableDeleteClick: function (scope) {
      this.delDialogVisible = true;
      this.pk_operation_protocol = scope.row.pk_operation_protocol;
    },

    //删除确定
    deleteConfirmClick() {
      debugger;
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'cust/operation/deleteById',
        headers: { 'Content-Type': 'application/json' },
        method: "post",
        dataType: "json",
        data: this.pk_operation_protocol
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
      }).catch(e => {
        this.$message({
          message: "删除失败",
          type: "error"
        });
      });
    },

    //加载信息
    loadDemoInfo(id) {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'cust/operation/getById',
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        data: id
      }).then(res => {
        let originalValue = res.data.data;
        this.$refs['baseTemplateRef'].setData('OperationProtocol', JSON.parse(JSON.stringify(originalValue)));
      }).catch(e => {
        this.$message({
          message: '详情获取失败',
          type: 'error'
        });
      });
    },

    request(n, s) {
      let data = {
        "orderList": [{
          "direction": "desc",
          "property": "ts"
        }],
        "pageNum": n,
        "pageSize": s,
        "searchParams": {
          "searchMap": {
            "p_id": this.id
          }
        }
      };
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'cust/operation/page',
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        data,
        dataType: 'json'
      }).then(res => {
        //QuoteCalculator_table UI模板表格名称
        var originalValue = res.data.data.content;
        this.$refs['operationTable'].setData('OperationProtocol_t', originalValue);
        this.totalSize = res.data.data.totalElements; // 总条数
        this.size = res.data.data.size; // 每页的条数
      }).catch(e => {
        console.log(e);
        this.$message({
          message: '信息获取失败',
          type: 'error'
        });
      });
    }
  }
});

/***/ }),

/***/ 559:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 659:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-panel"
  }, [_c('div', {
    staticClass: "list-main-container clearfix",
    attrs: {
      "id": "operationList"
    }
  }, [_c('ifbp-panel', {
    attrs: {
      "id": "basePanel",
      "title": "合作协议",
      "icons": _vm.detailIcons
    }
  }, [_c('ifbp-template', {
    ref: "operationTable",
    attrs: {
      "tplId": "operationList-template",
      "pkTemp": _vm.pk_temp,
      "tplData": _vm.operationListData,
      "show-type": "table-form",
      "tplResetFun": _vm.templateTableFormResetFun
    },
    on: {
      "edit-table-click": _vm.tableSearchClick,
      "delete-table-click": _vm.tableDeleteClick
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
  }, [_vm._v("保存")])], 1) : _vm._e()], 1), _vm._v(" "), _c('el-pagination', {
    attrs: {
      "current-page": _vm.currentPage,
      "page-sizes": _vm.pageSizes,
      "page-size": _vm.size,
      "layout": "total, sizes, prev, pager, next, jumper",
      "total": _vm.totalSize
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
  }, [_c('span', [_vm._v("确认删除该数据？")]), _vm._v(" "), _c('span', {
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
      "click": _vm.deleteConfirmClick
    }
  }, [_vm._v("确 定")])], 1)])], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 727:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(559)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(424),
  /* template */
  __webpack_require__(659),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

/******/ })});;
//# sourceMappingURL=operation_list.vue.3686286adfd7504cc8d6.en.js.map