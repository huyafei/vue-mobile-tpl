import Vue from "vue";
import Router from "vue-router";
import Cookies from "js-cookie";
import { Toast } from "vant";
import { routes } from "./index";
Vue.use(Router);

const router = new Router({
  // mode: "history",
  base: process.env.BASE_URL,
  routes: routes
});

router.beforeEach((to, from, next) => {
  document.getElementById("app").scrollTop = 0;
  if (to.name === "Login") {
    next();
  } else {
    let token = Cookies.get("token");
    if (token) {
      next();
    } else {
      Toast("请先登录");
      if (from.name !== "Login") {
        next({ path: "/login", query: { redirect: to.path } });
      }
    }
  }
});
router.afterEach(to => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  window.scrollTo(0, 0);
});
export default router;
