import { Suspense } from "vue"
const Collapsed = defineAsyncComponent(() => import("@/layout/components/Collapsed"))
const Breadcrumb = defineAsyncComponent(() => import("@/layout/components/Breadcrumb"));
const Search = defineAsyncComponent(() => import("@/layout/components/Search"));
const Language = defineAsyncComponent(() => import("@/layout/components/Language"));
const FullScreen = defineAsyncComponent(() => import("@/layout/components/FullScreen"));
const Setting = defineAsyncComponent(() => import("@/layout/components/Setting"));
const User = defineAsyncComponent(() => import("@/layout/components/User"));
import { obtainAppStore } from '@/store/modules/appConfig'
const headStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    height: '48px',
}
const left = {
    display: 'flex',
    alignItems: 'center',
}
const right = {
    display: 'flex',
    alignItems: 'center',
    minWidth: '180px',
    marginRight: '10px'
}
export const HeadCom = defineComponent({
    name: 'content-head',
    components: {
        Collapsed,
        Breadcrumb,
        Search,
        Language,
        FullScreen,
        Setting,
        User
    },
    setup() {
        const store = obtainAppStore()
        const iconStyle = computed(() => store.GET_ICON_SIZE)
        return {
            iconStyle
        }
    },
    render() {
        const rightComponent = [
            <Search />,
            <Language />,
            <FullScreen />,
            <Setting />,
            <User />
        ]
        const leftComponent = [
            <Collapsed />,
            <Breadcrumb style={{ marginLeft: '15px' }} />,
        ]
        return (
            <nLayoutHeader
                style={headStyle}
                bordered={true}
            >
                <div class="mint-layout-header-left" style={left}>
                    {leftComponent.map(v => {
                        return (
                            < Suspense >
                                {{
                                    default: () => v,
                                    fallback: () => <nSpin size={this.iconStyle} />
                                }}
                            </Suspense>
                        )
                    })}
                </div>
                <div class="mint-layout-header-right" style={right}>
                    {rightComponent.map(v => {
                        return (
                            < Suspense >
                                {{
                                    default: () => v,
                                    fallback: () => <nSpin size={this.iconStyle} />
                                }}
                            </Suspense>
                        )
                    })}
                </div>
            </nLayoutHeader >
        )
    }
})
export default HeadCom