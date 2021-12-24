import { AppRouteRecordRaw, REDIRECT_NAME } from "./type";
import Layout from "@/layout/index.vue";
const loginRouter: AppRouteRecordRaw = {
  path: "/login",
  name: "login",
  meta: {
    title: "登录",
    icon: "",
  },
  component: () => import("@/views/sys/login/index.vue"),
};
const dashboardRouter: AppRouteRecordRaw = {
  path: "/dashboard",
  name: "dashboard",
  component: Layout,
  meta: {
    title: "首页",
    icon: "",
  },
  children: [
    {
      path: "",
      name: "dashboard",
      meta: {
        title: "",
        icon: "",
      },
      component: () => import("@/views/dashboard/index.vue"),
    },
  ],
};
export const basicRoutes = [loginRouter, dashboardRouter];
