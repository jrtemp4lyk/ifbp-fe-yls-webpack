define("yls//busi/customer/src/AssetPanel.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 167);
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

/***/ 119:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

/***/ })

/******/ })});;
//# sourceMappingURL=AssetPanel.vue.74e4e3238379f94665fd.en.js.map