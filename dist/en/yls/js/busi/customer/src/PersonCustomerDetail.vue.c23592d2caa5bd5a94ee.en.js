define("yls//busi/customer/src/PersonCustomerDetail.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 720);
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

/***/ 105:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 108:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 128:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 130:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 133:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "LitigationSituationRef",
    attrs: {
      "tplId": "LitigationSituationTemplate",
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexuskey,
      "tplData": _vm.LitigationSituationData,
      "tplResetFun": _vm.LitigationSituationResetFun,
      "tplMethods": _vm.LitigationSituationTplMethods,
      "show-type": "table-form"
    },
    on: {
      "form-confirm-click": _vm.LitigationSituationFormConfirm,
      "form-cancel-click": _vm.LitigationSituationFormCancel,
      "edit-table-click": _vm.LitigationSituationEditTableRow,
      "delete-table-click": _vm.LitigationSituationDeleteTableRow
    }
  }), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    model: {
      value: (_vm.LitigationSituationDelVisible),
      callback: function($$v) {
        _vm.LitigationSituationDelVisible = $$v
      },
      expression: "LitigationSituationDelVisible"
    }
  }, [_c('span', [_vm._v("确认删除该条记录 ？删除后无法恢复。")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.LitigationSituationDelVisible = false, this.delId = ''
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.LitigationSituationDeleteClick
    }
  }, [_vm._v("确 定")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 136:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "ExternalRatingRef",
    attrs: {
      "tplId": "ExternalRatingTemplate",
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexuskey,
      "tplData": _vm.ExternalRatingData,
      "tplResetFun": _vm.ExternalRatingResetFun,
      "tplMethods": _vm.ExternalRatingTplMethods,
      "show-type": "table-form"
    },
    on: {
      "form-confirm-click": _vm.ExternalRatingFormConfirm,
      "form-cancel-click": _vm.ExternalRatingFormCancel,
      "edit-table-click": _vm.ExternalRatingEditTableRow,
      "delete-table-click": _vm.ExternalRatingDeleteTableRow
    }
  }), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    model: {
      value: (_vm.ExternalRatingDelVisible),
      callback: function($$v) {
        _vm.ExternalRatingDelVisible = $$v
      },
      expression: "ExternalRatingDelVisible"
    }
  }, [_c('span', [_vm._v("确认删除该条记录 ？删除后无法恢复。")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.ExternalRatingDelVisible = false, this.delId = ''
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.ExternalRatingDeleteClick
    }
  }, [_vm._v("确 定")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 137:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "MemberRef",
    attrs: {
      "tplId": "MemberTemplate",
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexuskey,
      "tplData": _vm.MemberData,
      "tplResetFun": _vm.MemberResetFun,
      "tplMethods": _vm.MemberTplMethods,
      "methods": _vm.t_Methods,
      "show-type": "table-form"
    },
    on: {
      "form-confirm-click": _vm.MemberFormConfirm,
      "form-cancel-click": _vm.MemberFormCancel,
      "edit-table-click": _vm.MemberEditTableRow,
      "delete-table-click": _vm.MemberDeleteTableRow
    }
  }), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    model: {
      value: (_vm.MemberDelVisible),
      callback: function($$v) {
        _vm.MemberDelVisible = $$v
      },
      expression: "MemberDelVisible"
    }
  }, [_c('span', [_vm._v("确认删除该条记录 ？删除后无法恢复。")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.MemberDelVisible = false, this.delId = ''
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.MemberDeleteClick
    }
  }, [_vm._v("确 定")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 141:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "CustUpDownRef",
    attrs: {
      "tplId": "CustUpDownTemplate",
      "pkTemp": _vm.CustUpDownPk,
      "tplData": _vm.CustUpDownData,
      "tplResetFun": _vm.CustUpDownResetFun,
      "tplMethods": _vm.CustUpDownTplMethods,
      "show-type": "table-form"
    },
    on: {
      "form-confirm-click": _vm.CustUpDownFormConfirm,
      "form-cancel-click": _vm.CustUpDownFormCancel,
      "edit-table-click": _vm.CustUpDownEditTableRow,
      "delete-table-click": _vm.CustUpDownDeleteTableRow
    }
  }), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    model: {
      value: (_vm.CustUpDownDelVisible),
      callback: function($$v) {
        _vm.CustUpDownDelVisible = $$v
      },
      expression: "CustUpDownDelVisible"
    }
  }, [_c('span', [_vm._v("确认删除该条记录 ？删除后无法恢复。")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.CustUpDownDelVisible = false, this.delId = ''
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.CustUpDownDeleteClick
    }
  }, [_vm._v("确 定")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "CommRecordRef",
    attrs: {
      "tplId": "CommRecordTemplate",
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexuskey,
      "tplData": _vm.CommRecordData,
      "tplResetFun": _vm.CommRecordResetFun,
      "tplMethods": _vm.CommRecordTplMethods,
      "show-type": "table-form"
    },
    on: {
      "form-confirm-click": _vm.CommRecordFormConfirm,
      "form-cancel-click": _vm.CommRecordFormCancel,
      "edit-table-click": _vm.CommRecordEditTableRow,
      "delete-table-click": _vm.CommRecordDeleteTableRow
    }
  }), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    model: {
      value: (_vm.CommRecordDelVisible),
      callback: function($$v) {
        _vm.CommRecordDelVisible = $$v
      },
      expression: "CommRecordDelVisible"
    }
  }, [_c('span', [_vm._v("确认删除该条记录 ？删除后无法恢复。")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.CommRecordDelVisible = false, this.delId = ''
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.CommRecordDeleteClick
    }
  }, [_vm._v("确 定")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "AssetRef",
    attrs: {
      "tplId": "AssetTemplate",
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexuskey,
      "tplData": _vm.AssetData,
      "tplResetFun": _vm.AssetResetFun,
      "tplMethods": _vm.AssetTplMethods,
      "show-type": "table-form"
    },
    on: {
      "form-confirm-click": _vm.AssetFormConfirm,
      "form-cancel-click": _vm.AssetFormCancel,
      "edit-table-click": _vm.AssetEditTableRow,
      "delete-table-click": _vm.AssetDeleteTableRow
    }
  }), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    model: {
      value: (_vm.AssetDelVisible),
      callback: function($$v) {
        _vm.AssetDelVisible = $$v
      },
      expression: "AssetDelVisible"
    }
  }, [_c('span', [_vm._v("确认删除该条记录 ？删除后无法恢复。")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.AssetDelVisible = false, this.delId = ''
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.AssetDeleteClick
    }
  }, [_vm._v("确 定")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "EquityInvestRef",
    attrs: {
      "tplId": "EquityInvestTemplate",
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexuskey,
      "tplData": _vm.EquityInvestData,
      "tplResetFun": _vm.EquityInvestResetFun,
      "tplMethods": _vm.EquityInvestTplMethods,
      "methods": _vm.t_Methods,
      "show-type": "table-form"
    },
    on: {
      "form-confirm-click": _vm.EquityInvestFormConfirm,
      "form-cancel-click": _vm.EquityInvestFormCancel,
      "edit-table-click": _vm.EquityInvestEditTableRow,
      "delete-table-click": _vm.EquityInvestDeleteTableRow
    }
  }), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    model: {
      value: (_vm.EquityInvestDelVisible),
      callback: function($$v) {
        _vm.EquityInvestDelVisible = $$v
      },
      expression: "EquityInvestDelVisible"
    }
  }, [_c('span', [_vm._v("确认删除该条记录 ？删除后无法恢复。")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.EquityInvestDelVisible = false, this.delId = ''
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.EquityInvestDeleteClick
    }
  }, [_vm._v("确 定")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "ContractHandRef",
    attrs: {
      "tplId": "ContractHandTemplate",
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexuskey,
      "tplData": _vm.ContractHandData,
      "tplResetFun": _vm.ContractHandResetFun,
      "tplMethods": _vm.ContractHandTplMethods,
      "methods": _vm.t_Methods,
      "show-type": "table-form"
    },
    on: {
      "form-cancel-click": _vm.ContractHandFormCancel,
      "search-table-click": _vm.ContractHandEditTableRow
    }
  }), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    model: {
      value: (_vm.ContractHandDelVisible),
      callback: function($$v) {
        _vm.ContractHandDelVisible = $$v
      },
      expression: "ContractHandDelVisible"
    }
  }, [_c('span', [_vm._v("确认删除该条记录 ？删除后无法恢复。")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.ContractHandDelVisible = false, this.delId = ''
      }
    }
  }, [_vm._v("取 消")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "RelatedCompanyRef",
    attrs: {
      "tplId": "RelatedCompanyTemplate",
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexuskey,
      "tplData": _vm.RelatedCompanyData,
      "tplResetFun": _vm.RelatedCompanyResetFun,
      "tplMethods": _vm.RelatedCompanyTplMethods,
      "methods": _vm.t_Methods,
      "show-type": "table-form"
    },
    on: {
      "form-confirm-click": _vm.RelatedCompanyFormConfirm,
      "form-cancel-click": _vm.RelatedCompanyFormCancel,
      "edit-table-click": _vm.RelatedCompanyEditTableRow,
      "delete-table-click": _vm.RelatedCompanyDeleteTableRow
    }
  }), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    model: {
      value: (_vm.RelatedCompanyDelVisible),
      callback: function($$v) {
        _vm.RelatedCompanyDelVisible = $$v
      },
      expression: "RelatedCompanyDelVisible"
    }
  }, [_c('span', [_vm._v("确认删除该条记录 ？删除后无法恢复。")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.RelatedCompanyDelVisible = false, this.delId = ''
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.RelatedCompanyDeleteClick
    }
  }, [_vm._v("确 定")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "BankAccountRef",
    attrs: {
      "tplId": "BankAccountTemplate",
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexuskey,
      "tplData": _vm.BankAccountData,
      "tplResetFun": _vm.BankAccountResetFun,
      "tplMethods": _vm.BankAccountTplMethods,
      "methods": _vm.t_Methods,
      "show-type": "table-form"
    },
    on: {
      "form-confirm-click": _vm.BankAccountFormConfirm,
      "form-cancel-click": _vm.BankAccountFormCancel,
      "edit-table-click": _vm.BankAccountEditTableRow,
      "delete-table-click": _vm.BankAccountDeleteTableRow
    }
  }), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    model: {
      value: (_vm.BankAccountDelVisible),
      callback: function($$v) {
        _vm.BankAccountDelVisible = $$v
      },
      expression: "BankAccountDelVisible"
    }
  }, [_c('span', [_vm._v("确认删除该条记录 ？删除后无法恢复。")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.BankAccountDelVisible = false, this.delId = ''
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.BankAccountDeleteClick
    }
  }, [_vm._v("确 定")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "QualificationCertRef",
    attrs: {
      "tplId": "QualificationCertTemplate",
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexuskey,
      "tplData": _vm.QualificationCertData,
      "tplResetFun": _vm.QualificationCertResetFun,
      "tplMethods": _vm.QualificationCertTplMethods,
      "show-type": "table-form"
    },
    on: {
      "form-confirm-click": _vm.QualificationCertFormConfirm,
      "form-cancel-click": _vm.QualificationCertFormCancel,
      "edit-table-click": _vm.QualificationCertEditTableRow,
      "delete-table-click": _vm.QualificationCertDeleteTableRow
    }
  }), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    model: {
      value: (_vm.QualificationCertDelVisible),
      callback: function($$v) {
        _vm.QualificationCertDelVisible = $$v
      },
      expression: "QualificationCertDelVisible"
    }
  }, [_c('span', [_vm._v("确认删除该条记录 ？删除后无法恢复。")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.QualificationCertDelVisible = false, this.delId = ''
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.QualificationCertDeleteClick
    }
  }, [_vm._v("确 定")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(119)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(81),
  /* template */
  __webpack_require__(147),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(128)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(82),
  /* template */
  __webpack_require__(157),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(114)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(83),
  /* template */
  __webpack_require__(142),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(121)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(84),
  /* template */
  __webpack_require__(150),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(113)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(85),
  /* template */
  __webpack_require__(141),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(120)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(86),
  /* template */
  __webpack_require__(149),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(108)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(87),
  /* template */
  __webpack_require__(136),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(105)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(88),
  /* template */
  __webpack_require__(133),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(109)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(89),
  /* template */
  __webpack_require__(137),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(130)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(90),
  /* template */
  __webpack_require__(159),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(124)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(91),
  /* template */
  __webpack_require__(153),
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

/***/ 200:
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
  props: ["pk_customer"],
  data() {
    let oThis = this;
    let validator = function (rule, value, callback) {};
    return {
      funnode: "BT003",
      nexuskey: "TaxesOwed",
      TaxesOwedDelVisible: false,
      rmoveindex: "",
      delId: "",
      // 欠税记录来源信息新增
      TaxesOwedIcons: [{
        icon: "plus",
        click: function () {
          if (oThis.pk_customer === "") {
            oThis.$message({
              message: "请先保存基本信息",
              type: "error"
            });
            return;
          }
          let uitemplateComp = oThis.$refs.TaxesOwedRef.comp;
          let table = uitemplateComp.$refs["TaxesOwed_t_ref"];
          table.closeExpandRow();
          uitemplateComp.bankaccount = {};
          uitemplateComp.formShow = true;
          oThis.rmoveindex = "";
        }
      }],
      TaxesOwedPk: "6e334f71-37f5-47c4-981f-e4689bdd80a0", //custaxes
      TaxesOwedData: {
        rules: {
          pk_country: [{ required: true, message: "发货国家不能为空", trigger: "blur" }],
          pk_taxes: [{ required: true, message: "税类不能为空", trigger: "blur" }]
        }
      },
      TaxesOwedResetFun: function ($node) {
        let $table = $node.find('el-table');
        // $table.attr(":show-header", "false");
        let operateArr = [{
          title: "编辑",

          icon: "edit"
        }, {
          title: "删除",

          icon: "delete"
        }];
        let operateHtml = this.getTableOperateHtml(operateArr);

        $table.append(operateHtml);
        return $node[0].outerHTML;
      },
      TaxesOwedTplMethods: {
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
      this.requestTaxesOwed();
    }
  },
  //页面操作
  mounted() {

    this.request();
  },
  methods: {
    //通过cookie获取当前登录用户的ID
    getCookie(cName) {
      let cStart;
      let cEnd;
      if (document.cookie.length > 0) {
        cStart = document.cookie.indexOf(cName + "=");
        if (cStart !== -1) {
          cStart = cStart + cName.length + 1;
          cEnd = document.cookie.indexOf(";", cStart);
          if (cEnd === -1) {
            cEnd = document.cookie.length;
          }
          return decodeURIComponent(document.cookie.substring(cStart, cEnd));
        }
      }
      return "";
    },

    /**
       *   初始响应方法
       **/
    request() {
      if (this.pk_customer != "") {
        this.requestTaxesOwed();
      }
    },
    //请求欠税记录来源信息
    requestTaxesOwed() {
      let url;
      let ownerId = this.getCookie("_A_P_id");

      url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/TaxesOwed/page";
      let data = {
        pageNum: 0,
        pageSize: 0,
        searchParams: {
          searchMap: {
            pk_customer: this.pk_customer,
            message_owner: ownerId
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
        this.$refs["TaxesOwedRef"].setData("TaxesOwed_t", JSON.parse(JSON.stringify(this.originalValue)));
      }).catch(() => {
        this.$message({
          message: "欠税信息获取失败",
          type: "error"
        });
      });
    },
    //欠税记录来源情况保存
    TaxesOwedFormConfirm: function () {

      //获取当前数据
      let data = this.$refs.TaxesOwedRef.comp.TaxesOwed;
      data.pk_customer = this.pk_customer;
      let baseUrl = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */];
      //保存校验
      this.$refs.TaxesOwedRef.comp.$refs["TaxesOwed_ref"].validate(valid => {
        if (valid) {
          this.$http({
            url: baseUrl + "cust/TaxesOwed/updateORinsert",
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
              let linarraydata = this.$refs.TaxesOwedRef.getData("TaxesOwed_t");
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
              this.$refs.TaxesOwedRef.setData("TaxesOwed_t", JSON.parse(JSON.stringify(linarraydata)));
              //隐藏详情列表
              this.$refs["TaxesOwedRef"].comp.formShow = false;
              //this.requestTaxesOwed();
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
    // 欠税记录来源信息form的取消操作
    TaxesOwedFormCancel: function (type) {

      this.$refs.TaxesOwedRef.getTableComp().closeExpandRow();
      if (type === 'form') {
        this.$refs.TaxesOwedRef.formShow = false;
      } else {

        this.$refs.TaxesOwedRef.getTableComp().closeExpandRow();
        let TaxesOwedTable = this.$refs.TaxesOwedRef.getData('TaxesOwed_t');
        TaxesOwedTable[this.baseEditIndex] = this.baseData;
        this.$refs.TaxesOwedRef.setData('TaxesOwed_t', TaxesOwedTable);
      }
    },
    //欠税记录来源编辑
    TaxesOwedEditTableRow: function (scope) {
      //记录位置

      this.rmoveindex = scope.$index;

      this.$refs.TaxesOwedRef.getTableComp().expandRow(scope.row);
      this.$refs.TaxesOwedRef.comp.formShow = false;
      this.$refs.TaxesOwedRef.setData('TaxesOwed', scope.row);

      // 备份数据
      this.baseData = JSON.parse(JSON.stringify(scope.row));
      this.baseEditIndex = scope.$index;
    },
    //欠税记录来源信息删除提示
    TaxesOwedDeleteTableRow: function (scope) {
      this.TaxesOwedDelVisible = true;
      this.delId = scope.row.pk_cust_taxes_owed;
    },
    //欠税记录来源信息删除
    TaxesOwedDeleteClick() {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/TaxesOwed/deleteById",
        headers: { "Content-Type": "application/json" },
        method: "post",
        dataType: "json",
        data: this.delId
      }).then(res => {
        ;
        if (res.data.success === true) {
          this.$message({
            message: "删除成功",
            type: "success"
          });
          this.requestTaxesOwed();
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
      this.TaxesOwedDelVisible = false;
      this.delId = "";
    }
  }
});

/***/ }),

/***/ 265:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 315:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "TaxesOwedRef",
    attrs: {
      "tplId": "TaxesOwedTemplate",
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexuskey,
      "tplData": _vm.TaxesOwedData,
      "tplResetFun": _vm.TaxesOwedResetFun,
      "tplMethods": _vm.TaxesOwedTplMethods,
      "show-type": "table-form"
    },
    on: {
      "form-confirm-click": _vm.TaxesOwedFormConfirm,
      "form-cancel-click": _vm.TaxesOwedFormCancel,
      "edit-table-click": _vm.TaxesOwedEditTableRow,
      "delete-table-click": _vm.TaxesOwedDeleteTableRow
    }
  }), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    model: {
      value: (_vm.TaxesOwedDelVisible),
      callback: function($$v) {
        _vm.TaxesOwedDelVisible = $$v
      },
      expression: "TaxesOwedDelVisible"
    }
  }, [_c('span', [_vm._v("确认删除该条记录 ？删除后无法恢复。")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.TaxesOwedDelVisible = false, this.delId = ''
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.TaxesOwedDeleteClick
    }
  }, [_vm._v("确 定")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(265)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(200),
  /* template */
  __webpack_require__(315),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 36:
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
  mixins: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["b" /* pagination */])('request')],
  props: ["pk_customer"],
  data() {
    let oThis = this;
    let validator = function (rule, value, callback) {};
    return {
      funnode: "BT003",
      nexuskey: "Shareholder_UI",
      ShareholderDelVisible: false,
      rmoveindex: "",
      delId: "",
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
          let uitemplateComp = oThis.$refs.ShareholderRef.comp;
          let table = uitemplateComp.$refs["Shareholder_t_ref"];
          table.closeExpandRow();
          uitemplateComp.bankaccount = {};
          uitemplateComp.formShow = true;
          oThis.rmoveindex = "";
        }
      }],
      ShareholderPk: "4206377c-53b0-497d-a5b6-c6f98fa6631d", //custaxes
      ShareholderData: {
        isEdit: false
      },
      ShareholderResetFun: function ($node) {
        let $table = $node.find('el-table');

        //股东参照联动
        var $refNode1 = this.getNodeById($node, 'linx947hht9');

        if ($refNode1.length) {
          $refNode1.attr("v-on:trigger", "handleRefChange1");
        }

        let $refNodeIdType = $node.find("el-select[v-model='Shareholder.identity_type']"); //获取证件类型节点
        $refNodeIdType.attr("v-bind:disabled", 'isEdit'); //选择参照变成不可编辑
        let $refNodeIdNo = $node.find("el-input[v-model='Shareholder.identity_num']"); //获取证件号节点
        $refNodeIdNo.attr("v-bind:disabled", 'isEdit'); //选择参照变成不可编辑
        let $refNodeCustType = $node.find("el-select[v-model='Shareholder.share_type']"); //获取证件号节点
        $refNodeCustType.attr("v-bind:disabled", 'isEdit'); //选择参照变成不可编辑
        // $table.attr(":show-header", "false");
        let operateArr = [{
          title: "编辑",

          icon: "edit"
        }, {
          title: "删除",

          icon: "delete"
        }];
        let operateHtml = this.getTableOperateHtml(operateArr);

        $table.append(operateHtml);

        return $node[0].outerHTML;
      },
      t_Methods: {
        handleRefChange1: function (type, data) {

          if (type === 'change') {

            this.$refs['Shareholder_ref'].model.share_type = data.value[0].customer_type;
            this.$refs['Shareholder_ref'].model.identity_type = data.value[0].identity_type;
            this.$refs['Shareholder_ref'].model.identity_num = data.value[0].identity_no;
            oThis.$refs["ShareholderRef"].setData("isEdit", true);
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
      this.requestShareholder();
    }
  },
  //页面操作
  mounted() {

    this.request();
  },
  methods: {
    //通过cookie获取当前登录用户的ID
    getCookie(cName) {
      let cStart;
      let cEnd;
      if (document.cookie.length > 0) {
        cStart = document.cookie.indexOf(cName + "=");
        if (cStart !== -1) {
          cStart = cStart + cName.length + 1;
          cEnd = document.cookie.indexOf(";", cStart);
          if (cEnd === -1) {
            cEnd = document.cookie.length;
          }
          return decodeURIComponent(document.cookie.substring(cStart, cEnd));
        }
      }
      return "";
    },

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
      let url;
      let ownerId = this.getCookie("_A_P_id");
      url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/shareholder/page";
      let data = {
        "orderList": [{
          "direction": "desc",
          "property": "ts"
        }],
        'pageNum': this.currentPage - 1,
        'pageSize': this.pageSize,
        "searchParams": {
          "searchMap": {
            'custCondList': [{
              'key': 'pk_customer',
              'oper': '=',
              'value': this.pk_customer
            }, {
              'key': 'message_owner',
              'oper': '=',
              'value': ownerId
            }]

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
          message: "股东信息获取失败",
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
      this.$refs.ShareholderRef.comp.$refs["Shareholder_ref"].validate(valid => {
        if (valid) {
          this.$http({
            url: baseUrl + "cust/shareholder/updateORinsert",
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
        let ShareholderTable = this.$refs.ShareholderRef.getData('Shareholder_t');
        ShareholderTable[this.baseEditIndex] = this.baseData;
        this.$refs.ShareholderRef.setData('Shareholder_t', ShareholderTable);
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

/***/ 37:
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
  props: ["pk_customer", "type"],
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
      $refNodeIdType: '',
      funnode: "BT003",
      nexuskey: oThis.type === "corp" ? "Contacts_UI" : "person_contact",
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
          let uitemplateComp = oThis.$refs.custlinkmanRef.comp;
          let table = uitemplateComp.$refs["OtherContact_t_ref"];
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
      custlinkmanPk: "946c2308-f17d-4d80-bc5b-3f3f406df306", //linkman
      custlinkmanData: {
        isEdit: false

      },
      //渲染表格
      linkmanResetFun: function ($node) {
        let $table = $node.find('el-table');
        let $refNodeName = $node.find("el-ref[v-model='OtherContact.customer_name']"); //获取姓名节点
        if ($refNodeName.length) {
          $refNodeName.attr("v-on:trigger", "getMessageFromName"); //根据姓名带出证件号与类型
        }
        debugger;
        let $refNodeIdType = $node.find("el-select[v-model='OtherContact.identity_type']"); //获取证件类型节点
        $refNodeIdType.attr("v-bind:disabled", 'isEdit'); //选择参照变成不可编辑
        let $refNodeIdNo = $node.find("el-input[v-model='OtherContact.identity_card_numb']"); //获取证件号节点
        $refNodeIdNo.attr("v-bind:disabled", 'isEdit'); //选择参照变成不可编辑


        //  $table.attr(':show-header','false');
        let operateArr = [{
          title: "编辑",

          icon: "edit"
        }, {
          title: "删除",

          icon: "delete"
        }];
        let operateHtml = this.getTableOperateHtml(operateArr);
        $table.append(operateHtml);
        return $node[0].outerHTML;
      },
      t_Methods: {
        getMessageFromName: function (type, data) {

          if (type === 'change') {

            this.$refs['OtherContact_ref'].model.identity_type = data.value[0].identity_type;
            this.$refs['OtherContact_ref'].model.identity_card_numb = data.value[0].identity_no;
            oThis.$refs["custlinkmanRef"].setData("isEdit", true);
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
    //通过cookie获取当前登录用户的ID
    getCookie(cName) {
      let cStart;
      let cEnd;
      if (document.cookie.length > 0) {
        cStart = document.cookie.indexOf(cName + "=");
        if (cStart !== -1) {
          cStart = cStart + cName.length + 1;
          cEnd = document.cookie.indexOf(";", cStart);
          if (cEnd === -1) {
            cEnd = document.cookie.length;
          }
          return decodeURIComponent(document.cookie.substring(cStart, cEnd));
        }
      }
      return "";
    },
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
      let url;
      let ownerId = this.getCookie("_A_P_id");
      url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/otherContact/page";
      let data = {
        pageNum: 0,
        pageSize: 0,
        searchParams: {
          searchMap: {
            custCondList: [{
              'key': 'pk_customer',
              'oper': '=',
              'value': this.pk_customer
            }, {
              'key': 'message_owner',
              'oper': '=',
              'value': ownerId
            }]
          }
        }
      };

      this.$http({
        url: url,
        headers: { "Content-Type": "application/json" },
        method: "post",
        data: data

      }).then(res => {
        this.originalValue = res.data.data.content;
        this.$refs["custlinkmanRef"].setData("OtherContact_t", JSON.parse(JSON.stringify(this.originalValue)));
      }).catch(() => {
        this.$message({
          message: "联系人信息获取失败",
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
        this.$refs["custlinkmanRef"].getTableComp().closeExpandRow(); //关闭新增区域表单
        let OtherContactTable = this.$refs.custlinkmanRef.getData('OtherContact_t');
        OtherContactTable[this.baseEditIndex] = this.baseData; //获取点击修改前的值
        this.$refs.custlinkmanRef.setData('OtherContact_t', OtherContactTable);
      }
    },
    //联系人主表保存
    linkmanFormConfirm: function () {
      //获取当前数据
      let data = this.$refs.custlinkmanRef.comp.OtherContact;
      data.pk_customer = this.pk_customer;
      let baseUrl = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */];
      //保存校验

      this.$refs.custlinkmanRef.comp.$refs["OtherContact_ref"].validate(valid => {
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
      let row = scope.row;
      this.$refs["custlinkmanRef"].getTableComp().expandRow(row);
      this.$refs["custlinkmanRef"].formShow = false;
      //OtherContact为表单数据对象参数
      this.$refs["custlinkmanRef"].setData("OtherContact", row);
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

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 40:
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

/***/ 41:
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
      "methods": _vm.t_Methods,
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

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linkmanpanel_vue__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linkmanpanel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__linkmanpanel_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Shareholderpanel_vue__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Shareholderpanel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Shareholderpanel_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ContractHandPanel_vue__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ContractHandPanel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ContractHandPanel_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CustUpDownPanel_vue__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CustUpDownPanel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__CustUpDownPanel_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AssetPanel_vue__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AssetPanel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__AssetPanel_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__BankAccountPanel_vue__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__BankAccountPanel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__BankAccountPanel_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__QualificationCertPanel_vue__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__QualificationCertPanel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__QualificationCertPanel_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__EquityInvestPanel_vue__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__EquityInvestPanel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__EquityInvestPanel_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ExternalRatingPanel_vue__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ExternalRatingPanel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__ExternalRatingPanel_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__CommRecordPanel_vue__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__CommRecordPanel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__CommRecordPanel_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__RelatedCompanyPanel_vue__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__RelatedCompanyPanel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__RelatedCompanyPanel_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__MemberPanel_vue__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__MemberPanel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__MemberPanel_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__LitigationSituationPanel_vue__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__LitigationSituationPanel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__LitigationSituationPanel_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__TaxesOwedPanel_vue__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__TaxesOwedPanel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__TaxesOwedPanel_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


//引入信息面板














/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'custlinkmanRef': __WEBPACK_IMPORTED_MODULE_1__linkmanpanel_vue___default.a,
    'ShareholderRef': __WEBPACK_IMPORTED_MODULE_2__Shareholderpanel_vue___default.a,
    'ContractHandRef': __WEBPACK_IMPORTED_MODULE_3__ContractHandPanel_vue___default.a,
    'CustUpDownRef': __WEBPACK_IMPORTED_MODULE_4__CustUpDownPanel_vue___default.a,
    'AssetRef': __WEBPACK_IMPORTED_MODULE_5__AssetPanel_vue___default.a,
    'BankAccountRef': __WEBPACK_IMPORTED_MODULE_6__BankAccountPanel_vue___default.a,
    'QualificationCertRef': __WEBPACK_IMPORTED_MODULE_7__QualificationCertPanel_vue___default.a,
    'EquityInvestRef': __WEBPACK_IMPORTED_MODULE_8__EquityInvestPanel_vue___default.a,
    'ExternalRatingRef': __WEBPACK_IMPORTED_MODULE_9__ExternalRatingPanel_vue___default.a,
    'CommRecordRef': __WEBPACK_IMPORTED_MODULE_10__CommRecordPanel_vue___default.a,
    'RelatedCompanyRef': __WEBPACK_IMPORTED_MODULE_11__RelatedCompanyPanel_vue___default.a,
    'MemberRef': __WEBPACK_IMPORTED_MODULE_12__MemberPanel_vue___default.a,
    'LitigationSituationRef': __WEBPACK_IMPORTED_MODULE_13__LitigationSituationPanel_vue___default.a,
    'TaxesOwedRef': __WEBPACK_IMPORTED_MODULE_14__TaxesOwedPanel_vue___default.a

  },
  data() {

    let oThis = this;
    let validator = function (rule, value, callback) {};
    //校验


    let validatecustomerDetail = function (rule, value, callback) {

      //证件号码唯一校验

      if (rule.field === "identity_card_numb") {
        debugger;
        if (value === '') {
          callback(new Error('不能为空'));
        } else if (oThis.$root.$router.currentRoute.name !== 'PersonCustomerDetial' && oThis.pk_customer === '') {
          if (oThis.$refs.baseTemplateRef1.comp.$refs["CustPersonRef"].model.identity_card_numb !== '') {
            oThis.validateInput(value);
            debugger;
            if (oThis.isIdCanUse) {
              callback(new Error('该证件号已经存在，请重新输入'));
            } else {
              callback();
            }
          }
        } else {
          callback();
        }
      }
    };
    return {
      hasCustClsVisible: false,
      custPk: '',
      isIdCanUse: false,
      isshow: true,
      reloadVisible: false,
      custfunnode: "BT003",
      custnexuskey: "customer_detial_ui",
      funnode: "BT003",
      nexuskey: "customer_person_ui",
      scrollDom: "ifbpScrollDom",
      pk_customer: "",
      linkmanDelVisible: false,
      custbankDelVisible: false,
      ShareholderDelVisible: false,
      rmoveindex: "",
      delId: "",
      //自然人客户基本信息修改
      baseIcons: [{
        icon: "edit",
        click: function () {
          if (!oThis.customerEdit) {
            oThis.customerEdit = true;
            let copyperson = oThis.$refs.baseTemplateRef1.comp.CustPerson;
            oThis.copyForPerson = JSON.parse(JSON.stringify(copyperson));
            let copycust = oThis.$refs.baseTemplateRef.comp.customer;
            oThis.copyForCust = JSON.parse(JSON.stringify(copycust));
          } else {
            oThis.customerCancel();
          }
        }
      }],

      customerDetail: {
        customer: {}

      },

      customerDataDetail: {
        customer: {},
        rules: {
          identity_card_numb: [{ validator: validatecustomerDetail, trigger: "blur" }]

        }
      },
      customerEdit: false,
      custResetFun: function ($node) {
        let $refNode = $node.find("el-select[v-model='customer.customer_style']");
        $refNode.parent().css("display", 'none');

        //获取客户分类节点
        let $refCustCls = $node.find("el-ref[v-model='customer.cusotmer_class']");
        debugger;
        if (this.$root.$router.currentRoute.params.cust_type !== undefined && this.$root.$router.currentRoute.params.cust_type === 'Lessee') {
          $refCustCls.attr("disabled", false);
          let refParams = { 'cust_type': 'Lessee' };
          oThis.$refs.baseTemplateRef.setData("cust_cls", refParams);
          $refCustCls.attr("v-on:trigger", "setCustCls");
        }
      },
      personResetFun: function ($node) {
        //单位所属行业分类级联参照
        let $refNode1 = this.getNodeById($node, 'gw1uxdkl5d');

        if ($refNode1.length) {
          $refNode1.attr("v-on:trigger", "handleRefChange1");
        }

        //地区级联参照
        let $refNode2 = this.getNodeById($node, 'drut16v1bgf');
        let $refNode3 = this.getNodeById($node, 'qgipxenj48');

        if ($refNode2.length) {
          $refNode2.attr("v-on:trigger", "handleRefChange2");
        }
        if ($refNode3.length) {
          $refNode3.attr("v-on:trigger", "handleRefChange3");
        }

        //客户行业分类级联参照
        let $refNode4 = this.getNodeById($node, 'dp0mur4m8je');
        let $refNode5 = this.getNodeById($node, 'l1amy3rlzxp');
        let $refNode6 = this.getNodeById($node, 'bnqeyxqi98h');

        if ($refNode4.length) {
          $refNode4.attr("v-on:trigger", "handleRefChange4");
        }
        if ($refNode5.length) {
          $refNode5.attr("v-on:trigger", "handleRefChange5");
        }
        if ($refNode6.length) {
          $refNode6.attr("v-on:trigger", "handleRefChange6");
        }
      },
      cust_Methods: {
        setCustCls: function (type, data) {
          oThis.pk_temp = oThis.$refs['baseTemplateRef'].comp.customer.cusotmer_class;
          if (oThis.pk_temp === 'yls_dev100000000ffn') {
            oThis.cust_type = 'Lessee';
          } else if (oThis.pk_temp === 'yls_dev100000000ffr') {
            oThis.cust_type = 'Guarantee';
          } else if (oThis.pk_temp === 'yls_dev100000000ffo') {
            oThis.cust_type = 'FinancingUnit';
          } else if (oThis.pk_temp === 'yls_dev100000000ffp') {
            oThis.cust_type = 'Agency';
          } else if (oThis.pk_temp === 'yls_dev100000000ffq') {
            oThis.cust_type = 'RelatedParty';
          } else if (oThis.pk_temp === 'yls_dev100000000ffs') {
            oThis.cust_type = 'Supplier';
          } else if (oThis.pk_temp === 'yls_dev100000000ffu') {
            oThis.cust_type = 'GroupCust';
          } else if (oThis.pk_temp === 'yls_dev100000000ffw') {
            oThis.cust_type = 'RentalUnit';
          }
        }

      },
      t_Methods: {
        handleRefChange1: function (type, data) {

          if (type === 'change') {

            let innerCode = data.value[0].refcode;
            oThis.$refs.baseTemplateRef1.comp.$refs.belong_ref.changeQueryParams(innerCode);
          }
        },
        handleRefChange2: function (type, data) {

          if (type === 'change') {

            let innerCode = data.value[0].refcode;
            oThis.$refs.baseTemplateRef1.comp.$refs.city_ref.changeQueryParams(innerCode);
          }
        },
        handleRefChange3: function (type, data) {

          if (type === 'change') {

            let innerCode = data.value[0].refcode;
            oThis.$refs.baseTemplateRef1.comp.$refs.town_ref.changeQueryParams(innerCode);
          }
        },
        handleRefChange4: function (type, data) {

          if (type === 'change') {

            let innerCode = data.value[0].refcode;
            oThis.$refs.baseTemplateRef1.comp.$refs.cust_h_ref.changeQueryParams(innerCode);
          }
        },
        handleRefChange5: function (type, data) {

          if (type === 'change') {

            let innerCode = data.value[0].refcode;
            oThis.$refs.baseTemplateRef1.comp.$refs.cust_m_ref.changeQueryParams(innerCode);
          }
        },
        handleRefChange6: function (type, data) {

          if (type === 'change') {

            let innerCode = data.value[0].refcode;
            oThis.$refs.baseTemplateRef1.comp.$refs.cust_s_ref.changeQueryParams(innerCode);
          }
        }
      },
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
      }],
      ContractHandIcons: [{
        icon: "plus",
        click: function () {
          if (oThis.pk_customer === "") {
            oThis.$message({
              message: "不可操作！",
              type: "error"
            });
            return;
          }
          // oThis.$refs.ContractHandRef.$refs.ContractHandRef.getTableComp().closeExpandRow();
          // // 重置新增数据
          // oThis.$refs.ContractHandRef.$refs.ContractHandRef.resetFormData();
          // // 显示新增区域
          // oThis.$refs.ContractHandRef.$refs.ContractHandRef.comp.formShow = true;
        }
      }],
      CustUpDownIcons: [{
        icon: "plus",
        click: function () {
          if (oThis.pk_customer === "") {
            oThis.$message({
              message: "请先保存基本信息",
              type: "error"
            });
            return;
          }
          oThis.$refs.CustUpDownRef.$refs.CustUpDownRef.getTableComp().closeExpandRow();
          // 重置新增数据
          oThis.$refs.CustUpDownRef.$refs.CustUpDownRef.resetFormData();
          // 显示新增区域
          oThis.$refs.CustUpDownRef.$refs.CustUpDownRef.comp.formShow = true;
        }
      }],
      AssetIcons: [{
        icon: "plus",
        click: function () {
          if (oThis.pk_customer === "") {
            oThis.$message({
              message: "请先保存基本信息",
              type: "error"
            });
            return;
          }
          oThis.$refs.AssetRef.$refs.AssetRef.getTableComp().closeExpandRow();
          // 重置新增数据
          oThis.$refs.AssetRef.$refs.AssetRef.resetFormData();
          // 显示新增区域
          oThis.$refs.AssetRef.$refs.AssetRef.comp.formShow = true;
        }
      }],
      BankAccountIcons: [{
        icon: "plus",
        click: function () {
          if (oThis.pk_customer === "") {
            oThis.$message({
              message: "请先保存基本信息",
              type: "error"
            });
            return;
          }
          oThis.$refs.BankAccountRef.$refs.BankAccountRef.getTableComp().closeExpandRow();
          // 重置新增数据
          oThis.$refs.BankAccountRef.$refs.BankAccountRef.resetFormData();
          // 显示新增区域
          oThis.$refs.BankAccountRef.$refs.BankAccountRef.comp.formShow = true;
        }
      }],
      QualificationCertIcons: [{
        icon: "plus",
        click: function () {
          if (oThis.pk_customer === "") {
            oThis.$message({
              message: "请先保存基本信息",
              type: "error"
            });
            return;
          }
          oThis.$refs.QualificationCertRef.$refs.QualificationCertRef.getTableComp().closeExpandRow();
          // 重置新增数据
          oThis.$refs.QualificationCertRef.$refs.QualificationCertRef.resetFormData();
          // 显示新增区域
          oThis.$refs.QualificationCertRef.$refs.QualificationCertRef.comp.formShow = true;
        }
      }],
      EquityInvestIcons: [{
        icon: "plus",
        click: function () {
          if (oThis.pk_customer === "") {
            oThis.$message({
              message: "请先保存基本信息",
              type: "error"
            });
            return;
          }
          oThis.$refs.EquityInvestRef.$refs.EquityInvestRef.getTableComp().closeExpandRow();
          // 重置新增数据
          oThis.$refs.EquityInvestRef.$refs.EquityInvestRef.resetFormData();
          // 显示新增区域
          oThis.$refs.EquityInvestRef.$refs.EquityInvestRef.comp.formShow = true;
        }
      }],
      ExternalRatingIcons: [{
        icon: "plus",
        click: function () {
          if (oThis.pk_customer === "") {
            oThis.$message({
              message: "请先保存基本信息",
              type: "error"
            });
            return;
          }
          oThis.$refs.ExternalRatingRef.$refs.ExternalRatingRef.getTableComp().closeExpandRow();
          // 重置新增数据
          oThis.$refs.ExternalRatingRef.$refs.ExternalRatingRef.resetFormData();
          // 显示新增区域
          oThis.$refs.ExternalRatingRef.$refs.ExternalRatingRef.comp.formShow = true;
        }
      }],
      CommRecordIcons: [{
        icon: "plus",
        click: function () {
          if (oThis.pk_customer === "") {
            oThis.$message({
              message: "请先保存基本信息",
              type: "error"
            });
            return;
          }
          oThis.$refs.CommRecordRef.$refs.CommRecordRef.getTableComp().closeExpandRow();
          // 重置新增数据
          oThis.$refs.CommRecordRef.$refs.CommRecordRef.resetFormData();
          // 显示新增区域
          oThis.$refs.CommRecordRef.$refs.CommRecordRef.comp.formShow = true;
        }
      }],
      RelatedCompanyIcons: [{
        icon: "plus",
        click: function () {
          if (oThis.pk_customer === "") {
            oThis.$message({
              message: "请先保存基本信息",
              type: "error"
            });
            return;
          }

          oThis.$refs.RelatedCompanyRef.$refs.RelatedCompanyRef.getTableComp().closeExpandRow();
          // 重置新增数据
          oThis.$refs.RelatedCompanyRef.$refs.RelatedCompanyRef.resetFormData();
          // 显示新增区域
          oThis.$refs.RelatedCompanyRef.$refs.RelatedCompanyRef.comp.formShow = true;
        }
      }],
      MemberIcons: [{
        icon: "plus",
        click: function () {
          if (oThis.pk_customer === "") {
            oThis.$message({
              message: "请先保存基本信息",
              type: "error"
            });
            return;
          }

          oThis.$refs.MemberRef.$refs.MemberRef.getTableComp().closeExpandRow();
          // 重置新增数据
          oThis.$refs.MemberRef.$refs.MemberRef.resetFormData();
          // 显示新增区域
          oThis.$refs.MemberRef.$refs.MemberRef.comp.formShow = true;
        }
      }],
      LitigationSituationIcons: [{
        icon: "plus",
        click: function () {
          if (oThis.pk_customer === "") {
            oThis.$message({
              message: "请先保存基本信息",
              type: "error"
            });
            return;
          }

          oThis.$refs.LitigationSituationRef.$refs.LitigationSituationRef.getTableComp().closeExpandRow();
          // 重置新增数据
          oThis.$refs.LitigationSituationRef.$refs.LitigationSituationRef.resetFormData();
          // 显示新增区域
          oThis.$refs.LitigationSituationRef.$refs.LitigationSituationRef.comp.formShow = true;
        }
      }],
      TaxesOwedIcons: [{
        icon: "plus",
        click: function () {
          if (oThis.pk_customer === "") {
            oThis.$message({
              message: "请先保存基本信息",
              type: "error"
            });
            return;
          }

          oThis.$refs.TaxesOwedRef.$refs.TaxesOwedRef.getTableComp().closeExpandRow();
          // 重置新增数据
          oThis.$refs.TaxesOwedRef.$refs.TaxesOwedRef.resetFormData();
          // 显示新增区域
          oThis.$refs.TaxesOwedRef.$refs.TaxesOwedRef.comp.formShow = true;
        }
      }]

    };
  },
  //获取数据数据初始化操作
  created() {
    this.cust_type = this.$root.$router.currentRoute.params.cust_type;

    if (this.cust_type === 'Lessee') {
      //承租人
      this.pk_temp = 'yls_dev100000000ffn';
    }
    if (this.cust_type === 'Guarantee') {
      //担保人
      this.pk_temp = 'yls_dev100000000ffr';
    }
    if (this.cust_type === 'FinancingUnit') {
      //融资单位
      this.pk_temp = 'yls_dev100000000ffo';
    }
    if (this.cust_type === 'Agency') {
      //中介机构
      this.pk_temp = 'yls_dev100000000ffp';
    }
    if (this.cust_type === 'RelatedParty') {
      //客户关联方
      this.pk_temp = 'yls_dev100000000ffq';
    }
    if (this.cust_type === 'Supplier') {
      //供应商
      this.pk_temp = 'yls_dev100000000ffs';
    }
    if (this.cust_type === 'GroupCust') {
      //集团客户
      this.pk_temp = 'yls_dev100000000ffu';
    }
    if (this.cust_type === 'RentalUnit') {
      //出租单位
      this.pk_temp = 'yls_dev100000000ffw';
    }
  },
  //页面操作
  mounted() {

    this.request();
  },
  methods: {
    validateInput(identity_no) {

      let data = { 'identity_no': identity_no };
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/customer/validateInput",
        headers: { "Content-Type": "application/json" },
        method: "post",
        data: identity_no
      }).then(res => {
        debugger;
        if (res.data.data !== null) {
          debugger;
          if (res.data.data.customer_type === 'PERSON') {
            this.custPk = res.data.data.pk_cust_customer;
            this.reloadVisible = true;
            this.isIdCanUse = true;
          } else {
            this.isIdCanUse = false;
          }
        } else {
          debugger;
          this.isIdCanUse = false;
        }
      }).catch(e => {
        console.error(e);
      });
    },
    setRefParam() {
      //设置客户类型默认值
      this.$refs.baseTemplateRef.comp.$refs["formRef"].model.customer_type = 'PERSON';
    },
    reloadPersonClick() {
      if (this.$refs.baseTemplateRef.comp.$refs["formRef"].model.cusotmer_class === '' || this.$refs.baseTemplateRef.comp.$refs["formRef"].model.cusotmer_class === undefined) {
        this.hasCustClsVisible = true;
      } else {
        //this.cust_type=this.$refs.baseTemplateRef.comp.$refs["formRef"].model.cusotmer_class
        this.reloadPersonDetail();
      }
    },
    //信息存在，载入已有信息界面
    reloadPersonDetail() {

      let urlInfo = this.custPk + this.cust_type;
      location.hash = "/cust/Personcustomer/detail/" + urlInfo;
      window.location.reload();
    },

    /**
       *   初始响应方法
       **/
    request() {

      let urlParam = this.$root.$router.currentRoute.params.id;
      //请求企业客户基本信息详情
      if (urlParam === undefined) {
        this.pk_customer = "";
        this.customerEdit = true;
        return;
      }

      if (urlParam.length == 19) {
        this.pk_customer = urlParam;
      } else {
        this.pk_customer = urlParam.substring(0, 19);
        this.cust_type = urlParam.substring(19);
      }

      let method = this.$root.$router.currentRoute.name;

      // 查看和修改情况
      if (method === "PersonCustomerDetial") {
        if (this.pk_customer != "") {
          this.requestCustBaseInfo();
        }
      }
    },
    //请求自然人客户基本信息详情
    requestCustBaseInfo() {

      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/customer/getById",
        headers: { "Content-Type": "application/json" },
        method: "post",
        data: this.pk_customer
      }).then(res => {

        let originalValue = res.data.data;
        let c_class = originalValue.cusotmer_class;
        if (this.cust_type !== undefined) {
          let c_class_pk = '';
          if (this.cust_type === 'Lessee') {
            //承租人
            originalValue.beanMap.cusotmer_class_ref['yls_dev100000000ffn'] = {
              "code": "1",
              "name": "承租客户",
              "id": "yls_dev100000000ffn"
            };
            c_class_pk = 'yls_dev100000000ffn';
          }
          if (this.cust_type === 'Guarantee') {
            //担保人
            originalValue.beanMap.cusotmer_class_ref['yls_dev100000000ffr'] = {
              "code": "5",
              "name": "担保客户",
              "id": "yls_dev100000000ffr"
            };
            c_class_pk = 'yls_dev100000000ffr';
          }

          if (this.cust_type === 'FinancingUnit') {
            //融资单位
            originalValue.beanMap.cusotmer_class_ref['yls_dev100000000ffo'] = {
              "code": "2",
              "name": "融资单位",
              "id": "yls_dev100000000ffo"
            };
            c_class_pk = 'yls_dev100000000ffo';
          }
          if (this.cust_type === 'Agency') {
            //中介机构
            originalValue.beanMap.cusotmer_class_ref['yls_dev100000000ffp'] = {
              "code": "3",
              "name": "中介机构",
              "id": "yls_dev100000000ffp"
            };
            c_class_pk = 'yls_dev100000000ffp';
          }if (this.cust_type === 'RelatedParty') {
            //客户关联方
            originalValue.beanMap.cusotmer_class_ref['yls_dev100000000ffq'] = {
              "code": "4",
              "name": "客户关联方",
              "id": "yls_dev100000000ffq"
            };
            c_class_pk = 'yls_dev100000000ffq';
          }if (this.cust_type === 'Supplier') {
            //供应商
            originalValue.beanMap.cusotmer_class_ref['yls_dev100000000ffs'] = {
              "code": "6",
              "name": "供应商",
              "id": "yls_dev100000000ffs"
            };
            c_class_pk = 'yls_dev100000000ffs';
          }
          if (this.cust_type === 'GroupCust') {
            //集团客户
            originalValue.beanMap.cusotmer_class_ref['yls_dev100000000ffu'] = {
              "code": "6",
              "name": "集团客户",
              "id": "yls_dev100000000ffu"
            };
            c_class_pk = 'yls_dev100000000ffu';
          }
          if (this.cust_type === 'RentalUnit') {
            //出租单位
            originalValue.beanMap.cusotmer_class_ref['yls_dev100000000ffw'] = {
              "code": "10",
              "name": "出租单位",
              "id": "yls_dev100000000ffw"
            };
            c_class_pk = 'yls_dev100000000ffw';
          }
          debugger;
          if (!(c_class.indexOf(c_class_pk) > 0)) {
            c_class += ',' + c_class_pk;
            originalValue.cusotmer_class = c_class;
            // this.$set(formData, "cusotmer_class", c_class);
            debugger;
            // this.$refs.baseTemplateRef.getFormData().cusotmer_class = c_class;
          }
        }
        this.$refs.baseTemplateRef.setData("customer", JSON.parse(JSON.stringify(originalValue)));

        this.$refs.baseTemplateRef1.setData("CustPerson", JSON.parse(JSON.stringify(originalValue.cust_persion_list[0])));
      }).catch(e => {
        console.error(e);
        this.$message({
          message: "自然人客户基本信息详情获取失败",
          type: "error"
        });
      });
    },

    customerCancel() {
      this.customerEdit = false;

      this.$refs.baseTemplateRef.setData('customer', this.copyForCust);
      this.$refs.baseTemplateRef1.setData('CustPerson', this.copyForPerson);
      // 重置value
    },
    //自然人客户基本信息保存
    customerConfirm() {
      let data = this.$refs.baseTemplateRef.comp.customer;
      if (this.pk_customer === '') {
        data.cusotmer_class = this.pk_temp;
        data.customer_type = 'PERSON';
      }

      let data1 = this.$refs.baseTemplateRef1.comp.CustPerson;
      debugger;
      let a = [data1];
      data.cust_persion_list = a;
      console.log(data);

      //表单formRef  表格tableRef
      this.$refs.baseTemplateRef.comp.$refs["formRef"].validate(valid => {
        if (valid) {
          this.$refs.baseTemplateRef1.comp.$refs["CustPersonRef"].validate(valid => {
            if (valid) {
              this.$http({
                url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/customer/updateORinsert",
                headers: { "Content-Type": "application/json" },
                method: "post",
                data: JSON.parse(JSON.stringify(data))
              }).then(res => {
                if (res.data.success === true) {
                  this.$message({
                    message: "保存成功",
                    type: "success"
                  });

                  this.originalValue = res.data.data;

                  this.$refs.baseTemplateRef.setData("customer", JSON.parse(JSON.stringify(this.originalValue)));

                  this.pk_customer = this.originalValue.pk_cust_customer;
                  this.customerEdit = false;
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
        }
      });
    }
  }
});

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(38)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(36),
  /* template */
  __webpack_require__(40),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(39)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(37),
  /* template */
  __webpack_require__(41),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 575:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 676:
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
      "title": "自然人客户基本信息",
      "icons": _vm.baseIcons
    }
  }, [_c('ifbp-template', {
    ref: "baseTemplateRef",
    attrs: {
      "tplId": "baseTemplate",
      "funnode": _vm.custfunnode,
      "nexuskey": _vm.custnexuskey,
      "show-type": "form",
      "methods": _vm.cust_Methods,
      "tplData": _vm.customerDetail,
      "tplResetFun": _vm.custResetFun,
      "editable": _vm.customerEdit
    },
    on: {
      "after-create": _vm.setRefParam
    }
  }), _vm._v(" "), _c('ifbp-template', {
    ref: "baseTemplateRef1",
    attrs: {
      "tplId": "baseTemplate1",
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexuskey,
      "show-type": "form",
      "methods": _vm.t_Methods,
      "tplResetFun": _vm.personResetFun,
      "tplData": _vm.customerDataDetail,
      "editable": _vm.customerEdit
    }
  }), _vm._v(" "), (_vm.customerEdit) ? _c('div', {
    staticClass: "form-button-div"
  }, [_c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "default"
    },
    on: {
      "click": _vm.customerCancel
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.customerConfirm
    }
  }, [_vm._v("保存")])], 1) : _vm._e()], 1), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "linkmanPanel",
      "show-body": false,
      "title": "联系人信息",
      "icons": _vm.linkmanIcons
    }
  }, [_c('custlinkmanRef', {
    ref: "custlinkmanRef",
    attrs: {
      "pk_customer": _vm.pk_customer,
      "type": "person"
    }
  })], 1), _vm._v(" "), (_vm.isshow) ? _c('ifbp-panel', {
    attrs: {
      "id": "AssetPanel",
      "show-body": false,
      "title": "自然人客户资产信息",
      "icons": _vm.AssetIcons
    }
  }, [_c('AssetRef', {
    ref: "AssetRef",
    attrs: {
      "pk_customer": _vm.pk_customer
    }
  })], 1) : _vm._e(), _vm._v("-->\n      "), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "BankAccountPanel",
      "show-body": false,
      "title": "银行账户信息",
      "icons": _vm.BankAccountIcons
    }
  }, [_c('BankAccountRef', {
    ref: "BankAccountRef",
    attrs: {
      "pk_customer": _vm.pk_customer
    }
  })], 1), _vm._v(" "), (_vm.isshow) ? _c('ifbp-panel', {
    attrs: {
      "id": "ExternalRatingPanel",
      "show-body": false,
      "title": "外部评级信息",
      "icons": _vm.ExternalRatingIcons
    }
  }, [_c('ExternalRatingRef', {
    ref: "ExternalRatingRef",
    attrs: {
      "pk_customer": _vm.pk_customer
    }
  })], 1) : _vm._e(), _vm._v(" -->\n      \n     \n    ")], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    model: {
      value: (_vm.reloadVisible),
      callback: function($$v) {
        _vm.reloadVisible = $$v
      },
      expression: "reloadVisible"
    }
  }, [_c('span', [_vm._v("该信息已存在，是否调用？")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.reloadVisible = false, _vm.custPk = ''
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.reloadPersonClick
    }
  }, [_vm._v("确 定")])], 1)]), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    model: {
      value: (_vm.hasCustClsVisible),
      callback: function($$v) {
        _vm.hasCustClsVisible = $$v
      },
      expression: "hasCustClsVisible"
    }
  }, [_c('span', [_vm._v("请先维护客户分类！")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.reloadVisible = false, _vm.hasCustClsVisible = false, _vm.pk_customer = ''
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.hasCustClsVisible = false, _vm.pk_customer = '', _vm.reloadVisible = false
      }
    }
  }, [_vm._v("确 定")])], 1)])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title-container"
  }, [_c('h2', {
    staticClass: "name"
  }, [_vm._v("自然人客户管理")])])
}]}

/***/ }),

/***/ 720:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(575)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(417),
  /* template */
  __webpack_require__(676),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 81:
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
  props: ["pk_customer"],
  data() {
    let oThis = this;
    let validator = function (rule, value, callback) {};
    return {
      funnode: "BT003",
      nexuskey: "Asset",
      AssetDelVisible: false,
      rmoveindex: "",
      delId: "",
      // 客户资产信息新增
      AssetIcons: [{
        icon: "plus",
        click: function () {
          if (oThis.pk_customer === "") {
            oThis.$message({
              message: "请先保存基本信息",
              type: "error"
            });
            return;
          }
          let uitemplateComp = oThis.$refs.AssetRef.comp;
          let table = uitemplateComp.$refs["Asset_t_ref"];
          table.closeExpandRow();
          uitemplateComp.bankaccount = {};
          uitemplateComp.formShow = true;
          oThis.rmoveindex = "";
        }
      }],

      AssetData: {
        rules: {
          pk_country: [{ required: true, message: "发货国家不能为空", trigger: "blur" }],
          pk_taxes: [{ required: true, message: "税类不能为空", trigger: "blur" }]
        }
      },
      AssetResetFun: function ($node) {
        let $table = $node.find('el-table');
        // $table.attr(":show-header", "false");
        let operateArr = [{
          title: "编辑",

          icon: "edit"
        }, {
          title: "删除",

          icon: "delete"
        }];
        let operateHtml = this.getTableOperateHtml(operateArr);

        $table.append(operateHtml);

        return $node[0].outerHTML;
      },
      AssetTplMethods: {
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
      this.requestAsset();
    }
  },
  //页面操作
  mounted() {

    this.request();
  },
  methods: {
    //通过cookie获取当前登录用户的ID
    getCookie(cName) {
      let cStart;
      let cEnd;
      if (document.cookie.length > 0) {
        cStart = document.cookie.indexOf(cName + "=");
        if (cStart !== -1) {
          cStart = cStart + cName.length + 1;
          cEnd = document.cookie.indexOf(";", cStart);
          if (cEnd === -1) {
            cEnd = document.cookie.length;
          }
          return decodeURIComponent(document.cookie.substring(cStart, cEnd));
        }
      }
      return "";
    },

    /**
       *   初始响应方法
       **/
    request() {
      if (this.pk_customer != "") {
        this.requestAsset();
      }
    },
    //请求客户资产信息
    requestAsset() {
      let ownerId = this.getCookie("_A_P_id");

      let url;
      url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/Asset/page";
      let data = {
        pageNum: 0,
        pageSize: 0,
        searchParams: {
          searchMap: {
            custCondList: [{
              'key': 'pk_customer',
              'oper': '=',
              'value': this.pk_customer
            }, {
              'key': 'message_owner',
              'oper': '=',
              'value': ownerId
            }]
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
        this.$refs["AssetRef"].setData("Asset_t", JSON.parse(JSON.stringify(this.originalValue)));
      }).catch(() => {
        this.$message({
          message: "资产信息获取失败",
          type: "error"
        });
      });
    },
    //客户资产情况保存
    AssetFormConfirm: function () {
      //获取当前数据
      let data = this.$refs.AssetRef.comp.Asset;
      data.pk_customer = this.pk_customer;
      let baseUrl = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */];
      //保存校验
      this.$refs.AssetRef.comp.$refs["Asset_ref"].validate(valid => {
        if (valid) {
          this.$http({
            url: baseUrl + "cust/Asset/updateORinsert",
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
              let linarraydata = this.$refs.AssetRef.getData("Asset_t");
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
              this.$refs.AssetRef.setData("Asset_t", JSON.parse(JSON.stringify(linarraydata)));
              //隐藏详情列表
              this.$refs["AssetRef"].comp.formShow = false;
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
    // 客户资产信息form的取消操作
    AssetFormCancel: function (type) {
      if (type === "form") {
        this.$refs["AssetRef"].comp.formShow = false;
      } else {
        this.$refs["AssetRef"].getTableComp().closeExpandRow();
        let AssetTable = this.$refs.AssetRef.getData('Asset_t');
        AssetTable[this.baseEditIndex] = this.baseData; //获取点击修改前的值
        this.$refs.AssetRef.setData('Asset_t', AssetTable);
      }
    },
    //客户资产编辑
    AssetEditTableRow: function (scope) {
      //记录删除位置
      this.rmoveindex = scope.$index;
      //行下展开表单界面

      this.$refs.AssetRef.getTableComp().expandRow(scope.row);
      this.$refs.AssetRef.comp.formShow = false;
      this.$refs.AssetRef.setData('Asset', scope.row);

      // 备份数据
      this.baseData = JSON.parse(JSON.stringify(scope.row));
      this.baseEditIndex = scope.$index;
    },
    //客户资产信息删除提示
    AssetDeleteTableRow: function (scope) {
      this.AssetDelVisible = true;
      this.delId = scope.row.pk_cust_asset;
    },
    //客户资产信息删除
    AssetDeleteClick() {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/Asset/deleteById",
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
          this.requestAsset();
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
      this.AssetDelVisible = false;
      this.delId = "";
    }
  }
});

/***/ }),

/***/ 82:
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
      funnode: "BT003",
      nexuskey: "BankAccount",
      BankAccountDelVisible: false,
      rmoveindex: "",
      delId: "",
      // 股东信息新增
      BankAccountIcons: [{
        icon: "plus",
        click: function () {
          if (oThis.pk_customer === "") {
            oThis.$message({
              message: "请先保存基本信息",
              type: "error"
            });
            return;
          }
          let uitemplateComp = oThis.$refs.BankAccountRef.comp;
          let table = uitemplateComp.$refs["BankAccount_t_ref"];
          table.closeExpandRow();
          uitemplateComp.bankaccount = {};
          uitemplateComp.formShow = true;
          oThis.rmoveindex = "";
        }
      }],
      //BankAccountPk: "d1927a89-a8c4-42e7-bd26-484d6199fff2", //custaxes
      BankAccountData: {
        rules: {
          pk_country: [{ required: true, message: "发货国家不能为空", trigger: "blur" }],
          pk_taxes: [{ required: true, message: "税类不能为空", trigger: "blur" }]
        },
        cityParams: {}
      },
      BankAccountResetFun: function ($node) {
        var $refNode = this.getNodeById($node, '71k7srbgz9n'); //开户行省

        if ($refNode.length) {
          $refNode.attr("v-on:trigger", "handleRefChange");
        }

        let $table = $node.find('el-table');
        // $table.attr(":show-header", "false");
        let operateArr = [{
          title: "编辑",

          icon: "edit"
        }, {
          title: "删除",

          icon: "delete"
        }];
        let operateHtml = this.getTableOperateHtml(operateArr);

        $table.append(operateHtml);
        return $node[0].outerHTML;
      },
      t_Methods: {
        handleRefChange: function (type, data) {
          if (type === 'change') {

            let param = { 'key': data.value[0].innercode };
            oThis.$refs.BankAccountRef.setData('cityParams', param);
          }
        }
      },

      BankAccountTplMethods: {
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
      this.requestBankAccount();
    }
  },
  //页面操作
  mounted() {

    this.request();
  },
  methods: {
    //通过cookie获取当前登录用户的ID
    getCookie(cName) {
      let cStart;
      let cEnd;
      if (document.cookie.length > 0) {
        cStart = document.cookie.indexOf(cName + "=");
        if (cStart !== -1) {
          cStart = cStart + cName.length + 1;
          cEnd = document.cookie.indexOf(";", cStart);
          if (cEnd === -1) {
            cEnd = document.cookie.length;
          }
          return decodeURIComponent(document.cookie.substring(cStart, cEnd));
        }
      }
      return "";
    },

    /**
       *   初始响应方法
       **/
    request() {
      if (this.pk_customer != "") {
        this.requestBankAccount();
      }
    },
    //请求股东信息
    requestBankAccount() {
      let url;
      let ownerId = this.getCookie("_A_P_id");
      url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/BankAccount/page";
      let data = {
        pageNum: 0,
        pageSize: 0,
        searchParams: {
          searchMap: {
            custCondList: [{
              'key': 'pk_customer',
              'oper': '=',
              'value': this.pk_customer
            }, {
              'key': 'message_owner',
              'oper': '=',
              'value': ownerId
            }]
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
        this.$refs["BankAccountRef"].setData("BankAccount_t", JSON.parse(JSON.stringify(this.originalValue)));
      }).catch(() => {
        this.$message({
          message: "银行账户信息获取失败",
          type: "error"
        });
      });
    },
    //股东情况保存
    BankAccountFormConfirm: function () {
      //获取当前数据
      let data = this.$refs.BankAccountRef.comp.BankAccount;
      data.pk_customer = this.pk_customer;
      let baseUrl = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */];
      //保存校验
      this.$refs.BankAccountRef.comp.$refs["BankAccount_ref"].validate(valid => {
        if (valid) {
          this.$http({
            url: baseUrl + "cust/BankAccount/updateORinsert",
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
              let linarraydata = this.$refs.BankAccountRef.getData("BankAccount_t");
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
              this.$refs.BankAccountRef.setData("BankAccount_t", JSON.parse(JSON.stringify(linarraydata)));
              //隐藏详情列表
              this.$refs["BankAccountRef"].comp.formShow = false;
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
    BankAccountFormCancel: function (type) {
      if (type === "form") {
        this.$refs["BankAccountRef"].comp.formShow = false;
      } else {
        this.$refs["BankAccountRef"].getTableComp().closeExpandRow();
        let BankAccountTable = this.$refs.BankAccountRef.getData('BankAccount_t');
        BankAccountTable[this.baseEditIndex] = this.baseData; //获取点击修改前的值
        this.$refs.BankAccountRef.setData('BankAccount_t', BankAccountTable);
      }
    },
    //股东编辑
    BankAccountEditTableRow: function (scope) {
      //记录删除位置
      this.rmoveindex = scope.$index;
      //行下展开表单界面
      // let row = scope.row;
      // this.$refs["BankAccountRef"].getTableComp().expandRow(row);
      // this.$refs["BankAccountRef"].formShow = false;
      // //BankAccountRef为表单数据对象参数
      // this.$refs["BankAccountRef"].setData("BankAccount", row);
      this.$refs.BankAccountRef.getTableComp().expandRow(scope.row);
      this.$refs.BankAccountRef.comp.formShow = false;
      this.$refs.BankAccountRef.setData('BankAccount', scope.row);

      // 备份数据
      this.baseData = JSON.parse(JSON.stringify(scope.row));
      this.baseEditIndex = scope.$index;
    },
    //股东信息删除提示
    BankAccountDeleteTableRow: function (scope) {
      this.BankAccountDelVisible = true;
      this.delId = scope.row.pk_cust_bankaccount;
    },
    //股东信息删除
    BankAccountDeleteClick() {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/BankAccount/deleteById",
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
          this.requestBankAccount();
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
      this.BankAccountDelVisible = false;
      this.delId = "";
    }
  }
});

/***/ }),

/***/ 83:
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
  props: ["pk_customer"],
  data() {
    let oThis = this;
    let validator = function (rule, value, callback) {};
    return {
      funnode: "BT003",
      nexuskey: "CommRecord",
      CommRecordDelVisible: false,
      rmoveindex: "",
      delId: "",
      // 沟通记录信息新增
      CommRecordIcons: [{
        icon: "plus",
        click: function () {
          if (oThis.pk_customer === "") {
            oThis.$message({
              message: "请先保存基本信息",
              type: "error"
            });
            return;
          }
          let uitemplateComp = oThis.$refs.CommRecordRef.comp;
          let table = uitemplateComp.$refs["CommRecord_t_ref"];
          table.closeExpandRow();
          uitemplateComp.bankaccount = {};
          uitemplateComp.formShow = true;
          oThis.rmoveindex = "";
        }
      }],
      //CommRecordPk: "2ae822e7-5b83-4414-986d-3d56f667d02b", //custaxes
      CommRecordData: {
        rules: {
          pk_country: [{ required: true, message: "发货国家不能为空", trigger: "blur" }],
          pk_taxes: [{ required: true, message: "税类不能为空", trigger: "blur" }]
        }
      },
      CommRecordResetFun: function ($node) {
        let $table = $node.find('el-table');
        // $table.attr(":show-header", "false");
        let operateArr = [{
          title: "编辑",

          icon: "edit"
        }, {
          title: "删除",

          icon: "delete"
        }];
        let operateHtml = this.getTableOperateHtml(operateArr);

        $table.append(operateHtml);

        return $node[0].outerHTML;
      },
      CommRecordTplMethods: {
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
      this.requestCommRecord();
    }
  },
  //页面操作
  mounted() {

    this.request();
  },
  methods: {
    //通过cookie获取当前登录用户的ID
    getCookie(cName) {
      let cStart;
      let cEnd;
      if (document.cookie.length > 0) {
        cStart = document.cookie.indexOf(cName + "=");
        if (cStart !== -1) {
          cStart = cStart + cName.length + 1;
          cEnd = document.cookie.indexOf(";", cStart);
          if (cEnd === -1) {
            cEnd = document.cookie.length;
          }
          return decodeURIComponent(document.cookie.substring(cStart, cEnd));
        }
      }
      return "";
    },

    /**
       *   初始响应方法
       **/
    request() {
      if (this.pk_customer != "") {
        this.requestCommRecord();
      }
    },
    //请求沟通记录信息
    requestCommRecord() {
      let url;
      let ownerId = this.getCookie("_A_P_id");
      url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/CommRecord/page";
      let data = {
        pageNum: 0,
        pageSize: 0,
        searchParams: {
          searchMap: {
            pk_customer: this.pk_customer,
            message_owner: ownerId
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
        this.$refs["CommRecordRef"].setData("CommRecord_t", JSON.parse(JSON.stringify(this.originalValue)));
      }).catch(() => {
        this.$message({
          message: "沟通记录信息获取失败",
          type: "error"
        });
      });
    },
    //沟通记录情况保存
    CommRecordFormConfirm: function () {
      //获取当前数据
      let data = this.$refs.CommRecordRef.comp.CommRecord;
      data.pk_customer = this.pk_customer;
      let baseUrl = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */];
      //保存校验
      this.$refs.CommRecordRef.comp.$refs["CommRecord_ref"].validate(valid => {
        if (valid) {
          this.$http({
            url: baseUrl + "cust/CommRecord/updateORinsert",
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
              let linarraydata = this.$refs.CommRecordRef.getData("CommRecord_t");
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
              this.$refs.CommRecordRef.setData("CommRecord_t", JSON.parse(JSON.stringify(linarraydata)));
              //隐藏详情列表
              this.$refs["CommRecordRef"].comp.formShow = false;
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
    // 沟通记录信息form的取消操作
    CommRecordFormCancel: function (type) {
      if (type === "form") {
        this.$refs["CommRecordRef"].comp.formShow = false;
      } else {
        this.$refs["CommRecordRef"].getTableComp().closeExpandRow();
        let CommRecordTable = this.$refs.CommRecordRef.getData('CommRecord_t');
        CommRecordTable[this.baseEditIndex] = this.baseData; //获取点击修改前的值
        this.$refs.CommRecordRef.setData('CommRecord_t', CommRecordTable);
      }
    },
    //沟通记录编辑
    CommRecordEditTableRow: function (scope) {
      //记录删除位置
      this.rmoveindex = scope.$index;
      //行下展开表单界面
      // let row = scope.row;
      // this.$refs["CommRecordRef"].getTableComp().expandRow(row);
      // this.$refs["CommRecordRef"].formShow = false;
      // //CommRecordRef为表单数据对象参数
      // this.$refs["CommRecordRef"].setData("CommRecord", row);
      this.$refs.CommRecordRef.getTableComp().expandRow(scope.row);
      this.$refs.CommRecordRef.comp.formShow = false;
      this.$refs.CommRecordRef.setData('CommRecord', scope.row);

      // 备份数据
      this.baseData = JSON.parse(JSON.stringify(scope.row));
      this.baseEditIndex = scope.$index;
    },
    //沟通记录信息删除提示
    CommRecordDeleteTableRow: function (scope) {
      this.CommRecordDelVisible = true;

      this.delId = scope.row.pk_cust_comm_record;
    },
    //沟通记录信息删除
    CommRecordDeleteClick() {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/CommRecord/deleteById",
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
          this.requestCommRecord();
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
      this.CommRecordDelVisible = false;
      this.delId = "";
    }
  }
});

/***/ }),

/***/ 84:
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
      funnode: "BT003",
      nexuskey: "ContractHand_UI",
      ContractHandDelVisible: false,
      rmoveindex: "",
      delId: "",
      // 在手合同信息新增
      ContractHandIcons: [{
        icon: "plus",
        click: function () {
          if (oThis.pk_customer === "") {
            oThis.$message({
              message: "不可操作！",
              type: "error"
            });
            return;
          }
          // let uitemplateComp = oThis.$refs.ContractHandRef.comp;
          // let table = uitemplateComp.$refs["ContractHand_t_ref"];
          // table.closeExpandRow();
          // uitemplateComp.bankaccount = {};
          // uitemplateComp.formShow = true;
          oThis.rmoveindex = "";
        }
      }],
      ContractHandPk: "4ff44758-7b27-416f-8b80-ba1206bfa74d", //custaxes
      ContractHandData: {
        rules: {
          pk_country: [{ required: true, message: "发货国家不能为空", trigger: "blur" }],
          pk_taxes: [{ required: true, message: "税类不能为空", trigger: "blur" }]
        }
      },
      ContractHandResetFun: function ($node) {
        let $table = $node.find('el-table');

        //客户选择联动
        var $refNode1 = this.getNodeById($node, 'gn03ic7ywx5');

        if ($refNode1.length) {
          $refNode1.attr("v-on:trigger", "handleRefChange1");
        }

        // $table.attr(":show-header", "false");
        let operateArr = [{
          title: "查看",

          icon: "search"
        }];
        let operateHtml = this.getTableOperateHtml(operateArr);

        $table.append(operateHtml);

        return $node[0].outerHTML;
      },
      t_Methods: {
        handleRefChange1: function (type, data) {

          if (type === 'change') {

            this.$refs['ContractHand_ref'].model.customer_code = data.value[0].code;
          }
        }
      },
      ContractHandTplMethods: {
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
      this.requestContractHand();
    }
  },
  //页面操作
  mounted() {

    this.request();
  },
  methods: {
    //通过cookie获取当前登录用户的ID
    getCookie(cName) {
      let cStart;
      let cEnd;
      if (document.cookie.length > 0) {
        cStart = document.cookie.indexOf(cName + "=");
        if (cStart !== -1) {
          cStart = cStart + cName.length + 1;
          cEnd = document.cookie.indexOf(";", cStart);
          if (cEnd === -1) {
            cEnd = document.cookie.length;
          }
          return decodeURIComponent(document.cookie.substring(cStart, cEnd));
        }
      }
      return "";
    },
    /**
       *   初始响应方法
       **/
    request() {
      if (this.pk_customer != "") {
        this.requestContractHand();
      }
    },
    //请求在手合同信息
    requestContractHand() {
      let url;
      let ownerId = this.getCookie("_A_P_id");
      url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/ContractHand/page";
      let data = {
        pageNum: 0,
        pageSize: 0,
        searchParams: {
          searchMap: {
            pk_customer: this.pk_customer,
            message_owner: ownerId
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
        this.$refs["ContractHandRef"].setData("ContractHand_t", JSON.parse(JSON.stringify(this.originalValue)));
      }).catch(() => {
        this.$message({
          message: "合同历史信息获取失败",
          type: "error"
        });
      });
    },
    //在手合同情况保存
    ContractHandFormConfirm: function () {
      //获取当前数据
      let data = this.$refs.ContractHandRef.comp.ContractHand;
      data.pk_customer = this.pk_customer;
      let baseUrl = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */];

      //保存校验
      this.$refs.ContractHandRef.comp.$refs["ContractHand_ref"].validate(valid => {
        if (valid) {
          this.$http({
            url: baseUrl + "cust/ContractHand/updateORinsert",
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
              let linarraydata = this.$refs.ContractHandRef.getData("ContractHand_t");
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
              this.$refs.ContractHandRef.setData("ContractHand_t", JSON.parse(JSON.stringify(linarraydata)));
              //隐藏详情列表
              this.$refs["ContractHandRef"].comp.formShow = false;
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
    // 在手合同信息form的取消操作
    ContractHandFormCancel: function (type) {
      if (type === "form") {
        this.$refs["ContractHandRef"].comp.formShow = false;
      } else {
        this.$refs["ContractHandRef"].getTableComp().closeExpandRow();
        let ContractHandTable = this.$refs.ContractHandRef.getData('ContractHand_t');
        ContractHandTable[this.baseEditIndex] = this.baseData; //获取点击修改前的值
        this.$refs.ContractHandRef.setData('ContractHand_t', ContractHandTable);
      }
    },
    //在手合同编辑
    ContractHandEditTableRow: function (scope) {
      //记录删除位置
      this.rmoveindex = scope.$index;
      //行下展开表单界面
      // let row = scope.row;
      // this.$refs["ContractHandRef"].getTableComp().expandRow(row);
      // this.$refs["ContractHandRef"].formShow = false;
      // //ContractHandRef为表单数据对象参数
      // this.$refs["ContractHandRef"].setData("ContractHand", row);
      this.$refs.ContractHandRef.getTableComp().expandRow(scope.row);
      this.$refs.ContractHandRef.comp.formShow = false;
      this.$refs.ContractHandRef.setData('ContractHand', scope.row);

      // 备份数据
      this.baseData = JSON.parse(JSON.stringify(scope.row));
      this.baseEditIndex = scope.$index;
    },
    //在手合同信息删除提示
    ContractHandDeleteTableRow: function (scope) {
      this.ContractHandDelVisible = true;
      this.delId = scope.row.pk_cust_contract_hand;
    },
    //在手合同信息删除
    ContractHandDeleteClick() {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/ContractHand/deleteById",
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
          this.requestContractHand();
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
      this.ContractHandDelVisible = false;
      this.delId = "";
    }
  }
});

/***/ }),

/***/ 85:
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


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["pk_customer"],
  data() {
    let oThis = this;
    let validator = function (rule, value, callback) {};
    return {
      CustUpDownDelVisible: false,
      rmoveindex: "",
      delId: "",
      // 上下游客户信息新增
      CustUpDownIcons: [{
        icon: "plus",
        click: function () {
          if (oThis.pk_customer === "") {
            oThis.$message({
              message: "请先保存基本信息",
              type: "error"
            });
            return;
          }
          let uitemplateComp = oThis.$refs.CustUpDownRef.comp;
          let table = uitemplateComp.$refs["CustUpDown_t_ref"];
          table.closeExpandRow();
          uitemplateComp.bankaccount = {};
          uitemplateComp.formShow = true;
          oThis.rmoveindex = "";
        }
      }],
      CustUpDownPk: "b3d4602b-1b66-45c9-bd97-8d2e8ebf5e5d", //custaxes
      CustUpDownData: {
        rules: {
          pk_country: [{ required: true, message: "发货国家不能为空", trigger: "blur" }],
          pk_taxes: [{ required: true, message: "税类不能为空", trigger: "blur" }]
        }
      },
      CustUpDownResetFun: function ($node) {
        let $table = this.getNodeById($node, "ziehg8lr0t");
        // $table.attr(":show-header", "false");
        let operateArr = [{
          title: "编辑",

          icon: "edit"
        }, {
          title: "删除",

          icon: "delete"
        }];
        let operateHtml = this.getTableOperateHtml(operateArr);

        $table.append(operateHtml);

        let $pkCountry = this.getNodeById($node, "u5itmgcx7c");
        let $pkTaxes = this.getNodeById($node, "1idpzwci9up");
        $pkCountry.html('<template scope="scope"><div>{{scope.row.beanMap?' + "(scope.row.beanMap.pk_country_ref?" + 'scope.row.beanMap.pk_country_ref[scope.row.pk_country].name:""):""}}' + "</div></template>");

        $pkTaxes.html('<template scope="scope"><div>{{scope.row.beanMap?' + "(scope.row.beanMap.pk_taxes_ref?" + 'scope.row.beanMap.pk_taxes_ref[scope.row.pk_taxes].name:""):""}}' + "</div></template>");

        return $node[0].outerHTML;
      },
      CustUpDownTplMethods: {
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
      this.requestCustUpDown();
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
        this.requestCustUpDown();
      }
    },
    //请求上下游客户信息
    requestCustUpDown() {
      let url;
      url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/CustUpDown/page";
      let data = {
        pageNum: 0,
        pageSize: 0,
        searchParams: {
          searchMap: {
            pk_customer: this.pk_customer
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
        this.$refs["CustUpDownRef"].setData("CustUpDown_t", JSON.parse(JSON.stringify(this.originalValue)));
      }).catch(() => {
        this.$message({
          message: "上下游客户信息获取失败",
          type: "error"
        });
      });
    },
    //上下游客户情况保存
    CustUpDownFormConfirm: function () {
      //获取当前数据
      let data = this.$refs.CustUpDownRef.comp.CustUpDown;
      data.pk_customer = this.pk_customer;
      let baseUrl = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */];
      //保存校验
      this.$refs.CustUpDownRef.comp.$refs["CustUpDown_ref"].validate(valid => {
        if (valid) {
          this.$http({
            url: baseUrl + "cust/CustUpDown/updateORinsert",
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
              let linarraydata = this.$refs.CustUpDownRef.getData("CustUpDown_t");
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
              this.$refs.CustUpDownRef.setData("CustUpDown_t", JSON.parse(JSON.stringify(linarraydata)));
              //隐藏详情列表
              this.$refs["CustUpDownRef"].comp.formShow = false;
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
    // 上下游客户信息form的取消操作
    CustUpDownFormCancel: function (type) {
      if (type === "form") {
        this.$refs["CustUpDownRef"].comp.formShow = false;
      } else {
        this.$refs["CustUpDownRef"].getTableComp().closeExpandRow();
        let CustUpDownTable = this.$refs.CustUpDownRef.getData('CustUpDown_t');
        CustUpDownTable[this.baseEditIndex] = this.baseData; //获取点击修改前的值
        this.$refs.CustUpDownRef.setData('CustUpDown_t', CustUpDownTable);
      }
    },
    //上下游客户编辑
    CustUpDownEditTableRow: function (scope) {
      //记录删除位置
      this.rmoveindex = scope.$index;
      //行下展开表单界面
      // let row = scope.row;
      // this.$refs["CustUpDownRef"].getTableComp().expandRow(row);
      // this.$refs["CustUpDownRef"].formShow = false;
      // //CustUpDownRef为表单数据对象参数
      // this.$refs["CustUpDownRef"].setData("CustUpDown", row);
      this.$refs.CustUpDownRef.getTableComp().expandRow(scope.row);
      this.$refs.CustUpDownRef.comp.formShow = false;
      this.$refs.CustUpDownRef.setData('CustUpDown', scope.row);

      // 备份数据
      this.baseData = JSON.parse(JSON.stringify(scope.row));
      this.baseEditIndex = scope.$index;
    },
    //上下游客户信息删除提示
    CustUpDownDeleteTableRow: function (scope) {
      this.CustUpDownDelVisible = true;
      this.delId = scope.row.pk_cust_updown;
    },
    //上下游客户信息删除
    CustUpDownDeleteClick() {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/CustUpDown/deleteById",
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
          this.requestCustUpDown();
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
      this.CustUpDownDelVisible = false;
      this.delId = "";
    }
  }
});

/***/ }),

/***/ 86:
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
      funnode: "BT003",
      nexuskey: "EquityInvest",
      EquityInvestDelVisible: false,
      rmoveindex: "",
      delId: "",
      // 股权投资信息新增
      EquityInvestIcons: [{
        icon: "plus",
        click: function () {
          if (oThis.pk_customer === "") {
            oThis.$message({
              message: "请先保存基本信息",
              type: "error"
            });
            return;
          }
          let uitemplateComp = oThis.$refs.EquityInvestRef.comp;
          let table = uitemplateComp.$refs["EquityInvest_t_ref"];
          table.closeExpandRow();
          uitemplateComp.bankaccount = {};
          uitemplateComp.formShow = true;
          oThis.rmoveindex = "";
        }
      }],
      EquityInvestPk: "06b01680-522c-4fd4-8276-cc9f3f6d681f", //custaxes
      EquityInvestData: {
        rules: {
          pk_country: [{ required: true, message: "发货国家不能为空", trigger: "blur" }],
          pk_taxes: [{ required: true, message: "税类不能为空", trigger: "blur" }]
        }
      },
      EquityInvestResetFun: function ($node) {
        let $table = $node.find('el-table');
        // $table.attr(":show-header", "false");
        var $refNode1 = this.getNodeById($node, 't9t6cqb85l');
        if ($refNode1.length) {
          $refNode1.attr("v-on:trigger", "handleRefChange1");
        }

        let operateArr = [{
          title: "编辑",

          icon: "edit"
        }, {
          title: "删除",

          icon: "delete"
        }];
        let operateHtml = this.getTableOperateHtml(operateArr);

        $table.append(operateHtml);

        return $node[0].outerHTML;
      },
      t_Methods: {
        handleRefChange1: function (type, data) {

          if (type === 'change') {

            this.$refs['EquityInvest_ref'].model.customer_code = data.value[0].code;
          }
        }
      },
      EquityInvestTplMethods: {
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
      this.requestEquityInvest();
    }
  },
  //页面操作
  mounted() {

    this.request();
  },
  methods: {
    //通过cookie获取当前登录用户的ID
    getCookie(cName) {
      let cStart;
      let cEnd;
      if (document.cookie.length > 0) {
        cStart = document.cookie.indexOf(cName + "=");
        if (cStart !== -1) {
          cStart = cStart + cName.length + 1;
          cEnd = document.cookie.indexOf(";", cStart);
          if (cEnd === -1) {
            cEnd = document.cookie.length;
          }
          return decodeURIComponent(document.cookie.substring(cStart, cEnd));
        }
      }
      return "";
    },

    /**
       *   初始响应方法
       **/
    request() {
      if (this.pk_customer != "") {
        this.requestEquityInvest();
      }
    },
    //请求股权投资信息
    requestEquityInvest() {
      let url;
      let ownerId = this.getCookie("_A_P_id");
      url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/EquityInvest/page";
      let data = {
        pageNum: 0,
        pageSize: 0,
        searchParams: {
          searchMap: {
            pk_customer: this.pk_customer,
            message_owner: ownerId
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
        this.$refs["EquityInvestRef"].setData("EquityInvest_t", JSON.parse(JSON.stringify(this.originalValue)));
      }).catch(() => {
        this.$message({
          message: "股权投资信息获取失败",
          type: "error"
        });
      });
    },
    //股权投资情况保存
    EquityInvestFormConfirm: function () {
      //获取当前数据
      let data = this.$refs.EquityInvestRef.comp.EquityInvest;
      data.pk_customer = this.pk_customer;
      let baseUrl = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */];
      //保存校验
      this.$refs.EquityInvestRef.comp.$refs["EquityInvest_ref"].validate(valid => {
        if (valid) {
          this.$http({
            url: baseUrl + "cust/EquityInvest/updateORinsert",
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
              let linarraydata = this.$refs.EquityInvestRef.getData("EquityInvest_t");
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
              this.$refs.EquityInvestRef.setData("EquityInvest_t", JSON.parse(JSON.stringify(linarraydata)));
              //隐藏详情列表
              this.$refs["EquityInvestRef"].comp.formShow = false;
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
    // 股权投资信息form的取消操作
    EquityInvestFormCancel: function (type) {
      if (type === "form") {
        this.$refs["EquityInvestRef"].comp.formShow = false;
      } else {
        this.$refs["EquityInvestRef"].getTableComp().closeExpandRow();
        let EquityInvestTable = this.$refs.EquityInvestRef.getData('EquityInvest_t');
        EquityInvestTable[this.baseEditIndex] = this.baseData; //获取点击修改前的值
        this.$refs.EquityInvestRef.setData('EquityInvest_t', EquityInvestTable);
      }
    },
    //股权投资编辑
    EquityInvestEditTableRow: function (scope) {
      //记录删除位置
      this.rmoveindex = scope.$index;
      //行下展开表单界面
      // let row = scope.row;
      // this.$refs["EquityInvestRef"].getTableComp().expandRow(row);
      // this.$refs["EquityInvestRef"].formShow = false;
      // //EquityInvestRef为表单数据对象参数
      // this.$refs["EquityInvestRef"].setData("EquityInvest", row);
      this.$refs.EquityInvestRef.getTableComp().expandRow(scope.row);
      this.$refs.EquityInvestRef.comp.formShow = false;
      this.$refs.EquityInvestRef.setData('EquityInvest', scope.row);

      // 备份数据
      this.baseData = JSON.parse(JSON.stringify(scope.row));
      this.baseEditIndex = scope.$index;
    },
    //股权投资信息删除提示
    EquityInvestDeleteTableRow: function (scope) {
      this.EquityInvestDelVisible = true;
      this.delId = scope.row.pk_cust_equity_invest;
    },
    //股权投资信息删除
    EquityInvestDeleteClick() {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/EquityInvest/deleteById",
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
          this.requestEquityInvest();
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
      this.EquityInvestDelVisible = false;
      this.delId = "";
    }
  }
});

/***/ }),

/***/ 87:
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
  props: ["pk_customer"],
  data() {
    let oThis = this;
    let validator = function (rule, value, callback) {};
    return {
      funnode: "BT003",
      nexuskey: "ExternalRating",
      ExternalRatingDelVisible: false,
      rmoveindex: "",
      delId: "",
      // 外部评级信息新增
      ExternalRatingIcons: [{
        icon: "plus",
        click: function () {
          if (oThis.pk_customer === "") {
            oThis.$message({
              message: "请先保存基本信息",
              type: "error"
            });
            return;
          }
          let uitemplateComp = oThis.$refs.ExternalRatingRef.comp;
          let table = uitemplateComp.$refs["ExternalRating_t_ref"];
          table.closeExpandRow();
          uitemplateComp.bankaccount = {};
          uitemplateComp.formShow = true;
          oThis.rmoveindex = "";
        }
      }],
      ExternalRatingPk: "01b45188-5c39-4283-9a55-f7d223a95889", //custaxes
      ExternalRatingData: {
        rules: {
          pk_country: [{ required: true, message: "发货国家不能为空", trigger: "blur" }],
          pk_taxes: [{ required: true, message: "税类不能为空", trigger: "blur" }]
        }
      },
      ExternalRatingResetFun: function ($node) {
        let $table = $node.find('el-table');
        // $table.attr(":show-header", "false");
        let operateArr = [{
          title: "编辑",

          icon: "edit"
        }, {
          title: "删除",

          icon: "delete"
        }];
        let operateHtml = this.getTableOperateHtml(operateArr);

        $table.append(operateHtml);

        let $pkCountry = this.getNodeById($node, "u5itmgcx7c");
        let $pkTaxes = this.getNodeById($node, "1idpzwci9up");
        $pkCountry.html('<template scope="scope"><div>{{scope.row.beanMap?' + "(scope.row.beanMap.pk_country_ref?" + 'scope.row.beanMap.pk_country_ref[scope.row.pk_country].name:""):""}}' + "</div></template>");

        $pkTaxes.html('<template scope="scope"><div>{{scope.row.beanMap?' + "(scope.row.beanMap.pk_taxes_ref?" + 'scope.row.beanMap.pk_taxes_ref[scope.row.pk_taxes].name:""):""}}' + "</div></template>");

        return $node[0].outerHTML;
      },
      ExternalRatingTplMethods: {
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
      this.requestExternalRating();
    }
  },
  //页面操作
  mounted() {

    this.request();
  },
  methods: {
    //通过cookie获取当前登录用户的ID
    getCookie(cName) {
      let cStart;
      let cEnd;
      if (document.cookie.length > 0) {
        cStart = document.cookie.indexOf(cName + "=");
        if (cStart !== -1) {
          cStart = cStart + cName.length + 1;
          cEnd = document.cookie.indexOf(";", cStart);
          if (cEnd === -1) {
            cEnd = document.cookie.length;
          }
          return decodeURIComponent(document.cookie.substring(cStart, cEnd));
        }
      }
      return "";
    },

    /**
       *   初始响应方法
       **/
    request() {
      if (this.pk_customer != "") {
        this.requestExternalRating();
      }
    },
    //请求外部评级信息
    requestExternalRating() {
      let url;
      let ownerId = this.getCookie("_A_P_id");
      url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/ExternalRating/page";
      let data = {
        pageNum: 0,
        pageSize: 0,
        searchParams: {
          searchMap: {
            custCondList: [{
              'key': 'pk_customer',
              'oper': '=',
              'value': this.pk_customer
            }, {
              'key': 'message_owner',
              'oper': '=',
              'value': ownerId
            }]
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
        this.$refs["ExternalRatingRef"].setData("ExternalRating_t", JSON.parse(JSON.stringify(this.originalValue)));
      }).catch(() => {
        this.$message({
          message: "外部评级信息获取失败",
          type: "error"
        });
      });
    },
    //外部评级情况保存
    ExternalRatingFormConfirm: function () {
      //获取当前数据
      let data = this.$refs.ExternalRatingRef.comp.ExternalRating;
      data.pk_customer = this.pk_customer;
      let baseUrl = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */];
      //保存校验
      this.$refs.ExternalRatingRef.comp.$refs["ExternalRating_ref"].validate(valid => {
        if (valid) {
          this.$http({
            url: baseUrl + "cust/ExternalRating/updateORinsert",
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
              let linarraydata = this.$refs.ExternalRatingRef.getData("ExternalRating_t");
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
              this.$refs.ExternalRatingRef.setData("ExternalRating_t", JSON.parse(JSON.stringify(linarraydata)));
              //隐藏详情列表
              this.$refs["ExternalRatingRef"].comp.formShow = false;
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
    // 外部评级信息form的取消操作
    ExternalRatingFormCancel: function (type) {
      if (type === "form") {
        this.$refs["ExternalRatingRef"].comp.formShow = false;
      } else {
        this.$refs["ExternalRatingRef"].getTableComp().closeExpandRow();
        let ExternalRatingTable = this.$refs.ExternalRatingRef.getData('ExternalRating_t');
        ExternalRatingTable[this.baseEditIndex] = this.baseData; //获取点击修改前的值
        this.$refs.ExternalRatingRef.setData('ExternalRating_t', ExternalRatingTable);
      }
    },
    //外部评级编辑
    ExternalRatingEditTableRow: function (scope) {
      //记录删除位置
      this.rmoveindex = scope.$index;
      //行下展开表单界面
      // let row = scope.row;
      // this.$refs["ExternalRatingRef"].getTableComp().expandRow(row);
      // this.$refs["ExternalRatingRef"].formShow = false;
      // //ExternalRatingRef为表单数据对象参数
      // this.$refs["ExternalRatingRef"].setData("ExternalRating", row);
      this.$refs.ExternalRatingRef.getTableComp().expandRow(scope.row);
      this.$refs.ExternalRatingRef.comp.formShow = false;
      this.$refs.ExternalRatingRef.setData('ExternalRating', scope.row);

      // 备份数据
      this.baseData = JSON.parse(JSON.stringify(scope.row));
      this.baseEditIndex = scope.$index;
    },
    //外部评级信息删除提示
    ExternalRatingDeleteTableRow: function (scope) {
      this.ExternalRatingDelVisible = true;
      this.delId = scope.row.pk_cust_external_rating;
    },
    //外部评级信息删除
    ExternalRatingDeleteClick() {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/ExternalRating/deleteById",
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
          this.requestExternalRating();
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
      this.ExternalRatingDelVisible = false;
      this.delId = "";
    }
  }
});

/***/ }),

/***/ 88:
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
  props: ["pk_customer"],
  data() {
    let oThis = this;
    let validator = function (rule, value, callback) {};
    return {
      funnode: "BT003",
      nexuskey: "LitigationSituation",
      LitigationSituationDelVisible: false,
      rmoveindex: "",
      delId: "",
      // 涉诉信息新增
      LitigationSituationIcons: [{
        icon: "plus",
        click: function () {
          if (oThis.pk_customer === "") {
            oThis.$message({
              message: "请先保存基本信息",
              type: "error"
            });
            return;
          }
          let uitemplateComp = oThis.$refs.LitigationSituationRef.comp;
          let table = uitemplateComp.$refs["LitigationSituation_t_ref"];
          table.closeExpandRow();
          uitemplateComp.bankaccount = {};
          uitemplateComp.formShow = true;
          oThis.rmoveindex = "";
        }
      }],
      LitigationSituationPk: "4a422aaa-feef-4858-8769-a8f4c48db8d1", //custaxes
      LitigationSituationData: {
        rules: {
          pk_country: [{ required: true, message: "发货国家不能为空", trigger: "blur" }],
          pk_taxes: [{ required: true, message: "税类不能为空", trigger: "blur" }]
        }
      },
      LitigationSituationResetFun: function ($node) {
        let $table = $node.find('el-table');
        // $table.attr(":show-header", "false");
        let operateArr = [{
          title: "编辑",

          icon: "edit"
        }, {
          title: "删除",

          icon: "delete"
        }];
        let operateHtml = this.getTableOperateHtml(operateArr);

        $table.append(operateHtml);
        return $node[0].outerHTML;
      },
      LitigationSituationTplMethods: {
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
      this.requestLitigationSituation();
    }
  },
  //页面操作
  mounted() {

    this.request();
  },
  methods: {
    //通过cookie获取当前登录用户的ID
    getCookie(cName) {
      let cStart;
      let cEnd;
      if (document.cookie.length > 0) {
        cStart = document.cookie.indexOf(cName + "=");
        if (cStart !== -1) {
          cStart = cStart + cName.length + 1;
          cEnd = document.cookie.indexOf(";", cStart);
          if (cEnd === -1) {
            cEnd = document.cookie.length;
          }
          return decodeURIComponent(document.cookie.substring(cStart, cEnd));
        }
      }
      return "";
    },

    /**
       *   初始响应方法
       **/
    request() {
      if (this.pk_customer != "") {
        this.requestLitigationSituation();
      }
    },
    //请求涉诉信息
    requestLitigationSituation() {
      let url;
      let ownerId = this.getCookie("_A_P_id");
      url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/LitigationSituation/page";
      let data = {
        pageNum: 0,
        pageSize: 0,
        searchParams: {
          searchMap: {
            custCondList: [{
              'key': 'pk_customer',
              'oper': '=',
              'value': this.pk_customer
            }, {
              'key': 'message_owner',
              'oper': '=',
              'value': ownerId
            }]
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
        this.$refs["LitigationSituationRef"].setData("LitigationSituation_t", JSON.parse(JSON.stringify(this.originalValue)));
      }).catch(() => {
        this.$message({
          message: "涉诉信息获取失败",
          type: "error"
        });
      });
    },
    //涉诉信息保存
    LitigationSituationFormConfirm: function () {

      //获取当前数据
      let data = this.$refs.LitigationSituationRef.comp.LitigationSituation;
      data.pk_customer = this.pk_customer;
      let baseUrl = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */];
      //保存校验
      this.$refs.LitigationSituationRef.comp.$refs["LitigationSituation_ref"].validate(valid => {
        if (valid) {
          this.$http({
            url: baseUrl + "cust/LitigationSituation/updateORinsert",
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
              let linarraydata = this.$refs.LitigationSituationRef.getData("LitigationSituation_t");
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
              this.$refs.LitigationSituationRef.setData("LitigationSituation_t", JSON.parse(JSON.stringify(linarraydata)));
              //隐藏详情列表
              this.$refs["LitigationSituationRef"].comp.formShow = false;
              //this.requestLitigationSituation();
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
    // 涉诉信息form的取消操作
    LitigationSituationFormCancel: function (type) {

      this.$refs.LitigationSituationRef.getTableComp().closeExpandRow();
      if (type === "form") {
        this.$refs["LitigationSituationRef"].comp.formShow = false;
      } else {
        this.$refs["LitigationSituationRef"].getTableComp().closeExpandRow();
        let LitigationSituationTable = this.$refs.LitigationSituationRef.getData('LitigationSituation_t');
        LitigationSituationTable[this.baseEditIndex] = this.baseData;
        this.$refs.LitigationSituationRef.setData('LitigationSituation_t', LitigationSituationTable);
      }
    },
    //涉诉编辑
    LitigationSituationEditTableRow: function (scope) {
      //记录位置
      this.rmoveindex = scope.$index;
      // //行下展开表单界面
      let row = scope.row;
      // this.$refs["LitigationSituationRef"].getTableComp().expandRow(row);
      // this.$refs["LitigationSituationRef"].formShow = false;
      // //LitigationSituationRef为表单数据对象参数
      // this.$refs["LitigationSituationRef"].setData("LitigationSituation", row);

      this.$refs.LitigationSituationRef.getTableComp().expandRow(scope.row);
      this.$refs.LitigationSituationRef.comp.formShow = false;
      this.$refs.LitigationSituationRef.setData('LitigationSituation', scope.row);

      // 备份数据
      this.baseData = JSON.parse(JSON.stringify(scope.row));
      this.baseEditIndex = scope.$index;
    },
    //涉诉信息删除提示
    LitigationSituationDeleteTableRow: function (scope) {
      this.LitigationSituationDelVisible = true;
      this.delId = scope.row.pk_cust_litigation_situation;
    },
    //涉诉信息删除
    LitigationSituationDeleteClick() {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/LitigationSituation/deleteById",
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
          this.requestLitigationSituation();
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
      this.LitigationSituationDelVisible = false;
      this.delId = "";
    }
  }
});

/***/ }),

/***/ 89:
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
      funnode: "BT003",
      nexuskey: "Member",
      MemberDelVisible: false,
      rmoveindex: "",
      delId: "",
      // 客户来源信息新增
      MemberIcons: [{
        icon: "plus",
        click: function () {
          if (oThis.pk_customer === "") {
            oThis.$message({
              message: "请先保存基本信息",
              type: "error"
            });
            return;
          }
          let uitemplateComp = oThis.$refs.MemberRef.comp;
          let table = uitemplateComp.$refs["Member_t_ref"];
          table.closeExpandRow();
          uitemplateComp.bankaccount = {};
          uitemplateComp.formShow = true;
          oThis.rmoveindex = "";
        }
      }],

      MemberData: {
        isEdit: false
      },
      MemberResetFun: function ($node) {
        let $refNode = $node.find("el-ref[v-model='Member.customer_name']");

        if ($refNode.length) {
          $refNode.attr("v-on:trigger", "handleRefChange");
        }
        let $refNodeIdType = $node.find("el-select[v-model='Member.identity_type']"); //获取证件类型节点
        $refNodeIdType.attr("v-bind:disabled", 'isEdit'); //选择参照变成不可编辑
        let $refNodeIdNo = $node.find("el-input[v-model='Member.identity_card_numb']"); //获取证件号节点
        $refNodeIdNo.attr("v-bind:disabled", 'isEdit'); //选择参照变成不可编辑


        let $table = $node.find('el-table');
        // $table.attr(":show-header", "false");
        let operateArr = [{
          title: "编辑",

          icon: "edit"
        }, {
          title: "删除",

          icon: "delete"
        }];
        let operateHtml = this.getTableOperateHtml(operateArr);

        $table.append(operateHtml);
        return $node[0].outerHTML;
      },
      t_Methods: {
        handleRefChange: function (type, data) {

          if (type === 'change') {

            this.$refs['Member_ref'].model.pk_customer_ref = data.value[0].code;
            this.$refs['Member_ref'].model.identity_type = data.value[0].identity_type;
            this.$refs['Member_ref'].model.identity_card_numb = data.value[0].identity_no;
            oThis.$refs["MemberRef"].setData("isEdit", true);
          }
        }
      },
      MemberTplMethods: {
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
      this.requestMember();
    }
  },
  //页面操作
  mounted() {

    this.request();
  },
  methods: {
    //通过cookie获取当前登录用户的ID
    getCookie(cName) {
      let cStart;
      let cEnd;
      if (document.cookie.length > 0) {
        cStart = document.cookie.indexOf(cName + "=");
        if (cStart !== -1) {
          cStart = cStart + cName.length + 1;
          cEnd = document.cookie.indexOf(";", cStart);
          if (cEnd === -1) {
            cEnd = document.cookie.length;
          }
          return decodeURIComponent(document.cookie.substring(cStart, cEnd));
        }
      }
      return "";
    },

    /**
       *   初始响应方法
       **/
    request() {
      if (this.pk_customer != "") {
        this.requestMember();
      }
    },
    //请求客户来源信息
    requestMember() {
      debugger;
      let url;
      let ownerId = this.getCookie("_A_P_id");
      url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/Member/page";
      let data = {
        "orderList": [{
          "direction": "desc",
          "property": "ts"
        }],
        'pageNum': 0,
        'pageSize': 100,
        "searchParams": {
          "searchMap": {
            custCondList: [{
              'key': 'pk_customer',
              'oper': '=',
              'value': this.pk_customer
            }, {
              'key': 'message_owner',
              'oper': '=',
              'value': ownerId
            }]

          }
        }
      };

      this.$http({
        url: url,
        headers: { "Content-Type": "application/json" },
        method: "post",
        data: data
      }).then(res => {
        debugger;
        this.originalValue = res.data.data.content;
        this.$refs["MemberRef"].setData("Member_t", JSON.parse(JSON.stringify(this.originalValue)));
      }).catch(() => {
        this.$message({
          message: "高管信息获取失败",
          type: "error"
        });
      });
    },
    //客户来源情况保存
    MemberFormConfirm: function () {

      //获取当前数据
      debugger;
      let data = this.$refs.MemberRef.comp.Member;
      data.pk_customer = this.pk_customer;

      let baseUrl = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */];
      //保存校验

      this.$refs.MemberRef.comp.$refs["Member_ref"].validate(valid => {

        if (valid) {
          this.$http({
            url: baseUrl + "cust/Member/updateORinsert",
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
              let linarraydata = this.$refs.MemberRef.getData("Member_t");
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
              this.$refs.MemberRef.setData("Member_t", JSON.parse(JSON.stringify(linarraydata)));
              //隐藏详情列表
              this.$refs["MemberRef"].comp.formShow = false;
              //this.requestMember();
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
    // 客户来源信息form的取消操作
    MemberFormCancel: function (type) {
      if (type === "form") {
        this.$refs["MemberRef"].comp.formShow = false;
      } else {
        this.$refs.MemberRef.getTableComp().closeExpandRow();
        let MemberTable = this.$refs.MemberRef.getData('Member_t');
        MemberTable[this.baseEditIndex] = this.baseData;
        this.$refs.MemberRef.setData('Member_t', MemberTable);
      }
    },
    //客户来源编辑
    MemberEditTableRow: function (scope) {
      //记录位置
      this.rmoveindex = scope.$index;
      // //行下展开表单界面
      let row = scope.row;
      this.$refs.MemberRef.getTableComp().expandRow(scope.row);
      this.$refs.MemberRef.comp.formShow = false;
      this.$refs.MemberRef.setData('Member', scope.row);

      // 备份数据
      this.baseData = JSON.parse(JSON.stringify(scope.row));
      this.baseEditIndex = scope.$index;
    },
    //客户来源信息删除提示
    MemberDeleteTableRow: function (scope) {
      this.MemberDelVisible = true;
      this.delId = scope.row.pk_cust_member;
    },
    //客户来源信息删除
    MemberDeleteClick() {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/Member/deleteById",
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
          this.requestMember();
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
      this.MemberDelVisible = false;
      this.delId = "";
    }
  }
});

/***/ }),

/***/ 90:
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
  props: ["pk_customer"],
  data() {
    let oThis = this;
    let validator = function (rule, value, callback) {};
    return {
      funnode: "BT003",
      nexuskey: "QualificationCert",
      QualificationCertDelVisible: false,
      rmoveindex: "",
      delId: "",
      // 资质认证信息新增
      QualificationCertIcons: [{
        icon: "plus",
        click: function () {
          if (oThis.pk_customer === "") {
            oThis.$message({
              message: "请先保存基本信息",
              type: "error"
            });
            return;
          }
          let uitemplateComp = oThis.$refs.QualificationCertRef.comp;
          let table = uitemplateComp.$refs["QualificationCert_t_ref"];
          table.closeExpandRow();
          uitemplateComp.bankaccount = {};
          uitemplateComp.formShow = true;
          oThis.rmoveindex = "";
        }
      }],
      QualificationCertPk: "af888fa3-e3ef-4801-9b24-ffcd64950923", //custaxes
      QualificationCertData: {
        rules: {
          pk_country: [{ required: true, message: "发货国家不能为空", trigger: "blur" }],
          pk_taxes: [{ required: true, message: "税类不能为空", trigger: "blur" }]
        }
      },
      QualificationCertResetFun: function ($node) {
        let $table = $node.find('el-table');
        // $table.attr(":show-header", "false");
        let operateArr = [{
          title: "编辑",

          icon: "edit"
        }, {
          title: "删除",

          icon: "delete"
        }];
        let operateHtml = this.getTableOperateHtml(operateArr);

        $table.append(operateHtml);

        let $pkCountry = this.getNodeById($node, "u5itmgcx7c");
        let $pkTaxes = this.getNodeById($node, "1idpzwci9up");
        $pkCountry.html('<template scope="scope"><div>{{scope.row.beanMap?' + "(scope.row.beanMap.pk_country_ref?" + 'scope.row.beanMap.pk_country_ref[scope.row.pk_country].name:""):""}}' + "</div></template>");

        $pkTaxes.html('<template scope="scope"><div>{{scope.row.beanMap?' + "(scope.row.beanMap.pk_taxes_ref?" + 'scope.row.beanMap.pk_taxes_ref[scope.row.pk_taxes].name:""):""}}' + "</div></template>");

        return $node[0].outerHTML;
      },
      QualificationCertTplMethods: {
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
      this.requestQualificationCert();
    }
  },
  //页面操作
  mounted() {

    this.request();
  },
  methods: {
    //通过cookie获取当前登录用户的ID
    getCookie(cName) {
      let cStart;
      let cEnd;
      if (document.cookie.length > 0) {
        cStart = document.cookie.indexOf(cName + "=");
        if (cStart !== -1) {
          cStart = cStart + cName.length + 1;
          cEnd = document.cookie.indexOf(";", cStart);
          if (cEnd === -1) {
            cEnd = document.cookie.length;
          }
          return decodeURIComponent(document.cookie.substring(cStart, cEnd));
        }
      }
      return "";
    },

    /**
       *   初始响应方法
       **/
    request() {
      if (this.pk_customer != "") {
        this.requestQualificationCert();
      }
    },
    //请求资质认证信息
    requestQualificationCert() {
      let url;
      let ownerId = this.getCookie("_A_P_id");
      url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/QualificationCert/page";
      let data = {
        pageNum: 0,
        pageSize: 0,
        searchParams: {
          searchMap: {
            custCondList: [{
              'key': 'pk_customer',
              'oper': '=',
              'value': this.pk_customer
            }, {
              'key': 'message_owner',
              'oper': '=',
              'value': ownerId
            }]
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
        this.$refs["QualificationCertRef"].setData("QualificationCert_t", JSON.parse(JSON.stringify(this.originalValue)));
      }).catch(() => {
        this.$message({
          message: "资质认证信息获取失败",
          type: "error"
        });
      });
    },
    //资质认证情况保存
    QualificationCertFormConfirm: function () {
      //获取当前数据
      let data = this.$refs.QualificationCertRef.comp.QualificationCert;
      data.pk_customer = this.pk_customer;
      let baseUrl = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */];
      //保存校验de

      this.$refs.QualificationCertRef.comp.$refs["QualificationCert_t"].validate(valid => {
        if (valid) {
          this.$http({
            url: baseUrl + "cust/QualificationCert/updateORinsert",
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
              let linarraydata = this.$refs.QualificationCertRef.getData("QualificationCert_t");
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
              this.$refs.QualificationCertRef.setData("QualificationCert_t", JSON.parse(JSON.stringify(linarraydata)));
              //隐藏详情列表
              this.$refs["QualificationCertRef"].comp.formShow = false;
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
    // 资质认证信息form的取消操作
    QualificationCertFormCancel: function (type) {
      if (type === "form") {
        this.$refs["QualificationCertRef"].comp.formShow = false;
      } else {
        this.$refs["QualificationCertRef"].getTableComp().closeExpandRow();
        let QualificationCertTable = this.$refs.QualificationCertRef.getData('QualificationCert_t');
        QualificationCertTable[this.baseEditIndex] = this.baseData;
        this.$refs.QualificationCertRef.setData('QualificationCert_t', QualificationCertTable);
      }
    },
    //资质认证编辑
    QualificationCertEditTableRow: function (scope) {
      //记录删除位置
      this.rmoveindex = scope.$index;
      //行下展开表单界面
      // let row = scope.row;
      // this.$refs["QualificationCertRef"].getTableComp().expandRow(row);
      // this.$refs["QualificationCertRef"].formShow = false;
      // //QualificationCertRef为表单数据对象参数
      // this.$refs["QualificationCertRef"].setData("QualificationCert", row);
      this.$refs.QualificationCertRef.getTableComp().expandRow(scope.row);
      this.$refs.QualificationCertRef.comp.formShow = false;
      this.$refs.QualificationCertRef.setData('QualificationCert', scope.row);

      // 备份数据
      this.baseData = JSON.parse(JSON.stringify(scope.row));
      this.baseEditIndex = scope.$index;
    },
    //资质认证信息删除提示
    QualificationCertDeleteTableRow: function (scope) {
      this.QualificationCertDelVisible = true;
      this.delId = scope.row.pk_cust_qualification_cert;
    },
    //资质认证信息删除
    QualificationCertDeleteClick() {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/QualificationCert/deleteById",
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
          this.requestQualificationCert();
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
      this.QualificationCertDelVisible = false;
      this.delId = "";
    }
  }
});

/***/ }),

/***/ 91:
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
      funnode: "BT003",
      nexuskey: "RelatedCompany",
      RelatedCompanyDelVisible: false,
      rmoveindex: "",
      delId: "",
      // 客户来源信息新增
      RelatedCompanyIcons: [{
        icon: "plus",
        click: function () {
          if (oThis.pk_customer === "") {
            oThis.$message({
              message: "请先保存基本信息",
              type: "error"
            });
            return;
          }
          let uitemplateComp = oThis.$refs.RelatedCompanyRef.comp;
          let table = uitemplateComp.$refs["RelatedCompany_t_ref"];
          table.closeExpandRow();
          uitemplateComp.bankaccount = {};
          uitemplateComp.formShow = true;
          oThis.rmoveindex = "";
        }
      }],
      RelatedCompanyPk: "e06ff927-e356-437b-b9c8-a7974f2859b2", //custaxes
      RelatedCompanyData: {
        rules: {
          pk_country: [{ required: true, message: "发货国家不能为空", trigger: "blur" }],
          pk_taxes: [{ required: true, message: "税类不能为空", trigger: "blur" }]
        }
      },
      RelatedCompanyResetFun: function ($node) {
        var $refNode = this.getNodeById($node, 'ork10hzfxh');

        if ($refNode.length) {
          $refNode.attr("v-on:trigger", "handleRefChange");
        }

        let $table = $node.find('el-table');
        // $table.attr(":show-header", "false");
        let operateArr = [{
          title: "编辑",

          icon: "edit"
        }, {
          title: "删除",

          icon: "delete"
        }];
        let operateHtml = this.getTableOperateHtml(operateArr);

        $table.append(operateHtml);
        return $node[0].outerHTML;
      },
      t_Methods: {
        handleRefChange: function (type, data) {

          if (type === 'change') {

            var innerCode = data.value[0].refcode;
            this.$refs['RelatedCompany_ref'].model.intermediary_type = data.value[0].customer_type;
            this.$refs['RelatedCompany_ref'].model.intermediarycode = data.value[0].code;
          }
        }
      },
      RelatedCompanyTplMethods: {
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
      this.requestRelatedCompany();
    }
  },
  //页面操作
  mounted() {

    this.request();
  },
  methods: {
    //通过cookie获取当前登录用户的ID
    getCookie(cName) {
      let cStart;
      let cEnd;
      if (document.cookie.length > 0) {
        cStart = document.cookie.indexOf(cName + "=");
        if (cStart !== -1) {
          cStart = cStart + cName.length + 1;
          cEnd = document.cookie.indexOf(";", cStart);
          if (cEnd === -1) {
            cEnd = document.cookie.length;
          }
          return decodeURIComponent(document.cookie.substring(cStart, cEnd));
        }
      }
      return "";
    },

    /**
       *   初始响应方法
       **/
    request() {
      if (this.pk_customer != "") {
        this.requestRelatedCompany();
      }
    },
    //请求客户来源信息
    requestRelatedCompany() {
      let url;
      let ownerId = this.getCookie("_A_P_id");
      url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/RelatedCompany/page";
      let data = {
        pageNum: 0,
        pageSize: 0,
        searchParams: {
          searchMap: {
            pk_customer: this.pk_customer,
            message_owner: ownerId
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
        this.$refs["RelatedCompanyRef"].setData("RelatedCompany_t", JSON.parse(JSON.stringify(this.originalValue)));
      }).catch(() => {
        this.$message({
          message: "客户来源信息获取失败",
          type: "error"
        });
      });
    },
    //客户来源情况保存
    RelatedCompanyFormConfirm: function () {

      //获取当前数据
      let data = this.$refs.RelatedCompanyRef.comp.RelatedCompany;
      data.pk_customer = this.pk_customer;
      let baseUrl = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */];
      //保存校验
      this.$refs.RelatedCompanyRef.comp.$refs["RelatedCompany_ref"].validate(valid => {
        if (valid) {
          this.$http({
            url: baseUrl + "cust/RelatedCompany/updateORinsert",
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
              let linarraydata = this.$refs.RelatedCompanyRef.getData("RelatedCompany_t");
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
              this.$refs.RelatedCompanyRef.setData("RelatedCompany_t", JSON.parse(JSON.stringify(linarraydata)));
              //隐藏详情列表
              this.$refs["RelatedCompanyRef"].comp.formShow = false;
              //this.requestRelatedCompany();
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
    // 客户来源信息form的取消操作
    RelatedCompanyFormCancel: function (type) {

      //this.$refs.RelatedCompanyRef.getTableComp().closeExpandRow();


      if (type === "form") {
        this.$refs["RelatedCompanyRef"].comp.formShow = false;
      } else {
        this.$refs["RelatedCompanyRef"].getTableComp().closeExpandRow();
        let RelatedCompanyTable = this.$refs.RelatedCompanyRef.getData('RelatedCompany_t');
        RelatedCompanyTable[this.baseEditIndex] = this.baseData; //获取点击修改前的值
        this.$refs.RelatedCompanyRef.setData('RelatedCompany_t', RelatedCompanyTable);
      }
    },
    //客户来源编辑
    RelatedCompanyEditTableRow: function (scope) {
      //记录位置
      this.rmoveindex = scope.$index;
      // //行下展开表单界面
      let row = scope.row;
      // this.$refs["RelatedCompanyRef"].getTableComp().expandRow(row);
      // this.$refs["RelatedCompanyRef"].formShow = false;
      // //RelatedCompanyRef为表单数据对象参数
      // this.$refs["RelatedCompanyRef"].setData("RelatedCompany", row);

      this.$refs.RelatedCompanyRef.getTableComp().expandRow(scope.row);
      this.$refs.RelatedCompanyRef.comp.formShow = false;
      this.$refs.RelatedCompanyRef.setData('RelatedCompany', scope.row);

      // 备份数据
      this.baseData = JSON.parse(JSON.stringify(scope.row));
      this.baseEditIndex = scope.$index;
    },
    //客户来源信息删除提示
    RelatedCompanyDeleteTableRow: function (scope) {
      this.RelatedCompanyDelVisible = true;
      this.delId = scope.row.pk_cust_related_company;
    },
    //客户来源信息删除
    RelatedCompanyDeleteClick() {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/RelatedCompany/deleteById",
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
          this.requestRelatedCompany();
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
      this.RelatedCompanyDelVisible = false;
      this.delId = "";
    }
  }
});

/***/ })

/******/ })});;
//# sourceMappingURL=PersonCustomerDetail.vue.c23592d2caa5bd5a94ee.en.js.map