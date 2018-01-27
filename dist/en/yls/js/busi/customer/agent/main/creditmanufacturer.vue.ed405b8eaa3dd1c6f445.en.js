define("yls//busi/customer/agent/main/creditmanufacturer.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 708);
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

/***/ 111:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 125:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 131:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 139:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "operationTable",
    attrs: {
      "tplId": "operationTemplate",
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexusKey,
      "tplData": _vm.operationData,
      "tplResetFun": _vm.operationResetFun,
      "tplMethods": _vm.operationTplMethods,
      "methods": _vm.t_Methods,
      "show-type": "table-form"
    },
    on: {
      "form-confirm-click": _vm.operationFormConfirm,
      "form-cancel-click": _vm.operationFormCancel,
      "edit-table-click": _vm.operationEditTableRow,
      "delete-table-click": _vm.operationDeleteTableRow
    }
  }), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    model: {
      value: (_vm.operationDelVisible),
      callback: function($$v) {
        _vm.operationDelVisible = $$v
      },
      expression: "operationDelVisible"
    }
  }, [_c('span', [_vm._v("确认删除该条记录 ？删除后无法恢复。")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.operationDelVisible = false, this.delId = ''
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.operationDeleteClick
    }
  }, [_vm._v("确 定")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 143:
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

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "custlinkmanRef",
    attrs: {
      "tplId": "linkmanTemplate",
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexuskey,
      "tplData": _vm.custlinkmanData,
      "tplResetFun": _vm.linkmanResetFun,
      "show-type": "table-form"
    },
    on: {
      "form-confirm-click": _vm.linkmanFormConfirm,
      "form-cancel-click": _vm.linkmanFormCancel,
      "edit-table-click": _vm.linkmanFormedit,
      "delete-table-click": _vm.linkmanFormdelete
    }
  }), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    model: {
      value: (_vm.linkmanDelVisible),
      callback: function($$v) {
        _vm.linkmanDelVisible = $$v
      },
      expression: "linkmanDelVisible"
    }
  }, [_c('span', [_vm._v("确认删除该条记录？删除后无法恢复。")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.linkmanDelVisible = false, this.delId = ''
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.linkmanDeleteClick
    }
  }, [_vm._v("确 定")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "ShareholderRef",
    attrs: {
      "tplId": "ShareholderTemplate",
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexuskey,
      "tplData": _vm.ShareholderData,
      "tplResetFun": _vm.ShareholderResetFun,
      "tplMethods": _vm.ShareholderTplMethods,
      "show-type": "table-form",
      "methods": _vm.t_Methods
    },
    on: {
      "form-confirm-click": _vm.ShareholderFormConfirm,
      "form-cancel-click": _vm.ShareholderFormCancel,
      "edit-table-click": _vm.ShareholderEditTableRow,
      "delete-table-click": _vm.ShareholderDeleteTableRow
    }
  }), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    model: {
      value: (_vm.ShareholderDelVisible),
      callback: function($$v) {
        _vm.ShareholderDelVisible = $$v
      },
      expression: "ShareholderDelVisible"
    }
  }, [_c('span', [_vm._v("确认删除该条记录 ？删除后无法恢复。")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.ShareholderDelVisible = false, this.delId = ''
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.ShareholderDeleteClick
    }
  }, [_vm._v("确 定")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(111)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(77),
  /* template */
  __webpack_require__(139),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(115)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(78),
  /* template */
  __webpack_require__(143),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(131)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(79),
  /* template */
  __webpack_require__(160),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(125)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(80),
  /* template */
  __webpack_require__(154),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 198:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    mixins: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["b" /* pagination */])('request')], //分页方法引入
    data() {
        return {
            funnode: "BT005",
            nexuskey: "manufacturer_credit",
            OperationProtocolData: {},
            delDialogVisible: false,
            agentnameval: '',
            templateTableFormResetFun($node) {
                //获取table,此id为ui模板上面的表格Id
                let $table = this.getNodeById($node, '45jcdetxcwg');
                //定义操作
                let operateArr = [{
                    icon: 'edit',
                    title: "修改"
                }, {
                    icon: 'upload2',
                    title: '发起申请'
                }, {
                    icon: 'delete',
                    title: '删除'
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

        addagentinfo() {
            this.$emit('change-credit-grant', ['tocreditgrantadd', '']);
        },
        tableUpdClick(scope) {
            let agentname = scope.row.agent_name;
            let pk_operation_protocol = scope.row.pk_operation_protocol;
            this.$emit("change-credit-grant", ['tocreditgrantinfo', agentname, pk_operation_protocol]);
        },
        tableApplyClick(scope) {
            let agentname = scope.row.agent_name;
            this.$emit("change-credit-grant", ['tocreditgrantinfo', agentname]);
        },
        //删除操作
        tableDeleteClick: function (scope) {
            this.delDialogVisible = true;
            this.pk_operation_protocol = scope.row.pk_operation_protocol;
            this.agentnameval = scope.row.agent_name;
        },

        //删除确定
        deleteConfirmClick() {
            let agentPk = this.agentnameval;
            this.$http({
                url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'cust/operation/delsubAndchid',
                headers: { 'Content-Type': 'application/json' },
                method: "post",
                dataType: "json",
                data: agentPk
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

        request() {
            let data = {
                "orderList": [{
                    "direction": "desc",
                    "property": "ts"
                }],
                "pageNum": this.currentPage - 1,
                "pageSize": this.pageSize,
                "searchParams": {
                    "searchMap": {
                        'custCondList': [{ key: "customer_class", oper: "=", value: "yls_dev100000000fft" }]
                    }
                }
            };
            this.$http({
                url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'cust/operation/page',
                headers: { 'Content-Type': 'application/json' },
                method: 'post',
                data, data,
                dataType: 'json'
            }).then(res => {
                //QuoteCalculator_table UI模板表格名称
                var originalValue = res.data.data.content;
                debugger;
                this.$refs['OperationProtocol'].setData('OperationProtocol_t', originalValue);
                this.totalElements = res.data.data.totalElements; // 总条数
                this.pageSize = res.data.data.pageSize; // 每页的条数
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

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vendorInformation_vue__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vendorInformation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vendorInformation_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vendorlinkman_vue__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vendorlinkman_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__vendorlinkman_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vendorShare_vue__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vendorShare_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__vendorShare_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__operation_info_vue__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__operation_info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__operation_info_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




//引入联系人和股东信息面板




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'CustCorpRef': __WEBPACK_IMPORTED_MODULE_1__vendorInformation_vue___default.a,
    'custlinkmanRef': __WEBPACK_IMPORTED_MODULE_2__vendorlinkman_vue___default.a,
    'ShareholderRef': __WEBPACK_IMPORTED_MODULE_3__vendorShare_vue___default.a,
    'operationinfo': __WEBPACK_IMPORTED_MODULE_4__operation_info_vue___default.a
  },
  props: ['pkCustomer', 'creditgrant'],
  data() {
    let oThis = this;
    return {
      scrollDom: "ifbpScrollDom",
      linkmanDelVisible: false,
      custbankDelVisible: false,
      ShareholderDelVisible: false,
      custVisible: false,
      pk_customer: this.pkCustomer,
      custIcons: [{
        icon: "edit",
        click: function () {
          oThis.$refs.CustCorpRef.CustEdit = !oThis.$refs.CustCorpRef.CustEdit;
        }
      }],

      //联系人修改
      linkmanIcons: [{
        icon: "plus",
        click: function () {
          oThis.pk_customer = oThis.$refs.CustCorpRef.pk_customer;
          if (oThis.pk_customer === "") {
            oThis.$message({
              message: "请先保存基本信息",
              type: "error"
            });
            return;
          }
          oThis.$refs.custlinkmanRef.$refs.custlinkmanRef.getTableComp().closeExpandRow();
          // 重置新增数据
          oThis.$refs.custlinkmanRef.$refs.custlinkmanRef.resetFormData();
          // 显示新增区域
          oThis.$refs.custlinkmanRef.$refs.custlinkmanRef.comp.formShow = true;
        }
      }],
      // 股东信息新增
      ShareholderIcons: [{
        icon: "plus",
        click: function () {
          oThis.pk_customer = oThis.$refs.CustCorpRef.pk_customer;
          if (oThis.pk_customer === "") {
            oThis.$message({
              message: "请先保存基本信息",
              type: "error"
            });
            return;
          }
          oThis.$refs.ShareholderRef.$refs.ShareholderRef.getTableComp().closeExpandRow();
          // 重置新增数据
          oThis.$refs.ShareholderRef.$refs.ShareholderRef.resetFormData();
          // 显示新增区域
          oThis.$refs.ShareholderRef.$refs.ShareholderRef.comp.formShow = true;
        }
      }]
      // 新增
      // OperationIcons:[
      //    {
      //     icon: "plus",
      //     click: function() {
      //       if(oThis.pk_customer===""){
      //         oThis.$message({
      //             message: "请先保存基本信息",
      //             type: "error"
      //           });
      //           return;
      //       }
      //       oThis.$refs.operationTable.$refs.operationTable.getTableComp().closeExpandRow();
      //       // 重置新增数据
      //       oThis.$refs.operationTable.$refs.operationTable.resetFormData();
      //       // 显示新增区域
      //       oThis.$refs.operationTable.$refs.operationTable.comp.formShow = true;
      //     }
      //   }
      // ]

    };
  },
  //页面操作
  mounted() {
    this.request();
  },
  methods: {
    // 信息初始化
    request() {
      //请求客户基本信息详情
      var method = this.$root.$router.currentRoute.path;
    },
    goback() {
      this.$emit('change-credit-edit', 'tocreditgrantapply');
    }
  }
});

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

/***/ 261:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 285:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 311:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-panel"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "creditgrant-container"
  }, [_c('div', {
    staticClass: "fl"
  }, [_c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.goback
    }
  }, [_vm._v("回退")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "detail-main-container clearfix"
  }, [_c('ifbp-panel-group', {
    attrs: {
      "navbar": true,
      "base-scroll-top": 50,
      "scroll-dom": _vm.scrollDom,
      "base-nav-bar-top": 125
    }
  }, [_c('ifbp-panel', {
    attrs: {
      "id": "custInfo",
      "title": "基本信息",
      "icons": _vm.custIcons
    }
  }, [_c('CustCorpRef', {
    ref: "CustCorpRef",
    attrs: {
      "pk_customer": _vm.pk_customer
    }
  })], 1), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "linkmanPanel",
      "title": "联系人信息",
      "icons": _vm.linkmanIcons
    }
  }, [_c('custlinkmanRef', {
    ref: "custlinkmanRef",
    attrs: {
      "pk_customer": _vm.pk_customer
    }
  })], 1), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "ShareholderPanel",
      "title": "股东信息",
      "icons": _vm.ShareholderIcons
    }
  }, [_c('ShareholderRef', {
    ref: "ShareholderRef",
    attrs: {
      "pk_customer": _vm.pk_customer
    }
  })], 1), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "operationTableRef",
      "title": "合作协议"
    }
  }, [_c('operationinfo', {
    ref: "operationTable",
    attrs: {
      "pk_customer": _vm.pk_customer
    }
  })], 1)], 1)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title-container"
  }, [_c('h2', {
    staticClass: "name"
  }, [_vm._v("厂商管理")])])
}]}

/***/ }),

/***/ 335:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-panel"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "creditapply-container"
  }, [_c('div', {
    staticClass: "fl"
  }, [_c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.addagentinfo
    }
  }, [_vm._v("新增")])], 1), _vm._v(" "), _c('div', {
    staticClass: "fr"
  }, [_c('el-input', {
    attrs: {
      "placeholder": "输入厂商名称即可搜索",
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
    staticClass: "list-main-container clearfix",
    attrs: {
      "id": "OperationProtocol"
    }
  }, [_c('ifbp-template', {
    ref: "OperationProtocol",
    attrs: {
      "tplId": "OperationProtocol-template",
      "tplData": _vm.OperationProtocolData,
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexuskey,
      "show-type": "table",
      "tplResetFun": _vm.templateTableFormResetFun
    },
    on: {
      "edit-table-click": _vm.tableUpdClick,
      "upload2-table-click": _vm.tableApplyClick,
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
  }, [_vm._v("厂商授信信息表")])])
}]}

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(285)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(198),
  /* template */
  __webpack_require__(335),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(261)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(199),
  /* template */
  __webpack_require__(311),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__manufacturer_creditfactoryapply_vue__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__manufacturer_creditfactoryapply_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__manufacturer_creditfactoryapply_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manufacturer_creditfactoryinfo_vue__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manufacturer_creditfactoryinfo_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__manufacturer_creditfactoryinfo_vue__);
//
//
//
//
//
//
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
    'creditfactoryapply': __WEBPACK_IMPORTED_MODULE_0__manufacturer_creditfactoryapply_vue___default.a,
    'creditfactoryinfo': __WEBPACK_IMPORTED_MODULE_1__manufacturer_creditfactoryinfo_vue___default.a
  },
  data() {
    return {
      activeName: 'first',
      istrue: true,
      pkCustomer: '',
      creditgrant: ''
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },

    changecreditgrant(val) {
      if ('tocreditgrantadd' == val[0]) {
        this.istrue = false;
      } else if ('tocreditgrantinfo' == val[0]) {
        this.istrue = false;
        this.pkCustomer = val[1];
        this.creditgrant = 'creditgrant';
      }
    },
    changecreditedit(val) {
      if (val) {
        this.pkCustomer = '';
        this.istrue = true;
      }
    }
  }
});

/***/ }),

/***/ 512:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 612:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-tabs', {
    attrs: {
      "id": "busi-agent-apply"
    },
    on: {
      "tab-click": _vm.handleClick
    },
    model: {
      value: (_vm.activeName),
      callback: function($$v) {
        _vm.activeName = $$v
      },
      expression: "activeName"
    }
  }, [_c('el-tab-pane', {
    attrs: {
      "label": "厂商授信申请",
      "name": "first"
    }
  }, [(_vm.istrue) ? _c('creditfactoryapply', {
    on: {
      "change-credit-grant": _vm.changecreditgrant
    }
  }) : _c('creditfactoryinfo', {
    attrs: {
      "pkCustomer": _vm.pkCustomer,
      "creditgrant": _vm.creditgrant
    },
    on: {
      "change-credit-edit": _vm.changecreditedit
    }
  })], 1), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "已授信厂商",
      "name": "second"
    }
  }), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "分配授信",
      "name": "third"
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 708:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(512)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(405),
  /* template */
  __webpack_require__(612),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 77:
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
  //应用vue传过来接收参数
  props: ['pk_customer'],
  data() {
    let oThis = this;
    let validator = function (rule, value, callback) {};
    return {
      operationDelVisible: false,
      rmoveindex: '',
      delId: '',
      funnode: 'BT005',
      nexusKey: 'cooperation_agreement',
      operationData: {},
      t_Methods: {},
      operationResetFun($node) {
        if (oThis.invisible) {
          return;
        }
        let $refNode = this.getNodeById($node, '1nnheivkgfc'); //获取客户参照
        if (oThis.pid !== undefined) {
          $refNode.attr("v-bind:disabled", 'true'); //客户参照只读
        } else {
          $refNode.attr("v-bind:disabled", 'false'); //客户参照可编辑
        }
        let $table = $node.find("el-table");
        let operateArr = [{
          title: '编辑',

          icon: 'edit'
        }, {
          title: '删除',

          icon: 'delete'
        }];
        let operateHtml = this.getTableOperateHtml(operateArr);
        $table.append(operateHtml);
        return $node[0].outerHTML;
      },
      operationTplMethods: {
        // form的保存操作
      }
    };
  },
  //监听引用传参后实时变动
  computed: {
    currentpk_customer() {
      return this.pk_customer;
    }
  },
  //监听参数变动后方法
  watch: {
    pk_customer(val) {
      this.request();
    }
  },
  //获取数据数据初始化操作
  created() {},
  //页面操作
  mounted() {
    this.request();
  },
  methods: {
    //请求方法
    request() {
      if (this.pk_customer != '' && this.pk_customer != undefined) {
        this.requestOperation();
      }
    },
    closeAddForm() {
      this.$refs['operationTable'].comp.formShow = false; //关闭添加表单事件
    },
    //请求合作协议信息
    requestOperation() {
      let data = {
        pageNum: 0,
        pageSize: 10,
        searchParams: {
          searchMap: {
            custCondList: [{ key: "agent_name", oper: "=", value: this.pk_customer }]
          }
        }
      };
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'cust/operation/page',
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        data: data,
        dataType: 'json'
      }).then(res => {
        this.originalValue = res.data.data.content;
        this.$refs['operationTable'].setData('OperationProtocol_t', JSON.parse(JSON.stringify(this.originalValue)));
      }).catch(() => {
        this.$message({
          message: '信息获取失败',
          type: 'error'
        });
      });
    },
    //合作协议保存
    operationFormConfirm() {
      //获取当前数据
      let url;
      let data = this.$refs.operationTable.comp.OperationProtocol;
      data.agent_name = this.pk_customer;
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'cust/operation/UpdateOrCreate',
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        data: JSON.parse(JSON.stringify(data))
      }).then(res => {
        // location.hash = '/operation/list';
        this.editable = false;

        // this.$refs["operationTable"].setData(
        //   'OperationProtocol_t',
        //   originalValue
        // );
        if (res.data.success === true) {
          this.$message({
            message: '保存成功',
            type: 'success'
          });
          // let originalValue = res.data.data;
          //获取列表数组（根据表格数据对象参数获取相应的数组或对象）
          // let linarraydata = this.$refs.operationTable.getData(
          //   "OperationProtocol_t"
          // );
          /**@augments 移除位置 
           * @augments 移除个数
           * @augments 用新的对象替换（不传值则删除）
           */
          // if (this.rmoveindex !== "") {
          //   linarraydata.splice(this.rmoveindex, 1, this.originalValue);
          // } else {
          //加入数组开始
          //   linarraydata.unshift(this.originalValue);
          // } 

          //给对象赋值
          // this.$refs.operationTable.setData(
          //   "OperationProtocol_t",
          //   JSON.parse(JSON.stringify(linarraydata))
          // );
          this.requestOperation();
          //隐藏详情列表
          this.$refs['operationTable'].comp.formShow = false;
        } else {
          this.$message({
            message: res.data.error.errorMessage,
            type: "error"
          });
        }
      }).catch(() => {
        this.$message({
          message: '保存失败',
          type: 'error'
        });
      });
    },
    // 合作协议form的取消操作
    operationFormCancel(type) {
      if (type === 'form') {
        this.$refs['operationTable'].comp.formShow = false;
        this.$emit("closeAddForm");
      } else {
        this.$refs['operationTable'].getTableComp().closeExpandRow();
      }
    },
    //合作协议编辑
    operationEditTableRow(scope) {
      //记录删除位置
      this.rmoveindex = scope.$index;
      //行下展开表单界面
      let row = scope.row;
      this.$refs['operationTable'].getTableComp().expandRow(row);
      this.$refs['operationTable'].formShow = false;
      //operationTable为表单数据对象参数
      this.$refs['operationTable'].setData('OperationProtocol', row);
    },
    //合作协议删除提示
    operationDeleteTableRow(scope) {
      this.operationDelVisible = true;
      this.pk_operation_protocol = scope.row.pk_operation_protocol;
    },
    //合作协议删除
    operationDeleteClick() {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'cust/operation/deleteById',
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        dataType: 'json',
        data: this.delId
      }).then(res => {
        debugger;
        if (res.data.success === true) {
          this.$message({
            message: '删除成功',
            type: 'success'
          });
          this.requestOperation();
        } else {
          debugger;
          this.$message({
            message: res.data.error.errorMessage,
            type: 'error'
          });
        }
      }).catch(e => {
        debugger;
        this.$message({
          message: '信息删除失败',
          type: 'error'
        });
      });
      this.operationDelVisible = false;
      this.delId = '';
    }
  }
});

/***/ }),

/***/ 78:
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
    var oThis = this;
    return {
      scrollDom: "ifbpScrollDom",
      CustEdit: true,

      funnode: "BT005",
      CustBasicnexuskey: "manufacturer_basic",
      CustBasicData: {
        custBasic_busi: {}
      },
      CustPknexuskey: "manufacturer_information",
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

      //厂商基本信息保存
      CustConfirm() {
        var data = oThis.$refs.CustBasicRef.comp.customer;
        var data1 = oThis.$refs.CustRef.comp.CustCorp;
        var a = [data1];
        data.cust_corp_list = a;
        data.customer_type = 'CORP';
        data.cusotmer_class = "yls_dev100000000fft";
        console.log(data);
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
    //请求客户
    requestCustCorp() {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/customer/getById",
        headers: { 'Content-Type': 'application/json' },
        method: "post",
        data: this.pk_customer
      }).then(res => {
        console.log(this.pk_customer);
        var originalValue = res.data.data;
        console.log(originalValue);
        this.$refs.CustBasicRef.setData("customer", JSON.parse(JSON.stringify(originalValue)));
        this.$refs.CustRef.setData("CustCorp", JSON.parse(JSON.stringify(originalValue.cust_corp_list[0])));
      });
    }
  }
});

/***/ }),

/***/ 79:
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
  props: ["pk_customer", "invisible"],
  data() {
    var oThis = this;
    var validator = function (rule, value, callback) {};
    return {
      ShareholderDelVisible: false,
      rmoveindex: "",
      delId: "",
      back_object: "",
      // 股东信息新增
      ShareholderIcons: [{
        icon: "plus",
        click: function () {
          if (oThis.pk_customer === "") {
            oThis.$message({
              message: "请先保存基本信息",
              type: "error"
            });
            return;
          }
          var uitemplateComp = oThis.$refs.ShareholderRef.comp;
          var table = uitemplateComp.$refs["Shareholder_t_ref"];
          table.closeExpandRow();
          uitemplateComp.bankaccount = {};
          uitemplateComp.formShow = true;
          oThis.rmoveindex = "";
        }
      }],
      funnode: "BT003",
      nexuskey: "corp_shareholder_busi_apply",
      ShareholderData: {
        rules: {}
      },
      ShareholderResetFun: function ($node) {
        if (oThis.invisible) {
          return;
        }
        var $refname = this.getNodeById($node, 'huepldc1v46'); //股东名称
        if ($refname.length) {
          $refname.attr("v-on:trigger", "nameRefChange");
        }

        var $table = this.getNodeById($node, "wc3ufqnfqkl");
        // $table.attr(":show-header", "false");
        var operateArr = [{
          title: "编辑",

          icon: "edit"
        }, {
          title: "删除",

          icon: "delete"
        }];
        var operateHtml = this.getTableOperateHtml(operateArr);

        $table.append(operateHtml);

        var $pkCountry = this.getNodeById($node, "u5itmgcx7c");
        var $pkTaxes = this.getNodeById($node, "1idpzwci9up");
        $pkCountry.html('<template scope="scope"><div>{{scope.row.beanMap?' + "(scope.row.beanMap.pk_country_ref?" + 'scope.row.beanMap.pk_country_ref[scope.row.pk_country].name:""):""}}' + "</div></template>");

        $pkTaxes.html('<template scope="scope"><div>{{scope.row.beanMap?' + "(scope.row.beanMap.pk_taxes_ref?" + 'scope.row.beanMap.pk_taxes_ref[scope.row.pk_taxes].name:""):""}}' + "</div></template>");

        return $node[0].outerHTML;
      },
      t_Methods: {
        nameRefChange: function (type, data) {
          //参照变化处理函数 依据参照赋值
          debugger;
          if (type === 'change') {
            this.$refs['Shareholder_ref'].model.share_type = data.value[0].customer_type;
            this.$refs['Shareholder_ref'].model.identity_type = data.value[0].identity_type;
            this.$refs['Shareholder_ref'].model.identity_num = data.value[0].identity_no;
          }
        }
      },
      ShareholderTplMethods: {
        // form的保存操作
      }
    };
  },
  //获取数据数据初始化操作
  created() {},
  //监听参数变动后方法
  watch: {
    pk_customer(val) {
      this.requestShareholder();
    }
  },
  //监听引用传参后实时变动
  computed: {
    currentpk_customer() {
      return this.pk_customer;
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
        this.requestShareholder();
      }
    },
    //请求股东信息
    requestShareholder() {
      var url;
      url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/shareholder/page";
      var data = {
        pageNum: 0,
        pageSize: 0,
        searchParams: {
          searchMap: {
            custCondList: [{ key: "pk_customer", oper: "=", value: this.pk_customer }]
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
        this.originalValue = res.data.data.content;
        this.$refs["ShareholderRef"].setData("Shareholder_t", JSON.parse(JSON.stringify(this.originalValue)));
      }).catch(() => {
        this.$message({
          message: "信息获取失败",
          type: "error"
        });
      });
    },
    //股东情况保存
    ShareholderFormConfirm: function () {
      //获取当前数据
      var data = this.$refs.ShareholderRef.comp.Shareholder;
      data.pk_customer = this.pk_customer;
      //保存校验
      this.$refs.ShareholderRef.comp.$refs["Shareholder_ref"].validate(valid => {
        if (valid) {
          this.$http({
            url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/shareholder/create",
            headers: { "Content-Type": "application/json" },
            method: "post",
            data: JSON.parse(JSON.stringify(data))
          }).then(res => {
            if (res.data.success === true) {
              this.$message({
                message: "保存成功！",
                type: "success"
              });
              this.originalValue = res.data.data;
              //获取列表数组（根据表格数据对象参数获取相应的数组或对象）
              var linarraydata = this.$refs.ShareholderRef.getData("Shareholder_t");
              /**@augments 移除位置 
               * @augments 移除个数
               * @augments 用新的对象替换（不传值则删除）
               */
              if (this.rmoveindex !== "") {
                linarraydata.splice(this.rmoveindex, 1, this.originalValue);
              } else {
                //加入数组开始
                linarraydata.unshift(this.originalValue);
              }
              //加入数组结尾
              // linarraydata.push(this.originalValue);
              //给对象赋值
              this.$refs.ShareholderRef.setData("Shareholder_t", JSON.parse(JSON.stringify(linarraydata)));
              //隐藏详情列表
              this.$refs["ShareholderRef"].comp.formShow = false;
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
      });
    },
    // 股东信息form的取消操作
    ShareholderFormCancel: function (type) {
      if (type === "form") {
        this.$refs["ShareholderRef"].comp.formShow = false;
      } else {
        this.$refs["ShareholderRef"].getTableComp().closeExpandRow();

        let OtherContactTable = this.$refs["ShareholderRef"].getData('Shareholder_t');
        OtherContactTable[this.baseEditIndex] = this.baseData;
        this.$refs["ShareholderRef"].setData('Shareholder_t', OtherContactTable);
      }
    },
    //股东编辑
    ShareholderEditTableRow: function (scope) {
      //记录删除位置
      this.rmoveindex = scope.$index;
      //行下展开表单界面
      var row = scope.row;
      this.$refs["ShareholderRef"].getTableComp().expandRow(row);
      this.$refs["ShareholderRef"].comp.formShow = false;
      //ShareholderRef为表单数据对象参数
      this.$refs["ShareholderRef"].setData("Shareholder", row);

      // 备份数据
      this.baseData = JSON.parse(JSON.stringify(scope.row));
      this.baseEditIndex = scope.$index;
    },
    //股东信息删除提示
    ShareholderDeleteTableRow: function (scope) {
      this.ShareholderDelVisible = true;
      this.delId = scope.row.pk_cust_shareholder;
    },
    //股东信息删除
    ShareholderDeleteClick() {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/shareholder/deleteById",
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
          this.requestShareholder();
        } else {
          this.$message({
            message: res.data.error.errorMessage,
            type: "error"
          });
        }
      }).catch(e => {
        this.$message({
          message: "信息删除失败！",
          type: "error"
        });
      });
      this.ShareholderDelVisible = false;
      this.delId = "";
    }
  }
});

/***/ }),

/***/ 80:
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



/* harmony default export */ __webpack_exports__["default"] = ({
  //应用vue传过来接收参数
  props: ["pk_customer", "invisible"],
  data() {
    var oThis = this;
    //校验
    var validatecustomer = function (rule, value, callback) {
      //证件号码唯一校验
      if (rule.field === "identity_no") {
        if (value === "") {
          callback(new Error("证件号不能为空"));
        } else {
          var datam = {
            identity_no: value,
            pk_customer: oThis.pk_customer
          };
          oThis.$http({
            url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/customer/checkOnlyOne",
            headers: { "Content-Type": "application/json" },
            method: "post",
            data: JSON.parse(JSON.stringify(datam))
          }).then(res => {
            if (res.data.success === true) {
              callback();
            } else {
              callback(new Error(res.data.error.errorMessage));
            }
          }).catch(() => {
            callback(new Error("后台服务有误，请联系管理员！"));
          });
        }
      }
    };
    return {
      scrollDom: document.getElementsByClassName("view")[0],
      linkmanDelVisible: false,
      rmoveindex: "",
      delId: "",
      //联系人
      linkmanIcons: [{
        icon: "plus",
        click: function () {
          if (oThis.pk_customer === "") {
            oThis.$message({
              message: "请先保存基本信息",
              type: "error"
            });
            return;
          }
          var uitemplateComp = oThis.$refs.custlinkmanRef.comp;
          var table = uitemplateComp.$refs["OtherContact_t_ref"];
          table.closeExpandRow();
          uitemplateComp.formShow = true;
          //初始化值
          oThis.$refs.custlinkmanRef.setData("OtherContact", {
            // mobile:'13'
          });
          oThis.rmoveindex = "";
          uitemplateComp.$refs["OtherContact_ref"].resetFields();
        }
      }],
      funnode: "BT003",
      nexuskey: "linkman_busi_apply",
      custlinkmanData: {
        rules: {
          customer_name: [{ required: true, message: "请输入联系人名称", trigger: "blur" }]
        }
      },
      //渲染表格
      linkmanResetFun: function ($node) {
        if (oThis.invisible) {
          return;
        }

        var $table = this.getNodeById($node, "8xacfbstef6");
        //  $table.attr(':show-header','false');
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
      }
    };
  },
  //监听引用传参后实时变动
  computed: {
    currentpk_customer() {
      return this.pk_customer;
    }
  },
  //监听参数变动后方法
  watch: {
    pk_customer(val) {
      this.requestCustlinkman();
    }
  },
  //获取数据数据初始化操作
  created() {},
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
        this.requestCustlinkman();
      }
    },
    //请求客户联系人
    requestCustlinkman() {
      var url;
      url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/otherContact/page";
      var data = {
        pageNum: 0,
        pageSize: 0,
        searchParams: {
          searchMap: {
            custCondList: [{ key: "pk_customer", oper: "=", value: this.pk_customer }]
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
        this.originalValue = res.data.data.content;
        this.$refs["custlinkmanRef"].setData("OtherContact_t", JSON.parse(JSON.stringify(this.originalValue)));
      }).catch(() => {
        this.$message({
          message: "信息获取失败",
          type: "error"
        });
      });
    },
    //联系人取消按钮
    linkmanFormCancel: function (type) {
      debugger;
      this.rmoveindex = "";
      //关闭表单或者是下拉显示行
      if (type === "form") {
        this.$refs["custlinkmanRef"].comp.formShow = false;
      } else {
        this.$refs["custlinkmanRef"].getTableComp().closeExpandRow();
        let OtherContactTable = this.$refs.custlinkmanRef.getData('OtherContact_t');
        OtherContactTable[this.baseEditIndex] = this.baseData;
        this.$refs.custlinkmanRef.setData('OtherContact_t', OtherContactTable);
      }
    },
    //联系人主表保存
    linkmanFormConfirm: function () {
      //获取当前数据
      var data = this.$refs.custlinkmanRef.comp.OtherContact;
      data.pk_customer = this.pk_customer;
      //保存校验
      this.$refs.custlinkmanRef.comp.$refs["OtherContact_ref"].validate(valid => {
        if (valid) {
          this.$http({
            url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/otherContact/updateORinsert",
            headers: { "Content-Type": "application/json" },
            method: "post",
            data: JSON.parse(JSON.stringify(data))
          }).then(res => {
            if (res.data.success === true) {
              this.$message({
                message: "保存成功！",
                type: "success"
              });
              this.originalValue = res.data.data;
              //获取列表数组（根据表格数据对象参数获取相应的数组或对象）
              var linarraydata = this.$refs.custlinkmanRef.getData("OtherContact_t");
              /**@augments 移除位置 
               * @augments 移除个数
               * @augments 用新的对象替换（不传值则删除）
               */
              if (this.rmoveindex !== "") {
                linarraydata.splice(this.rmoveindex, 1, this.originalValue);
              } else {
                //加入数组开始
                linarraydata.unshift(this.originalValue);
              }
              //加入数组结尾
              // linarraydata.push(this.originalValue);
              //给对象赋值
              this.$refs.custlinkmanRef.setData("OtherContact_t", JSON.parse(JSON.stringify(linarraydata)));
              //隐藏详情列表
              this.$refs["custlinkmanRef"].comp.formShow = false;
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
      });
    },
    //联系人行编辑
    linkmanFormedit: function (scope) {
      //记录删除位置
      this.rmoveindex = scope.$index;
      //行下展开表单界面
      var row = scope.row;
      this.$refs["custlinkmanRef"].getTableComp().expandRow(row);
      this.$refs["custlinkmanRef"].comp.formShow = false;
      //OtherContact为表单数据对象参数
      this.$refs["custlinkmanRef"].setData("OtherContact", row);

      // 备份数据
      this.baseData = JSON.parse(JSON.stringify(scope.row));
      this.baseEditIndex = scope.$index;
    },
    //联系人删除提示
    linkmanFormdelete: function (scope) {
      this.linkmanDelVisible = true;
      this.delId = scope.row.pk_cust_other_contact;
    },
    //联系人删除方法
    linkmanDeleteClick() {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/otherContact/deleteById",
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
          //this.delDialogVisible = false;
          this.requestCustlinkman();
          // this.request(this.currentPage - 1, this.size);
        } else {
          this.$message({
            message: res.data.error.errorMessage,
            type: "error"
          });
        }
      }).catch(e => {
        this.$message({
          message: "信息删除失败！",
          type: "error"
        });
      });
      this.linkmanDelVisible = false;
      this.delId = "";
    }
  }
});

/***/ })

/******/ })});;
//# sourceMappingURL=creditmanufacturer.vue.ed405b8eaa3dd1c6f445.en.js.map