define("yls//busi/project/src/projectinfo/projectOrginfoPanel.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 187);
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

/***/ 101:
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
  props: ["source_bill", "type"],
  data() {
    var oThis = this;
    //校验
    var validatecustomer = function (rule, value, callback) {};
    return {
      scrollDom: document.getElementsByClassName("view")[0],
      OrginfoDelVisible: false,
      rmoveindex: "",
      delId: "",
      //出租人标签
      OrginfoIcons: [{
        icon: "plus",
        click: function () {

          if (oThis.source_bill === "") {
            oThis.$message({
              message: "请先保存基本信息",
              type: "error"
            });
            return;
          }
          var uitemplateComp = oThis.$refs.OrginfoRef.comp;
          var table = uitemplateComp.$refs["projectOrginfo_t_ref"];
          table.closeExpandRow();
          uitemplateComp.formShow = true;
          //初始化值
          oThis.$refs.OrginfoRef.setData("projectOrginfo", {
            // mobile:'13'
          });
          oThis.rmoveindex = "";
          uitemplateComp.$refs["projectOrginfo_ref"].resetFields();
        }
      }],
      //type=prj 然后项目ui_id:8e13c344-fe4b-4e0c-a171-8e18395ee236 否者a7715073-8a24-420a-86de-9110786e8e4b
      funnode: oThis.type === "prj" ? "BT008" : "BT008",
      nexusKey: oThis.type === "prj" ? "projectOrginfoUI" : "projectOrginfoUI",
      OrginfoData: {},
      //渲染表格
      OrginfoResetFun: function ($node) {
        var $refNode = this.getNodeById($node, 'zi1iz33e0z');
        // 获取form中所有el-ref，可以给所有el-ref加上事件，统一触发同一方法
        // var $refNode = $node.find("el-ref");
        if ($refNode.length) {
          // 添加绑定事件, 参照改变时触发trigger事件，调用customerRefChange方法
          $refNode.attr("v-on:trigger", "customerRefChange");
        };
        //项目承租信息表格id：owwkujphew
        var $table = $node.find("el-table");
        var operateArr = [{
          title: "编辑",

          icon: "edit"
        }, {
          title: "删除",

          icon: "delete"
        }];

        var operateHtml = this.getTableOperateHtml(operateArr);
        // var $customercode = this.getNodeById($node, "irwohmupzb"); //出租人编码
        // var $legalpersonname = this.getNodeById($node, "zmimbwbx3qn"); //法人代表
        // var $taxpayernumber = this.getNodeById($node, "349ebc0s246"); //纳税人识别号

        //  $customercode.html(
        //    '<template scope="scope"><div>{{scope.row.beanMap?' +
        //     "(scope.row.beanMap.pk_customer_ref ? scope.row.beanMap." +
        //     'pk_customer_ref[scope.row.pk_customer].code : "") : ""}}</div></template>'
        // );

        // $legalpersonname.html(
        //    '<template scope="scope"><div>{{scope.row.beanMap?' +
        //     "(scope.row.beanMap.pk_customer_ref ? scope.row.beanMap." +
        //     'pk_customer_ref[scope.row.pk_customer].legal_person_name : "") : ""}}</div></template>'
        // );

        //  $taxpayernumber.html(
        //    '<template scope="scope"><div>{{scope.row.beanMap?' +
        //     "(scope.row.beanMap.pk_customer_ref ? scope.row.beanMap." +
        //     'pk_customer_ref[scope.row.pk_customer].taxpayer_number : "") : ""}}</div></template>'
        // );

        $table.append(operateHtml);
        return $node[0].outerHTML;
      },
      bothlesseeMethods: {
        customerRefChange: function (type, data) {
          debugger;
          oThis.$refs.OrginfoRef.comp.projectOrginfo.identity_num = data.value[0].identity_num; //证件号码
          oThis.$refs.OrginfoRef.comp.projectOrginfo.pk_legal_person = data.value[0].pk_legal_person; //法定代表人
          oThis.$refs.OrginfoRef.comp.projectOrginfo.pk_linkman = data.value[0].pk_linkman; //联系人
          oThis.$refs.OrginfoRef.comp.projectOrginfo.linkman_phone = data.value[0].linkman_phone; //联系人电话
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
      this.requestPrjOrginfo();
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
        this.requestPrjOrginfo();
      }
    },
    //请求业务出租方
    requestPrjOrginfo() {
      var url;
      if (this.source_bill == "") {
        return;
      }
      url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "prj/orginfo/page";
      var data = {
        "orderList": [{
          "direction": "desc",
          "property": "ts"
        }],
        pageNum: 0,
        pageSize: 0,
        searchParams: {
          searchMap: {
            custCondList: [{
              'key': 'source_bill',
              'oper': '=',
              'value': this.source_bill
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

        this.$refs["OrginfoRef"].setData("projectOrginfo_t", JSON.parse(JSON.stringify(this.originalValue)));
      }).catch(() => {
        this.$message({
          message: "信息获取失败",
          type: "error"
        });
      });
    },
    //出租方取消按钮
    OrginfoFormCancel: function (type) {
      this.rmoveindex = "";
      //关闭表单或者是下拉显示行
      if (type === "form") {
        this.$refs["OrginfoRef"].comp.formShow = false;
      } else {
        this.$refs["OrginfoRef"].getTableComp().closeExpandRow();
      }
    },
    //出租方主表保存
    OrginfoFormConfirm: function () {
      //获取当前数据
      let url = "";
      var data = this.$refs.OrginfoRef.comp.projectOrginfo;
      data.source_bill = this.source_bill;
      delete data.legal_person_name;
      delete data.customer_code;
      delete data.taxpayer_number;
      delete data.realworkplace;
      delete data.realworkmail;

      if (data.pk_prj_orginfo) {
        url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + '/prj/orginfo/update';
      } else {
        url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + '/prj/orginfo/create';
      }
      //保存校验
      this.$refs.OrginfoRef.comp.$refs["projectOrginfo_ref"].validate(valid => {
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
              this.requestPrjOrginfo();
              this.$refs["OrginfoRef"].comp.formShow = false;
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
    //出租方行编辑
    OrginfoFormedit: function (scope) {
      //记录删除位置
      this.rmoveindex = scope.$index;
      //行下展开表单界面
      var row = scope.row;
      this.$refs["OrginfoRef"].getTableComp().expandRow(row);
      this.$refs["OrginfoRef"].formShow = false;
      //projectOrginfo为表单数据对象参数
      this.$refs["OrginfoRef"].setData("projectOrginfo", row);
      this.$refs.OrginfoRef.comp.projectOrginfo.customer_code = row.beanMap.pk_customer_ref[row.pk_customer].code;
      this.$refs.OrginfoRef.comp.projectOrginfo.legal_person_name = row.beanMap.pk_customer_ref[row.pk_customer].legal_person_name;
      this.$refs.OrginfoRef.comp.projectOrginfo.taxpayer_number = row.beanMap.pk_customer_ref[row.pk_customer].taxpayer_number;

      this.$refs.OrginfoRef.comp.projectOrginfo.realworkplace = row.beanMap.pk_customer_ref[row.pk_customer].realworkplace; //实际告知地址
      this.$refs.OrginfoRef.comp.projectOrginfo.realworkmail = row.beanMap.pk_customer_ref[row.pk_customer].realworkmail; //实际告知邮编
    },
    // 出租方删除提示
    OrginfoFormdelete: function (scope) {
      this.OrginfoDelVisible = true;
      this.delId = scope.row.pk_prj_orginfo;
    },
    // 出租方删除方法
    OrginfoDeleteClick() {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "/prj/orginfo/deleteById",
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
          this.requestPrjOrginfo();
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
      this.OrginfoDelVisible = false;
      this.delId = "";
    }
  }
});

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "OrginfoRef",
    attrs: {
      "tplId": "Orginfo",
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexusKey,
      "tplData": _vm.OrginfoData,
      "tplResetFun": _vm.OrginfoResetFun,
      "methods": _vm.bothlesseeMethods,
      "show-type": "table-form"
    },
    on: {
      "form-confirm-click": _vm.OrginfoFormConfirm,
      "form-cancel-click": _vm.OrginfoFormCancel,
      "edit-table-click": _vm.OrginfoFormedit,
      "delete-table-click": _vm.OrginfoFormdelete
    }
  }), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    model: {
      value: (_vm.OrginfoDelVisible),
      callback: function($$v) {
        _vm.OrginfoDelVisible = $$v
      },
      expression: "OrginfoDelVisible"
    }
  }, [_c('span', [_vm._v("确认删除该条记录？删除后无法恢复。")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.OrginfoDelVisible = false, this.delId = ''
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.OrginfoDeleteClick
    }
  }, [_vm._v("确 定")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(122)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(101),
  /* template */
  __webpack_require__(151),
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

/***/ })

/******/ })});;
//# sourceMappingURL=projectOrginfoPanel.vue.99d713a1138af491854d.en.js.map