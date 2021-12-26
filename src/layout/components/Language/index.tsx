import { LanguageOutline } from '@vicons/ionicons5'
import { Icon } from '@vicons/utils'
import HeadItem from '../HeadItem'
import { DropdownDividerOption, DropdownGroupOption, DropdownOption, DropdownRenderOption } from 'naive-ui'
import { obtainAppStore } from '@/store/modules/appConfig'
const selectStyel = {
    backgroundColor: '#e3f4fc',
    color: '#18a058'
}
export const Language = defineComponent({
    name: 'language',
    components: {
        LanguageOutline,
        Icon,
        HeadItem,
    },
    setup() {
        const store = obtainAppStore()
        const iconStyle = computed(() => store.GET_APP_ICON)
        const changeLanguage = (key: string): void => {
            store.SET_LANGUAGE(key)
        }
        const options = ref<Array<DropdownOption | DropdownGroupOption | DropdownDividerOption | DropdownRenderOption>>([
            {
                label: '简体中文',
                key: 'zh',
                props: {
                    style: {
                        ...computed(() => store.GET_LANGUAGE === 'zh' ? { ...selectStyel } : null).value
                    }
                }
            },
            {
                label: 'English',
                key: 'en',
                props: {
                    style: {
                        ...computed(() => store.GET_LANGUAGE === 'en' ? { ...selectStyel } : null).value
                    }
                }
            }
        ])
        return {
            options,
            iconStyle,
            changeLanguage
        }
    },
    render() {
        const { options, changeLanguage } = this
        return (
            <nDropdown options={options} trigger="click" show-arrow={true} on-select={(key: string) => changeLanguage(key)}>
                <n-popover trigger="hover">
                    {{
                        trigger: () => {
                            return (
                                <>
                                    {/* @ts-ignore */}
                                    <HeadItem style={{ fontSize: this.iconStyle }}>
                                        {{
                                            default: () => { return <Icon> <LanguageOutline /></Icon> },
                                        }}
                                    </HeadItem>
                                </>
                            )
                        },
                        default: () => {
                            return (
                                <span>{this.$t("i18n.head.language")}</span>
                            )
                        }
                    }}
                </n-popover>
            </nDropdown >
        )
    }
})
export default Language