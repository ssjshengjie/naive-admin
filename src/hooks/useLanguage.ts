import { AppConfigEnum } from '@/enums/AppConfigEnum'
// import { obtainAppStore } from '@/store/modules/appConfig'
import { createStorage } from "@/utils/Storage";
export const useLanguage = () => {
    const Storage = createStorage({ storage: localStorage });
    // const store = obtainAppStore()
    const { proxy } = getCurrentInstance() as any;
    const SetLang = computed(() => {
        if (Storage.get(AppConfigEnum.language)) {
            return Storage.get(AppConfigEnum.language)
        } else {
            Storage.set(AppConfigEnum.language, 'zh')
            return Storage.get(AppConfigEnum.language)
        }
    })
    const i18n = reactive({
        language: null,
        date: null
    })
    onMounted(() => {
        nextTick(() => {
            i18n.language = proxy.$i18n.messages[`${SetLang.value}`];
            i18n.date = proxy.$i18n.messages[`${SetLang.value}`].date;
        });
    });
    return {
        ...toRefs(i18n),
        SetLang
    }
}
export default useLanguage