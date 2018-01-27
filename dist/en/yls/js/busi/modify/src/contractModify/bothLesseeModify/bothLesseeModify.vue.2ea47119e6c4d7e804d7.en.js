define("yls//busi/modify/src/contractModify/bothLesseeModify/bothLesseeModify.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 366);
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

/***/ 215:
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
  props: ["source_bill"],
  data() {
    var oThis = this;
    //校验
    var validatecustomer = function (rule, value, callback) {};
    return {
      scrollDom: document.getElementsByClassName("view")[0],
      bothlesseeDelVisible: false,
      rmoveindex: "",
      delId: "",
      //承租人标签
      bothlesseeIcons: [{
        icon: "plus",
        click: function () {

          if (oThis.source_bill === "") {
            oThis.$message({
              message: "请先保存基本信息",
              type: "error"
            });
            return;
          }
          var uitemplateComp = oThis.$refs.bothlesseeRef.comp;
          var table = uitemplateComp.$refs["projectBothLessee_t_ref"];
          table.closeExpandRow();
          uitemplateComp.formShow = true;
          //初始化值
          oThis.$refs.bothlesseeRef.setData("projectBothLessee", {
            // mobile:'13'
          });
          oThis.rmoveindex = "";
          uitemplateComp.$refs["projectBothLessee_ref"].resetFields();
        }
      }],
      //type=prj 然后项目ui_id:9d4022c1-438e-4bc8-8a10-9b9776cab14c 否者a7715073-8a24-420a-86de-9110786e8e4b
      funnode: "BT022",
      nexusKey: "projectBothLesseeModify",
      bothlesseeData: {},
      //渲染表格
      bothlesseeResetFun: function ($node) {
        //合同承租信息表格
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
      bothlesseeMethods: {
        customerRefChange: function (type, data) {
          // 拿到当前参照的数据，然后再操作其他字段
          console.log("触发参照改变:", type, data);
          /*
           * 这里的this指向 ifbp-element组件实例，
           * this.$refs.quote_scheme_form取到form实例（quote_scheme_form为UI模板设计器页面表单的"引用信息"，默认是formRef），
           * this.$refs.quote_scheme_form.model拿到model，里面有form上绑定的的全部数据。
          */
          oThis.$refs.bothlesseeRef.comp.projectBothLessee.customer_code = data.value[0].refcode;
          oThis.$refs.bothlesseeRef.comp.projectBothLessee.legal_person_name = data.value[0].legal_person_name;
          oThis.$refs.bothlesseeRef.comp.projectBothLessee.fax = data.value[0].fax;
          oThis.$refs.bothlesseeRef.comp.projectBothLessee.email = data.value[0].email;
        },
        banknoRefChange_l: function (type, data) {
          // 拿到当前参照的数据，然后再操作其他字段
          console.log("触发参照改变:", type, data);
          /*
           * 这里的this指向 ifbp-element组件实例，
           * this.$refs.quote_scheme_form取到form实例（quote_scheme_form为UI模板设计器页面表单的"引用信息"，默认是formRef），
           * this.$refs.quote_scheme_form.model拿到model，里面有form上绑定的的全部数据。
          */
          oThis.$refs.bothlesseeRef.comp.projectBothLessee.account_bank_l = data.value[0].refcode;
          oThis.$refs.bothlesseeRef.comp.projectBothLessee.bank_no_l = data.value[0].bank_no;
          oThis.$refs.bothlesseeRef.comp.projectBothLessee.bank_code_l = data.value[0].bank_code;
        },
        banknoRefChange: function (type, data) {
          // 拿到当前参照的数据，然后再操作其他字段
          console.log("触发参照改变:", type, data);
          /*
           * 这里的this指向 ifbp-element组件实例，
           * this.$refs.quote_scheme_form取到form实例（quote_scheme_form为UI模板设计器页面表单的"引用信息"，默认是formRef），
           * this.$refs.quote_scheme_form.model拿到model，里面有form上绑定的的全部数据。
          */
          oThis.$refs.bothlesseeRef.comp.projectBothLessee.account_bank = data.value[0].refcode;
          oThis.$refs.bothlesseeRef.comp.projectBothLessee.bank_no = data.value[0].bank_no;
          oThis.$refs.bothlesseeRef.comp.projectBothLessee.bank_code = data.value[0].bank_code;
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
      this.requestPrjbothlessee();
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
      if (this.source_bill != "") {
        this.requestPrjbothlessee();
      }
    },
    //请求业务承租方
    requestPrjbothlessee() {
      var url;
      if (this.source_bill == "") {
        return;
      }
      url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "/contr/modify/lessee/page";
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
        console.log();
        this.originalValue = res.data.data.content;
        console.log(this.originalValue);
        // for(var item=0;item<this.originalValue.length;item++){
        //   this.originalValu[item].customer_code=this.originalValu[item].beanMap[this.originalValu[item].pk_customer].code;
        // }
        this.$refs["bothlesseeRef"].setData("projectBothLessee_t", JSON.parse(JSON.stringify(this.originalValue)));
      }).catch(() => {
        this.$message({
          message: "信息获取失败",
          type: "error"
        });
      });
    },
    //承租方取消按钮
    bothlesseeFormCancel: function (type) {
      this.rmoveindex = "";
      //关闭表单或者是下拉显示行
      if (type === "form") {
        this.$refs.bothlesseeRef.comp.formShow = false;
      } else {
        this.$refs.bothlesseeRef.comp.getTableComp().closeExpandRow();
      }
    },
    //承租方主表保存
    bothlesseeFormConfirm: function () {
      //获取当前数据
      let url = "";
      var data = this.$refs.bothlesseeRef.comp.projectBothLessee;
      data.source_bill = this.source_bill;
      delete data.customer_code;
      delete data.fax;
      delete data.email;
      delete data.legal_person_name;
      delete data.bank_no;
      delete data.account_bank;
      delete data.bank_code;
      delete data.bank_no_l;
      delete data.account_bank_l;
      delete data.bank_code_l;
      if (data.pk_prj_both_lessee) {
        url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'contr/modify/lessee/update';
      } else {
        url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'contr/modify/lessee/create';
      }
      //保存校验
      this.$refs.bothlesseeRef.comp.$refs["projectBothLessee_ref"].validate(valid => {
        if (valid) {

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
              this.requestPrjbothlessee();
              this.$refs["bothlesseeRef"].comp.formShow = false;
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
    //承租方行编辑
    bothlesseeFormedit: function (scope) {
      //记录删除位置
      this.rmoveindex = scope.$index;
      //行下展开表单界面
      var row = scope.row;
      this.$refs.bothlesseeRef.getTableComp().expandRow(row);
      this.$refs.bothlesseeRef.comp.formShow = false;
      //projectBothLessee为表单数据对象参数
      this.$refs.bothlesseeRef.setData("projectBothLessee", row);
      this.$refs.bothlesseeRef.comp.projectBothLessee.customer_code = row.beanMap.pk_customer_ref[row.pk_customer].code;
      this.$refs.bothlesseeRef.comp.projectBothLessee.legal_person_name = row.beanMap.pk_customer_ref[row.pk_customer].legal_person_name;
      this.$refs.bothlesseeRef.comp.projectBothLessee.fax = row.beanMap.pk_customer_ref[row.pk_customer].fax;
      this.$refs.bothlesseeRef.comp.projectBothLessee.email = row.beanMap.pk_customer_ref[row.pk_customer].email;
      this.$refs.bothlesseeRef.comp.projectBothLessee.account_bank_l = row.beanMap.pk_account_lessee_ref[row.pk_account_lessee].code;
      this.$refs.bothlesseeRef.comp.projectBothLessee.bank_no_l = row.beanMap.pk_account_lessee_ref[row.pk_account_lessee].bank_no;
      this.$refs.bothlesseeRef.comp.projectBothLessee.bank_code_l = row.beanMap.pk_account_lessee_ref[row.pk_account_lessee].bank_code;
      this.$refs.bothlesseeRef.comp.projectBothLessee.account_bank = row.beanMap.pk_account_ref[row.pk_account].code;
      this.$refs.bothlesseeRef.comp.projectBothLessee.bank_no = row.beanMap.pk_account_ref[row.pk_account].bank_no;
      this.$refs.bothlesseeRef.comp.projectBothLessee.bank_code = row.beanMap.pk_account_ref[row.pk_account].bank_code;
    },
    // 承租方删除提示
    bothlesseeFormdelete: function (scope) {
      this.bothlesseeDelVisible = true;
      this.delId = scope.row.pk_prj_both_lessee;
    },
    // 承租方删除方法
    bothlesseeDeleteClick() {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "/contr/modify/lessee/deleteById",
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
          this.requestPrjbothlessee();
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
      this.bothlesseeDelVisible = false;
      this.delId = "";
    }
  }
});

/***/ }),

/***/ 282:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 332:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "bothlesseeRef",
    attrs: {
      "tplId": "bothlessee",
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexusKey,
      "tplData": _vm.bothlesseeData,
      "tplResetFun": _vm.bothlesseeResetFun,
      "methods": _vm.bothlesseeMethods,
      "show-type": "table-form"
    },
    on: {
      "form-confirm-click": _vm.bothlesseeFormConfirm,
      "form-cancel-click": _vm.bothlesseeFormCancel,
      "edit-table-click": _vm.bothlesseeFormedit,
      "delete-table-click": _vm.bothlesseeFormdelete
    }
  }), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    model: {
      value: (_vm.bothlesseeDelVisible),
      callback: function($$v) {
        _vm.bothlesseeDelVisible = $$v
      },
      expression: "bothlesseeDelVisible"
    }
  }, [_c('span', [_vm._v("确认删除该条记录？删除后无法恢复。")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.bothlesseeDelVisible = false, this.delId = ''
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.bothlesseeDeleteClick
    }
  }, [_vm._v("确 定")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(282)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(215),
  /* template */
  __webpack_require__(332),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

/******/ })});;
//# sourceMappingURL=bothLesseeModify.vue.2ea47119e6c4d7e804d7.en.js.map