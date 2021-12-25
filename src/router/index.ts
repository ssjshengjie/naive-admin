import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import type { App } from "vue";
import { basicRoutes } from './baseRouter'

// export const constantRouterMap: Array<RouteRecordRaw> = basicRoutes

export const asyncRouterMap: Array<RouteRecordRaw> = [];
export const router = createRouter({
  history: createWebHashHistory(),
  routes: basicRoutes as unknown as RouteRecordRaw[],
  //routes: [],
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}
