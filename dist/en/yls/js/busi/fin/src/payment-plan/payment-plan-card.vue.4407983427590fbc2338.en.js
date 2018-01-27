define("yls//busi/fin/src/payment-plan/payment-plan-card.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 747);
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

/***/ 444:
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    var oThis = this;
    return {
      //固定写法
      scrollDom: document.getElementsByClassName("view")[0],
      //报价主键
      pk_payment_plan: "",
      tplData: {},
      editable: false,
      baseIcons: [{
        icon: "edit",
        click: function () {
          oThis.editable = !oThis.editable;
        }
      }]
      // 报价主模板 baseTemplateRef end
    };
  },

  attmData: {},

  attmResetFun: function ($node) {
    var $table = $node.find("el-table");
    $table.attr(':show-header', 'false');
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
  mounted() {
    this.loadData();
  },
  methods: {
    //返回按钮
    goBack() {
      window.history.back(-1);
    },
    // 报价主模板 baseTemplateRef 事件处理 start
    clickCancel() {
      this.editable = false;
    },
    clickSave() {
      var data = this.$refs.baseTemplateRef.comp.PaymentPlan;
      var jsonData = JSON.parse(JSON.stringify(data));
      var urlSave;
      if (this.pk_payment_plan) {
        urlSave = '/yls-busi-web/fin/plan/update';
      } else {
        urlSave = '/yls-busi-web/fin/plan/create';
      }
      this.$http({
        url: urlSave,
        // headers: {'Content-Type': 'application/json'},  
        method: "post",
        data: jsonData
      }).then(res => {
        this.editable = false;
        var originalValue = res.data.data;
        this.$refs["baseTemplateRef"].setData("PaymentPlan", JSON.parse(JSON.stringify(originalValue)));
      }).catch(e => {
        this.$message({
          message: "保存失败！",
          type: "error"
        });
      });
    },
    // 报价主模板 baseTemplateRef 事件处理 end

    //加载数据方法
    loadData() {
      this.pk_payment_plan = this.$root.$router.currentRoute.params.id;
      //router name
      //this.$root.$router.currentRoute.name;
      //详情页面
      if (this.pk_payment_plan && this.pk_payment_plan != "") {
        //加载报价信息
        this.loadPayment(this.pk_payment_plan);
      } else {
        this.editable = true;
      }
    },
    //加载报价信息
    loadPayment(pk_payment_plan) {
      this.$http({
        url: "/yls-busi-web/fin/plan/getById",
        headers: { 'Content-Type': 'application/json' },
        method: "post",
        data: pk_payment_plan
      }).then(res => {
        var originalValue = res.data.data;
        this.$refs["baseTemplateRef"].setData("PaymentPlan", JSON.parse(JSON.stringify(originalValue)));
      }).catch(e => {
        this.$message({
          message: "详情获取失败",
          type: "error"
        });
      });
    }
  }
});

/***/ }),

/***/ 578:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-panel"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "detail-main-container clearfix"
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
      "title": "付款安排信息",
      "icons": _vm.baseIcons
    }
  }, [_c('ifbp-template', {
    ref: "baseTemplateRef",
    attrs: {
      "tplId": "baseTemplate",
      "funnode": "BT014",
      "nexuskey": "payment-plan",
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
  }, [_vm._v("保存")])], 1) : _vm._e()], 1)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title-container"
  }, [_c('h2', {
    staticClass: "name"
  }, [_vm._v("付款安排")])])
}]}

/***/ }),

/***/ 747:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(578)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(444),
  /* template */
  __webpack_require__(679),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

/******/ })});;
//# sourceMappingURL=payment-plan-card.vue.4407983427590fbc2338.en.js.map