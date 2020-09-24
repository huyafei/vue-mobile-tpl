import Vue from "vue";
import App from "./App.vue";
import "babel-polyfill";
import router from "./router/router";
import store from "./store/index";
import * as filters from "./filters";
// 自适应：方式1
// import "@/utils/flexible";
// 自适应：方式2
import "amfe-flexible";
/*自定义样式*/
import "./assets/css/normalize.css";
import "./assets/css/common.css";
import "./assets/css/reset.css";

/*vant*/
import Vant from "vant";
import "vant/lib/index.css";

Vue.use(Vant);

/**/
import "./assets/less/index.less";

/*axios*/
import axios from "./utils/axios";

Vue.prototype.$axios = axios;
/*cookie*/
import Cookies from "js-cookie";

Vue.prototype.$cookies = Cookies;
/*图表相关*/
import echarts from "echarts";

Vue.prototype.$echarts = echarts;

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
