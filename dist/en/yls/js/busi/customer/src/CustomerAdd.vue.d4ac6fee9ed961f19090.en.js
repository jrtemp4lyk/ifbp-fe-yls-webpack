define("yls//busi/customer/src/CustomerAdd.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 713);
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

/***/ 410:
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



/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            //模版主键
            pk_temp: "a27b783d-c4d4-463e-8b10-772248af03f0",
            //当前页
            currentPage: 1,
            //每页显示个数选择器的选项设置
            pageSizes: [10, 20, 30, 40],
            //每页显示条目个数
            size: 10,
            //总条目数
            totalElements: 0,
            customerListData: {},
            // 高级搜索
            // 搜索模板
            searchTemplate: {},
            // 条件列表
            conditionList: [],
            // 是否显示已选中标签
            showSelectedTags: true,
            // 当前打开的高级条件编号
            currentConditionCode: '',
            // 当前打开的高级条件内容
            currentCondition: null,
            //高级查询是否展示
            isHide: true,
            //快捷查询输入值
            search_input: "",
            //showDeleteButton: true,
            //操作按钮
            templateTableFormResetFun: function ($node) {
                //获取table,此id为ui模板上面的表格Id
                let $table = this.getNodeById($node, "t3w8pjkb6md");
                //定义操作
                let operateArr = [{
                    title: "查看",
                    icon: "edit"
                }, {
                    title: "删除",
                    icon: "delete"
                }];
                //获取操作按钮html片段
                let operateHtml = this.getTableOperateHtml(operateArr);

                $table.append(operateHtml);
                return $node[0].outerHTML;
            }
        };
    },
    created() {
        this.request(this.currentPage - 1, this.size);
    },
    methods: {
        // 添加按钮
        addCustomerInfo() {
            location.hash = "/cust/customer/add/";
        },
        //快捷搜索
        searchInputEnterClick() {
            this.$message("搜索：" + this.search_input);
        },
        //编辑按钮
        tableEditClick: function (scope) {
            location.hash = "/cust/customer/detail/" + scope.row.pk_customer;
        },
        //选择条数改变
        handleSelectionChange: function (selection) {
            this.$message("选中条数为:" + selection.length);
        },
        //每页显示条数改变
        handleSizeChange: function (sizeVal) {
            this.size = sizeVal;
            let maxPage = Math.ceil(this.totalElements / sizeVal);
            if (maxPage >= this.currentPage) {
                this.request(this.currentPage - 1, this.size);
            }
        },
        //当前页发生改变
        handleCurrentChange: function (currVal) {
            this.currentPage = currVal;
            this.request(this.currentPage - 1, this.size);
        },
        //删除操作
        tableDeleteClick: function (scope) {
            let delId = scope.row.pk_customer;
            this.$http({
                url: "/yls-busi-web/cust/customer/deleteById",
                headers: { 'Content-Type': 'application/json' },
                method: "post",
                dataType: "json",
                data: delId
            }).then(res => {
                if (res.data.status === true) {
                    this.$message({
                        message: "删除成功",
                        type: "success"
                    });
                    //this.delDialogVisible = false;
                    this.request(this.currentPage - 1, this.size);
                } else {
                    this.$message({
                        message: res.data.msg,
                        type: "error"
                    });
                }
            }).catch(e => {
                this.$message({
                    message: "信息删除失败！",
                    type: "error"
                });
            });
        },
        //后台请求
        request(n, s) {
            let url;
            let baseUrl = "/yls-busi-web";
            url = baseUrl + '/cust/customer/page';
            let data = {
                "orderList": [{
                    "direction": "desc",
                    "property": "ts"
                }],
                "pageNum": n,
                "pageSize": s,
                "searchParams": {
                    "searchMap": {}
                }
            };
            this.$http({
                url: url,
                headers: { 'Content-Type': 'application/json' },
                method: "post",
                data: data,
                dataType: "json"
            }).then(res => {
                //customerCalculator_table UI模板表格名称
                let originalValue = res.data.data.content;
                this.$refs["customerList-table"].setData("customer_t", JSON.parse(JSON.stringify(originalValue)));
                this.totalElements = res.data.data.totalElements; // 总条数
                this.size = res.data.data.size; // 每页的条数
            }).catch(e => {
                this.$message({
                    message: "信息获取失败",
                    type: "error"
                });
            });
        },

        /**
         * 高级搜索相关 start
        */

        // 高级搜索
        showSearch() {
            this.isHide = !this.isHide;
            //this.searchTemplate = testSearchTemplate;
            //this.conditionList = testSearchTemplate.conditionList;
        },
        // 设置选中
        selectConditionOption(optionList, option, ctrltype) {
            // console.log(arguments);
            let optionSelected = false;
            let options = optionList.options;
            if (option && option.selected) {
                optionSelected = true;
            }
            if (ctrltype === 'DateComponent') {
                if (!optionList.def_min_value && !optionList.def_max_value && !option) {
                    // 修复 el-date-picker 置空时引起的bug
                    return;
                }
                if (optionList.def_min_value) {
                    optionList.def_min_value = this.formatDate(optionList.def_min_value);
                }
                if (optionList.def_max_value) {
                    optionList.def_max_value = this.formatDate(optionList.def_max_value);
                }
            }
            for (let i = 0; i < options.length; i++) {
                options[i].selected = false;
            }
            if (option) {
                option.selected = !optionSelected;
                optionList.def_min_value = null;
                optionList.def_max_value = null;
                this.setCurrentCondition();
            }
        },
        // 已选中日期格式整理
        formatSelectedDate(startDay, endDay) {
            let dateString = '';
            if (startDay && endDay) {
                dateString = startDay + ' 至 ' + endDay;
            } else if (startDay) {
                dateString = startDay + '之后';
            } else {
                dateString = endDay + '之前';
            }
            return dateString;
        },

        // 已选中数值格式整理
        formatSelectedNumber(min, max) {
            if (min && max) {
                return min + '-' + max + '万元';
            } else if (min) {
                return min + '万元及以上';
            } else {
                return '低于' + max + '万元';
            }
        },

        // 整理date格式
        formatDate(time) {
            let date = new Date(time);
            return date.getFullYear() + '-' + (date.getMonth() >= 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)) + '-' + (date.getDate() > 9 ? date.getDate() : '0' + date.getDate()) + ' ' + (date.getHours() > 9 ? date.getHours() : '0' + date.getHours()) + ':' + (date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes()) + ':' + (date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds());
        },

        // 取消选中
        cancelConditionSelection(optionList) {
            let options = optionList.options;
            for (let i = 0; i < options.length; i++) {
                options[i].selected = false;
            }
            optionList.def_min_value = null;
            optionList.def_max_value = null;
            this.setCurrentCondition();
        },

        // 设置当前选中的高级条件
        setCurrentCondition(condition) {
            if (!condition || this.currentConditionCode === condition.fieldcode) {
                this.currentConditionCode = '';
                this.currentCondition = null;
            } else {
                this.currentConditionCode = condition.fieldcode;
                this.currentCondition = condition;
            }
        }
        /**
         * 高级搜索相关 end
        */
    }
});

/***/ }),

/***/ 554:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 654:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-panel"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "operator-container"
  }, [_c('div', {
    staticClass: "fl"
  }, [_c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.addCustomerInfo
    }
  }, [_vm._v("新增")])], 1), _vm._v(" "), _c('div', {
    staticClass: "fr"
  }, [_c('el-input', {
    attrs: {
      "placeholder": "客户编码/名称",
      "icon": "search",
      "on-icon-click": _vm.searchInputEnterClick
    },
    nativeOn: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.searchInputEnterClick($event)
      }
    },
    model: {
      value: (_vm.search_input),
      callback: function($$v) {
        _vm.search_input = $$v
      },
      expression: "search_input"
    }
  }), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "text"
    },
    on: {
      "click": _vm.showSearch
    }
  }, [_vm._v("\n        高级\n        "), (this.isHide) ? _c('i', {
    staticClass: "el-icon-arrow-down"
  }) : _vm._e(), _vm._v(" "), (!this.isHide) ? _c('i', {
    staticClass: "el-icon-arrow-up"
  }) : _vm._e()])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "advanced-search-panel",
    class: {
      hide: _vm.isHide
    }
  }, [(_vm.showSelectedTags) ? _c('div', {
    staticClass: "options-selected"
  }, [_vm._l((_vm.conditionList), function(condition) {
    return [(condition.ctrltype === 'DateComponent' && (condition.optionList.def_min_value || condition.optionList.def_max_value)) ? _c('el-tag', {
      key: condition.fieldcode,
      attrs: {
        "closable": true,
        "type": "gray"
      },
      on: {
        "close": function($event) {
          _vm.cancelConditionSelection(condition.optionList)
        }
      }
    }, [_vm._v("\n        " + _vm._s(_vm.formatSelectedDate(condition.optionList.def_min_value, condition.optionList.def_max_value)) + "\n      ")]) : _vm._e(), _vm._v(" "), (condition.ctrltype === 'NumberComponent' && (condition.optionList.def_min_value || condition.optionList.def_max_value)) ? _c('el-tag', {
      key: condition.fieldcode,
      attrs: {
        "closable": true,
        "type": "gray"
      },
      on: {
        "close": function($event) {
          _vm.cancelConditionSelection(condition.optionList)
        }
      }
    }) : _vm._e(), _vm._v(" "), _vm._l((condition.optionList.options), function(option) {
      return (option.selected) ? _c('el-tag', {
        key: option.value,
        attrs: {
          "closable": true,
          "type": "gray"
        },
        on: {
          "close": function($event) {
            _vm.cancelConditionSelection(condition.optionList)
          }
        }
      }, [_vm._v("\n        " + _vm._s(option.name) + "\n      ")]) : _vm._e()
    })]
  })], 2) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "list-main-container clearfix",
    attrs: {
      "id": "customerList"
    }
  }, [_c('ifbp-template', {
    ref: "customerList-table",
    attrs: {
      "tplId": "customerList-template",
      "pkTemp": _vm.pk_temp,
      "tplData": _vm.customerListData,
      "show-type": "table",
      "tplResetFun": _vm.templateTableFormResetFun
    },
    on: {
      "selection-change": _vm.handleSelectionChange,
      "edit-table-click": _vm.tableEditClick,
      "delete-table-click": _vm.tableDeleteClick
    }
  }), _vm._v(" "), _c('el-pagination', {
    attrs: {
      "current-page": _vm.currentPage,
      "page-sizes": _vm.pageSizes,
      "page-size": _vm.size,
      "layout": "total, sizes, prev, pager, next, jumper",
      "total": _vm.totalElements
    },
    on: {
      "size-change": _vm.handleSizeChange,
      "current-change": _vm.handleCurrentChange
    }
  })], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title-container"
  }, [_c('h2', {
    staticClass: "name"
  }, [_vm._v("客户信息")])])
}]}

/***/ }),

/***/ 713:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(554)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(410),
  /* template */
  __webpack_require__(654),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

/******/ })});;
//# sourceMappingURL=CustomerAdd.vue.d4ac6fee9ed961f19090.en.js.map