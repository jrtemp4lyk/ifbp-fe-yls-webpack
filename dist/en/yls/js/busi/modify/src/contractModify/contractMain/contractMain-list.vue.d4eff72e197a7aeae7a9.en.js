define("yls//busi/modify/src/contractModify/contractMain/contractMain-list.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 766);
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

/***/ 463:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


const typeOptions = [{ name: "合同主信息变更", id: "cont" }, { name: "租金方案变更", id: "cal" }, { name: "供应商信息变更", id: "pro" }, { name: "租赁物信息变更", id: "rentThing" }, { name: "承租方信息变更", id: "lessee" }, { name: "担保信息变更", id: "custPledge" }, { name: "付款条件变更", id: "payCond" }, { name: "罚息率变更", id: "penaltyRule" }];
const defaultTypeOptions = ["cont"];
const allTypeOptions = ["cont", "cal", "pro", "rentThing", "lessee", "custPledge", "payCond", "penaltyRule"];
/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["b" /* pagination */])('request')],
  data() {
    return {
      // 查询模板编码
      searchTemplateCode: "contractModify",
      searchTemplateParam: {},
      checkAll: true,
      temptype: "cont",
      checkedTypes: [],
      typecs: typeOptions,
      isIndeterminate: false,
      field: "pk_contract",
      //模版主键
      funnode: "BT022",
      nexusKey: "contractModify",
      contractnfoListData: {},
      refCode: "contract_ref",
      refValue: {},
      //删除对话框
      delDialogVisible: false,
      //待删除数据id
      delId: "",
      //showDeleteButton: true,
      dialogTableVisible: false,
      dialogVisibleSubmit: false,
      dialogVisibleCheck: false,
      spanText: "",
      satatus: "",
      mess: "",
      selectIndex: 0,

      //操作按钮
      templateTableFormResetFun: function ($node) {
        //获取table,此id为ui模板上面的表格Id
        let $table = $node.find("el-table");
        //定义操作
        var operateArr = [{
          icon: "search",
          title: "查看"
        }, {
          icon: "edit",
          title: "修改"
        }, {
          title: "删除",
          icon: "delete"
        }];
        //获取操作按钮html片段
        var operateHtml = this.getTableOperateHtml(operateArr);
        $table.append(operateHtml);
        return $node[0].outerHTML;
      }
    };
  },
  created() {
    this.request();
  },
  methods: {
    // 查询
    handleSearch(searchTemplate) {
      this.currentPage = 1; //点查询按钮当前页设为1
      this.searchTemplateParam = searchTemplate;
      this.request();
    },
    handleCheckAllChange(event) {
      this.checkedTypes = event.target.checked ? allTypeOptions : defaultTypeOptions;
      this.isIndeterminate = false;
    },
    handleCheckedTypesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.typecs.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.typecs.length;
    },
    add() {
      this.checkedTypes = allTypeOptions;
      this.refValue = {};
      this.dialogTableVisible = true;
    },
    buttonVerification(statusTemp) {
      this.status = statusTemp;
      if (this.status == "check") {
        this.mess = "审核";
        // this.spanText = "是否确认审核！";
      } else if (this.status == "submit") {
        this.mess = "提交";
        this.spanText = "是否确认提交！";
      }

      var tableSelections = this.$refs["contractinfo_table"].getTableComp().getSelection();
      if (tableSelections.length === 1) {
        if (this.status == "submit") {
          this.dialogVisibleSubmit = true;
        } else {
          this.dialogVisibleCheck = true;
        }
      } else {
        this.$message({
          message: "请选择有且只有一条记录进行" + this.mess + "动作！",
          type: "error"
        });
      }
    },
    checkOrUn(statusTemp) {
      this.status = statusTemp;
      this.buttonAction();
    },
    buttonAction() {
      this.dialogVisibleCheck = false;
      this.dialogVisibleSubmit = false;
      var tableSelections = this.$refs["contractinfo_table"].getTableComp().getSelection();
      this.selectIndex = this.$refs["contractinfo_table"].getData("contract_t").indexOf(tableSelections[0]);

      var jsonData = JSON.parse(JSON.stringify(tableSelections[0]));
      var url;
      if (this.status == "check") {
        url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "contr/modify/contractinfo/check";
      } else if (this.status == "submit") {
        url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "contr/modify/contractinfo/submit";
      } else if (this.status == "unCheck") {
        url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "contr/modify/contractinfo/unCheck";
      }
      this.$http({
        url: url,
        headers: { "Content-Type": "application/json" },
        method: "post",
        dataType: "json",
        data: jsonData
      }).then(res => {
        this.originalValue = res.data.data;
        let contdata = this.$refs["contractinfo_table"].getData("contract_t");
        contdata.splice(this.selectIndex, 1, this.originalValue);
      }).catch(e => {
        this.$message({
          message: "合同" + this.mess + "失败！",
          type: "error"
        });
      });
    },
    // 选择变更类型
    saveChangeTypeClick() {
      debugger;
      if (this.refValue.pk_contract == undefined || this.refValue.pk_contract == "") {
        this.$message({
          message: "请选择需要变更的合同",
          type: "error"
        });
        return;
      }
      this.dialogTableVisible = false;
      location.hash = "/contr/modify/contractinfo/add/" + this.checkedTypes + "/" + this.refValue.pk_contract;
    },
    //查看按钮
    tableSearchClick(scope) {
      location.hash = "/contr/modify/contractinfo/detail/" + scope.row.pk_contract + "/" + scope.row.change_type;
    },
    //修改按钮
    tableEditClick(scope) {
      location.hash = "/contr/modify/contractinfo/edit/" + scope.row.pk_contract + "/edit/" + scope.row.change_type;
    },
    //删除操作
    tableDeleteClick(scope) {
      this.delId = scope.row.pk_contract;
      this.delDialogVisible = true;
    },
    //删除确定
    deleteConfirmClick() {
      this.delDialogVisible = false;
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "contr/modify/contractinfo/deleteById",
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
    //后台请求
    request() {
      var url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "contr/modify/contractinfo/page";
      var data = {
        orderList: [{
          direction: "desc",
          property: "ts"
        }],
        pageNum: this.currentPage - 1,
        pageSize: this.pageSize,
        searchParams: {
          searchMap: {
            searchMap: { qtAggVO: JSON.stringify(this.searchTemplateParam) }
          }
        }
      };
      this.$http({
        url: url,
        headers: { "Content-Type": "application/json" },
        method: "post",
        data: data,
        dataType: "json"
      }).then(res => {
        //QuoteCalculator_table UI模板表格名称
        var originalValue = res.data.data.content;
        this.$refs["contractinfo_table"].setData("contract_t", JSON.parse(JSON.stringify(originalValue)));
        this.totalElements = res.data.data.totalElements;
      }).catch(e => {
        this.$message({
          message: "信息获取失败",
          type: "error"
        });
      });
    }
  }
});

/***/ }),

/***/ 498:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 597:
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
      "click": _vm.add
    }
  }, [_vm._v("新增")])], 1), _vm._v(" "), _c('div', {
    staticClass: "fl",
    staticStyle: {
      "margin-left": "2px"
    }
  }, [_c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.buttonVerification('submit')
      }
    }
  }, [_vm._v("提交")])], 1), _vm._v(" "), _c('div', {
    staticClass: "fl",
    staticStyle: {
      "margin-left": "2px"
    }
  }, [_c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.buttonVerification('check')
      }
    }
  }, [_vm._v("审核")])], 1), _vm._v(" "), _c('div', {
    staticClass: "fr"
  }, [_c('ifbp-search', {
    attrs: {
      "template-code": _vm.searchTemplateCode
    },
    on: {
      "search": _vm.handleSearch
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "list-main-container clearfix",
    attrs: {
      "id": "contractList"
    }
  }, [_c('ifbp-template', {
    ref: "contractinfo_table",
    attrs: {
      "tplId": "contractinfo-template",
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexusKey,
      "tplData": _vm.contractnfoListData,
      "show-type": "table",
      "tplResetFun": _vm.templateTableFormResetFun
    },
    on: {
      "edit-table-click": _vm.tableEditClick,
      "search-table-click": _vm.tableSearchClick,
      "delete-table-click": _vm.tableDeleteClick
    }
  }), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "变更类型选择",
      "modal": true
    },
    model: {
      value: (_vm.dialogTableVisible),
      callback: function($$v) {
        _vm.dialogTableVisible = $$v
      },
      expression: "dialogTableVisible"
    }
  }, [_c('el-form', {
    staticClass: "demo-form-inline",
    attrs: {
      "inline": true
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "合同参照:",
      "prop": "contractRef"
    }
  }, [_c('el-ref', {
    attrs: {
      "is-muti-select": true,
      "ref-code": _vm.refCode,
      "template-value": _vm.refValue,
      "is-edit": true,
      "field": _vm.field,
      "query-params": {
        source_billtype: 'CONTRACT_MAKE'
      }
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-checkbox', {
    attrs: {
      "indeterminate": _vm.isIndeterminate
    },
    on: {
      "change": _vm.handleCheckAllChange
    },
    model: {
      value: (_vm.checkAll),
      callback: function($$v) {
        _vm.checkAll = $$v
      },
      expression: "checkAll"
    }
  }, [_vm._v("全选")]), _vm._v(" "), _c('el-checkbox-group', {
    on: {
      "change": _vm.handleCheckedTypesChange
    },
    model: {
      value: (_vm.checkedTypes),
      callback: function($$v) {
        _vm.checkedTypes = $$v
      },
      expression: "checkedTypes"
    }
  }, _vm._l((_vm.typecs), function(typec) {
    return _c('el-checkbox', {
      key: typec.id,
      attrs: {
        "label": typec.id,
        "disabled": typec.id === _vm.temptype
      }
    }, [_vm._v(_vm._s(typec.name))])
  }))], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.dialogTableVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.saveChangeTypeClick
    }
  }, [_vm._v("确 定")])], 1)], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "visible": _vm.dialogVisibleSubmit,
      "size": "tiny"
    }
  }, [_c('span', {
    key: _vm.spanText
  }, [_vm._v(_vm._s(_vm.spanText))]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.dialogVisibleSubmit = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.buttonAction
    }
  }, [_vm._v("确 定")])], 1)]), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "visible": _vm.dialogVisibleCheck,
      "size": "tiny"
    }
  }, [_c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.checkOrUn('check')
      }
    }
  }, [_vm._v("审核通过")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.checkOrUn('unCheck')
      }
    }
  }, [_vm._v("审核不通过")]), _vm._v(" "), _c('el-button', {
    on: {
      "click": function($event) {
        _vm.dialogVisibleCheck = false
      }
    }
  }, [_vm._v("取 消")])], 1)]), _vm._v(" "), _c('el-pagination', {
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
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title-container"
  }, [_c('h2', {
    staticClass: "name"
  }, [_vm._v("合同变更")])])
}]}

/***/ }),

/***/ 766:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(498)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(463),
  /* template */
  __webpack_require__(597),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

/******/ })});;
//# sourceMappingURL=contractMain-list.vue.d4eff72e197a7aeae7a9.en.js.map