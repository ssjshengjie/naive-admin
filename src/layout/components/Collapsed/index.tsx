import { MenuUnfoldOutlined, MenuFoldOutlined } from '@vicons/antd'
import { Icon } from '@vicons/utils'
import HeadItem from '../HeadItem'
import { obtainAppStore } from '@/store/modules/appConfig'
export const Collapsed = defineComponent({
    name: "collapsed",
    components: {
        MenuUnfoldOutlined,
        MenuFoldOutlined,
        Icon,
        HeadItem,
    },
    setup() {
        const store = obtainAppStore()
        const collapse = computed(() => store.GET_COLLAPSED)
        const iconStyle = computed(() => store.GET_APP_ICON)
        const changeCollapsed = () => {
            store.SET_COLLAPSED(!collapse.value)
        }
        return {
            collapse,
            iconStyle,
            changeCollapsed
        }
    },
    render() {
        const { changeCollapsed } = this
        const isOutLined = () => {
            if (this.collapse) return <MenuFoldOutlined />
            else return <MenuUnfoldOutlined />
        }
        return (
            <>
                {/* @ts-ignore */}
                < HeadItem onClick={() => changeCollapsed()} style={{ fontSize: this.iconStyle }}>
                    {{
                        default: () => { return <Icon>{isOutLined()}</Icon> },
                    }}
                </HeadItem >
            </>
        )
    }
})
export default Collapsed