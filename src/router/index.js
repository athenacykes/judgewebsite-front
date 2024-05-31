import Vue from "vue";
import Router from "vue-router";
const _import_ = file => () => import("@/views/" + file + ".vue");
const _import_user = file => () => import("@/components/User/" + file + ".vue");

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
Vue.use(Router);
const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "home",
      component: _import_("HomePage"),
      meta: { title: "主页", keepAlive: false, isBack: false }
    },
    {
      path: "/home/:item_id",
      component: _import_("HomePage"),
      meta: { title: "内容" }
    },
    {
      path: "/analysis",
      name: "analysis",
      component: _import_("Analysis"),
      meta: { title: " 人物" }
    },
    {
      path: "/setting",
      name: "setting",
      component: _import_("Setting"),
      meta: { title: "设置" }
    },
    {
      path: "/user",
      name: "user",
      component: _import_("User"),
      meta: { title: "用户" },
      children: [
        {
          path: "/user",
          name: "user",
          component: _import_user("StarComponent"),
          meta: { title: "我的收藏" }
        },
        {
          path: "/FollowComponent",
          name: "FollowComponent",
          component: _import_user("FollowComponent"),
          meta: { title: "关注列表" }
        },
        {
          path: "/MessageComponent",
          name: "MessageComponent",
          component: _import_user("MessageComponent"),
          meta: { title: "消息" }
        },
        {
          path: "/DemandComponent",
          name: "DemandComponent",
          component: _import_user("DemandComponent"),
          meta: { title: "需求反馈" }
        },
        {
          path: "/HistoryComponent",
          name: "HistoryComponent",
          component: _import_user("HistoryComponent"),
          meta: { title: "历史记录" }
        }
      ]
    },
    {
      path: "/main",
      name: "main",
      component: _import_("main"),
      meta: { title: "我的关注" }
    },
    {
      path: "/content",
      name: "content",
      component: _import_("content"),
      meta: { title: "文章内容" }
    },
    {
      path: "/login",
      name: "login",
      component: _import_("login"),
      meta: { title: "登陆" }
    },
    {
      path: "/register",
      name: "register",
      component: _import_("register"),
      meta: { title: "注册" }
    }
  ]
});

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
