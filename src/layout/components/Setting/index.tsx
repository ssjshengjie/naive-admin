import { SettingsOutline } from '@vicons/ionicons5'
import { Icon } from '@vicons/utils'
import HeadItem from '../HeadItem'
import { obtainAppStore } from '@/store/modules/appConfig'
export const Setting = defineComponent({
    name: 'setting',
    components: {
        SettingsOutline,
        Icon,
        HeadItem,
    },
    setup() {
        const store = obtainAppStore()
        const iconStyle = computed(() => store.GET_APP_ICON)
        const onchangeButton = () => { }
        return {
            iconStyle,
            onchangeButton
        }
    },
    render() {
        const { onchangeButton } = this
        return (
            <>
                {/* @ts-ignore */}
                <HeadItem onClick={() => onchangeButton()} style={{ fontSize: this.iconStyle }}>
                    {{
                        default: () => { return <Icon><SettingsOutline /></Icon> },
                    }}
                </HeadItem>
            </>
        )
    }
})
export default Setting