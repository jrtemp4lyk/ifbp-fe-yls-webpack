define("yls//sale/salemanage/src/work_log.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 389);
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


/***/ })

/******/ })});;
//# sourceMappingURL=work_log.vue.05bd7438715563a10947.en.js.map