define("yls//busi/fin/src/bill-info/signbill_detail.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 732);
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

/***/ 429:
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    let oThis = this;
    return {
      //弹出窗口信息start
      //当前页
      loancurrentPage: 1,
      //每页显示个数选择器的选项设置
      loanpageSizes: window.pubPageSizes,
      //每页显示条目个数
      loansize: window.pubSize,
      //总条目数
      loantotalSize: 0,
      disabled: false,
      dialogTableVisible: false,
      //数据信息
      finpayinouttData: {},
      //弹出窗口end
      delDialogVisible: false,
      //固定写法
      scrollDom: document.getElementsByClassName("view")[0],
      //签发汇票主键
      pk_sign_bill: "",
      eid: "",
      // 签发汇票主模板 baseTemplateRef start
      tplData: {
        editable: false
      },
      InOutPlanData: {},
      //
      t_Methods: {},
      templateTableFormResetFun($node) {
        let $refNode = this.getNodeById($node, 'zfvdmg14dq'); //获取汇票状态id
        if (oThis.pk_sign_bill !== undefined) {
          $refNode.attr("v-show:isShow", 'true'); //汇票状态显示
          if (oThis.eid == "2") {
            let $refNode1 = $node.find("el-money[v-model='SignBill.sign_money']"); //获取出票金额id
            $refNode1.attr("v-bind:disabled", 'editable'); //出票金额只读
            let $refNode2 = $node.find("el-money[v-model='SignBill.poundage']"); //获取手续费金额id
            $refNode2.attr("v-bind:disabled", 'editable'); //手续费金额只读
            let $refNode3 = $node.find("el-money[v-model='SignBill.guarantee_money']"); //获取保证金金额id
            $refNode3.attr("v-bind:disabled", 'editable'); //保证金金额只读
          }
        } else {
          $refNode.attr("v-show:isShow", 'false'); //汇票状态隐藏
        }
      },
      editable: false,
      baseIcons: [{
        icon: "edit",
        click: function () {
          oThis.editable = !oThis.editable;
        }
      }],
      // 签发汇票主模板 baseTemplateRef end

      InOutPlanResetFun($node) {
        let $table = this.getNodeById($node, 'y8asz7au8a');
        // $table.attr(':show-header','true');
        let operateArr = [{
          title: '查看详情',
          icon: 'search'
        }];
        let operateHtml = this.getTableOperateHtml(operateArr);
        $table.append(operateHtml);
        return $node[0].outerHTML;
      }
    };
  },
  created() {
    this.eid = this.$root.$router.currentRoute.params.eid;
    this.loadData();
  },
  methods: {
    //返回按钮
    goBack() {
      window.history.back(-1);
    },
    // 签发汇票主模板 baseTemplateRef 事件处理 start
    clickCancel() {
      this.editable = false;
    },
    clickSave() {
      let data1 = this.$refs.baseTemplateRef.comp.SignBill;
      let url = "";
      if (data1.pk_sign_bill) {
        url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "fin/signBill/update";
      } else {
        url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "fin/signBill/create";
      }
      this.$http({
        url: url,
        method: "post",
        data: data1
      }).then(res => {
        location.hash = '/signbill/list';
        this.editable = false;
        let originalValue = res.data.data;
        this.$refs["baseTemplateRef"].setData('SignBill_t', originalValue);
        this.$message({
          message: '保存成功',
          type: 'success'
        });
      }).catch(e => {
        this.$message({
          message: '保存失败',
          type: 'error'
        });
      });
    },
    // 签发汇票主模板 baseTemplateRef 事件处理 end

    InOutPlanSearchTable(scope) {
      this.$refs.InOutPlanRef.getTableComp().expandRow(scope.row);
      this.$refs.InOutPlanRef.comp.formShow = false;
      this.$refs.InOutPlanRef.setData('QuoteInoutPlan', scope.row);

      // // 备份数据
      // this.baseData = JSON.parse(JSON.stringify(scope.row));
      // this.baseEditIndex = scope.$index;
    },

    //加载信息
    loadData() {
      if (!this.pk_sign_bill) {
        this.pk_sign_bill = this.$root.$router.currentRoute.params.id;
      }
      //详情页面
      if (this.pk_sign_bill) {
        //加载投放计划信息
        this.loadDemoInfo(this.pk_sign_bill);
        this.loadChildDemoInfo(this.pk_sign_bill);
      } else {
        this.editable = true;
      }
    },
    //加载信息
    loadDemoInfo(pk_sign_bill) {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'fin/signBill/getById',
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        data: this.pk_sign_bill
      }).then(res => {
        let originalValue = res.data.data;
        this.$refs['baseTemplateRef'].setData('SignBill', JSON.parse(JSON.stringify(originalValue)));
      }).catch(e => {
        this.$message({
          message: '详情获取失败',
          type: 'error'
        });
      });
    },

    //加载信息
    loadChildDemoInfo(pk_sign_bill) {
      this.pk_bill = this.pk_sign_bill;
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'fin/signBill/getInOut',
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        data: this.pk_bill
      }).then(res => {
        let originalValue = res.data.data;
        this.$refs['InOutPlanRef'].setData('QuoteInoutPlan_t', JSON.parse(JSON.stringify(originalValue)));
      }).catch(e => {
        this.$message({
          message: '获取详情失败',
          type: 'error'
        });
      });
    }
  }
});

/***/ }),

/***/ 496:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 595:
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
      "click": _vm.goBack
    }
  }, [_vm._v("返回")])], 1), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "basePanel",
      "title": "签发汇票",
      "icons": _vm.baseIcons
    }
  }, [_c('ifbp-template', {
    ref: "baseTemplateRef",
    attrs: {
      "tplId": "baseTemplate",
      "funnode": "BZ023",
      "nexuskey": "SignBillDetail",
      "show-type": "form",
      "tplData": _vm.tplData,
      "editable": _vm.editable,
      "methods": _vm.t_Methods,
      "tplResetFun": _vm.templateTableFormResetFun
    }
  }), _vm._v(" "), (_vm.editable) ? _c('div', {
    staticClass: "form-button-div"
  }, [_c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "default"
    },
    on: {
      "click": _vm.clickCancel
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.clickSave
    }
  }, [_vm._v("保存")])], 1) : _vm._e()], 1), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "InOutPlanPanel",
      "title": "收支计划"
    }
  }, [_c('ifbp-template', {
    ref: "InOutPlanRef",
    attrs: {
      "tplId": "InOutTemplate",
      "funnode": "BZ023",
      "nexuskey": "InOutPlanDetail",
      "show-type": "table-form",
      "tplData": _vm.InOutPlanData,
      "tplResetFun": _vm.InOutPlanResetFun
    },
    on: {
      "search-table-click": _vm.InOutPlanSearchTable
    }
  })], 1)], 1)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title-container"
  }, [_c('h2', {
    staticClass: "name"
  }, [_vm._v("汇票详情")])])
}]}

/***/ }),

/***/ 732:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(496)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(429),
  /* template */
  __webpack_require__(595),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

/******/ })});;
//# sourceMappingURL=signbill_detail.vue.24d0d60ee67d621e4eba.en.js.map