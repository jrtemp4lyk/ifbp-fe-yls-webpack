define("yls//busi/quote/src/product-detail.vue", function(require, exports, module) {


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
/******/ 	return __webpack_require__(__webpack_require__.s = 784);
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

/***/ 481:
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


/* harmony default export */ __webpack_exports__["default"] = ({
  // components: {
  //   'ifbp-template': template,
  // },
  data() {
    var oThis = this;
    return {
      scrollDom: document.getElementsByClassName("view")[0],
      pk_quote_scheme: '',
      templist: [], // 存模板数据
      baseIcons: [{
        icon: "edit",
        click: function () {
          oThis.productEdit = !oThis.productEdit;
          oThis.baseFormData = JSON.parse(JSON.stringify(oThis.$refs.baseTemplateRef.getData("quoteScheme")));
        }
      }],
      addIcons: [{
        icon: "plus",
        click: function () {
          oThis.dialogFormVisiable = true;
          oThis.resetFormDialog();
        }
      }],
      metadataOptions: [{
        id: "2889d7d2-b6e1-4953-a8f8-d259a34d4d2a",
        pid: "0274c39c-4658-4802-a96f-6b40feba2842",
        value: "报价测算表",
        type: "base"
      }, {
        id: "281d0c07-2e08-459d-84dd-1e786b10bc80",
        pid: "0274c39c-4658-4802-a96f-6b40feba2842",
        value: "测算投放计划",
        type: "loanPlan"
      }, {
        id: "cefe8a9f-79fc-4664-859a-565a5f006b34",
        pid: "0274c39c-4658-4802-a96f-6b40feba2842",
        value: "测算规则设置",
        type: "rulePlan"
      }, {
        id: "58d9f826-8918-4d71-814f-a71ba8f54d1e",
        pid: "0274c39c-4658-4802-a96f-6b40feba2842",
        value: "测算收支计划",
        type: "inoutPlan"
      }],
      productPk: "f820f976-e378-4051-acda-ef645ceb070c",
      baseFormData: {}, // 表单数据对象
      productData: {
        quoteScheme: {
          // templist: [],
        },
        rules: {
          // scheme_name: [{ required: true, message: "方案名称不能为空", trigger: "blur" }],
          // scheme_code: [{ required: true, message: "方案编码不能为空", trigger: "blur" }]
        }
      },
      productEdit: false,
      dialogFormVisiable: false,
      metadataFormData: {
        pkMetadata: "",
        pkClass: "",
        sysflag: "",
        name: ""
      }
      // productFormResetFun: function($node) {
      //   var $refNode = $node.find("el-ref"); // 根据_id属性找到对应el-ref元素
      //   if($refNode.length) {
      //     $refNode.attr("v-on:trigger", "handleRefChange"); // 添加绑定事件, 参照改变是触发handleRefChange方法
      //   }
      // },
      // t_Methods: {
      //   handleRefChange: function(type, data) {
      //     console.log("触发参照改变:", type, data);
      //     /*
      //      * 这里的this指向 ifbp-element组件实例，
      //      * this.$refs.quote_scheme_form取到form实例（quote_scheme_form为UI模板设计器页面表单的"引用信息"，默认是formRef），
      //      * this.$refs.quote_scheme_form.model拿到model，里面有form上绑定的的全部数据。
      //     */
      //     this.$refs.quote_scheme_form.model.memo = data.value[0].refcode; // 给form中某个字段赋值，比如这里的memo(产品描述字段)
      //   }
      // },
    };
  },
  created() {
    this.request();
    var oThis = this;
    try {
      if (typeof window.designerCB !== "function") {
        // 设计器页面点击保存时执行的回调参数
        window.designerCB = function (pk_temp) {
          // oThis.requestProductInfo();
          if (pk_temp) {
            var currentIndex = -1; // pk_temp在templist数组中的index值
            var changedTempObj = null; // pk_temp对应的templist数组项
            oThis.templist.forEach((item, index) => {
              if (item.temp_id === pk_temp) {
                currentIndex = index;
                changedTempObj = item;
              }
            });

            if (changedTempObj && currentIndex > -1) {
              oThis.templist.splice(currentIndex, 1);
              // 先把修改的UI模板从数组中，先删除延迟200ms再添加，以触发页面重新渲染
              setTimeout(() => {
                oThis.templist.splice(currentIndex === 0 ? currentIndex : currentIndex - 1, 0, changedTempObj);
              }, 200);
            }
          } else {
            var arrTemplist = JSON.parse(JSON.stringify(oThis.templist));
            oThis.templist = [];
            // 先把UI模板数组先清空延迟200ms再赋值，以触发页面重新渲染
            setTimeout(() => {
              oThis.templist = arrTemplist;
            }, 200);
          }
        };
      }
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    afterCreateFun() {
      this.$nextTick(() => {
        this.baseFormData = JSON.parse(JSON.stringify(this.$refs.baseTemplateRef.getData("quoteScheme")));
      });
    },
    request() {
      this.pk_quote_scheme = this.$root.$router.currentRoute.params.id;
      // 请求客户基本信息详情
      if (this.pk_quote_scheme) {
        this.requestProductInfo();
      } else if (this.$root.$router.currentRoute.fullPath.indexOf('/add') > -1) {
        this.productEdit = true;
      }
    },
    // 请求产品方案信息详情
    requestProductInfo() {
      // var baseUrl = "/yls-busi-web/";
      this.$http({
        url: __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "quote/scheme/getById",
        headers: { 'Content-Type': 'application/json' },
        method: "post",
        data: this.pk_quote_scheme
      }).then(res => {
        if (res.data.success === true) {
          var originalValue = res.data.data;
          console.log(this.$refs.baseTemplateRef);
          // this.$set(this.productData, 'quoteScheme', JSON.parse(JSON.stringify(originalValue)));
          this.$refs.baseTemplateRef.setData("quoteScheme", JSON.parse(JSON.stringify(originalValue)));
          if (Object.prototype.toString.call(originalValue.templist) === '[object Array]' && originalValue.templist.length > 0) {
            this.templist = JSON.parse(JSON.stringify(originalValue.templist));
          }
        } else {
          this.$message({
            message: res.data.msg,
            type: "error"
          });
        }
      }).catch(e => {
        console.error(e);
        this.$message({
          message: "产品方案信息详情获取失败",
          type: "error"
        });
      });
    },
    // 点击取消按钮
    productInfoCancel() {
      this.productEdit = false;
      /**
       * 在设计器上将所有参照字段设置清空参照
       */
      // var refs = this.$refs.baseTemplateRef.comp.$refs;
      // for(let key in refs) {
      //   if(key.indexOf("ref_") > -1) {
      //     var ref = refs[key].$children[0];
      //       try {
      //         if(ref && typeof ref.reset === "function") {
      //           ref.reset();
      //         }
      //       } catch(e) {
      //         console.log(e);
      //       }
      //     }
      // }
      // 重置value
      this.$refs.baseTemplateRef.setData("quoteScheme", JSON.parse(JSON.stringify(this.baseFormData)));
    },
    // 点击保存按钮
    productInfoConfirm() {
      var url;
      var data = this.$refs.baseTemplateRef.getData("quoteScheme");
      data.templist = this.templist;
      console.log(data);
      var baseUrl = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */];
      if (this.pk_quote_scheme) {
        url = baseUrl + 'quote/scheme/update';
      } else {
        url = baseUrl + 'quote/scheme/create';
      }
      this.$refs.baseTemplateRef.comp.$refs["quote_scheme_form"].validate(valid => {
        if (valid) {
          this.$http({
            url: url,
            headers: { 'Content-Type': 'application/json' },
            method: "post",
            data: JSON.parse(JSON.stringify(data))
          }).then(res => {
            if (res.data.success === true) {
              this.$message({
                message: "产品方案数据保存成功",
                type: "success"
              });
              this.originalValue = res.data.data;
              this.$refs.baseTemplateRef.setData("quoteScheme", JSON.parse(JSON.stringify(this.originalValue)));
              this.productEdit = false;
              // 如果为新增，则跳转到详情页面
              if (this.originalValue.pk_quote_scheme && !this.pk_quote_scheme) {
                this.$router.replace('/productsolution/detail/' + this.originalValue.pk_quote_scheme);
                this.pk_quote_scheme = this.originalValue.pk_quote_scheme;
              }
            } else {
              this.$message({
                message: res.data.message,
                type: "error"
              });
            }
          }).catch(() => {
            this.$message({
              message: "产品方案数据保存失败",
              type: "error"
            });
          });
        }
      });
    },
    goBack() {
      this.$router.back();
    },
    refChangFun(id) {
      for (let i = 0; i < this.metadataOptions.length; i++) {
        if (this.metadataOptions[i].id === id) {
          this.metadataFormData.pkMetadata = this.metadataOptions[i].pid;
          this.metadataFormData.pkClass = this.metadataOptions[i].id;
          this.metadataFormData.sysflag = "Y";
          this.metadataFormData.type = this.metadataOptions[i].type;
          // this.metadataFormData.name = this.metadataOptions[i].value;
        }
      }
    },
    resetFormDialog() {
      Object.keys(this.metadataFormData).forEach(key => {
        this.metadataFormData[key] = '';
      });
      if (this.$refs.editForm) {
        this.$refs.editForm.resetFields();
      }
    },
    cancelFormDialog() {
      this.dialogFormVisiable = false;
    },
    // 点击新建UI模板弹框的确认按钮，创建UI模板
    confirm() {
      var oThis = this;
      this.$refs.editForm.validate(valid => {
        if (valid) {
          var formData = "data=" + JSON.stringify({ form: this.metadataFormData }) + "&pkMetadata=" + this.metadataFormData.pkMetadata + "&pk_temp=";
          this.$http({
            url: "/uitemplate_web/uitemplate_ctr/uitemplate_design_ctr/saveTemplate",
            method: 'post',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
            data: formData
          }).then(res => {
            if (res.data.form) {
              this.dialogFormVisiable = false;
              var data = res.data.form;
              var pkTemplateObj = {
                temp_id: data.pk_temp, // 模板pk_temp
                temp_title: data.name, // 模板名称
                temp_type: this.metadataFormData.type, // 模板类型
                pk_quote_scheme: this.pk_quote_scheme || '' // 主表id
              };
              this.saveTemplate(pkTemplateObj).then(() => {
                var pk_temp = data ? data.pk_temp : '';
                this.openDesiginerPage(pk_temp);
              });
            } else {
              this.$message({
                message: res.data.msg,
                type: "error"
              });
            }
          }).catch(e => {
            this.$message({
              message: "创建UI模板出错",
              type: "error"
            });
          });
          this.dialogFormVisiable = false;
        }
      });
    },
    // 将模板数据关联到该方案中
    saveTemplate(data) {
      // var baseUrl = '/yls-busi-web/';
      var url = __WEBPACK_IMPORTED_MODULE_0__common_js_publicData_js__["c" /* ylsBusi */] + "quote/scheme/temp/create";
      debugger;
      return this.$http({
        url: url,
        headers: { 'Content-Type': 'application/json' },
        method: "post",
        data: JSON.parse(JSON.stringify(data))
      }).then(res => {
        if (res.data.success === true) {
          var pkTemplateObj = JSON.parse(JSON.stringify(data));
          // 添加取子表的pk_quote_scheme_temp
          pkTemplateObj.pk_quote_scheme_temp = res.data.data.pk_quote_scheme_temp;
          this.templist.push(pkTemplateObj);
          this.$message({
            message: "产品方案模板数据保存成功",
            type: "success"
          });
        }
      }).catch(e => {
        console.log("产品方案模板数据保存出错", e);
        this.$message({
          message: "产品方案模板数据保存出错",
          type: "error"
        });
      });
    },
    openDesiginerPage(pk) {
      var baseUrl = location.protocol + "//" + location.host + "/uitemplate_web/index.html?pk_temp=";
      // 打开新窗口根据 pk_temp 进入设计器页面
      window.open(baseUrl + pk);
    },
    showDeleteDesiginerDialog(data, index) {
      this.$confirm('确定从该方案中删除此关联模板吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteQuoteSchemeComp(data, index).then(() => {
          // 从该方案中删除此模板pk后，再根据pk从模板库中删除
          this.deleteTemplateData(data);
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    // 从该方案中删除此模板pk后
    deleteQuoteSchemeComp(data, index) {
      var baseUrl = '/yls-busi-web/';
      var url = baseUrl + "quote/scheme/temp/deleteById";
      return this.$http({
        url: url,
        headers: { 'Content-Type': 'application/json' },
        method: "post",
        data: data.pk_quote_scheme_temp
      }).then(res => {
        if (res.data.success === true) {
          this.$message({
            message: "方案模板：" + data.temp_title + "从该方案中删除成功",
            type: "success"
          });
          this.templist.splice(index, 1);
        }
      }).catch(e => {
        console.log("方案模板：" + data.temp_title + "从该方案中删除出错", e);
        this.$message({
          message: "方案模板：" + data.temp_title + "从该方案中删除出错",
          type: "error"
        });
      });
    },
    // 根据pk从模板库中删除模板
    deleteTemplateData(data) {
      var url = "/uitemplate_web/uitemplate_ctr/uitemplate_design_ctr/deleteTemplate";
      this.$http({
        url: url,
        contentType: 'application/x-www-form-urlencoded',
        method: "post",
        data: "data=" + JSON.stringify({ form: { id: data.temp_id } })
      }).then(res => {
        if (res.data.status === 1) {
          this.$message({
            message: '方案模板：' + data.temp_title + "从UI模板库中删除成功",
            type: "success"
          });
        }
      }).catch(e => {
        console.log("模板" + data.temp_title + "从UI模板库中删除出错", e);
        this.$message({
          message: "模板" + data.temp_title + "从UI模板库中删除出错",
          type: "error"
        });
      });
    }
  }
});

/***/ }),

/***/ 529:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 629:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-panel",
    attrs: {
      "id": "product-detail"
    }
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "detail-main-container clearfix"
  }, [_c('div', {
    staticClass: "header-panel"
  }, [_c('el-button', {
    staticClass: "fr",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.goBack
    }
  }, [_vm._v("返 回")])], 1), _vm._v(" "), _c('ifbp-panel-group', {
    attrs: {
      "navbar": true,
      "base-scroll-top": 50,
      "scroll-dom": _vm.scrollDom,
      "base-nav-bar-top": 125
    }
  }, [_c('ifbp-panel', {
    attrs: {
      "id": "productInfo",
      "title": "方案信息",
      "icons": _vm.baseIcons
    }
  }, [_c('ifbp-template', {
    ref: "baseTemplateRef",
    attrs: {
      "tplId": "baseTemplate",
      "pkTemp": _vm.productPk,
      "show-type": "form",
      "tplData": _vm.productData,
      "editable": _vm.productEdit
    },
    on: {
      "after-create": _vm.afterCreateFun
    }
  }), _vm._v(" "), (_vm.productEdit) ? _c('div', {
    staticClass: "form-button-div"
  }, [_c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "default"
    },
    on: {
      "click": _vm.productInfoCancel
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    staticClass: "button-no-radius",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.productInfoConfirm
    }
  }, [_vm._v("保存")])], 1) : _vm._e()], 1), _vm._v(" "), (!!_vm.pk_quote_scheme) ? _c('ifbp-panel', {
    attrs: {
      "id": "productPreview",
      "title": "方案展示",
      "icons": _vm.addIcons
    }
  }, _vm._l((_vm.templist), function(item, index) {
    return _c('ifbp-panel', {
      key: item.temp_id,
      attrs: {
        "id": 'productPreviewDetail' + index,
        "title": item.temp_title
      }
    }, [_c('div', {
      staticClass: "template-title"
    }, [_c('i', {
      staticClass: "el-icon-menu fr",
      attrs: {
        "title": "设计模板"
      },
      on: {
        "click": function($event) {
          _vm.openDesiginerPage(item.temp_id)
        }
      }
    }), _vm._v(" "), _c('i', {
      staticClass: "el-icon-delete fr",
      attrs: {
        "title": "删除模板"
      },
      on: {
        "click": function($event) {
          _vm.showDeleteDesiginerDialog(item, index)
        }
      }
    })]), _vm._v(" "), _c('ifbp-template', {
      attrs: {
        "pkTemp": item.temp_id,
        "tplId": item.temp_id,
        "editable": true
      }
    })], 1)
  })) : _vm._e()], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "创建UI模板",
      "modal": false
    },
    model: {
      value: (_vm.dialogFormVisiable),
      callback: function($$v) {
        _vm.dialogFormVisiable = $$v
      },
      expression: "dialogFormVisiable"
    }
  }, [_c('el-form', {
    ref: "editForm",
    attrs: {
      "model": _vm.metadataFormData,
      "label-width": "100px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "模板名称:",
      "prop": "name",
      "rules": [{
        required: true,
        message: '模板名称不能为空'
      }]
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.metadataFormData.name),
      callback: function($$v) {
        _vm.metadataFormData.name = $$v
      },
      expression: "metadataFormData.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "元数据:",
      "prop": "pkClass",
      "rules": [{
        required: true,
        message: '元数据不能为空'
      }]
    }
  }, [_c('el-select', {
    on: {
      "change": _vm.refChangFun
    },
    model: {
      value: (_vm.metadataFormData.pkClass),
      callback: function($$v) {
        _vm.metadataFormData.pkClass = $$v
      },
      expression: "metadataFormData.pkClass"
    }
  }, _vm._l((_vm.metadataOptions), function(item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "label": item.value,
        "value": item.id
      }
    })
  }))], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": _vm.cancelFormDialog
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.confirm
    }
  }, [_vm._v("确 定")])], 1)], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title-container"
  }, [_c('h2', {
    staticClass: "name"
  }, [_vm._v("产品方案设计")])])
}]}

/***/ }),

/***/ 784:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(529)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(481),
  /* template */
  __webpack_require__(629),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

/******/ })});;
//# sourceMappingURL=product-detail.vue.58c6ca0da55f9168b9d5.en.js.map