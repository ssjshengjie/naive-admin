
import { defineStore } from "pinia";
import { store } from "@/store";
export const appStore = defineStore({
    id: "appStore",
    state: () => ({
        Layout: 'Defaults',
        AppLanguage: 'en',
        Collapsed: false,
        AppICon: '16px'
    }),
    getters: {
        GET_LAYOUT(): string {
            return this.Layout;
        },
        GET_LANGUAGE(): string {
            return this.AppLanguage;
        },
        GET_COLLAPSED(): boolean {
            return this.Collapsed;
        },
        GET_APP_ICON(): string {
            return this.AppICon;
        }
    },
    actions: {
        SET_LAYOUT(layout: string): void {
            this.Layout = layout;
        },
        SET_LANGUAGE(language: string): void {
            this.AppLanguage = language;
        },
        SET_COLLAPSED(collapsed: boolean): void {
            this.Collapsed = collapsed
        },
        SET_APP_ICON(appicon: string): void {
            this.AppICon = appicon
        }
    },
});
export function obtainAppStore() {
    return appStore(store);
}