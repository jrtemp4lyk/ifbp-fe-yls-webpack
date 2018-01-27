define("yls//busi/customer/src/Customer-InfoDetail.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 712);
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

/***/ 409:
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



/* harmony default export */ __webpack_exports__["default"] = ({

  data() {
    let oThis = this;
    return {
      scrollDom: document.getElementsByClassName("view")[0],
      pk_customer: '',
      linkmanDelVisible: false,
      custbankDelVisible: false,
      custCountryTaxesDelVisible: false,

      //customer
      baseIcons: [{
        icon: "edit",
        click: function () {
          oThis.customerEdit = !oThis.customerEdit;
        }
      }],
      customerPk: "e121f450-50c2-46ba-8b04-1c95a04da420",
      customerData: {
        customer: {},
        rules: {
          name: [{ required: true, message: "客户名称不能为空", trigger: "blur" }],
          pk_custclass: [{ required: true, message: "客户基本分类不能为空", trigger: "blur" }]
        }
      },
      customerEdit: false,

      // bank
      bankIcons: [{
        icon: "plus",
        click: function () {
          let uitemplateComp = oThis.$refs.custbankRef.comp;
          let table = uitemplateComp.$refs['bankaccount_table'];
          table.closeExpandRow();
          uitemplateComp.bankaccount = {};
          uitemplateComp.formShow = true;
        }
      }],
      custbankPk: "",
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
              let data = this.bankaccount;
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
          let row = scope.row;
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
        let $table = this.getNodeById($node, "b327bj95th6");
        $table.attr(':show-header', 'false');
        let operateArr = [{
          title: "编辑",

          icon: "edit"
        }, {
          title: "启用",

          icon: "pt-tuichu"
        }, {
          title: "删除",

          icon: "delete"
        }];
        let operateHtml = this.getTableOperateHtml(operateArr);
        $table.append(operateHtml);

        let $accnum = this.getNodeById($node, "krvqs7xlxfs"); //账号 
        let $accname = this.getNodeById($node, "83oyd6v35wm"); //户名
        let $pkBankdoc = this.getNodeById($node, "r69m5jd8zul"); //开户银行
        let $pkBanktype = this.getNodeById($node, "bo4dg59b0v"); //银行类别
        let $contactpsn = this.getNodeById($node, "0mhkj42m1w5"); //联系人
        let $tel = this.getNodeById($node, "k3bvpmgm9m"); //联系电话

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
          let uitemplateComp = oThis.$refs.custlinkmanRef.comp;
          let table = uitemplateComp.$refs['OtherContact_t_ref'];
          table.closeExpandRow();
          uitemplateComp.linkman = {};
          uitemplateComp.formShow = true;
        }
      }],
      custlinkmanPk: "946c2308-f17d-4d80-bc5b-3f3f406df306", //linkman
      custlinkmanData: {
        rules: {
          name: [{ required: true, message: "请输入联系人名称", trigger: "blur" }]
        }
      },
      linkmanResetFun: function ($node) {

        let $table = this.getNodeById($node, "bimh5ti3qnq");
        $table.attr(':show-header', 'false');
        let operateArr = [{
          title: "编辑",

          icon: "edit"
        }, {
          title: "删除",

          icon: "delete"
        }];
        let operateHtml = this.getTableOperateHtml(operateArr);
        $table.append(operateHtml);

        // let $sex = this.getNodeById($node, "ir66pzdxiic"); //性别
        // let $isdefault = this.getNodeById($node, "h81qk6u00p5"); //是否默认
        // $sex.html(
        //   '<template scope="scope"><div>{{scope.row.sex?(scope.row.sex===1?"男":"女"):""}}</div></template>'
        // );
        // $isdefault.html(
        //   '<template scope="scope"><div>{{scope.row.isdefault?(scope.row.isdefault===true?"是":""):""}}</div></template>'
        // );
        return $node[0].outerHTML;
      },
      custlinkmanTplMethods: {
        // form的保存操作

        // form的取消操作

      },

      // 税类信息
      countryTaxesIcons: [{
        icon: "plus",
        click: function () {
          let uitemplateComp = oThis.$refs.custCountryTaxesRef.comp;
          let table = uitemplateComp.$refs['Shareholder_t_ref'];
          table.closeExpandRow();
          uitemplateComp.bankaccount = {};
          uitemplateComp.formShow = true;
        }
      }],
      custCountryTaxesPk: "4206377c-53b0-497d-a5b6-c6f98fa6631d", //custaxes
      custCountryTaxesData: {
        rules: {
          pk_country: [{ required: true, message: "发货国家不能为空", trigger: "blur" }],
          pk_taxes: [{ required: true, message: "税类不能为空", trigger: "blur" }]
        }
      },
      custCountryTaxesResetFun: function ($node) {
        let $table = this.getNodeById($node, "uob2e9t4f2");
        $table.attr(':show-header', 'false');
        let operateArr = [{
          title: "编辑",

          icon: "edit"
        }, {
          title: "删除",

          icon: "delete"
        }];
        let operateHtml = this.getTableOperateHtml(operateArr);

        $table.append(operateHtml);

        let $pkCountry = this.getNodeById($node, "u5itmgcx7c");
        let $pkTaxes = this.getNodeById($node, "1idpzwci9up");
        $pkCountry.html('<template scope="scope"><div>{{scope.row.beanMap?' + "(scope.row.beanMap.pk_country_ref?" + 'scope.row.beanMap.pk_country_ref[scope.row.pk_country].name:""):""}}' + "</div></template>");

        $pkTaxes.html('<template scope="scope"><div>{{scope.row.beanMap?' + "(scope.row.beanMap.pk_taxes_ref?" + 'scope.row.beanMap.pk_taxes_ref[scope.row.pk_taxes].name:""):""}}' + "</div></template>");

        return $node[0].outerHTML;
      },
      custCountryTaxesTplMethods: {
        // form的保存操作

      }
    };
  },
  mounted() {

    this.request();
  },
  methods: {
    linkmanFormConfirm: function () {

      let data = this.$refs.custlinkmanRef.comp.OtherContact;
      data.pk_customer = this.pk_customer;
      //data.append("', 'pk_customer': 'OID10000000f04h'");

      let baseUrl = '/yls-busi-web/';
      let jsonStr = JSON.stringify(data);

      this.$refs.custlinkmanRef.comp.$refs["OtherContact_ref"].validate(valid => {
        if (valid) {
          this.$http({
            url: baseUrl + 'cust/otherContact/updateORinsert',
            headers: { 'Content-Type': 'application/json' },
            method: "post",
            data: JSON.parse(JSON.stringify(data))
          }).then(res => {
            if (res.data.success === true) {
              this.$message({
                message: res.data.msg,
                type: "success"
              });
              this.originalValue = res.data.data;
              console.log(this.$refs.custlinkmanRef);
              this.$refs.custlinkmanRef.setData("OtherContact", JSON.parse(JSON.stringify(this.originalValue)));
              //            this.originalValue = JSON.parse(JSON.stringify(this.currentValue));
              this.customerEdit = false;
            } else {
              this.$message({
                message: res.data.msg,
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
    custCountryFormConfirm: function () {
      let data = this.custaxes;
      console.log(data);
    },
    // form的取消操作
    custCountryFormCancel: function (type) {
      if (type === 'form') {
        this.$refs['custCountryTaxesRef'].comp.formShow = false;
      } else {
        this.$refs['custCountryTaxesRef'].getTableComp().closeExpandRow();
      }
    },
    custCountryTaxesEditTableRow: function (scope) {
      let row = scope.row;
      this.$refs['custaxes_table'].expandRow(row);
      this.custaxes = row;
      this.formShow = false;
    },
    custCountryTaxesDeleteTableRow: function (scope) {
      console.log("delete", scope.row);
      this.pageComp.custCountryTaxesDelVisible = true;
      this.pageComp.custtaxtypesDel = scope.row;
    },

    linkmanFormCancel: function (type) {
      if (type === 'form') {
        this.$refs['custlinkmanRef'].comp.formShow = false;
      } else {
        this.$refs['custlinkmanRef'].getTableComp().closeExpandRow();
      }
    },
    // table行的编辑操作
    custlinkmanEditTableRow: function (scope) {

      let row = scope.row;
      this.$refs['custlinkmanRef'].expandRow(row);
      this.linkman = row;
      this.formShow = false;
    },
    // table行的删除操作
    custlinkmanDeleteTableRow: function (scope) {
      console.log("delete", scope.row);
      this.pageComp.linkmanDel = scope.row;
      this.pageComp.linkmanDelVisible = true;
      this.pageComp.pk_linkman = scope.row.pk_linkman;
    },
    /**
       *   单个地点详情
       **/
    request() {
      this.pk_customer = this.$root.$router.currentRoute.params.id;
      //请求客户基本信息详情

      let method = this.$root.$router.currentRoute.name;
      if (method != "customer_baseinfo-save") {

        if (this.pk_customer != "") {
          this.requestCustBaseInfo();
          this.requestCustlinkman();
          this.requestCustCountryTaxes();
        }
      }
      //        //客户银行账户列表
      // this.requestCustBank();
      //        客户联系人联系人列表

      //客户税务类别列表
    },
    //请求客户基本信息详情
    requestCustBaseInfo() {
      this.$http({
        url: "/yls-busi-web/cust/customer/getById",
        headers: { 'Content-Type': 'application/json' },
        method: "post",
        data: this.pk_customer
      }).then(res => {
        let originalValue = res.data.data;
        console.log(this.$refs.baseTemplateRef);
        this.$refs.baseTemplateRef.setData("customer", JSON.parse(JSON.stringify(originalValue)));
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
        if (res.data.success === true) {
          let custbankOriginal = res.data.data;
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
      let url;
      let baseUrl = '/yls-busi-web/';
      url = baseUrl + 'cust/otherContact/page';
      let data = {
        "pageNum": 0,
        "pageSize": 0,
        "searchParams": {
          "searchMap": {
            "pk_customer": this.pk_customer
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
        this.originalValue = res.data.data.content;
        this.$refs["custlinkmanRef"].setData("OtherContact_t", JSON.parse(JSON.stringify(this.originalValue)));
        // this.totalElements = res.data.data.totalElements; // 总条数
        // this.size = res.data.data.size; // 每页的条数
      }).catch(() => {
        this.$message({
          message: "信息获取失败",
          type: "error"
        });
      });
    },
    //请求股东信息
    requestCustCountryTaxes() {
      let url;
      let baseUrl = '/yls-busi-web/';
      url = baseUrl + 'cust/related_company/page';
      let data = {
        "pageNum": 0,
        "pageSize": 0,
        "searchParams": {
          "searchMap": {
            "pk_customer": this.pk_customer
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
        this.originalValue = res.data.data.content;
        this.$refs["custCountryTaxesRef"].setData("Shareholder_t", JSON.parse(JSON.stringify(this.originalValue)));
        // this.totalElements = res.data.data.totalElements; // 总条数
        // this.size = res.data.data.size; // 每页的条数
      }).catch(() => {
        this.$message({
          message: "信息获取失败",
          type: "error"
        });
      });
    },

    linkmanDeleteClick() {
      let delData = {};
      delData.linkman = this.linkmanDel;
      delData.pk_customer = this.pk_customer;
      this.$http({
        url: "/uapbd/custlinkman/delete",
        method: "post",
        data: delData
      }).then(res => {
        if (res.data.success === true) {
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
      let delData = this.custbankDel;
      let ts = this.$refs.baseTemplateRef.comp.customer.ts;
      delData.ts = ts;
      delData.pk_customer = this.pk_customer;
      this.$http({
        url: "/uapbd/custbank/delete",
        method: "post",
        data: delData
      }).then(res => {
        if (res.data.success === true) {
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
        if (res.data.success === true) {
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
      this.customerEdit = false;
      // 重置value
    },
    customerConfirm() {
      let data = this.$refs.baseTemplateRef.comp.customer;
      console.log(data);
      let baseUrl = '/yls-busi-web/';
      let jsonStr = JSON.stringify(data);

      this.$refs.baseTemplateRef.comp.$refs["customer_ref"].validate(valid => {
        if (valid) {
          this.$http({
            url: baseUrl + 'cust/customer/updateORinsert',
            headers: { 'Content-Type': 'application/json' },
            method: "post",
            data: JSON.parse(JSON.stringify(data))
          }).then(res => {
            if (res.data.success === true) {
              this.$message({
                message: res.data.msg,
                type: "success"
              });
              this.originalValue = res.data.data;
              console.log(this.$refs.baseTemplateRef);
              this.$refs.baseTemplateRef.setData("customer", JSON.parse(JSON.stringify(this.originalValue)));
              //            this.originalValue = JSON.parse(JSON.stringify(this.currentValue));
              this.customerEdit = false;
            } else {
              this.$message({
                message: res.data.msg,
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
    }
  }
});

/***/ }),

/***/ 590:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 691:
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
      "title": "代理商信息",
      "icons": _vm.baseIcons
    }
  }, [_c('ifbp-template', {
    ref: "baseTemplateRef",
    attrs: {
      "tplId": "baseTemplate",
      "pkTemp": _vm.customerPk,
      "show-type": "form",
      "tplData": _vm.customerData,
      "editable": _vm.customerEdit
    }
  }), _vm._v(" "), (_vm.customerEdit) ? _c('div', {
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
      "show-type": "table-form"
    },
    on: {
      "form-confirm-click": _vm.linkmanFormConfirm,
      "form-cancel-click": _vm.linkmanFormCancel
    }
  })], 1), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "countryTaxesPanel",
      "title": "股东信息",
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
      "show-type": "table-form"
    },
    on: {
      "form-cancel-click": _vm.custCountryFormCancel
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
  }, [_vm._v("客户信息管理")])])
}]}

/***/ }),

/***/ 712:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(590)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(409),
  /* template */
  __webpack_require__(691),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

/******/ })});;
//# sourceMappingURL=Customer-InfoDetail.vue.8c31bf262a10a607e0ec.en.js.map