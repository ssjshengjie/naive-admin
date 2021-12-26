import { App } from "vue";
import { createI18n } from "vue-i18n";
import { zhCN, enUS, dateEnUS, dateZhCN } from "naive-ui";
import enHead from './head/en'
import zhHead from './head/zh'
import { AppConfigEnum } from '@/enums/AppConfigEnum'
import { createStorage } from "@/utils/Storage";
const Storage = createStorage({ storage: localStorage });
const messages = {
    ["zh"]: {
        ...zhCN,
        i18n: {
            ...zhHead
        },
        date: {
            ...dateZhCN
        }
    },
    ["en"]: {
        ...enUS,
        i18n: {
            ...enHead
        },
        date: {
            ...dateEnUS
        }
    },
};
const SetLang = () => {
    if (Storage.get(AppConfigEnum.language)) {
        return Storage.get(AppConfigEnum.language)
    } else {
        return 'zh'
    }
}
export const i18n = createI18n({
    locale: SetLang(),
    fallbackLocale: SetLang(),
    messages,
});
export function setupI18n(app: App<Element>) {
    app.use(i18n);
}