define("yls//busi/project/src/projectinfo/ProviderPanel.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 74);
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

/***/ 55:
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
  props: ['source_bill', 'type'],
  data() {
    let oThis = this;
    //校验

    return {
      scrollDom: document.getElementsByClassName('view')[0],
      contProviderDelVisible: false,
      rmoveindex: '',
      delId: '',
      //供应商标签
      contProviderIcons: [{
        icon: 'plus',
        click: function () {
          if (oThis.source_bill === '') {
            oThis.$message({
              message: '请先保存基本信息',
              type: 'error'
            });
            return;
          }
          let uitemplateComp = oThis.$refs.contProviderRef.comp;
          let table = uitemplateComp.$refs['contProvider_t_ref'];
          table.closeExpandRow();
          uitemplateComp.formShow = true;
          //初始化值
          oThis.$refs.contProviderRef.setData('contProvider', {
            // mobile:'13'
          });
          oThis.rmoveindex = '';
          uitemplateComp.$refs['contProvider_ref'].resetFields();
        }
      }],
      //type=prj 然后项目ui_id:8e13c344-fe4b-4e0c-a171-8e18395ee236 否者a7715073-8a24-420a-86de-9110786e8e4b
      funnode: oThis.type === 'prj' ? 'BT008' : 'BT008',
      nexusKey: oThis.type === 'prj' ? 'prjProviderUI' : oThis.type === 'prjApproval' ? 'prjApproval_provider' : 'prjProviderUI',
      contProviderData: {
        linkManParams: {},
        providerParams: {},
        rentParams: { 'pk_customer': 'yls_dev100000001pqc' //出租人  （一般写成固定 pk）
        } },
      //渲染表格
      contProviderResetFun: function ($node) {
        //获取需要过滤的控件(type === prj)
        // let $salesCustomer = this.getNodeById($node, '5zouflppncd');  //卖方客户主键
        // if($salesCustomer.length) {
        //   $salesCustomer.attr('v-on:trigger', 'saleRefChange'); 
        // }

        // let $pkLinkMan = this.getNodeById($node, '6bt70kv30vb');  //承租人主键
        // if($pkLinkMan.length) {
        //   $pkLinkMan.attr('v-on:trigger', 'linkManRefChange'); 
        // }
        //end

        let $pkProvider = this.getNodeById($node, 'ibgjz2m7kkd'); //供应商外键
        if ($pkProvider.length) {
          $pkProvider.attr('v-on:trigger', 'pkProviderRefChange');
        }

        //项目承租信息表格id：owwkujphew
        let id_co = '';
        if (oThis.type === 'prj') id_co = 'i71amo6wy18';else if (oThis.type === 'contr') id_co = '';else if (oThis.type === 'prjApproval') id_co = 'npnshehd4lh';
        let $table = this.getNodeById($node, id_co);
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

      t_Methods: {
        // saleRefChange: function(type, data) {
        //   if(type === 'change') {
        //     let param = {'pk_customer':data.value[0].id};
        //     oThis.$refs.contProviderRef.setData('providerParams',param);
        //   }
        // },
        // linkManRefChange: function(type,data){
        //   if(type === 'change') {
        //     let param = {'pk_customer':data.value[0].id};
        //     oThis.$refs.contProviderRef.setData('linkManParams',param);
        //   }
        // },
        pkProviderRefChange: function (type, data) {
          if (type === 'change') {
            debugger;
            oThis.$refs.contProviderRef.comp.contProvider.provider_code = data.value[0].refcode; //供应商编码
            oThis.$refs.contProviderRef.comp.contProvider.identity_num = data.value[0].identity_num; //证件号码
            oThis.$refs.contProviderRef.comp.contProvider.capital = data.value[0].capital; //注册资本
            oThis.$refs.contProviderRef.comp.contProvider.capital_paidin = data.value[0].capital_paidin; //实收资本
            oThis.$refs.contProviderRef.comp.contProvider.pk_legal_person = data.value[0].pk_legal_person; //法定代表人
            oThis.$refs.contProviderRef.comp.contProvider.establish_date = data.value[0].establish_date; //成立时间
            oThis.$refs.contProviderRef.comp.contProvider.comm_addr = data.value[0].comm_addr; //通讯地址
            oThis.$refs.contProviderRef.comp.contProvider.comm_mail = data.value[0].comm_mail; //通讯邮编
            // this.$refs['contProvider_ref'].model.customer_code = data.value[0].refcode;
            // this.$refs['contProvider_ref'].model.society_credit = data.value[0].society_credit;
            // this.$refs['contProvider_ref'].model.capital = data.value[0].capital;
            // this.$refs['contProvider_ref'].model.capital_paidin = data.value[0].capital_paidin;
            // this.$refs['contProvider_ref'].model.legal_person_name = data.value[0].legal_person_name;
            // this.$refs['contProvider_ref'].model.establish_date = data.value[0].establish_date;
            // this.$refs['contProvider_ref'].model.comm_addr = data.value[0].comm_addr;
            // this.$refs['contProvider_ref'].model.comm_mail = data.value[0].comm_mail;
          }
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
      this.requestPrjcontProvider();
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
      if (this.source_bill != '' && this.source_bill != undefined) {
        this.requestPrjcontProvider();
      }
    },
    //请求业务供应商
    requestPrjcontProvider() {
      let data = {
        'orderList': [{
          'direction': 'desc',
          'property': 'ts'
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
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/provider/page',
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        data: data,
        dataType: 'json'
      }).then(res => {
        let originalValue = res.data.data.content;
        this.$refs['contProviderRef'].setData('contProvider_t', JSON.parse(JSON.stringify(originalValue)));
      }).catch(() => {
        this.$message({
          message: '信息获取失败',
          type: 'error'
        });
      });
    },
    //供应商取消按钮
    contProviderFormCancel: function (type) {
      this.rmoveindex = '';
      //关闭表单或者是下拉显示行
      if (type === 'form') {
        this.$refs['contProviderRef'].comp.formShow = false;
      } else {
        this.$refs['contProviderRef'].getTableComp().closeExpandRow();
        var providerBakData = this.$refs.contProviderRef.getData('contProvider_t');
        providerBakData[this.providerEditIndex] = this.providerEditBakData;
        this.$refs.contProviderRef.setData('contProvider_t', providerBakData);
      }
    },
    //供应商主表保存
    contProviderFormConfirm: function () {
      //获取当前数据
      let url = '';
      let data = this.$refs.contProviderRef.comp.contProvider;
      data.source_bill = this.source_bill;
      if (data.pk_prj_provider) {
        url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/provider/update';
      } else {
        url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/provider/create';
      }
      //保存校验
      this.$refs.contProviderRef.comp.$refs['contProvider_ref'].validate(valid => {
        if (valid) {
          this.$http({
            url: url,
            headers: { 'Content-Type': 'application/json' },
            method: 'post',
            data: JSON.parse(JSON.stringify(data))
          }).then(res => {
            if (res.data.success === true) {
              this.$message({
                message: '保存成功！',
                type: 'success'
              });
              this.requestPrjcontProvider();
              this.$refs['contProviderRef'].comp.formShow = false;
            } else {
              this.$message({
                message: res.data.error.errorMessage,
                type: 'error'
              });
            }
          }).catch(() => {
            this.$message({
              message: '更新失败',
              type: 'error'
            });
          });

          //回写到单位客户表里去
          let writeback = {};
          writeback.pk_customer = this.$refs.contProviderRef.comp.contProvider.pk_provider_name; //客户外键
          writeback.customer_code = this.$refs.contProviderRef.comp.contProvider.provider_code; //编码
          writeback.society_credit = this.$refs.contProviderRef.comp.contProvider.identity_num; //证件号码
          writeback.capital = this.$refs.contProviderRef.comp.contProvider.capital; //注册资本
          writeback.capital_paidin = this.$refs.contProviderRef.comp.contProvider.capital_paidin; //实收资本
          writeback.pk_legal_person = this.$refs.contProviderRef.comp.contProvider.pk_legal_person; //法定代表人
          writeback.establish_date = this.$refs.contProviderRef.comp.contProvider.establish_date; //成立时间
          writeback.comm_addr = this.$refs.contProviderRef.comp.contProvider.comm_addr; //通讯地址
          writeback.comm_mail = this.$refs.contProviderRef.comp.contProvider.comm_mail; //通讯邮编

          this.$http({
            url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'cust/corp/updateOptionalByPkCustomer',
            headers: { 'Content-Type': 'application/json' },
            method: 'post',
            data: JSON.parse(JSON.stringify(writeback))
          }).then(res => {
            if (res.data.success === true) {
              this.$message({
                message: '回写成功！',
                type: 'success'
              });
            } else {
              this.$message({
                message: res.data.error.errorMessage,
                type: 'error'
              });
            }
          }).catch(() => {
            this.$message({
              message: '回写失败',
              type: 'error'
            });
          });
        }
      });
    },
    //供应商行编辑
    contProviderFormedit: function (scope) {
      //记录删除位置
      this.rmoveindex = scope.$index;
      //行下展开表单界面
      let row = scope.row;
      this.$refs['contProviderRef'].getTableComp().expandRow(row);
      this.$refs['contProviderRef'].formShow = false;
      //contProvider为表单数据对象参数
      this.$refs['contProviderRef'].setData('contProvider', row);
      this.providerEditBakData = JSON.parse(JSON.stringify(scope.row));
      this.providerEditIndex = scope.$index;
    },
    // 供应商删除提示
    contProviderFormdelete: function (scope) {
      this.contProviderDelVisible = true;
      this.delId = scope.row.pk_prj_provider;
    },
    // 供应商删除方法
    contProviderDeleteClick() {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/provider/deleteById',
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
          this.requestPrjcontProvider();
        } else {
          this.$message({
            message: res.data.error.errorMessage,
            type: 'error'
          });
        }
      }).catch(e => {
        this.$message({
          message: '信息删除失败！',
          type: 'error'
        });
      });
      this.contProviderDelVisible = false;
      this.delId = '';
    }
  }
});

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 68:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "contProviderRef",
    attrs: {
      "tplId": "contProvider",
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexusKey,
      "tplData": _vm.contProviderData,
      "tplResetFun": _vm.contProviderResetFun,
      "show-type": "table-form",
      "methods": _vm.t_Methods
    },
    on: {
      "form-confirm-click": _vm.contProviderFormConfirm,
      "form-cancel-click": _vm.contProviderFormCancel,
      "edit-table-click": _vm.contProviderFormedit,
      "delete-table-click": _vm.contProviderFormdelete
    }
  }), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    model: {
      value: (_vm.contProviderDelVisible),
      callback: function($$v) {
        _vm.contProviderDelVisible = $$v
      },
      expression: "contProviderDelVisible"
    }
  }, [_c('span', [_vm._v("确认删除该条记录？删除后无法恢复。")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.contProviderDelVisible = false, this.delId = ''
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.contProviderDeleteClick
    }
  }, [_vm._v("确 定")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(60)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(55),
  /* template */
  __webpack_require__(68),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

/******/ })});;
//# sourceMappingURL=ProviderPanel.vue.638442eb1e7de6e0b5f9.en.js.map