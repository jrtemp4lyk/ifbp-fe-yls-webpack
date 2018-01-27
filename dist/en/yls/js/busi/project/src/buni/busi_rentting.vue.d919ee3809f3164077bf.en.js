define("yls//busi/project/src/buni/busi_rentting.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
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
/* 2 */
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
/* 3 */,
/* 4 */
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
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
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
/* 11 */,
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */,
/* 14 */
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

/***/ })
/******/ ])});;
//# sourceMappingURL=busi_rentting.vue.d919ee3809f3164077bf.en.js.map