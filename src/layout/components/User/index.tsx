import { obtainAppStore } from '@/store/modules/appConfig'
import { Icon } from '@vicons/utils'
import HeadItem from '../HeadItem'
export const User = defineComponent({
    name: 'user',
    components: {
        Icon,
        HeadItem,
    },
    setup() {
        const store = obtainAppStore()
        const iconStyle = computed(() => store.GET_APP_ICON)
        return {
            options: [
                {
                    label: '退出',
                    key: 'out',
                },
            ],
            iconStyle
        }
    },
    render() {
        const { options } = this
        return (
            <nDropdown options={options} show-arrow={true} >
                {/* @ts-ignore */}
                <HeadItem style={{ fontSize: this.iconStyle }}>
                    {{
                        default: () => {
                            return (
                                <>
                                    <nAvatar
                                        style={{ padding: 0 }}
                                        round
                                        size="small"
                                        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
                                    />
                                    <span style={{ fontSize: '14px', marginLeft: '10px' }}>Mint Admin</span>
                                </>
                            )
                        },
                    }}
                </HeadItem>
            </nDropdown >
        )
    }
})
export default User