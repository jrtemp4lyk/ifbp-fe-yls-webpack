define("yls//sale/salemanage/src/sale-list.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 790);
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

/***/ 487:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    mixins: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["b" /* pagination */])('request')],
    mounted() {
        this.request();
    },
    data() {
        return {
            isHide: true,
            custNameRefCode: 'prj_customer_ref',
            custNameRefField: 'pk_customer',
            custNameRefTemplate: {},
            custName: '',
            controlShareholder: '',
            saleStatus: '',
            sale_status_option: [{
                label: '潜在营销机会',
                value: 'POTENTIAL'
            }, {
                label: '意向待评估',
                value: 'INTENTION'
            }, {
                label: '方案洽谈中',
                value: 'NEGOTIATING'
            }, {
                label: '暂缓',
                value: 'SUSPENDED'
            }, {
                label: '立项审批',
                value: 'PROJECT_APPROVAL'
            }, {
                label: '签约完成',
                value: 'SIGNING_COMPLETED'
            }],

            saleListFunnode: 'YLSBT003',
            saleListNexuskey: 'sale-manage',

            saleListData: {},

            delDialogVisible: false,
            delId: '',

            saleListResetFun($node) {
                let $table = $node.find('el-table');
                let operateArr = [{
                    icon: 'edit',
                    title: '编辑'
                }, {
                    icon: 'delete',
                    title: '删除'

                }];
                let operateHtml = this.getTableOperateHtml(operateArr);
                $table.append(operateHtml);
                return $node[0].outerHTML;
            }
        };
    },

    methods: {
        request() {
            var url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["a" /* ylsSale */] + 'sale/saleInfo/page';
            var data = {
                'orderList': [{
                    'direction': 'desc',
                    'property': 'ts'
                }],
                'pageNum': this.currentPage - 1,
                'pageSize': this.pageSize,
                'searchParams': {
                    'searchMap': {
                        'pk_customer': this.custName,
                        'control_shareholder': this.controlShareholder,
                        'sale_status': this.saleStatus

                    }
                }
            };
            this.$http({
                url: url,
                headers: { 'Content-Type': 'application/json' },
                method: 'post',
                data: data,
                dataType: 'json'
            }).then(res => {
                this.$refs.saleListRef.setData('SaleInfo_t', res.data.data.content);
                this.totalElements = res.data.data.totalElements;
            }).catch(() => {
                this.$message({
                    message: '信息获取失败',
                    type: 'error'
                });
            });
        },

        addSaleInfo() {
            location.hash = '/sale/saleInfo/add';
        },

        advancedSearch() {
            this.request();
        },

        rowEditClick(scope) {
            location.hash = '/sale/saleInfo/detail/' + scope.row.pk_sale_info;
        },

        rowDeleteClick(scope) {
            this.delId = scope.row.pk_sale_info;
            this.delDialogVisible = true;
        },

        deleteConfirmClick() {
            this.$http({
                url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["a" /* ylsSale */] + 'sale/saleInfo/deleteById',
                headers: { 'Content-Type': 'application/json' },
                method: 'post',
                dataType: 'json',
                data: this.delId
            }).then(res => {
                if (res.data.success === true) {
                    this.$message({
                        message: '删除成功',
                        type: 'success'
                    });
                    this.delDialogVisible = false;
                    this.request(this.currentPage - 1, this.size);
                } else {
                    this.$message({
                        message: res.data.msg,
                        type: 'error'
                    });
                }
            }).catch(e => {
                this.$message({
                    message: '信息删除失败！',
                    type: 'error'
                });
            });
        },

        showSearch() {
            this.isHide = !this.isHide;
        },

        custNameRefTrigger(type, data) {
            if (type === 'change') {
                this.custName = data.value[0].id;
            }
        },

        custNameRefReset() {
            this.custName = '';
        }

    }
});

/***/ }),

/***/ 539:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 639:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-panel"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "operator-container"
  }, [_c('div', {
    staticClass: "fl"
  }, [_c('el-button', {
    staticClass: "legacy",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.addSaleInfo
    }
  }, [_vm._v("新增")])], 1), _vm._v(" "), _c('div', {
    staticClass: "fr"
  }, [_c('el-button', {
    attrs: {
      "type": "text"
    },
    on: {
      "click": _vm.showSearch
    }
  }, [_vm._v("\n                高级搜索\n                "), (this.isHide) ? _c('i', {
    staticClass: "el-icon-arrow-down"
  }) : _vm._e(), _vm._v(" "), (!this.isHide) ? _c('i', {
    staticClass: "el-icon-arrow-up"
  }) : _vm._e()])], 1)]), _vm._v(" "), _c('div', {
    class: {
      hide: _vm.isHide
    },
    attrs: {
      "id": "advanced-search"
    }
  }, [_c('el-row', [_c('el-col', {
    attrs: {
      "span": 2
    }
  }, [_c('span', {
    staticClass: "search-label"
  }, [_vm._v(" 客户名称:")])]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 3
    }
  }, [_c('el-ref', {
    attrs: {
      "ref-code": _vm.custNameRefCode,
      "field": _vm.custNameRefField,
      "template-value": _vm.custNameRefTemplate
    },
    on: {
      "trigger": _vm.custNameRefTrigger,
      "reset": _vm.custNameRefReset
    }
  })], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 2
    }
  }, [_c('span', {
    staticClass: "search-label"
  }, [_vm._v(" 控股股东:")])]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 3
    }
  }, [_c('el-input', {
    attrs: {
      "type": "text",
      "placeholder": "请输入控股股东"
    },
    model: {
      value: (_vm.controlShareholder),
      callback: function($$v) {
        _vm.controlShareholder = $$v
      },
      expression: "controlShareholder"
    }
  })], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 2
    }
  }, [_c('span', {
    staticClass: "search-label"
  }, [_vm._v(" 营销状态:")])]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 4
    }
  }, [_c('el-select', {
    attrs: {
      "id": "s-state"
    },
    model: {
      value: (_vm.saleStatus),
      callback: function($$v) {
        _vm.saleStatus = $$v
      },
      expression: "saleStatus"
    }
  }, _vm._l((_vm.sale_status_option), function(item, index) {
    return _c('el-option', {
      key: index,
      attrs: {
        "label": item.label,
        "value": item.value
      }
    })
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "fr"
  }, [_c('el-button', {
    on: {
      "click": _vm.advancedSearch
    }
  }, [_vm._v("搜索")])], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "list-main-container clearfix"
  }, [_c('ifbp-template', {
    ref: "saleListRef",
    attrs: {
      "tplId": "saleList",
      "funnode": _vm.saleListFunnode,
      "nexuskey": _vm.saleListNexuskey,
      "tplData": _vm.saleListData,
      "show-type": "table",
      "tplResetFun": _vm.saleListResetFun
    },
    on: {
      "edit-table-click": _vm.rowEditClick,
      "delete-table-click": _vm.rowDeleteClick
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
  }, [_c('span', [_vm._v("确认删除该数据？删除后无法恢复。")]), _vm._v(" "), _c('span', {
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
    staticClass: "title-header"
  }, [_c('h2', {
    staticClass: "name"
  }, [_vm._v("营销管理列表页")])])
}]}

/***/ }),

/***/ 790:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(539)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(487),
  /* template */
  __webpack_require__(639),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

/******/ })});;
//# sourceMappingURL=sale-list.vue.9d1025bbe566f5aaee5d.en.js.map