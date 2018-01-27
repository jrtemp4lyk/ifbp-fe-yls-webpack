define("yls//busi/fin/src/gatheraudit/gatheraudit-list.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 735);
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

/***/ 432:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            funnode: "BT019",
            nexusKey: "gatherAuditMain",
            funnodedialog: "BT019",
            nexuskeydialog: "addDialog",

            gatherAuditListData: {},
            addDialogListData: {},
            totalElements: '',
            // 高级搜索
            // 搜索模板
            searchTemplate: {},
            // 条件列表
            conditionList: [],
            // 是否显示已选中标签
            showSelectedTags: true,
            // 当前打开的高级条件编号
            currentConditionCode: "",
            // 当前打开的高级条件内容
            currentCondition: null,
            //高级查询是否展示
            isHide: true,
            //快捷查询输入值
            search_input: "",
            //删除对话框
            delDialogVisible: false,
            // 自动核销Dialog
            autoAddDialogVisible: false,
            // 手工核销Dialog
            handAddDialogVisible: false,
            // 暂挂账Dialog
            batchSignDialogVisible: false,
            // 取消暂挂账Dialog
            cancelSignDialogVisible: false,
            // 待区域确认Dialog
            regionConfirmDialogVisible: false,
            // 取消核销Dialog
            cancelCheckDialogVisible: false,
            // 提交Dialog
            submitDialogVisible: false,
            // 审核Dialog
            checkDialogVisible: false,
            //待删除数据id
            delId: "",
            //showDeleteButton: true,
            //操作按钮
            templateTableFormResetFun: function ($node) {
                //获取table,此id为ui模板上面的表格Id
                var $table = $node.find("el-table");
                //定义操作
                var operateArr = [{
                    icon: "search",
                    title: "查看"
                }, {
                    title: '编辑',
                    icon: 'edit'
                }];
                //获取操作按钮html片段
                var operateHtml = this.getTableOperateHtml(operateArr);
                $table.append(operateHtml);
                return $node[0].outerHTML;
            },
            //操作按钮
            addDialogResetFun: function ($node) {
                //获取table,此id为ui模板上面的表格Id
                var $table = $node.find("el-table");
                //定义操作
                var operateArr = [];
                //获取操作按钮html片段
                var operateHtml = this.getTableOperateHtml(operateArr);
                $table.append(operateHtml);
                return $node[0].outerHTML;
            }
        };
    },
    created() {
        this.request(this.currentPage - 1, this.size);
    },
    methods: {
        // 高级搜索
        showSearch() {
            this.isHide = !this.isHide;
        },
        //快捷搜索
        searchInputEnterClick() {
            this.$message("搜索：" + this.search_input);
        },
        //查看按钮
        tableSearchClick(scope) {
            location.hash = "/gatheraudit/detail/" + scope.row.pk_gather_account;
        },
        //编辑按钮
        tableEditClick: function (scope) {
            location.hash = "/gatheraudit/detail/" + scope.row.pk_gather_account;
        },
        // 自动核销
        autoAdd() {
            this.autoAddDialogVisible = true;
        },
        //自动核销确定
        autoAddConfirm() {
            this.$http({
                url: '/yls-busi-web/fin/gatheraccount/autoAdd',
                headers: { 'Content-Type': 'application/json' },
                method: 'post',
                dataType: 'json'
            }).then(res => {
                if (res.data.success === true) {
                    this.$message({
                        message: '自动核销完毕！',
                        type: 'success'
                    });
                    this.autoAddDialogVisible = false;
                    this.request(this.currentPage - 1, this.size);
                } else {
                    this.$message({
                        message: res.data.msg,
                        type: "error"
                    });
                }
            }).catch(e => {
                this.$message({
                    message: '自动核销失败！',
                    type: 'error'
                });
            });
        },
        // 手工核销
        handAdd() {
            var tableSelections = this.$refs.gatherAudit_table.getTableComp().getSelection();
            if (tableSelections && tableSelections.length > 0) {
                this.addInoutPlanInfo(this.currentPage - 1, this.pageSize);
            } else {
                this.$message({
                    message: "至少选择一条进行核销！",
                    type: "error"
                });
            }
        },
        //点击手工核销按钮查看收支计划
        addInoutPlanInfo(n, s) {
            this.handAddDialogVisible = true;
            var url;
            var baseUrl = "/yls-busi-web";
            url = baseUrl + "/quote/inoutPlan/page";
            var data = {
                orderList: [{
                    direction: "desc",
                    property: "ts"
                }],
                pageNum: n,
                pageSize: s,
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
                //UI模板表格名称
                var originalValue = res.data.data.content;
                this.$refs["addDialogRef"].setData("QuoteInoutPlan_t", JSON.parse(JSON.stringify(originalValue)));
            }).catch(e => {
                console.log(e);
                this.$message({
                    message: "信息获取失败",
                    type: "error"
                });
            });
        },
        // 手工核销确定
        handAddDialogConfirm() {
            debugger;
            var tableSelections = this.$refs.gatherAudit_table.getTableComp().getSelection();
            var subSelections = this.$refs.addDialogRef.getTableComp().getSelection();
            var selIds = [];
            var subIds = [];
            if (subSelections && subSelections.length > 0) {
                subSelections.forEach((item, index) => {
                    subIds[index] = item.pk_quote_inout_plan;
                });
                if (tableSelections && tableSelections.length > 0) {
                    tableSelections.forEach((item, index) => {
                        selIds[index] = item.pk_gather_account;
                    });
                }
                var oData = {
                    strArray: selIds,
                    strArray2: subIds
                };
                this.$http({
                    url: '/yls-busi-web/fin/gatheraccount/handAdd',
                    headers: { 'Content-Type': 'application/json' },
                    method: 'post',
                    dataType: 'json',
                    data: oData
                }).then(res => {
                    if (res.data.success === true) {
                        this.$message({
                            message: '核销完成！',
                            type: 'success'
                        });
                        this.handAddDialogVisible = false;
                        this.request(this.currentPage - 1, this.size);
                    } else {
                        this.$message({
                            message: res.data.msg,
                            type: "error"
                        });
                    }
                }).catch(e => {
                    this.$message({
                        message: '核销失败！',
                        type: 'error'
                    });
                });
            } else {
                this.$message({
                    message: "未关联收支计划！",
                    type: "error"
                });
            }
        },
        // 暂挂账
        sign() {
            var tableSelections = this.$refs.gatherAudit_table.getTableComp().getSelection();
            if (tableSelections && tableSelections.length > 0) {
                this.batchSignDialogVisible = true;
            } else {
                this.$message({
                    message: "至少选择一条进行暂挂账处理！",
                    type: "error"
                });
            }
        },
        // 暂挂账确定
        batchSignConfirm() {
            var tableSelections = this.$refs.gatherAudit_table.getTableComp().getSelection();
            var selIds = [];
            if (tableSelections && tableSelections.length > 0) {
                tableSelections.forEach((item, index) => {
                    selIds[index] = item.pk_gather_account;
                });
            }
            var oData = {
                strArray: selIds
            };
            this.$http({
                url: '/yls-busi-web/fin/gatheraccount/sign',
                headers: { 'Content-Type': 'application/json' },
                method: 'post',
                dataType: 'json',
                data: oData
            }).then(res => {
                if (res.data.success === true) {
                    this.$message({
                        message: '挂账完成！',
                        type: 'success'
                    });
                    this.batchSignDialogVisible = false;
                    this.request(this.currentPage - 1, this.size);
                } else {
                    this.$message({
                        message: res.data.msg,
                        type: "error"
                    });
                }
            }).catch(e => {
                this.$message({
                    message: '挂账失败！',
                    type: 'error'
                });
            });
        },
        // 待区域确认
        regionConfirm() {
            var tableSelections = this.$refs.gatherAudit_table.getTableComp().getSelection();
            if (tableSelections && tableSelections.length > 0) {
                this.regionConfirmDialogVisible = true;
            } else {
                this.$message({
                    message: "请选择确认信息！",
                    type: "error"
                });
            }
        },
        // 待区域确认
        regionConfirmBtn() {
            var tableSelections = this.$refs.gatherAudit_table.getTableComp().getSelection();
            var selIds = [];
            if (tableSelections && tableSelections.length > 0) {
                tableSelections.forEach((item, index) => {
                    selIds[index] = item.pk_gather_account;
                });
            }
            var oData = {
                strArray: selIds
            };
            this.$http({
                url: '/yls-busi-web/fin/gatheraccount/regionConfirm',
                headers: { 'Content-Type': 'application/json' },
                method: 'post',
                dataType: 'json',
                data: oData
            }).then(res => {
                if (res.data.success === true) {
                    this.$message({
                        message: '已确认！',
                        type: 'success'
                    });
                    this.regionConfirmDialogVisible = false;
                    this.request(this.currentPage - 1, this.size);
                } else {
                    this.$message({
                        message: res.data.msg,
                        type: "error"
                    });
                }
            }).catch(e => {
                this.$message({
                    message: '确认失败！',
                    type: 'error'
                });
            });
        },
        // 取消暂挂账
        cancelSign() {
            var tableSelections = this.$refs.gatherAudit_table.getTableComp().getSelection();
            if (tableSelections && tableSelections.length > 0) {
                this.cancelSignDialogVisible = true;
            } else {
                this.$message({
                    message: "至少选择一条取消！",
                    type: "error"
                });
            }
        },
        // 取消暂挂账确定
        cancelSignConfirm() {
            var tableSelections = this.$refs.gatherAudit_table.getTableComp().getSelection();
            var selIds = [];
            if (tableSelections && tableSelections.length > 0) {
                tableSelections.forEach((item, index) => {
                    selIds[index] = item.pk_gather_account;
                });
            }
            var oData = {
                strArray: selIds
            };
            this.$http({
                url: '/yls-busi-web/fin/gatheraccount/cancelSign',
                headers: { 'Content-Type': 'application/json' },
                method: 'post',
                dataType: 'json',
                data: oData
            }).then(res => {
                if (res.data.success === true) {
                    this.$message({
                        message: '已取消挂账！',
                        type: 'success'
                    });
                    this.cancelSignDialogVisible = false;
                    this.request(this.currentPage - 1, this.size);
                } else {
                    this.$message({
                        message: res.data.msg,
                        type: "error"
                    });
                }
            }).catch(e => {
                this.$message({
                    message: '取消挂账失败！',
                    type: 'error'
                });
            });
        },
        // 取消关联
        cancelAdd() {
            this.cancelCheck();
        },
        // 取消核销
        cancelCheck() {
            var tableSelections = this.$refs.gatherAudit_table.getTableComp().getSelection();
            if (tableSelections && tableSelections.length > 0) {
                this.cancelCheckDialogVisible = true;
            } else {
                this.$message({
                    message: "至少选择一条取消！",
                    type: "error"
                });
            }
        },
        // 取消核销确定
        cancelCheckConfirm() {
            var tableSelections = this.$refs.gatherAudit_table.getTableComp().getSelection();
            var selIds = [];
            if (tableSelections && tableSelections.length > 0) {
                tableSelections.forEach((item, index) => {
                    selIds[index] = item.pk_gather_account;
                });
            }
            var oData = {
                strArray: selIds
            };
            this.$http({
                url: '/yls-busi-web/fin/gatheraccount/cancelCheck',
                headers: { 'Content-Type': 'application/json' },
                method: 'post',
                dataType: 'json',
                data: oData
            }).then(res => {
                if (res.data.success === true) {
                    this.$message({
                        message: '已取消！',
                        type: 'success'
                    });
                    this.cancelCheckDialogVisible = false;
                    this.request(this.currentPage - 1, this.size);
                } else {
                    this.$message({
                        message: res.data.msg,
                        type: "error"
                    });
                }
            }).catch(e => {
                this.$message({
                    message: '取消核销失败！',
                    type: 'error'
                });
            });
        },
        // 提交
        submit() {
            var tableSelections = this.$refs.gatherAudit_table.getTableComp().getSelection();
            if (tableSelections && tableSelections.length === 1) {
                this.submitDialogVisible = true;
            } else {
                this.$message({
                    message: "请选择一条数据！",
                    type: "error"
                });
            }
        },
        // 提交确定
        submitConfirm() {
            var tableSelections = this.$refs.gatherAudit_table.getTableComp().getSelection();
            var selIds = [];
            if (tableSelections && tableSelections.length > 0) {
                tableSelections.forEach((item, index) => {
                    selIds[index] = item.pk_gather_account;
                });
            }
            var oData = {
                strArray: selIds
            };
            this.$http({
                url: '/yls-busi-web/fin/gatheraccount/submit',
                headers: { 'Content-Type': 'application/json' },
                method: 'post',
                dataType: 'json',
                data: oData
            }).then(res => {
                if (res.data.success === true) {
                    this.$message({
                        message: '已提交！',
                        type: 'success'
                    });
                    this.submitDialogVisible = false;
                    this.request(this.currentPage - 1, this.size);
                } else {
                    this.$message({
                        message: res.data.msg,
                        type: "error"
                    });
                }
            }).catch(e => {
                this.$message({
                    message: '提交失败！',
                    type: 'error'
                });
            });
        },
        // 审核
        check() {
            var tableSelections = this.$refs.gatherAudit_table.getTableComp().getSelection();
            if (tableSelections && tableSelections.length === 1) {
                this.checkDialogVisible = true;
            } else {
                this.$message({
                    message: "请选择一条数据！",
                    type: "error"
                });
            }
        },
        // 审核确定
        checkConfirm() {
            var tableSelections = this.$refs.gatherAudit_table.getTableComp().getSelection();
            var selIds = [];
            if (tableSelections && tableSelections.length > 0) {
                tableSelections.forEach((item, index) => {
                    selIds[index] = item.pk_gather_account;
                });
            }
            var oData = {
                strArray: selIds
            };
            this.$http({
                url: '/yls-busi-web/fin/gatheraccount/check',
                headers: { 'Content-Type': 'application/json' },
                method: 'post',
                dataType: 'json',
                data: oData
            }).then(res => {
                if (res.data.success === true) {
                    this.$message({
                        message: '审核通过！',
                        type: 'success'
                    });
                    this.checkDialogVisible = false;
                    this.request(this.currentPage - 1, this.size);
                } else {
                    this.$message({
                        message: res.data.msg,
                        type: "error"
                    });
                }
            }).catch(e => {
                this.$message({
                    message: '审核失败！',
                    type: 'error'
                });
            });
        },
        // 联查凭证
        checkVouch() {
            var tableSelections = this.$refs.gatherAudit_table.getTableComp().getSelection();
            if (tableSelections && tableSelections.length === 1) {
                this.checkVouchConfirm();
            } else {
                this.$message({
                    message: "请选择一条数据！",
                    type: "error"
                });
            }
        },
        // 联查凭证确定
        checkVouchConfirm() {
            var tableSelections = this.$refs.gatherAudit_table.getTableComp().getSelection();
            var selIds = [];
            if (tableSelections && tableSelections.length > 0) {
                tableSelections.forEach((item, index) => {
                    selIds[index] = item.pk_gather_account;
                });
            }
            var oData = {
                strArray: selIds
            };
            this.$http({
                url: '/yls-busi-web/fin/gatheraccount/checkVouch',
                headers: { 'Content-Type': 'application/json' },
                method: 'post',
                dataType: 'json',
                data: oData
            }).then(res => {
                if (res.data.success === true) {
                    this.request(this.currentPage - 1, this.size);
                } else {
                    this.$message({
                        message: res.data.msg,
                        type: "error"
                    });
                }
            }).catch(e => {
                this.$message({
                    message: '暂无凭证！',
                    type: 'error'
                });
            });
        },
        //每页显示条数改变
        handleSizeChange(sizeVal) {
            this.size = window.pageSize = sizeVal;
            var maxPage = Math.ceil(this.totalSize / sizeVal);
            if (maxPage >= this.currentPage) {
                this.request(this.currentPage - 1, this.size);
            }
        },
        //当前页发生改变
        handleCurrentChange(currVal) {
            this.currentPage = currVal;
            this.request(this.currentPage - 1, this.size);
        },
        //后台请求
        request(n, s) {
            var url;
            var baseUrl = "/yls-busi-web";
            url = baseUrl + "/fin/gatheraccount/page";
            var data = {
                orderList: [{
                    direction: "desc",
                    property: "ts"
                }],
                pageNum: n,
                pageSize: s,
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
                // UI模板表格名称
                var originalValue = res.data.data.content;
                this.$refs["gatherAudit_table"].setData("GatherAccount_t", JSON.parse(JSON.stringify(originalValue)));
                this.totalElements = res.data.data.totalElements; // 总条数
                console.log(res.data.data.size);
                this.size = res.data.data.size; // 每页的条数
            }).catch(e => {
                console.log(e);
                this.$message({
                    message: "信息获取失败",
                    type: "error"
                });
            });
        }
    }
});

/***/ }),

/***/ 507:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 607:
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
      "click": _vm.autoAdd
    }
  }, [_vm._v("自动核销")]), _vm._v(" "), _c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.handAdd
    }
  }, [_vm._v("手工核销")]), _vm._v(" "), _c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.cancelAdd
    }
  }, [_vm._v("取消关联")]), _vm._v(" "), _c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.cancelCheck
    }
  }, [_vm._v("取消核销")]), _vm._v(" "), _c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.sign
    }
  }, [_vm._v("暂挂账")]), _vm._v(" "), _c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.cancelSign
    }
  }, [_vm._v("取消暂挂账")]), _vm._v(" "), _c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.regionConfirm
    }
  }, [_vm._v("待区域确认")]), _vm._v(" "), _c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("提交")]), _vm._v(" "), _c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.check
    }
  }, [_vm._v("复核")]), _vm._v(" "), _c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.checkVouch
    }
  }, [_vm._v("联查凭证")])], 1), _vm._v(" "), _c('div', {
    staticClass: "fr"
  }, [_c('el-input', {
    attrs: {
      "placeholder": "xxxx",
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
    staticClass: "list-main-container clearfix",
    attrs: {
      "id": "gatherAuditList"
    }
  }, [_c('ifbp-template', {
    ref: "gatherAudit_table",
    attrs: {
      "tplId": "gatherAudit-template",
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexusKey,
      "tplData": _vm.gatherAuditListData,
      "show-type": "table",
      "tplResetFun": _vm.templateTableFormResetFun
    },
    on: {
      "search-table-click": _vm.tableSearchClick,
      "edit-table-click": _vm.tableEditClick
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
      "update:visible": function (val) { return _vm.autoAddDialogVisible = val; }
    },
    model: {
      value: (_vm.autoAddDialogVisible),
      callback: function($$v) {
        _vm.autoAddDialogVisible = $$v
      },
      expression: "autoAddDialogVisible"
    }
  }, [_c('span', [_vm._v("是否确定自动核销？")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.autoAddDialogVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.autoAddConfirm
    }
  }, [_vm._v("确 定")])], 1)]), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "手工核销",
      "modal": true,
      "size": "large"
    },
    on: {
      "update:visible": function (val) { return _vm.handAddDialogVisible = val; }
    },
    model: {
      value: (_vm.handAddDialogVisible),
      callback: function($$v) {
        _vm.handAddDialogVisible = $$v
      },
      expression: "handAddDialogVisible"
    }
  }, [_c('ifbp-template', {
    ref: "addDialogRef",
    attrs: {
      "tplId": "addDialogid",
      "funnode": _vm.funnodedialog,
      "nexuskey": _vm.nexuskeydialog,
      "tplData": _vm.addDialogListData,
      "tplResetFun": _vm.addDialogResetFun,
      "show-type": "table"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.handAddDialogVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.handAddDialogConfirm
    }
  }, [_vm._v("确 定")])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    on: {
      "update:visible": function (val) { return _vm.batchSignDialogVisible = val; }
    },
    model: {
      value: (_vm.batchSignDialogVisible),
      callback: function($$v) {
        _vm.batchSignDialogVisible = $$v
      },
      expression: "batchSignDialogVisible"
    }
  }, [_c('span', [_vm._v("确认挂账所选数据？")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.batchSignDialogVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.batchSignConfirm
    }
  }, [_vm._v("确 定")])], 1)]), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    on: {
      "update:visible": function (val) { return _vm.cancelSignDialogVisible = val; }
    },
    model: {
      value: (_vm.cancelSignDialogVisible),
      callback: function($$v) {
        _vm.cancelSignDialogVisible = $$v
      },
      expression: "cancelSignDialogVisible"
    }
  }, [_c('span', [_vm._v("确认取消暂挂账？")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.cancelSignDialogVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.cancelSignConfirm
    }
  }, [_vm._v("确 定")])], 1)]), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    on: {
      "update:visible": function (val) { return _vm.regionConfirmDialogVisible = val; }
    },
    model: {
      value: (_vm.regionConfirmDialogVisible),
      callback: function($$v) {
        _vm.regionConfirmDialogVisible = $$v
      },
      expression: "regionConfirmDialogVisible"
    }
  }, [_c('span', [_vm._v("确认该笔收款？")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.regionConfirmDialogVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.regionConfirmBtn
    }
  }, [_vm._v("确 定")])], 1)]), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    on: {
      "update:visible": function (val) { return _vm.cancelCheckDialogVisible = val; }
    },
    model: {
      value: (_vm.cancelCheckDialogVisible),
      callback: function($$v) {
        _vm.cancelCheckDialogVisible = $$v
      },
      expression: "cancelCheckDialogVisible"
    }
  }, [_c('span', [_vm._v("确认取消所选数据？")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.cancelCheckDialogVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.cancelCheckConfirm
    }
  }, [_vm._v("确 定")])], 1)]), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    on: {
      "update:visible": function (val) { return _vm.checkDialogVisible = val; }
    },
    model: {
      value: (_vm.checkDialogVisible),
      callback: function($$v) {
        _vm.checkDialogVisible = $$v
      },
      expression: "checkDialogVisible"
    }
  }, [_c('span', [_vm._v("确认审核该条数据？")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.checkDialogVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.checkConfirm
    }
  }, [_vm._v("确 定")])], 1)]), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    on: {
      "update:visible": function (val) { return _vm.submitDialogVisible = val; }
    },
    model: {
      value: (_vm.submitDialogVisible),
      callback: function($$v) {
        _vm.submitDialogVisible = $$v
      },
      expression: "submitDialogVisible"
    }
  }, [_c('span', [_vm._v("确认提交该条数据？")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.submitDialogVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.submitConfirm
    }
  }, [_vm._v("确 定")])], 1)])], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title-container"
  }, [_c('h2', {
    staticClass: "name"
  }, [_vm._v("收款核销")])])
}]}

/***/ }),

/***/ 735:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(507)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(432),
  /* template */
  __webpack_require__(607),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

/******/ })});;
//# sourceMappingURL=gatheraudit-list.vue.ce6269e1085def3791aa.en.js.map