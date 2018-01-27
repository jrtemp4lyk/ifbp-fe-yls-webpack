define("yls//busi/project/src/customer/apply-customerlist.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 383);
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

/***/ 232:
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



/* harmony default export */ __webpack_exports__["default"] = ({
    mixins: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["b" /* pagination */])()], //分页方法引入  
    data() {
        return {
            //多选按钮选择
            // checkList:[],
            //模版主键
            funnode: "BT008",
            nexuskey: "custmor-apply",
            // 当前点击的行
            currentRow: null,
            customerListData: {},
            // 高级搜索
            searchTemplateCode: 'YLSCXMB_BUSI_APPLY',
            searchParameters: '{}',
            //快捷查询输入值
            title: '',
            customertype: '',
            //showDeleteButton: true,
            //操作按钮
            templateTableFormResetFun: function ($node) {
                //获取table,此id为ui模板上面的表格Id
                var $table = this.getNodeById($node, "efrb43qabsh");
                //定义操作
                var operateArr = [{
                    title: "发起申请",
                    icon: "pt-shenpi"
                }];
                //获取操作按钮html片段
                var operateHtml = this.getTableOperateHtml(operateArr);
                $table.append(operateHtml);
                return $node[0].outerHTML;
            }
        };
    },
    mounted() {
        this.request();
        this.loadData();
    },
    methods: {
        handleSearch(searchTemplate) {
            this.searchParameters = JSON.stringify(searchTemplate);
            this.request();
        },
        // 添加按钮
        addCustomerInfo() {
            location.hash = "/cust/customer/add/";
        },
        // 加载数据方法
        loadData() {
            // 判断brandMsg
            if (this.brandMsg == 'add') {
                this.title = "基于客户放款进展表";
            } else {
                this.title = "基于客户放款进展表";
                this.pk_brand = this.brandMsg;
            }
        },
        //编辑按钮
        tableApplyClick: function (scope) {
            var pk_customer = scope.row.pk_cust_customer;
            var customer_type = scope.row.customer_type;
            if ("CORP" == customer_type) {
                //企业
                var promise = this.applyConfirm(pk_customer, customer_type);
                promise.then(res => {
                    var pk_application = res.data.data.pk_application;
                    this.$emit('change-cust-list', ["CORP", pk_customer, pk_application]);
                });
            } else if ("person" == customer_type || "PERSON" == customer_type) {
                //自然人
                var promise = this.applyConfirm(pk_customer, customer_type);
                promise.then(res => {
                    var pk_application = res.data.data.pk_application;
                    this.$emit('change-cust-list', ["person", pk_customer, pk_application]);
                });
            } else {
                this.$message({
                    message: "操作失败！",
                    type: "error"
                });
            }
        },
        //选择条数改变
        handleSelectionChange: function (selection) {
            this.$message("选中条数为:" + selection.length);
            // var $table = this.$refs["customerapply-table"] && this.$refs["customerapply-table"].comp 
            //             ? this.$refs["customerapply-table"].comp.$refs['customerapply-table']
            //             : null;
            // if($table && this.currentRow) {
            //     this.currentRow = null;
            //     $table.clearSelection();
            //     debugger;
            //     $table.setCurrentRow(this.currentRow);
            // }
        },

        //后台请求
        request() {
            let data = {
                'orderList': [{
                    'direction': 'desc',
                    'property': 'ts'
                }],
                'pageNum': this.currentPage - 1,
                'pageSize': this.pageSize,
                'searchParams': {
                    'searchMap': {
                        'custCondList': [{ key: "cusotmer_class", oper: " LIKE ", value: "%yls_dev100000000ffn%" }],
                        'qtAggVO': this.searchParameters
                    }
                }
            };
            debugger;
            this.$http({
                url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/apply/pagecust',
                headers: { 'Content-Type': 'application/json' },
                method: 'post',
                data: data,
                dataType: 'json'
            }).then(res => {
                var originalValue = res.data.data.content;
                this.$refs['customerapply-table'].setData('customer_t', JSON.parse(JSON.stringify(originalValue)));
                this.totalElements = res.data.data.totalElements; // 总条数
                this.pageSize = res.data.data.pageSize; // 每页的条数
            }).catch(e => {
                this.$message({
                    message: "信息获取失败",
                    type: "error"
                });
            });
        },

        /**
         * 提交到申请表变为待申请 
        */
        applyConfirm(pk_customer, customer_type) {
            var url = '/yls-busi-web/prj/apply/createapply';
            var data = {
                'issubmit': '0',
                'pk_customer': pk_customer,
                'customer_type': customer_type
            };

            var promise = new Promise((resolve, reject) => {
                this.$http({
                    url: url,
                    headers: { 'Content-Type': 'application/json' },
                    method: "post",
                    data: JSON.parse(JSON.stringify(data))
                }).then(res => {
                    if (res.data.success === true) {
                        resolve(res);
                        this.$message({
                            message: "操作成功！",
                            type: "success"
                        });
                        this.inoutTypeFormEdit = false;
                    } else {
                        reject({});
                        this.$message({
                            message: res.data.message,
                            type: "error"
                        });
                    }
                }).catch(e => {
                    console.log(e);
                    reject({});
                    this.$message({
                        message: "操作失败",
                        type: "error"
                    });
                });
            });
            return promise;
        }
    }
});

/***/ }),

/***/ 284:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 334:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-panel"
  }, [_c('div', {
    staticClass: "operator-container"
  }, [_c('ifbp-search', {
    staticClass: "fr",
    attrs: {
      "template-code": _vm.searchTemplateCode
    },
    on: {
      "search": _vm.handleSearch
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "list-main-container clearfix",
    attrs: {
      "id": "customerList"
    }
  }, [_c('ifbp-template', {
    ref: "customerapply-table",
    attrs: {
      "tplId": "customerList-template",
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexuskey,
      "tplData": _vm.customerListData,
      "show-type": "table",
      "tplResetFun": _vm.templateTableFormResetFun
    },
    on: {
      "selection-change": _vm.handleSelectionChange,
      "pt-shenpi-table-click": _vm.tableApplyClick
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
  })], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(284)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(232),
  /* template */
  __webpack_require__(334),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

/******/ })});;
//# sourceMappingURL=apply-customerlist.vue.f55f950802e55fdf444b.en.js.map