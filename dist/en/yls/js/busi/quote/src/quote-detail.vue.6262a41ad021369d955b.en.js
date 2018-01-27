define("yls//busi/quote/src/quote-detail.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 786);
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

/***/ 483:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    let oThis = this;
    return {
      //固定写法
      scrollDom: document.getElementsByClassName('view')[0],
      //报价主键
      pk_calc: '',
      //删除对话框是否展示
      delDialogVisible: false,
      //删除标识，区分子表
      delType: '',
      //删除实体主键
      delId: '',
      // 报价主模板 baseTemplateRef start
      // pk_temp:'a57c6167-ee45-434a-bff1-ed127f18f5d3',
      funnode: "BT007",
      nexusKey: "CALC001",
      tplData: {},
      //是否编辑态
      editable: false,
      baseIcons: [{
        icon: 'edit',
        click: function () {
          oThis.editable = !oThis.editable;
          //备份数据，取消时使用
          oThis.data = JSON.parse(JSON.stringify(oThis.$refs.baseTemplateRef.getData('QuoteCalculator')));
        }
      }],
      //控件绑定事件
      formResetFun($node) {
        //投放金额
        let $loan_plan_cash = $node.find("el-number[v-model='QuoteCalculator.loan_plan_cash']");
        if ($loan_plan_cash.length) {
          // 添加绑定事件, 首付款绑定downPaymentChange
          $loan_plan_cash.attr("v-on:change", "loanPlanCashChange");
        }

        //首付款
        let $down_payment = $node.find("el-number[v-model='QuoteCalculator.down_payment']");
        if ($down_payment.length) {
          // 添加绑定事件, 首付款绑定downPaymentChange
          $down_payment.attr("v-on:change", "downPaymentChange");
        }

        //首付款比例
        let $down_payment_ratio = $node.find("el-percent[v-model='QuoteCalculator.down_payment_ratio']");
        if ($down_payment_ratio.length) {
          $down_payment_ratio.attr("v-on:change", "downPaymentRatioChange");
        }

        //保证金
        let $deposit_cash = $node.find("el-number[v-model='QuoteCalculator.deposit_cash']");
        if ($deposit_cash.length) {
          $deposit_cash.attr("v-on:change", "depositCashChange");
        }
        //保证金比例
        let $deposit_ratio = $node.find("el-percent[v-model='QuoteCalculator.deposit_ratio']");
        if ($deposit_ratio.length) {
          $deposit_ratio.attr("v-on:change", "depositRatioChange");
        }

        //手续费
        let $srvfee_cash_in = $node.find("el-number[v-model='QuoteCalculator.srvfee_cash_in']");
        if ($srvfee_cash_in.length) {
          $srvfee_cash_in.attr("v-on:change", "srvfeeCashInChange");
        }
        //手续费比例
        let $srvfee_ratio_in = $node.find("el-percent[v-model='QuoteCalculator.srvfee_ratio_in']");
        if ($srvfee_ratio_in.length) {
          $srvfee_ratio_in.attr("v-on:change", "srvfeeRatioInChange");
        }
      },
      //控件绑定事件实现
      formReSetMethods: {

        //投放金额
        loanPlanCashChange(data) {
          if (data && data !== '') {
            let down_payment = oThis.$refs.baseTemplateRef.comp.QuoteCalculator.down_payment;
            let down_payment_ratio = oThis.$refs.baseTemplateRef.comp.QuoteCalculator.down_payment_ratio;
            if (down_payment && down_payment !== '') {
              //计算首付款比例
              down_payment_ratio = down_payment / data;
              oThis.$refs.baseTemplateRef.comp.QuoteCalculator.down_payment_ratio = down_payment_ratio;
            } else if (down_payment_ratio && down_payment_ratio !== '') {
              //计算首付款
              down_payment = down_payment_ratio * data;
              oThis.$refs.baseTemplateRef.comp.QuoteCalculator.down_payment = down_payment;
            }

            //保证金
            let deposit_cash = oThis.$refs.baseTemplateRef.comp.QuoteCalculator.deposit_cash;
            let deposit_ratio = oThis.$refs.baseTemplateRef.comp.QuoteCalculator.deposit_ratio;
            if (deposit_cash && deposit_cash !== '') {
              deposit_ratio = deposit_cash / data;
              oThis.$refs.baseTemplateRef.comp.QuoteCalculator.deposit_ratio = deposit_ratio;
            } else if (deposit_ratio && deposit_ratio !== '') {
              deposit_cash = deposit_ratio * data;
              oThis.$refs.baseTemplateRef.comp.QuoteCalculator.deposit_cash = deposit_cash;
            }

            //手续费
            let srvfee_cash_in = oThis.$refs.baseTemplateRef.comp.QuoteCalculator.srvfee_cash_in;
            let srvfee_ratio_in = oThis.$refs.baseTemplateRef.comp.QuoteCalculator.srvfee_ratio_in;
            if (srvfee_cash_in && srvfee_cash_in !== '') {
              srvfee_ratio_in = srvfee_cash_in / data;
              oThis.$refs.baseTemplateRef.comp.QuoteCalculator.srvfee_ratio_in = srvfee_ratio_in;
            } else if (srvfee_ratio_in && srvfee_ratio_in !== '') {
              srvfee_cash_in = srvfee_ratio_in * data;
              oThis.$refs.baseTemplateRef.comp.QuoteCalculator.deposit_cash = srvfee_cash_in;
            }
          }
        },
        //首付款失去焦点
        downPaymentChange(data) {
          if (data && data !== '') {
            let loan_plan_cash = oThis.$refs.baseTemplateRef.comp.QuoteCalculator.loan_plan_cash;
            let down_payment_ratio = data / loan_plan_cash;
            oThis.$refs.baseTemplateRef.comp.QuoteCalculator.down_payment_ratio = down_payment_ratio;
          }
        },
        //首付款比例失去焦点
        downPaymentRatioChange(data) {
          if (data && data !== '') {
            let loan_plan_cash = oThis.$refs.baseTemplateRef.comp.QuoteCalculator.loan_plan_cash;
            let down_payment = loan_plan_cash * data;
            oThis.$refs.baseTemplateRef.comp.QuoteCalculator.down_payment = down_payment;
          }
        },
        //保证金金额
        depositCashChange(data) {
          if (data && data !== '') {
            let loan_plan_cash = oThis.$refs.baseTemplateRef.comp.QuoteCalculator.loan_plan_cash;
            let deposit_ratio = data / loan_plan_cash;
            oThis.$refs.baseTemplateRef.comp.QuoteCalculator.deposit_ratio = deposit_ratio;
          }
        },
        //保证金比例
        depositRatioChange(data) {
          if (data && data !== '') {
            let loan_plan_cash = oThis.$refs.baseTemplateRef.comp.QuoteCalculator.loan_plan_cash;
            let deposit_cash = data * loan_plan_cash;
            oThis.$refs.baseTemplateRef.comp.QuoteCalculator.deposit_cash = deposit_cash;
          }
        },
        //服务费
        srvfeeCashInChange(data) {
          if (data && data !== '') {
            let loan_plan_cash = oThis.$refs.baseTemplateRef.comp.QuoteCalculator.loan_plan_cash;
            let srvfee_ratio_in = data / loan_plan_cash;
            oThis.$refs.baseTemplateRef.comp.QuoteCalculator.srvfee_ratio_in = srvfee_ratio_in;
          }
        },
        //服务费比例
        srvfeeRatioInChange(data) {
          if (data && data !== '') {
            let loan_plan_cash = oThis.$refs.baseTemplateRef.comp.QuoteCalculator.loan_plan_cash;
            let srvfee_cash_in = data * loan_plan_cash;
            oThis.$refs.baseTemplateRef.comp.QuoteCalculator.srvfee_cash_in = srvfee_cash_in;
          }
        }
      },
      // 报价主模板 baseTemplateRef end

      // 投放计划 loanPlanRef start
      // loanPlan_pk_temp:'cece85f5-6732-4c39-ba6a-0d4810ca03f8',
      loanPlan_funnode: "BT007",
      loanPlan_nexusKey: "CALC002",
      loanPlanData: {},
      loanPlanResetFun($node) {
        let $table = $node.find("el-table");
        $table.attr(':show-header', 'true');
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
      //投放计划添加
      loanPlanPlusIcons: [{
        icon: 'plus',
        click() {
          // 关闭table中的编辑区
          oThis.$refs.loanPlanRef.getTableComp().closeExpandRow();
          // 重置新增数据
          oThis.$refs.loanPlanRef.resetFormData();
          // 显示新增区域
          oThis.$refs.loanPlanRef.formShow = true;
        }
      }],
      // 投放计划 loanPlanRef end

      // 规则设置 loanRuleRef start
      // loanRule_pk_temp:'c286e256-19e3-4bdf-83d2-7d0a4111f346',
      loanRule_funnode: "BT007",
      loanRule_nexusKey: "CALC003",
      loanRuleData: {},
      loanRuleResetFun($node) {
        let $table = $node.find("el-table");
        $table.attr(':show-header', 'true');
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
      //投放规则添加
      loanRulePlusIcons: [{
        icon: 'plus',
        click() {
          // 关闭table中的编辑区
          oThis.$refs.loanRuleRef.getTableComp().closeExpandRow();
          // 重置新增数据
          oThis.$refs.loanRuleRef.resetFormData();
          // 显示新增区域
          oThis.$refs.loanRuleRef.formShow = true;
        }
      }],
      // 规则设置 loanRuleRef end

      // 租金计划表 inoutPlanRef start
      // inoutPlan_pk_temp:"ba531d61-3088-4abb-8531-ae6b165a3031",
      inoutPlan_funnode: "BT007",
      inoutPlan_nexusKey: "CALC004",
      inoutPlanData: {}
      // 租金计划表 inoutPlanRef end
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
    //测算
    onCalc() {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'quote/calc/calculateById',
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        dataType: 'json',
        data: this.pk_calc
      }).then(res => {
        debugger;
        //加载租金计划表
        this.loadInoutPlan(this.pk_calc);
      }).catch(e => {
        this.$message({
          message: '报价测算失败！',
          type: 'error'
        });
      });
    },
    // 报价主模板 baseTemplateRef 事件处理 start
    clickCancel() {
      this.editable = false;
      //恢复修改前值
      // this.$refs.baseTemplateRef.setData('QuoteCalculator',this.data);
      this.$refs["baseTemplateRef"].setData('QuoteCalculator', this.data);
    },
    clickSave() {
      let data = this.$refs.baseTemplateRef.comp.QuoteCalculator;
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'quote/calc/save',
        // headers: {'Content-Type': 'application/json'},  
        method: 'post',
        data
      }).then(res => {
        this.pk_calc = res.data.data.pk_quote_calculator;
        location.hash = '/quote/detail/' + this.pk_calc;
        this.editable = false;
        let originalValue = res.data.data;
        this.$refs["baseTemplateRef"].setData('QuoteCalculator', originalValue);
        //加载投放信息
        this.loadLoanPlan(this.pk_calc);
        //加载规则信息
        this.loadPlanRule(this.pk_calc);
      }).catch(e => {
        this.$message({
          message: '报价保存失败！',
          type: 'error'
        });
      });
    },
    // 报价主模板 baseTemplateRef 事件处理 end

    // 投放计划 loanPlanRef 事件处理 start
    loanPlanFormConfirm() {
      if (this.pk_calc && this.pk_calc !== '') {
        let data = this.$refs.loanPlanRef.comp.QuoteLoanPlan;
        let jsonData = JSON.parse(JSON.stringify(data));
        jsonData.pk_quote_calculator = this.pk_calc;
        this.$http({
          url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'quote/loanPlan/save',
          // headers: {'Content-Type': 'application/json'},  
          method: 'post',
          data: jsonData
        }).then(res => {
          if (res.data.success === true) {
            this.$message({
              message: '保存成功！',
              type: 'success'
            });
            this.$refs.loanPlanRef.comp.formShow = false;
            this.loadLoanPlan(this.pk_calc);
          } else {
            this.$message({
              message: res.data.error.errorMessage,
              type: 'error'
            });
          }
        }).catch(e => {
          this.$message({
            message: '投放计划保存失败！',
            type: 'error'
          });
        });
      } else {
        this.$message({
          message: '请先保存报价信息!',
          type: 'error'
        });
      }
    },
    loanPlanFormCancel(type) {
      this.$refs.loanPlanRef.getTableComp().closeExpandRow();
      if (type === 'form') {
        this.$refs.loanPlanRef.formShow = false;
      } else {
        this.$refs.loanPlanRef.getTableComp().closeExpandRow();
        let loanPlanTable = this.$refs.loanPlanRef.getData('QuoteLoanPlan_t');
        loanPlanTable[this.baseEditIndex] = this.baseData;
        this.$refs.loanPlanRef.setData('QuoteLoanPlan_t', loanPlanTable);
      }
    },
    loanPlanEditTableRow(scope) {
      this.$refs.loanPlanRef.getTableComp().expandRow(scope.row);
      this.$refs.loanPlanRef.comp.formShow = false;
      this.$refs.loanPlanRef.setData('QuoteLoanPlan', scope.row);

      // 备份数据
      this.baseData = JSON.parse(JSON.stringify(scope.row));
      this.baseEditIndex = scope.$index;
    },
    loanPlanDeleteTableRow(scope) {
      this.delType = 'loanPlan';
      this.delDialogVisible = true;
      this.delId = scope.row.pk_quote_loan_plan;
    },
    // 投放计划 loanPlanRef 事件处理 end

    // 规则设置 loanRuleRef 事件处理 start
    loanRuleFormConfirm() {
      if (this.pk_calc && this.pk_calc !== '') {
        let data = this.$refs.loanRuleRef.comp.QuoteRule;
        let jsonData = JSON.parse(JSON.stringify(data));
        jsonData.pk_quote_calculator = this.pk_calc;
        this.$http({
          url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'quote/rule/save',
          method: 'post',
          data: jsonData
        }).then(res => {
          if (res.data.success === true) {
            this.$message({
              message: '保存成功！',
              type: 'success'
            });
            this.$refs.loanRuleRef.comp.formShow = false;
            this.loadPlanRule(this.pk_calc);
          } else {
            this.$message({
              message: res.data.error.errorMessage,
              type: "error"
            });
          }
        }).catch(e => {
          this.$message({
            message: '投放规则保存失败！',
            type: 'error'
          });
        });
      } else {
        this.$message({
          message: '请先保存报价信息!',
          type: 'error'
        });
      }
    },
    loanRuleFormCancel(type) {
      this.$refs.loanRuleRef.getTableComp().closeExpandRow();
      if (type === 'form') {
        this.$refs.loanRuleRef.formShow = false;
      } else {
        this.$refs.loanRuleRef.getTableComp().closeExpandRow();
        let loanRuleTable = this.$refs.loanRuleRef.getData('QuoteRule_t');
        loanRuleTable[this.baseEditIndex] = this.baseData;
        this.$refs.loanRuleRef.setData('QuoteRule_t', loanRuleTable);
      }
    },
    loanRuleEditTableRow(scope) {
      this.$refs.loanRuleRef.getTableComp().expandRow(scope.row);
      this.$refs.loanRuleRef.comp.formShow = false;
      this.$refs.loanRuleRef.setData('QuoteRule', scope.row);

      // 备份数据
      this.baseData = JSON.parse(JSON.stringify(scope.row));
      this.baseEditIndex = scope.$index;
    },
    loanRuleDeleteTableRow(scope) {
      this.delType = 'loanRule';
      this.delDialogVisible = true;
      this.delId = scope.row.pk_quote_rule;
    },
    // 规则设置 loanRuleRef 事件处理 end

    //加载数据方法
    loadData() {
      this.pk_calc = this.$root.$router.currentRoute.params.id;
      //router name
      //this.$root.$router.currentRoute.name;
      //详情页面
      if (this.pk_calc && this.pk_calc !== '') {
        //加载报价信息
        this.loadQuoteCalc(this.pk_calc);
        //加载投放信息
        this.loadLoanPlan(this.pk_calc);
        // //加载规则信息
        this.loadPlanRule(this.pk_calc);
        //加载租金计划表
        this.loadInoutPlan(this.pk_calc);
      } else {
        this.editable = true;
      }
    },
    //加载报价信息
    loadQuoteCalc(pk_calc) {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'quote/calc/getById',
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        data: pk_calc
      }).then(res => {
        let originalValue = res.data.data;
        this.$refs['baseTemplateRef'].setData('QuoteCalculator', JSON.parse(JSON.stringify(originalValue)));
      }).catch(e => {
        this.$message({
          message: '报价详情获取失败',
          type: 'error'
        });
      });
    },
    //加载投放信息
    loadLoanPlan(pk_calc) {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'quote/loanPlan/getByCalcId ',
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        data: pk_calc
      }).then(res => {
        let originalValue = res.data.data;
        this.$refs['loanPlanRef'].setData('QuoteLoanPlan_t', JSON.parse(JSON.stringify(originalValue)));
      }).catch(e => {
        this.$message({
          message: ' 投放计划获取失败',
          type: 'error'
        });
      });
    },
    //加载规则信息
    loadPlanRule(pk_calc) {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'quote/rule/getByCalcId',
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        data: pk_calc
      }).then(res => {
        let originalValue = res.data.data;
        this.$refs['loanRuleRef'].setData('QuoteRule_t', JSON.parse(JSON.stringify(originalValue)));
      }).catch(e => {
        this.$message({
          message: '投放规则获取失败',
          type: 'error'
        });
      });
    },
    //加载租金计划表
    loadInoutPlan(pk_calc) {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'quote/inoutPlan/getByCalcId ',
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        data: pk_calc
      }).then(res => {
        let originalValue = res.data.data;
        this.$refs['inoutPlanRef'].setData('QuoteInoutPlan_t', JSON.parse(JSON.stringify(originalValue)));
      }).catch(e => {
        this.$message({
          message: '租金计划表获取失败',
          type: 'error'
        });
      });
    },

    //删除确定按钮
    deleteConfirmClick() {
      let requestUrl = '';
      if (this.delType === 'loanRule') {
        requestUrl = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'quote/rule/deleteById';
      } else if (this.delType === 'loanPlan') {
        requestUrl = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'quote/loanPlan/deleteById';
      }
      if (requestUrl !== '') {
        this.$http({
          url: requestUrl,
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
            this.delDialogVisible = false;
            //刷新列表
            if (this.delType === 'loanRule') {
              this.loadPlanRule(this.pk_calc);
            } else if (this.delType === 'loanPlan') {
              this.loadLoanPlan(this.pk_calc);
            }
          } else {
            this.$message({
              message: res.data.error.errorMessage,
              type: 'error'
            });
          }
        }).catch(e => {
          this.$message({
            message: '删除失败',
            type: 'error'
          });
        });
      }
    }
  }
});

/***/ }),

/***/ 522:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 622:
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
  }, [_vm._v("返回")]), _vm._v(" "), _c('el-button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (true),
      expression: "true"
    }],
    staticClass: "fr",
    staticStyle: {
      "margin-right": "10px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.onCalc
    }
  }, [_vm._v("测算")])], 1), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "basePanel",
      "title": "报价信息",
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
  }, [_vm._v("保存")])], 1) : _vm._e()], 1), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "loanPlanPanel",
      "title": "投放计划",
      "icons": _vm.loanPlanPlusIcons
    }
  }, [_c('ifbp-template', {
    ref: "loanPlanRef",
    attrs: {
      "tplId": "linkmanTemplate",
      "funnode": _vm.loanPlan_funnode,
      "nexuskey": _vm.loanPlan_nexusKey,
      "tplData": _vm.loanPlanData,
      "tplResetFun": _vm.loanPlanResetFun,
      "show-type": "table-form"
    },
    on: {
      "form-confirm-click": _vm.loanPlanFormConfirm,
      "form-cancel-click": _vm.loanPlanFormCancel,
      "edit-table-click": _vm.loanPlanEditTableRow,
      "delete-table-click": _vm.loanPlanDeleteTableRow
    }
  })], 1), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "loanRulePanel",
      "title": "投放规则",
      "icons": _vm.loanRulePlusIcons
    }
  }, [_c('ifbp-template', {
    ref: "loanRuleRef",
    attrs: {
      "tplId": "loanRuleTemplate",
      "funnode": _vm.loanRule_funnode,
      "nexuskey": _vm.loanRule_nexusKey,
      "tplData": _vm.loanRuleData,
      "tplResetFun": _vm.loanRuleResetFun,
      "show-type": "table-form"
    },
    on: {
      "form-confirm-click": _vm.loanRuleFormConfirm,
      "form-cancel-click": _vm.loanRuleFormCancel,
      "edit-table-click": _vm.loanRuleEditTableRow,
      "delete-table-click": _vm.loanRuleDeleteTableRow
    }
  })], 1), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "inoutPlanPanel",
      "title": "租金计划表"
    }
  }, [_c('ifbp-template', {
    ref: "inoutPlanRef",
    attrs: {
      "tplId": "inoutPlanTemplate",
      "funnode": _vm.inoutPlan_funnode,
      "nexuskey": _vm.inoutPlan_nexusKey,
      "tplData": _vm.inoutPlanData,
      "show-type": "table"
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
  }, [_vm._v("报价测算")])])
}]}

/***/ }),

/***/ 786:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(522)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(483),
  /* template */
  __webpack_require__(622),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

/******/ })});;
//# sourceMappingURL=quote-detail.vue.6262a41ad021369d955b.en.js.map