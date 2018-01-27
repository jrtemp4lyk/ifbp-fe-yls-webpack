define("yls//busi/fin/src/loancont-info/loancontinfo-detail.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 737);
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

/***/ 204:
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


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["sourcebill"],
  mixins: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["b" /* pagination */])("refreshPage")],
  mounted() {
    this.refreshPage();
  },
  data() {
    var oThis = this;
    var change = false;
    return {
      //高级查询是否展示
      isHide: true,
      //数据信息
      dialogrefData: {},
      search_input: ''
    };
  },
  methods: {
    search() {},
    // 高级搜索
    showSearch() {
      this.isHide = !this.isHide;
    },
    refreshPage() {
      this.$http.post(__WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "/quote/inoutPlan/page", {
        pageNum: this.currentPage - 1,
        pageSize: this.pageSize
      }).then(resp => {
        if (resp.data.success) {
          this.$refs.dialogref.setData("payinoutfrom_t", resp.data.data.content);
          this.totalElements = resp.data.data.totalElements;
        }
      });
    },
    search() {},
    close() {
      this.$emit("dialogreturn", this.change);
    },
    addMain() {
      let tableSelections = this.$refs.dialogref.getTableComp().getSelection();
      let ids = [];
      let pk = this.sourcebill;
      if (tableSelections && tableSelections.length > 0) {
        tableSelections.forEach((item, index) => {
          ids[index] = item.pk_quote_inout_plan;
        });
        var data = {
          strArray: ids,
          pk: pk
        };
        this.$http({
          url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "fin/deducted/addDeducted",
          headers: { "Content-Type": "application/json" },
          method: "post",
          dataType: "json",
          data: data
        }).then(res => {
          if (res.data.success === true) {
            this.$message({
              message: "添加成功",
              type: "success"
            });
            this.change = true;
            this.close();
          } else {
            this.$message({
              message: res.data.msg,
              type: "error"
            });
          }
        }).catch(e => {
          this.$message({
            message: "添加失败！",
            type: "error"
          });
        });
      } else {
        this.$message({
          message: "请选择要增加的数据",
          type: "error"
        });
      }
    }
  }
});

/***/ }),

/***/ 205:
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


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["sourcebill"],
  data() {
    var oThis = this;
    return {
      dialogTableVisible: false,
      delDialogVisible: false,
      //固定写法
      scrollDom: "ifbpScrollDom",
      //投放计划主键
      pk_loan_cont_info: this.sourcebill,
      tplData: {},

      // 内扣信息 findeductedRef start
      findeductedData: {},
      findeductedResetFun: function ($node) {
        var $table = $node.find("el-table");
        $table.attr(":show-header", "true");
        var operateArr = [{
          title: "编辑",
          icon: "edit"
        }, {
          title: "删除",
          icon: "delete"
        }];
        var operateHtml = this.getTableOperateHtml(operateArr);
        $table.append(operateHtml);
        return $node[0].outerHTML;
      },
      //内扣信息添加
      findeductedPlusIcons: [{
        //   icon: "plus",
        //   click: function() {
        //     // 关闭table中的编辑区
        //     oThis.$refs.findeductedRef.getTableComp().closeExpandRow();
        //     // 重置新增数据
        //     oThis.$refs.findeductedRef.resetFormData();
        //     // 显示新增区域
        //     oThis.$refs.findeductedRef.comp.formShow = true;
        //   }
        // },
        // {
        icon: "share",
        click: function () {
          oThis.addloan();
        }
      }, {
        icon: "delete",
        click: function () {
          oThis.deleteloan();
        }
      }]
    };
  },
  methods: {
    Refresh() {
      this.$emit("dialogreturn");
    },
    open() {
      this.$emit("openreturn");
    },
    // 内扣信息 findeductedRef 事件处理 start
    findeductedFormConfirm() {
      if (this.sourcebill != null) {
        var data = this.$refs.findeductedRef.comp.Deducted_f;
        data.pk_loan_cont_info = this.sourcebill;
        let url = "";
        if (data.pk_fin_deducted) {
          url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "fin/deducted/update";
        } else {
          url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "fin/deducted/create";
        }
        this.$http({
          url: url,
          // headers: {'Content-Type': 'application/json'},
          method: "post",
          data: data
        }).then(res => {
          if (res.data.success === true) {
            this.$message({
              message: "保存成功！",
              type: "success"
            });
            this.$refs.findeductedRef.comp.formShow = false;
            this.Refresh();
          } else {
            this.$message({
              message: res.data.msg,
              type: "error"
            });
          }
        }).catch(e => {
          this.$message({
            message: "内扣信息保存失败！",
            type: "error"
          });
        });
      } else {
        this.$message({
          message: "请先保存投放计划信息。",
          type: "error"
        });
      }
    },
    findeductedFormCancel() {
      this.$refs.findeductedRef.getTableComp().closeExpandRow();
      this.$refs.findeductedRef.comp.formShow = false;
      this.$refs.findeductedRef.getTableComp().closeExpandRow();
      let loanPlanTable = this.$refs.findeductedRef.getData("Deducted_t");
      loanPlanTable[this.baseEditIndex] = this.baseData;
      this.$refs.findeductedRef.setData("Deducted_t", loanPlanTable);
    },
    findeductedEditClick(scope) {
      this.$refs.findeductedRef.getTableComp().expandRow(scope.row);
      this.$refs.findeductedRef.comp.formShow = false;
      this.$refs.findeductedRef.setData("Deducted_f", scope.row);

      // 备份数据
      this.baseData = JSON.parse(JSON.stringify(scope.row));
      this.baseEditIndex = scope.$index;
    },
    // 内扣信息 findeductedRef 事件处理 end
    // 内扣信息删除
    //删除操作
    findeductedDeleteClick(scope) {
      this.pk_fin_deducted = scope.row.pk_fin_deducted;
      this.delDialogVisible = true;
    },
    //删除确定
    deletefindeductedClick() {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "fin/deducted/deleteById",
        headers: { "Content-Type": "application/json" },
        method: "post",
        dataType: "json",
        data: this.pk_fin_deducted
      }).then(res => {
        if (res.data.success === true) {
          this.$message({
            message: "删除成功",
            type: "success"
          });
          this.delDialogVisible = false;
          this.Refresh();
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
    //加载内扣
    loadfindeducted(pk_loan_cont_info) {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "fin/deducted/getByFinLoanId",
        headers: { "Content-Type": "application/json" },
        method: "post",
        data: pk_loan_cont_info
      }).then(res => {
        var originalValue = res.data.data;
        this.$refs["findeductedRef"].setData("Deducted_t", JSON.parse(JSON.stringify(originalValue)));
      }).catch(e => {
        this.$message({
          message: "内扣信息获取失败",
          type: "error"
        });
      });
    },
    addloan() {
      this.open();
    },
    deleteloan() {
      let tableSelections = this.$refs.findeductedRef.getTableComp().getSelection();
      let ids = [];
      let pk = this.pk_loan_cont_info;
      if (tableSelections && tableSelections.length > 0) {
        tableSelections.forEach((item, index) => {
          ids[index] = item.pk_fin_deducted;
        });
        var data = {
          strArray: ids,
          pk: pk
        };
        this.$http({
          url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "fin/deducted/deleteDeducted",
          headers: { "Content-Type": "application/json" },
          method: "post",
          dataType: "json",
          data: data
        }).then(res => {
          if (res.data.success === true) {
            this.$message({
              message: "初始化成功",
              type: "success"
            });
            this.Refresh();
          } else {
            this.$message({
              message: res.data.msg,
              type: "error"
            });
          }
        }).catch(e => {
          this.$message({
            message: "发送失败！",
            type: "error"
          });
        });
      } else {
        this.$message({
          message: "请选择要删除的条目！",
          type: "error"
        });
      }
    }
  }
});

/***/ }),

/***/ 256:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 257:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 306:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-panel"
  }, [_c('div', {
    staticClass: "operator-container"
  }, [_c('div', {
    staticClass: "fr"
  }, [_c('el-input', {
    attrs: {
      "placeholder": "111合同编码/名称",
      "icon": "search",
      "on-icon-click": _vm.search
    },
    nativeOn: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.search($event)
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
  }, [_vm._v("\n              高级\n              "), (this.isHide) ? _c('i', {
    staticClass: "el-icon-arrow-down"
  }) : _vm._e(), _vm._v(" "), (!this.isHide) ? _c('i', {
    staticClass: "el-icon-arrow-up"
  }) : _vm._e()])], 1)]), _vm._v(" "), _c('ifbp-template', {
    ref: "dialogref",
    attrs: {
      "tplId": "dialogref-template",
      "funnode": "BT013",
      "nexuskey": "payinoutfrom",
      "tplData": _vm.dialogrefData,
      "show-type": "table"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "fr"
  }, [_c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.addMain
    }
  }, [_vm._v("确 定")]), _vm._v(" "), _c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "default"
    },
    on: {
      "click": _vm.close
    }
  }, [_vm._v("取 消")])], 1), _vm._v(" "), _c('div', [_c('el-pagination', {
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
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 307:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "detail-main-container clearfix"
  }, [_c('ifbp-panel', {
    attrs: {
      "id": "findeductedPanel",
      "title": "内扣",
      "icons": _vm.findeductedPlusIcons
    }
  }, [_c('ifbp-template', {
    ref: "findeductedRef",
    attrs: {
      "tplId": "findeductedTemplate",
      "funnode": "BT012",
      "nexuskey": "deducted",
      "tplData": _vm.findeductedData,
      "tplResetFun": _vm.findeductedResetFun,
      "show-type": "table-form"
    },
    on: {
      "form-confirm-click": _vm.findeductedFormConfirm,
      "form-cancel-click": _vm.findeductedFormCancel,
      "delete-table-click": _vm.findeductedDeleteClick,
      "edit-table-click": _vm.findeductedEditClick
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
      "click": _vm.deletefindeductedClick
    }
  }, [_vm._v("确 定")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(256)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(204),
  /* template */
  __webpack_require__(306),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(257)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(205),
  /* template */
  __webpack_require__(307),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loancontinfo_detail_decuted_dlog_vue__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loancontinfo_detail_decuted_dlog_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__loancontinfo_detail_decuted_dlog_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loancontinfo_detail_decuted_vue__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loancontinfo_detail_decuted_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__loancontinfo_detail_decuted_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    decutedDlogRef: __WEBPACK_IMPORTED_MODULE_1__loancontinfo_detail_decuted_dlog_vue___default.a,
    decutedref: __WEBPACK_IMPORTED_MODULE_2__loancontinfo_detail_decuted_vue___default.a
  },
  data() {
    var oThis = this;
    return {
      // decutedref:decutedref,
      dialogTableVisible: false,
      delDialogVisible: false,
      //投放计划主键
      pk_loan_cont_info: "",

      // 投放计划申请主模板 baseTemplateRef start
      tplData: {},
      editable: false,
      baseIcons: [{
        icon: "edit",
        click: function () {
          oThis.editable = !oThis.editable;
        }
      }]
      // 投放计划申请主模板 baseTemplateRef end
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    //返回按钮
    goBack() {
      location.hash = "/loancontinfo/loanmain/" + 'first';
    },
    decutedDlogRefreturn() {
      this.dialogTableVisible = false;
      this.loadData();
    },
    decutedopen() {
      this.dialogTableVisible = !this.dialogTableVisible;
    },
    // 投放计划主模板 baseTemplateRef 事件处理 start
    clickCancel() {
      this.editable = false;
    },
    clickSave() {
      var data = this.$refs.baseTemplateRef.comp.LoanContInfo_f;
      var jsonData = JSON.parse(JSON.stringify(data));
      let url = "";
      if (data.pk_loan_cont_info) {
        url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "fin/loancontinfo/update";
      } else {
        url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "fin/loancontinfo/create";
      }
      this.$http({
        url: url,
        // headers: {'Content-Type': 'application/json'},
        method: "post",
        data: jsonData
      }).then(res => {
        var originalValue = res.data.data;
        this.pk_loan_cont_info = res.data.data.pk_loan_cont_info;
        this.$refs["baseTemplateRef"].setData("LoanContInfo_f", JSON.parse(JSON.stringify(originalValue)));
        this.loadData();
        this.editable = false;
      }).catch(e => {
        this.$message({
          message: "投放计划保存失败！",
          type: "error"
        });
      });
    },
    // 投放计划主模板 baseTemplateRef 事件处理 end
    //加载数据方法
    loadData() {
      if (!this.pk_loan_cont_info) {
        this.pk_loan_cont_info = this.$root.$router.currentRoute.params.id;
      }
      //router name
      //this.$root.$router.currentRoute.name;
      //详情页面
      if (this.pk_loan_cont_info) {
        //加载投放计划信息
        this.loadfinloancontinfo(this.pk_loan_cont_info);
        this.$refs.decutedref.loadfindeducted(this.pk_loan_cont_info);
      } else {
        this.editable = true;
      }
    },
    //加载投放计划信息
    loadfinloancontinfo(pk_loan_cont_info) {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "fin/loancontinfo/getById",
        headers: { "Content-Type": "application/json" },
        method: "post",
        data: this.pk_loan_cont_info
      }).then(res => {
        var originalValue = res.data.data;
        this.$refs["baseTemplateRef"].setData("LoanContInfo_f", JSON.parse(JSON.stringify(originalValue)));
      }).catch(e => {
        this.$message({
          message: "投放计划详情获取失败",
          type: "error"
        });
      });
    }
  }
});

/***/ }),

/***/ 573:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-panel"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "detail-main-container clearfix"
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
      "title": "投放计划",
      "icons": _vm.baseIcons
    }
  }, [_c('ifbp-template', {
    ref: "baseTemplateRef",
    attrs: {
      "tplId": "baseTemplate",
      "funnode": "BT012",
      "nexuskey": "loancontinfo",
      "show-type": "form",
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
  }, [_vm._v("保存")])], 1) : _vm._e()], 1), _vm._v(" "), _c('decutedref', {
    ref: "decutedref",
    attrs: {
      "sourcebill": _vm.pk_loan_cont_info
    },
    on: {
      "openreturn": _vm.decutedopen,
      "dialogreturn": _vm.decutedDlogRefreturn
    }
  }), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "新增子表",
      "size": "large"
    },
    model: {
      value: (_vm.dialogTableVisible),
      callback: function($$v) {
        _vm.dialogTableVisible = $$v
      },
      expression: "dialogTableVisible"
    }
  }, [_c('decutedDlogRef', {
    ref: "decutedDlogRef",
    attrs: {
      "sourcebill": _vm.pk_loan_cont_info
    },
    on: {
      "dialogreturn": _vm.decutedDlogRefreturn
    }
  })], 1)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title-container"
  }, [_c('h2', {
    staticClass: "name"
  }, [_vm._v("放款申请列表界面")])])
}]}

/***/ }),

/***/ 737:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(573)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(434),
  /* template */
  __webpack_require__(674),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

/******/ })});;
//# sourceMappingURL=loancontinfo-detail.vue.19c76f695a3ab1db62d1.en.js.map