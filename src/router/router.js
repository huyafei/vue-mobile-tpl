import Vue from "vue";
import Router from "vue-router";
import Cookies from "js-cookie";
import { Toast } from "vant";
Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "Login",
      component: () =>
        import(/* webpackChunkName: "login" */ "../views/login.vue")
    },
    //首页---------------------------
    {
      path: "/home",
      component: () =>
        import(/* webpackChunkName: "home" */ "../views/layout/layout.vue"),
      redirect: "/home/index",
      children: [
        {
          path: "index",
          name: "HomeIndex",
          component: () =>
            import(/* webpackChunkName: "home" */ "../views/home/index.vue")
        }
      ]
    },
    //分类---------------------------
    {
      path: "/classify",
      component: () =>
        import(/* webpackChunkName: "classify" */ "../views/layout/layout.vue"),
      redirect: "/classify/index",
      children: [
        {
          path: "index",
          name: "ClassifyIndex",
          component: () =>
            import(
              /* webpackChunkName: "classify" */ "../views/classify/index.vue"
            )
        }
      ]
    },
    //购物车---------------------------
    {
      path: "/cart",
      component: () =>
        import(/* webpackChunkName: "cart" */ "../views/layout/layout.vue"),
      redirect: "/cart/index",
      children: [
        {
          path: "index",
          name: "CartIndex",
          component: () =>
            import(/* webpackChunkName: "cart" */ "../views/cart/index.vue")
        }
      ]
    },
    //我的---------------------------
    {
      path: "/my",
      component: () =>
        import(/* webpackChunkName: "my" */ "../views/layout/layout.vue"),
      redirect: "/my/home",
      children: [
        {
          path: "index",
          name: "MyIndex",
          component: () =>
            import(/* webpackChunkName: "my" */ "../views/my/index.vue")
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.name === "Login") {
    next();
  } else {
    let token = Cookies.get("token");
    if (token) {
      next();
    } else {
      Toast("请先登录");
      Cookies.set("redirect", to.path);
      next({ path: "/login" });
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
