define("yls//busi/customer/src/cust_report_detail.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 723);
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

/***/ 420:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["b" /* pagination */])("loadcustreportkpi")],
  data() {
    let oThis = this;
    let file = "";
    return {
      //固定写法
      scrollDom: document.getElementsByClassName("view")[0],
      //主键
      pk_cust_report: "",
      //当前实体
      custreport: "",
      //删除对话框是否展示
      delDialogVisible: false,
      //上传路径
      action: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/report/financeImprot",
      uploadType: {
        custreport: ""
      },
      //删除标识，区分子表
      delType: "",
      //删除实体主键
      delId: "",
      funnode: "BT003",
      kpi_funnode: "BT003",
      nexusKey: "cust_report",
      kpi_nexusKey: "cust_kpi",
      tplData: {},
      //是否编辑态
      editable: false,
      calcBtnshow: true,
      baseIcons: [{
        icon: "edit",
        click: function () {
          oThis.editable = !oThis.editable;
          oThis.calcBtnshow = !oThis.calcBtnshow;
        }
      }],
      //控件绑定事件
      formResetFun($node) {},
      //控件绑定事件实现
      formReSetMethods: {},
      kpi_formReSetMethods: {}
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    //返回按钮
    goBack() {
      window.history.back(-1);
    },
    clickCancel() {
      this.editable = false;
      //恢复修改前值
      this.$refs["baseTemplateRef"].setData("custReport_t", this.data);
    },
    clickSave() {
      let data = this.$refs.baseTemplateRef.comp.custReport;
      this.custreport = JSON.stringify(data);
      this.uploadType.custreport = this.custreport;
      if (this.$refs.baseTemplateRef.comp.$refs["formRef"].model.report_name === "") {
        this.$message.error("请选择导入文件！");
      } else {
        this.$refs.upload.submit();
      }
      this.$refs.upload.submit();
    },
    uploaded(re) {
      if (re.success) {
        this.$emit("getData");
        this.$message({
          type: "success",
          message: "成功导入" + re.data.importSum + "条数据"
        });
        this.pk_cust_report = re.data.pk;
        this.loadData();
      } else {
        this.$message.error(re.error.errorMessage);
      }
    },
    filechange(file, fileList) {
      debugger;
      var oThis = this;
      setTimeout(function () {
        let filename = file.name;
        filename = filename.substring(filename.lastIndexOf(".") + 1);
        if ("xlsx" === filename || "xls" === filename) {
          var formData = oThis.$refs.baseTemplateRef.getFormData();
          formData = JSON.parse(JSON.stringify(formData));
          formData.report_name = file.name;
          oThis.$refs["baseTemplateRef"].setData("custReport", JSON.parse(JSON.stringify(formData)));
        } else {
          oThis.$message.error("导入文件必须为Excel文件!");
        }
      });
    },
    beforeAvatarUpload(file) {
      return true;
    },
    //加载数据方法
    loadData() {
      debugger;
      if (this.pk_cust_report === "" && !this.pk_cust_report) {
        this.pk_cust_report = this.$root.$router.currentRoute.params.id;
      }
      if (this.pk_cust_report !== "" && this.pk_cust_report) {
        //加载主表
        this.loadcustreport(this.pk_cust_report);
        //加载字表
        this.loadcustreportkpi(this.pk_cust_report);
        this.editable = false;
        this.calcBtnshow = true;
      } else {
        this.editable = true;
        this.calcBtnshow = false;
      }
    },
    //详情查询
    loadcustreport(pk_cust_report) {
      debugger;
      if (this.pk_cust_report !== "") {
        console.log(this.pk_cust_report !== "");
        this.$http({
          url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/report/getById",
          headers: { "Content-Type": "application/json" },
          method: "post",
          data: this.pk_cust_report
        }).then(res => {
          debugger;
          let originalValue = res.data.data;
          this.$refs["baseTemplateRef"].setData("custReport", JSON.parse(JSON.stringify(originalValue)));
        }).catch(e => {
          this.$message({
            message: "财报详情获取失败",
            type: "error"
          });
        });
      }
    },
    //字表详情
    loadcustreportkpi(pk_cust_report) {
      let data = {
        orderList: [{
          direction: "desc",
          property: "ts"
        }],
        pageNum: this.currentPage - 1,
        pageSize: this.pageSize,
        searchParams: {
          searchMap: {
            fk_id_reportkpi: this.pk_cust_report
          }
        }
      };
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "/report/pki/page",
        headers: { "Content-Type": "application/json" },
        method: "post",
        data
      }).then(res => {
        debugger;
        let kpiValue = res.data.data.content;
        this.$refs["custreportchild"].setData("reportKpi_t", JSON.parse(JSON.stringify(kpiValue)));
        this.totalElements = res.data.data.totalElements; // 总条数
      }).catch(e => {
        this.$message({
          message: "财报详情获取失败",
          type: "error"
        });
      });
    },
    //删除确定按钮
    deleteConfirmClick() {
      this.delId = scope.row.pk_cust_report;
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/report/deleteById",
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
          this.delDialogVisible = false;
          //刷新列表
          if (this.delType === "loanRule") {
            this.loadPlanRule(this.pk_calc);
          } else if (this.delType === "loanPlan") {
            this.loadLoanPlan(this.pk_calc);
          }
        } else {
          this.$message({
            message: res.data.error.errorMessage,
            type: "error"
          });
        }
      }).catch(e => {
        this.$message({
          message: "删除失败",
          type: "error"
        });
      });
    }
  }
});

/***/ }),

/***/ 561:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 661:
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
      "title": "财报信息",
      "icons": _vm.baseIcons
    }
  }, [_c('ifbp-template', {
    ref: "baseTemplateRef",
    attrs: {
      "tplId": "baseTemplate",
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexusKey,
      "methods": _vm.formReSetMethods,
      "tpl-reset-fun": _vm.formResetFun,
      "show-type": "form",
      "tplData": _vm.tplData,
      "editable": _vm.editable
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
  }, [_vm._v("保存")]), _vm._v(" "), _c('el-upload', {
    ref: "upload",
    staticClass: "button-no-radius fr",
    attrs: {
      "action": _vm.action,
      "data": _vm.uploadType,
      "auto-upload": false,
      "show-file-list": false,
      "on-success": _vm.uploaded,
      "on-change": _vm.filechange,
      "before-upload": _vm.beforeAvatarUpload
    }
  }, [_c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    }
  }, [_vm._v("点击上传")])], 1)], 1) : _vm._e()], 1), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "basePanelchild",
      "title": "财报信息"
    }
  }, [_c('ifbp-template', {
    ref: "custreportchild",
    attrs: {
      "tplId": "pkiTemplate",
      "funnode": _vm.kpi_funnode,
      "nexuskey": _vm.kpi_nexusKey,
      "methods": _vm.kpi_formReSetMethods,
      "show-type": "table",
      "tplData": _vm.tplData,
      "editable": _vm.editable
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
  })], 1)], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    on: {
      "update:visible": function (val) { return _vm.delDialogVisible = val; }
    },
    model: {
      value: (_vm.delDialogVisible),
      callback: function($$v) {
        _vm.delDialogVisible = $$v
      },
      expression: "delDialogVisible"
    }
  }, [_c('span', [_vm._v("确认删除该数据？")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.delDialogVisible = false
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
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title-container"
  }, [_c('h2', {
    staticClass: "name"
  }, [_vm._v("财报信息")])])
}]}

/***/ }),

/***/ 723:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(561)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(420),
  /* template */
  __webpack_require__(661),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

/******/ })});;
//# sourceMappingURL=cust_report_detail.vue.8f70ac2b500fa3cb5bc2.en.js.map