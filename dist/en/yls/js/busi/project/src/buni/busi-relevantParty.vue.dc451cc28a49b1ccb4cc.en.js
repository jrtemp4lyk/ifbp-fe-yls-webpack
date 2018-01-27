define("yls//busi/project/src/buni/busi-relevantParty.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

/***/ 21:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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


/***/ })

/******/ })});;
//# sourceMappingURL=busi-relevantParty.vue.dc451cc28a49b1ccb4cc.en.js.map