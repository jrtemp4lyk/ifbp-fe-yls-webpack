define("yls//busi/project/src/contractinfo/tax_message_alter.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 182);
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

/***/ 104:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 132:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "taxMessageAlterRef",
    attrs: {
      "tplId": "taxMessageAlter",
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexusKey,
      "tplData": _vm.taxMessageAlterData,
      "tplResetFun": _vm.taxMessageAlterResetFun,
      "methods": _vm.taxMethods,
      "show-type": "table-form",
      "form-show": "false"
    },
    on: {
      "form-confirm-click": _vm.taxMessageAlterFormConfirm,
      "form-cancel-click": _vm.taxMessageAlterFormCancel,
      "edit-table-click": _vm.taxMessageAlterEdit,
      "delete-table-click": _vm.taxMessageAlterDelete
    }
  }), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    model: {
      value: (_vm.taxMessageAlterDelVisible),
      callback: function($$v) {
        _vm.taxMessageAlterDelVisible = $$v
      },
      expression: "taxMessageAlterDelVisible"
    }
  }, [_c('span', [_vm._v("确认删除该条记录？删除后无法恢复。")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.taxMessageAlterDelVisible = false, this.delId = ''
      }
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.taxMessageAlterDelClick
    }
  }, [_vm._v("确定")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(104)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(96),
  /* template */
  __webpack_require__(132),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


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

/***/ 96:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    //应用vue传过来接收参数

    props: ["source_bill", "type"],
    data() {
        var oThis = this;
        return {
            scrollDom: document.getElementsByClassName("view")[0],
            taxMessageAlterDelVisible: false,
            removeIndex: "",
            delId: "",
            funnode: "BT009",
            nexusKey: "tax_message_alter",
            taxMessageAlterData: {
                rules: {}
            },
            taxMessageAlterResetFun: function ($node) {
                //客户参照
                var $customerRef = this.getNodeById($node, 'mupcixhoywi');
                if ($customerRef) {
                    $customerRef.attr("v-on:trigger", "customerRefChange");
                };
                //银行参照
                var $bankRef = this.getNodeById($node, 'akv70w5yzy');
                if ($bankRef) {
                    $bankRef.attr("v-on:trigger", "bankaccountRefChange");
                };
                //联系人参照
                var $linkmanRef = this.getNodeById($node, 'vo3x043tfq');
                if ($linkmanRef) {
                    $linkmanRef.attr("v-on:trigger", "linkmanRefChange");
                };

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
            },
            taxMethods: {
                //客户参照带出相关信息
                customerRefChange: function (type, data) {

                    oThis.$refs.taxMessageAlterRef.comp.taxMessageAlter.tax_no = data.value[0].taxpayer_number; //纳税人识别号
                    oThis.$refs.taxMessageAlterRef.comp.taxMessageAlter.company_phone = data.value[0].phone; //公司电话
                },
                //银行账户带出相关信息
                bankaccountRefChange: function (type, data) {

                    oThis.$refs.taxMessageAlterRef.comp.taxMessageAlter.bank_account = data.value[0].refcode; //银行账户
                    oThis.$refs.taxMessageAlterRef.comp.taxMessageAlter.deposit_bank = data.value[0].bank_no; //开户银行
                },
                //联系人信息带出
                linkmanRefChange: function (type, data) {

                    oThis.$refs.taxMessageAlterRef.comp.taxMessageAlter.linkman_phone = data.value[0].mobile; //联系人电话
                }
            }

        };
    },

    //监听引用传参后实时变动
    computed: {
        currentsource_bill() {
            return this.source_bill;
        }
    },

    //监听参数变动后方法
    watch: {
        source_bill(val) {
            this.requestTaxMessageAlter();
        }
    },

    //获取数据初始化操作
    created() {},

    //页面操作
    mounted() {
        this.request();
    },

    methods: {
        request() {
            if (this.source_bill != "") {
                this.requestTaxMessageAlter();
            }
        },

        //请求增值税基本信息变更表格数据
        requestTaxMessageAlter() {

            var url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "contr/taxMessageAlter/page";
            var data = {
                "orderList": [{
                    "direction": "desc",
                    "property": "ts"
                }],
                pageNum: 0,
                pageSize: 0,
                searchParams: {
                    searchMap: {
                        source_bill: this.source_bill
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

                this.taxMessageAlterData = res.data.data.content;
                this.$refs["taxMessageAlterRef"].setData("taxMessageAlter_t", JSON.parse(JSON.stringify(this.taxMessageAlterData)));
            }).catch(() => {
                this.$message({
                    message: "信息获取失败",
                    type: "error"
                });
            });
        },

        //增值税基本信息变更取消按钮
        taxMessageAlterFormCancel: function (type) {
            this.removeIndex = "";
            //关闭表单或者下拉显示行
            if (type === "form") {
                this.$refs["taxMessageAlterRef"].comp.formShow = false;
            } else {
                this.$refs["taxMessageAlterRef"].getTableComp().closeExpandRow();
                var taxDatas = this.$refs.taxMessageAlterRef.getData("taxMessageAlter_t");
                taxDatas[this.taxEditBakIndex] = this.taxEditBakData;
                this.$refs.taxMessageAlterRef.setData("taxMessageAlter_t", taxDatas);
            }
        },

        //增值税基本信息变更保存
        taxMessageAlterFormConfirm: function () {
            //获取当前数据
            let url = "";
            var data = this.$refs.taxMessageAlterRef.comp.taxMessageAlter;
            data.source_bill = this.source_bill;
            if (data.pk_taxmessage_alter) {
                url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'contr/taxMessageAlter/update';
            } else {
                url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'contr/taxMessageAlter/create';
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
                    this.requestTaxMessageAlter();
                    this.$refs["taxMessageAlterRef"].comp.formShow = false;
                } else {

                    this.$message({
                        message: res.data.error.errorMessage,
                        type: "error"
                    });
                }
            }).catch(e => {
                console.log(e);
                this.$message({
                    message: "更新失败",
                    type: "error"
                });
            });
        },

        //增值税基本信息变更行编辑
        taxMessageAlterEdit: function (scope) {
            //记录删除位置
            this.removeIndex = scope.$index;

            //行下展开表单页面
            var row = scope.row;
            this.$refs.taxMessageAlterRef.getTableComp().expandRow(row);
            this.$refs.taxMessageAlterRef.formShow = false;

            //taxMessageAlter为表单数据对象参数
            this.$refs.taxMessageAlterRef.setData("taxMessageAlter", row);
            this.taxEditBakData = JSON.parse(JSON.stringify(scope.row));
            this.taxEditBakIndex = scope.$index;
        },

        //增值税基本信息变更行删除提示
        taxMessageAlterDelete: function (scope) {
            this.taxMessageAlterDelVisible = true;
            this.delId = scope.row.pk_taxmessage_alter;
        },

        //增值税基本信息变更行删除方法
        taxMessageAlterDelClick() {
            this.$http({
                url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "/contr/taxMessageAlter/deleteById",
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
                    this.requestTaxMessageAlter();
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
            this.taxMessageAlterDelVisible = false;
            this.delId = "";
        }
    }
});

/***/ })

/******/ })});;
//# sourceMappingURL=tax_message_alter.vue.4b59b6fed65c48416945.en.js.map