define("yls//sale/salemanage/src/sale-info.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 789);
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

/***/ 237:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    //应用vue传过来接收参数
    props: ["pk_sale_info"],
    data() {
        var oThis = this;
        return {
            scrollDom: document.getElementsByClassName("view")[0],
            delId: "",
            projectOperationPlanFunnode: "YLSBT003",
            projectOperationPlanNexusKey: "project_operation_plan",
            projectOperationPlanEdit: false,
            projectOperationPlanCacheData: '',
            projectOperationPlanData: {
                rules: {}
            }
        };
    },

    //页面操作
    mounted() {
        this.request();
    },

    methods: {
        request() {
            if (this.pk_sale_info) {
                this.requestProjectOperationPlan();
            }
        },

        //请求项目操作方案数据
        requestProjectOperationPlan() {
            var url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["a" /* ylsSale */] + "sale/projectOperationPlan/getByParentId";
            this.$http({
                url: url,
                headers: { "Content-Type": "application/json" },
                method: "post",
                data: this.pk_sale_info,
                dataType: "json"
            }).then(res => {
                this.$refs.projectOperationPlanRef.setData("ProjectOperationPlan", res.data.data);
                //列表数据缓存
                this.projectOperationPlanCacheData = JSON.parse(JSON.stringify(this.$refs.projectOperationPlanRef.getData('ProjectOperationPlan')));
            }).catch(() => {
                this.$message({
                    message: "项目操作方案信息获取失败",
                    type: "error"
                });
            });
        },

        //取消按钮
        projectOperationPlanFormCancel: function (type) {
            this.projectOperationPlanEdit = false;
            //还原数据
            this.$refs.projectOperationPlanRef.setData('ProjectOperationPlan', this.projectOperationPlanCacheData);
        },

        //保存
        projectOperationPlanFormConfirm: function () {
            //获取当前数据
            let url = "";
            var data = this.$refs.projectOperationPlanRef.comp.ProjectOperationPlan;
            data.pk_sale_info = this.pk_sale_info;
            if (data.pk_prj_operation_plan) {
                url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["a" /* ylsSale */] + '/sale/projectOperationPlan/update';
            } else {
                url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["a" /* ylsSale */] + '/sale/projectOperationPlan/create';
            }
            this.$http({
                url: url,
                headers: { "Content-Type": "application/json" },
                method: "post",
                data: JSON.parse(JSON.stringify(data))
            }).then(res => {
                if (res.data.success === true) {
                    this.$message({
                        message: "保存成功！",
                        type: "success"
                    });
                    this.projectOperationPlanEdit = false;
                    this.$refs.projectOperationPlanRef.setData("ProjectOperationPlan", res.data.data);
                    //列表数据缓存
                    this.projectOperationPlanCacheData = JSON.parse(JSON.stringify(this.$refs.projectOperationPlanRef.getData('ProjectOperationPlan')));
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
    }
});

/***/ }),

/***/ 238:
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

    props: ["pk_sale_info"],
    data() {
        var oThis = this;
        return {
            scrollDom: document.getElementsByClassName("view")[0],
            workLogDelVisible: false,
            delId: "",
            workLogFunnode: "YLSBT003",
            workLogNexusKey: "sale_work_log",
            workLogData: {
                rules: {}
            },
            workLogListSize: '',
            workLogCacheData: '',
            workLogResetFun: function ($node) {
                var $table = $node.find("el-table");
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

    //获取数据初始化操作
    created() {},

    //页面操作
    mounted() {
        this.request();
    },

    watch: {
        workLogListSize(val) {
            this.$emit('workLogSizeListener', val);
        }
    },

    methods: {
        request() {
            if (this.pk_sale_info) {
                this.requestWorkLog();
            }
        },

        //请求工作日志表格数据
        requestWorkLog() {
            var url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["a" /* ylsSale */] + "/sale/workLog/page";
            var data = {
                "orderList": [{
                    "direction": "desc",
                    "property": "ts"
                }],
                pageNum: 0,
                pageSize: 0,
                searchParams: {
                    searchMap: {
                        'pk_sale_info': this.pk_sale_info
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
                this.workLogData = res.data.data.content;
                this.workLogListSize = res.data.data.totalElements;
                this.$refs["workLogRef"].setData("WorkLog_t", JSON.parse(JSON.stringify(this.workLogData)));

                //列表数据缓存
                this.workLogCacheData = JSON.parse(JSON.stringify(this.$refs.workLogRef.getData('WorkLog_t')));
            }).catch(() => {
                this.$message({
                    message: "信息获取失败",
                    type: "error"
                });
            });
        },

        //工作日志取消按钮
        workLogFormCancel: function (type) {
            //关闭表单或者下拉显示行
            if (type === "form") {
                this.$refs["workLogRef"].comp.formShow = false;
            } else {
                this.$refs["workLogRef"].getTableComp().closeExpandRow();
            }

            //还原数据
            this.$refs.workLogRef.setData('WorkLog_t', this.workLogCacheData);
        },

        //工作日志保存
        workLogFormConfirm: function () {
            //获取当前数据
            let url = "";
            var data = this.$refs.workLogRef.comp.WorkLog;
            data.pk_sale_info = this.pk_sale_info;
            if (data.pk_work_log) {
                url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["a" /* ylsSale */] + '/sale/workLog/update';
            } else {
                url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["a" /* ylsSale */] + '/sale/workLog/create';
            }
            this.$http({
                url: url,
                headers: { "Content-Type": "application/json" },
                method: "post",
                data: JSON.parse(JSON.stringify(data))
            }).then(res => {
                if (res.data.success === true) {
                    this.$message({
                        message: "保存成功！",
                        type: "success"
                    });
                    this.requestWorkLog();
                    this.$refs["workLogRef"].comp.formShow = false;
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
        },

        //工作日志行编辑
        workLogEdit: function (scope) {
            //行下展开表单页面
            var row = scope.row;
            this.$refs.workLogRef.getTableComp().expandRow(row);
            this.$refs.workLogRef.formShow = false;

            //workLog为表单数据对象参数
            this.$refs.workLogRef.setData("WorkLog", row);

            //备份，点击取消时还原
            this.workLogCacheData = JSON.parse(JSON.stringify(this.$refs.workLogRef.getData('WorkLog_t')));
        },

        //工作日志行删除提示
        workLogDelete: function (scope) {
            this.workLogDelVisible = true;
            this.delId = scope.row.pk_work_log;
        },

        //工作日志行删除方法
        workLogDelClick() {
            this.$http({
                url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["a" /* ylsSale */] + "/sale/workLog/deleteById",
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
                    this.requestWorkLog();
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
            this.workLogDelVisible = false;
            this.delId = "";
        }
    }
});

/***/ }),

/***/ 278:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 288:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 328:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "workLogRef",
    attrs: {
      "tplId": "workLog",
      "funnode": _vm.workLogFunnode,
      "nexuskey": _vm.workLogNexusKey,
      "tplData": _vm.workLogData,
      "tplResetFun": _vm.workLogResetFun,
      "show-type": "table-form"
    },
    on: {
      "form-confirm-click": _vm.workLogFormConfirm,
      "form-cancel-click": _vm.workLogFormCancel,
      "edit-table-click": _vm.workLogEdit,
      "delete-table-click": _vm.workLogDelete
    }
  }), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    model: {
      value: (_vm.workLogDelVisible),
      callback: function($$v) {
        _vm.workLogDelVisible = $$v
      },
      expression: "workLogDelVisible"
    }
  }, [_c('span', [_vm._v("确认删除该条记录？删除后无法恢复。")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.workLogDelVisible = false, this.delId = ''
      }
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.workLogDelClick
    }
  }, [_vm._v("确定")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 338:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "projectOperationPlanRef",
    attrs: {
      "tplId": "projectOperationPlan",
      "funnode": _vm.projectOperationPlanFunnode,
      "nexuskey": _vm.projectOperationPlanNexusKey,
      "tplData": _vm.projectOperationPlanData,
      "show-type": "form",
      "editable": _vm.projectOperationPlanEdit
    },
    on: {
      "form-confirm-click": _vm.projectOperationPlanFormConfirm,
      "form-cancel-click": _vm.projectOperationPlanFormCancel
    }
  }), _vm._v(" "), (_vm.projectOperationPlanEdit) ? _c('div', {
    staticClass: "form-button-div"
  }, [_c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "default"
    },
    on: {
      "click": _vm.projectOperationPlanFormCancel
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.projectOperationPlanFormConfirm
    }
  }, [_vm._v("保存")])], 1) : _vm._e()], 1)
},staticRenderFns: []}

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(288)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(237),
  /* template */
  __webpack_require__(338),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(278)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(238),
  /* template */
  __webpack_require__(328),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__work_log_vue__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__work_log_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__work_log_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_operation_plan_vue__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_operation_plan_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__project_operation_plan_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        'workLogRef': __WEBPACK_IMPORTED_MODULE_0__work_log_vue___default.a,
        'projectOperationPlanRef': __WEBPACK_IMPORTED_MODULE_1__project_operation_plan_vue___default.a
    },
    data() {
        var oThis = this;

        //校验
        let validateCreateCode = function (rule, value, callback) {
            if (rule.field === 'credit_code' && oThis.customerCreditCode != value) {
                let data = { 'society_credit': value };
                oThis.$http({
                    url: '/yls-busi-web/cust/customer/validateInputSociety',
                    headers: { 'Content-Type': 'application/json' },
                    method: 'post',
                    data: data
                }).then(res => {
                    if (res.data.data) {
                        callback(new Error('社会统一信用码已存在'));
                    } else {
                        callback();
                    }
                }).catch(e => {
                    console.error(e);
                });
            } else {
                callback();
            }
        };

        return {
            scrollDom: document.getElementsByClassName('view')[0],
            saleInfoFunnode: 'YLSBT003',
            saleInfoNexusKey: 'sale-manage',
            pk_sale_info: '',
            saleInfoCacheData: '',
            nationalEconomyClassificationRefCache: [],
            districtRefCache: [],
            customerCreditCode: '',
            saleInfoData: {
                b_param: {},
                m_param: {},
                s_param: {},
                p_param: {},
                c_param: {},
                d_param: {},
                rules: {
                    credit_code: [{ validator: validateCreateCode, trigger: 'blur' }]
                }
            },
            saleInfoEdit: false,
            saleInfoResetFun($node) {
                //客户参照
                let customerNode = this.getNodeById($node, '1un1k87kbw5');
                if (customerNode.length) {
                    customerNode.attr('v-on:trigger', 'customerRefChange');
                }

                //行业分类参照
                let industryNode = this.getNodeById($node, 'h6iudcgmaqi');
                let industryBNode = this.getNodeById($node, 'hkppgmenust');
                let industryMNode = this.getNodeById($node, 'sshgu35ctbe');
                if (industryNode.length) {
                    industryNode.attr('v-on:trigger', 'industryRefChange');
                }
                if (industryBNode.length) {
                    industryBNode.attr('v-on:trigger', 'industryBRefChange');
                }
                if (industryMNode.length) {
                    industryMNode.attr('v-on:trigger', 'industryMRefChange');
                }

                //地区参照
                let countryNode = this.getNodeById($node, 'dbqroyz7x6');
                let provinceNode = this.getNodeById($node, 'gj8qu7gi8ao');
                let cityNode = this.getNodeById($node, 'tuynwyr1byg');
                if (countryNode.length) {
                    countryNode.attr('v-on:trigger', 'countryRefChange');
                }
                if (provinceNode.length) {
                    provinceNode.attr('v-on:trigger', 'provinceRefChange');
                }
                if (cityNode.length) {
                    cityNode.attr('v-on:trigger', 'cityRefChange');
                }

                //营销状态
                let saleStatusNode = this.getNodeById($node, '7ltabgy7c8r');
                if (saleStatusNode.length) {
                    saleStatusNode.attr('v-on:visible-change', 'saleStatusBoxShow');
                }
            },
            ref_Methods: {
                //客户参照
                customerRefChange: function (type, data) {
                    if (type === 'change') {
                        let customer = data.value[0];
                        let saleInfo = this.$refs.saleInfo_ref.model;
                        saleInfo.cust_code = customer.customer_code;
                        saleInfo.credit_code = customer.society_credit;
                        saleInfo.establish_date = customer.establish_date;
                        saleInfo.capital = customer.capital;
                        saleInfo.control_shareholder = customer.controlshareholder;
                        saleInfo.pk_legal_representative = customer.pk_legal_person;
                        saleInfo.related_trade_project = customer.link_trade;
                        saleInfo.business_address = customer.busi_addr;
                        oThis.customerCreditCode = customer.society_credit;

                        //国民经济参照赋值
                        let necrcArr = oThis.nationalEconomyClassificationRefCache;
                        saleInfo.industry = customer.industry;
                        for (let i in necrcArr) {
                            if (necrcArr[i].id == customer.industry) {
                                saleInfo.beanMap.industry_ref = {};
                                saleInfo.beanMap.industry_ref[customer.industry] = necrcArr[i];
                                break;
                            }
                        }
                        saleInfo.industry_b = customer.industry1;
                        for (let i in necrcArr) {
                            if (necrcArr[i].id == customer.industry1) {
                                saleInfo.beanMap.industry_b_ref = {};
                                saleInfo.beanMap.industry_b_ref[customer.industry1] = necrcArr[i];
                                break;
                            }
                        }
                        saleInfo.industry_m = customer.industry2;
                        for (let i in necrcArr) {
                            if (necrcArr[i].id == customer.industry2) {
                                saleInfo.beanMap.industry_m_ref = {};
                                saleInfo.beanMap.industry_m_ref[customer.industry2] = necrcArr[i];
                                break;
                            }
                        }
                        saleInfo.industry_s = customer.industry3;
                        for (let i in necrcArr) {
                            if (necrcArr[i].id == customer.industry3) {
                                saleInfo.beanMap.industry_s_ref = {};
                                saleInfo.beanMap.industry_s_ref[customer.industry3] = necrcArr[i];
                                break;
                            }
                        }

                        //地区参照
                        let distriArr = oThis.districtRefCache;
                        saleInfo.country = customer.reg_country;
                        for (let i in distriArr) {
                            if (distriArr[i].id == customer.reg_country) {
                                saleInfo.beanMap.country_ref = {};
                                saleInfo.beanMap.country_ref[customer.reg_country] = distriArr[i];
                                break;
                            }
                        }

                        saleInfo.province = customer.reg_province;
                        for (let i in distriArr) {
                            if (distriArr[i].id == customer.reg_province) {
                                saleInfo.beanMap.province_ref = {};
                                saleInfo.beanMap.province_ref[customer.reg_province] = distriArr[i];
                                break;
                            }
                        }

                        saleInfo.city = customer.reg_city;
                        for (let i in distriArr) {
                            if (distriArr[i].id == customer.reg_city) {
                                saleInfo.beanMap.city_ref = {};
                                saleInfo.beanMap.city_ref[customer.reg_city] = distriArr[i];
                                break;
                            }
                        }

                        saleInfo.district = customer.reg_district;
                        for (let i in distriArr) {
                            if (distriArr[i].id == customer.reg_district) {
                                saleInfo.beanMap.district_ref = {};
                                saleInfo.beanMap.district_ref[customer.reg_district] = distriArr[i];
                                break;
                            }
                        }
                        debugger;
                        oThis.$refs.saleInfoRef.setData('SaleInfo', saleInfo);
                    }
                },
                //行业分类参照
                industryRefChange: function (type, data) {
                    if (type === 'change') {
                        let refParam = { 'key': data.value[0].innercode };
                        oThis.$refs.saleInfoRef.setData('b_param', refParam);
                    }
                },
                industryBRefChange: function (type, data) {
                    if (type === 'change') {
                        let refParam = { 'key': data.value[0].innercode };
                        oThis.$refs.saleInfoRef.setData('m_param', refParam);
                    }
                },
                industryMRefChange: function (type, data) {
                    if (type === 'change') {
                        let refParam = { 'key': data.value[0].innercode };
                        oThis.$refs.saleInfoRef.setData('s_param', refParam);
                    }
                },

                //地区参照
                countryRefChange: function (type, data) {
                    if (type === 'change') {
                        let refParam = { 'key': data.value[0].innercode };
                        oThis.$refs.saleInfoRef.setData('p_param', refParam);
                    }
                },
                provinceRefChange: function (type, data) {
                    if (type === 'change') {
                        let refParam = { 'key': data.value[0].innercode };
                        oThis.$refs.saleInfoRef.setData('c_param', refParam);
                    }
                },
                cityRefChange: function (type, data) {
                    if (type === 'change') {
                        let refParam = { 'key': data.value[0].innercode };
                        oThis.$refs.saleInfoRef.setData('d_param', refParam);
                    }
                },

                //营销状态下拉框
                saleStatusBoxShow: function (type) {
                    if (type) {
                        let ssOptions = this.$refs.sale_status_ref.options;
                        for (let i in ssOptions) {
                            if (ssOptions[i].value == 'PROJECT_APPROVAL' || ssOptions[i].value == 'SIGNING_COMPLETED') {
                                ssOptions[i].disabled = true;
                            } else {
                                ssOptions[i].disabled = false;
                            }
                        }
                    }
                }
            },
            saleInfoIcons: [{
                icon: 'edit',
                click: function () {
                    oThis.saleInfoEdit = !oThis.saleInfoEdit;
                    //备份，取消时还原
                    oThis.saleInfoCacheData = JSON.parse(JSON.stringify(oThis.$refs.saleInfoRef.getData('SaleInfo')));
                }
            }],
            projectOperationPlanIcons: [{
                icon: 'edit',
                click: function () {
                    if (oThis.pk_sale_info === '') {
                        oThis.$message({
                            message: '请先保存营销信息',
                            type: 'error'
                        });
                        return;
                    }

                    // 重置新增数据
                    oThis.$refs.projectOperationPlanRef.projectOperationPlanEdit = true;

                    //备份，取消时还原
                    oThis.saleInfoCacheData = JSON.parse(JSON.stringify(oThis.$refs.saleInfoRef.getData('SaleInfo')));
                }
            }],
            workLogIcons: [{
                icon: 'plus',
                click: function () {
                    if (oThis.pk_sale_info === '') {
                        oThis.$message({
                            message: '请先保存营销信息',
                            type: 'error'
                        });
                        return;
                    }
                    oThis.$refs.workLogRef.$refs.workLogRef.getTableComp().closeExpandRow();
                    // 重置新增数据
                    oThis.$refs.workLogRef.$refs.workLogRef.resetFormData();
                    // 显示新增区域
                    oThis.$refs.workLogRef.$refs.workLogRef.comp.formShow = true;
                }
            }]
        };
    },

    //获取数据初始化操作
    created() {
        this.request();
    },

    methods: {
        request() {
            this.pk_sale_info = this.$root.$router.currentRoute.params.id;
            if (!this.pk_sale_info) {
                this.pk_sale_info = '';
                this.saleInfoEdit = true;
                return;
            };
            if (this.pk_sale_info) {
                this.requestSaleInfo();
            };
        },

        requestSaleInfo() {
            this.$http({
                url: '/yls-sale-web/sale/saleInfo/getById',
                headers: { 'Content-Type': 'application/json' },
                method: "post",
                data: this.pk_sale_info
            }).then(res => {
                if (res.data.success === true) {
                    var saleInfoData = res.data.data;
                    this.customerCreditCode = saleInfoData.credit_code;
                    this.$refs.saleInfoRef.setData('SaleInfo', saleInfoData);
                } else {
                    this.$message({
                        message: res.data.error.errorMessage,
                        type: 'error'
                    });
                }
            }).catch(e => {
                this.$message({
                    message: '营销信息获取失败',
                    type: 'error'
                });
            });
        },

        saleInfoConfirm(type) {
            this.$refs.saleInfoRef.comp.$refs["saleInfo_ref"].validate(valid => {
                if (valid) {
                    var data = this.$refs.saleInfoRef.comp.SaleInfo;
                    var url;
                    if (this.pk_sale_info) {
                        url = '/yls-sale-web/sale/saleInfo/updateSaleInfo';
                    } else {
                        url = '/yls-sale-web/sale/saleInfo/createSaleInfo';
                    }
                    this.$http({
                        url: url,
                        headers: { 'Content-type': 'application/json' },
                        method: 'post',
                        data: JSON.parse(JSON.stringify(data))
                    }).then(res => {
                        if (res.data.success === true) {
                            this.$message({
                                message: '保存成功',
                                type: 'success'
                            });
                            this.originalValue = res.data.data;
                            this.$refs.saleInfoRef.setData('saleInfo_ref', this.originalValue);
                            this.pk_sale_info = this.originalValue.pk_sale_info;
                            this.saleInfoEdit = false;
                        } else {
                            this.$message({
                                message: res.data.error.errorMessage,
                                type: 'error'
                            });
                        }
                    }).catch(() => {
                        this.$message({
                            message: '更新失败',
                            type: 'error'
                        });
                    });
                }
            }, type);
        },

        saleInfoCancel() {
            this.saleInfoEdit = false;

            //还原表单数据
            this.$refs.saleInfoRef.setData('SaleInfo', this.saleInfoCacheData);
        },

        updateVisitTimes(size) {
            let saleInfo = this.$refs.saleInfoRef.comp.$refs.saleInfo_ref.model;
            saleInfo.visit_times = size;
            this.$refs.saleInfoRef.setData('SaleInfo', saleInfo);

            //更新营销信息中拜访次数
            this.$http({
                url: '/yls-sale-web/sale/saleInfo/update',
                headers: { 'Content-type': 'application/json' },
                method: 'post',
                data: JSON.parse(JSON.stringify(saleInfo))
            }).then(res => {
                console.log('更新成功，拜访次数为：' + res.data.data.visit_times);
            }).catch(() => {
                this.$message({
                    message: '更新拜访次数失败',
                    type: 'error'
                });
            });
        },

        //缓存参照数据
        queryRefData() {

            //国明经济行业分类参照
            var paramObj = {};
            paramObj.transmitParam = {};

            this.$http({
                url: '/yls-base-web/defDocRef/nationalEconomyClassification/filterRefJSON',
                headers: { 'Content-type': 'application/json' },
                method: 'post',
                data: { 'transmitParam': '{}' }
            }).then(res => {
                for (var i in res.data) {
                    this.nationalEconomyClassificationRefCache[i] = res.data[i];
                }
            }).catch(() => {
                console.log('国明经济行业分类参照 获取失败');
            });

            //地区参照
            this.$http({
                url: '/yls-base-web/defDocRef/district/filterRefJSON',
                headers: { 'Content-type': 'application/json' },
                method: 'post',
                data: { 'transmitParam': '{}' }
            }).then(res => {
                this.districtRefCache = res.data;
            }).catch(() => {
                console.log('地区参照 获取失败');
            });
        }

    }
});

/***/ }),

/***/ 582:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-panel"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
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
      "id": "basePanel",
      "title": "营销信息",
      "icons": _vm.saleInfoIcons
    }
  }, [_c('ifbp-template', {
    ref: "saleInfoRef",
    attrs: {
      "tplId": "saleInfo",
      "funnode": _vm.saleInfoFunnode,
      "nexuskey": _vm.saleInfoNexusKey,
      "tplData": _vm.saleInfoData,
      "show-type": "form",
      "editable": _vm.saleInfoEdit,
      "tplResetFun": _vm.saleInfoResetFun,
      "methods": _vm.ref_Methods
    },
    on: {
      "after-create": _vm.queryRefData
    }
  }), _vm._v(" "), (_vm.saleInfoEdit) ? _c('div', {
    staticClass: "form-button-div"
  }, [_c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "default"
    },
    on: {
      "click": _vm.saleInfoCancel
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.saleInfoConfirm
    }
  }, [_vm._v("保存")])], 1) : _vm._e()], 1), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "basePanel",
      "title": "项目操作方案",
      "icons": _vm.projectOperationPlanIcons
    }
  }, [_c('projectOperationPlanRef', {
    ref: "projectOperationPlanRef",
    attrs: {
      "pk_sale_info": _vm.pk_sale_info
    }
  })], 1), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "basePanel",
      "title": "工作日志",
      "icons": _vm.workLogIcons
    }
  }, [_c('workLogRef', {
    ref: "workLogRef",
    attrs: {
      "pk_sale_info": _vm.pk_sale_info
    },
    on: {
      "workLogSizeListener": _vm.updateVisitTimes
    }
  })], 1)], 1)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title-container"
  }, [_c('h2', {
    staticClass: "name"
  }, [_vm._v("营销管理详情页")])])
}]}

/***/ }),

/***/ 789:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(582)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(486),
  /* template */
  __webpack_require__(683),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

/******/ })});;
//# sourceMappingURL=sale-info.vue.174cfda2400d339ea64d.en.js.map