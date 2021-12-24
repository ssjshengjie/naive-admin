import { Component } from "vue";
import { RouteMeta } from "vue-router";
export const REDIRECT_NAME = 'Redirect';
// @ts-ignore
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
    name: string;
    path: string;
    meta: RouteMeta;
    component?: Component | string;
    components?: Component;
    children?: AppRouteRecordRaw[];
}