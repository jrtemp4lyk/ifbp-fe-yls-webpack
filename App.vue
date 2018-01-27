<template>
<div id="app">
  <!-- 头部导航 -->
  <!-- <div class="collapse-btn" :class="{collapseColor: collapse}" @click="changeNav">
    <i style="font-size: 30px;line-height: 70px;color: red" class="el-icon-pt-fenlei1"></i>
  </div> -->
  <header class="header" :class="themeColor">
    <el-row>
      <el-col :lg="12" :md="12" :sm="12" :xs="10" class="logo" style="min-width: 130px; position: absolute">
        <a><img class="logoImg" :src="imgUrl"/></a>
        <!--
        <a><img class="logoImg" src="/ap/static/img/logo_ifbp.svg"/></a>
      -->

        <!-- <a href="/ifbp-mall" class="logoImg"></a> -->
        <span class="headerTitle" v-show="showTitle">构建生态金融</span>
        <!-- <a class="headerTitle">构建生态金融</a> -->
        <i class="el-icon-arrow-left shotcut" v-if="showBack" @click="backInfo" title="返回"></i>
        <i v-if="['/index', '/appArea'].indexOf(item.path) > -1" v-for="(item, index) in sysTabs" :class="[item.icon, {'shotcut': true}]" @click="openUrl(item.path)" :title="item.label"></i>
        <!-- 新多页签代码 -->
        <span v-if="showTabs" :class="['closeable',{'vertical-line': index === 1}]"
          v-for="(item, index) in editableTabs"
          :data-path="item.path">
          <i :class="[(item.icon ? item.icon + ' iconfont_form' : 'iconfont_form icon-appicon'), {'shotcut': true, 'focus': (index === tabIndex && ['/index', '/appArea'].indexOf(item.path) < 0)}]" @click="changeTabs(index)" :title="item.label"></i>
          <i class="el-icon-close" @click="closeTabs(index)"></i>
        </span>
        <!-- <i class="el-icon-pt-leimu shotcut" @click="" title="磁贴"></i> -->
        <!-- <div class="title" style="line-height: 70px;font-size: 20px;display: inline-block;vertical-align: top;">互联网小微金融业务平台</div> -->
        <!-- <span class="topTitle">我的工作台</span> -->
      </el-col>
      <el-col :lg="0" :md="0" :sm="0" :xs="0" style="display: inline-block;">
        <headerMenu ref="headerMenu" :menuData="menuData"></headerMenu>
      </el-col>
      <el-col :lg="12" :md="12" :sm="12" :xs="14" class="person-set" style="min-width: 186px; position: absolute; right: 0">
        <el-user :username="username" msgcenter="/messageCenter" :msgcount="unreadcnt" @logout="logout" :show-message="false" :settings-data="sysSettings" style="margin-right:15px;">
          <!-- <el-dropdown-item slot="item"><span @click="sysmgr">管理中心</span></el-dropdown-item> -->
          <!--             <li>
              <el-button type="text"
                         @click="openDialog"
                         style="font-size: 12px;display: inline-block;width: 100%;height: 70px;">
                <i v-if="!addCard" class="el-icon-plus topIco iconfont" style="color:black"></i>
                <i v-if="addCard" class="el-icon-close topIco iconfont" style="color:black"></i>
              </el-button>
            </li> -->
          <!--<li style="padding: 0 10px;">-->
          <!--<el-button @click="requestMenu(1)" v-if="style === 'ifr'" type="text"><span>切换风格</span></el-button>-->
          <!--<el-button @click="requestMenu()" v-if="style === 'tile'" type="text"><span>切换风格</span></el-button>-->
          <!--</li>-->
        </el-user>
      </el-col>
    </el-row>
  </header>

  <!-- 导航 -->
  <!-- <transition name="fade">
      <el-main-nav v-if="menuList"
                   :type="type"
                   :menuList="menuList"
                   :collapse="collapse"
                   :theme="themeColor">
      </el-main-nav>
    </transition> -->

  <main>
    <!-- 主内容区 -->
    <!-- <transition name="fade">
      <div id="main-left" :class="{collapse: collapse}">
        <el-main-nav v-if="menuList" :type="type" :menuList="menuList" :collapse="collapse" :theme="themeColor">
        </el-main-nav>
      </div>
    </transition> -->
    <div id="main-right" :class="{collapse: collapse}" :style="{overflow: $root.$router.path && $root.$router.path.indexOf('staff') > 0 ? 'hidden' : 'auto'}">
        <!-- sysTabs components -->
        <!-- <component v-if="mainHeadTitle === sysComponent.label" :is="sysComponent.component" style="display:flex;flex-direction: column;padding-bottom:0px;height:100%; min-width: 320px; overflow:auto;"></component> -->
        <router-view  v-if="sysTab" class="view" style="display:flex;flex-direction: column;padding-bottom:0px;height:100%; min-width: 320px; overflow:auto;"></router-view>
        <!-- editableTabs components -->
        <component :is="item.component" v-for="(item, index) in editableTabs" :key="item.path" v-show="index==tabIndex" style="display:flex;flex-direction: column;padding-bottom:0px;height:100%; min-width: 320px; overflow:auto;"></component>
        <!-- <router-view class="view" style="display:flex;flex-direction: column;padding-bottom:0px;height:100%; min-width: 320px; overflow:auto;"></router-view> -->
    </div>

  </main>

  <!--添加磁贴-->
  <!-- <el-side-dialog :show="addCard" :list="list"></el-side-dialog>
  <div class="chartClick" style="position:absolute;right:10px;bottom:10px;">
    <el-button type="primary" @click="showChart">聊天</el-button>
  </div>
  <iframe class="chartIframe" src="pages/im/index.html" width="100%" height="" v-if="chartShow" v-clickoutside="handleClickoutside"></iframe> -->

</div>
</template>

<script>
import Vue from 'vue';
import Router from 'vue-router';
import Element from 'ifbp-element';
import router from './router';
window.baseRouter = router;
import nullRouter from './common/nullRouter.vue';
// import 'ifbp-element/lib/theme-default/index.css';
import 'assets/css/bootstrap-mini.css';
import 'assets/css/mainStyle.css';
import 'assets/css/pageStyle.css';
import 'assets/css/icon.css';
import 'assets/css/applet.css';
import {
  bus
} from 'bus.js';
import headerMenu from './common/header-menu/menu.vue';
// import Clickoutside from 'ifbp-element/src/utils/clickoutside';
//import sidebarjson from '../static/sidebar.json';
import Mock from 'mockjs';
window.Mock = Mock;
import context from './util/context.js';
Vue.prototype.$context = context;
Vue.prototype.$eventBus = bus;


// 引入组件
window.Vue=Vue;
Vue.use(Element);
Vue.filter('time', value => new Date(parseInt(value, 10) * 1).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " "));
Vue.filter('time1', value => new Date(parseInt(value, 10) * 1).toLocaleString()
  .replace(/年|月/g, "-")
  .replace(/日/g, " ")
  .replace(/上午|下午/g, " "));


export default {
  name: 'app',
  data() {
    return {
      sysSettings: { // 系统设置
        themeCode: '', // 主题
        themeName: '',
        showTabs: true, // 是否显示多页签
        userId: '',
      },
      showTitle: true,
      imgUrl:'/ap/static/img/logo_ifbp.svg',
      chartShow:false,
      unreadcnt: 0,
      active: true,
      style: 'ifr',
      type: 'click',
      collapse: 'false',
      showTabs: true, // 是否显示多页签
      headerFixed: true,
      leftFixed: true,
      addCard: false,
      resetShow: false,
      themeColor: '',
      menuList: [{
        id: '/index',
        name: '首页',
        icon: 'el-icon-pt-shouye'
      }],
      menuData: [],
      gList: [],
      username: '',
      intervalid1: '',
      list: [{
          src: require('./assets/images/1.png')
        },
        {
          src: require('./assets/images/2.png')
        },
        {
          src: require('./assets/images/1.png')
        },
        {
          src: require('./assets/images/3.png')
        },
        {
          src: require('./assets/images/2.png')
        },
        {
          src: require('./assets/images/3.png')
        }
      ],
      showMenu: false,
      showBack: false,
      sysTabs: [
        {
          path:'/index',
          label: '首页',
          icon: 'el-icon-pt-shouye',
          component: this.$router.getMatchedComponents('/index')[0]
        }, {
          path:'/appArea',
          label: '应用中心',
          icon: 'el-icon-pt-leimu',
          component: this.$router.getMatchedComponents('/appArea')[0]
        },
        {
          path:'/messageCenter',
          label: '消息中心',
          appIcon: 'el-icon-pt-daohang-xiaoxi',
          component: this.$router.getMatchedComponents('/messageCenter')[0]
        },
        {
          path:'/messageDetail',
          label: '信息详情',
          appIcon: 'el-icon-pt-daohang-xiaoxi',
          component: this.$router.getMatchedComponents('/messageCenter')[0]
        }
      ],
      sysComponent: {
        path: '',
        component: null
      },
      editableTabsValue: '',
      editableTabs: [],
      editableTabsRouter: [],
      tabIndex: -1,
      allList: [
        {
          path:'/index',
          label: '首页',
          appIcon: 'el-icon-pt-shouye'
        },
        {
          path:'/appArea',
          label: '应用中心',
          appIcon: 'el-icon-pt-leimu'
        },
        {
          path:'/messageCenter',
          label: '消息中心',
          appIcon: 'el-icon-pt-daohang-xiaoxi'
        },
        {
          path:'/messageDetail',
          label: '信息详情',
          appIcon: 'el-icon-pt-daohang-xiaoxi',
        }
      ]
    };
  },
  components: {
    headerMenu,
  },
  computed:{
    sysTab() {
      return this.tabIndex < 0;
    }
  },
  // directives: { Clickoutside },
  methods: {
    showChart(){
      this.chartShow = true;
    },
    handleClickoutside() {
      this.chartShow = false;
    },
    getUrlSearch(href) {
      var name = "";
      var value = "";
      var search = {};
      var str = href || location.href; //取得整个地址栏
      var num = str.indexOf("?")
      str = str.substr(num+1); //取得所有参数   stringvar.substr(start [, length ]

      var arr = str.split("&"); //各个参数放到数组里
      for(var i = 0;i < arr.length;i++){
        num = arr[i].indexOf("=");
        if(num > 0){
          name = arr[i].substring(0,num);
          value = arr[i].substr(num+1);
          search[name] = value;
        }
      }
      return search;
    },
    removeHeaderFromDom() {
      this.$root.$el.querySelector("header.header").style.display = "none";
      this.$root.$el.querySelector("main").style.paddingTop = "0px";
      this.$nextTick(() => {
        this.resize();
      });
    },
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
    openDialog() {
      this.addCard = !this.addCard;
    },
    changeNav() {
      this.collapse = !this.collapse;
    },
    sysmgr() {
      window.location.hash = 'sysmgr';
    },
    logout() {
      localStorage.removeItem('wbalone_isLogin');
      var protocol = window.location.protocol; // 协议
      var host = window.location.host; // ip+端口
      var currentUrl = protocol + '//' + host  + window.ctxs.ap + '/'; // 当前URL
      var logoutUrl = this.getCookie("_A_P_logoutUrl") || ''; // 需要跳转的URL
      var serviceUrl = logoutUrl.replace(/"/g, '') + '?service=' + currentUrl;
      // var serviceUrl = window.location.href;
      window.location.href = window.ctxs.ap + '/logout?service=' + encodeURIComponent(serviceUrl);
    },
    requestMenu() {
      const url = window.ctxs.ap + '/appMGT/appCenter/allList?showway=apparea&areaId=&groupId=';
      window.appRouterArr = [];
      this.$http({
        url: url,
        method: 'get'
      }).then((res) => {
        if (res.data.msg === 'success') {
          var data = res.data.data;
          var arr = [];
          var successFun = (conf) => {
            var appKey;
            for(var key in conf){
              appKey = key;
            }
            var baseUrl = '/' + appKey;
            var appObj = conf[appKey];
            var appCurLang = appObj.curLang;
            var routers = appObj.routers;

            for (var k = 0; k < routers.length; k++) {
              routers[k].BaseComponent = routers[k].component;
              routers[k].component = nullRouter;
            }
            var appRouter = new Router({
              routes: routers
            });
            window.appRouterArr.push(appRouter);
            if(appCurLang){
              appRouter.beforeEach((to, from, next) => {
                var matchPath = to.matched.length > 0 ? to.matched[0].path : '';
                var curPage;
                var curPageJs;
                var curPageCss;
                var requireMode;
                for (var j = 0; j < routers.length; j++) {
                  if (routers[j].path === matchPath) {
                    requireMode = appKey + '//' + routers[j].BaseComponent;
                    curPageJs = routers[j].js;
                    curPageCss = routers[j].css;
                  }
                }
                if (requireMode) {

                  var commono = appObj.common;
                  // var commonIndexJs = commono.js;
                  var commonIndexCss = commono.css;
                  var module1 = '/' + appCurLang + '/' + curPageJs;
                  var module2 = 'css!/' + appCurLang + '/' + curPageCss;
                  // var module3 = baseUrl + '/common/' + commonIndexJs;
                  var module4 = 'css!/'  + appCurLang + baseUrl + '/common/' + commonIndexCss;
                  try{
                    window.require([module1, module2,module4], () => {
                      window.require([requireMode], (obj) => {
                        router.addRoutes([{
                          path: matchPath,
                          component: Vue.extend(obj)
                        }]);
                        if (router.getMatchedComponents(to.path).length > 0) {
                          router.push(to.fullPath);
                        }
                      });
                    });
                  }catch(e){
                    window.require([requireMode], (obj) => {
                      router.addRoutes([{
                        path: matchPath,
                        component: Vue.extend(obj.default)
                      }]);
                      if (router.getMatchedComponents(to.path).length > 0) {
                        router.push(to.fullPath);
                      }
                    });
                  }

                }
                next(true);
              });
            }else{
              appRouter.beforeEach((to, from, next) => {
                var matchPath = to.matched.length > 0 ? to.matched[0].path : '';
                var curPage;
                var curPageJs;
                var curPageCss;
                var requireMode;
                for (var j = 0; j < routers.length; j++) {
                  if (routers[j].path === matchPath) {
                    curPage = routers[j].curPage;
                    requireMode = appKey + '^' + routers[j].BaseComponent;
                  }
                }
                if (curPage && requireMode) {

                  var cur = appObj[curPage];
                  curPageJs = cur.js;
                  curPageCss = cur.css;
                  var commono = appObj.common;
                  var commonIndexJs = commono.js;
                  var commonIndexCss = commono.css;
                  var module1 = baseUrl + '/pages/' + curPageJs;
                  var module2 = 'css!' + baseUrl + '/pages/' + curPageCss;
                  var module3 = baseUrl + '/common/' + commonIndexJs;
                  var module4 = 'css!' + baseUrl + '/common/' + commonIndexCss;
                  try{
                    window.require([module1, module2, module3, module4], () => {
                      window.require([requireMode], (obj) => {
                        router.addRoutes([{
                          path: matchPath,
                          component: Vue.extend(obj.default)
                        }]);
                        if (router.getMatchedComponents(to.path).length > 0) {
                          router.push(to.fullPath);
                        }
                      });
                    });
                  }catch(e){
                    window.require([requireMode], (obj) => {
                      router.addRoutes([{
                        path: matchPath,
                        component: Vue.extend(obj.default)
                      }]);
                      if (router.getMatchedComponents(to.path).length > 0) {
                        router.push(to.fullPath);
                      }
                    });
                  }

                }
                next(true);
              });
            }
            
            if (window.notFoundPath) {
              appRouter.push(window.notFoundPath);
            }
          };
          if (Object.prototype.toString.call(data) === '[object Array]') {
            for (let i = 0; i < data.length; i++) {
              data[i].areaKey = 'yls'
              if (data[i].areaKey && data[i].areaKey !== 'webalone') {
                var baseUrl = '/' + data[i].areaKey;
                var curLang = this.$context.getCurrentLang();
                curLang= 'en';
                if(curLang){
                  baseUrl = '/' + curLang + '/' + data[i].areaKey;
                }
                var configUrl = baseUrl + "/config.js";
                $.ajax({
                  type: "get",
                  url: configUrl,
                  dataType: "json",
                  async: true,
                  success: successFun.bind(this)
                });
              }
            }
            this.menuData = data;
            /* 循环收集所有路由到一个allList数组里,后面对应mainHeaderTitle需要 */
            var self = this;
            this.allList = [{path:'/index', label: '首页', appIcon: 'el-icon-pt-shouye'}, {path:'/appArea', label: '应用中心', appIcon: 'el-icon-pt-leimu'},{path: '/messageCenter', label: '消息中心', appIcon: 'el-icon-pt-daohang-xiaoxi'}, {path:'/messageDetail', label: '信息详情', appIcon: 'el-icon-pt-daohang-xiaoxi'}];
            if(data.length) {
              data.forEach((item) => {
                if(item.children && item.children.length) {
                  item.children.forEach((item1) => {
                    if(item1.children && item1.children.length) {
                      item1.children.forEach((item2) => {
                        self.allList.push(item2);
                      });
                    } else {
                      self.allList.push(item);
                    }
                  });
                }
              });
            }

              var currentPath = this.$route.fullPath;
              var list = this.findTitleToReset(currentPath, this.allList);
              if(currentPath === '/index' || currentPath === '/appArea') {
                this.showBack = false;
              }
              if(currentPath !== '/index' && currentPath !== '/appArea' && currentPath !== '/'){
                router.push('/index');
                this.addEditableTabs(currentPath, list);
              }
                
          }
          this.menuList = this.menuList.concat(arr);
        }
      });
    },
    requestMsg() {
      this.$http({
        url: '/ifbp-app-sm/sm/messageCenter/queryNum',
        method: 'get'
      }).then((res) => {
        if (res.data.success === true) {
          this.unreadcnt = res.data.data;
        }

      });
      // this.unreadcnt=json.data;
      // console.log(this.unreadcnt);
    },
    resize() {
      var windowWidth = window.innerWidth ||
        ((document.body) && (document.body.clientWidth)); // 窗口宽度
      var windowHeight = window.innerHeight ||
        ((document.body) && (document.body.clientHeight)); // 窗口高度
      var headerDom = document.querySelector("header.header");
      var headerHeight = headerDom ? headerDom.offsetHeight : 0; // header高度
      var mainRightHeight = windowHeight - headerHeight; // #main-right 高度
      document.querySelector("#main-right").style.height = mainRightHeight + 'px'; // 为 main-right 设置高度

      // if (windowWidth < 900) {
      //   this.collapse = false;
      // } else {
      //   this.collapse = true;
      // }
    },
    hideMenuHandle() {

    },
    openUrl(path) {
      if(path === '/appArea' || path === '/index'){
        this.tabIndex = -1;
      }
      this.$router.push(path);
    },
    
    changeTabs(index){
      var path = this.editableTabsRouter[index].router.currentRoute.fullPath;
      this.tabIndex = index; 
      router.push(path);
    },

    closeTabs(index){
      this.editableTabs.splice(index,1);
      this.editableTabsRouter.splice(index,1);
      
      if(this.editableTabs.length > 0){
        var newIndex = this.tabIndex -1;
        if(index > this.tabIndex){
          newIndex = this.tabIndex;
        }
        if(newIndex < 0)
          newIndex = 0;
        this.changeTabs(newIndex);
      }else{
        this.tabIndex = -1;
        router.push('/appArea');
      }
    },
    
    addEditableTabs(path, item){
      var tilecode = this.getUrlSearch(path).tilecode;
      if(tilecode && tilecode  !== item.code && item.code){
        if (path.indexOf('?') > 0)
          path = path + '&tilecode=' + item.code;
        else
          path = path + '?tilecode=' + item.code;
      }
      if(this.showTabs){
        if(this.editableTabs && this.editableTabs.length > 0){
          for(var i = 0; i < this.editableTabs.length;i++){
            var nowPath = this.editableTabs[i].path;
            var nowTilecode = this.getUrlSearch(nowPath).tilecode;
            if(nowTilecode === item.code){
              this.changeTabs(i);
              return;
            }
          }
        }
        var maxTabCount = 5;
        if(this.editableTabs.length >= maxTabCount){
          Vue.prototype.$message({
            message: "最多打开5个页签，请关闭其他标签!",
            duration: 2000,
            showClose: true
          });
          return;
        }
        var vm = this;
        var routes = router.options.routes || [];
        if(window.appRouterArr && window.appRouterArr.length > 0){
          for(var i = 0; i < window.appRouterArr.length; i++){
            var appRouter = window.appRouterArr[i];
            var appRouterRoutes = appRouter.options.routes;
            routes = routes.concat(appRouterRoutes);
          }
        }
        var newRouter = new Router({
          routers: routes,
          mode: 'abstract'
        });
        newRouter.beforeEach((to, from, next) => {
          var path = to.fullPath;
          if (from.query.tilecode && path.indexOf("tilecode=" + from.query.tilecode) < 0){
            path = to.fullPath + (to.fullPath.indexOf('?') > 0 ?  '&tilecode=' + from.query.tilecode : '?tilecode=' + from.query.tilecode)
          }
          // 重新设置title
          vm.findTitleToReset(to.fullPath, vm.allList);

          next(true);
          router.push(path);
        });
        this.editableTabs.push({
          path: path,
          label: item.label,
          icon: item.appIcon
        });
        this.editableTabsRouter.push({
          router: newRouter
        })
        this.tabIndex = this.editableTabs.length - 1;
        newRouter.push(path);
      }else{
        router.push(path);
      }
    },
    backInfo() {
      if(this.tabIndex > -1){
        this.editableTabsRouter[this.tabIndex].router.go(-1);
        // this.editableTabsRouter[this.tabIndex].router.go(-1);
      }else{
        this.$router.go(-1);
      }
      // this.$router.push('/appArea');
    },

    slicePath(path) {
      var lastIndex = path.lastIndexOf("/");
      var newPath = '';
      if(lastIndex >0) {
        newPath = path.slice(0, lastIndex);
      }
      return newPath;
    },

    findTitleToReset(path, allList) {
      if(!path) {
        return {};
      }
      if(path.indexOf('?') >0){
        path = path.substring(0,path.indexOf('?'));
      }
      var setted = false;
      // 每次路由跳转，设置对应的菜单标题
      for(var i = 0; i < allList.length; i++) {
        if(path.lastIndexOf("/") === 0) { // 对应/crm/personalInfo/add 按 /crm/crmList 的title
          if(allList[i].path && allList[i].path.match(/\/\w+/) && allList[i].path.match(/\/\w+/)[0] === path) {
            this.$refs.headerMenu.mainHeadTitle = allList[i].label;
            this.currentAppItem = allList[i];
            setted = true;
            // break;
            return allList[i];
          }
        } else if (allList[i].path === path) { // 其他类型的直接判断是否相等
          this.$refs.headerMenu.mainHeadTitle = allList[i].label;
          this.currentAppItem = allList[i];
          setted = true;
          // break;
          return allList[i];
        }
      }
      if(!setted) {
        // 递归查找
        return this.findTitleToReset(this.slicePath(path), allList);
      }
    },

    //获取首页logo图片
    getImgUrl(){
      // var tenantId;
      var self = this;
      // tenantId =  this.getCookie('tenantid');
      this.$http({
        url:'/wbalone/tenantMGT/getTenantInfo',
        type:'get'
      }).then((res) => {
        var resData = res.data.data[0];
        if(res.data.success === true && res.data.data.length !== 0){
          if(resData.logoimg !== ''){
            self.imgUrl = '/ifbp-app-bd/bd/psn/psndoc/avatarImgDownLoad?avatar='+resData.logoimg;
            self.showTitle = false;
          }
        } else {
          return;
        }
      }).catch((e) => {
        self.showTitle = false;
      });
    },

    // 获取系统设置的数据
    getSettingsData() {
      this.$http({
        url: '/wbalone/wbTheme/getPresentUserTheme',
        method: 'get',
      }).then((res) => {
        if(res.data.status === 1) {
          var data = res.data.data || {};
          Object.keys(this.sysSettings).forEach(key => {
            this.$set(this.sysSettings, key, data[key] === undefined ? '' : data[key]);
          });
          this.showTabs = data.showTabs;
        }
      }).catch((e) => {
        console.log("获取系统设置数据失败, " + e);
      });
    },
    // updateParams(route){
    //   var query = route.query;
    //   this.$context.cleanParams();
    //   for (var key in query){
    //     this.$context.setParam(key, query[key]);
    //   }
    // }
  },
  created() {
    // if (window.location.hash === '#/'){
    //   window.location.hash = '#/index';
    //   return;
    // }
    this.getSettingsData();
    this.getImgUrl();
    this.$on('groupList', (hash) => {
      window.location.hash = hash;
    });
    this.$on('changeR', () => {
      this.resetShow = !this.resetShow;
    });
    bus.$on('selectTheme', (e) => {
      this.themeColor = e;
    });
    this.$on('closeSideDialog', () => {
      this.addCard = !this.addCard;
    });
    const localColor = localStorage.getItem('themeColor');
    this.themeColor = localColor;
    const username = this.getCookie('_A_P_userName');
    if (username.indexOf('%') > -1) {
      this.username = decodeURIComponent(username);
    } else {
      this.username = username;
    }
    this.requestMenu();
    this.requestMsg();
    this.intervalid1 = setInterval(() => {
      this.requestMsg();
    }, 120000);
  },
  mounted() {
    // this.updateParams(this.$router.currentRoute);
    /* 页签代码 */
    // var path = this.$router.history.current.fullPath;
    // var label = this.$router.history.current.meta.title || '新页签';
    // this.addEditableTabs({
    //   path: path,
    //   label: label
    // });
    // this.tabIndex = 0;
    this.resize();
    window.addEventListener('resize', () => {
      this.resize();
    });

    var urlSearch = this.getUrlSearch();
    if(self!=top){ // 在iframe中
      if(urlSearch.header === 'yes'){
      }else{
        this.removeHeaderFromDom();
      }
    }else{
      if(urlSearch.header === 'no'){
        this.removeHeaderFromDom();
      }else{
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.intervalid1);
  },
  watch: {
    '$route'(route) {
      // this.updateParams(route);
      this.$eventBus.$emit('routerChange', route);
      if((route && route.fullPath) === '/index' || (route && route.fullPath) === '/appArea') {
        this.showBack = false;
      } else {
        if(this.showTabs){
          var h  = this.editableTabsRouter[this.tabIndex].router.history;
          if(h.index === 0){
            this.showBack = false;
          }else{
            this.showBack = true;
          }
        }else{
          this.showBack = true;
        }
      }
    }
  }
};
</script>

<style scoped>
.header .person-set,
.header .logo {
  display: inline-block;
  vertical-align: top;
}
/*.header .logo {
    width: calc(100% - 123px);
    min-width: 400px;
  }
  .header .person-set {
    width: 123px;
  }*/
</style>

<style>
html {
  min-width: 320px;
  font-size: 16px;
}

body {
  overflow: hidden;
  /* position:absolute; */
  width: 100%;
  top: 0;
  bottom: 0;
  margin: 0;
}

#app {
  margin: 0 auto;
  font-family: "Microsoft Yahei", "Hiragino Sans GB", "Helvetica Neue", Helvetica, tahoma, arial, Verdana, sans-serif, "WenQuanYi Micro Hei", "\5B8B\4F53";
  position: relative;
  height: 100%;
  background-color: rgba(239, 243, 246, 1);
}

.chartIframe {
  position: fixed !important;
  bottom: 0;
  right:0;
  z-index: 100  !important;
  /*pointer-events：none;*/
  /*display: none;*/
}



/* reset element-ui*/

.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Microsoft Yahei", "Hiragino Sans GB", "Helvetica Neue", Helvetica, tahoma, arial, Verdana, sans-serif, "WenQuanYi Micro Hei", "\5B8B\4F53";
}

.el-dropdown-menu {
  margin: 0!important;
}

.el-dropdown-link {
  display: inline-block;
  line-height: 70px;
}

.el-dropdown-link i {
  font-size: 22px;
  vertical-align: middle;
}

.index .el-tabs__header {
  padding-top: 6px!important;
}

.index>.el-tabs__header .el-tabs__nav-wrap {
  padding-left: 35px!important;
}

.index>.el-tabs__header .el-tabs__nav {
  border-bottom: 1px solid #ffffff!important;
}

.index .el-tabs__item {
  -webkit-border-radius: 0!important;
  -moz-border-radius: 0!important;
  border-radius: 0!important;
  height: 36px!important;
  line-height: 36px!important;
  padding: 0 13px!important;
  border-bottom: 1px solid #d1dbe5!important;
  margin-bottom: -1px;
}

.index>.el-tabs__header .el-tabs__item.is-active {
  color: #000!important;
  border-bottom: 1px solid #ffffff!important;
  font-weight: bold;
}

.side div.el-dialog {
  position: fixed;
  border-radius: 0;
  left: initial;
  right: 0;
  height: 100%;
  transform: translateX(0)!important;
  z-index: 999;
}





/* 头部导航 */

header.header {
  position: fixed;
  padding-top: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
  min-width: 190px;
  transition: all .5s ease;
  background-color: #FFFFFF;
  border-bottom: 2px solid rgba(230, 0, 18, 1);
  box-sizing: border-box;
}

header.header a,
header.header p {
  color: #71787E;
}

.header .logo {
  height: 70px;
  line-height: 70px;
  text-align: left;
  /* min-width: 160px; */
}
.header .headerTitle{
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", 微软雅黑, Arial, sans-serif;
  width: 96px;
  margin-left: 10px;
  font-size: 16px;
  text-align: left;
  color: #5a5a5a;
}

.header .logo .logoImg {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", 微软雅黑, Arial, sans-serif;
  width: 109px;
  line-height: 32px;
  height: 32px;
  float: left;
  margin: 20px 0 20px 10px;
  /*margin: 16px auto;*/
  text-indent: -5000px;
  /* background: url(./assets/images/logo_ifbp.svg) left center no-repeat; */
  background-size: 108px;
  color: #666;
}
.header .topTitle {
  font-family: "Microsoft Yahei", "Hiragino Sans GB", "Helvetica Neue", Helvetica, tahoma, arial, Verdana, sans-serif, "WenQuanYi Micro Hei", "\5B8B\4F53";
  font-size: 18px;
  color: black;
  padding: 4px 0 4px 20px;
  border-left: 1px solid #71787E;
}

.header .person-set {
  float: right;
}

.header .shotcut {
  font-size: 16px;
  padding: 8px;
  border-radius: 20px;
  cursor: pointer;
  position: relative;
}

/* .header span.closeable .shotcut {
  background-color: #e8e8e8;
} */

.header .shotcut:hover {
  /* color: #fff !important; */
  background-color: #e4e8ec;
}

.header .shotcut.focus {
  color: #fff !important;
  background-color: #75808b;
}

span.closeable:hover i.el-icon-close {
  display: block;
}

span.closeable {
  position: relative;
  display: inline-flex;
  line-height: 1;  /* 修复span标签高度问题 */
  margin-right: 5px;
}

/* span.closeable.vertical-line:after {
  display: block;
  content: '';
  width: 1px;
  height: 25px;
  vertical-align: middle;
  background-color: #8e8e93;
  position: relative;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 3px;
} */

.closeable i.el-icon-close {
    display: none;
    position: absolute;
    background-color: #e50113;
    color: #fff;
    /* color: #97a8be; */
    font-size: 12px;
    width: 14px;
    height: 14px;
    top: -1px;
    right: -5px;
    transform-origin: 100% 50%;
    border-radius: 50%;
    text-align: center;
    transition: all .3s cubic-bezier(.645,.045,.355,1);
}

/* .closeable i.el-icon-close:hover {
    background-color: #e50113;
} */

.closeable i.el-icon-close:before {
    transform: scale(0.4,.4);
    display: inline-block;
    position: absolute;
    left: 1px;
    top: 0;
}

header.header .logo > a+i{
  margin-left: 10px;
}

.collapse-btn {
  width: 90px;
  height: 70px;
  line-height: 70px;
  text-align: center;
  /*box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);*/
  border-bottom: 2px solid rgba(230, 0, 18, 1);
  background: #FFFFFF;
  position: fixed;
  transition: all .5s ease;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}

.collapse-btn:hover {
  cursor: pointer;
}
/*
* 修复消息数量部分显示问题
*/
#app .message-number{
  background: none;
  border-radius: 50%;
  background-color: red;
  width:auto;
}




/* 主内容区 */

main {
  height: 100%;
  /* min-width: 1190px!important; */
  padding-top: 72px;
  box-sizing: border-box;
  background: #fff;
}

#main-right {
  width: calc(100%);
  background: #eeeff1;
  float: right;
  height: 100%;
  overflow: auto;
  border: 1px solid rgba(230, 234, 238, 1);
  border-left: none;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  transition: all .5s ease;

  overflow-scrolling: touch;
  -webkit-overflow-scrolling: touch;
}

#main-right.collapse {
  /* width: calc(100% - 90px); */
  width: 100%;
  background: #eeeff1;
  transition: all .5s ease;
  display: block;
}

#main-left {
  position: fixed;
  z-index: 1000;
  height: 100%;
  display: block;
  overflow-y: auto;
  width: 90px;
  float: left;
  top: 70px;
  left: -90px;
  transition: all .5s ease;
}

#main-left.collapse {
  transition: all .5s ease;
  left: 0;
  background: white;
}

.collapseColor {
  transition: all .5s ease;
  background: #eeeeee;
  background: white;
}

.collapseColor i {
  transition: all .5s ease;
  /*color: #ffffff!important;*/
}

.index>.el-tabs__header {
  z-index: 100;
  background: #ffffff;
  width: 100%;
  position: absolute;
}

.index>.el-tabs__content {
  overflow-y: scroll;
  height: 100%;
  max-height: 750px;
  margin-top: 42px;
}





/*主题颜色*/

header.default {
  background-color: #ffffff;
}

header.blue {
  background-color: #09ACF8;
}

header.green {
  background-color: #72C11C;
}

header.violet {
  background-color: #967ADC;
}

header.red {
  background-color: #E84C3D;
}

header.orange {
  background-color: #F39800;
}

header.blue .el-dropdown:hover {
  color: #099FE5;
  background: #099FE5;
}

header.green .el-dropdown:hover {
  color: #70A00A;
  background: #70A00A;
}

header.violet .el-dropdown:hover {
  color: #8A70CA;
  background: #8A70CA;
}

header.red .el-dropdown:hover {
  color: #D74537;
  background: #D74537;
}

header.orange .el-dropdown:hover {
  color: #DD8B02;
  background: #DD8B02;
}

header.blue .el-button--text:focus,
header.blue .el-button--text:hover {
  color: #099FE5;
}

header.blue .person-set button:hover {
  background: #099FE5;
}

header.green .el-button--text:focus,
header.green .el-button--text:hover {
  color: #70A00A;
}

header.green .person-set button:hover {
  background: #70A00A;
}

header.violet .el-button--text:focus,
header.violet .el-button--text:hover {
  color: #8A70CA;
}

header.violet .person-set button:hover {
  background: #8A70CA;
}

header.red .el-button--text:focus,
header.red .el-button--text:hover {
  color: #D74537;
}

header.red .person-set button:hover {
  background: #D74537;
}

header.orange .el-button--text:focus,
header.orange .el-button--text:hover {
  color: #DD8B02;
}

header.orange .person-set button:hover {
  background: #DD8B02;
}





/*  */

.router-link {
  display: inline-block;
  width: 100%;
  height: 100%;
  text-align: center;
  color: #475669;
  text-decoration: none;
}

.is-active .router-link {
  color: #20a0ff;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}

.list-enter,
.list-leave-active {
  opacity: 0;
  transform: translateY(30px);
}





/* 导航栏菜单选中效果 */

#app main .aside .is-active {
  color: #475669;
}





/* 卡片 */

.el-card {
  overflow: visible!important;
}

.formImg {
  width: 76px;
  height: 76px;
  float: left;
  margin-top: -16px;
  margin-right: 10px;
}





/*滚动条 start*/

 ::-webkit-scrollbar {
  width: 8px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.298039215686275);
}





/*定义滚动条轨道 内阴影+圆角*/

 ::-webkit-scrollbar-track {
  width: 8px;
  background: rgba(230, 234, 238, 0.9);
}





/*定义滑块 内阴影+圆角*/

 ::-webkit-scrollbar-thumb {
  width: 8px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.298039215686275);
}

 ::-webkit-scrollbar-thumb:hover {
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.298039215686275);
}

#main-right::-webkit-scrollbar {
  width: 0;
  height: 0;
}


</style>
