define("yls//busi/project/src/creditManagement/credit_management_detail.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 770);
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

/***/ 231:
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


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["pk_project_credit"],
  data() {
    var oThis = this;
    return {
      Funnode: 'BT008',
      NexusKey: 'lessee_credit_evaluation',
      enterStatus: true,
      evaluationMethod: '附件上传',
      fileList: [],
      lesseeCreditEvaluationData: {
        rules: {}
      }

    };
  },

  mounted() {},

  methods: {

    enterCancl() {},

    enterSave() {},

    annexCancl() {},

    annexUpload() {
      let fileList = this.fileList;
      this.$refs.upload.submit();
      debugger;
    },

    switchEnterStatus() {
      this.enterStatus = !this.enterStatus;
      if (this.enterStatus) {
        this.evaluationMethod = '附件上传';
      } else {
        this.evaluationMethod = '手工录入';
      }
    }

  }

});

/***/ }),

/***/ 267:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 317:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "eval-title"
  }, [_vm._v("您也可以"), _c('a', {
    domProps: {
      "textContent": _vm._s(_vm.evaluationMethod)
    },
    on: {
      "click": _vm.switchEnterStatus
    }
  }), _vm._v("承租人资信评价")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.enterStatus),
      expression: "enterStatus"
    }]
  }, [_c('ifbp-template', {
    ref: "lesseeCreditEvaluationRef",
    attrs: {
      "tplId": "lesseeCreditEvaluation",
      "funnode": _vm.Funnode,
      "nexuskey": _vm.NexusKey,
      "tplData": _vm.lesseeCreditEvaluationData,
      "show-type": "form"
    },
    on: {
      "form-confirm-click": _vm.Confirm,
      "form-cancel-click": _vm.Cancel
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "form-button-div"
  }, [_c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "default"
    },
    on: {
      "click": _vm.enterCancl
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.enterSave
    }
  }, [_vm._v("保存")])], 1)], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.enterStatus),
      expression: "!enterStatus"
    }]
  }, [_c('el-upload', {
    staticClass: "upload-demo",
    attrs: {
      "drag": "",
      "action": "",
      "multiple": "",
      "auto-upload": "false",
      "show-file-list": "true",
      "file-list": _vm.fileList
    }
  }, [_c('i', {
    staticClass: "el-icon-upload"
  }), _vm._v(" "), _c('div', {
    staticClass: "el-upload__text"
  }, [_vm._v("将文件拖到此处，或"), _c('em', [_vm._v("点击上传")])]), _vm._v(" "), _c('div', {
    staticClass: "el-upload__tip",
    slot: "tip"
  }, [_vm._v("文件大小不超过10M")])]), _vm._v(" "), _c('div', {
    staticClass: "form-button-div"
  }, [_c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.annexUpload
    }
  }, [_vm._v("上传")])], 1)], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(267)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(231),
  /* template */
  __webpack_require__(317),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lessee_credit_evaluation_vue__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lessee_credit_evaluation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__lessee_credit_evaluation_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        'lesseeCreditEvaluationRef': __WEBPACK_IMPORTED_MODULE_1__lessee_credit_evaluation_vue___default.a
    },
    data() {
        let oThis = this;
        return {
            scrollDom: document.getElementsByClassName('view')[0],
            projectCreditFunnode: 'BT008',
            projectCreditNexusKey: 'project_credit',
            projectCreditEditable: false,
            pk_project_credit: '',
            projectCreditData: {
                rules: {}
            },
            projectCreditPlusIcons: [{
                icon: 'edit',
                click: function () {
                    oThis.projectCreditEditable = !oThis.projectCreditEditable;
                    //备份，取消时还原
                    oThis.projectCreditCacheData = JSON.parse(JSON.stringify(oThis.$refs.projectCreditRef.getData('projectCredit')));
                }
            }],
            projectCreditResetFun($node) {
                //银行账户参照
                let lessorAccount = this.getNodeById($node, 'jsx36embp3o');
                if (lessorAccount.length) {
                    lessorAccount.attr('v-on:trigger', 'lessorAccountRefChange');
                }

                //租赁方式下拉框
                let leasingMethod = this.getNodeById($node, '9hqou4du7zg');
                if (leasingMethod.length) {
                    leasingMethod.attr('v-on:change', 'leasingMethodValChange');
                }
            },
            ref_methods: {
                //银行账户参照
                lessorAccountRefChange: function (type, data) {
                    if (type === 'change') {
                        let lessorAccount = data.value[0];
                        let projectCredit = this.$refs.projectCredit_ref.model;
                        projectCredit.lessor_account_number = lessorAccount.refcode;
                        projectCredit.lessor_bank = lessorAccount.bank_no;
                        oThis.$refs.projectCreditRef.setData('projectCredit', projectCredit);
                    }
                },
                leasingMethodValChange: function (type, data) {
                    if (type === 'SUBLEASE') {
                        let bLOptions = this.$refs.business_line_ref.options;
                        for (let i in bLOptions) {
                            //业务条线下拉框-当租赁方式为转租赁时，只能选择转租赁业务条线
                            if (bLOptions[i].value == 'RENTING_CAR' || bLOptions[i].value == 'RENTING_MEDICAL' || bLOptions[i].value == 'RENTING_OTHER') {
                                bLOptions[i].disabled = false;
                            } else {
                                bLOptions[i].disabled = true;
                            }
                        }
                    } else {
                        let bLOptions = this.$refs.business_line_ref.options;
                        for (let i in bLOptions) {
                            bLOptions[i].disabled = false;
                        }
                    }
                }

            }

        };
    },

    created() {
        this.loadData();
    },

    methods: {

        loadData() {
            this.pk_project_credit = this.$root.$router.currentRoute.params.id;
            if (this.pk_project_credit) {

                //加载项目授信信息
                this.loadProjectCreditData(this.pk_project_credit);
            } else {
                this.pk_project_credit = '';
                this.projectCreditEditable = true;
            }
        },
        loadProjectCreditData(pk_project_credit) {
            this.$http({
                url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'projectCredit/getById',
                headers: { 'Content-Type': 'application/json' },
                method: 'post',
                data: pk_project_credit
            }).then(res => {
                let result = res.data.data;
                this.$refs.projectCreditRef.setData('projectCredit', result);
            });
        },
        creditApprovalCancel() {
            window.history.back(-1);
        },
        creditApprovalConfirm() {},
        pojectCreditClickCancel: function (type) {
            this.projectCreditEditable = false;
            //还原表单数据
            this.$refs.projectCreditRef.setData('projectCredit', this.projectCreditCacheData);
        },
        pojectCreditClickSave() {
            this.$refs.projectCreditRef.comp.$refs['projectCredit_ref'].validate(valid => {
                if (valid) {
                    var data = this.$refs.projectCreditRef.comp.projectCredit;
                    var url;
                    if (this.pk_project_credit) {
                        url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'projectCredit/update';
                    } else {
                        url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'projectCredit/createProjectCredit';
                    }
                    this.$http({
                        url: url,
                        headers: { 'Content-type': 'application/json' },
                        method: 'post',
                        data: data
                    }).then(res => {
                        if (res.data.success === true) {
                            this.$message({
                                message: '保存成功',
                                type: 'success'
                            });
                            let result = res.data.data;
                            this.$refs.projectCreditRef.setData('projectCredit', result);
                            this.pk_project_credit = result.pk_project_credit;
                            this.projectCreditEditable = false;
                        } else {
                            this.$message({
                                message: res.data.error.errorMessage,
                                type: 'error'
                            });
                        }
                    }).catch(() => {
                        this.$message({
                            message: '保存或更新失败',
                            type: 'error'
                        });
                    });
                }
            });
        }

    }
});

/***/ }),

/***/ 550:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 650:
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
  }, [_c('div', {
    staticClass: "detail-button-header"
  }, [_c('el-button', {
    staticClass: "fr",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.creditApprovalCancel
    }
  }, [_vm._v("返回")]), _vm._v(" "), _c('el-button', {
    staticClass: "fr",
    staticStyle: {
      "margin-right": "10px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.creditApprovalConfirm
    }
  }, [_vm._v("保存")])], 1), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "basePanel",
      "title": "项目授信信息",
      "icons": _vm.projectCreditPlusIcons
    }
  }, [_c('ifbp-template', {
    ref: "projectCreditRef",
    attrs: {
      "tplId": "projectCredit",
      "funnode": _vm.projectCreditFunnode,
      "nexuskey": _vm.projectCreditNexusKey,
      "tplData": _vm.projectCreditData,
      "show-type": "form",
      "tplResetFun": _vm.projectCreditResetFun,
      "methods": _vm.ref_methods,
      "editable": _vm.projectCreditEditable
    }
  }), _vm._v(" "), (_vm.projectCreditEditable) ? _c('div', {
    staticClass: "form-button-div"
  }, [_c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "default"
    },
    on: {
      "click": _vm.pojectCreditClickCancel
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.pojectCreditClickSave
    }
  }, [_vm._v("保存")])], 1) : _vm._e()], 1), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "basePanel",
      "title": "承租人资信评价"
    }
  }, [_c('lesseeCreditEvaluationRef', {
    ref: "lesseeCreditEvaluationRef",
    attrs: {
      "pk_project_credit": _vm.pk_project_credit
    }
  })], 1)], 1)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title-container"
  }, [_c('h2', {
    staticClass: "name"
  }, [_vm._v("授信审批详情页")])])
}]}

/***/ }),

/***/ 770:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(550)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(467),
  /* template */
  __webpack_require__(650),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

/******/ })});;
//# sourceMappingURL=credit_management_detail.vue.ee252e00c243ec74cab8.en.js.map