define("yls//busi/project/src/buni/busi_person_apply.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 380);
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

/***/ 15:
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
  props: ["pk_prjId", "type", "invisible"],
  data() {
    var oThis = this;
    //校验 合同相关方
    var validateItem = function (rule, value, callback) {
      //相关方类型 非空校验
      var formObj = oThis.$refs.busirelevantPartyRef.getFormData();
      if (formObj.pk_relevant_party === null) {

        if (rule.field == 'linkman_name') {
          if (value === '') {
            callback(new Error('联系人不能为空! '));
          } else {

            oThis.$http({
              url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/relevantParty/selectByConditions',
              hearders: { 'Content-Type': 'application/json' },
              method: 'post',
              data: JSON.parse(JSON.stringify(formObj))
            }).then(res => {
              if (res.data.success === true) {
                if (res.data.data === true) {
                  callback();
                } else {

                  oThis.$message({
                    message: "已存在此条信息记录",
                    type: "error"
                  });
                }
              } else {
                callback(new Error(res.data.error.errorMessage));
              }
            }).catch(() => {
              callback(new Error("后台服务有误，请联系管理员！"));
            });
          }
        }
      } else {

        callback();
      }
    };
    return {
      scrollDom: document.getElementsByClassName("view")[0],
      relevantPartyDelVisible: false,
      rmoveindex: "",
      delId: "",
      back_object: "",
      //合同相关方
      relevantPartyIcons: [{
        icon: "plus",
        click: function () {

          if (oThis.pk_prjId === "") {
            oThis.$message({
              message: "未获取到项目",
              type: "error"
            });
            return;
          }
          var uitemplateComp = oThis.$refs.busirelevantPartyRef.comp;
          var table = uitemplateComp.$refs["ApplyRelevantParty_t_ref"];
          table.closeExpandRow();
          uitemplateComp.formShow = true;
          //初始化值
          oThis.$refs.busirelevantPartyRef.setData("ApplyRelevantParty", {
            // mobile:'13'
          });
          oThis.rmoveindex = "";
          uitemplateComp.$refs["ApplyRelevantParty_ref"].resetFields();
        }
      }],
      funnode: "BT008",
      nexuskey: oThis.type === "prj" ? "relevantParty_busi_apply" : "relevantParty_busi_apply",
      busirelevantPartyData: {
        rules: {
          linkman_name: [{ validator: validateItem, trigger: 'blur' }]
        },
        linkmanSel: {},
        nameSel: {}
      },
      //渲染表格
      relevantPartyResetFun: function ($node) {
        if (oThis.invisible) {
          return;
        }

        var $refType = $node.find("el-select[v-model='ApplyRelevantParty.rp_type']"); //相关方类型


        if ($refType.length) {
          $refType.attr("v-on:change", "typeRefChange");
        }
        var $refNode = $node.find("el-ref[v-model='ApplyRelevantParty.rp_name']"); //相关方名称

        if ($refNode.length) {
          debugger;
          $refNode.attr("v-on:trigger", "handleRefChange");
        }

        var $refLinkman = $node.find("el-ref[v-model='ApplyRelevantParty.linkman_name']"); //相关方联系人


        if ($refLinkman.length) {
          $refLinkman.attr("v-on:trigger", "linkmanRefChange");
        }

        // var $table = this.getNodeById($node, "ekpkytxzio9");
        var $table = $node.find("el-table");
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
      t_Methods: {
        typeRefChange: function (type, data) {

          var cusotmer_class = '';
          if (type === 'Lessee') {
            cusotmer_class = 'yls_dev100000000ffn';
          } else if (type === 'Guarantee') {
            cusotmer_class = 'yls_dev100000000ffr';
          } else if (type === 'Manufacturer') {
            cusotmer_class = 'yls_dev100000000fft';
          } else if (type === 'Agent') {
            cusotmer_class = 'yls_dev100000000ffv';
          }
          // var param = {"cusotmer_class":cusotmer_class};
          // oThis.$refs.busirelevantPartyRef.setData('nameSel',param);
          // oThis.$nextTick(() => {

          oThis.$refs.busirelevantPartyRef.setData('nameSel', { "cusotmer_class": cusotmer_class });
          // });
        },
        handleRefChange: function (type, data) {
          if (type === 'change') {
            var param = { 'pk_customer': data.value[0].id };
            oThis.$refs.busirelevantPartyRef.setData('linkmanSel', param);
          }
        },
        linkmanRefChange: function (type, data) {
          //参照变化处理函数 依据参照给 电话地址赋值
          if (type === 'change') {
            this.$refs['ApplyRelevantParty_ref'].model.linkman_phone = data.value[0].mobile;
            this.$refs['ApplyRelevantParty_ref'].model.linkman_add = data.value[0].office_addr_details;
          }
        }
      }
    };
  },
  //监听引用传参后实时变动
  computed: {
    currentpk_prjId() {
      return this.pk_prjId;
    }
  },
  //监听参数变动后方法
  watch: {
    pk_prjId(val) {
      this.requestPrjrelevantParty();
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
      if (this.pk_prjId != "") {
        this.requestPrjrelevantParty();
      }
    },
    //请求业务合同相关方
    requestPrjrelevantParty() {
      var url;
      url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "prj/relevantParty/page";
      var data = {
        "orderList": [{
          "direction": "desc",
          "property": "source_bill"
        }],
        pageNum: 0,
        pageSize: 0,
        searchParams: {
          searchMap: {
            custCondList: [{
              'key': 'source_bill',
              'oper': '=',
              'value': this.pk_prjId
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
        console.log();
        this.originalValue = res.data.data.content;
        console.log(this.originalValue);
        this.$refs["busirelevantPartyRef"].setData("ApplyRelevantParty_t", JSON.parse(JSON.stringify(this.originalValue)));
      }).catch(() => {
        this.$message({
          message: "相关方信息获取失败",
          type: "error"
        });
      });
    },
    //合同相关方取消按钮
    relevantPartyFormCancel: function (type) {
      this.rmoveindex = "";
      //关闭表单或者是下拉显示行
      if (type === "form") {
        this.$refs["busirelevantPartyRef"].comp.formShow = false;
      } else {
        this.$refs["busirelevantPartyRef"].getTableComp().closeExpandRow();
        var releBakData = this.$refs.busirelevantPartyRef.getData("ApplyRelevantParty_t");
        releBakData[this.releEditBakIndex] = this.back_object;
        this.$refs.busirelevantPartyRef.setData("ApplyRelevantParty_t", releBakData);
      }
    },
    //合同相关方主表保存
    relevantPartyFormConfirm: function () {
      //获取当前数据
      let url = "";
      var data = this.$refs.busirelevantPartyRef.comp.ApplyRelevantParty;
      data.source_bill = this.pk_prjId;

      if (data.pk_relevant_party) {
        url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/relevantParty/update';
      } else {
        url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/relevantParty/create';
      }
      //保存校验
      this.$refs.busirelevantPartyRef.comp.$refs["ApplyRelevantParty_ref"].validate(valid => {
        if (valid) {

          this.$http({
            url: url,
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
              let linarraydata = this.$refs.busirelevantPartyRef.getData("ApplyRelevantParty_t");
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
              this.$refs.busirelevantPartyRef.setData("ApplyRelevantParty_t", JSON.parse(JSON.stringify(linarraydata)));
              this.$refs["busirelevantPartyRef"].comp.formShow = false;
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
    //合同相关方行编辑
    relevantPartyFormedit: function (scope) {
      //记录删除位置
      this.rmoveindex = scope.$index;
      //行下展开表单界面
      var row = scope.row;
      this.$refs["busirelevantPartyRef"].getTableComp().expandRow(row);
      this.$refs["busirelevantPartyRef"].comp.formShow = false;
      //ApplyRelevantParty为表单数据对象参数
      this.$refs["busirelevantPartyRef"].setData("ApplyRelevantParty", row);
      this.back_object = JSON.parse(JSON.stringify(row));
      this.releEditBakIndex = scope.$index;
    },
    // 合同相关方删除提示
    relevantPartyFormdelete: function (scope) {
      this.relevantPartyDelVisible = true;
      this.delId = scope.row.pk_relevant_party;
    },
    // 合同相关方删除方法
    relevantPartyDeleteClick() {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "prj/relevantParty/deleteById",
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
          this.requestPrjrelevantParty();
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
      this.relevantPartyDelVisible = false;
      this.delId = "";
    }
  }
});

/***/ }),

/***/ 16:
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
  props: ['pk_customer', 'source_bill', 'invisible'],
  data() {
    let oThis = this;
    return {
      custpledgeDelVisible: false,
      rmoveindex: '',
      delId: '',
      aaa: '',
      bbb: '',
      funnode: 'BT008',
      nexusKey: 'custpledge',
      custpledgeData: {
        rules: {
          identity_no: [{ required: true, message: '证件号码不能为空!', trigger: 'blur' }],
          identity_type: [{ required: true, message: '证件类型不能为空!', trigger: 'change' }]
        },
        testOptionsVar: []
      },
      t_Methods: {
        querySearchAsync(queryStr, callback) {
          if (queryStr != oThis.aaa && oThis.aaa != '') {
            this.$refs['CustPledge-form'].model.phone = '';
            oThis.aaa = '';
          }
          oThis.arr = [//及时查询处理的下拉arr
          { "value": "北京", "address": "11111" }, { "value": "北京月饼", "address": "22222" }, { "value": "麻辣烫", "address": "广州" }, { "value": "炸鸡", "address": "上海市" }];
          callback(oThis.arr);
        },
        handleSelect(item) {
          oThis.aaa = item.value;
          this.$refs['CustPledge-form'].model.phone = item.address;
        }
      },
      //重写dom
      custpledgeResetFun($node) {
        if (oThis.invisible) {
          return;
        }
        let $refNode = this.getNodeById($node, 'd6ivnfpjhb'); //获取担保人
        let $refNodeParent = $refNode.parent();
        $refNode.remove();
        $refNodeParent.append('<el-autocomplete v-model="CustPledge.pk_customer" :fetch-suggestions="querySearchAsync" placeholder="请输入内容" @select="handleSelect"></el-autocomplete>');
        let $table = $node.find("el-table");
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
      custpledgeTplMethods: {
        // form的保存操作
      }
    };
  },
  //获取数据数据初始化操作
  created() {},
  //页面操作
  mounted() {
    this.request();
  },
  methods: {
    //请求方法
    request() {
      if (this.source_bill != '') {
        this.requestCustpledge();
      }
    },
    closeAddForm() {
      this.$refs['custpledgeRef'].comp.formShow = false; //关闭添加表单事件
    },
    //请求保证担保信息
    requestCustpledge() {
      let data = {
        pageNum: 0,
        pageSize: 10,
        searchParams: {
          searchMap: {
            custCondList: [{ key: "source_bill", oper: "=", value: this.source_bill }]
          }
        }
      };
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/pledge/page',
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        data,
        dataType: 'json'
      }).then(res => {
        this.originalValue = res.data.data.content;
        this.$refs['custpledgeRef'].setData('CustPledge_t', JSON.parse(JSON.stringify(this.originalValue)));
      }).catch(() => {
        this.$message({
          message: '信息获取失败',
          type: 'error'
        });
      });
    },
    //保证担保情况保存
    custpledgeFormConfirm(type) {
      this.$refs.custpledgeRef.validate(valid => {
        if (valid) {
          //获取当前数据
          let url;
          let data = this.$refs.custpledgeRef.comp.CustPledge;
          if (data.pk_prj_cust_pledge) {
            url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/pledge/update';
          } else {
            url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/pledge/create';
          }
          data.source_bill = this.source_bill;
          this.$http({
            url, //添加接口或修改接口
            headers: { 'Content-Type': 'application/json' },
            method: 'post',
            data: JSON.parse(JSON.stringify(data))
          }).then(res => {
            if (res.data.success === true) {
              this.$message({
                message: '保存成功！',
                type: 'success'
              });
              this.originalValue = res.data.data;
              console.log(res.data.data);
              //获取列表数组（根据表格数据对象参数获取相应的数组或对象）
              let linarraydata = this.$refs.custpledgeRef.getData('CustPledge_t');
              /**@augments 移除位置 
               * @augments 移除个数
               * @augments 用新的对象替换（不传值则删除）
               */
              if (this.rmoveindex !== '') {
                linarraydata.splice(this.rmoveindex, 1, this.originalValue);
              } else {
                //加入数组开始
                linarraydata.unshift(this.originalValue);
              }
              //给对象赋值
              this.$refs.custpledgeRef.setData('CustPledge_t', JSON.parse(JSON.stringify(linarraydata)));
              //隐藏详情列表
              this.$refs['custpledgeRef'].comp.formShow = false;
              this.$emit("closeAddForm"); //触发父组件事件 让父组件关闭其他子组件添加表单
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
        } else {
          this.$message('校验未通过');
        }
      }, type);
    },
    // 保证担保信息form的取消操作
    custpledgeFormCancel(type) {
      if (type === 'form') {
        this.$refs['custpledgeRef'].comp.formShow = false;
        this.$emit("closeAddForm");
      } else {
        this.$refs['custpledgeRef'].getTableComp().closeExpandRow();
        //填充备份值
        let CustplTable = this.$refs['custpledgeRef'].getData('CustPledge_t');
        CustplTable[this.baseEditIndex] = this.baseData;
        this.$refs['custpledgeRef'].setData('CustPledge_t', CustplTable);
      }
    },
    //担保编辑
    custpledgeEditTableRow(scope) {
      //记录删除位置
      this.rmoveindex = scope.$index;
      //行下展开表单界面
      let row = scope.row;
      this.$refs['custpledgeRef'].getTableComp().expandRow(row);
      this.$refs['custpledgeRef'].comp.formShow = false;
      //custpledgeRef为表单数据对象参数
      this.$refs['custpledgeRef'].setData('CustPledge', row);
      this.aaa = this.$refs['custpledgeRef'].getFormData().pk_customer;
      // 备份数据
      this.baseData = JSON.parse(JSON.stringify(scope.row));
      this.baseEditIndex = scope.$index;
    },
    //担保信息删除提示
    custpledgeDeleteTableRow(scope) {
      this.custpledgeDelVisible = true;
      this.delId = scope.row.pk_prj_cust_pledge;
    },
    //担保信息删除
    custpledgeDeleteClick() {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/pledge/deleteById',
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
          this.requestCustpledge();
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
      this.custpledgeDelVisible = false;
      this.delId = '';
    }
  }
});

/***/ }),

/***/ 17:
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
  props: ['pk_customer', 'source_bill', 'invisible'],
  data() {
    let oThis = this;
    let validator = function (rule, value, callback) {};
    return {
      mortgageDelVisible: false,
      rmoveindex: '',
      delId: '',
      funnode: 'BT008',
      nexusKey: 'mortgage_busi_apply',
      mortgageData: {},
      mortgageResetFun: function ($node) {
        if (oThis.invisible) {
          return;
        }

        let $table = $node.find("el-table");
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
      mortgageTplMethods: {
        // form的保存操作
      }
    };
  },
  //获取数据数据初始化操作
  created() {},
  //页面操作
  mounted() {
    this.request();
  },
  methods: {
    //请求方法
    request() {
      if (this.source_bill != '') {
        this.requestMortgage();
      }
    },
    closeAddForm() {
      this.$refs['mortgageRef'].comp.formShow = false;
    },
    //请求抵押担保信息
    requestMortgage() {
      let data = {
        pageNum: 0,
        pageSize: 10,
        searchParams: {
          searchMap: {
            custCondList: [{ key: 'source_bill', oper: '=', value: this.source_bill }, { key: 'guarantee_type', oper: '=', value: 'COLLATERAL' }]
          }
        }
      };
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/mp/page',
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        data: data,
        dataType: 'json'
      }).then(res => {
        this.originalValue = res.data.data.content;
        this.$refs['mortgageRef'].setData('Mortgage_t', JSON.parse(JSON.stringify(this.originalValue)));
      }).catch(() => {
        this.$message({
          message: '信息获取失败',
          type: 'error'
        });
      });
    },
    //抵押担保情况保存
    mortgageFormConfirm() {
      //获取当前数据
      let url;
      let data = this.$refs.mortgageRef.comp.Mortgage;
      if (data.pk_mortgage_pledge) {
        url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/mp/update';
      } else {
        url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/mp/create';
      }
      data.source_bill = this.source_bill;
      data.guarantee_type = 'COLLATERAL'; //添加抵押担保区分字段（抵押质押在一个表）
      this.$http({
        url, //添加接口或修改接口
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        data: JSON.parse(JSON.stringify(data))
      }).then(res => {
        if (res.data.success === true) {
          this.$message({
            message: '保存成功！',
            type: 'success'
          });
          this.originalValue = res.data.data;
          //获取列表数组（根据表格数据对象参数获取相应的数组或对象）
          let linarraydata = this.$refs.mortgageRef.getData('Mortgage_t');
          /**@augments 移除位置 
           * @augments 移除个数
           * @augments 用新的对象替换（不传值则删除）
           */

          if (this.rmoveindex !== '') {
            linarraydata.splice(this.rmoveindex, 1, this.originalValue);
          } else {
            //加入数组开始
            linarraydata.unshift(this.originalValue);
          }
          //加入数组结尾
          // linarraydata.push(this.originalValue);
          //给对象赋值
          this.$refs.mortgageRef.setData('Mortgage_t', JSON.parse(JSON.stringify(linarraydata)));
          //隐藏详情列表
          this.$refs['mortgageRef'].comp.formShow = false;
          this.$emit("closeAddForm");
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
    },
    // 抵押担保信息form的取消操作
    mortgageFormCancel: function (type) {
      if (type === 'form') {
        this.$refs['mortgageRef'].comp.formShow = false;
        this.$emit("closeAddForm");
      } else {
        this.$refs['mortgageRef'].getTableComp().closeExpandRow();
      }
    },
    //抵押担保编辑
    mortgageEditTableRow: function (scope) {
      //记录删除位置
      this.rmoveindex = scope.$index;
      //行下展开表单界面
      let row = scope.row;
      this.$refs['mortgageRef'].getTableComp().expandRow(row);
      this.$refs['mortgageRef'].formShow = false;
      //mortgageRef为表单数据对象参数
      this.$refs['mortgageRef'].setData('Mortgage', row);
    },
    //抵押担保信息删除提示
    mortgageDeleteTableRow: function (scope) {
      this.mortgageDelVisible = true;
      this.delId = scope.row.pk_mortgage_pledge;
    },
    //抵押担保信息删除
    mortgageDeleteClick() {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/mp/deleteById',
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
          this.requestMortgage();
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
      this.mortgageDelVisible = false;
      this.delId = '';
    }
  }
});

/***/ }),

/***/ 18:
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
  props: ['pk_customer', 'source_bill', 'invisible'],
  data() {
    let oThis = this;
    let validator = function (rule, value, callback) {};
    return {
      pledgeDelVisible: false,
      rmoveindex: '',
      delId: '',
      funnode: 'BT008',
      nexusKey: 'pledge_busi_apply',
      pledgeData: {},
      pledgeResetFun: function ($node) {
        if (oThis.invisible) {
          return;
        }

        let $table = $node.find("el-table");
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
      pledgeTplMethods: {
        // form的保存操作
      }
    };
  },
  //获取数据数据初始化操作
  created() {},
  //页面操作
  mounted() {
    this.request();
  },
  methods: {
    //请求方法
    request() {
      if (this.source_bill != '') {
        this.requestPledge();
      }
    },
    closeAddForm() {
      this.$refs['pledgeRef'].comp.formShow = false;
    },
    //请求质押担保信息
    requestPledge() {
      let data = {
        pageNum: 0,
        pageSize: 10,
        searchParams: {
          searchMap: {
            //source_bill: this.source_bill,
            // guarantee_type:'PRENDA',
            custCondList: [{ key: 'source_bill', oper: '=', value: this.source_bill }, { key: 'guarantee_type', oper: '=', value: 'PRENDA' }]
          }
        }
      };
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/mp/page',
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        data: data,
        dataType: 'json'
      }).then(res => {
        this.originalValue = res.data.data.content;
        this.$refs['pledgeRef'].setData('Pledge_t', JSON.parse(JSON.stringify(this.originalValue)));
      }).catch(() => {
        this.$message({
          message: '信息获取失败',
          type: 'error'
        });
      });
    },
    //质押担保情况保存
    pledgeFormConfirm() {
      //获取当前数据
      let url;
      let data = this.$refs.pledgeRef.comp.Pledge;
      if (data.pk_mortgage_pledge) {
        url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/mp/update';
      } else {
        url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/mp/create';
      }
      data.source_bill = this.source_bill;
      data.guarantee_type = 'PRENDA';
      this.$http({
        url, //添加接口或修改接口
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        data: JSON.parse(JSON.stringify(data))
      }).then(res => {
        if (res.data.success === true) {

          this.$message({
            message: '保存成功！',
            type: 'success'
          });
          this.originalValue = res.data.data;
          //获取列表数组（根据表格数据对象参数获取相应的数组或对象）
          let linarraydata = this.$refs.pledgeRef.getData('Pledge_t');
          /**@augments 移除位置 
           * @augments 移除个数
           * @augments 用新的对象替换（不传值则删除）
           */

          if (this.rmoveindex !== '') {
            linarraydata.splice(this.rmoveindex, 1, this.originalValue);
          } else {
            //加入数组开始
            linarraydata.unshift(this.originalValue);
          }
          //加入数组结尾
          // linarraydata.push(this.originalValue);
          //给对象赋值
          this.$refs.pledgeRef.setData('Pledge_t', JSON.parse(JSON.stringify(linarraydata)));
          //隐藏详情列表
          this.$refs['pledgeRef'].comp.formShow = false;
          this.$emit("closeAddForm");
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
    },
    // 质押担保信息form的取消操作
    pledgeFormCancel: function (type) {
      if (type === 'form') {
        this.$refs['pledgeRef'].comp.formShow = false;
        this.$emit("closeAddForm");
      } else {
        this.$refs['pledgeRef'].getTableComp().closeExpandRow();
      }
    },
    //质押担保编辑
    pledgeEditTableRow: function (scope) {
      //记录删除位置
      this.rmoveindex = scope.$index;
      //行下展开表单界面
      let row = scope.row;
      this.$refs['pledgeRef'].getTableComp().expandRow(row);
      this.$refs['pledgeRef'].formShow = false;
      //pledgeRef为表单数据对象参数
      this.$refs['pledgeRef'].setData('Pledge', row);
    },
    //质押担保信息删除提示
    pledgeDeleteTableRow: function (scope) {
      this.pledgeDelVisible = true;
      this.delId = scope.row.pk_mortgage_pledge;
    },
    //质押担保信息删除
    pledgeDeleteClick() {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/mp/deleteById',
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
          this.requestPledge();
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
      this.pledgeDelVisible = false;
      this.delId = '';
    }
  }
});

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

/***/ 20:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__busi_application_vue__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__busi_application_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__busi_application_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__busi_person_vue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__busi_person_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__busi_person_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__busi_rentting_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__busi_rentting_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__busi_rentting_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__custpledge_custpledge_info_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__custpledge_custpledge_info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__custpledge_custpledge_info_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__custpledge_mortgage_info_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__custpledge_mortgage_info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__custpledge_mortgage_info_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__custpledge_pledge_info_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__custpledge_pledge_info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__custpledge_pledge_info_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__busi_insure_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__busi_insure_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__busi_insure_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__busi_relevantParty_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__busi_relevantParty_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__busi_relevantParty_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__busi_corp_linkman_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__busi_corp_linkman_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__busi_corp_linkman_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__busi_bank_account_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__busi_bank_account_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__busi_bank_account_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'applyRef': __WEBPACK_IMPORTED_MODULE_1__busi_application_vue___default.a,
    'CustCorpRef': __WEBPACK_IMPORTED_MODULE_2__busi_person_vue___default.a,
    'bankaccountRef': __WEBPACK_IMPORTED_MODULE_10__busi_bank_account_vue___default.a,
    'custlinkmanRef': __WEBPACK_IMPORTED_MODULE_9__busi_corp_linkman_vue___default.a,
    'busirenttingRef': __WEBPACK_IMPORTED_MODULE_3__busi_rentting_vue___default.a,
    'custpledgeRef': __WEBPACK_IMPORTED_MODULE_4__custpledge_custpledge_info_vue___default.a,
    'mortgageRef': __WEBPACK_IMPORTED_MODULE_5__custpledge_mortgage_info_vue___default.a,
    'pledgeRef': __WEBPACK_IMPORTED_MODULE_6__custpledge_pledge_info_vue___default.a,
    'insuranceRef': __WEBPACK_IMPORTED_MODULE_7__busi_insure_vue___default.a,
    'busirelevantPartyRef': __WEBPACK_IMPORTED_MODULE_8__busi_relevantParty_vue___default.a
  },
  props: ['pkCustomer', 'pkApplication'],
  data() {
    var oThis = this;
    return {
      //页面标题
      title: "",
      scrollDom: document.getElementsByClassName("view")[0],
      pk_customer: this.pkCustomer,
      pk_application: this.pkApplication,
      pledgeType: 'type0',
      applyIcons: [{
        icon: 'edit',
        click: function () {
          if (oThis.$refs.applyRef.applyEditable === false) {
            oThis.$refs.applyRef.applyEditable = true;
          } else {
            oThis.$refs.applyRef.applyCancel();
          }
        }
      }],
      custIcons: [{
        icon: "edit",
        click: function () {
          oThis.$refs.CustCorpRef.CustEdit = !oThis.$refs.CustCorpRef.CustEdit;
        }
      }],
      // 银行
      bankaccountIcons: [{
        icon: "plus",
        click: function () {
          if (oThis.pk_customer === "") {
            oThis.$message({
              message: "请先保存基本信息",
              type: "error"
            });
            return;
          }

          oThis.$refs.bankaccountRef.$refs.bankaccountRef.getTableComp().closeExpandRow();
          // 重置新增数据
          oThis.$refs.bankaccountRef.$refs.bankaccountRef.resetFormData();
          // 显示新增区域
          oThis.$refs.bankaccountRef.$refs.bankaccountRef.comp.formShow = true;
        }
      }],
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
          var uitemplateComp = oThis.$refs.custlinkmanRef.$refs.custlinkmanRef.comp;
          var table = uitemplateComp.$refs["OtherContact_t_ref"];
          table.closeExpandRow();
          uitemplateComp.formShow = true;
          //初始化值
          oThis.$refs.custlinkmanRef.$refs.custlinkmanRef.setData("OtherContact", {
            // mobile:'13'
          });
          oThis.rmoveindex = "";
          uitemplateComp.$refs["OtherContact_ref"].resetFields();
        }
      }],
      // 租赁物
      rentTingIcons: [{
        icon: "plus",
        click: function () {
          if (oThis.pk_prjId === "") {
            oThis.$message({
              message: "请先保存基本信息",
              type: "error"
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
      // 合同相关方
      relevantPartyIcons: [{
        icon: "plus",
        click: function () {
          if (oThis.pk_prjId === "") {
            oThis.$message({
              message: "请先保存基本信息",
              type: "error"
            });
            return;
          }
          oThis.$refs.busirelevantPartyRef.$refs.busirelevantPartyRef.getTableComp().closeExpandRow();
          // 重置新增数据
          oThis.$refs.busirelevantPartyRef.$refs.busirelevantPartyRef.resetFormData();
          // 显示新增区域
          oThis.$refs.busirelevantPartyRef.$refs.busirelevantPartyRef.comp.formShow = true;
        }
      }],
      //担保信息
      pledgeIcons: [{
        icon: 'plus',
        click() {
          if (oThis.pk_customer === '') {
            oThis.$message({
              message: '请先保存基本信息',
              type: 'error'
            });
            return;
          }
          //显示担保添加
          oThis.$refs.custpledgeRef.$refs.custpledgeRef.getTableComp().closeExpandRow();
          oThis.$refs.custpledgeRef.$refs.custpledgeRef.resetFormData();
          oThis.$refs.custpledgeRef.$refs.custpledgeRef.comp.formShow = true;
          //显示抵押添加
          oThis.$refs.mortgageRef.$refs.mortgageRef.getTableComp().closeExpandRow();
          oThis.$refs.mortgageRef.$refs.mortgageRef.resetFormData();
          oThis.$refs.mortgageRef.$refs.mortgageRef.comp.formShow = true;
          //显示质押添加
          oThis.$refs.pledgeRef.$refs.pledgeRef.getTableComp().closeExpandRow();
          oThis.$refs.pledgeRef.$refs.pledgeRef.resetFormData();
          oThis.$refs.pledgeRef.$refs.pledgeRef.comp.formShow = true;
        }
      }],
      // 保险
      insuranceIcons: [{
        icon: "plus",
        click: function () {
          if (oThis.pk_prjId === "") {
            oThis.$message({
              message: "请先保存基本信息",
              type: "error"
            });
            return;
          }

          oThis.$refs.insuranceRef.$refs.insuranceRef.getTableComp().closeExpandRow();
          // 重置新增数据
          oThis.$refs.insuranceRef.$refs.insuranceRef.resetFormData();
          // 显示新增区域
          oThis.$refs.insuranceRef.$refs.insuranceRef.comp.formShow = true;
        }
      }]
    };
  },
  mounted() {
    this.request();
  },
  methods: {

    // 信息初始化
    request() {
      //请求客户基本信息详情
      var method = this.$root.$router.currentRoute.path;
      console.log(this.pk_customer);
      if (method != "/Agent/detail-add") {

        if (this.pk_customer != "") {
          this.requestCustBaseInfo();
        }
      }
    },
    closeAddFormEev() {
      this.$refs.mortgageRef.closeAddForm();
      this.$refs.pledgeRef.closeAddForm();
      this.$refs.custpledgeRef.closeAddForm();
    },
    //回退到客户基本信息页面
    goBack() {
      this.$emit('change-person-card', 'toapplycustomerlist');
    },
    //提交到已申请
    clickSave() {

      var pk_application = this.pkApplication;
      var url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/apply/updateapply';
      var data = {
        "pk_application": pk_application
      };
      this.$http({
        url: url,
        headers: { 'Content-Type': 'application/json' },
        method: "post",
        data: JSON.parse(JSON.stringify(data))
      }).then(res => {
        if (res.data.success === true) {

          this.$message({
            message: "操作成功！",
            type: "success"
          });
          this.$emit('change-person-card', 'toapplied');
          this.inoutTypeFormEdit = false;
        } else {
          this.$message({
            message: res.data.message,
            type: "error"
          });
        }
      }).catch(() => {
        this.$message({
          message: "操作失败",
          type: "error"
        });
      });
    },
    // 请求客户基本信息详情
    requestCustBaseInfo() {
      // 
    }
  }
});

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "mortgageRef",
    attrs: {
      "tplId": "mortgageTemplate",
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexusKey,
      "tplData": _vm.mortgageData,
      "tplResetFun": _vm.mortgageResetFun,
      "tplMethods": _vm.mortgageTplMethods,
      "show-type": "table-form"
    },
    on: {
      "form-confirm-click": _vm.mortgageFormConfirm,
      "form-cancel-click": _vm.mortgageFormCancel,
      "edit-table-click": _vm.mortgageEditTableRow,
      "delete-table-click": _vm.mortgageDeleteTableRow
    }
  }), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    model: {
      value: (_vm.mortgageDelVisible),
      callback: function($$v) {
        _vm.mortgageDelVisible = $$v
      },
      expression: "mortgageDelVisible"
    }
  }, [_c('span', [_vm._v("确认删除该条记录 ？删除后无法恢复。")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.mortgageDelVisible = false, this.delId = ''
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.mortgageDeleteClick
    }
  }, [_vm._v("确 定")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "pledgeRef",
    attrs: {
      "tplId": "pledgeTemplate",
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexusKey,
      "tplData": _vm.pledgeData,
      "tplResetFun": _vm.pledgeResetFun,
      "tplMethods": _vm.pledgeTplMethods,
      "show-type": "table-form"
    },
    on: {
      "form-confirm-click": _vm.pledgeFormConfirm,
      "form-cancel-click": _vm.pledgeFormCancel,
      "edit-table-click": _vm.pledgeEditTableRow,
      "delete-table-click": _vm.pledgeDeleteTableRow
    }
  }), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    model: {
      value: (_vm.pledgeDelVisible),
      callback: function($$v) {
        _vm.pledgeDelVisible = $$v
      },
      expression: "pledgeDelVisible"
    }
  }, [_c('span', [_vm._v("确认删除该条记录 ？删除后无法恢复。")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.pledgeDelVisible = false, this.delId = ''
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.pledgeDeleteClick
    }
  }, [_vm._v("确 定")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "busirelevantPartyRef",
    attrs: {
      "tplId": "busirelevantParty",
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexuskey,
      "tplData": _vm.busirelevantPartyData,
      "tplResetFun": _vm.relevantPartyResetFun,
      "show-type": "table-form",
      "methods": _vm.t_Methods
    },
    on: {
      "form-confirm-click": _vm.relevantPartyFormConfirm,
      "form-cancel-click": _vm.relevantPartyFormCancel,
      "edit-table-click": _vm.relevantPartyFormedit,
      "delete-table-click": _vm.relevantPartyFormdelete
    }
  }), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    model: {
      value: (_vm.relevantPartyDelVisible),
      callback: function($$v) {
        _vm.relevantPartyDelVisible = $$v
      },
      expression: "relevantPartyDelVisible"
    }
  }, [_c('span', [_vm._v("确认删除该条记录？删除后无法恢复。")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.relevantPartyDelVisible = false, this.delId = ''
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.relevantPartyDeleteClick
    }
  }, [_vm._v("确 定")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "custpledgeRef",
    attrs: {
      "tplId": "custpledgeTemplate",
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexusKey,
      "tplData": _vm.custpledgeData,
      "tplResetFun": _vm.custpledgeResetFun,
      "tplMethods": _vm.custpledgeTplMethods,
      "methods": _vm.t_Methods,
      "show-type": "table-form"
    },
    on: {
      "form-confirm-click": _vm.custpledgeFormConfirm,
      "form-cancel-click": _vm.custpledgeFormCancel,
      "edit-table-click": _vm.custpledgeEditTableRow,
      "delete-table-click": _vm.custpledgeDeleteTableRow
    }
  }), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    model: {
      value: (_vm.custpledgeDelVisible),
      callback: function($$v) {
        _vm.custpledgeDelVisible = $$v
      },
      expression: "custpledgeDelVisible"
    }
  }, [_c('span', [_vm._v("确认删除该条记录 ？删除后无法恢复。")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.custpledgeDelVisible = false, this.delId = ''
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.custpledgeDeleteClick
    }
  }, [_vm._v("确 定")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(31)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(29),
  /* template */
  __webpack_require__(33),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 270:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(32)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(30),
  /* template */
  __webpack_require__(34),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 29:
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
  props: ["pk_customer", "invisible"],
  data() {
    let oThis = this;
    let validator = function (rule, value, callback) {};

    let validatecustomer = function (rule, value, callback) {

      //银行账户唯一校验
      if (rule.field === "account_no") {
        if (value === "") {
          callback(new Error("银行账户不能为空"));
        } else {
          let datam = {
            account_no: value,
            pk_customer: oThis.pk_customer
          };
          oThis.$http({
            url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/BankAccount/checkOnlyOne",
            headers: { "Content-Type": "application/json" },
            method: "post",
            data: JSON.parse(JSON.stringify(datam))
          }).then(res => {
            if (res.data.success === true) {
              callback();
            } else {
              callback(new Error("客户银行卡号重复"));
            }
          }).catch(() => {
            callback(new Error("后台服务有误，请联系管理员！"));
          });
        }
      }
    };
    return {
      bankaccountDelVisible: false,
      rmoveindex: "",
      delId: "",
      // 银行账户信息新增
      bankaccountIcons: [{
        icon: "plus",
        click: function () {
          if (oThis.pk_customer === "") {
            oThis.$message({
              message: "请先保存基本信息",
              type: "error"
            });
            return;
          }
          let uitemplateComp = oThis.$refs.bankaccountRef.comp;
          let table = uitemplateComp.$refs["bankaccount_t_ref"];
          table.closeExpandRow();
          uitemplateComp.bankaccount = {};
          uitemplateComp.formShow = true;
          oThis.rmoveindex = "";
        }
      }],
      funnode: "BT003",
      nexuskey: "bank_busi_apply",
      bankaccountData: {
        rules: {
          account_no: [{ validator: validatecustomer, trigger: "blur" }],
          is_withhold: [{ required: true, message: "是否银行代扣不能为空", trigger: "blur" }]
        }
      },
      bankaccountResetFun: function ($node) {
        if (oThis.invisible) {
          return;
        }

        let $table = this.getNodeById($node, "cncsdcy7yfp");
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
      bankaccountTplMethods: {
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
      this.requestbankaccount();
    }
  },
  //页面操作
  mounted() {

    this.request();
  },
  methods: {

    /**
       *   初始响应方法
       **/
    request() {
      if (this.pk_customer != "") {
        this.requestbankaccount();
      }
    },
    //请求银行账户信息
    requestbankaccount() {
      let url;
      url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/BankAccount/page";
      let data = {
        pageNum: 0,
        pageSize: 0,
        searchParams: {
          searchMap: {
            custCondList: [{ key: "pk_customer", oper: "=", value: this.pk_customer }]
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
        this.$refs["bankaccountRef"].setData("BankAccount_t", JSON.parse(JSON.stringify(this.originalValue)));
      }).catch(() => {
        this.$message({
          message: "银行信息获取失败",
          type: "error"
        });
      });
    },
    //银行账户情况保存
    bankaccountFormConfirm: function () {
      //获取当前数据
      let data = this.$refs.bankaccountRef.comp.BankAccount;
      console.log(this.pk_customer);
      data.pk_customer = this.pk_customer;
      //保存校验
      this.$refs.bankaccountRef.comp.$refs["BankAccount_ref"].validate(valid => {
        if (valid) {
          this.$http({
            url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/BankAccount/updateORinsert",
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
              let linarraydata = this.$refs.bankaccountRef.getData("BankAccount_t");
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
              this.$refs.bankaccountRef.setData("BankAccount_t", JSON.parse(JSON.stringify(linarraydata)));
              //隐藏详情列表
              this.$refs["bankaccountRef"].comp.formShow = false;
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
    // 银行账户信息form的取消操作
    bankaccountFormCancel: function (type) {
      if (type === "form") {
        this.$refs["bankaccountRef"].comp.formShow = false;
      } else {
        this.$refs["bankaccountRef"].getTableComp().closeExpandRow();
        let OtherContactTable = this.$refs.bankaccountRef.getData('BankAccount_t');
        OtherContactTable[this.baseEditIndex] = this.baseData;
        this.$refs.bankaccountRef.setData('BankAccount_t', OtherContactTable);
      }
    },
    //银行账户编辑
    bankaccountEditTableRow: function (scope) {
      //记录删除位置
      this.rmoveindex = scope.$index;
      //行下展开表单界面
      this.$refs.bankaccountRef.getTableComp().expandRow(scope.row);
      this.$refs.bankaccountRef.comp.formShow = false;
      this.$refs.bankaccountRef.setData('BankAccount', scope.row);

      // 备份数据
      this.baseData = JSON.parse(JSON.stringify(scope.row));
      this.baseEditIndex = scope.$index;
    },
    //银行账户信息删除提示
    bankaccountDeleteTableRow: function (scope) {
      this.bankaccountDelVisible = true;
      this.delId = scope.row.pk_cust_bankaccount;
    },
    //银行账户信息删除
    bankaccountDeleteClick() {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/BankAccount/deleteById",
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
          this.requestbankaccount();
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
      this.bankaccountDelVisible = false;
      this.delId = "";
    }
  }
});

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

/***/ 30:
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
  props: ["pk_customer", "invisible"],
  data() {
    var oThis = this;
    //校验
    var validatecustomer = function (rule, value, callback) {
      //证件号码唯一校验
      if (rule.field === "identity_no") {
        if (value === "") {
          callback(new Error("证件号不能为空"));
        } else {
          var datam = {
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
          var uitemplateComp = oThis.$refs.custlinkmanRef.comp;
          var table = uitemplateComp.$refs["OtherContact_t_ref"];
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
      funnode: "BT003",
      nexuskey: "linkman_busi_apply",
      custlinkmanData: {
        rules: {
          customer_name: [{ required: true, message: "请输入联系人名称", trigger: "blur" }]
        }
      },
      //渲染表格
      linkmanResetFun: function ($node) {
        if (oThis.invisible) {
          return;
        }

        var $table = this.getNodeById($node, "8xacfbstef6");
        //  $table.attr(':show-header','false');
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
      var url;
      url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/otherContact/page";
      var data = {
        pageNum: 0,
        pageSize: 0,
        searchParams: {
          searchMap: {
            custCondList: [{ key: "pk_customer", oper: "=", value: this.pk_customer }]
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
        this.$refs["custlinkmanRef"].setData("OtherContact_t", JSON.parse(JSON.stringify(this.originalValue)));
      }).catch(() => {
        this.$message({
          message: "信息获取失败",
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
        this.$refs["custlinkmanRef"].getTableComp().closeExpandRow();

        let OtherContactTable = this.$refs.custlinkmanRef.getData('OtherContact_t');
        OtherContactTable[this.baseEditIndex] = this.baseData;
        this.$refs.custlinkmanRef.setData('OtherContact_t', OtherContactTable);
      }
    },
    //联系人主表保存
    linkmanFormConfirm: function () {
      //获取当前数据
      var data = this.$refs.custlinkmanRef.comp.OtherContact;
      data.pk_customer = this.pk_customer;
      //保存校验
      this.$refs.custlinkmanRef.comp.$refs["OtherContact_ref"].validate(valid => {
        if (valid) {
          this.$http({
            url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/otherContact/updateORinsert",
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
              var linarraydata = this.$refs.custlinkmanRef.getData("OtherContact_t");
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
      var row = scope.row;
      this.$refs["custlinkmanRef"].getTableComp().expandRow(row);
      this.$refs["custlinkmanRef"].formShow = false;
      //OtherContact为表单数据对象参数
      this.$refs["custlinkmanRef"].setData("OtherContact", row);

      // 备份数据
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

/***/ 31:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 320:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-panel"
  }, [_c('div', {
    staticClass: "operator-container"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "fr"
  }, [_c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "default"
    },
    on: {
      "click": _vm.goBack
    }
  }, [_vm._v(" 回 退 ")]), _vm._v(" "), _c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.clickSave
    }
  }, [_vm._v(" 提 交")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "detail-main-container clearfix"
  }, [_c('ifbp-panel-group', {
    attrs: {
      "navbar": true,
      "base-scroll-top": 50,
      "scroll-dom": _vm.scrollDom,
      "base-nav-bar-top": 206
    }
  }, [_c('ifbp-panel', {
    attrs: {
      "id": "applyInfo",
      "title": "业务申请基本信息",
      "icons": _vm.applyIcons
    }
  }, [_c('applyRef', {
    ref: "applyRef",
    attrs: {
      "pk_application": _vm.pk_application
    }
  })], 1), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "custInfo",
      "title": "客户信息",
      "icons": _vm.custIcons
    }
  }, [_c('CustCorpRef', {
    ref: "CustCorpRef",
    attrs: {
      "pk_customer": _vm.pk_customer
    }
  })], 1), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "bankaccount",
      "title": "银行账户信息",
      "icons": _vm.bankaccountIcons
    }
  }, [_c('bankaccountRef', {
    ref: "bankaccountRef",
    attrs: {
      "pk_customer": _vm.pk_customer
    }
  })], 1), _vm._v(" "), _c('ifbp-panel', {
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
      "id": "busirenttingRef",
      "title": "租赁物",
      "icons": _vm.rentTingIcons
    }
  }, [_c('busirenttingRef', {
    ref: "busirenttingRef",
    attrs: {
      "pk_prjId": _vm.pk_application,
      "type": 'apply'
    }
  })], 1), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "pledgePanel",
      "title": "担保信息",
      "icons": _vm.pledgeIcons
    }
  }, [_c('el-radio-group', {
    staticStyle: {
      "width": "265px",
      "margin": "0 auto 20px",
      "display": "block"
    },
    model: {
      value: (_vm.pledgeType),
      callback: function($$v) {
        _vm.pledgeType = $$v
      },
      expression: "pledgeType"
    }
  }, [_c('el-radio-button', {
    attrs: {
      "label": "type0"
    }
  }, [_vm._v("保证担保")]), _vm._v(" "), _c('el-radio-button', {
    attrs: {
      "label": "type1"
    }
  }, [_vm._v("抵押担保")]), _vm._v(" "), _c('el-radio-button', {
    attrs: {
      "label": "type2"
    }
  }, [_vm._v("质押担保")])], 1), _vm._v(" "), _c('el-tabs', {
    staticClass: "pledge_header",
    model: {
      value: (_vm.pledgeType),
      callback: function($$v) {
        _vm.pledgeType = $$v
      },
      expression: "pledgeType"
    }
  }, [_c('el-tab-pane', {
    attrs: {
      "name": "type0"
    }
  }, [_c('custpledgeRef', {
    ref: "custpledgeRef",
    attrs: {
      "source_bill": _vm.pk_application
    },
    on: {
      "closeAddForm": _vm.closeAddFormEev
    }
  })], 1), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "name": "type1"
    }
  }, [_c('mortgageRef', {
    ref: "mortgageRef",
    attrs: {
      "source_bill": _vm.pk_application
    },
    on: {
      "closeAddForm": _vm.closeAddFormEev
    }
  })], 1), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "name": "type2"
    }
  }, [_c('pledgeRef', {
    ref: "pledgeRef",
    attrs: {
      "source_bill": _vm.pk_application
    },
    on: {
      "closeAddForm": _vm.closeAddFormEev
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "insuranceRef",
      "title": "保险信息",
      "icons": _vm.insuranceIcons
    }
  }, [_c('insuranceRef', {
    ref: "insuranceRef",
    attrs: {
      "source_bill": _vm.pk_application,
      "type": 'apply'
    }
  })], 1), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "busirelevantPartyRef",
      "title": "合同相关方",
      "icons": _vm.relevantPartyIcons
    }
  }, [_c('busirelevantPartyRef', {
    ref: "busirelevantPartyRef",
    attrs: {
      "pk_prjId": _vm.pk_application,
      "type": 'apply'
    }
  })], 1)], 1)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "fl"
  }, [_c('h3', {
    staticClass: "name"
  }, [_vm._v("放款进展表 > 发起申请")])])
}]}

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "bankaccountRef",
    attrs: {
      "tplId": "bankaccountTemplate",
      "funnode": _vm.funnode,
      "nexuskey": _vm.nexuskey,
      "tplData": _vm.bankaccountData,
      "tplResetFun": _vm.bankaccountResetFun,
      "tplMethods": _vm.bankaccountTplMethods,
      "show-type": "table-form"
    },
    on: {
      "form-confirm-click": _vm.bankaccountFormConfirm,
      "form-cancel-click": _vm.bankaccountFormCancel,
      "edit-table-click": _vm.bankaccountEditTableRow,
      "delete-table-click": _vm.bankaccountDeleteTableRow
    }
  }), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "modal": true,
      "size": "tiny"
    },
    model: {
      value: (_vm.bankaccountDelVisible),
      callback: function($$v) {
        _vm.bankaccountDelVisible = $$v
      },
      expression: "bankaccountDelVisible"
    }
  }, [_c('span', [_vm._v("确认删除该条记录 ？删除后无法恢复。")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.bankaccountDelVisible = false, this.delId = ''
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.bankaccountDeleteClick
    }
  }, [_vm._v("确 定")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 34:
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

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(270)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(229),
  /* template */
  __webpack_require__(320),
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

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(51),
  /* template */
  __webpack_require__(64),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(56)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(54),
  /* template */
  __webpack_require__(63),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(21)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(25),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 51:
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


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['pk_application'],
  data() {
    let oThis = this;
    return {
      // 固定写法
      scrollDom: document.getElementsByClassName("view")[0],
      // 表单是否可编辑
      applyEditable: false,
      // 模板元素start
      applyFunnode: 'BT008',
      applyNexuskey: 'application',
      applyData: {
        rules: {}
        // 模板元素end
      } };
  },
  mounted() {
    if (this.pk_customer !== '' && this.pk_application !== '') {
      this.loadData();
    } else {
      this.$message({
        message: '客户主键与业务申请逐渐传递为空' });
    }
  },
  methods: {
    // 加载初始数据
    loadData() {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/apply/getById',
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        data: this.pk_application
      }).then(res => {
        if (res.data.success === true) {
          let originalValue = res.data.data;
          console.log(originalValue);
          this.$refs.applyRef.setFormData(originalValue);

          // 备份数据
          this.copyForData = JSON.parse(JSON.stringify(originalValue));
        } else {
          this.$message({
            message: res.data.error.errorMessage,
            type: 'error'
          });
        }
      }).catch(e => {
        console.log(e);
        this.$message({
          message: '业务申请基本信息获取失败',
          type: 'error'
        });
      });
    },
    applyCancel() {
      this.applyEditable = false;
      debugger;
      // 加载备份的数据
      this.$refs.applyRef.setFormData(JSON.parse(JSON.stringify(this.copyForData)));
    },
    applyConfirm() {
      let datam = this.$refs.applyRef.getFormData();
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + 'prj/apply/update',
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        data: datam
      }).then(res => {
        if (res.data.success === true) {
          this.$message({
            message: '业务申请更新成功',
            type: 'success'
          });
          let originalValue = res.data.data;
          this.$refs.applyRef.setFormData(originalValue);
          this.applyEditable = false;
          // 备份数据
          this.copyForData = JSON.parse(JSON.stringify(originalValue));
        } else {
          this.$message({
            message: res.data.error.errorMessage,
            type: 'error'
          });
        }
      }).catch(e => {
        console.log(e);
        this.$message({
          message: '业务申请更新失败',
          type: 'error'
        });
      });
    }
  }
});

/***/ }),

/***/ 54:
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




/* harmony default export */ __webpack_exports__["default"] = ({
  //应用vue传过来接收参数
  props: ["pk_customer"],
  data() {
    let oThis = this;
    return {
      scrollDom: document.getElementsByClassName("view")[0],
      CustEdit: false,

      funnode: "BT003",
      CustBasicnexuskey: "cust_basic_busi_apply",
      CustBasicData: {
        custBasic_busi: {}
      },
      CustPknexuskey: "natural_busi_apply",
      CustData: {},

      CustCancel() {
        oThis.CustEdit = false;
        // 重置value
      },

      //客户基本信息保存
      CustConfirm() {
        let data = oThis.$refs.CustBasicRef.comp.customer;
        let data1 = oThis.$refs.CustRef.comp.CustCorp;
        let a = [data1];
        data.cust_corp_list = a;
        //表单formRef  表格tableRef
        oThis.$refs.CustBasicRef.comp.$refs["formRef"].validate(valid => {
          if (valid) {
            oThis.$http({
              url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/customer/create",
              headers: { "Content-Type": "application/json" },
              method: "post",
              data: JSON.parse(JSON.stringify(data))
            }).then(res => {
              if (res.data.success === true) {
                oThis.$message({
                  message: "保存成功",
                  type: "success"
                });
                oThis.originalValue = res.data.data;
                oThis.$refs.CustBasicRef.setData("customer", JSON.parse(JSON.stringify(oThis.originalValue)));
                oThis.pk_customer = oThis.originalValue.pk_person_customer;
                oThis.CustEdit = false;
              } else {
                oThis.$message({
                  message: "res.data.error.errorMessage",
                  type: "error"
                });
              }
            }).catch(() => {
              oThis.$message({
                message: "更新失败",
                type: "error"
              });
            });
          }
        });
      }
    };
  },
  //监听引用传参后实时变动
  computed: {
    currentpk_customer() {
      return this.pk_customer;
    }
  },
  //获取数据数据初始化操作
  created() {},
  //监听参数变动后方法
  watch: {
    pk_customer(val) {
      this.requestCustCorp();
    }
  },
  //页面操作
  mounted() {
    this.request();
  },
  methods: {
    /**
       *   初始响应方法
       **/
    request() {
      if (this.pk_customer != "") {
        this.requestCustCorp();
      }
    },
    //请求客户联系人
    requestCustCorp() {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "cust/customer/getById",
        headers: { 'Content-Type': 'application/json' },
        method: "post",
        data: this.pk_customer
      }).then(res => {
        let originalValue = res.data.data;
        console.log(originalValue);
        this.$refs.CustBasicRef.setData("customer", JSON.parse(JSON.stringify(originalValue)));
        this.$refs.CustRef.setData("CustPerson", JSON.parse(JSON.stringify(originalValue.cust_persion_list[0])));
      }).catch(e => {
        console.error(e);
        this.$message({
          message: "客户基本信息详情获取失败",
          type: "error"
        });
      });
    }
  }
});

/***/ }),

/***/ 56:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(22)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(16),
  /* template */
  __webpack_require__(26),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 63:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "CustBasicRef",
    attrs: {
      "tplId": "CustBasic",
      "funnode": _vm.funnode,
      "nexuskey": _vm.CustBasicnexuskey,
      "show-type": "form",
      "tplData": _vm.CustBasicData,
      "editable": _vm.CustEdit
    }
  }), _vm._v(" "), _c('ifbp-template', {
    ref: "CustRef",
    attrs: {
      "tplId": "CustBusi",
      "funnode": _vm.funnode,
      "nexuskey": _vm.CustPknexuskey,
      "show-type": "form",
      "tplData": _vm.CustData,
      "editable": _vm.CustEdit
    }
  }), _vm._v(" "), (_vm.CustEdit) ? _c('div', {
    staticClass: "form-button-div"
  }, [_c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "default"
    },
    on: {
      "click": _vm.CustCancel
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.CustConfirm
    }
  }, [_vm._v("保存")])], 1) : _vm._e()], 1)
},staticRenderFns: []}

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ifbp-template', {
    ref: "applyRef",
    attrs: {
      "tplId": "applyId",
      "funnode": _vm.applyFunnode,
      "nexuskey": _vm.applyNexuskey,
      "show-type": "form",
      "tplData": _vm.applyData,
      "editable": _vm.applyEditable
    }
  }), _vm._v(" "), (_vm.applyEditable) ? _c('div', {
    staticClass: "form-button-div"
  }, [_c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "default"
    },
    on: {
      "click": _vm.applyCancel
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.applyConfirm
    }
  }, [_vm._v("保存")])], 1) : _vm._e()], 1)
},staticRenderFns: []}

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(19)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(17),
  /* template */
  __webpack_require__(23),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(20)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(18),
  /* template */
  __webpack_require__(24),
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
//# sourceMappingURL=busi_person_apply.vue.207c43d863a4b4c906a6.en.js.map