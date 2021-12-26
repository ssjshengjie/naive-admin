import { IosSearch } from '@vicons/ionicons4'
import { Icon } from '@vicons/utils'
import HeadItem from '../HeadItem'
import { obtainAppStore } from '@/store/modules/appConfig'
export const Search = defineComponent({
    name: 'search',
    components: {
        IosSearch,
        Icon,
        HeadItem,
    },
    setup() {
        const store = obtainAppStore()
        const showModal = ref<boolean>(false)
        const iconStyle = computed(() => store.GET_ICON_SIZE)
        const onchangeButton = () => {
            showModal.value = true
        }
        return {
            showModal,
            iconStyle,
            onchangeButton
        }
    },
    render() {
        const { onchangeButton } = this
        return (
            <n-popover trigger="hover">
                {{
                    trigger: () => {
                        return (
                            <>
                                {/* @ts-ignore */}
                                <HeadItem onClick={() => onchangeButton()} style={{ fontSize: this.iconStyle }}>
                                    {{
                                        default: () => { return <Icon><IosSearch /></Icon> },
                                    }}
                                </HeadItem>
                            </>
                        )
                    },
                    default: () => {
                        return (
                            <span>{this.$t("i18n.head.search")}</span>
                        )
                    }
                }}
            </n-popover>
        )
    }
})
export default Search