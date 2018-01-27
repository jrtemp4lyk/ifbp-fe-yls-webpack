define("yls//busi/project/src/projectApproval/projectApproval-card.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 776);
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

/***/ 10:
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
  props: ["pk_prjId", "type", "invisible", "Leasehold"],
  data() {
    let oThis = this;
    //校验
    let validatecustomer = function (rule, value, callback) {};
    return {
      Leasehold: '',

      scrollDom: document.getElementsByClassName('view')[0],
      renttingDelVisible: false,
      rmoveindex: '',
      delId: '',
      //租赁物
      renttingIcons: [{
        icon: 'plus',
        click: function () {
          if (oThis.pk_prjId === '') {
            oThis.$message({
              message: '未获取到项目',
              type: 'error'
            });
            return;
          }
          let uitemplateComp = oThis.$refs.busirenttingRef.comp;
          let table = uitemplateComp.$refs['proRentThing_t_ref'];
          table.closeExpandRow();
          uitemplateComp.formShow = true;
          //初始化值
          oThis.$refs.busirenttingRef.setData('proRentThing', {
            // mobile:'13'
          });
          oThis.rmoveindex = '';
          uitemplateComp.$refs['proRentThing_ref'].resetFields();
        }
      }],
      funnode: 'BT008',
      //type=prj 然后372a2fcb-1db3-4ca1-98a1-c235e40329e7 否者a7715073-8a24-420a-86de-9110786e8e4b
      nexuskey: oThis.type === 'prj' ? 'rentthingprjUI' : oThis.type === 'prjApproval' ? 'rentThing-prjApproval' : 'rentthing_busi_apply',

      busirenttingData: {
        IsShowCust: '',
        rules: {
          thing_name: [{ required: true, message: '请输入租赁物名称', trigger: 'blur' }]
        }
      },
      //渲染表格
      renttingResetFun: function ($node) {
        if (oThis.invisible) {
          return;
        }

        //获取供应商的节点
        let $cust = $node.find("el-ref[v-model='proRentThing.pk_consumer']");
        //如果主表选择直租，该组件可见，否则不可见
        debugger;

        //$cust.parent().css("v-bind:display",'IsShowCust');
        // $cust.parent().attr("v-bind:style='{display:IsShowCust}'")
        $cust.parent().attr("v-bind:style", "{display:IsShowCust}");

        //绑定事件
        //数量
        let $thing_number = $node.find("el-number[v-model='proRentThing.thing_number']");
        if ($thing_number.length) {
          // 添加绑定事件, 数量绑定thing_numberChange
          $thing_number.attr("v-on:change", "thing_numberChange");
        };
        //设备单价
        let $unit_cost = $node.find("el-money[v-model='proRentThing.unit_cost']");
        if ($unit_cost.length) {
          // 添加绑定事件, 设备单价绑定unit_costChange
          $unit_cost.attr("v-on:change", "unit_costChange");
        };

        // let $table = this.getNodeById($node, id_co);
        let $table = $node.find('el-table');
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
      changeMethods: {
        thing_numberChange: function (data) {
          if (data && data !== '') {
            if (oThis.$refs.busirenttingRef.comp.proRentThing.unit_cost !== '') {
              let unit_cost = oThis.$refs.busirenttingRef.comp.proRentThing.unit_cost;
              let thing_number = data;
              oThis.$refs.busirenttingRef.comp.proRentThing.total_cost = thing_number * unit_cost;
            }
          }
        },
        unit_costChange: function (data) {
          if (data && data !== '') {
            if (oThis.$refs.busirenttingRef.comp.proRentThing.thing_number !== '') {
              let unit_cost = data;
              let thing_number = oThis.$refs.busirenttingRef.comp.proRentThing.thing_number;
              oThis.$refs.busirenttingRef.comp.proRentThing.total_cost = thing_number * unit_cost;
            }
          }
        }

      }
    };
  },
  //监听引用传参后实时变动
  computed: {
    currentpk_prjId() {
      return this.pk_prjId;
    },
    currentLeasehold() {
      return this.Leasehold;
    }
  },
  //监听参数变动后方法
  watch: {
    pk_prjId(val) {
      this.requestPrjrentting();
    },
    Leasehold(val) {

      if (this.Leasehold === 'LEASEDIRECT') {

        this.$refs["busirenttingRef"].setData("IsShowCust", 'inline-block');
      } else {
        debugger;
        this.$refs["busirenttingRef"].setData("IsShowCust", 'none');
      }
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
      if (this.pk_prjId != '' && this.pk_prjId != undefined) {
        this.requestPrjrentting();
      }
    },
    //请求业务租赁物
    requestPrjrentting() {
      let data = {
        'orderList': [{
          'direction': 'desc',
          'property': 'ts'
        }],
        pageNum: 0,
        pageSize: 0,
        searchParams: {
          searchMap: {
            custCondList: [{ key: 'source_bill', oper: '=', value: this.pk_prjId }]
          }
        }
      };
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/rentth/page',
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        data: data,
        dataType: 'json'
      }).then(res => {
        let originalValue = res.data.data.content;
        this.$refs['busirenttingRef'].setData('proRentThing_t', JSON.parse(JSON.stringify(originalValue)));
      }).catch(() => {
        this.$message({
          message: '信息获取失败',
          type: 'error'
        });
      });
    },
    //租赁物取消按钮
    renttingFormCancel: function (type) {
      this.rmoveindex = '';
      //关闭表单或者是下拉显示行
      if (type === 'form') {
        this.$refs['busirenttingRef'].comp.formShow = false;
      } else {
        this.$refs['busirenttingRef'].getTableComp().closeExpandRow();

        let OtherContactTable = this.$refs.busirenttingRef.getData('proRentThing_t');
        OtherContactTable[this.baseEditIndex] = this.baseData;
        this.$refs.busirenttingRef.setData('proRentThing_t', OtherContactTable);
      }
    },
    //租赁物主表保存
    renttingFormConfirm: function () {
      //获取当前数据
      let url = '';
      let data = this.$refs.busirenttingRef.comp.proRentThing;
      data.source_bill = this.pk_prjId;
      if (data.pk_prj_rent_thing) {
        url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/rentth/update';
      } else {
        url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/rentth/create';
      }
      //保存校验
      this.$refs.busirenttingRef.comp.$refs['proRentThing_ref'].validate(valid => {
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
              // this.requestPrjrentting();
              let originalValue = res.data.data;
              //获取列表数组（根据表格数据对象参数获取相应的数组或对象）
              let linarraydata = this.$refs.busirenttingRef.getData('proRentThing_t');
              /**@augments 移除位置 
               * @augments 移除个数
               * @augments 用新的对象替换（不传值则删除）
               */

              if (this.rmoveindex !== '') {
                linarraydata.splice(this.rmoveindex, 1, originalValue);
              } else {
                //加入数组开始
                linarraydata.unshift(originalValue);
              }
              this.$refs.busirenttingRef.setData('proRentThing_t', JSON.parse(JSON.stringify(linarraydata)));
              //隐藏详情列表
              this.$refs['busirenttingRef'].comp.formShow = false;
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
        }
      });
    },
    //租赁物行编辑
    renttingFormedit: function (scope) {
      //记录删除位置
      this.rmoveindex = scope.$index;
      //行下展开表单界面
      let row = scope.row;
      this.$refs['busirenttingRef'].getTableComp().expandRow(row);
      this.$refs['busirenttingRef'].comp.formShow = false;
      //proRentThing为表单数据对象参数
      this.$refs['busirenttingRef'].setData('proRentThing', row);

      // 备份数据
      this.baseData = JSON.parse(JSON.stringify(scope.row));
      this.baseEditIndex = scope.$index;
    },
    // 租赁物删除提示
    renttingFormdelete: function (scope) {
      this.renttingDelVisible = true;
      this.delId = scope.row.pk_prj_rent_thing;
    },
    // 租赁物删除方法
    renttingDeleteClick() {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/rentth/deleteById',
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
          this.requestPrjrentting();
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
      this.renttingDelVisible = false;
      this.delId = '';
    }
  }
});

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "insuranceRef",
    attrs: {
      "tplId": "insuranceId",
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexuskey,
      "tplData": _vm.insuranceData,
      "tplResetFun": _vm.insuranceResetFun,
      "show-type": "table-form"
    },
    on: {
      "form-confirm-click": _vm.insuranceFormConfirm,
      "form-cancel-click": _vm.insuranceFormCancel,
      "edit-table-click": _vm.insuranceFormedit,
      "delete-table-click": _vm.insuranceFormdelete
    }
  }), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    model: {
      value: (_vm.insuranceDelVisible),
      callback: function($$v) {
        _vm.insuranceDelVisible = $$v
      },
      expression: "insuranceDelVisible"
    }
  }, [_c('span', [_vm._v("确认删除该条记录？删除后无法恢复。")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.insuranceDelVisible = false, this.delId = ''
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.insuranceDeleteClick
    }
  }, [_vm._v("确 定")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "busirenttingRef",
    attrs: {
      "tplId": "busirentting",
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexuskey,
      "tplData": _vm.busirenttingData,
      "tplResetFun": _vm.renttingResetFun,
      "methods": _vm.changeMethods,
      "show-type": "table-form"
    },
    on: {
      "form-confirm-click": _vm.renttingFormConfirm,
      "form-cancel-click": _vm.renttingFormCancel,
      "edit-table-click": _vm.renttingFormedit,
      "delete-table-click": _vm.renttingFormdelete
    }
  }), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    model: {
      value: (_vm.renttingDelVisible),
      callback: function($$v) {
        _vm.renttingDelVisible = $$v
      },
      expression: "renttingDelVisible"
    }
  }, [_c('span', [_vm._v("确认删除该条记录？删除后无法恢复。")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.renttingDelVisible = false, this.delId = ''
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.renttingDeleteClick
    }
  }, [_vm._v("确 定")])], 1)])], 1)
},staticRenderFns: []}

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

/***/ 235:
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




/* harmony default export */ __webpack_exports__["default"] = ({
  //应用vue传过来接收参数
  props: ["source_bill"],
  data() {
    let oThis = this;
    //校验

    return {
      scrollDom: document.getElementsByClassName("view")[0],
      delVisible: false,
      rmoveindex: '',
      delId: '',
      //标签
      icons: [{
        icon: "plus",
        click: function () {

          if (oThis.source_bill === '') {
            oThis.$message({
              message: '请先保存基本信息',
              type: 'error'
            });
            return;
          }
          let uitemplateComp = oThis.$refs.baseRef.comp;
          let table = uitemplateComp.$refs['PrjPromotPlan_t_ref'];
          table.closeExpandRow();
          uitemplateComp.formShow = true;
          //初始化值
          oThis.$refs.baseRef.setData('PrjPromotPlan', {
            // mobile:'13'
          });
          oThis.rmoveindex = '';
          uitemplateComp.$refs['PrjPromotPlan_ref'].resetFields();
        }
      }],
      funnode: 'BT008',
      nexusKey: 'prjPromotPlan_prjApproval',
      tplData: {},
      editIndex: '',
      editBakData: {},
      //渲染表格
      resetFun: function ($node) {
        let $table = this.getNodeById($node, 'bz9hbv2702j');
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
      this.requestPrjPromotPlan();
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
        this.requestPrjPromotPlan();
      }
    },
    //请求项目推进计划
    requestPrjPromotPlan() {
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
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/promotPlan/page',
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        data: data,
        dataType: 'json'
      }).then(res => {
        let originalValue = res.data.data.content;
        this.$refs['baseRef'].setData('PrjPromotPlan_t', JSON.parse(JSON.stringify(originalValue)));
      }).catch(() => {
        this.$message({
          message: '信息获取失败',
          type: 'error'
        });
      });
    },
    //取消按钮
    formCancel: function (type) {
      this.rmoveindex = '';
      //关闭表单或者是下拉显示行
      if (type === 'form') {
        this.$refs['baseRef'].comp.formShow = false;
      } else {
        this.$refs['baseRef'].getTableComp().closeExpandRow();
        var bakData = this.$refs.baseRef.getData("PrjPromotPlan_t");
        bakData[this.editIndex] = this.editBakData;
        this.$refs.baseRef.setData("PrjPromotPlan_t", bakData);
      }
    },
    //项目推进计划主表保存
    formConfirm: function () {
      //获取当前数据
      let data = this.$refs.baseRef.comp.PrjPromotPlan;
      data.source_bill = this.source_bill;
      if (data.pk_prj_promot_plan) {
        url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/promotPlan/update';
      } else {
        url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/promotPlan/create';
      }
      //保存校验
      this.$refs.baseRef.comp.$refs['PrjPromotPlan_ref'].validate(valid => {
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
              this.requestPrjPromotPlan();
              this.$refs['baseRef'].comp.formShow = false;
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
        }
      });
    },
    //项目推进计划 行编辑
    formEdit: function (scope) {
      //记录删除位置
      this.rmoveindex = scope.$index;
      //行下展开表单界面
      let row = scope.row;
      this.$refs['baseRef'].getTableComp().expandRow(row);
      this.$refs['baseRef'].formShow = false;
      this.$refs['baseRef'].setData('PrjPromotPlan', row);
      this.editBakData = JSON.parse(JSON.stringify(scope.row));
      this.editIndex = scope.$index;
    },
    //删除提示
    formDelete: function (scope) {
      this.delVisible = true;
      this.delId = scope.row.pk_prj_promot_plan;
    },
    // 删除方法
    deleteClick() {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/promotPlan/deleteById',
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
          this.requestPrjPromotPlan();
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
      this.delVisible = false;
      this.delId = '';
    }
  }
});

/***/ }),

/***/ 263:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(11)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(13),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 313:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "baseRef",
    attrs: {
      "tplId": "tplId",
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexusKey,
      "tplData": _vm.tplData,
      "tplResetFun": _vm.resetFun,
      "show-type": "table-form"
    },
    on: {
      "form-confirm-click": _vm.formConfirm,
      "form-cancel-click": _vm.formCancel,
      "edit-table-click": _vm.formEdit,
      "delete-table-click": _vm.formDelete
    }
  }), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    model: {
      value: (_vm.delVisible),
      callback: function($$v) {
        _vm.delVisible = $$v
      },
      expression: "delVisible"
    }
  }, [_c('span', [_vm._v("确认删除该条记录？删除后无法恢复。")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.delVisible = false, this.delId = ''
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.deleteClick
    }
  }, [_vm._v("确 定")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(263)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(235),
  /* template */
  __webpack_require__(313),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(12)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(14),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__projectinfo_ProviderPanel_vue__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__projectinfo_ProviderPanel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__projectinfo_ProviderPanel_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buni_busi_insure_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buni_busi_insure_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__buni_busi_insure_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buni_busi_rentting_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buni_busi_rentting_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__buni_busi_rentting_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__prjPromotPlan_vue__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__prjPromotPlan_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__prjPromotPlan_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    'contProviderRef': __WEBPACK_IMPORTED_MODULE_1__projectinfo_ProviderPanel_vue___default.a,
    'insuranceRef': __WEBPACK_IMPORTED_MODULE_2__buni_busi_insure_vue___default.a,
    'busirenttingRef': __WEBPACK_IMPORTED_MODULE_3__buni_busi_rentting_vue___default.a,
    'prjPromotPlanRef': __WEBPACK_IMPORTED_MODULE_4__prjPromotPlan_vue___default.a
  },
  data() {
    let oThis = this;
    return {
      scrollDom: 'ifbpScrollDom',
      pk_prj_approval: '',
      providerVisible: false,
      lease_type: '',

      //立项信息 start
      funnode: 'BT008',
      nexuskey: '',
      baseIcons: [{
        icon: 'edit',
        click: function () {
          oThis.baseEdit = !oThis.baseEdit;
        }
      }],
      tplData: {},
      baseEdit: false,
      // resetFun: function($node) {
      // //获取客户名称
      // var $refNode1 = this.getNodeById($node, '7i5uecnmegk');
      // if($refNode1.length) {
      //   $refNode1.attr('v-on:trigger', 'handleRefChange1'); 
      // }

      // //获取出租方账户
      // var $refNode2 = this.getNodeById($node, 'aljyrih6b4o');
      // if($refNode2.length) {
      //   $refNode2.attr('v-on:trigger', 'handleRefChange2'); 
      // }  
      // },
      // t_Methods: {
      /*给客户编号、控股股东、成立时间、注册资本、法人代表、
        客户性质、是否存在关联方交易、主营业务赋值，给出租方账户传参*/
      // handleRefChange1: function(type, data) {
      //   debugger;
      //   if(type === 'change') {
      //     this.$refs['projectApproval_form'].model.customer_code = data.value[0].refcode;
      //     this.$refs['projectApproval_form'].model.controlling_shareholder = data.value[0].controlshareholder;
      //     this.$refs['projectApproval_form'].model.establish_date = data.value[0].establish_date;
      //     this.$refs['projectApproval_form'].model.capital = data.value[0].capital;
      //     this.$refs['projectApproval_form'].model.legal_person = data.value[0].legal_person_name;
      //     this.$refs['projectApproval_form'].model.customer_property = data.value[0].customer_property;
      //     this.$refs['projectApproval_form'].model.link_trade = data.value[0].link_trade;
      //     this.$refs['projectApproval_form'].model.primary_business = data.value[0].primary_business;

      //     let refParams={'key':data.value[0].id};
      //     oThis.$refs.baseTemplateRef.setData('lessor_account_param', refParams);
      //   }
      // },
      // //给出租方账号、开户行赋值
      // handleRefChange2: function(type, data) {
      //   debugger;
      //   if(type === 'change') {
      //     this.$refs['projectApproval_form'].model.lessor_account_num = data.value[0].refcode;
      //     this.$refs['projectApproval_form'].model.deposit_bank = data.value[0].bank_no;
      //   }
      // }
      // },
      //立项信息 end

      //承租人基本信息 start
      lesseeFunnode: 'BT003',
      lesseeNexuskey: '',
      lesseeIcons: [{
        icon: 'edit',
        click: function () {
          let pk_customer = oThis.$refs.baseTemplateRef.comp.projectApproval.pk_customer;
          if (pk_customer === '' || pk_customer === null) {
            oThis.$message({
              message: '该立项信息没有设置承租人信息，不允许编辑！',
              type: 'error'
            });
            return;
          }
          oThis.lesseeEdit = !oThis.lesseeEdit;
        }
      }],
      lesseeTplData: {},
      lesseeEdit: false,
      formDataObj: '',
      //承租人基本信息 end

      //供应商标签
      contProviderIcons: [{
        icon: 'plus',
        click: function () {
          if (oThis.pk_prj_approval === '') {
            oThis.$message({
              message: '请先保存立项信息',
              type: 'error'
            });
            return;
          }
          oThis.$refs.contProviderRef.$refs.contProviderRef.comp.getTableComp().closeExpandRow();
          // 重置新增数据
          oThis.$refs.contProviderRef.$refs.contProviderRef.comp.resetFormData();
          // 显示新增区域
          oThis.$refs.contProviderRef.$refs.contProviderRef.comp.formShow = true;
        }
      }],
      //保险信息标签
      insuranceIcons: [{
        icon: 'plus',
        click: function () {
          if (oThis.pk_prj_approval === '') {
            oThis.$message({
              message: '请先保存立项信息',
              type: 'error'
            });
            return;
          }
          oThis.$refs.insuranceRef.$refs.insuranceRef.comp.getTableComp().closeExpandRow();
          // 重置新增数据
          oThis.$refs.insuranceRef.$refs.insuranceRef.comp.resetFormData();
          // 显示新增区域
          oThis.$refs.insuranceRef.$refs.insuranceRef.comp.formShow = true;
        }
      }],

      //租赁物标签
      rentTingIcons: [{
        icon: 'plus',
        click: function () {
          if (oThis.pk_prj_approval === '') {
            oThis.$message({
              message: '请先保存立项信息',
              type: 'error'
            });
            return;
          }
          oThis.$refs.busirenttingRef.$refs.busirenttingRef.getTableComp().closeExpandRow();
          // 重置新增数据
          oThis.$refs.busirenttingRef.$refs.busirenttingRef.resetFormData();
          // 显示新增区域
          oThis.$refs.busirenttingRef.$refs.busirenttingRef.comp.formShow = true;
        }
      }],

      //特殊事项 start
      matterFunnode: 'BT008',
      matterNexuskey: 'specialMatter_prjApproval',
      matterIcons: [{
        icon: 'edit',
        click: function () {
          if (this.pk_prj_approval === '' || this.pk_prj_approval === null) {
            return;
          }
          oThis.matterEdit = !oThis.matterEdit;
        }
      }],
      matterTplData: {},
      matterEdit: false,
      //特殊事项 end

      //项目推进计划标签
      prjPromotPlanIcons: [{
        icon: 'plus',
        click: function () {
          if (oThis.pk_prj_approval === '') {
            oThis.$message({
              message: '请先保存立项信息',
              type: 'error'
            });
            return;
          }
          oThis.$refs.prjPromotPlanRef.$refs.prjPromotPlanRef.getTableComp().closeExpandRow();
          // 重置新增数据
          oThis.$refs.prjPromotPlanRef.$refs.prjPromotPlanRef.resetFormData();
          // 显示新增区域
          oThis.$refs.prjPromotPlanRef.$refs.prjPromotPlanRef.comp.formShow = true;
        }
      }],

      //项目分析 start
      analysisFunnode: 'BT008',
      analysisNexuskey: 'prjAnalysis-prjApproval',
      analysisIcons: [{
        icon: 'edit',
        click: function () {
          if (this.pk_prj_approval === '' || this.pk_prj_approval === null) {
            return;
          }
          oThis.analysisEdit = !oThis.analysisEdit;
        }
      }],
      analysisTplData: {},
      analysisEdit: false,
      //项目分析 end

      //项目操作流程 start
      processFunnode: 'BT008',
      processNexuskey: 'prj_process_procedure'
      //项目操作流程 end

    };
  },
  //获取数据数据初始化操作
  created() {
    this.pk_prj_approval = this.$root.$router.currentRoute.params.id;
  },
  //页面操作
  mounted() {
    this.request();
  },
  methods: {
    request() {
      //请求基本信息详情
      if (this.pk_prj_approval === undefined) {
        this.pk_prj_approval = '';
        this.baseEdit = true;
        return;
      }
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/approval/getById',
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        data: this.pk_prj_approval
      }).then(res => {
        let originalValue = res.data.data;
        this.lease_type = originalValue.lease_type;
        this.providerVisible = originalValue.lease_type === 'LEASEDIRECT' ? true : false;
        this.nexuskey = originalValue.lease_type === 'SUBLEASE' ? 'prjApprovalDetail_person' : 'prjApprovalDetail_corp';
        this.$refs.baseTemplateRef.setData('projectApproval', JSON.parse(JSON.stringify(originalValue)));
        this.$refs.processTemplateRef.setData('projectApproval', JSON.parse(JSON.stringify(originalValue)));

        //根据返回结果中的客户主键，获取承租人基本信息
        if (originalValue.pk_customer != null && originalValue.pk_customer != '') {
          let url;
          if (originalValue.customer_type == 'CORP') {
            this.lesseeNexuskey = 'prjApproval_lessee_corp';
            url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'cust/corp/getByPkCustomer';
            this.formDataObj = 'CustCorp';
          } else {
            this.lesseeNexuskey = 'prjApproval_lessee_person';
            url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'cust/CustPerson/getByPkCustomer';
            this.formDataObj = 'CustPerson';
          }
          this.$http({
            url: url,
            headers: { 'Content-Type': 'application/json' },
            method: 'post',
            data: originalValue.pk_customer
          }).then(res => {
            this.$refs.lesseeTemplateRef.setData(this.formDataObj, JSON.parse(JSON.stringify(res.data.data)));
          }).catch(e => {
            this.$message({
              message: '承租人基本信息获取失败',
              type: 'error'
            });
          });
        }
        //end
      }).catch(e => {
        this.$message({
          message: '详情获取失败',
          type: 'error'
        });
      });

      //请求特殊事项
      if (this.pk_prj_approval) {
        this.$http({
          url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/specialMatter/getByPkPrjApproval',
          headers: { 'Content-Type': 'application/json' },
          method: 'post',
          data: this.pk_prj_approval
        }).then(res => {
          let originalValue = res.data.data;
          this.$refs.matterTemplateRef.setData('SpecialMatterEntity', JSON.parse(JSON.stringify(originalValue)));
        }).catch(e => {
          this.$message({
            message: '特殊事项获取失败',
            type: 'error'
          });
        });
      }

      //请求项目分析
      if (this.pk_prj_approval) {
        this.$http({
          url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/analysis/getByPkPrjApproval',
          headers: { 'Content-Type': 'application/json' },
          method: 'post',
          data: this.pk_prj_approval
        }).then(res => {
          let originalValue = res.data.data;
          this.$refs.analysisTemplateRef.setData('PrjAnalysis', JSON.parse(JSON.stringify(originalValue)));
        }).catch(e => {
          this.$message({
            message: '项目分析获取失败',
            type: 'error'
          });
        });
      }
    },

    //立项信息 start
    baseCancel() {
      this.baseEdit = false;
    },
    //基本信息保存
    baseConfirm() {
      let data = this.$refs.baseTemplateRef.comp.projectApproval;
      //表单formRef  表格tableRef
      this.$refs.baseTemplateRef.validate(valid => {
        if (valid) {
          this.$http({
            url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/approval/updateOrCreate',
            headers: { 'Content-Type': 'application/json' },
            method: 'post',
            data: JSON.parse(JSON.stringify(data))
          }).then(res => {
            if (res.data.success === true) {
              this.$message({
                message: '保存成功',
                type: 'success'
              });
              let originalValue = res.data.data;
              this.$refs.baseTemplateRef.setData('projectApproval', JSON.parse(JSON.stringify(originalValue)));
              this.baseEdit = false;
              this.pk_prj_approval = originalValue.pk_prj_approval;
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
        }
      });
    },
    //立项信息 end

    //承租人基本信息 start
    lesseeCancel() {
      this.lesseeEdit = false;
    },
    //基本信息保存
    lesseeConfirm() {
      let tmp = this.formDataObj;
      let data = this.$refs.lesseeTemplateRef.comp.tmp;

      //表单formRef  表格tableRef
      this.$refs.lesseeTemplateRef.validate(valid => {
        if (valid) {
          let url;
          if (tmp === 'CustCorp') {
            url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'cust/corp/update';
          } else {
            url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'cust/CustPerson/update';
          }
          this.$http({
            url: url,
            headers: { 'Content-Type': 'application/json' },
            method: 'post',
            data: JSON.parse(JSON.stringify(data))
          }).then(res => {
            if (res.data.success === true) {
              this.$message({
                message: '保存成功',
                type: 'success'
              });
              let originalValue = res.data.data;
              this.$refs.lesseeTemplateRef.setData(this.formDataObj, JSON.parse(JSON.stringify(originalValue)));
              this.lesseeEdit = false;
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
        }
      });
    },
    //承租人基本信息 end

    //特殊事项 start
    matterCancel() {
      this.matterEdit = false;
    },
    //基本信息保存
    matterConfirm() {
      let data = this.$refs.matterTemplateRef.comp.SpecialMatterEntity;
      data.pk_prj_approval = this.pk_prj_approval;

      //表单formRef  表格tableRef
      this.$refs.matterTemplateRef.validate(valid => {
        if (valid) {
          this.$http({
            url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/specialMatter/updateOrCreate',
            headers: { 'Content-Type': 'application/json' },
            method: 'post',
            data: JSON.parse(JSON.stringify(data))
          }).then(res => {
            if (res.data.success === true) {
              this.$message({
                message: '保存成功',
                type: 'success'
              });
              let originalValue = res.data.data;
              this.$refs.matterTemplateRef.setData('SpecialMatterEntity', JSON.parse(JSON.stringify(originalValue)));
              this.matterEdit = false;
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
        }
      });
    },
    //特殊事项 end

    //项目分析 start
    analysisCancel() {
      this.analysisEdit = false;
    },
    //基本信息保存
    analysisConfirm() {
      let data = this.$refs.analysisTemplateRef.comp.PrjAnalysis;
      data.pk_prj_approval = this.pk_prj_approval;

      //表单formRef  表格tableRef
      this.$refs.analysisTemplateRef.validate(valid => {
        if (valid) {
          this.$http({
            url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/analysis/updateOrCreate',
            headers: { 'Content-Type': 'application/json' },
            method: 'post',
            data: JSON.parse(JSON.stringify(data))
          }).then(res => {
            if (res.data.success === true) {
              this.$message({
                message: '保存成功',
                type: 'success'
              });
              let originalValue = res.data.data;
              this.$refs.analysisTemplateRef.setData('PrjAnalysis', JSON.parse(JSON.stringify(originalValue)));
              this.analysisEdit = false;
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
        }
      });
    }
    //项目分析 end

  }
});

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

/***/ 564:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 664:
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
      "title": "立项信息",
      "icons": _vm.baseIcons
    }
  }, [_c('ifbp-template', {
    ref: "baseTemplateRef",
    attrs: {
      "tplId": "baseTemplate",
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexuskey,
      "show-type": "form",
      "tplData": _vm.tplData,
      "editable": _vm.baseEdit
    }
  }), _vm._v(" "), (_vm.baseEdit) ? _c('div', {
    staticClass: "form-button-div"
  }, [_c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "default"
    },
    on: {
      "click": _vm.baseCancel
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.baseConfirm
    }
  }, [_vm._v("保存")])], 1) : _vm._e()], 1), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "lesseePanel",
      "title": "承租人基本信息",
      "icons": _vm.lesseeIcons
    }
  }, [_c('ifbp-template', {
    ref: "lesseeTemplateRef",
    attrs: {
      "tplId": "lesseeTemplate",
      "funnode": _vm.lesseeFunnode,
      "nexuskey": _vm.lesseeNexuskey,
      "show-type": "form",
      "tplData": _vm.lesseeTplData,
      "editable": _vm.lesseeEdit
    }
  }), _vm._v(" "), (_vm.lesseeEdit) ? _c('div', {
    staticClass: "form-button-div"
  }, [_c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "default"
    },
    on: {
      "click": _vm.lesseeCancel
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.lesseeConfirm
    }
  }, [_vm._v("保存")])], 1) : _vm._e()], 1), _vm._v(" "), (_vm.providerVisible) ? _c('ifbp-panel', {
    attrs: {
      "id": "contProviderRef",
      "title": "供应商信息",
      "icons": _vm.contProviderIcons
    }
  }, [_c('contProviderRef', {
    ref: "contProviderRef",
    attrs: {
      "source_bill": _vm.pk_prj_approval,
      "type": 'prjApproval'
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "busirenttingRef",
      "title": "租赁物情况",
      "icons": _vm.rentTingIcons
    }
  }, [_c('busirenttingRef', {
    ref: "busirenttingRef",
    attrs: {
      "pk_prjId": _vm.pk_prj_approval,
      "Leasehold": _vm.lease_type,
      "type": 'prjApproval'
    }
  })], 1), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "insuranceRef",
      "title": "保险信息",
      "icons": _vm.insuranceIcons
    }
  }, [_c('insuranceRef', {
    ref: "insuranceRef",
    attrs: {
      "source_bill": _vm.pk_prj_approval,
      "type": 'prjApproval'
    }
  })], 1), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "matterPanel",
      "title": "特殊事项",
      "icons": _vm.matterIcons
    }
  }, [_c('ifbp-template', {
    ref: "matterTemplateRef",
    attrs: {
      "tplId": "matterTemplate",
      "funnode": _vm.matterFunnode,
      "nexuskey": _vm.matterNexuskey,
      "show-type": "form",
      "tplData": _vm.matterTplData,
      "editable": _vm.matterEdit
    }
  }), _vm._v(" "), (_vm.matterEdit) ? _c('div', {
    staticClass: "form-button-div"
  }, [_c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "default"
    },
    on: {
      "click": _vm.matterCancel
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.matterConfirm
    }
  }, [_vm._v("保存")])], 1) : _vm._e()], 1), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "prjPromotPlanRef",
      "title": "项目推进计划",
      "icons": _vm.prjPromotPlanIcons
    }
  }, [_c('prjPromotPlanRef', {
    ref: "prjPromotPlanRef",
    attrs: {
      "source_bill": _vm.pk_prj_approval
    }
  })], 1), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "analysisPanel",
      "title": "项目分析",
      "icons": _vm.analysisIcons
    }
  }, [_c('ifbp-template', {
    ref: "analysisTemplateRef",
    attrs: {
      "tplId": "analysisTemplate",
      "funnode": _vm.analysisFunnode,
      "nexuskey": _vm.analysisNexuskey,
      "show-type": "form",
      "tplData": _vm.analysisTplData,
      "editable": _vm.analysisEdit
    }
  }), _vm._v(" "), (_vm.analysisEdit) ? _c('div', {
    staticClass: "form-button-div"
  }, [_c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "default"
    },
    on: {
      "click": _vm.analysisCancel
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.analysisConfirm
    }
  }, [_vm._v("保存")])], 1) : _vm._e()], 1), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "processPanel",
      "title": "项目操作流程"
    }
  }, [_c('ifbp-template', {
    ref: "processTemplateRef",
    attrs: {
      "tplId": "processTemplate",
      "funnode": _vm.processFunnode,
      "nexuskey": _vm.processNexuskey,
      "show-type": "form"
    }
  })], 1)], 1)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title-container"
  }, [_c('h2', {
    staticClass: "name"
  }, [_vm._v("立项申请维护")])])
}]}

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


/***/ }),

/***/ 776:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(564)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(473),
  /* template */
  __webpack_require__(664),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 9:
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




/* harmony default export */ __webpack_exports__["default"] = ({
  //应用vue传过来接收参数
  props: ['source_bill', 'type', 'invisible'],
  data() {
    let oThis = this;
    //校验
    let validateInsurance = function (rule, value, callback) {};
    return {
      scrollDom: document.getElementsByClassName('view')[0],
      insuranceDelVisible: false,
      rmoveindex: '',
      delId: '',
      back_object: '',
      //保险
      insuranceIcons: [{
        icon: 'plus',
        click: function () {
          if (oThis.source_bill === '') {
            oThis.$message({
              message: '未获取到项目',
              type: 'error'
            });
            return;
          }
          let uitemplateComp = oThis.$refs.insuranceRef.comp;
          let table = uitemplateComp.$refs['projectInsure-table'];
          table.closeExpandRow();
          uitemplateComp.formShow = true;
          //初始化值
          oThis.$refs.insuranceRef.setData('ProjectInsure', {
            // mobile:'13'
          });
          oThis.rmoveindex = '';
          uitemplateComp.$refs['projectInsure-form'].resetFields();
        }
      }],
      funnode: 'BT008',
      nexuskey: oThis.type === 'prj' ? 'ProjectInsureUI' : oThis.type === 'prjApproval' ? 'PrjApprovalInsureUI' : 'insurance_apply',
      insuranceData: {
        // rules: {
        //   thing_name: [
        //     { required: true, message: '请输入保险名称', trigger: 'blur' }
        //   ]
        // }
      },
      //渲染表格
      insuranceResetFun: function ($node) {
        if (oThis.invisible) {
          return;
        }

        var id_co = '';
        if (oThis.type === 'prj') id_co = 'hw9gl1c375v';else if (oThis.type === 'contr') id_co = '';else if (oThis.type === 'prjApproval') id_co = 'e0zihi349o';else id_co = "k9goab2oawo";
        var $table = this.getNodeById($node, id_co);
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
      }
    };
  },
  //监听引用传参后实时变动
  computed: {
    currentSource_bill() {
      return this.source_bill;
    }
  },
  //监听参数变动后方法
  watch: {
    source_bill(val) {
      this.requestInsurance();
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
        this.requestInsurance();
      }
    },
    //请求业务保险
    requestInsurance() {
      let data = {
        'orderList': [{
          'direction': 'desc',
          'property': 'ts'
        }],
        pageNum: 0,
        pageSize: 0,
        searchParams: {
          searchMap: {
            custCondList: [{ key: 'source_bill', oper: '=', value: this.source_bill }]
          }
        }
      };
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/ins/page',
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        data: data,
        dataType: 'json'
      }).then(res => {
        let originalValue = res.data.data.content;
        this.$refs['insuranceRef'].setData('ProjectInsure_t', JSON.parse(JSON.stringify(originalValue)));
      }).catch(() => {
        this.$message({
          message: '信息获取失败',
          type: 'error'
        });
      });
    },
    //保险取消按钮
    insuranceFormCancel: function (type) {
      this.rmoveindex = '';
      //关闭表单或者是下拉显示行
      if (type === 'form') {
        this.$refs['insuranceRef'].comp.formShow = false;
      } else {
        this.$refs['insuranceRef'].getTableComp().closeExpandRow();
        let OtherContactTable = this.$refs.insuranceRef.getData('ProjectInsure_t');
        OtherContactTable[this.baseEditIndex] = this.baseData;
        this.$refs.insuranceRef.setData('ProjectInsure_t', OtherContactTable);
      }
    },
    //保险主表保存
    insuranceFormConfirm: function () {
      //获取当前数据
      let url = '';
      let data = this.$refs.insuranceRef.comp.ProjectInsure;
      data.source_bill = this.source_bill;
      if (data.pk_prj_insure) {
        url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/ins/update';
      } else {
        url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/ins/create';
      }
      //保存校验
      this.$refs.insuranceRef.comp.$refs['projectInsure-form'].validate(valid => {
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
              this.requestInsurance();
              this.$refs['insuranceRef'].comp.formShow = false;
            } else {
              this.$message({
                message: res.data.message,
                type: 'error'
              });
            }
          }).catch(() => {
            this.$message({
              message: '更新失败',
              type: 'error'
            });
          });
        }
      });
    },
    //保险行编辑
    insuranceFormedit: function (scope) {
      //记录删除位置
      this.rmoveindex = scope.$index;
      //行下展开表单界面
      let row = scope.row;
      this.$refs['insuranceRef'].getTableComp().expandRow(row);
      this.$refs['insuranceRef'].comp.formShow = false;
      //ProjectInsure为表单数据对象参数
      this.$refs['insuranceRef'].setData('ProjectInsure', row);

      // 备份数据
      this.baseData = JSON.parse(JSON.stringify(scope.row));
      this.baseEditIndex = scope.$index;
    },
    // 保险删除提示
    insuranceFormdelete: function (scope) {
      this.insuranceDelVisible = true;
      this.delId = scope.row.pk_prj_insure;
    },
    // 保险删除方法
    insuranceDeleteClick() {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/ins/deleteById',
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
          this.requestInsurance();
        } else {
          this.$message({
            message: res.data.message,
            type: 'error'
          });
        }
      }).catch(e => {
        this.$message({
          message: '信息删除失败！',
          type: 'error'
        });
      });
      this.insuranceDelVisible = false;
      this.delId = '';
    }
  }
});

/***/ })

/******/ })});;
//# sourceMappingURL=projectApproval-card.vue.c65cd7af326f45337368.en.js.map