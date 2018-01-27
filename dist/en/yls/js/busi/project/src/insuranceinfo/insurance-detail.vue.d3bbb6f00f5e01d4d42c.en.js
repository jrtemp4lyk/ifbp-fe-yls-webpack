define("yls//busi/project/src/insuranceinfo/insurance-detail.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 772);
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

/***/ 469:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import test from "../detail-mock.js";
// import ElTemplate from "../../../template.vue";
// import ifbpPanelGroup from "../../../ifbp-panel-group.vue";
/* harmony default export */ __webpack_exports__["default"] = ({
  // components: {
  //   "ifbp-template": ElTemplate,
  //   "ifbp-panel-group": ifbpPanelGroup
  // },
  data() {
    var oThis = this;
    return {
      scrollDom: document.getElementsByClassName("view")[0],
      pk_insurance: '',
      linkmanDelVisible: false,
      custbankDelVisible: false,
      custCountryTaxesDelVisible: false,

      //customer
      baseIcons: [{
        icon: "edit",
        click: function () {
          oThis.insuranceEdit = !oThis.insuranceEdit;
        }
      }],
      insurancePk: "c3baaa5d-eb66-4e15-97a5-8d4bbd9ae766",
      insuranceData: {
        customer: {},
        rules: {
          name: [{ required: true, message: "客户名称不能为空", trigger: "blur" }],
          pk_custclass: [{ required: true, message: "客户基本分类不能为空", trigger: "blur" }]
        }
      },
      insuranceEdit: false,

      // bank
      bankIcons: [{
        icon: "plus",
        click: function () {
          var uitemplateComp = oThis.$refs.custbankRef.comp;
          var table = uitemplateComp.$refs['bankaccount_table'];
          table.closeExpandRow();
          uitemplateComp.bankaccount = {};
          uitemplateComp.formShow = true;
        }
      }],
      custbankPk: "000111100000001Z8DZS",
      custbankData: {
        params: {
          pk_banktype: ""
        },
        rules: {
          accnum: [{ required: true, message: "账号不能为空", trigger: "blur" }],
          accname: [{ required: true, message: "户名不能为空", trigger: "blur" }],
          pk_bankdoc: [{ required: true, message: "开户银行不能为空", trigger: "blur" }],
          pk_banktype: [{ required: true, message: "银行类型不能为空", trigger: "blur" }],
          accountproperty: [{ required: true, message: "账户性质不能为空", trigger: "blur" }]
        }
      },
      custbankTplMethods: {
        // form的保存操作
        custbankFormConfirm: function () {
          this.$refs['bankaccount_form'].validate(valid => {
            if (valid) {
              var data = this.bankaccount;
            }
            console.log(data);
          });
        },
        // form的取消操作
        custbankFormCancel: function () {
          this.$refs['bankaccount_table'].closeExpandRow();
          this.formShow = false;
        },
        custbankEditTableRow: function (scope) {
          var row = scope.row;
          this.$refs['bankaccount_table'].expandRow(row);
          this.bankaccount = row;
          this.formShow = false;
        },
        custbankDeleteTableRow: function (scope) {
          console.log("delete", scope.row);
          this.pageComp.custbankDelVisible = true;
          this.pageComp.custbankDel = scope.row;
          //            this.pk_custbank = scope.row.pk_custbank;
        },
        enableTableRow: function (scope) {
          alert("enable");
          console.log("enable", scope.row);
          this.pageComp.custbankDelVisible = true;
          this.pk_custbank = scope.row.pk_custbank;
        }
      },
      custbankResetFun: function ($node) {
        var $table = this.getNodeBy_Id($node, "b327bj95th6");
        $table.attr(':show-header', 'false');
        var operateArr = [{
          title: "编辑",
          click: "custbankEditTableRow",
          icon: "edit"
        }, {
          title: "启用",
          click: "enableTableRow",
          icon: "pt-tuichu"
        }, {
          title: "删除",
          click: "custbankDeleteTableRow",
          icon: "delete"
        }];
        var operateHtml = this.getTableOperateHtml(operateArr);
        $table.append(operateHtml);

        var $accnum = this.getNodeBy_Id($node, "krvqs7xlxfs"); //账号 
        var $accname = this.getNodeBy_Id($node, "83oyd6v35wm"); //户名
        var $pkBankdoc = this.getNodeBy_Id($node, "r69m5jd8zul"); //开户银行
        var $pkBanktype = this.getNodeBy_Id($node, "bo4dg59b0v"); //银行类别
        var $contactpsn = this.getNodeBy_Id($node, "vpthxzig1da"); //联系人
        var $tel = this.getNodeBy_Id($node, "k3bvpmgm9m"); //联系电话

        $accnum.html('<template scope="scope"><div>{{scope.row.bankAccbas.accnum?scope.row.bankAccbas.accnum:""}}</div></template>');
        $accname.html('<template scope="scope"><div>{{scope.row.bankAccbas.accname?scope.row.bankAccbas.accname:""}}</div></template>');
        $pkBankdoc.html('<template scope="scope"><div>{{scope.row.bankAccbas.beanMap?' + "scope.row.bankAccbas.beanMap.pk_bankdoc_ref?scope.row.bankAccbas.beanMap." + 'pk_bankdoc_ref[scope.row.bankAccbas.pk_bankdoc].name:"":""}}</div></template>');
        $pkBanktype.html('<template scope="scope"><div>{{scope.row.bankAccbas.beanMap?' + "scope.row.bankAccbas.beanMap.pk_banktype_ref?scope.row.bankAccbas.beanMap." + 'pk_banktype_ref[scope.row.bankAccbas.pk_banktype].name:"":""}}</div></template>');

        $contactpsn.html('<template scope="scope"><div>{{scope.row.bankAccbas.contactpsn?scope.row.bankAccbas.contactpsn:""}}</div></template>');
        $tel.html('<template scope="scope"><div>{{scope.row.bankAccbas.tel?scope.row.bankAccbas.tel:""}}</div></template>');
        return $node[0].outerHTML;
      },

      //联系人
      linkmanIcons: [{
        icon: "plus",
        click: function () {
          var uitemplateComp = oThis.$refs.custlinkmanRef.comp;
          var table = uitemplateComp.$refs['linkman_table'];
          table.closeExpandRow();
          uitemplateComp.linkman = {};
          uitemplateComp.formShow = true;
        }
      }],
      custlinkmanPk: "34cc4979-181e-44dc-9cd7-79ab1b51738d", //linkman
      custlinkmanData: {
        rules: {
          name: [{ required: true, message: "请输入联系人名称", trigger: "blur" }]
        }
      },
      linkmanResetFun: function ($node) {
        var $table = this.getNodeBy_Id($node, "zxhlnr94qvd");
        $table.attr(':show-header', 'false');
        var operateArr = [{
          title: "编辑",
          click: "custlinkmanEditTableRow",
          icon: "edit"
        }, {
          title: "删除",
          click: "custlinkmanDeleteTableRow",
          icon: "delete"
        }];
        var operateHtml = this.getTableOperateHtml(operateArr);
        $table.append(operateHtml);

        var $sex = this.getNodeBy_Id($node, "ir66pzdxiic"); //性别
        var $isdefault = this.getNodeBy_Id($node, "h81qk6u00p5"); //是否默认
        $sex.html('<template scope="scope"><div>{{scope.row.sex?(scope.row.sex===1?"男":"女"):""}}</div></template>');
        $isdefault.html('<template scope="scope"><div>{{scope.row.isdefault?(scope.row.isdefault===true?"是":""):""}}</div></template>');
        return $node[0].outerHTML;
      },
      custlinkmanTplMethods: {
        // form的保存操作
        linkmanFormConfirm: function () {
          this.$refs['linkman_form'].validate(valid => {
            if (valid) {
              var data = this.linkman;
            }
            console.log(data);
          });
        },
        // form的取消操作
        linkmanFormCancel: function () {
          this.$refs['linkman_table'].closeExpandRow();
          this.formShow = false;
        },
        // table行的编辑操作
        custlinkmanEditTableRow: function (scope) {
          var row = scope.row;
          this.$refs['linkman_table'].expandRow(row);
          this.linkman = row;
          this.formShow = false;
        },
        // table行的删除操作
        custlinkmanDeleteTableRow: function (scope) {
          console.log("delete", scope.row);
          this.pageComp.linkmanDel = scope.row;
          this.pageComp.linkmanDelVisible = true;
          this.pageComp.pk_linkman = scope.row.pk_linkman;
        }
      },

      // 税类信息
      countryTaxesIcons: [{
        icon: "plus",
        click: function () {
          var uitemplateComp = oThis.$refs.custCountryTaxesRef.comp;
          var table = uitemplateComp.$refs['bankaccount_table'];
          table.closeExpandRow();
          uitemplateComp.bankaccount = {};
          uitemplateComp.formShow = true;
        }
      }],
      custCountryTaxesPk: "7a7287cf-0833-4009-8cc5-c18cf0e2c4ce", //custaxes
      custCountryTaxesData: {
        rules: {
          pk_country: [{ required: true, message: "发货国家不能为空", trigger: "blur" }],
          pk_taxes: [{ required: true, message: "税类不能为空", trigger: "blur" }]
        }
      },
      custCountryTaxesResetFun: function ($node) {
        var $table = this.getNodeBy_Id($node, "xnl0066wpf9");
        $table.attr(':show-header', 'false');
        var operateArr = [{
          title: "编辑",
          click: "custCountryTaxesEditTableRow",
          icon: "edit"
        }, {
          title: "删除",
          click: "custCountryTaxesDeleteTableRow",
          icon: "delete"
        }];
        var operateHtml = this.getTableOperateHtml(operateArr);

        $table.append(operateHtml);

        var $pkCountry = this.getNodeBy_Id($node, "u5itmgcx7c");
        var $pkTaxes = this.getNodeBy_Id($node, "1idpzwci9up");
        $pkCountry.html('<template scope="scope"><div>{{scope.row.beanMap?' + "(scope.row.beanMap.pk_country_ref?" + 'scope.row.beanMap.pk_country_ref[scope.row.pk_country].name:""):""}}' + "</div></template>");

        $pkTaxes.html('<template scope="scope"><div>{{scope.row.beanMap?' + "(scope.row.beanMap.pk_taxes_ref?" + 'scope.row.beanMap.pk_taxes_ref[scope.row.pk_taxes].name:""):""}}' + "</div></template>");

        return $node[0].outerHTML;
      },
      custCountryTaxesTplMethods: {
        // form的保存操作
        custCountryFormConfirm: function () {
          var data = this.custaxes;
          console.log(data);
        },
        // form的取消操作
        custCountryFormCancel: function () {
          this.$refs['custaxes_table'].closeExpandRow();
          this.formShow = false;
        },
        custCountryTaxesEditTableRow: function (scope) {
          var row = scope.row;
          this.$refs['custaxes_table'].expandRow(row);
          this.custaxes = row;
          this.formShow = false;
        },
        custCountryTaxesDeleteTableRow: function (scope) {
          console.log("delete", scope.row);
          this.pageComp.custCountryTaxesDelVisible = true;
          this.pageComp.custtaxtypesDel = scope.row;
        }
      }
    };
  },
  mounted() {
    this.request();
  },
  methods: {
    /**
       *   单个地点详情
       **/
    request() {
      this.pk_insurance = this.$root.$router.currentRoute.params.id;
      //请求客户基本信息详情
      if (this.pk_insurance) {
        debugger;
        this.requestCustBaseInfo();
      }
      //        //客户银行账户列表
      this.requestCustBank();
      //        客户联系人联系人列表
      this.requestCustlinkman();
      //客户税务类别列表
      this.requestCustCountryTaxes();
    },
    //请求客户基本信息详情
    requestCustBaseInfo() {
      this.$http({
        url: "/yls-busi-web/ins/getbyid",
        headers: { 'Content-Type': 'application/json' },
        method: "post",
        data: this.pk_insurance
      }).then(res => {
        if (res.data.success === true) {
          var originalValue = res.data.data;
          console.log(this.$refs.baseTemplateRef);
          this.$refs.baseTemplateRef.setData("ProjectInsure", JSON.parse(JSON.stringify(originalValue)));
        } else {
          this.$message({
            message: res.data.msg,
            type: "error"
          });
        }
      }).catch(e => {
        console.error(e);
        this.$message({
          message: "客户基本信息详情获取失败",
          type: "error"
        });
      });
    },
    //请求客户银行账户
    requestCustBank() {
      this.$http({
        url: "/uapbd/custbank/list?pn=1&ps=10&sortColumn=auto&pk_customer=" + this.pk_customer,
        method: "get"
      }).then(res => {
        if (res.data.status === true) {
          var custbankOriginal = res.data.data;
          this.$refs.custbankRef.setData("bankaccount", JSON.parse(JSON.stringify(custbankOriginal)));
          this.$nextTick(() => {
            this.$refs.custbankRef.setData("tableShow", false);
          });
        } else {
          this.$message({
            message: res.data.msg,
            type: "error"
          });
        }
      }).catch(e => {
        console.error(e);
        this.$message({
          message: "客户联系人信息获取失败",
          type: "error"
        });
      });
    },
    //请求客户联系人
    requestCustlinkman() {
      this.$http({
        url: "/uapbd/custlinkman/list?pn=1&ps=10&sortColumn=auto&pk_customer=" + this.pk_customer,
        method: "get"
      }).then(res => {
        if (res.data.status === true) {
          var originalValue = res.data.data;
          console.log(this.$refs.custlinkmanRef);
          //             this.custlinkmanData = {
          //               linkman_t :  JSON.parse(JSON.stringify(this.originalValue))
          //             };
          this.$refs.custlinkmanRef.setData("linkman_t", JSON.parse(JSON.stringify(originalValue)));
        } else {
          this.$message({
            message: res.data.msg,
            type: "error"
          });
        }
      }).catch(e => {
        console.error(e);
        this.$message({
          message: "客户联系人信息获取失败",
          type: "error"
        });
      });
    },
    //请求客户国家税类
    requestCustCountryTaxes() {
      this.$http({
        url: "/uapbd/custcountrytaxes/list?pn=1&ps=10&sortColumn=auto&pk_customer=" + this.pk_customer,
        method: "get"
      }).then(res => {
        if (res.data.status === true) {
          var originalValue = res.data.data;
          //            this.custCountryTaxesData = {
          //              custaxes_t :  JSON.parse(JSON.stringify(this.originalValue))
          //            };
          this.$refs.custCountryTaxesRef.setData("custaxes_t", JSON.parse(JSON.stringify(originalValue)));
        } else {
          this.$message({
            message: res.data.msg,
            type: "error"
          });
        }
      }).catch(e => {
        console.error(e);
        this.$message({
          message: "客户国家税类信息获取失败",
          type: "error"
        });
      });
    },

    linkmanDeleteClick() {
      var delData = {};
      delData.linkman = this.linkmanDel;
      delData.pk_customer = this.pk_customer;
      this.$http({
        url: "/uapbd/custlinkman/delete",
        method: "post",
        data: delData
      }).then(res => {
        if (res.data.status === true) {
          this.$message({
            message: res.data.msg,
            type: "success"
          });
          this.linkmanDelVisible = false;
          this.requestCustlinkman();
        } else {
          this.$message({
            message: res.data.msg,
            type: "error"
          });
        }
      }).catch(() => {
        this.$message({
          message: "删除接口调用失败",
          type: "error"
        });
      });
    },
    custbankDeleteClick() {
      var delData = this.custbankDel;
      var ts = this.$refs.baseTemplateRef.comp.customer.ts;
      delData.ts = ts;
      delData.pk_customer = this.pk_customer;
      this.$http({
        url: "/uapbd/custbank/delete",
        method: "post",
        data: delData
      }).then(res => {
        if (res.data.status === true) {
          this.$message({
            message: res.data.msg,
            type: "success"
          });
          this.custbankDelVisible = false;
          this.requestCustBank();
        } else {
          this.$message({
            message: res.data.msg,
            type: "error"
          });
        }
      }).catch(() => {
        this.$message({
          message: "删除接口调用失败",
          type: "error"
        });
      });
    },
    custCountryTaxesDeleteClick() {
      this.custtaxtypesDel.pk_customer = this.pk_customer;
      this.$http({
        url: "/uapbd/custcountrytaxes/delete",
        method: "post",
        data: this.custtaxtypesDel
      }).then(res => {
        if (res.data.status === true) {
          this.$message({
            message: res.data.msg,
            type: "success"
          });
          this.custCountryTaxesDelVisible = false;
          this.requestCustCountryTaxes();
        } else {
          this.$message({
            message: res.data.msg,
            type: "error"
          });
        }
      }).catch(() => {
        this.$message({
          message: "删除接口调用失败",
          type: "error"
        });
      });
    },
    customerCancel() {
      this.insuranceEdit = false;
      // 重置value
    },
    customerConfirm() {
      var url;
      var data = this.$refs.baseTemplateRef.comp.ProjectInsure;
      var baseUrl = '/yls-busi-web/';
      if (this.pk_insurance) {
        url = baseUrl + 'ins/update';
      } else {
        url = baseUrl + 'ins/create';
      }
      this.$refs.baseTemplateRef.comp.$refs["projectInsure-form"].validate(valid => {
        if (valid) {
          this.$http({
            url: url,
            headers: { 'Content-Type': 'application/json' },
            method: "post",
            data: JSON.parse(JSON.stringify(data))
          }).then(res => {
            if (res.data.status === true) {
              this.$message({
                message: res.data.msg,
                type: "success"
              });
              this.originalValue = res.data.data;
              console.log(this.$refs.baseTemplateRef);
              this.$refs.baseTemplateRef.setData("ProjectInsure", JSON.parse(JSON.stringify(this.originalValue)));
              //            this.originalValue = JSON.parse(JSON.stringify(this.currentValue));
              this.insuranceEdit = false;
            } else {
              this.$message({
                message: res.data.msg,
                type: "error"
              });
            }
          }).catch(() => {
            this.$message({
              message: "地点更新失败",
              type: "error"
            });
          });
        }
      });
    }
  }
});

/***/ }),

/***/ 566:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 666:
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
  }, [_c('ifbp-panel', {
    attrs: {
      "id": "basePanel",
      "title": "基本信息",
      "icons": _vm.baseIcons
    }
  }, [_c('ifbp-template', {
    ref: "baseTemplateRef",
    attrs: {
      "tplId": "baseTemplate",
      "pkTemp": _vm.insurancePk,
      "show-type": "form",
      "tplData": _vm.insuranceData,
      "editable": _vm.insuranceEdit
    }
  }), _vm._v(" "), (_vm.insuranceEdit) ? _c('div', {
    staticClass: "form-button-div"
  }, [_c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "default"
    },
    on: {
      "click": _vm.customerCancel
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.customerConfirm
    }
  }, [_vm._v("保存")])], 1) : _vm._e()], 1), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "bankPanel",
      "title": "银行账户信息",
      "icons": _vm.bankIcons
    }
  }, [_c('ifbp-template', {
    ref: "custbankRef",
    attrs: {
      "tplId": "bankTemplate",
      "pkTemp": _vm.custbankPk,
      "tplData": _vm.custbankData,
      "tplResetFun": _vm.custbankResetFun,
      "tplMethods": _vm.custbankTplMethods,
      "form-confirm-fun": "custbankFormConfirm",
      "form-cancel-fun": "custbankFormCancel",
      "show-type": "table-form"
    }
  })], 1), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "linkmanPanel",
      "title": "联系人信息",
      "icons": _vm.linkmanIcons
    }
  }, [_c('ifbp-template', {
    ref: "custlinkmanRef",
    attrs: {
      "tplId": "linkmanTemplate",
      "pkTemp": _vm.custlinkmanPk,
      "tplData": _vm.custlinkmanData,
      "tplResetFun": _vm.linkmanResetFun,
      "tplMethods": _vm.custlinkmanTplMethods,
      "form-confirm-fun": "linkmanFormConfirm",
      "form-cancel-fun": "linkmanFormCancel",
      "show-type": "table-form",
      "page-comp": this
    }
  })], 1), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "countryTaxesPanel",
      "title": "税类信息",
      "icons": _vm.countryTaxesIcons
    }
  }, [_c('ifbp-template', {
    ref: "custCountryTaxesRef",
    attrs: {
      "tplId": "countryTaxesTemplate",
      "pkTemp": _vm.custCountryTaxesPk,
      "tplData": _vm.custCountryTaxesData,
      "tplResetFun": _vm.custCountryTaxesResetFun,
      "tplMethods": _vm.custCountryTaxesTplMethods,
      "form-confirm-fun": "custCountryFormConfirm",
      "form-cancel-fun": "custCountryFormCancel",
      "show-type": "table-form",
      "page-comp": this
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    model: {
      value: (_vm.custbankDelVisible),
      callback: function($$v) {
        _vm.custbankDelVisible = $$v
      },
      expression: "custbankDelVisible"
    }
  }, [_c('span', [_vm._v("确认删除该条记录？删除后无法恢复。")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.custbankDelVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.custbankDeleteClick
    }
  }, [_vm._v("确 定")])], 1)]), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    model: {
      value: (_vm.linkmanDelVisible),
      callback: function($$v) {
        _vm.linkmanDelVisible = $$v
      },
      expression: "linkmanDelVisible"
    }
  }, [_c('span', [_vm._v("确认删除该条记录？删除后无法恢复。")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.linkmanDelVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.linkmanDeleteClick
    }
  }, [_vm._v("确 定")])], 1)]), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    model: {
      value: (_vm.custCountryTaxesDelVisible),
      callback: function($$v) {
        _vm.custCountryTaxesDelVisible = $$v
      },
      expression: "custCountryTaxesDelVisible"
    }
  }, [_c('span', [_vm._v("确认删除该条记录 ？删除后无法恢复。")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.custCountryTaxesDelVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.custCountryTaxesDeleteClick
    }
  }, [_vm._v("确 定")])], 1)])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title-container"
  }, [_c('h2', {
    staticClass: "name"
  }, [_vm._v("保险信息设置")])])
}]}

/***/ }),

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(566)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(469),
  /* template */
  __webpack_require__(666),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

/******/ })});;
//# sourceMappingURL=insurance-detail.vue.d3bbb6f00f5e01d4d42c.en.js.map