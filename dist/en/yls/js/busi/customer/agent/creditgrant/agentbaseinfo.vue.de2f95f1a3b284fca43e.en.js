define("yls//busi/customer/agent/creditgrant/agentbaseinfo.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 161);
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

/***/ 148:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "agentbaseTemplateRef",
    attrs: {
      "tplId": "baseTemplate",
      "funnode": _vm.agentbasefunnode,
      "nexuskey": _vm.agentbasenexuskey,
      "show-type": "table-form",
      "methods": _vm.formReSetMethods,
      "tplResetFun": _vm.templateTableFormResetFun,
      "tplData": _vm.customerData,
      "editable": _vm.agentEdit
    },
    on: {
      "form-confirm-click": _vm.agentbaseFormConfirm,
      "form-cancel-click": _vm.agentbaseFormCancel,
      "delete-table-click": _vm.tableDeleteClickRow,
      "search-table-click": _vm.updateagentbaseDataRow
    }
  }), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    model: {
      value: (_vm.custVisible),
      callback: function($$v) {
        _vm.custVisible = $$v
      },
      expression: "custVisible"
    }
  }, [_c('span', [_vm._v("确认删除该条记录 ？删除后无法恢复")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.custVisible = false, this.delId = ''
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.tableDeleteClick
    }
  }, [_vm._v("确 定")])], 1)]), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    model: {
      value: (_vm.isGetEntity),
      callback: function($$v) {
        _vm.isGetEntity = $$v
      },
      expression: "isGetEntity"
    }
  }, [_c('span', [_vm._v("输入客户已经存在，请确认是否带出并自动填入")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.isGetEntity = false, this.delId = ''
      }
    }
  }, [_vm._v("不 带")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.fillInDate
    }
  }, [_vm._v("带 出")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(75),
  /* template */
  __webpack_require__(148),
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

/***/ 75:
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


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['pkCustomerVal', 'credit_grant', 'editable'],
  data() {

    let oThis = this;
    let validator = function (rule, value, callback) {};
    //校验
    let validatecustomer = function (rule, value, callback) {
      debugger;
      //证件号码唯一校验
      if (rule.field === "1111") {
        if (value === "") {
          callback(new Error("证件号不能为空"));
        } else {
          let datam = {
            identity_no: value,
            pk_customer: oThis.pk_customer
          };
          oThis.$http({
            url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/customer/checkOnlyOne",
            headers: { "Content-Type": "application/json" },
            method: "post",
            data: JSON.parse(JSON.stringify(datam))
          }).then(res => {

            if (res.data.success === true) {
              callback();
            } else {
              callback(new Error(res.data.error.errorMessage));
            }
          }).catch(() => {
            callback(new Error("后台服务有误，请联系管理员！"));
          });
        }
      }
      //代理商名称
      if (rule.field === "cust_name") {
        if (value === '') {
          callback(new Error('代理商名称不能为空'));
        } else {
          oThis.agentByCustName(value);
          callback();
        }
      } else if (rule.field === 'org_codecertificate') {}
    };
    return {
      //显示的标题
      title: '',
      agentbasefunnode: 'BT004',
      agentbasenexuskey: 'agentbaseinfo',
      scrollDom: "ifbpScrollDom",
      pk_customer: '',
      rmoveindex: "",
      delId: "",
      custVisible: false,
      isGetEntity: false,
      fillData: '',
      //操作按钮
      templateTableFormResetFun: function ($node) {
        //获取table,此id为ui模板上面的表格Id
        let $table = this.getNodeById($node, "jkcwc96ndh8");
        //定义操作
        let operateArr = [{
          title: "查看",
          icon: "search"
        }, {
          title: "删除",
          icon: "delete"
        }];
        //获取操作按钮html片段
        let operateHtml = this.getTableOperateHtml(operateArr);
        $table.prepend(operateHtml);

        // 判断是否有所属厂商
        let $CustCorp_have_belongto = $node.find("el-select[v-model='CustCorp.have_belongto']");
        if ($CustCorp_have_belongto.length) {
          $CustCorp_have_belongto.attr("v-on:change", "havebelongtoFun");
        }
        // 所属厂商及所属事业部绑定属性
        let $manufacturer = $node.find("el-ref[field='manufacturer'], el-select[v-model='CustCorp.hava_busi_division']");
        $manufacturer.attr('v-bind:disabled', 'belongToIsDisabled');

        // 判断是否有三证或者一证  
        let $CustCorp_three_certifcates = $node.find("el-select[v-model='CustCorp.three_certifcates']");
        if ($CustCorp_three_certifcates.length) {
          $CustCorp_three_certifcates.attr("v-on:change", "threeCertifcatesFun");
        }
        debugger;
        // 三证属性绑定
        let $threeCertifcates = $node.find("el-input[v-model='CustCorp.org_codecertificate'], el-input[v-model='CustCorp.license_no'],el-input[v-model='CustCorp.tax_registercode']");
        $threeCertifcates.attr('v-bind:disabled', 'threeCertifcates');
        // 一证属性绑定
        let $oneCertifcates = $node.find("el-input[v-model='CustCorp.society_credit']");
        $oneCertifcates.attr('v-bind:disabled', 'oneCertifcates');

        return $node[0].outerHTML;
      },
      //代理商基本信息修改
      //级联参照
      // corpResetFun: function($node) {
      //   var $refNode1 = this.getNodeById($node, 'w85l2pcqcf');  //开户行省
      //    var $refNode2 = this.getNodeById($node, 'gu0cc609z7q');
      //     var $refNode3 = this.getNodeById($node, 'vijgevbe1li');


      //   if($refNode1.length) {
      //     $refNode1.attr("v-on:trigger", "handleRefChange1"); 
      //   }
      //   if($refNode2.length) {
      //     $refNode2.attr("v-on:trigger", "handleRefChange2"); 
      //   }
      //   if($refNode3.length) {
      //     $refNode3.attr("v-on:trigger", "handleRefChange3"); 
      //   }

      // },
      formReSetMethods: {
        // 三证或一证
        threeCertifcatesFun(data) {
          if (data && data !== '') {
            debugger;
            if (data == 'Y') {
              this.threeCertifcates = false;
              this.oneCertifcates = true;
            } else if (data == 'N') {
              this.oneCertifcates = false;
              this.threeCertifcates = true;
            } else {
              this.oneCertifcates = true;
              this.threeCertifcates = true;
            }
          }
        },
        // 是否有厂商
        havebelongtoFun(data) {
          if (data && data !== '') {
            if (data == "YES") {
              this.belongToIsDisabled = false;
            } else {
              this.belongToIsDisabled = true;
            }
          }
        }
      },
      t_Methods: {
        handleRefChange1: function (type, data) {
          if (type === 'change') {
            var innerCode = data.value[0].refcode;
            oThis.$refs.baseTemplateRef1.comp.$refs.h_ref.changeQueryParams(innerCode);
          }
        },
        handleRefChange2: function (type, data) {
          if (type === 'change') {
            var innerCode = data.value[0].refcode;
            oThis.$refs.baseTemplateRef1.comp.$refs.m_ref.changeQueryParams(innerCode);
          }
        },
        handleRefChange3: function (type, data) {
          if (type === 'change') {
            var innerCode = data.value[0].refcode;
            oThis.$refs.baseTemplateRef1.comp.$refs.s_ref.changeQueryParams(innerCode);
          }
        }
      },

      customerData: {
        customer: {},
        belongToIsDisabled: true, //所属厂商的disabled熟悉设置
        threeCertifcates: true, //判断是否有三证
        oneCertifcates: true, //判断是一证
        rules: {
          cust_name: [{ validator: validatecustomer, trigger: "blur" }], //代理商名称校验
          org_codecertificate: [{ validator: validatecustomer, trigger: "blur" }],
          cusotmer_class: []
        }
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
    },
    editable(val) {
      this.agentEdit = val;
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
      this.pk_customer = this.pkCustomerVal;
      //请求企业客户基本信息详情
      if (this.pk_customer === undefined || this.pk_customer === '') {
        this.pk_customer = '';
        this.agentEdit = true;
        // this.agentRequest();
        debugger;
        this.$refs.agentbaseTemplateRef.getTableComp().closeExpandRow();
        this.$refs.agentbaseTemplateRef.formShow = true;
        return;
      }
      if (this.credit_grant == "creditgrant") {
        if (this.pk_customer != "") {
          // this.requestCustBaseInfo();
          this.agentEdit = false;
          this.requestByPk();
        }
      }
    },
    //后台请求
    agentRequest() {
      let url;
      let baseUrl = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */];
      url = baseUrl + 'cust/corp/pageAgent';
      let data = {
        "orderList": [{
          "direction": "desc",
          "property": "ts"
        }],
        "pageNum": 0,
        "pageSize": 200,
        "searchParams": {
          "searchMap": {
            "creator": "102440"
          }
        }
      };
      this.$http({
        url: url,
        headers: { 'Content-Type': 'application/json' },
        method: "post",
        data: data,
        dataType: "json"
      }).then(res => {
        //UI模板表格名称
        let originalValue = res.data.data.content;
        this.$refs['agentbaseTemplateRef'].setData("CustCorp_t", JSON.parse(JSON.stringify(originalValue)));
        this.totalElements = res.data.data.totalElements; // 总条数
        this.size = res.data.data.size; // 每页的条数
      }).catch(e => {
        this.$message({
          message: "信息获取失败",
          type: "error"
        });
      });
    },
    // 客户回写
    agentByCustName(name) {
      debugger;
      let nameVal = name;
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'cust/corp/getEntityByCustName',
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        data: nameVal,
        dataType: 'json'
      }).then(res => {
        let originalValue = res.data.data;
        if (res.data.success == true && originalValue != null) {
          this.isGetEntity = true;
          this.fillData = originalValue; //给回写的数据赋值
        }
        this.agentEdit = true;
      }).catch(e => {
        console.log(e);
        this.$message({
          message: '信息获取失败',
          type: 'error'
        });
      });
    },
    // 带出后填入数据
    fillInDate() {
      let originalValue = this.fillData;
      this.$refs.agentbaseTemplateRef.setData('CustCorp', JSON.parse(JSON.stringify(originalValue)));
      let pk_customer = originalValue.pk_customer;
      this.$emit('change-agent-base', pk_customer);
      this.isGetEntity = false;
    },

    // 通过pk获取对象
    requestByPk() {
      let url;
      let baseUrl = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */];
      url = baseUrl + "cust/corp/getByPkCustomer";
      let data = this.pk_customer;
      this.$http({
        url: url,
        headers: { 'Content-Type': 'application/json' },
        method: "post",
        data: data,
        dataType: "json"
      }).then(res => {
        let originalValue = res.data.data;
        this.$refs.agentbaseTemplateRef.setData("CustCorp_t", JSON.parse(JSON.stringify([originalValue])));
        this.$refs.agentbaseTemplateRef.comp.formShow = false;
      }).catch(e => {
        this.$message({
          message: "代理商基本信息详情获取失败",
          type: "error"
        });
      });
    },

    // 弹出删除提示框
    tableDeleteClickRow: function (scope) {
      this.delId = scope.row.pk_cust_corp;
      // this.agentRequest();
      this.custVisible = true;
    },

    //确认后调用删除
    tableDeleteClick: function (scope) {
      debugger;
      // let delId = scope.row.pk_cust_customer;
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/corp/deleteCustcpAndCust",
        headers: { 'Content-Type': 'application/json' },
        method: "post",
        dataType: "json",
        data: this.delId
      }).then(res => {
        if (res.data.success === true) {
          this.$message({
            message: "删除成功",
            type: "success"
          });
          this.custVisible = false;
        } else {
          debugger;
          this.$message({
            message: res.data.error.errorMessage,
            type: "error"
          });
        }
        this.agentRequest();
      }).catch(e => {
        debugger;
        this.$message({
          message: "信息删除失败！",
          type: "error"
        });
      });
    },
    //代理商form取消按钮
    agentbaseFormCancel: function (type) {
      this.rmoveindex = "";
      //关闭表单或者是下拉显示行
      if (type === "form") {
        this.$refs.agentbaseTemplateRef.comp.formShow = false;
      } else {
        this.$refs.agentbaseTemplateRef.getTableComp().closeExpandRow();
      }
    },
    //代理商主表保存
    agentbaseFormConfirm: function () {
      debugger;
      //获取当前数据
      let data = this.$refs.agentbaseTemplateRef.comp.customer;
      let data1 = this.$refs.agentbaseTemplateRef.comp.CustCorp;
      let jsonCustomer = JSON.parse(JSON.stringify(data));
      //设置为企业客户
      jsonCustomer.customer_type = 'CORP';
      //客户设置为代理商
      jsonCustomer.cusotmer_class = 'yls_dev100000000ffv';
      let jsonCustCorpObj = JSON.parse(JSON.stringify(data1));
      jsonCustCorpObj.cust_type = 'CORP';
      jsonCustomer.customer_name = jsonCustCorpObj.cust_name;
      // let a=[data1];
      let a = [jsonCustCorpObj];
      data = jsonCustomer;
      data.cust_corp_list = a;
      console.log(data);
      let baseUrl = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */];
      //保存校验
      debugger;
      this.$refs.agentbaseTemplateRef.comp.$refs["CustCorp-form"].validate(valid => {
        if (valid) {
          this.$http({
            url: baseUrl + "cust/customer/orgAnddept",
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
              this.pk_customer = this.originalValue.pk_cust_customer;
              this.$emit('change-agent-base', this.pk_customer);
              this.agentEdit = false;
              this.agentRequest();
              debugger;
              this.$parent.$parent.$parent.$refs.operationTable.pk_customer = this.pk_customer;
              this.$parent.$parent.$parent.$refs.operationTable.reqOptByPkCustomer();
              //隐藏详情列表
              this.$refs.agentbaseTemplateRef.comp.formShow = false;
            } else {
              this.$message({
                message: res.data.error.errorMessage,
                type: "error"
              });
            }
          }).catch(e => {
            this.$message({
              message: "更新失败",
              type: "error"
            });
          });
        }
      });
    },

    // customerCancel() {
    //   this.agentEdit = false;
    //   // 重置value
    // },
    //代理商编辑
    updateagentbaseDataRow: function (scope) {
      //记录删除位置
      debugger;
      this.rmoveindex = scope.$index;
      this.$refs.agentbaseTemplateRef.getTableComp().expandRow(scope.row);
      this.$refs.agentbaseTemplateRef.comp.formShow = false;
      this.$refs.agentbaseTemplateRef.setData('CustCorp', scope.row);
      this.agentEdit = true;
      // 备份数据
      this.baseData = JSON.parse(JSON.stringify(scope.row));
      this.baseEditIndex = scope.$index;
    }

  }
});

/***/ })

/******/ })});;
//# sourceMappingURL=agentbaseinfo.vue.de2f95f1a3b284fca43e.en.js.map