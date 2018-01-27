define("yls//busi/modify/src/contractModify/insuranceModify/pledge-modify-info.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 372);
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

/***/ 221:
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
  props: ['pk_customer', 'source_bill', 'invisible'],
  data() {
    let oThis = this;
    let validator = function (rule, value, callback) {};
    return {
      pledgeDelVisible: false,
      rmoveindex: '',
      delId: '',
      funnode: 'BT022',
      nexusKey: 'pledgeModify',
      pledgeData: {},
      pledgeResetFun: function ($node) {
        if (oThis.invisible) {
          return;
        }

        let $table = $node.find("el-table");
        let operateArr = [{
          title: '编辑',

          icon: 'edit'
        }, {
          title: '删除',

          icon: 'delete'
        }];
        let operateHtml = this.getTableOperateHtml(operateArr);
        $table.append(operateHtml);
        return $node[0].outerHTML;
      },
      pledgeTplMethods: {
        // form的保存操作
      }
    };
  },
  //获取数据数据初始化操作
  created() {},
  //页面操作
  mounted() {
    this.request();
  },
  methods: {
    //请求方法
    request() {
      if (this.source_bill != '') {
        this.requestPledge();
      }
    },
    closeAddForm() {
      this.$refs['pledgeRef'].comp.formShow = false;
    },
    //请求质押担保信息
    requestPledge() {
      let data = {
        pageNum: 0,
        pageSize: 10,
        searchParams: {
          searchMap: {
            //source_bill: this.source_bill,
            // guarantee_type:'PRENDA',
            custCondList: [{ key: 'source_bill', oper: '=', value: this.source_bill }, { key: 'guarantee_type', oper: '=', value: 'PRENDA' }]
          }
        }
      };
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'contr/modify/mp/page',
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        data: data,
        dataType: 'json'
      }).then(res => {
        this.originalValue = res.data.data.content;
        this.$refs['pledgeRef'].setData('PledgeEntity0_t', JSON.parse(JSON.stringify(this.originalValue)));
      }).catch(() => {
        this.$message({
          message: '信息获取失败',
          type: 'error'
        });
      });
    },
    //质押担保情况保存
    pledgeFormConfirm() {
      //获取当前数据
      let url;
      let data = this.$refs.pledgeRef.comp.PledgeEntity0;
      if (data.pk_mortgage_pledge) {
        url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'contr/modify/mp/update';
      } else {
        url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'contr/modify/mp/create';
      }
      data.source_bill = this.source_bill;
      data.guarantee_type = 'PRENDA';
      this.$http({
        url, //添加接口或修改接口
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        data: JSON.parse(JSON.stringify(data))
      }).then(res => {
        if (res.data.success === true) {

          this.$message({
            message: '保存成功！',
            type: 'success'
          });
          this.originalValue = res.data.data;
          //获取列表数组（根据表格数据对象参数获取相应的数组或对象）
          let linarraydata = this.$refs.pledgeRef.getData('PledgeEntity0_t');
          /**@augments 移除位置 
           * @augments 移除个数
           * @augments 用新的对象替换（不传值则删除）
           */

          if (this.rmoveindex !== '') {
            linarraydata.splice(this.rmoveindex, 1, this.originalValue);
          } else {
            //加入数组开始
            linarraydata.unshift(this.originalValue);
          }
          //加入数组结尾
          // linarraydata.push(this.originalValue);
          //给对象赋值
          this.$refs.pledgeRef.setData('PledgeEntity0_t', JSON.parse(JSON.stringify(linarraydata)));
          //隐藏详情列表
          this.$refs['pledgeRef'].comp.formShow = false;
          this.$emit("closeAddForm");
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
    },
    // 质押担保信息form的取消操作
    pledgeFormCancel: function (type) {
      if (type === 'form') {
        this.$refs['pledgeRef'].comp.formShow = false;
        this.$emit("closeAddForm");
      } else {
        this.$refs['pledgeRef'].getTableComp().closeExpandRow();
      }
    },
    //质押担保编辑
    pledgeEditTableRow: function (scope) {
      //记录删除位置
      this.rmoveindex = scope.$index;
      //行下展开表单界面
      let row = scope.row;
      this.$refs['pledgeRef'].getTableComp().expandRow(row);
      this.$refs['pledgeRef'].formShow = false;
      //pledgeRef为表单数据对象参数
      this.$refs['pledgeRef'].setData('PledgeEntity0', row);
    },
    //质押担保信息删除提示
    pledgeDeleteTableRow: function (scope) {
      this.pledgeDelVisible = true;
      this.delId = scope.row.pk_mortgage_pledge;
    },
    //质押担保信息删除
    pledgeDeleteClick() {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'contr/modify/mp/deleteById',
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
          this.requestPledge();
        } else {
          this.$message({
            message: res.data.error.errorMessage,
            type: 'error'
          });
        }
      }).catch(e => {
        this.$message({
          message: '信息删除失败！',
          type: 'error'
        });
      });
      this.pledgeDelVisible = false;
      this.delId = '';
    }
  }
});

/***/ }),

/***/ 289:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 339:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "pledgeRef",
    attrs: {
      "tplId": "pledgeTemplate",
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexusKey,
      "tplData": _vm.pledgeData,
      "tplResetFun": _vm.pledgeResetFun,
      "tplMethods": _vm.pledgeTplMethods,
      "show-type": "table-form"
    },
    on: {
      "form-confirm-click": _vm.pledgeFormConfirm,
      "form-cancel-click": _vm.pledgeFormCancel,
      "edit-table-click": _vm.pledgeEditTableRow,
      "delete-table-click": _vm.pledgeDeleteTableRow
    }
  }), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    model: {
      value: (_vm.pledgeDelVisible),
      callback: function($$v) {
        _vm.pledgeDelVisible = $$v
      },
      expression: "pledgeDelVisible"
    }
  }, [_c('span', [_vm._v("确认删除该条记录 ？删除后无法恢复。")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.pledgeDelVisible = false, this.delId = ''
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.pledgeDeleteClick
    }
  }, [_vm._v("确 定")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(289)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(221),
  /* template */
  __webpack_require__(339),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

/******/ })});;
//# sourceMappingURL=pledge-modify-info.vue.64852045a58307f8b4d7.en.js.map