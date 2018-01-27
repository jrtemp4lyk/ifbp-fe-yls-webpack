define("yls//busi/fin/src/rent-info/rentinfo-detail.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 748);
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

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    var oThis = this;
    return {
      delDialogVisible: false,
      //固定写法
      scrollDom: document.getElementsByClassName("view")[0],
      //起租主键
      pk_fin_rent_info: "",
      pk_quote_calculator: "",
      // 起租主模板 baseTemplateRef start
      tplData: {},
      editable: false,
      baseIcons: [{
        icon: "edit",
        click: function () {
          oThis.editable = !oThis.editable;
        }
      }],
      // 起租主模板 baseTemplateRef end

      // 报价模板 baseTemplateRef start
      quoteCalculatorDate: {},
      // 报价模板 baseTemplateRef end

      // 收支计划 fininoutplanRef start
      fininoutplanData: {},
      fininoutplanResetFun: function ($node) {
        var $table = $node.find("el-table");
        $table.attr(":show-header", "true");
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
      //收支计划添加
      fininoutplanPlusIcons: [{
        icon: "plus",
        click: function () {

          var uitemplateComp = oThis.$refs.fininoutplanRef.comp;
          var table = uitemplateComp.$refs["QuoteInoutPlan_t"];
          table.closeExpandRow();
          uitemplateComp.finrentinfo = {};
          uitemplateComp.formShow = true;
        }
      }]
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
    // 起租主模板 baseTemplateRef 事件处理 start
    clickCancel() {
      this.editable = false;
    },
    clickSave() {
      var RentInfo = this.$refs.baseTemplateRef.comp.RentInfo_f;
      var Quote = this.$refs.quoteCalculatorRef.comp.QuoteCalculator_f;
      var data = {
        rentInfoEntity: RentInfo,
        quoteCalculatorEntity: Quote
      };
      var jsonData = JSON.parse(JSON.stringify(data));

      this.$http({
        url: "/yls-busi-web/fin/rentinfo/saveMain",
        // headers: {'Content-Type': 'application/json'},
        method: "post",
        data: jsonData
      }).then(res => {

        this.editable = false;
        var originalValue = res.data.data.rentInfoEntity;
        var quoteValue = res.data.data.quoteCalculatorEntity;
        this.pk_fin_rent_info = res.data.data.rentInfoEntity.pk_fin_rent_info;
        this.$refs["baseTemplateRef"].setData("RentInfo_f", JSON.parse(JSON.stringify(originalValue)));
        this.$refs["quoteCalculatorRef"].setData("QuoteCalculator_f", JSON.parse(JSON.stringify(quoteValue)));
      }).catch(e => {
        this.$message({
          message: "起租保存失败！",
          type: "error"
        });
      });
    },
    // 起租主模板 baseTemplateRef 事件处理 end

    // 收支计划 fininoutplanRef 事件处理 start
    fininoutplanFormConfirm() {
      if (this.pk_fin_rent_info != null) {
        var data = this.$refs.fininoutplanRef.comp.Fininoutplan;
        //TODO UI模板待完善
        data.pk_fin_rent_info = this.pk_fin_rent_info;
        var jsonData = JSON.parse(JSON.stringify(data));
        this.$http({
          url: "/yls-busi-web/fin/fininoutplan/create",
          // headers: {'Content-Type': 'application/json'},
          method: "post",
          data: jsonData
        }).then(res => {

          if (res.data.success === true) {
            this.$message({
              message: "保存成功！",
              type: "success"
            });
            this.$refs.fininoutplanRef.comp.formShow = false;
            this.loadfininoutplan(data.pk_quote_calculator);
          } else {
            this.$message({
              message: res.data.msg,
              type: "error"
            });
          }
        }).catch(e => {
          this.$message({
            message: "收支计划保存失败！",
            type: "error"
          });
        });
      } else {
        this.$message({
          message: "请先保存起租信息。",
          type: "error"
        });
      }
    },
    fininoutplanFormCancel() {
      this.$refs.fininoutplanRef.comp.formShow = false;
    },
    fininoutplanEditDeleteClick() {
      this.$refs.fininoutplanRef.comp.formShow = true;
    },

    // 收支计划 fininoutplanRef 事件处理 end
    // 收支计划删除
    //删除操作
    fininoutplanDeleteClick(scope) {
      this.pk_quote_loan_plan = scope.row.pk_quote_loan_plan;
      this.delDialogVisible = true;
    },
    //删除确定
    deletefininoutplanClick() {
      this.$http({
        url: "/yls-busi-web/quote/inoutPlan/deleteById",
        headers: { "Content-Type": "application/json" },
        method: "post",
        dataType: "json",
        data: this.pk_quote_loan_plan
      }).then(res => {
        if (res.data.success === true) {
          this.$message({
            message: "删除成功",
            type: "success"
          });
          this.delDialogVisible = false;
          this.loadfininoutplan(this.pk_fin_rent_info);
        } else {
          this.$message({
            message: res.data.msg,
            type: "error"
          });
        }
      }).catch(e => {
        this.$message({
          message: "信息删除失败！",
          type: "error"
        });
      });
    },

    //加载数据方法
    loadData() {
      this.pk_fin_rent_info = this.$root.$router.currentRoute.params.id;
      //router name
      //this.$root.$router.currentRoute.name;
      //详情页面
      if (this.pk_fin_rent_info && this.pk_fin_rent_info != "") {
        //加载起租信息
        this.loadfinrentinfo(this.pk_fin_rent_info);
      } else {
        this.editable = true;
      }
    },
    //加载起租信息
    loadfinrentinfo(pk_fin_rent_info) {
      this.$http({
        url: "/yls-busi-web/fin/rentinfo/getById",
        headers: { "Content-Type": "application/json" },
        method: "post",
        data: pk_fin_rent_info
      }).then(res => {
        var originalValue = res.data.data;
        this.pk_quote_calculator = res.data.data.pk_quote_calculator;
        this.loadcalculatorinfo(this.pk_quote_calculator);
        this.loadfininoutplan(this.pk_quote_calculator);
        this.$refs["baseTemplateRef"].setData("RentInfo_f", JSON.parse(JSON.stringify(originalValue)));
      }).catch(e => {
        this.$message({
          message: "起租详情获取失败",
          type: "error"
        });
      });
    },
    //加载报价信息
    loadcalculatorinfo(pk_quote_calculator) {
      this.$http({
        url: "/yls-busi-web/quote/calc/getById",
        headers: { "Content-Type": "application/json" },
        method: "post",
        data: this.pk_quote_calculator
      }).then(res => {

        var originalValue = res.data.data;
        this.$refs["quoteCalculatorRef"].setData("QuoteCalculator_f", JSON.parse(JSON.stringify(originalValue)));
      }).catch(e => {
        this.$message({
          message: "报价获取失败",
          type: "error"
        });
      });
    },
    //加载收支计划
    loadfininoutplan(pk_quote_calculator) {
      this.$http({
        url: "/yls-busi-web/quote/inoutPlan/getByCalcId",
        headers: { "Content-Type": "application/json" },
        method: "post",
        data: this.pk_quote_calculator
      }).then(res => {

        var originalValue = res.data.data;
        this.$refs["fininoutplanRef"].setData("QuoteInoutPlan_t", JSON.parse(JSON.stringify(originalValue)));
      }).catch(e => {
        this.$message({
          message: "收支计划获取失败",
          type: "error"
        });
      });
    }
  }
});

/***/ }),

/***/ 530:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 630:
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
  }, [(_vm.editable) ? _c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.clickSave
    }
  }, [_vm._v("保存")]) : _vm._e(), _vm._v(" "), (_vm.editable) ? _c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "default"
    },
    on: {
      "click": _vm.clickCancel
    }
  }, [_vm._v("取消")]) : _vm._e(), _vm._v(" "), _c('el-button', {
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
      "title": "起租",
      "icons": _vm.baseIcons
    }
  }, [_c('ifbp-template', {
    ref: "baseTemplateRef",
    attrs: {
      "tplId": "baseTemplate",
      "funnode": "BT015",
      "nexuskey": "rentInfo",
      "show-type": "form",
      "tplData": _vm.tplData,
      "editable": _vm.editable
    }
  })], 1), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "quoteCalculator",
      "title": "报价"
    }
  }, [_c('ifbp-template', {
    ref: "quoteCalculatorRef",
    attrs: {
      "tplId": "quoteCalculator",
      "funnode": "BT015",
      "nexuskey": "finCalculator",
      "show-type": "form",
      "tplData": _vm.quoteCalculatorDate,
      "editable": _vm.editable
    }
  })], 1), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "fininoutplanPanel",
      "title": "收支计划",
      "icons": _vm.fininoutplanPlusIcons
    }
  }, [_c('ifbp-template', {
    ref: "fininoutplanRef",
    attrs: {
      "tplId": "fininoutplanTemplate",
      "funnode": "BT015",
      "nexuskey": "finInOutPlan",
      "tplData": _vm.fininoutplanData,
      "tplResetFun": _vm.fininoutplanResetFun,
      "show-type": "table-form"
    },
    on: {
      "form-confirm-click": _vm.fininoutplanFormConfirm,
      "form-cancel-click": _vm.fininoutplanFormCancel,
      "delete-table-click": _vm.fininoutplanDeleteClick,
      "edit-table-click": _vm.fininoutplanEditDeleteClick
    }
  })], 1)], 1), _vm._v(" "), _c('el-dialog', {
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
      "click": _vm.deletefininoutplanClick
    }
  }, [_vm._v("确 定")])], 1)])], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title-container"
  }, [_c('h2', {
    staticClass: "name"
  }, [_vm._v("起租")])])
}]}

/***/ }),

/***/ 748:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(530)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(445),
  /* template */
  __webpack_require__(630),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

/******/ })});;
//# sourceMappingURL=rentinfo-detail.vue.b1a50c22cbe6f40f2ecb.en.js.map