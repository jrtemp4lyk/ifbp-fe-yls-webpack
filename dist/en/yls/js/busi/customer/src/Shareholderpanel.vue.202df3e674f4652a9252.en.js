define("yls//busi/customer/src/Shareholderpanel.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
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

/***/ 38:
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


/***/ })

/******/ })});;
//# sourceMappingURL=Shareholderpanel.vue.202df3e674f4652a9252.en.js.map