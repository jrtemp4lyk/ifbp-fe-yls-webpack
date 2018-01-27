define("yls//base/equipment/src/equipMain.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 695);
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

/***/ 190:
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    let oThis = this;
    let validateBrand = function (rule, value, callback) {
      debugger;
      // 编码非空校验
      if (rule.field == 'brand_code') {
        if (value === '') {
          callback(new Error('编码不能为空! '));
        } else {
          let datam = {
            code: value
          };
          if (oThis.pk_brand != '') {
            datam.pk = oThis.pk_brand;
          }
          oThis.$http({
            url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["g" /* ylsBase */] + 'brand/isUnique',
            hearders: { 'Content-Type': 'application/json' },
            method: 'post',
            data: JSON.parse(JSON.stringify(datam))
          }).then(res => {
            if (res.data.success === true) {
              if (res.data.data === true) {
                callback();
              } else {
                callback(new Error('编码已存在! '));
              }
            } else {
              callback(new Error(res.data.error.errorMessage));
            }
          }).catch(() => {
            callback(new Error('后台服务有误，请联系管理员！'));
          });
        }
      }
      // 名称非空校验
      if (rule.field == 'brand_name') {
        if (value === '') {
          callback(new Error('名称不能为空! '));
        } else {
          let datam = {
            name: value
          };
          if (oThis.pk_brand != '') {
            datam.pk = oThis.pk_brand;
          }
          oThis.$http({
            url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["g" /* ylsBase */] + 'brand/isUnique',
            hearders: { 'Content-Type': 'application/json' },
            method: 'post',
            data: JSON.parse(JSON.stringify(datam))
          }).then(res => {
            if (res.data.success === true) {
              if (res.data.data === true) {
                callback();
              } else {
                callback(new Error('名称已存在! '));
              }
            } else {
              callback(new Error(res.data.error.errorMessage));
            }
          }).catch(() => {
            callback(new Error('后台服务有误，请联系管理员！'));
          });
        }
      }
    };
    return {
      // 固定写法
      scrollDom: document.getElementsByClassName('view')[0],
      // 厂牌主键
      pk_brand: '',
      // 页面标题
      title: '',
      // 报价主模板 baseTemplateRef start
      funNode: 'BT011',
      nexusKey: 'Equip_Brand',
      tplData: {
        rules: {
          brand_code: [{ validator: validateBrand, trigger: 'blur' }],
          brand_name: [{ validator: validateBrand, trigger: 'blur' }]
        }
      },
      editable: true
      // 报价主模板 baseTemplateRef end
    };
  },
  props: ['brandMsg'],
  created() {
    this.loadData();
  },
  methods: {
    //返回按钮
    goBack() {
      // window.history.back(-1);
      this.$emit('change-brand-detail', 'swithToTable');
    },
    // 厂牌主模板 baseTemplateRef 事件处理 start
    clickSave() {
      debugger;
      let data = this.$refs.baseTemplateRef.comp.Brand;
      let jsonData = JSON.parse(JSON.stringify(data));
      let url;
      this.$refs.baseTemplateRef.validate(valid => {
        if (valid) {
          if (this.brandMsg == 'add') {
            url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["g" /* ylsBase */] + 'brand/create';
          } else {
            url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["g" /* ylsBase */] + 'brand/update';
          }
          this.$http({
            url: url,
            headers: { 'Content-Type': 'application/json' },
            method: 'post',
            data: jsonData
          }).then(res => {
            if (res.data.success === true) {
              this.$message({
                message: '操作成功!',
                type: 'success'
              });
              // this.editable = false;
              // let originalValue = res.data.data;
              // this.$refs['baseTemplateRef'].setData(
              // 'Brand',
              // JSON.parse(JSON.stringify(originalValue))
              // );
              this.$emit('change-brand-detail', 'swithToTable');
            } else {
              this.$message({
                message: res.data.error.errorMessage,
                type: 'error'
              });
            }
          }).catch(e => {
            this.$message({
              message: '厂牌保存失败！',
              type: 'error'
            });
          });
        } else {
          this.$message('校验未通过! ');
        }
      });
    },
    // 厂牌主模板 baseTemplateRef 事件处理 end

    // 加载数据方法
    loadData() {
      // 判断brandMsg
      if (this.brandMsg == 'add') {
        this.title = '厂牌列表 > 厂牌新增';
      } else {
        this.title = '厂牌列表 > 厂牌变更';
        this.pk_brand = this.brandMsg;
      }
      debugger;
      // 详情页面
      if (this.pk_brand && this.pk_brand != '') {
        // 加载厂牌信息
        this.loadBrandDetail(this.pk_brand);
      } else {
        this.editable = true;
      }
    },
    // 加载厂牌信息
    loadBrandDetail(pk_brand) {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["g" /* ylsBase */] + 'brand/getById',
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        data: pk_brand
      }).then(res => {
        if (res.data.success === true) {
          let originalValue = res.data.data;
          this.$refs['baseTemplateRef'].setData('Brand', JSON.parse(JSON.stringify(originalValue)));
        } else {
          this.$message({
            message: res.data.error.errorMessage,
            type: 'error'
          });
        }
      }).catch(e => {
        this.$message({
          message: '厂牌详情获取失败',
          type: 'error'
        });
      });
    }
  }
});

/***/ }),

/***/ 191:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    mixins: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["b" /* pagination */])()], // 分页方法引入
    data() {
        return {
            //模版主键
            funNode: 'BT011',
            nexusKey: 'Equip_Brand',
            brandListData: {},
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
            search_input: '',
            //删除对话框
            delDialogVisible: false,
            //待删除数据id
            delId: '',
            //showDeleteButton: true,
            //操作按钮
            templateTableFormResetFun: function ($node) {
                //获取table,此id为ui模板上面的表格Id
                let $table = $node.find('el-table');
                //定义操作
                let operateArr = [{
                    icon: 'search',
                    title: '查看'
                }, {
                    title: '删除',
                    icon: 'delete'
                }];
                //获取操作按钮html片段
                let operateHtml = this.getTableOperateHtml(operateArr);
                $table.append(operateHtml);
                return $node[0].outerHTML;
            }
        };
    },
    created() {
        this.request();
    },
    methods: {
        // 高级搜索
        showSearch() {
            this.isHide = !this.isHide;
        },
        // 添加按钮
        addBrandInfo() {
            // location.hash = '/quote/add';

            this.$emit('change-brand-list', 'add');
        },
        //快捷搜索
        searchInputEnterClick() {
            this.$message('搜索：' + this.search_input);
        },
        //查看按钮
        tableSearchClick(scope) {
            this.$emit('change-brand-list', scope.row.pk_brand);
        },
        //删除操作
        tableDeleteClick(scope) {
            this.delId = scope.row.pk_brand;
            this.delDialogVisible = true;
        },
        //删除确定
        deleteConfirmClick() {
            this.$http({
                url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["g" /* ylsBase */] + 'brand/deleteById',
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
                    this.request();
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
        },
        //后台请求
        request() {
            let data = {
                'orderList': [{
                    'direction': 'desc',
                    'property': 'ts'
                }],
                'pageNum': this.currentPage - 1,
                'pageSize': this.pageSize,
                'searchParams': {
                    'searchMap': {}
                }
            };
            this.$http({
                url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["g" /* ylsBase */] + 'brand/page',
                headers: { 'Content-Type': 'application/json' },
                method: 'post',
                data: data,
                dataType: 'json'
            }).then(res => {
                //brandList_table UI模板表格名称
                if (res.data.success === true) {
                    let originalValue = res.data.data.content;
                    this.$refs['brandList-table'].setData('Brand_t', JSON.parse(JSON.stringify(originalValue)));
                    this.totalElements = res.data.data.totalElements; // 总条数
                } else {
                    this.$message({
                        message: res.data.error.errorMessage,
                        type: 'error'
                    });
                }
            }).catch(e => {
                this.$message({
                    message: '信息获取失败',
                    type: 'error'
                });
            });
        }
    }
});

/***/ }),

/***/ 192:
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    let oThis = this;
    let validateModel = function (rule, value, callback) {
      if (rule.field = 'model_name') {
        if (value == '') {
          callback(new Error('名称不能为空! '));
        } else {
          let fkBrand = oThis.$refs.baseTemplateRef.comp.$refs['model_form'].model.fk_brand;
          let fkSeries = oThis.$refs.baseTemplateRef.comp.$refs['model_form'].model.fk_series;
          let datam = {
            fkBrand: fkBrand,
            fkSeries: fkSeries,
            name: value
          };
          if (oThis.pk_model != '') {
            datam.pk = oThis.pk_model;
          }
          oThis.$http({
            url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["g" /* ylsBase */] + 'model/isUnique',
            hearders: { 'Content-Type': 'application/json' },
            method: 'post',
            data: JSON.parse(JSON.stringify(datam))
          }).then(res => {
            if (res.data.success === true) {
              if (res.data.data === true) {
                callback();
              } else {
                callback(new Error('型号已存在! '));
              }
            } else {
              callback(new Error(res.data.error.errorMessage));
            }
          }).catch(() => {
            callback(new Error('后台服务有误，请联系管理员！'));
          });
        }
      }
    };
    return {
      // 固定写法
      scrollDom: document.getElementsByClassName('view')[0],
      // 型号主键
      pk_model: '',
      // 页面标题
      title: '',
      // 型号主模板 baseTemplateRef start
      funNode: 'BT011',
      nexusKey: 'Equip_Model',
      tplData: {
        rules: { model_name: [{ validator: validateModel, trigger: 'blur' }] }
      },
      editable: true,
      tplResetFun: function ($node) {
        //厂牌参照
        let $refNode = this.getNodeById($node, 'tsech3wodyb');
        if ($refNode.length) {
          $refNode.attr("v-on:trigger", "handleRefChange");
        }
      },
      t_Methods: {
        handleRefChange: function (type, data) {
          if (type === 'change') {
            let refParams = { 'key': data.value[0].id };
            oThis.$refs.baseTemplateRef.setData('series_param', refParams);
          }
        }
        // 型号主模板 baseTemplateRef end
      } };
  },
  props: ['modelMsg'],
  created() {
    this.loadData();
  },
  methods: {
    // 返回按钮
    goBack() {
      // window.history.back(-1);
      this.$emit('change-model-detail', 'swithToTable');
    },
    // 型号主模板 baseTemplateRef 事件处理 start
    clickSave() {
      let data = this.$refs.baseTemplateRef.comp.Model;
      let jsonData = JSON.parse(JSON.stringify(data));
      let url;
      this.$refs.baseTemplateRef.validate(valid => {
        if (valid) {
          if (this.modelMsg == 'add') {
            url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["g" /* ylsBase */] + 'model/create';
          } else {
            url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["g" /* ylsBase */] + 'model/update';
          }
          this.$http({
            url: url,
            headers: { 'Content-Type': 'application/json' },
            method: 'post',
            data: jsonData
          }).then(res => {
            if (res.data.success === true) {
              this.$message({
                message: '操作成功!',
                type: 'success'
              });
              // this.editable = false;
              // let originalValue = res.data.data;
              // this.$refs['baseTemplateRef'].setData(
              // 'Model',
              // JSON.parse(JSON.stringify(originalValue))
              // );
              this.$emit('change-model-detail', 'swithToTable');
            } else {
              this.$message({
                message: res.data.error.errorMessage,
                type: 'error'
              });
            }
          }).catch(e => {
            this.$message({
              message: '型号保存失败！',
              type: 'error'
            });
          });
        } else {
          this.$message('校验未通过! ');
        }
      });
    },
    // 型号主模板 baseTemplateRef 事件处理 end

    // 加载数据方法
    loadData() {
      // 判断modelMsg
      if (this.modelMsg == 'add') {
        this.title = '型号列表 > 型号新增';
      } else {
        this.title = '型号列表 > 型号变更';
        this.pk_model = this.modelMsg;
      }
      // 详情页面
      if (this.pk_model && this.pk_model != '') {
        // 加载型号信息
        this.loadModelDetail(this.pk_model);
      } else {
        this.editable = true;
      }
    },
    // 加载型号信息
    loadModelDetail(pk_model) {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["g" /* ylsBase */] + 'model/getById',
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        data: pk_model
      }).then(res => {
        if (res.data.success === true) {
          let originalValue = res.data.data;
          this.$refs['baseTemplateRef'].setData('Model', JSON.parse(JSON.stringify(originalValue)));
        } else {
          this.$message({
            message: res.data.error.errorMessage,
            type: 'error'
          });
        }
      }).catch(e => {
        this.$message({
          message: '报价详情获取失败',
          type: 'error'
        });
      });
    }
  }
});

/***/ }),

/***/ 193:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    mixins: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["b" /* pagination */])()], // 分页方法引入
    data() {
        return {
            //模版主键
            funNode: 'BT011',
            nexusKey: 'Equip_Model',
            searchTemplateCode: 'YLSCXMB_BASE_EQUIP',
            searchParameters: '',
            modelListData: {},
            //删除对话框
            delDialogVisible: false,
            //待删除数据id
            delId: '',
            //showDeleteButton: true,
            //操作按钮
            templateTableFormResetFun: function ($node) {
                //获取table,此id为ui模板上面的表格Id
                let $table = $node.find('el-table');
                //定义操作
                let operateArr = [{
                    icon: 'search',
                    title: '查看'
                }, {
                    title: '删除',
                    icon: 'delete'
                }];
                //获取操作按钮html片段
                let operateHtml = this.getTableOperateHtml(operateArr);
                $table.append(operateHtml);
                return $node[0].outerHTML;
            }
        };
    },
    created() {
        this.request();
    },
    methods: {
        // 添加按钮
        handleSearch(searchTemplate) {
            this.searchParameters = JSON.stringify(searchTemplate);
            this.request();
        },
        addModelInfo() {
            // location.hash = '/quote/add';

            this.$emit('change-model-list', 'add');
        },
        //查看按钮
        tableSearchClick(scope) {
            this.$emit('change-model-list', scope.row.pk_model);
        },
        //删除操作
        tableDeleteClick(scope) {
            this.delId = scope.row.pk_model;
            this.delDialogVisible = true;
        },
        //删除确定
        deleteConfirmClick() {
            this.$http({
                url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["g" /* ylsBase */] + 'model/deleteById',
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
                    this.request();
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
        },
        //后台请求
        request() {
            let data = {
                'orderList': [{
                    'direction': 'desc',
                    'property': 'ts'
                }],
                'pageNum': this.currentPage - 1,
                'pageSize': this.pageSize,
                'searchParams': {
                    'searchMap': {
                        'qtAggVO': this.searchParameters
                    }
                }
            };
            this.$http({
                url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["g" /* ylsBase */] + 'model/page',
                headers: { 'Content-Type': 'application/json' },
                method: 'post',
                data: data,
                dataType: 'json'
            }).then(res => {
                if (res.data.success === true) {
                    let originalValue = res.data.data.content;
                    this.$refs['modelList-table'].setData('Model_t', JSON.parse(JSON.stringify(originalValue)));
                    this.totalElements = res.data.data.totalElements; // 总条数
                } else {
                    this.$message({
                        message: res.data.error.errorMessage,
                        type: 'error'
                    });
                }
            }).catch(e => {
                this.$message({
                    message: '信息获取失败',
                    type: 'error'
                });
            });
        }
    }
});

/***/ }),

/***/ 194:
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    let oThis = this;
    let validateSeries = function (rule, value, callback) {
      if (rule.field == 'series_name') {
        if (value === '') {
          callback(new Error('名称不能为空! '));
        } else {
          let fk = oThis.$refs.baseTemplateRef.comp.$refs['series_form'].model.fk_brand;
          let datam = {
            fk: fk,
            name: value
          };
          if (oThis.pk_series != '') {
            datam.pk = oThis.pk_series;
          }
          oThis.$http({
            url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["g" /* ylsBase */] + 'series/isUnique',
            hearders: { 'Content-Type': 'application/json' },
            method: 'post',
            data: JSON.parse(JSON.stringify(datam))
          }).then(res => {
            if (res.data.success === true) {
              if (res.data.data === true) {
                callback();
              } else {
                callback(new Error('系列已存在! '));
              }
            } else {
              callback(new Error(res.data.error.errorMessage));
            }
          }).catch(() => {
            callback(new Error('后台服务有误，请联系管理员！'));
          });
        }
      }
    };
    return {
      // 固定写法
      scrollDom: document.getElementsByClassName('view')[0],
      // 系列主键
      pk_series: '',
      // 页面标题
      title: '',
      // 系列主模板 baseTemplateRef start
      funNode: 'BT011',
      nexusKey: 'Equip_Series',
      tplData: {
        rules: { series_name: [{ validator: validateSeries, trigger: 'blur' }] }
      },
      editable: true
      // 系列主模板 baseTemplateRef end
    };
  },
  props: ['seriesMsg'],
  created() {
    this.loadData();
  },
  methods: {
    // 返回按钮
    goBack() {
      // window.history.back(-1);
      this.$emit('change-series-detail', 'swithToTable');
    },
    // 系列主模板 baseTemplateRef 事件处理 start
    clickSave() {
      let data = this.$refs.baseTemplateRef.comp.Series;
      let jsonData = JSON.parse(JSON.stringify(data));
      let url;
      this.$refs.baseTemplateRef.validate(valid => {
        if (valid) {
          if (this.seriesMsg == 'add') {
            url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["g" /* ylsBase */] + 'series/create';
          } else {
            url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["g" /* ylsBase */] + 'series/update';
          }
          this.$http({
            url: url,
            headers: { 'Content-Type': 'application/json' },
            method: 'post',
            data: jsonData
          }).then(res => {
            if (res.data.success === true) {
              this.$message({
                message: '操作成功!',
                type: 'success'
              });
              // this.editable = false;
              // let originalValue = res.data.data;
              // this.$refs['baseTemplateRef'].setData(
              // 'Series',
              // JSON.parse(JSON.stringify(originalValue))
              // );
              this.$emit('change-series-detail', 'swithToTable');
            } else {
              this.$message({
                message: res.data.error.errorMessage,
                type: 'error'
              });
            }
          }).catch(e => {
            this.$message({
              message: '系列保存失败！',
              type: 'error'
            });
          });
        } else {
          this.$message('校验未通过! ');
        }
      });
    },
    // 系列主模板 baseTemplateRef 事件处理 end

    // 加载数据方法
    loadData() {
      // 判断seriesMsg
      if (this.seriesMsg == 'add') {
        this.title = '系列列表 > 系列新增';
      } else {
        this.title = '系列列表 > 系列变更';
        this.pk_series = this.seriesMsg;
      }
      // 详情页面
      if (this.pk_series && this.pk_series != '') {
        // 加载系列信息
        this.loadSeriesDetail(this.pk_series);
      } else {
        this.editable = true;
      }
    },
    // 加载系列信息
    loadSeriesDetail(pk_series) {
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["g" /* ylsBase */] + 'series/getById',
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        data: pk_series
      }).then(res => {
        if (res.data.success === true) {
          let originalValue = res.data.data;
          this.$refs['baseTemplateRef'].setData('Series', JSON.parse(JSON.stringify(originalValue)));
        } else {
          this.$message({
            message: res.data.error.errorMessage,
            type: 'error'
          });
        }
      }).catch(e => {
        this.$message({
          message: '详情获取失败',
          type: 'error'
        });
      });
    }
  }
});

/***/ }),

/***/ 195:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    mixins: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["b" /* pagination */])()], // 分页方法引入
    data() {
        return {
            // 模版主键
            funNode: 'BT011',
            nexusKey: 'Equip_Series',
            seriesListData: {},
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
            // 高级查询是否展示
            isHide: true,
            // 快捷查询输入值
            search_input: '',
            // 删除对话框
            delDialogVisible: false,
            // 待删除数据id
            delId: '',
            // showDeleteButton: true,
            // 操作按钮
            templateTableFormResetFun: function ($node) {
                // 获取table,此id为ui模板上面的表格Id
                let $table = $node.find('el-table');
                // 定义操作
                let operateArr = [{
                    icon: 'search',
                    title: '查看'
                }, {
                    title: '删除',
                    icon: 'delete'
                }];
                // 获取操作按钮html片段
                let operateHtml = this.getTableOperateHtml(operateArr);
                $table.append(operateHtml);
                return $node[0].outerHTML;
            }
        };
    },
    created() {
        this.request();
    },
    methods: {
        // 高级搜索
        showSearch() {
            this.isHide = !this.isHide;
        },
        // 添加按钮
        addSeriesInfo() {
            // location.hash = '/quote/add';

            this.$emit('change-series-list', 'add');
        },
        // 快捷搜索
        searchInputEnterClick() {
            this.$message('搜索：' + this.search_input);
        },
        // 查看按钮
        tableSearchClick(scope) {
            this.$emit('change-series-list', scope.row.pk_series);
        },
        // 删除操作
        tableDeleteClick(scope) {
            this.delId = scope.row.pk_series;
            this.delDialogVisible = true;
        },
        // 删除确定
        deleteConfirmClick() {
            this.$http({
                url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["g" /* ylsBase */] + 'series/deleteById',
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
                    this.request();
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
        },
        // 后台请求
        request(n, s) {
            let data = {
                'orderList': [{
                    'direction': 'desc',
                    'property': 'ts'
                }],
                'pageNum': this.currentPage - 1,
                'pageSize': this.pageSize,
                'searchParams': {
                    'searchMap': {}
                }
            };
            this.$http({
                url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["g" /* ylsBase */] + 'series/page',
                headers: { 'Content-Type': 'application/json' },
                method: 'post',
                data: data,
                dataType: 'json'
            }).then(res => {
                if (res.data.success === true) {
                    // seriesList_table UI模板表格名称
                    let originalValue = res.data.data.content;
                    this.$refs['seriesList-table'].setData('Series_t', JSON.parse(JSON.stringify(originalValue)));
                    this.totalElements = res.data.data.totalElements; // 总条数
                } else {
                    this.$message({
                        message: res.data.error.errorMessage,
                        type: 'error'
                    });
                }
            }).catch(e => {
                this.$message({
                    message: '信息获取失败',
                    type: 'error'
                });
            });
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

/***/ 240:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 243:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 259:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 266:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 268:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 271:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 290:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-panel"
  }, [_c('div', {
    staticClass: "operator-container"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "fr"
  }, [_c('el-input', {
    attrs: {
      "placeholder": "测算编码/名称",
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
  }, [_vm._v("\n        高级  \n        "), (this.isHide) ? _c('i', {
    staticClass: "el-icon-arrow-down"
  }) : _vm._e(), _vm._v(" "), (!this.isHide) ? _c('i', {
    staticClass: "el-icon-arrow-up"
  }) : _vm._e()]), _vm._v(" "), _c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.addBrandInfo
    }
  }, [_vm._v(" 新 增")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "advanced-search-panel",
    class: {
      hide: _vm.isHide
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "list-main-container clearfix",
    attrs: {
      "id": "brandList"
    }
  }, [_c('ifbp-template', {
    ref: "brandList-table",
    attrs: {
      "tplId": "brandList-template",
      "funnode": _vm.funNode,
      "nexuskey": _vm.nexusKey,
      "tplData": _vm.brandListData,
      "show-type": "table",
      "tplResetFun": _vm.templateTableFormResetFun
    },
    on: {
      "search-table-click": _vm.tableSearchClick,
      "delete-table-click": _vm.tableDeleteClick
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
  }), _vm._v(" "), _c('el-dialog', {
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
  }, [_vm._v("确 定")])], 1)])], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "fl"
  }, [_c('h3', {
    staticClass: "name"
  }, [_vm._v("厂牌列表")])])
}]}

/***/ }),

/***/ 293:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-panel"
  }, [_c('div', {
    staticClass: "operator-container"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "fr"
  }, [_c('el-input', {
    attrs: {
      "placeholder": "测算编码/名称",
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
  }, [_vm._v("\n        高级  \n        "), (this.isHide) ? _c('i', {
    staticClass: "el-icon-arrow-down"
  }) : _vm._e(), _vm._v(" "), (!this.isHide) ? _c('i', {
    staticClass: "el-icon-arrow-up"
  }) : _vm._e()]), _vm._v(" "), _c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.addSeriesInfo
    }
  }, [_vm._v(" 新 增")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "advanced-search-panel",
    class: {
      hide: _vm.isHide
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "list-main-container clearfix",
    attrs: {
      "id": "seriesList"
    }
  }, [_c('ifbp-template', {
    ref: "seriesList-table",
    attrs: {
      "tplId": "seriesList-template",
      "funnode": _vm.funNode,
      "nexuskey": _vm.nexusKey,
      "tplData": _vm.seriesListData,
      "show-type": "table",
      "tplResetFun": _vm.templateTableFormResetFun
    },
    on: {
      "search-table-click": _vm.tableSearchClick,
      "delete-table-click": _vm.tableDeleteClick
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
  }), _vm._v(" "), _c('el-dialog', {
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
  }, [_vm._v("确 定")])], 1)])], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "fl"
  }, [_c('h3', {
    staticClass: "name"
  }, [_vm._v("系列列表")])])
}]}

/***/ }),

/***/ 309:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-panel"
  }, [_c('div', {
    staticClass: "detail-main-container clearfix"
  }, [_c('div', {
    staticClass: "operator-container"
  }, [_c('div', {
    staticClass: "fl"
  }, [_c('h3', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.title))])]), _vm._v(" "), _c('div', {
    staticClass: "fr"
  }, [_c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "default"
    },
    on: {
      "click": _vm.goBack
    }
  }, [_vm._v(" 取 消 ")]), _vm._v(" "), _c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.clickSave
    }
  }, [_vm._v(" 保 存 ")])], 1)]), _vm._v(" "), _c('ifbp-template', {
    ref: "baseTemplateRef",
    attrs: {
      "tplId": "baseTemplate",
      "funnode": _vm.funNode,
      "nexuskey": _vm.nexusKey,
      "show-type": "form",
      "tplData": _vm.tplData,
      "editable": _vm.editable
    }
  })], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 316:
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
      "type": "primary"
    },
    on: {
      "click": _vm.addModelInfo
    }
  }, [_vm._v(" 新 增 ")])], 1), _vm._v(" "), _c('ifbp-search', {
    staticClass: "fr",
    attrs: {
      "template-code": _vm.searchTemplateCode
    },
    on: {
      "search": _vm.handleSearch
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "list-main-container clearfix",
    attrs: {
      "id": "modelList"
    }
  }, [_c('ifbp-template', {
    ref: "modelList-table",
    attrs: {
      "tplId": "modelList-template",
      "funnode": _vm.funNode,
      "nexuskey": _vm.nexusKey,
      "tplData": _vm.modelListData,
      "show-type": "table",
      "tplResetFun": _vm.templateTableFormResetFun
    },
    on: {
      "search-table-click": _vm.tableSearchClick,
      "delete-table-click": _vm.tableDeleteClick
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
  }), _vm._v(" "), _c('el-dialog', {
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
  }, [_vm._v("确 定")])], 1)])], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "fl"
  }, [_c('h3', {
    staticClass: "name"
  }, [_vm._v("型号列表")])])
}]}

/***/ }),

/***/ 318:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-panel"
  }, [_c('div', {
    staticClass: "detail-main-container clearfix"
  }, [_c('div', {
    staticClass: "operator-container"
  }, [_c('div', {
    staticClass: "fl"
  }, [_c('h3', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.title))])]), _vm._v(" "), _c('div', {
    staticClass: "fr"
  }, [_c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "default"
    },
    on: {
      "click": _vm.goBack
    }
  }, [_vm._v(" 取 消 ")]), _vm._v(" "), _c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.clickSave
    }
  }, [_vm._v(" 保 存 ")])], 1)]), _vm._v(" "), _c('ifbp-template', {
    ref: "baseTemplateRef",
    attrs: {
      "tplId": "baseTemplate",
      "funnode": _vm.funNode,
      "nexuskey": _vm.nexusKey,
      "show-type": "form",
      "tplData": _vm.tplData,
      "editable": _vm.editable
    }
  })], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 321:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-panel"
  }, [_c('div', {
    staticClass: "detail-main-container clearfix"
  }, [_c('div', {
    staticClass: "operator-container"
  }, [_c('div', {
    staticClass: "fl"
  }, [_c('h3', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.title))])]), _vm._v(" "), _c('div', {
    staticClass: "fr"
  }, [_c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "default"
    },
    on: {
      "click": _vm.goBack
    }
  }, [_vm._v(" 取 消 ")]), _vm._v(" "), _c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.clickSave
    }
  }, [_vm._v(" 保 存 ")])], 1)]), _vm._v(" "), _c('ifbp-template', {
    ref: "baseTemplateRef",
    attrs: {
      "tplId": "baseTemplate",
      "funnode": _vm.funNode,
      "nexuskey": _vm.nexusKey,
      "show-type": "form",
      "tplResetFun": _vm.tplResetFun,
      "methods": _vm.t_Methods,
      "tplData": _vm.tplData,
      "editable": _vm.editable
    }
  })], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(259)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(190),
  /* template */
  __webpack_require__(309),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(240)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(191),
  /* template */
  __webpack_require__(290),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(271)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(192),
  /* template */
  __webpack_require__(321),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(266)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(193),
  /* template */
  __webpack_require__(316),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(268)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(194),
  /* template */
  __webpack_require__(318),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(243)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(195),
  /* template */
  __webpack_require__(293),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_list_vue__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__model_list_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_detail_vue__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_detail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__model_detail_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__series_list_vue__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__series_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__series_list_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__series_detail_vue__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__series_detail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__series_detail_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__brand_list_vue__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__brand_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__brand_list_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__brand_detail_vue__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__brand_detail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__brand_detail_vue__);
//
//
//
//
//
//
//
//
//
//
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
    modelList: __WEBPACK_IMPORTED_MODULE_0__model_list_vue___default.a,
    modelDetail: __WEBPACK_IMPORTED_MODULE_1__model_detail_vue___default.a,
    seriesList: __WEBPACK_IMPORTED_MODULE_2__series_list_vue___default.a,
    seriesDetail: __WEBPACK_IMPORTED_MODULE_3__series_detail_vue___default.a,
    brandList: __WEBPACK_IMPORTED_MODULE_4__brand_list_vue___default.a,
    brandDetail: __WEBPACK_IMPORTED_MODULE_5__brand_detail_vue___default.a
  },
  data() {
    return {
      activeName: 'first',
      modelType: true,
      modelMsg: '',
      seriesType: true,
      seriesMsg: '',
      brandType: true,
      brandMsg: ''
    };
  },
  methods: {
    handleClick(tab, event) {
      // 选中页面时刷新页面数据
      if (tab.$options.propsData.name == 'first') {
        this.$refs.tab1.request(this.$refs.tab1.currentPage - 1, this.$refs.tab1.size);
      } else if (tab.$options.propsData.name == 'second') {
        this.$refs.tab2.request(this.$refs.tab2.currentPage - 1, this.$refs.tab2.size);
      } else {
        this.$refs.tab3.request(this.$refs.tab3.currentPage - 1, this.$refs.tab3.size);
      }
    },
    changeModelList(val) {
      if (val) {
        this.modelMsg = val;
        this.modelType = false;
      }
    },
    changeModelDetail(val) {
      if (val) {
        this.modelType = true;
      }
    },
    changeSeriesList(val) {
      if (val) {
        this.seriesMsg = val;
        this.seriesType = false;
      }
    },
    changeSeriesDetail(val) {
      if (val) {
        this.seriesType = true;
      }
    },
    changeBrandList(val) {
      if (val) {
        this.brandMsg = val;
        this.brandType = false;
      }
    },
    changeBrandDetail(val) {
      if (val) {
        this.brandType = true;
      }
    }

  }
});

/***/ }),

/***/ 555:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 655:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-tabs', {
    attrs: {
      "id": "equip-main"
    },
    on: {
      "tab-click": _vm.handleClick
    },
    model: {
      value: (_vm.activeName),
      callback: function($$v) {
        _vm.activeName = $$v
      },
      expression: "activeName"
    }
  }, [_c('el-tab-pane', {
    attrs: {
      "label": " 型 号 ",
      "name": "first"
    }
  }, [(_vm.modelType) ? _c('modelList', {
    ref: "tab1",
    on: {
      "change-model-list": _vm.changeModelList
    }
  }) : _vm._e(), _vm._v(" "), (!_vm.modelType) ? _c('modelDetail', {
    attrs: {
      "model-msg": _vm.modelMsg
    },
    on: {
      "change-model-detail": _vm.changeModelDetail
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": " 系 列 ",
      "name": "second"
    }
  }, [(_vm.seriesType) ? _c('seriesList', {
    ref: "tab2",
    on: {
      "change-series-list": _vm.changeSeriesList
    }
  }) : _vm._e(), _vm._v(" "), (!_vm.seriesType) ? _c('seriesDetail', {
    attrs: {
      "series-msg": _vm.seriesMsg
    },
    on: {
      "change-series-detail": _vm.changeSeriesDetail
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": " 厂 牌 ",
      "name": "third"
    }
  }, [(_vm.brandType) ? _c('brandList', {
    ref: "tab3",
    on: {
      "change-brand-list": _vm.changeBrandList
    }
  }) : _vm._e(), _vm._v(" "), (!_vm.brandType) ? _c('brandDetail', {
    attrs: {
      "brand-msg": _vm.brandMsg
    },
    on: {
      "change-brand-detail": _vm.changeBrandDetail
    }
  }) : _vm._e()], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 695:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(555)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(392),
  /* template */
  __webpack_require__(655),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

/******/ })});;
//# sourceMappingURL=equipMain.vue.0e885e3cd2ec7d6082e2.en.js.map