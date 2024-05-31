// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "babel-polyfill";
import Vue from "vue";
import App from "./App";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "mint-ui/lib/style.css";
import "font-awesome/css/font-awesome.min.css";
import ajaxApi from "./request/api";
import store from "./store"; //导入store.js
import echarts from "echarts";
import Resource from "vue-resource";
import VueClipboard from "vue-clipboard2";
import "../static/icon/iconfont.css";
import Cookie from "vue-cookies";
import globalVariable from "../static/config/config.js";
Vue.prototype.$globalVariable = globalVariable;
Vue.prototype.$cookie = Cookie;
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(echarts);
Vue.use(Resource);
Vue.prototype.$echarts = echarts;

Vue.prototype.$ajaxAPI = ajaxApi;
/* eslint-disable no-new */
VueClipboard.config.autoSetContainer = true;
Vue.use(VueClipboard);
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
