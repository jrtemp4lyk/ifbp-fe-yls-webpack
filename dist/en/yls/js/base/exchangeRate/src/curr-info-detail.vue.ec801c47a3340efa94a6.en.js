define("yls//base/exchangeRate/src/curr-info-detail.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 696);
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

/***/ 393:
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


/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["b" /* pagination */])('loadCurrRate')], //分页方法引入
  data() {
    let oThis = this;
    return {
      //固定写法
      scrollDom: document.getElementsByClassName('view')[0],
      //币种转换主键
      pk_currInfo: '',
      //删除对话框是否展示
      delDialogVisible: false,
      //删除标识，区分子表
      delType: '',
      //删除实体主键
      delId: '',
      // 币种转换主模板 baseTemplateRef start
      infoFunNode: 'BT001',
      infoNexusKey: 'Curr_Info',
      tplData: {},
      //是否编辑态
      editable: false,
      baseIcons: [{
        icon: 'edit',
        click: function () {
          if (oThis.editable === false) {
            oThis.editable = true;
            // 备份数据
            let copyData = oThis.$refs.baseTemplateRef.comp.CurrInfo;
            oThis.copyForData = JSON.parse(JSON.stringify(copyData));
          } else {
            oThis.clickCancel();
          }
        }
      }],
      // 币种转换主模板 baseTemplateRef end

      // 汇率 currRateRef start
      rateFunNode: 'BT001',
      rateNexusKey: 'Curr_Rate',
      currRateData: {},
      currRateResetFun($node) {
        let $table = $node.find('el-table');
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
      //汇率添加
      currRatePlusIcons: [{
        icon: 'plus',
        click() {
          // 关闭table中的编辑区
          if (oThis.pk_currInfo != null && oThis.pk_currInfo != '') {
            oThis.$refs.currRateRef.getTableComp().closeExpandRow();
            // 重置新增数据
            oThis.$refs.currRateRef.resetFormData();
            // 显示新增区域
            oThis.$refs.currRateRef.comp.formShow = true;
          } else {
            oThis.$message({
              message: '请先保存主表信息!',
              type: 'error'
            });
          }
        }
      }]
      // 汇率 currRateRef end
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    //返回按钮
    goBack() {
      location.hash = '/currInfo/list';
    },
    // 币种转换主模板 baseTemplateRef 事件处理 start
    clickCancel() {
      this.editable = false;
      this.$refs.baseTemplateRef.setData('CurrInfo', this.copyForData);
    },
    clickSave() {
      let data = this.$refs.baseTemplateRef.comp.CurrInfo;
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["g" /* ylsBase */] + 'currInfo/save',
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        data: data
      }).then(res => {
        if (res.data.success === true) {
          this.pk_currInfo = res.data.data.pk_curr_info;
          location.hash = '/currInfo/detail/' + this.pk_currInfo;
          this.editable = false;
          let originalValue = res.data.data;
          this.$refs["baseTemplateRef"].setData('CurrInfo', originalValue);
          //加载租金计划表
          this.loadCurrRate();
        } else {
          this.$message({
            message: res.data.error.errorMessage,
            type: 'error'
          });
        }
      }).catch(e => {
        this.$message({
          message: '主表保存失败！',
          type: 'error'
        });
      });
    },
    // 币种转换主模板 baseTemplateRef 事件处理 end

    // 汇率 currRateRef 事件处理 start
    currRateFormConfirm() {
      if (this.pk_currInfo != null && this.pk_currInfo != '') {
        let data = this.$refs.currRateRef.comp.CurrRate;
        let jsonData = JSON.parse(JSON.stringify(data));
        jsonData.fk_currinfo = this.pk_currInfo;
        this.$http({
          url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["g" /* ylsBase */] + 'currRate/save',
          headers: { 'Content-Type': 'application/json' },
          method: 'post',
          data: jsonData
        }).then(res => {
          if (res.data.success === true) {
            this.$message({
              message: '保存成功！',
              type: 'success'
            });
            this.$refs.currRateRef.comp.formShow = false;
            this.loadCurrRate();
          } else {
            this.$message({
              message: res.data.error.errorMessage,
              type: 'error'
            });
          }
        }).catch(e => {
          this.$message({
            message: '汇率保存失败！',
            type: 'error'
          });
        });
      } else {
        this.$message({
          message: '请先保存主表信息!',
          type: 'error'
        });
      }
    },
    currRateFormCancel(type) {
      this.$refs.currRateRef.getTableComp().closeExpandRow();
      if (type === 'form') {
        this.$refs.currRateRef.comp.formShow = false;
      } else {
        this.$refs.currRateRef.getTableComp().closeExpandRow();
        let currRateTable = this.$refs.currRateRef.getData('CurrRate_t');
        currRateTable[this.baseEditIndex] = this.baseData;
        this.$refs.currRateRef.setData('CurrRate_t', currRateTable);
      }
    },
    currRateEditTableRow(scope) {
      this.$refs.currRateRef.getTableComp().expandRow(scope.row);
      this.$refs.currRateRef.comp.formShow = false;
      this.$refs.currRateRef.setData('CurrRate', scope.row);

      // 备份数据
      this.baseData = JSON.parse(JSON.stringify(scope.row));
      this.baseEditIndex = scope.$index;
    },
    currRateDeleteTableRow(scope) {
      this.delType = 'currRate';
      this.delDialogVisible = true;
      this.delId = scope.row.pk_curr_rate;
    },
    // 汇率 currRateRef 事件处理 end

    //加载数据方法
    loadData() {
      this.pk_currInfo = this.$root.$router.currentRoute.params.id;
      //router name
      //this.$root.$router.currentRoute.name;
      //详情页面
      if (this.pk_currInfo && this.pk_currInfo != '') {
        //加载币种转换信息
        this.loadCurrInfo(this.pk_currInfo);
        //加载投放信息
        this.loadCurrRate();
      } else {
        this.editable = true;
      }
    },
    //加载币种转换信息
    loadCurrInfo(pk_currInfo) {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["g" /* ylsBase */] + 'currInfo/getById',
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        data: pk_currInfo
      }).then(res => {
        if (res.data.success === true) {
          let originalValue = res.data.data;
          this.$refs['baseTemplateRef'].setData('CurrInfo', JSON.parse(JSON.stringify(originalValue)));
        } else {
          this.$message({
            message: res.data.error.errorMessage,
            type: 'error'
          });
        }
      }).catch(e => {
        this.$message({
          message: '币种转换详情获取失败',
          type: 'error'
        });
      });
    },
    //加载投放信息
    loadCurrRate() {
      let data = {
        'orderList': [{
          'direction': 'desc',
          'property': 'ts'
        }],
        'pageNum': this.currentPage - 1,
        'pageSize': this.pageSize,
        'searchParams': {
          'searchMap': {
            custCondList: [{
              'key': 'fk_currinfo',
              'oper': '=',
              'value': this.pk_currInfo
            }]
          }
        }
      };
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["g" /* ylsBase */] + 'currRate/page',
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        data: data
      }).then(res => {
        if (res.data.success === true) {
          let originalValue = res.data.data.content;
          this.$refs['currRateRef'].setData('CurrRate_t', JSON.parse(JSON.stringify(originalValue)));
          this.totalElements = res.data.data.totalElements;
        } else {
          this.$message({
            message: res.data.error.errorMessage,
            type: 'error'
          });
        }
      }).catch(e => {
        this.$message({
          message: ' 汇率获取失败',
          type: 'error'
        });
      });
    },

    //删除确定按钮
    deleteConfirmClick() {
      let requestUrl = '';
      if (this.delType == 'currRate') {
        requestUrl = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["g" /* ylsBase */] + 'currRate/deleteById';
      }
      if (requestUrl != '') {
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
            if (this.delType == 'currRate') {
              this.loadCurrRate();
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

/***/ 542:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 642:
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
  }, [_vm._v("返回")])], 1), _vm._v(" "), _c('ifbp-panel', {
    attrs: {
      "id": "basePanel",
      "title": "币种转换信息",
      "icons": _vm.baseIcons
    }
  }, [_c('ifbp-template', {
    ref: "baseTemplateRef",
    attrs: {
      "tplId": "baseTemplate",
      "funnode": _vm.infoFunNode,
      "nexuskey": _vm.infoNexusKey,
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
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (true),
      expression: "true"
    }],
    attrs: {
      "id": "currRatePanel",
      "title": "汇率",
      "icons": _vm.currRatePlusIcons
    }
  }, [_c('ifbp-template', {
    ref: "currRateRef",
    attrs: {
      "tplId": "currRateTemplate",
      "funnode": _vm.rateFunNode,
      "nexuskey": _vm.rateNexusKey,
      "tplData": _vm.currRateData,
      "tplResetFun": _vm.currRateResetFun,
      "show-type": "table-form"
    },
    on: {
      "form-confirm-click": _vm.currRateFormConfirm,
      "form-cancel-click": _vm.currRateFormCancel,
      "edit-table-click": _vm.currRateEditTableRow,
      "delete-table-click": _vm.currRateDeleteTableRow
    }
  }), _vm._v(" "), _c('el-pagination', {
    attrs: {
      "current-page": _vm.currentPage,
      "page-sizes": _vm.pageSizes,
      "page-size": _vm.pageSize,
      "layout": "total, sizes, prev, pager, next, jumper",
      "total": _vm.totalElements
    },
    on: {
      "size-change": _vm.handleSizeChange,
      "current-change": _vm.handleCurrentChange
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
  }, [_vm._v("币种转换信息")])])
}]}

/***/ }),

/***/ 696:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(542)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(393),
  /* template */
  __webpack_require__(642),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

/******/ })});;
//# sourceMappingURL=curr-info-detail.vue.ec801c47a3340efa94a6.en.js.map