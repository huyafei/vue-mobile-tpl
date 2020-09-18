export const other = [
  {
    path: "/",
    redirect: "/home/index"
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录"
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login.vue")
  }
];
//首页---------------------------
export const home = {
  path: "/home",
  component: () =>
    import(/* webpackChunkName: "home" */ "../views/layout/layout.vue"),
  redirect: "/home/index",
  children: [
    {
      path: "index",
      name: "HomeIndex",
      meta: {
        title: "首页"
      },
      component: () =>
        import(/* webpackChunkName: "home" */ "../views/home/index.vue")
    }
  ]
};
//分类---------------------------
export const classify = {
  path: "/classify",
  component: () =>
    import(/* webpackChunkName: "classify" */ "../views/layout/layout.vue"),
  redirect: "/classify/index",
  children: [
    {
      path: "index",
      name: "ClassifyIndex",
      meta: {
        title: "分类"
      },
      component: () =>
        import(/* webpackChunkName: "classify" */ "../views/classify/index.vue")
    }
  ]
};
//购物车---------------------------
export const cart = {
  path: "/cart",
  component: () =>
    import(/* webpackChunkName: "cart" */ "../views/layout/layout.vue"),
  redirect: "/cart/index",
  children: [
    {
      path: "index",
      name: "CartIndex",
      meta: {
        title: "购物车"
      },
      component: () =>
        import(/* webpackChunkName: "cart" */ "../views/cart/index.vue")
    }
  ]
};
//我的---------------------------
export const my = {
  path: "/my",
  component: () =>
    import(/* webpackChunkName: "my" */ "../views/layout/layout.vue"),
  redirect: "/my/home",
  children: [
    {
      path: "index",
      name: "MyIndex",
      meta: {
        title: "我的"
      },
      component: () =>
        import(/* webpackChunkName: "my" */ "../views/my/index.vue")
    }
  ]
};
export const routes = [...other,home, classify, cart, my];
