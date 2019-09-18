import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/index";
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

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
