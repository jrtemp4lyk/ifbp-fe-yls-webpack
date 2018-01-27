define("yls//busi/iface/src/wechat/wechat-user.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 764);
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

/***/ 461:
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
    mixins: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["b" /* pagination */])('refreshPage')],
    mounted() {
        this.refreshPage();
    },
    data() {
        return {
            userListEditable: true,
            userListData: {},
            delUserDlgVisible: false,
            delUserId: null,
            editingIndex: null,
            deletingIndex: null,
            resetUserList($node) {
                //获取table,此id为ui模板上面的表格Id
                let $table = $node.find("el-table");
                //获取操作按钮html片段
                let operateHtml = this.getBaseTableOperateHtml();
                $table.append(operateHtml);
                return $node[0].outerHTML;
            }
        };
    },
    methods: {
        refreshPage() {
            this.$http.post(__WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'iface/wechat/users/page', {
                pageNum: this.currentPage - 1,
                pageSize: this.pageSize
            }).then(resp => {
                if (resp.data.success) {
                    this.$refs.wechatUserList.setData('WechatUserEntity_t', resp.data.data.content);
                    this.totalElements = resp.data.data.totalElements;
                }
            });
        },
        addUser() {
            this.$refs.wechatUserList.resetFormData();
            this.$refs.wechatUserList.getTableComp().closeExpandRow();
            this.$refs.wechatUserList.formShow = true;
        },
        delUser(scope) {
            this.deletingIndex = scope.$index;
            this.delUserId = scope.row.pk_wechat_user;
            this.delUserDlgVisible = true;
        },
        deleteConfirmClick() {
            this.delUserDlgVisible = false;
            this.$http.post(__WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'iface/wechat/users/deleteById', this.delUserId, { headers: { 'Content-Type': 'text/plain' } }).then(resp => {
                if (resp.data.success) {
                    this.userListData['WechatUserEntity_t'].splice(this.deletingIndex, 1);
                    this.totalElements--;
                } else {
                    this.$message({
                        message: resp.data.error.errorMessage,
                        type: 'error'
                    });
                }
            });
        },
        editUser(scope) {
            this.editingIndex = scope.$index;
            this.$refs.wechatUserList.getTableComp().expandRow(scope.row);
            this.formEditable = true;
            this.$refs.wechatUserList.comp.formShow = false;
            this.$refs.wechatUserList.setData('WechatUserEntity', JSON.parse(JSON.stringify(scope.row)));
        },
        confirm(type) {
            if (type === 'form') {
                //新增
                const newUser = this.$refs.wechatUserList.getData('WechatUserEntity');
                this.$http.post(__WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'iface/wechat/users/create', newUser).then(resp => {
                    if (resp.data.success) {
                        this.$refs.wechatUserList.getData('WechatUserEntity_t').push(resp.data.data);
                        this.totalElements++;
                    } else {
                        this.$message({
                            message: resp.data.error.errorMessage,
                            type: 'error'
                        });
                    }
                });
                this.$refs.wechatUserList.comp.formShow = false;
            } else {
                //修改
                const user = this.$refs.wechatUserList.getData('WechatUserEntity');
                this.$http.post(__WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'iface/wechat/users/update', user).then(resp => {
                    if (resp.data.success) {
                        const userList = this.$refs.wechatUserList.getData('WechatUserEntity_t');
                        this.$set(userList, this.editingIndex, resp.data.data);
                    } else {
                        this.$message({
                            message: resp.data.error.errorMessage,
                            type: 'error'
                        });
                    }
                });
                this.$refs.wechatUserList.getTableComp().closeExpandRow();
            }
        },
        cancel(type) {
            if (type === 'form') {
                this.$refs.wechatUserList.formShow = false;
            } else {
                this.$refs.wechatUserList.getTableComp().closeExpandRow();
            }
        }
    }
});

/***/ }),

/***/ 604:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-panel"
  }, [_c('div', {
    staticClass: "operator-container"
  }, [_c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.addUser
    }
  }, [_vm._v("新增")])], 1), _vm._v(" "), _c('div', {
    staticClass: "list-main-container"
  }, [_c('ifbp-template', {
    ref: "wechatUserList",
    attrs: {
      "tpl-data": _vm.userListData,
      "editable": _vm.userListEditable,
      "tplResetFun": _vm.resetUserList,
      "funnode": "YLSBT002",
      "nexuskey": "YLS-IFACE-WECHAT-USER",
      "show-type": "table-form"
    },
    on: {
      "delete-table-click": _vm.delUser,
      "edit-table-click": _vm.editUser,
      "form-confirm-click": _vm.confirm,
      "form-cancel-click": _vm.cancel
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
  })], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "modal": true,
      "size": "tiny",
      "title": "删除确认"
    },
    model: {
      value: (_vm.delUserDlgVisible),
      callback: function($$v) {
        _vm.delUserDlgVisible = $$v
      },
      expression: "delUserDlgVisible"
    }
  }, [_c('span', [_vm._v("\n            确认删除该微信用户？删除后无法恢复。\n        ")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.delUserDlgVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.deleteConfirmClick
    }
  }, [_vm._v("确 定")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 764:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(461),
  /* template */
  __webpack_require__(604),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

/******/ })});;
//# sourceMappingURL=wechat-user.vue.dfb0938424d8ea41a2c5.en.js.map