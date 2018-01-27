define("yls//busi/fin/src/payment-apply/paymentapply-detail.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 740);
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

/***/ 207:
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
      search_input: "",
      //数据信息
      dialogrefData: {}
    };
  },
  methods: {
    // 高级搜索
    showSearch() {
      this.isHide = !this.isHide;
    },
    refreshPage() {
      this.$http.post(__WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "/fin/loancontinfo/page", {
        pageNum: this.currentPage - 1,
        pageSize: this.pageSize
      }).then(resp => {
        if (resp.data.success) {
          this.$refs.dialogref.setData("LoanContInfo_t", resp.data.data.content);
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
          ids[index] = item.pk_loan_cont_info;
        });
        var data = {
          strArray: ids,
          pk: pk
        };
        this.$http({
          url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "fin/loanapply/addLoanApplyInfo",
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

/***/ 208:
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


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["sourcebill"],
  data() {
    var oThis = this;
    return {
      delDialogVisible: false,
      //固定写法
      scrollDom: "ifbpScrollDom",
      //放款主键
      pk_fin_loan_apply: this.sourcebill,
      pk_loan_cont_info: '',
      tplData: {},
      // 放款申请单列表信息 FinLoanContInfoRef start
      FinLoanContInfoData: {},
      FinLoanContInfoResetFun: function ($node) {
        var $table = $node.find("el-table");
        $table.attr(":show-header", "true");
        var operateArr = [{
          title: "编辑",
          icon: "edit"
        }];
        var operateHtml = this.getTableOperateHtml(operateArr);
        $table.append(operateHtml);
        return $node[0].outerHTML;
      },
      //放款申请单列表信息添加
      FinLoanContInfoPlusIcons: [{
        icon: "plus",
        click: function () {
          oThis.open();
        }
      }, {
        icon: "delete",
        click: function () {
          oThis.FinLoanContInfoDeleteClick();
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
    opendecuted() {
      this.$emit("opendecutedreturn", this.pk_loan_cont_info);
    },
    // 放款申请单列表信息 FinLoanContInfoRef 事件处理 start
    FinLoanContInfoFormConfirm() {
      if (this.sourcebill != null) {
        var data = this.$refs.FinLoanContInfoRef.comp.LoanContInfo_f;
        data.pk_fin_loan_apply = this.sourcebill;
        let url = "";
        if (this.sourcebill) {
          url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "fin/loancontinfo/update";
        } else {
          url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "fin/loancontinfo/create";
        }
        this.$http({
          url: url,
          method: "post",
          data: data
        }).then(res => {
          if (res.data.success === true) {
            this.$message({
              message: "保存成功！",
              type: "success"
            });
            this.$refs.FinLoanContInfoRef.comp.formShow = false;
            this.Refresh();
          } else {
            this.$message({
              message: res.data.msg,
              type: "error"
            });
          }
        }).catch(e => {
          this.$message({
            message: "放款申请单列表信息保存失败！",
            type: "error"
          });
        });
      } else {
        this.$message({
          message: "请先保存放款信息。",
          type: "error"
        });
      }
    },
    // 放款申请单列表信息 FinLoanContInfoRef 事件处理 end
    // 放款申请单列表信息删除
    //删除操作
    FinLoanContInfoDeleteClick() {
      this.delDialogVisible = true;
    },
    FinLoanContInfoCancel() {
      this.$refs.FinLoanContInfoRef.getTableComp().closeExpandRow();
      this.$refs.FinLoanContInfoRef.comp.formShow = false;
      this.$refs.FinLoanContInfoRef.getTableComp().closeExpandRow();
      let loanPlanTable = this.$refs.FinLoanContInfoRef.getData("LoanContInfo_t");
      loanPlanTable[this.baseEditIndex] = this.baseData;
      this.$refs.FinLoanContInfoRef.setData("LoanContInfo_t", loanPlanTable);
    },
    FinLoanContInfoEditClick(scope) {
      this.$refs.FinLoanContInfoRef.getTableComp().expandRow(scope.row);
      this.$refs.FinLoanContInfoRef.comp.formShow = false;
      this.$refs.FinLoanContInfoRef.setData("LoanContInfo_f", scope.row);

      // 备份数据
      this.baseData = JSON.parse(JSON.stringify(scope.row));
      this.baseEditIndex = scope.$index;
    },
    //加载投放信息
    loadFinLoanContInfo(pk_fin_loan_apply) {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "fin/loancontinfo/getByFinApplyId",
        headers: { "Content-Type": "application/json" },
        method: "post",
        data: pk_fin_loan_apply
      }).then(res => {
        var originalValue = res.data.data;
        this.$refs["FinLoanContInfoRef"].setData("LoanContInfo_t", JSON.parse(JSON.stringify(originalValue)));
      }).catch(e => {
        this.$message({
          message: "放款申请单列表信息获取失败",
          type: "error"
        });
      });
    },
    deleteloan() {
      let tableSelections = this.$refs.FinLoanContInfoRef.getTableComp().getSelection();
      let ids = [];
      let pk = this.sourcebill;
      if (tableSelections && tableSelections.length > 0) {
        tableSelections.forEach((item, index) => {
          ids[index] = item.pk_loan_cont_info;
        });

        var data = {
          strArray: ids,
          pk: pk
        };
        this.$http({
          url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "fin/loanapply/deleteLoanApplyInfo",
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
            message: "发送失败！",
            type: "error"
          });
        });
      }
      this.$message({
        message: "请选择要删除的数据",
        type: "success"
      });
    }
  }
});

/***/ }),

/***/ 277:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 280:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 327:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "detail-main-container clearfix"
  }, [_c('ifbp-panel', {
    attrs: {
      "id": "FinLoanContInfoPanel",
      "title": "放款申请单列表",
      "icons": _vm.FinLoanContInfoPlusIcons
    }
  }, [_c('ifbp-template', {
    ref: "FinLoanContInfoRef",
    attrs: {
      "tplId": "FinLoanContInfoTemplate",
      "tplData": _vm.FinLoanContInfoData,
      "tplResetFun": _vm.FinLoanContInfoResetFun,
      "funnode": "BT012",
      "nexuskey": "loancontinfo",
      "show-type": "table-form"
    },
    on: {
      "form-cancel-click": _vm.FinLoanContInfoCancel,
      "form-confirm-click": _vm.FinLoanContInfoFormConfirm,
      "edit-table-click": _vm.FinLoanContInfoEditClick
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
      "click": _vm.deleteloan
    }
  }, [_vm._v("确 定")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 330:
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
      "placeholder": "合同编码/名称",
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
  }) : _vm._e()])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "advanced-search-panel",
    class: {
      hide: _vm.isHide
    }
  }), _vm._v(" "), _c('ifbp-template', {
    ref: "dialogref",
    attrs: {
      "tplId": "dialogref-template",
      "funnode": "BT012",
      "nexuskey": "loancontinfo",
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

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(280)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(207),
  /* template */
  __webpack_require__(330),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(277)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(208),
  /* template */
  __webpack_require__(327),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__paymentapply_detail_inout_dlog_vue__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__paymentapply_detail_inout_dlog_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__paymentapply_detail_inout_dlog_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paymentapply_detail_inout_vue__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paymentapply_detail_inout_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__paymentapply_detail_inout_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    loanlistdlogdef: __WEBPACK_IMPORTED_MODULE_1__paymentapply_detail_inout_dlog_vue___default.a,
    loanlistdef: __WEBPACK_IMPORTED_MODULE_2__paymentapply_detail_inout_vue___default.a
  },
  data() {
    var oThis = this;
    return {
      dialogVisible: false,
      dialogTableVisible: false,
      //放款主键
      pk_fin_loan_apply: "",
      pk_loan_cont_info: "",
      // 放款申请主模板 baseTemplateRef start
      tplData: {},
      editable: false,
      baseIcons: [{
        icon: "edit",
        click: function () {
          oThis.editable = !oThis.editable;
        }
      }]
      // 放款申请主模板 baseTemplateRef end
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loanlistdlogdefreturn() {
      this.dialogTableVisible = false;
      this.loadData();
    },
    conginfodopen() {
      this.dialogTableVisible = !this.dialogTableVisible;
    },
    decutedopen(pk_loan_cont_info) {
      this.pk_loan_cont_info = pk_loan_cont_info;
      this.dialogVisible = true;
    },
    decutedclose() {
      this.dialogVisible = false;
      this.loadData();
    },
    //返回按钮
    goBack() {
      window.history.back(-1);
    },
    // 放款主模板 baseTemplateRef 事件处理 start
    clickCancel() {
      this.editable = false;
    },
    clickSave() {
      var data = this.$refs.baseTemplateRef.comp.LoanApply_f;
      var jsonData = JSON.parse(JSON.stringify(data));
      let url = "";
      if (data.pk_fin_loan_apply) {
        url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "fin/loanapply/update";
      } else {
        url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "fin/loanapply/create";
      }
      this.$http({
        url: url,
        // headers: {'Content-Type': 'application/json'},
        method: "post",
        data: jsonData
      }).then(res => {
        this.editable = false;
        var originalValue = res.data.data;
        this.pk_fin_loan_apply = res.data.data.pk_fin_loan_apply;
        this.$refs["baseTemplateRef"].setData("LoanApply_f", JSON.parse(JSON.stringify(originalValue)));
      }).catch(e => {
        this.$message({
          message: "放款保存失败！",
          type: "error"
        });
      });
    },
    // 放款主模板 baseTemplateRef 事件处理 end
    //加载数据方法
    loadData() {
      this.pk_fin_loan_apply = this.$root.$router.currentRoute.params.id;
      //router name
      //this.$root.$router.currentRoute.name;
      //详情页面
      if (this.pk_fin_loan_apply && this.pk_fin_loan_apply != "") {
        //加载放款信息
        this.loadfinloanapply(this.pk_fin_loan_apply);
      } else {
        this.editable = true;
      }
    },
    //加载放款信息
    loadfinloanapply(pk_fin_loan_apply) {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "fin/loanapply/getById",
        headers: { "Content-Type": "application/json" },
        method: "post",
        data: pk_fin_loan_apply
      }).then(res => {
        var originalValue = res.data.data;
        this.$refs["baseTemplateRef"].setData("LoanApply_f", JSON.parse(JSON.stringify(originalValue)));
        this.$refs.loanlistdef.loadFinLoanContInfo(pk_fin_loan_apply);
      }).catch(e => {
        this.$message({
          message: "放款详情获取失败",
          type: "error"
        });
      });
    }
  }
});

/***/ }),

/***/ 588:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 689:
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
      "title": "投放申请",
      "icons": _vm.baseIcons
    }
  }, [_c('ifbp-template', {
    ref: "baseTemplateRef",
    attrs: {
      "tplId": "baseTemplate",
      "funnode": "BT012",
      "nexuskey": "loanapply",
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
  }, [_vm._v("保存")])], 1) : _vm._e()], 1), _vm._v(" "), _c('loanlistdef', {
    ref: "loanlistdef",
    attrs: {
      "sourcebill": _vm.pk_fin_loan_apply
    },
    on: {
      "openreturn": _vm.conginfodopen,
      "opendecutedreturn": _vm.decutedopen,
      "dialogreturn": _vm.loanlistdlogdefreturn
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
  }, [_c('loanlistdlogdef', {
    ref: "loanlistdlogdef",
    attrs: {
      "sourcebill": _vm.pk_fin_loan_apply
    },
    on: {
      "dialogreturn": _vm.loanlistdlogdefreturn
    }
  })], 1)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title-container"
  }, [_c('h2', {
    staticClass: "name"
  }, [_vm._v("付款/退款申请单")])])
}]}

/***/ }),

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(588)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(437),
  /* template */
  __webpack_require__(689),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

/******/ })});;
//# sourceMappingURL=paymentapply-detail.vue.6b790dad91af33a82716.en.js.map