define("yls//busi/project/src/buni/busi_insure.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
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
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(11)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(13),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
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
  //应用vue传过来接收参数
  props: ['source_bill', 'type', 'invisible'],
  data() {
    let oThis = this;
    //校验
    let validateInsurance = function (rule, value, callback) {};
    return {
      scrollDom: document.getElementsByClassName('view')[0],
      insuranceDelVisible: false,
      rmoveindex: '',
      delId: '',
      back_object: '',
      //保险
      insuranceIcons: [{
        icon: 'plus',
        click: function () {
          if (oThis.source_bill === '') {
            oThis.$message({
              message: '未获取到项目',
              type: 'error'
            });
            return;
          }
          let uitemplateComp = oThis.$refs.insuranceRef.comp;
          let table = uitemplateComp.$refs['projectInsure-table'];
          table.closeExpandRow();
          uitemplateComp.formShow = true;
          //初始化值
          oThis.$refs.insuranceRef.setData('ProjectInsure', {
            // mobile:'13'
          });
          oThis.rmoveindex = '';
          uitemplateComp.$refs['projectInsure-form'].resetFields();
        }
      }],
      funnode: 'BT008',
      nexuskey: oThis.type === 'prj' ? 'ProjectInsureUI' : oThis.type === 'prjApproval' ? 'PrjApprovalInsureUI' : 'insurance_apply',
      insuranceData: {
        // rules: {
        //   thing_name: [
        //     { required: true, message: '请输入保险名称', trigger: 'blur' }
        //   ]
        // }
      },
      //渲染表格
      insuranceResetFun: function ($node) {
        if (oThis.invisible) {
          return;
        }

        var id_co = '';
        if (oThis.type === 'prj') id_co = 'hw9gl1c375v';else if (oThis.type === 'contr') id_co = '';else if (oThis.type === 'prjApproval') id_co = 'e0zihi349o';else id_co = "k9goab2oawo";
        var $table = this.getNodeById($node, id_co);
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
      }
    };
  },
  //监听引用传参后实时变动
  computed: {
    currentSource_bill() {
      return this.source_bill;
    }
  },
  //监听参数变动后方法
  watch: {
    source_bill(val) {
      this.requestInsurance();
    }
  },
  //获取数据数据初始化操作
  created() {},
  //页面操作
  mounted() {
    this.request();
  },
  methods: {
    /**
       *   初始响应方法
       **/
    request() {
      if (this.source_bill != '' && this.source_bill != undefined) {
        this.requestInsurance();
      }
    },
    //请求业务保险
    requestInsurance() {
      let data = {
        'orderList': [{
          'direction': 'desc',
          'property': 'ts'
        }],
        pageNum: 0,
        pageSize: 0,
        searchParams: {
          searchMap: {
            custCondList: [{ key: 'source_bill', oper: '=', value: this.source_bill }]
          }
        }
      };
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/ins/page',
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        data: data,
        dataType: 'json'
      }).then(res => {
        let originalValue = res.data.data.content;
        this.$refs['insuranceRef'].setData('ProjectInsure_t', JSON.parse(JSON.stringify(originalValue)));
      }).catch(() => {
        this.$message({
          message: '信息获取失败',
          type: 'error'
        });
      });
    },
    //保险取消按钮
    insuranceFormCancel: function (type) {
      this.rmoveindex = '';
      //关闭表单或者是下拉显示行
      if (type === 'form') {
        this.$refs['insuranceRef'].comp.formShow = false;
      } else {
        this.$refs['insuranceRef'].getTableComp().closeExpandRow();
        let OtherContactTable = this.$refs.insuranceRef.getData('ProjectInsure_t');
        OtherContactTable[this.baseEditIndex] = this.baseData;
        this.$refs.insuranceRef.setData('ProjectInsure_t', OtherContactTable);
      }
    },
    //保险主表保存
    insuranceFormConfirm: function () {
      //获取当前数据
      let url = '';
      let data = this.$refs.insuranceRef.comp.ProjectInsure;
      data.source_bill = this.source_bill;
      if (data.pk_prj_insure) {
        url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/ins/update';
      } else {
        url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/ins/create';
      }
      //保存校验
      this.$refs.insuranceRef.comp.$refs['projectInsure-form'].validate(valid => {
        if (valid) {
          this.$http({
            url: url,
            headers: { 'Content-Type': 'application/json' },
            method: 'post',
            data: JSON.parse(JSON.stringify(data))
          }).then(res => {
            if (res.data.success === true) {
              this.$message({
                message: '保存成功！',
                type: 'success'
              });
              this.requestInsurance();
              this.$refs['insuranceRef'].comp.formShow = false;
            } else {
              this.$message({
                message: res.data.message,
                type: 'error'
              });
            }
          }).catch(() => {
            this.$message({
              message: '更新失败',
              type: 'error'
            });
          });
        }
      });
    },
    //保险行编辑
    insuranceFormedit: function (scope) {
      //记录删除位置
      this.rmoveindex = scope.$index;
      //行下展开表单界面
      let row = scope.row;
      this.$refs['insuranceRef'].getTableComp().expandRow(row);
      this.$refs['insuranceRef'].comp.formShow = false;
      //ProjectInsure为表单数据对象参数
      this.$refs['insuranceRef'].setData('ProjectInsure', row);

      // 备份数据
      this.baseData = JSON.parse(JSON.stringify(scope.row));
      this.baseEditIndex = scope.$index;
    },
    // 保险删除提示
    insuranceFormdelete: function (scope) {
      this.insuranceDelVisible = true;
      this.delId = scope.row.pk_prj_insure;
    },
    // 保险删除方法
    insuranceDeleteClick() {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/ins/deleteById',
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
          this.requestInsurance();
        } else {
          this.$message({
            message: res.data.message,
            type: 'error'
          });
        }
      }).catch(e => {
        this.$message({
          message: '信息删除失败！',
          type: 'error'
        });
      });
      this.insuranceDelVisible = false;
      this.delId = '';
    }
  }
});

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "insuranceRef",
    attrs: {
      "tplId": "insuranceId",
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexuskey,
      "tplData": _vm.insuranceData,
      "tplResetFun": _vm.insuranceResetFun,
      "show-type": "table-form"
    },
    on: {
      "form-confirm-click": _vm.insuranceFormConfirm,
      "form-cancel-click": _vm.insuranceFormCancel,
      "edit-table-click": _vm.insuranceFormedit,
      "delete-table-click": _vm.insuranceFormdelete
    }
  }), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    model: {
      value: (_vm.insuranceDelVisible),
      callback: function($$v) {
        _vm.insuranceDelVisible = $$v
      },
      expression: "insuranceDelVisible"
    }
  }, [_c('span', [_vm._v("确认删除该条记录？删除后无法恢复。")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.insuranceDelVisible = false, this.delId = ''
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.insuranceDeleteClick
    }
  }, [_vm._v("确 定")])], 1)])], 1)
},staticRenderFns: []}

/***/ })
/******/ ])});;
//# sourceMappingURL=busi_insure.vue.401369ec912cd056c3e9.en.js.map