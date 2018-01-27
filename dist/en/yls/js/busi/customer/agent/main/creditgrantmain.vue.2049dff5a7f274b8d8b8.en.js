define("yls//busi/customer/agent/main/creditgrantmain.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 707);
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

/***/ 117:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 145:
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

/***/ 148:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "agentbaseTemplateRef",
    attrs: {
      "tplId": "baseTemplate",
      "funnode": _vm.agentbasefunnode,
      "nexuskey": _vm.agentbasenexuskey,
      "show-type": "table-form",
      "methods": _vm.formReSetMethods,
      "tplResetFun": _vm.templateTableFormResetFun,
      "tplData": _vm.customerData,
      "editable": _vm.agentEdit
    },
    on: {
      "form-confirm-click": _vm.agentbaseFormConfirm,
      "form-cancel-click": _vm.agentbaseFormCancel,
      "delete-table-click": _vm.tableDeleteClickRow,
      "search-table-click": _vm.updateagentbaseDataRow
    }
  }), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    model: {
      value: (_vm.custVisible),
      callback: function($$v) {
        _vm.custVisible = $$v
      },
      expression: "custVisible"
    }
  }, [_c('span', [_vm._v("确认删除该条记录 ？删除后无法恢复")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.custVisible = false, this.delId = ''
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.tableDeleteClick
    }
  }, [_vm._v("确 定")])], 1)]), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    model: {
      value: (_vm.isGetEntity),
      callback: function($$v) {
        _vm.isGetEntity = $$v
      },
      expression: "isGetEntity"
    }
  }, [_c('span', [_vm._v("输入客户已经存在，请确认是否带出并自动填入")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.isGetEntity = false, this.delId = ''
      }
    }
  }, [_vm._v("不 带")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.fillInDate
    }
  }, [_vm._v("带 出")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(75),
  /* template */
  __webpack_require__(148),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(117)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(76),
  /* template */
  __webpack_require__(145),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 196:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            //模版主键
            // pk_temp:'54bf78a0-6e0a-44d2-aeb8-f0c23c1c2a06',
            creditApplyfunnode: 'BT004',
            creditApplynexuskey: 'CreditApply',
            mixins: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["b" /* pagination */])()], //分页方法引入
            creditapplyListData: {},
            delDialogVisible: false,
            agentnameval: '',
            templateTableFormResetFun($node) {
                //获取table,此id为ui模板上面的表格Id
                let $table = this.getNodeById($node, 'sgoj12dnalh');
                //定义操作
                let operateArr = [
                // {
                //     icon:'pt-bianji',
                //     title:"查看",
                // },
                {
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
        tableApplyClick(scope) {
            let agentname = scope.row.agent_name;
            this.$emit("change-credit-grant", ['tocreditgrantinfo', agentname]);
        },

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
            location.hash = '/agentbaseadd/' + scope.row.agent_name;
        },
        // 申请授信按钮
        creditApply() {
            location.hash = '/operation/add';
        },

        //删除操作
        tableDeleteClick: function (scope) {
            debugger;
            this.delDialogVisible = true;
            this.pk_operation_protocol = scope.row.pk_operation_protocol;
            this.agentnameval = scope.row.agent_name;
        },

        //删除确定
        deleteConfirmClick() {
            debugger;
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

        request(n, s) {
            let data = {
                "orderList": [{
                    "direction": "desc",
                    "property": "ts"
                }],
                "pageNum": this.currentPage - 1,
                "pageSize": this.pageSize,
                "searchParams": {
                    "searchMap": {
                        'custCondList': [{ 'key': 'customer_class',
                            'oper': '=',
                            'value': 'yls_dev100000000ffv'
                        }],
                        'qtAggVO': this.sp
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
                this.$refs['creditapplyList-table'].setData('OperationProtocol_t', originalValue);
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

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__agentbaseinfo_vue__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__agentbaseinfo_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__agentbaseinfo_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linkmanpanel_vue__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linkmanpanel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__linkmanpanel_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Shareholderpanel_vue__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Shareholderpanel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Shareholderpanel_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__operation_info_vue__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__operation_info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__operation_info_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import {ylsBusi} from '../../../../../common/js/publicData.js';
//引入代理商相关列表





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'agentbaseinfo': __WEBPACK_IMPORTED_MODULE_0__agentbaseinfo_vue___default.a,
    'custlinkmanRef': __WEBPACK_IMPORTED_MODULE_1__linkmanpanel_vue___default.a,
    'ShareholderRef': __WEBPACK_IMPORTED_MODULE_2__Shareholderpanel_vue___default.a,
    'operationinfo': __WEBPACK_IMPORTED_MODULE_3__operation_info_vue___default.a
  },
  props: ['pkCustomerVal', 'creditgrant'],
  data() {
    let oThis = this;
    return {
      //显示的标题
      title: '',
      scrollDom: "ifbpScrollDom",
      pk_customer: '',
      credit_grant: '',
      customer_Edit: '',
      linkmanDelVisible: false,
      custbankDelVisible: false,
      ShareholderDelVisible: false,
      rmoveindex: "",
      delId: "",
      custVisible: false,
      none: [],
      //联系人
      agentIcons: [{
        icon: "plus",
        click: function () {
          debugger;
          // 重置新增数据
          if (oThis.pk_customer == "" || oThis.pk_customer == undefined) {
            oThis.$refs.agentbaseTemplateRef.$refs.agentbaseTemplateRef.resetFormData();
          } else if (oThis.pk_customer) {
            oThis.$message({
              message: "发起申请时不可添加代理商"
            });
            return;
          }
          debugger;
          // 显示新增区域
          oThis.$refs.agentbaseTemplateRef.$refs.agentbaseTemplateRef.getTableComp().closeExpandRow();
          oThis.$refs.agentbaseTemplateRef.$refs.agentbaseTemplateRef.comp.formShow = true;
          oThis.agentEdit = !oThis.agentEdit;
        }
      }],
      //代理商基本信息修改
      //级联参照
      corpResetFun: function ($node) {
        var $refNode1 = this.getNodeById($node, 'w85l2pcqcf'); //开户行省
        var $refNode2 = this.getNodeById($node, 'gu0cc609z7q');
        var $refNode3 = this.getNodeById($node, 'vijgevbe1li');

        if ($refNode1.length) {
          $refNode1.attr("v-on:trigger", "handleRefChange1");
        }
        if ($refNode2.length) {
          $refNode2.attr("v-on:trigger", "handleRefChange2");
        }
        if ($refNode3.length) {
          $refNode3.attr("v-on:trigger", "handleRefChange3");
        }
      },
      t_Methods: {
        handleRefChange1: function (type, data) {
          if (type === 'change') {
            var innerCode = data.value[0].refcode;
            oThis.$refs.baseTemplateRef1.comp.$refs.h_ref.changeQueryParams(innerCode);
          }
        },
        handleRefChange2: function (type, data) {
          if (type === 'change') {
            var innerCode = data.value[0].refcode;
            oThis.$refs.baseTemplateRef1.comp.$refs.m_ref.changeQueryParams(innerCode);
          }
        },
        handleRefChange3: function (type, data) {
          if (type === 'change') {
            var innerCode = data.value[0].refcode;
            oThis.$refs.baseTemplateRef1.comp.$refs.s_ref.changeQueryParams(innerCode);
          }
        }
      },

      agentPk: "72f361bd-34e3-42ec-8933-d4fce9b0cd29",
      agentEdit: false,
      //联系人修改
      linkmanIcons: [{
        icon: "plus",
        click: function () {
          if (oThis.pk_customer === "") {
            oThis.$message({
              message: "请先保存基本信息"
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
          if (oThis.pk_customer === "") {
            oThis.$message({
              message: "请先保存基本信息"
            });
            return;
          }
          oThis.$refs.ShareholderRef.$refs.ShareholderRef.getTableComp().closeExpandRow();
          // 重置新增数据
          oThis.$refs.ShareholderRef.$refs.ShareholderRef.resetFormData();
          // 显示新增区域
          oThis.$refs.ShareholderRef.$refs.ShareholderRef.comp.formShow = true;
        }
      }],
      // 合作协议
      OperationIcons: [{
        icon: "plus",
        click: function () {
          if (oThis.pk_customer === "") {
            oThis.$message({
              message: "请先保存基本信息"
            });
            return;
          } else if (oThis.pk_customer) {
            var requestPromise = oThis.$refs.operationTable.isExisted();
            requestPromise.then(retVal => {
              debugger;
              if (retVal == 1) {
                return;
              } else if (retVal == -1) {
                oThis.$refs.operationTable.$refs.operationTable.getTableComp().closeExpandRow();
                // 重置新增数据
                oThis.$refs.operationTable.$refs.operationTable.resetFormData();
                // 显示新增区域
                oThis.$refs.operationTable.$refs.operationTable.comp.formShow = true;
              }
            });
          }
        }
      }]

    };
  },
  //获取数据数据初始化操作
  created() {
    this.loadTitleData();
    debugger;
    this.pk_customer = this.pkCustomerVal;
  },
  //页面操作
  mounted() {},
  methods: {
    creditApply() {},
    //点击返回出发 
    goback() {
      this.$emit('change-credit-edit', 'tocreditgrantapply');
    },
    //  加载标题
    loadTitleData() {
      if (this.pkCustomer) {
        this.title = '代理商授信信息表 > 发起申请';
      } else {
        this.title = '代理商授信信息表 > 添加';
      }
    },
    // 代理商pk改变时触发
    changeagentbase(val) {
      if (val) {
        this.pk_customer = val;
      }
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

/***/ 249:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 276:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 299:
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
      "placeholder": "输入代理商名称即可搜索",
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
      "id": "creditapplyList"
    }
  }, [_c('ifbp-template', {
    ref: "creditapplyList-table",
    attrs: {
      "tplId": "creditapplyList-template",
      "funnode": _vm.creditApplyfunnode,
      "nexuskey": _vm.creditApplynexuskey,
      "tplData": _vm.creditapplyListData,
      "show-type": "table",
      "tplResetFun": _vm.templateTableFormResetFun
    },
    on: {
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
  }, [_vm._v("代理商授信信息表")])])
}]}

/***/ }),

/***/ 326:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-panel"
  }, [_c('div', {
    staticClass: "creditgrant-container"
  }, [_c('span', [_c('h2', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.title))])]), _vm._v(" "), _c('span', {
    staticClass: "fr"
  }, [_c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.goback
    }
  }, [_vm._v("回退")]), _vm._v(" "), _c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.creditApply
    }
  }, [_vm._v("申请授信")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "detail-main-container clearfix"
  }, [_c('ifbp-panel-group', {
    attrs: {
      "navbar": true,
      "base-scroll-top": 50,
      "scroll-dom": _vm.scrollDom,
      "base-nav-bar-top": 206
    }
  }, [_c('ifbp-panel', {
    attrs: {
      "id": "basePanel",
      "title": "代理商信息",
      "icons": _vm.agentIcons
    }
  }, [_c('agentbaseinfo', {
    ref: "agentbaseTemplateRef",
    attrs: {
      "pkCustomerVal": _vm.pkCustomerVal,
      "credit_grant": _vm.creditgrant,
      "editable": _vm.agentEdit
    },
    on: {
      "change-agent-base": _vm.changeagentbase
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
      "id": "none",
      "title": "财务报表信息",
      "icons": _vm.none
    }
  }, [_c('none', {
    ref: "none",
    attrs: {
      "pk_customer": _vm.pk_customer
    }
  })], 1), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "operationTableRef",
      "title": "合作协议",
      "icons": _vm.OperationIcons
    }
  }, [_c('operationinfo', {
    ref: "operationTable",
    attrs: {
      "pk_customer": _vm.pk_customer
    }
  })], 1), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "none",
      "title": "尽职调查",
      "icons": _vm.none
    }
  }, [_c('none', {
    ref: "none",
    attrs: {
      "pk_customer": _vm.pk_customer
    }
  })], 1), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "none",
      "title": "资料上传",
      "icons": _vm.none
    }
  }, [_c('none', {
    ref: "none",
    attrs: {
      "pk_customer": _vm.pk_customer
    }
  })], 1)], 1)], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(249)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(196),
  /* template */
  __webpack_require__(299),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(276)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(197),
  /* template */
  __webpack_require__(326),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__creditgrant_creditgrantapply_vue__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__creditgrant_creditgrantapply_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__creditgrant_creditgrantapply_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__creditgrant_creditgrantinfo_vue__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__creditgrant_creditgrantinfo_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__creditgrant_creditgrantinfo_vue__);
//
//
//
//
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
    'creditgrant': __WEBPACK_IMPORTED_MODULE_0__creditgrant_creditgrantapply_vue___default.a,
    'creditgrantedit': __WEBPACK_IMPORTED_MODULE_1__creditgrant_creditgrantinfo_vue___default.a
  },
  data() {
    return {
      activeName: 'first',
      istrue: true,
      pkCustomerVal: '',
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
        this.pkCustomerVal = val[1];
        this.creditgrant = 'creditgrant';
      }
    },
    changecreditedit(val) {
      if (val) {
        this.pkCustomerVal = '';
        this.istrue = true;
      }
    }
  }
});

/***/ }),

/***/ 48:
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
  props: ["pk_customer"],
  data() {
    let oThis = this;
    let validator = function (rule, value, callback) {};
    return {
      shareholderfunnode: 'BT004',
      shareholdernexuskey: 'agent-shareholder',
      ShareholderDelVisible: false,
      rmoveindex: "",
      delId: "",
      // 股东信息新增
      ShareholderIcons: [{
        icon: "plus",
        click: function () {
          // if(oThis.pk_customer===""){
          //   oThis.$message({
          //       message: "请先保存基本信息",
          //       type: "error"
          //     });
          //     return;
          // }
          let uitemplateComp = oThis.$refs.ShareholderRef.comp;
          let table = uitemplateComp.$refs["Shareholder_table"];
          table.closeExpandRow();
          uitemplateComp.bankaccount = {};
          uitemplateComp.formShow = true;
          oThis.rmoveindex = "";
        }
      }],
      ShareholderData: {
        rules: {
          pk_country: [{ required: true, message: "发货国家不能为空", trigger: "blur" }],
          pk_taxes: [{ required: true, message: "税类不能为空", trigger: "blur" }]
        }
      },
      ShareholderResetFun: function ($node) {
        let $table = this.getNodeById($node, "266ene4nt9n");

        //股东参照联动
        var $refNode1 = this.getNodeById($node, 'linx947hht9');

        if ($refNode1.length) {
          $refNode1.attr("v-on:trigger", "handleRefChange1");
        }
        // $table.attr(":show-header", "false");
        let operateArr = [{
          title: "编辑",

          icon: "edit"
        }, {
          title: "删除",

          icon: "delete"
        }];
        let operateHtml = this.getTableOperateHtml(operateArr);
        $table.prepend(operateHtml);
        return $node[0].outerHTML;
      },
      t_Methods: {
        handleRefChange1: function (type, data) {
          if (type === 'change') {

            this.$refs['Shareholder-form'].model.share_type = data.value[0].customer_type;
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
  //页面操作
  mounted() {
    this.request();
  },
  methods: {

    /**
       *   初始响应方法
       **/
    request() {
      debugger;
      if (this.pk_customer != "") {
        debugger;
        this.reqShhderByPkCustomer();
      } else {
        // this.requestShareholder();
        return;
      }
    },
    //请求股东信息
    requestShareholder() {
      let url;
      url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/shareholder/page";
      let data = {
        pageNum: 0,
        pageSize: 0,
        searchParams: {
          searchMap: {
            'pk_customer': this.pk_customer
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
      }).catch(e => {
        this.$message({
          message: "股东信息获取失败",
          type: "error"
        });
      });
    },
    //通过pk_customer获得实体并注入到表格
    reqShhderByPkCustomer() {
      debugger;
      this.$http({
        url: window.ctxs.cust + 'cust/shareholder/getListbycolumn',
        headers: { "Content-Type": "application/json" },
        method: 'post',
        data: this.pk_customer
      }).then(res => {
        debugger;
        let originalValue = res.data.data;
        this.$refs.ShareholderRef.setData("Shareholder_t", JSON.parse(JSON.stringify(originalValue)));
        this.$refs["ShareholderRef"].comp.formShow = false;
      }).catch(e => {
        console.error(e);
        this.$message({
          message: "股东信息详情获取失败",
          type: "error"
        });
      });
    },
    //股东情况保存
    ShareholderFormConfirm: function () {
      //获取当前数据
      let data = this.$refs.ShareholderRef.comp.Shareholder;
      data.pk_customer = this.pk_customer;
      let baseUrl = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */];
      //保存校验
      this.$refs.ShareholderRef.comp.$refs["Shareholder-form"].validate(valid => {
        if (valid) {
          this.$http({
            url: baseUrl + "cust/shareholder/updateORinsert",
            headers: { "Content-Type": "application/json" },
            method: "post",
            data: JSON.parse(JSON.stringify(data))
          }).then(res => {
            debugger;
            if (res.data.success === true) {
              this.$message({
                message: "保存成功！",
                type: "success"
              });
              this.originalValue = res.data.data;
              //获取列表数组（根据表格数据对象参数获取相应的数组或对象）
              let linarraydata = this.$refs.ShareholderRef.getData("Shareholder_t");
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
              this.$refs.ShareholderRef.comp.formShow = false;
            } else {
              this.$message({
                message: res.data.error.errorMessage,
                type: "error"
              });
            }
          }).catch(e => {
            debugger;
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
      }
    },
    //股东编辑
    ShareholderEditTableRow: function (scope) {
      //记录删除位置
      this.rmoveindex = scope.$index;
      //行下展开表单界面
      // let row = scope.row;
      // this.$refs["ShareholderRef"].getTableComp().expandRow(row);
      // this.$refs["ShareholderRef"].formShow = false;
      // //ShareholderRef为表单数据对象参数
      // this.$refs["ShareholderRef"].setData("Shareholder", row);

      this.$refs.ShareholderRef.getTableComp().expandRow(scope.row);
      this.$refs.ShareholderRef.comp.formShow = false;
      this.$refs.ShareholderRef.setData('Shareholder', scope.row);

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
        } else {
          this.$message({
            message: res.data.error.errorMessage,
            type: "error"
          });
        }
        this.reqShhderByPkCustomer();
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

/***/ 49:
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
  props: ["pk_customer"],
  data() {
    let oThis = this;
    //校验
    let validatecustomer = function (rule, value, callback) {

      //证件号码唯一校验
      if (rule.field === "identity_no") {
        if (value === "") {
          callback(new Error("证件号不能为空"));
        } else {
          let datam = {
            identity_no: value,
            pk_customer: oThis.pk_customer
          };
          oThis.$http({
            url: window.ctxs.cust + "cust/customer/checkOnlyOne",
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
      linkmanfunnode: 'BT004',
      linkmannexuskey: 'agent-linkman',
      linkmanDelVisible: false,
      rmoveindex: "",
      delId: "",
      custlinkmanData: {
        // rules: {
        //   customer_name: [
        //     { required: true, message: "请输入联系人名称", trigger: "blur" }
        //   ]
        // }
      },
      //渲染表格
      linkmanResetFun: function ($node) {
        let $refNode = this.getNodeById($node, 'ow80d1amej'); //开户行省

        if ($refNode.length) {
          $refNode.attr("v-on:trigger", "handleRefChange");
        }

        let $table = this.getNodeById($node, "z629xchuu6r");
        //  $table.attr(':show-header','false');
        let operateArr = [{
          title: "编辑",

          icon: "edit"
        }, {
          title: "删除",

          icon: "delete"
        }];
        let operateHtml = this.getTableOperateHtml(operateArr);
        $table.prepend(operateHtml);
        return $node[0].outerHTML;
      },
      t_Methods: {
        handleRefChange: function (type, data) {
          if (type === 'change') {

            let param = { 'key': data.value[0].innercode };
            oThis.$refs.custlinkmanRef.setData('cityParams', param);
          }
        }
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
      // this.requestCustlinkman();
      // this.requestLinkManByPkCustomer();
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
    /**
       *   初始响应方法
       **/
    request() {
      debugger;
      if (this.pk_customer != "") {
        this.requestLinkManByPkCustomer();
      } else {
        // this.requestCustlinkman();
        return;
      }
    },
    //请求客户联系人
    requestCustlinkman() {
      let url;
      url = window.ctxs.cust + "cust/otherContact/page";
      let data = {
        pageNum: 0,
        pageSize: 100,
        searchParams: {
          searchMap: {}
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

    //请求联系人基本信息详情
    requestLinkManByPkCustomer() {
      debugger;
      this.$http({
        url: window.ctxs.cust + 'cust/otherContact/getListbycolumn',
        headers: { "Content-Type": "application/json" },
        method: 'post',
        data: this.pk_customer
      }).then(res => {
        debugger;
        let originalValue = res.data.data;
        this.$refs.custlinkmanRef.setData("OtherContact_t", JSON.parse(JSON.stringify(originalValue)));
        this.$refs["custlinkmanRef"].comp.formShow = false;
        debugger;
      }).catch(e => {
        debugger;
        console.error(e);
        this.$message({
          message: "联系人信息详情获取失败",
          type: "error"
        });
      });
    },
    //联系人取消按钮
    linkmanFormCancel: function (type) {
      this.rmoveindex = "";
      //关闭表单或者是下拉显示行
      if (type === "form") {
        this.$refs["custlinkmanRef"].comp.formShow = false;
      } else {
        this.$refs["custlinkmanRef"].getTableComp().closeExpandRow();
      }
    },
    //联系人主表保存
    linkmanFormConfirm: function () {
      debugger;
      //获取当前数据
      let data = this.$refs.custlinkmanRef.comp.OtherContact;
      data.pk_customer = this.pk_customer;
      let baseUrl = window.ctxs.cust;
      //保存校验
      this.$refs.custlinkmanRef.comp.$refs["OtherContact-from"].validate(valid => {
        if (valid) {
          this.$http({
            url: baseUrl + "cust/otherContact/updateORinsert",
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
              let linarraydata = this.$refs.custlinkmanRef.getData("OtherContact_t");
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
      //新增的界面方式进行修改
      // let uitemplateComp = this.$refs.custlinkmanRef.comp;
      // let table = uitemplateComp.$refs["OtherContact_t_ref"];
      // table.closeExpandRow();
      // uitemplateComp.linkman = {};
      // uitemplateComp.formShow = true;
      // this.$refs.custlinkmanRef.comp.OtherContact = scope.row;

      //行下展开表单界面
      let row = scope.row;
      this.$refs["custlinkmanRef"].getTableComp().expandRow(row);
      this.$refs["custlinkmanRef"].formShow = false;
      //OtherContact为表单数据对象参数
      this.$refs["custlinkmanRef"].setData("OtherContact", row);
    },
    //联系人删除提示
    linkmanFormdelete: function (scope) {
      this.linkmanDelVisible = true;
      this.delId = scope.row.pk_cust_other_contact;
    },
    //联系人删除方法
    linkmanDeleteClick() {
      this.$http({
        url: window.ctxs.cust + "cust/otherContact/deleteById",
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
          this.requestLinkManByPkCustomer();
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

/***/ }),

/***/ 533:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 58:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 62:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 633:
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
      "label": "代理商授信申请",
      "name": "first"
    }
  }, [(_vm.istrue) ? _c('creditgrant', {
    on: {
      "change-credit-grant": _vm.changecreditgrant
    }
  }) : _c('creditgrantedit', {
    attrs: {
      "pkCustomerVal": _vm.pkCustomerVal,
      "creditgrant": _vm.creditgrant
    },
    on: {
      "change-credit-edit": _vm.changecreditedit
    }
  })], 1), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "已授信代理商",
      "name": "second"
    }
  }, [_vm._v("\n     已授信代理商\n  ")])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 66:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "custlinkmanRef",
    attrs: {
      "tplId": "linkmanTemplate",
      "funnode": _vm.linkmanfunnode,
      "nexuskey": _vm.linkmannexuskey,
      "tplData": _vm.custlinkmanData,
      "tplResetFun": _vm.linkmanResetFun,
      "show-type": "table-form",
      "methods": _vm.t_Methods
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

/***/ 70:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "ShareholderRef",
    attrs: {
      "tplId": "ShareholderTemplate",
      "funnode": _vm.shareholderfunnode,
      "nexuskey": _vm.shareholdernexuskey,
      "tplData": _vm.ShareholderData,
      "tplResetFun": _vm.ShareholderResetFun,
      "tplMethods": _vm.ShareholderTplMethods,
      "methods": _vm.t_Methods,
      "show-type": "table-form"
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

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(533)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(404),
  /* template */
  __webpack_require__(633),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(62)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(48),
  /* template */
  __webpack_require__(70),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(58)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(49),
  /* template */
  __webpack_require__(66),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 75:
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


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['pkCustomerVal', 'credit_grant', 'editable'],
  data() {

    let oThis = this;
    let validator = function (rule, value, callback) {};
    //校验
    let validatecustomer = function (rule, value, callback) {
      debugger;
      //证件号码唯一校验
      if (rule.field === "1111") {
        if (value === "") {
          callback(new Error("证件号不能为空"));
        } else {
          let datam = {
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
      //代理商名称
      if (rule.field === "cust_name") {
        if (value === '') {
          callback(new Error('代理商名称不能为空'));
        } else {
          oThis.agentByCustName(value);
          callback();
        }
      } else if (rule.field === 'org_codecertificate') {}
    };
    return {
      //显示的标题
      title: '',
      agentbasefunnode: 'BT004',
      agentbasenexuskey: 'agentbaseinfo',
      scrollDom: "ifbpScrollDom",
      pk_customer: '',
      rmoveindex: "",
      delId: "",
      custVisible: false,
      isGetEntity: false,
      fillData: '',
      //操作按钮
      templateTableFormResetFun: function ($node) {
        //获取table,此id为ui模板上面的表格Id
        let $table = this.getNodeById($node, "jkcwc96ndh8");
        //定义操作
        let operateArr = [{
          title: "查看",
          icon: "search"
        }, {
          title: "删除",
          icon: "delete"
        }];
        //获取操作按钮html片段
        let operateHtml = this.getTableOperateHtml(operateArr);
        $table.prepend(operateHtml);

        // 判断是否有所属厂商
        let $CustCorp_have_belongto = $node.find("el-select[v-model='CustCorp.have_belongto']");
        if ($CustCorp_have_belongto.length) {
          $CustCorp_have_belongto.attr("v-on:change", "havebelongtoFun");
        }
        // 所属厂商及所属事业部绑定属性
        let $manufacturer = $node.find("el-ref[field='manufacturer'], el-select[v-model='CustCorp.hava_busi_division']");
        $manufacturer.attr('v-bind:disabled', 'belongToIsDisabled');

        // 判断是否有三证或者一证  
        let $CustCorp_three_certifcates = $node.find("el-select[v-model='CustCorp.three_certifcates']");
        if ($CustCorp_three_certifcates.length) {
          $CustCorp_three_certifcates.attr("v-on:change", "threeCertifcatesFun");
        }
        debugger;
        // 三证属性绑定
        let $threeCertifcates = $node.find("el-input[v-model='CustCorp.org_codecertificate'], el-input[v-model='CustCorp.license_no'],el-input[v-model='CustCorp.tax_registercode']");
        $threeCertifcates.attr('v-bind:disabled', 'threeCertifcates');
        // 一证属性绑定
        let $oneCertifcates = $node.find("el-input[v-model='CustCorp.society_credit']");
        $oneCertifcates.attr('v-bind:disabled', 'oneCertifcates');

        return $node[0].outerHTML;
      },
      //代理商基本信息修改
      //级联参照
      // corpResetFun: function($node) {
      //   var $refNode1 = this.getNodeById($node, 'w85l2pcqcf');  //开户行省
      //    var $refNode2 = this.getNodeById($node, 'gu0cc609z7q');
      //     var $refNode3 = this.getNodeById($node, 'vijgevbe1li');


      //   if($refNode1.length) {
      //     $refNode1.attr("v-on:trigger", "handleRefChange1"); 
      //   }
      //   if($refNode2.length) {
      //     $refNode2.attr("v-on:trigger", "handleRefChange2"); 
      //   }
      //   if($refNode3.length) {
      //     $refNode3.attr("v-on:trigger", "handleRefChange3"); 
      //   }

      // },
      formReSetMethods: {
        // 三证或一证
        threeCertifcatesFun(data) {
          if (data && data !== '') {
            debugger;
            if (data == 'Y') {
              this.threeCertifcates = false;
              this.oneCertifcates = true;
            } else if (data == 'N') {
              this.oneCertifcates = false;
              this.threeCertifcates = true;
            } else {
              this.oneCertifcates = true;
              this.threeCertifcates = true;
            }
          }
        },
        // 是否有厂商
        havebelongtoFun(data) {
          if (data && data !== '') {
            if (data == "YES") {
              this.belongToIsDisabled = false;
            } else {
              this.belongToIsDisabled = true;
            }
          }
        }
      },
      t_Methods: {
        handleRefChange1: function (type, data) {
          if (type === 'change') {
            var innerCode = data.value[0].refcode;
            oThis.$refs.baseTemplateRef1.comp.$refs.h_ref.changeQueryParams(innerCode);
          }
        },
        handleRefChange2: function (type, data) {
          if (type === 'change') {
            var innerCode = data.value[0].refcode;
            oThis.$refs.baseTemplateRef1.comp.$refs.m_ref.changeQueryParams(innerCode);
          }
        },
        handleRefChange3: function (type, data) {
          if (type === 'change') {
            var innerCode = data.value[0].refcode;
            oThis.$refs.baseTemplateRef1.comp.$refs.s_ref.changeQueryParams(innerCode);
          }
        }
      },

      customerData: {
        customer: {},
        belongToIsDisabled: true, //所属厂商的disabled熟悉设置
        threeCertifcates: true, //判断是否有三证
        oneCertifcates: true, //判断是一证
        rules: {
          cust_name: [{ validator: validatecustomer, trigger: "blur" }], //代理商名称校验
          org_codecertificate: [{ validator: validatecustomer, trigger: "blur" }],
          cusotmer_class: []
        }
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
    },
    editable(val) {
      this.agentEdit = val;
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
      this.pk_customer = this.pkCustomerVal;
      //请求企业客户基本信息详情
      if (this.pk_customer === undefined || this.pk_customer === '') {
        this.pk_customer = '';
        this.agentEdit = true;
        // this.agentRequest();
        debugger;
        this.$refs.agentbaseTemplateRef.getTableComp().closeExpandRow();
        this.$refs.agentbaseTemplateRef.formShow = true;
        return;
      }
      if (this.credit_grant == "creditgrant") {
        if (this.pk_customer != "") {
          // this.requestCustBaseInfo();
          this.agentEdit = false;
          this.requestByPk();
        }
      }
    },
    //后台请求
    agentRequest() {
      let url;
      let baseUrl = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */];
      url = baseUrl + 'cust/corp/pageAgent';
      let data = {
        "orderList": [{
          "direction": "desc",
          "property": "ts"
        }],
        "pageNum": 0,
        "pageSize": 200,
        "searchParams": {
          "searchMap": {
            "creator": "102440"
          }
        }
      };
      this.$http({
        url: url,
        headers: { 'Content-Type': 'application/json' },
        method: "post",
        data: data,
        dataType: "json"
      }).then(res => {
        //UI模板表格名称
        let originalValue = res.data.data.content;
        this.$refs['agentbaseTemplateRef'].setData("CustCorp_t", JSON.parse(JSON.stringify(originalValue)));
        this.totalElements = res.data.data.totalElements; // 总条数
        this.size = res.data.data.size; // 每页的条数
      }).catch(e => {
        this.$message({
          message: "信息获取失败",
          type: "error"
        });
      });
    },
    // 客户回写
    agentByCustName(name) {
      debugger;
      let nameVal = name;
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'cust/corp/getEntityByCustName',
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        data: nameVal,
        dataType: 'json'
      }).then(res => {
        let originalValue = res.data.data;
        if (res.data.success == true && originalValue != null) {
          this.isGetEntity = true;
          this.fillData = originalValue; //给回写的数据赋值
        }
        this.agentEdit = true;
      }).catch(e => {
        console.log(e);
        this.$message({
          message: '信息获取失败',
          type: 'error'
        });
      });
    },
    // 带出后填入数据
    fillInDate() {
      let originalValue = this.fillData;
      this.$refs.agentbaseTemplateRef.setData('CustCorp', JSON.parse(JSON.stringify(originalValue)));
      let pk_customer = originalValue.pk_customer;
      this.$emit('change-agent-base', pk_customer);
      this.isGetEntity = false;
    },

    // 通过pk获取对象
    requestByPk() {
      let url;
      let baseUrl = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */];
      url = baseUrl + "cust/corp/getByPkCustomer";
      let data = this.pk_customer;
      this.$http({
        url: url,
        headers: { 'Content-Type': 'application/json' },
        method: "post",
        data: data,
        dataType: "json"
      }).then(res => {
        let originalValue = res.data.data;
        this.$refs.agentbaseTemplateRef.setData("CustCorp_t", JSON.parse(JSON.stringify([originalValue])));
        this.$refs.agentbaseTemplateRef.comp.formShow = false;
      }).catch(e => {
        this.$message({
          message: "代理商基本信息详情获取失败",
          type: "error"
        });
      });
    },

    // 弹出删除提示框
    tableDeleteClickRow: function (scope) {
      this.delId = scope.row.pk_cust_corp;
      // this.agentRequest();
      this.custVisible = true;
    },

    //确认后调用删除
    tableDeleteClick: function (scope) {
      debugger;
      // let delId = scope.row.pk_cust_customer;
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/corp/deleteCustcpAndCust",
        headers: { 'Content-Type': 'application/json' },
        method: "post",
        dataType: "json",
        data: this.delId
      }).then(res => {
        if (res.data.success === true) {
          this.$message({
            message: "删除成功",
            type: "success"
          });
          this.custVisible = false;
        } else {
          debugger;
          this.$message({
            message: res.data.error.errorMessage,
            type: "error"
          });
        }
        this.agentRequest();
      }).catch(e => {
        debugger;
        this.$message({
          message: "信息删除失败！",
          type: "error"
        });
      });
    },
    //代理商form取消按钮
    agentbaseFormCancel: function (type) {
      this.rmoveindex = "";
      //关闭表单或者是下拉显示行
      if (type === "form") {
        this.$refs.agentbaseTemplateRef.comp.formShow = false;
      } else {
        this.$refs.agentbaseTemplateRef.getTableComp().closeExpandRow();
      }
    },
    //代理商主表保存
    agentbaseFormConfirm: function () {
      debugger;
      //获取当前数据
      let data = this.$refs.agentbaseTemplateRef.comp.customer;
      let data1 = this.$refs.agentbaseTemplateRef.comp.CustCorp;
      let jsonCustomer = JSON.parse(JSON.stringify(data));
      //设置为企业客户
      jsonCustomer.customer_type = 'CORP';
      //客户设置为代理商
      jsonCustomer.cusotmer_class = 'yls_dev100000000ffv';
      let jsonCustCorpObj = JSON.parse(JSON.stringify(data1));
      jsonCustCorpObj.cust_type = 'CORP';
      jsonCustomer.customer_name = jsonCustCorpObj.cust_name;
      // let a=[data1];
      let a = [jsonCustCorpObj];
      data = jsonCustomer;
      data.cust_corp_list = a;
      console.log(data);
      let baseUrl = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */];
      //保存校验
      debugger;
      this.$refs.agentbaseTemplateRef.comp.$refs["CustCorp-form"].validate(valid => {
        if (valid) {
          this.$http({
            url: baseUrl + "cust/customer/orgAnddept",
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
              this.pk_customer = this.originalValue.pk_cust_customer;
              this.$emit('change-agent-base', this.pk_customer);
              this.agentEdit = false;
              this.agentRequest();
              debugger;
              this.$parent.$parent.$parent.$refs.operationTable.pk_customer = this.pk_customer;
              this.$parent.$parent.$parent.$refs.operationTable.reqOptByPkCustomer();
              //隐藏详情列表
              this.$refs.agentbaseTemplateRef.comp.formShow = false;
            } else {
              this.$message({
                message: res.data.error.errorMessage,
                type: "error"
              });
            }
          }).catch(e => {
            this.$message({
              message: "更新失败",
              type: "error"
            });
          });
        }
      });
    },

    // customerCancel() {
    //   this.agentEdit = false;
    //   // 重置value
    // },
    //代理商编辑
    updateagentbaseDataRow: function (scope) {
      //记录删除位置
      debugger;
      this.rmoveindex = scope.$index;
      this.$refs.agentbaseTemplateRef.getTableComp().expandRow(scope.row);
      this.$refs.agentbaseTemplateRef.comp.formShow = false;
      this.$refs.agentbaseTemplateRef.setData('CustCorp', scope.row);
      this.agentEdit = true;
      // 备份数据
      this.baseData = JSON.parse(JSON.stringify(scope.row));
      this.baseEditIndex = scope.$index;
    }

  }
});

/***/ }),

/***/ 76:
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
      funnode: 'BT004',
      nexusKey: 'OperationProtocol',
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
        }];
        let operateHtml = this.getTableOperateHtml(operateArr);
        $table.prepend(operateHtml);
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
      debugger;
      if (this.pk_customer != '') {
        this.reqOptByPkCustomer();
      } else {
        //  this.requestOperation();
        return;
      }
    },
    closeAddForm() {
      this.$refs['operationTable'].comp.formShow = false; //关闭添加表单事件
    },
    //请求合作协议信息
    requestOperation() {
      let data = {
        "orderList": [{
          "direction": "desc",
          "property": "ts"
        }],
        "pageNum": this.currentPage - 1,
        "pageSize": this.pageSize,
        "searchParams": {
          "searchMap": {
            'custCondList': [{ 'key': 'customer_class',
              'oper': '=',
              'value': 'yls_dev100000000ffv'
            }],
            'qtAggVO': this.sp
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
          message: '合作协议信息获取失败',
          type: 'error'
        });
      });
    },
    //根具pk_customer获取合作协议
    reqOptByPkCustomer() {
      debugger;
      let pk = this.pk_customer;
      this.$http({
        url: window.ctxs.cust + 'cust/operation/getbycolumn',
        headers: { "Content-Type": "application/json" },
        method: 'post',
        data: pk
      }).then(res => {
        let originalValue = res.data.data;
        this.$refs.operationTable.setData("OperationProtocol_t", JSON.parse(JSON.stringify([originalValue])));
        this.$refs["operationTable"].comp.formShow = false;
        debugger;
      }).catch(e => {
        debugger;
        console.error(e);
        this.$message({
          message: "合作协议信息获取失败",
          type: "error"
        });
      });
    },
    //合作协议保存
    operationFormConfirm() {
      //获取当前数据
      debugger;
      let url;
      let data = this.$refs.operationTable.comp.OperationProtocol;
      data.agent_name = this.pk_customer;
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'cust/operation/UpdateOrCreate',
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        data: JSON.parse(JSON.stringify(data))
      }).then(res => {
        debugger;
        this.editable = false;
        if (res.data.success === true) {
          this.$message({
            message: '保存成功',
            type: 'success'
          });
          let originalValue = res.data.data;
          //获取列表数组（根据表格数据对象参数获取相应的数组或对象）
          debugger;
          let linarraydata = this.$refs.operationTable.getData("OperationProtocol_t");
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
          //给对象赋值
          this.$refs.operationTable.setData("OperationProtocol_t", JSON.parse(JSON.stringify(linarraydata)));
          // this.requestOperation();
          //隐藏详情列表
          this.$refs['operationTable'].comp.formShow = false;
        } else {
          this.$message({
            message: res.data.error.errorMessage,
            type: "error"
          });
        }
      }).catch(e => {
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
      // this.pk_operation_protocol = scope.row.pk_operation_protocol;
      this.delId = scope.row.pk_operation_protocol;
    },
    //合作协议删除
    operationDeleteClick() {
      debugger;
      let id = this.delId;
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
    },
    // 判断是否已经有了合作协议
    isExisted() {
      let promise = new Promise((resolve, reject) => {
        debugger;
        let val = this.pk_customer;
        this.$http({
          url: window.ctxs.cust + 'cust/operation/isExistedByPk',
          headers: { "Content-Type": "application/json" },
          method: 'post',
          data: val
        }).then(res => {
          debugger;
          let retVal = res.data.data;
          if (retVal == 1) {
            this.$message({
              message: "代理商对应的协议已经存在，不可再添加"
            });
          }
          resolve(retVal);
        }).catch(e => {
          debugger;
          reject();
          console.error(e);
          this.$message({
            message: "合作协议信息获取失败",
            type: "error"
          });
        });
      });
      return promise;
    }
  }
});

/***/ })

/******/ })});;
//# sourceMappingURL=creditgrantmain.vue.2049dff5a7f274b8d8b8.en.js.map