
import { defineStore } from "pinia";
import { store } from "@/store";
import projectSetting from '@/setting/projectSetting'
export const appStore = defineStore({
    id: "appStore",
    state: () => ({
        Layout: projectSetting.Layout,
        Language: projectSetting.Language,
        Collapsed: projectSetting.menuSetting.collapsed,
        IconSize: projectSetting.headerSetting.iconSize,
        MinMenuWidth: projectSetting.menuSetting.minMenuWidth,
        MenuWidth: projectSetting.menuSetting.menuWidth,
        Logo: projectSetting.menuSetting.logo
    }),
    getters: {
        GET_LAYOUT(): string {
            return this.Layout;
        },
        GET_LANGUAGE(): string {
            return this.Language;
        },
        GET_COLLAPSED(): boolean {
            return this.Collapsed;
        },
        GET_ICON_SIZE(): string {
            return this.IconSize;
        },
        GET_MIN_MENU_WIDTH(): number {
            return this.MinMenuWidth;
        },
        GET_MENU_WIDTH(): number {
            return this.MenuWidth;
        },
        GET_LOGO(): boolean {
            return this.Logo
        }
    },
    actions: {
        SET_LAYOUT(layout: string): void {
            this.Layout = layout;
        },
        SET_LANGUAGE(language: string): void {
            this.Language = language;
        },
        SET_COLLAPSED(collapsed: boolean): void {
            this.Collapsed = collapsed
        },
        SET_ICON_SIZE(size: string): void {
            this.IconSize = size
        },
        SET_MIN_MENU_WIDTH(width: number): void {
            this.MinMenuWidth = width;
        },
        SET_MENU_WIDTH(width: number): void {
            this.MenuWidth = width;
        },
        SET_LOGO(show: boolean): void {
            this.Logo = show
        }
    },
});
export function obtainAppStore() {
    return appStore(store);
}