define("yls//busi/customer/agent/creditgrant/operation_info.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 162);
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

/***/ 117:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 145:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "operationTable",
    attrs: {
      "tplId": "operationTemplate",
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexusKey,
      "tplData": _vm.operationData,
      "tplResetFun": _vm.operationResetFun,
      "tplMethods": _vm.operationTplMethods,
      "methods": _vm.t_Methods,
      "show-type": "table-form"
    },
    on: {
      "form-confirm-click": _vm.operationFormConfirm,
      "form-cancel-click": _vm.operationFormCancel,
      "edit-table-click": _vm.operationEditTableRow,
      "delete-table-click": _vm.operationDeleteTableRow
    }
  }), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    model: {
      value: (_vm.operationDelVisible),
      callback: function($$v) {
        _vm.operationDelVisible = $$v
      },
      expression: "operationDelVisible"
    }
  }, [_c('span', [_vm._v("确认删除该条记录 ？删除后无法恢复。")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.operationDelVisible = false, this.delId = ''
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.operationDeleteClick
    }
  }, [_vm._v("确 定")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(117)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(76),
  /* template */
  __webpack_require__(145),
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

/***/ 76:
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
  props: ['pk_customer'],
  data() {
    let oThis = this;
    let validator = function (rule, value, callback) {};
    return {
      operationDelVisible: false,
      rmoveindex: '',
      delId: '',
      funnode: 'BT004',
      nexusKey: 'OperationProtocol',
      operationData: {},
      t_Methods: {},
      operationResetFun($node) {
        if (oThis.invisible) {
          return;
        }
        let $refNode = this.getNodeById($node, '1nnheivkgfc'); //获取客户参照
        if (oThis.pid !== undefined) {
          $refNode.attr("v-bind:disabled", 'true'); //客户参照只读
        } else {
          $refNode.attr("v-bind:disabled", 'false'); //客户参照可编辑
        }
        let $table = $node.find("el-table");
        let operateArr = [{
          title: '编辑',

          icon: 'edit'
        }];
        let operateHtml = this.getTableOperateHtml(operateArr);
        $table.prepend(operateHtml);
        return $node[0].outerHTML;
      },
      operationTplMethods: {
        // form的保存操作
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
      this.request();
    }
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
      debugger;
      if (this.pk_customer != '') {
        this.reqOptByPkCustomer();
      } else {
        //  this.requestOperation();
        return;
      }
    },
    closeAddForm() {
      this.$refs['operationTable'].comp.formShow = false; //关闭添加表单事件
    },
    //请求合作协议信息
    requestOperation() {
      let data = {
        "orderList": [{
          "direction": "desc",
          "property": "ts"
        }],
        "pageNum": this.currentPage - 1,
        "pageSize": this.pageSize,
        "searchParams": {
          "searchMap": {
            'custCondList': [{ 'key': 'customer_class',
              'oper': '=',
              'value': 'yls_dev100000000ffv'
            }],
            'qtAggVO': this.sp
          }
        }
      };
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'cust/operation/page',
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        data: data,
        dataType: 'json'
      }).then(res => {
        this.originalValue = res.data.data.content;
        this.$refs['operationTable'].setData('OperationProtocol_t', JSON.parse(JSON.stringify(this.originalValue)));
      }).catch(() => {
        this.$message({
          message: '合作协议信息获取失败',
          type: 'error'
        });
      });
    },
    //根具pk_customer获取合作协议
    reqOptByPkCustomer() {
      debugger;
      let pk = this.pk_customer;
      this.$http({
        url: window.ctxs.cust + 'cust/operation/getbycolumn',
        headers: { "Content-Type": "application/json" },
        method: 'post',
        data: pk
      }).then(res => {
        let originalValue = res.data.data;
        this.$refs.operationTable.setData("OperationProtocol_t", JSON.parse(JSON.stringify([originalValue])));
        this.$refs["operationTable"].comp.formShow = false;
        debugger;
      }).catch(e => {
        debugger;
        console.error(e);
        this.$message({
          message: "合作协议信息获取失败",
          type: "error"
        });
      });
    },
    //合作协议保存
    operationFormConfirm() {
      //获取当前数据
      debugger;
      let url;
      let data = this.$refs.operationTable.comp.OperationProtocol;
      data.agent_name = this.pk_customer;
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'cust/operation/UpdateOrCreate',
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        data: JSON.parse(JSON.stringify(data))
      }).then(res => {
        debugger;
        this.editable = false;
        if (res.data.success === true) {
          this.$message({
            message: '保存成功',
            type: 'success'
          });
          let originalValue = res.data.data;
          //获取列表数组（根据表格数据对象参数获取相应的数组或对象）
          debugger;
          let linarraydata = this.$refs.operationTable.getData("OperationProtocol_t");
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
          this.$refs.operationTable.setData("OperationProtocol_t", JSON.parse(JSON.stringify(linarraydata)));
          // this.requestOperation();
          //隐藏详情列表
          this.$refs['operationTable'].comp.formShow = false;
        } else {
          this.$message({
            message: res.data.error.errorMessage,
            type: "error"
          });
        }
      }).catch(e => {
        this.$message({
          message: '保存失败',
          type: 'error'
        });
      });
    },
    // 合作协议form的取消操作
    operationFormCancel(type) {
      if (type === 'form') {
        this.$refs['operationTable'].comp.formShow = false;
        this.$emit("closeAddForm");
      } else {
        this.$refs['operationTable'].getTableComp().closeExpandRow();
      }
    },
    //合作协议编辑
    operationEditTableRow(scope) {
      //记录删除位置
      this.rmoveindex = scope.$index;
      //行下展开表单界面
      let row = scope.row;
      this.$refs['operationTable'].getTableComp().expandRow(row);
      this.$refs['operationTable'].formShow = false;
      //operationTable为表单数据对象参数
      this.$refs['operationTable'].setData('OperationProtocol', row);
    },
    //合作协议删除提示
    operationDeleteTableRow(scope) {
      this.operationDelVisible = true;
      // this.pk_operation_protocol = scope.row.pk_operation_protocol;
      this.delId = scope.row.pk_operation_protocol;
    },
    //合作协议删除
    operationDeleteClick() {
      debugger;
      let id = this.delId;
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'cust/operation/deleteById',
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        dataType: 'json',
        data: this.delId
      }).then(res => {
        debugger;
        if (res.data.success === true) {
          this.$message({
            message: '删除成功',
            type: 'success'
          });
        } else {
          debugger;
          this.$message({
            message: res.data.error.errorMessage,
            type: 'error'
          });
        }
      }).catch(e => {
        debugger;
        this.$message({
          message: '信息删除失败',
          type: 'error'
        });
      });
      this.operationDelVisible = false;
      this.delId = '';
    },
    // 判断是否已经有了合作协议
    isExisted() {
      let promise = new Promise((resolve, reject) => {
        debugger;
        let val = this.pk_customer;
        this.$http({
          url: window.ctxs.cust + 'cust/operation/isExistedByPk',
          headers: { "Content-Type": "application/json" },
          method: 'post',
          data: val
        }).then(res => {
          debugger;
          let retVal = res.data.data;
          if (retVal == 1) {
            this.$message({
              message: "代理商对应的协议已经存在，不可再添加"
            });
          }
          resolve(retVal);
        }).catch(e => {
          debugger;
          reject();
          console.error(e);
          this.$message({
            message: "合作协议信息获取失败",
            type: "error"
          });
        });
      });
      return promise;
    }
  }
});

/***/ })

/******/ })});;
//# sourceMappingURL=operation_info.vue.353c98ddfcee34fc4226.en.js.map