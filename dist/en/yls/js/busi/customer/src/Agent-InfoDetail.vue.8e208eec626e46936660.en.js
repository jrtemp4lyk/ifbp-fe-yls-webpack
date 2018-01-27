define("yls//busi/customer/src/Agent-InfoDetail.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 709);
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

/***/ 37:
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
  props: ["pk_customer", "type"],
  data() {
    let oThis = this;
    //校验
    let validatecustomer = function (rule, value, callback) {

      //证件号码唯一校验
      if (rule.field === "identity_no") {
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
    };
    return {
      $refNodeIdType: '',
      funnode: "BT003",
      nexuskey: oThis.type === "corp" ? "Contacts_UI" : "person_contact",
      scrollDom: document.getElementsByClassName("view")[0],
      linkmanDelVisible: false,
      rmoveindex: "",
      delId: "",
      //联系人
      linkmanIcons: [{
        icon: "plus",
        click: function () {
          if (oThis.pk_customer === "") {
            oThis.$message({
              message: "请先保存基本信息",
              type: "error"
            });
            return;
          }
          let uitemplateComp = oThis.$refs.custlinkmanRef.comp;
          let table = uitemplateComp.$refs["OtherContact_t_ref"];
          table.closeExpandRow();
          uitemplateComp.formShow = true;
          //初始化值
          oThis.$refs.custlinkmanRef.setData("OtherContact", {
            // mobile:'13'
          });
          oThis.rmoveindex = "";
          uitemplateComp.$refs["OtherContact_ref"].resetFields();
        }
      }],
      custlinkmanPk: "946c2308-f17d-4d80-bc5b-3f3f406df306", //linkman
      custlinkmanData: {
        isEdit: false

      },
      //渲染表格
      linkmanResetFun: function ($node) {
        let $table = $node.find('el-table');
        let $refNodeName = $node.find("el-ref[v-model='OtherContact.customer_name']"); //获取姓名节点
        if ($refNodeName.length) {
          $refNodeName.attr("v-on:trigger", "getMessageFromName"); //根据姓名带出证件号与类型
        }
        debugger;
        let $refNodeIdType = $node.find("el-select[v-model='OtherContact.identity_type']"); //获取证件类型节点
        $refNodeIdType.attr("v-bind:disabled", 'isEdit'); //选择参照变成不可编辑
        let $refNodeIdNo = $node.find("el-input[v-model='OtherContact.identity_card_numb']"); //获取证件号节点
        $refNodeIdNo.attr("v-bind:disabled", 'isEdit'); //选择参照变成不可编辑


        //  $table.attr(':show-header','false');
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
        getMessageFromName: function (type, data) {

          if (type === 'change') {

            this.$refs['OtherContact_ref'].model.identity_type = data.value[0].identity_type;
            this.$refs['OtherContact_ref'].model.identity_card_numb = data.value[0].identity_no;
            oThis.$refs["custlinkmanRef"].setData("isEdit", true);
          }
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
      this.requestCustlinkman();
    }
  },
  //获取数据数据初始化操作
  created() {},
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
        this.requestCustlinkman();
      }
    },
    //请求客户联系人
    requestCustlinkman() {
      let url;
      let ownerId = this.getCookie("_A_P_id");
      url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/otherContact/page";
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
        data: data

      }).then(res => {
        this.originalValue = res.data.data.content;
        this.$refs["custlinkmanRef"].setData("OtherContact_t", JSON.parse(JSON.stringify(this.originalValue)));
      }).catch(() => {
        this.$message({
          message: "联系人信息获取失败",
          type: "error"
        });
      });
    },
    //联系人取消按钮
    linkmanFormCancel: function (type) {
      this.rmoveindex = "";
      //关闭表单或者是下拉显示行
      if (type === "form") {
        this.$refs["custlinkmanRef"].comp.formShow = false;
      } else {
        this.$refs["custlinkmanRef"].getTableComp().closeExpandRow(); //关闭新增区域表单
        let OtherContactTable = this.$refs.custlinkmanRef.getData('OtherContact_t');
        OtherContactTable[this.baseEditIndex] = this.baseData; //获取点击修改前的值
        this.$refs.custlinkmanRef.setData('OtherContact_t', OtherContactTable);
      }
    },
    //联系人主表保存
    linkmanFormConfirm: function () {
      //获取当前数据
      let data = this.$refs.custlinkmanRef.comp.OtherContact;
      data.pk_customer = this.pk_customer;
      let baseUrl = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */];
      //保存校验

      this.$refs.custlinkmanRef.comp.$refs["OtherContact_ref"].validate(valid => {
        if (valid) {
          this.$http({
            url: baseUrl + "cust/otherContact/updateORinsert",
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
              let linarraydata = this.$refs.custlinkmanRef.getData("OtherContact_t");
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

              //给对象赋值
              this.$refs.custlinkmanRef.setData("OtherContact_t", JSON.parse(JSON.stringify(linarraydata)));
              //隐藏详情列表
              this.$refs["custlinkmanRef"].comp.formShow = false;
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
    //联系人行编辑
    linkmanFormedit: function (scope) {
      //记录删除位置
      this.rmoveindex = scope.$index;

      //行下展开表单界面
      let row = scope.row;
      this.$refs["custlinkmanRef"].getTableComp().expandRow(row);
      this.$refs["custlinkmanRef"].formShow = false;
      //OtherContact为表单数据对象参数
      this.$refs["custlinkmanRef"].setData("OtherContact", row);
      this.baseData = JSON.parse(JSON.stringify(scope.row));
      this.baseEditIndex = scope.$index;
    },
    //联系人删除提示
    linkmanFormdelete: function (scope) {
      this.linkmanDelVisible = true;
      this.delId = scope.row.pk_cust_other_contact;
    },
    //联系人删除方法
    linkmanDeleteClick() {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/otherContact/deleteById",
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
          //this.delDialogVisible = false;
          this.requestCustlinkman();
          // this.request(this.currentPage - 1, this.size);
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
      this.linkmanDelVisible = false;
      this.delId = "";
    }
  }
});

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 39:
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

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linkmanpanel_vue__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linkmanpanel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__linkmanpanel_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Shareholderpanel_vue__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Shareholderpanel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Shareholderpanel_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


//引入联系人和股东信息面板



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'custlinkmanRef': __WEBPACK_IMPORTED_MODULE_1__linkmanpanel_vue___default.a,
    'ShareholderRef': __WEBPACK_IMPORTED_MODULE_2__Shareholderpanel_vue___default.a

  },
  data() {

    let oThis = this;
    let validator = function (rule, value, callback) {};
    //校验
    let validatecustomer = function (rule, value, callback) {

      //证件号码唯一校验
      if (rule.field === "identity_no") {
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
      //企业客户名称
      if (rule.field === "customer_name") {
        if (value === '') {
          callback(new Error('企业客户名称不能为空'));
        } else {
          callback();
        }
      }
    };
    return {
      funnode: "BT003",
      nexuskey: "customer_corp_ui",
      custfunnode: "BT003",
      custnexuskey: "customer_detial_ui",
      scrollDom: "ifbpScrollDom",
      pk_customer: "",
      linkmanDelVisible: false,
      custbankDelVisible: false,
      ShareholderDelVisible: false,
      rmoveindex: "",
      delId: "",
      //企业客户基本信息修改
      corpResetFun: function ($node) {
        var $refNode1 = this.getNodeById($node, 'w85l2pcqcf');
        var $refNode2 = this.getNodeById($node, 'gu0cc609z7q');
        var $refNode3 = this.getNodeById($node, 'vijgevbe1li');

        var $refNode4 = this.getNodeById($node, 'ofj3u2jhzb9');
        var $refNode5 = this.getNodeById($node, 'rwakr8o78c');

        if ($refNode1.length) {
          $refNode1.attr("v-on:trigger", "handleRefChange1");
        }
        if ($refNode2.length) {
          $refNode2.attr("v-on:trigger", "handleRefChange2");
        }
        if ($refNode3.length) {
          $refNode3.attr("v-on:trigger", "handleRefChange3");
        }
        if ($refNode4.length) {
          $refNode4.attr("v-on:trigger", "handleRefChange4");
        }
        if ($refNode5.length) {
          $refNode5.attr("v-on:trigger", "handleRefChange5");
        }
      },
      t_Methods: {
        handleRefChange1: function (type, data) {
          debugger;
          if (type === 'change') {
            debugger;
            let refParams = { 'key': data.value[0].innercode };
            oThis.$refs.baseTemplateRef1.setData('h_param', refParams);
          }
        },
        handleRefChange2: function (type, data) {
          debugger;
          if (type === 'change') {
            let refParams = { 'key': data.value[0].innercode };
            oThis.$refs.baseTemplateRef1.setData('m_param', refParams);
          }
        },
        handleRefChange3: function (type, data) {
          debugger;
          if (type === 'change') {
            let refParams = { 'key': data.value[0].innercode };
            oThis.$refs.baseTemplateRef1.setData('s_param', refParams);
          }
        },
        handleRefChange4: function (type, data) {
          debugger;
          if (type === 'change') {
            let refParams = { 'key': data.value[0].innercode };
            oThis.$refs.baseTemplateRef1.setData('city_param', refParams);
          }
        },
        handleRefChange5: function (type, data) {
          debugger;
          if (type === 'change') {
            let refParams = { 'key': data.value[0].innercode };
            oThis.$refs.baseTemplateRef1.setData('county_param', refParams);
          }
        }
      },
      baseIcons: [{
        icon: "edit",
        click: function () {
          oThis.customerEdit = !oThis.customerEdit;
        }
      }],
      customerPk: "54fc5e2c-414d-49e5-9a44-1bf2bbe002e1",
      customerData: {
        customer: {},
        rules: {
          customer_name: [{ validator: validatecustomer, trigger: "blur" }],
          identity_no: [{ validator: validatecustomer, trigger: "blur" }],
          cusotmer_class: [
            // { required: true, message: "企业客户基本分类不能为空", trigger: "blur" }
          ]
        }
      },
      customerEdit: false,
      //联系人
      linkmanIcons: [{
        icon: "plus",
        click: function () {

          if (oThis.pk_customer === "") {
            oThis.$message({
              message: "请先保存基本信息",
              type: "error"
            });
            return;
          }
          oThis.$refs.custlinkmanRef.$refs.custlinkmanRef.getTableComp().closeExpandRow();
          // 重置新增数据
          oThis.$refs.custlinkmanRef.$refs.custlinkmanRef.resetFormData();
          // 显示新增区域
          oThis.$refs.custlinkmanRef.$refs.custlinkmanRef.comp.formShow = true;
        }
      }],
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
          oThis.$refs.ShareholderRef.$refs.ShareholderRef.getTableComp().closeExpandRow();
          // 重置新增数据
          oThis.$refs.ShareholderRef.$refs.ShareholderRef.resetFormData();
          // 显示新增区域
          oThis.$refs.ShareholderRef.$refs.ShareholderRef.comp.formShow = true;
        }
      }]

    };
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
      this.pk_customer = this.$root.$router.currentRoute.params.id;
      //请求企业客户基本信息详情
      if (this.pk_customer === undefined) {
        this.pk_customer = "";
        this.customerEdit = true;
        return;
      }
      debugger;
      let method = this.$root.$router.currentRoute.name;
      debugger;
      if (method === "Agent-update") {
        if (this.pk_customer != "") {
          this.requestCustBaseInfo();
        }
      }
    },
    //请求企业客户基本信息详情
    requestCustBaseInfo() {
      debugger;
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/customer/getById",
        headers: { "Content-Type": "application/json" },
        method: "post",
        data: this.pk_customer
      }).then(res => {
        let originalValue = res.data.data;
        this.$refs.baseTemplateRef.setData("customer", JSON.parse(JSON.stringify(originalValue)));
        debugger;
        this.$refs.baseTemplateRef1.setData("CustCorp", JSON.parse(JSON.stringify(originalValue.cust_corp_list[0])));
      }).catch(e => {
        console.error(e);
        this.$message({
          message: "企业客户基本信息详情获取失败",
          type: "error"
        });
      });
    },

    customerCancel() {
      this.customerEdit = false;
      // 重置value
    },
    //企业客户基本信息保存
    customerConfirm() {
      let data = this.$refs.baseTemplateRef.comp.customer;
      let data1 = this.$refs.baseTemplateRef1.comp.CustCorp;
      debugger;
      let a = [data1];
      data.cust_corp_list = a;
      console.log(data);
      let baseUrl = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */];
      debugger;
      //表单formRef  表格tableRef
      this.$refs.baseTemplateRef.comp.$refs["formRef"].validate(valid => {
        if (valid) {
          this.$http({
            url: baseUrl + "cust/customer/updateORinsert",
            headers: { "Content-Type": "application/json" },
            method: "post",
            data: JSON.parse(JSON.stringify(data))
          }).then(res => {
            debugger;
            if (res.data.success === true) {
              this.$message({
                message: "保存成功",
                type: "success"
              });
              debugger;
              this.originalValue = res.data.data;
              console.log(this.$refs.baseTemplateRef);
              this.$refs.baseTemplateRef.setData("customer", JSON.parse(JSON.stringify(this.originalValue)));

              this.pk_customer = this.originalValue.pk_cust_customer;
              this.customerEdit = false;
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
    }
  }
});

/***/ }),

/***/ 41:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "custlinkmanRef",
    attrs: {
      "tplId": "linkmanTemplate",
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexuskey,
      "tplData": _vm.custlinkmanData,
      "tplResetFun": _vm.linkmanResetFun,
      "methods": _vm.t_Methods,
      "show-type": "table-form"
    },
    on: {
      "form-confirm-click": _vm.linkmanFormConfirm,
      "form-cancel-click": _vm.linkmanFormCancel,
      "edit-table-click": _vm.linkmanFormedit,
      "delete-table-click": _vm.linkmanFormdelete
    }
  }), _vm._v(" "), _c('el-dialog', {
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
        _vm.linkmanDelVisible = false, this.delId = ''
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.linkmanDeleteClick
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


/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(39)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(37),
  /* template */
  __webpack_require__(41),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 513:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 613:
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
      "title": "企业客户基本信息",
      "icons": _vm.baseIcons
    }
  }, [_c('ifbp-template', {
    ref: "baseTemplateRef",
    attrs: {
      "tplId": "baseTemplate",
      "funnode": _vm.custfunnode,
      "nexuskey": _vm.custnexuskey,
      "show-type": "form",
      "tplData": _vm.customerData,
      "editable": _vm.customerEdit
    }
  }), _vm._v(" "), _c('ifbp-template', {
    ref: "baseTemplateRef1",
    attrs: {
      "tplId": "baseTemplate1",
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexuskey,
      "show-type": "form",
      "tplResetFun": _vm.corpResetFun,
      "methods": _vm.t_Methods,
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
  }, [_c('custlinkmanRef', {
    ref: "custlinkmanRef",
    attrs: {
      "pk_customer": _vm.pk_customer
    }
  })], 1), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "ShareholderPanel",
      "title": "股东信息",
      "icons": _vm.ShareholderIcons
    }
  }, [_c('ShareholderRef', {
    ref: "ShareholderRef",
    attrs: {
      "pk_customer": _vm.pk_customer
    }
  })], 1), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "none",
      "title": "财务报表信息",
      "icons": _vm.none
    }
  }, [_c('none', {
    ref: "none",
    attrs: {
      "pk_customer": _vm.pk_customer
    }
  })], 1), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "none",
      "title": "资料上传",
      "icons": _vm.none
    }
  }, [_c('none', {
    ref: "none",
    attrs: {
      "pk_customer": _vm.pk_customer
    }
  })], 1)], 1)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title-container"
  }, [_c('h2', {
    staticClass: "name"
  }, [_vm._v("企业客户管理")])])
}]}

/***/ }),

/***/ 709:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(513)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(406),
  /* template */
  __webpack_require__(613),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

/******/ })});;
//# sourceMappingURL=Agent-InfoDetail.vue.8e208eec626e46936660.en.js.map