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
    marginRight:'10px'
}
import { Suspense } from "vue"
const Breadcrumb = defineAsyncComponent(() => import("@/layout/components/Breadcrumb"));
const Search = defineAsyncComponent(() => import("@/layout/components/Search"));
const Language = defineAsyncComponent(() => import("@/layout/components/Language"));
const FullScreen = defineAsyncComponent(() => import("@/layout/components/FullScreen"));
const Setting = defineAsyncComponent(() => import("@/layout/components/Setting"));
const User = defineAsyncComponent(() => import("@/layout/components/User"));
export const HeadCom = defineComponent({
    name: 'content-head',
    components: {
        Breadcrumb,
        Search,
        Language,
        FullScreen,
        Setting,
        User
    },
    render() {
        const component = [
            <Search />,
            <Language />,
            <FullScreen />,
            <Setting />,
            <User />
        ]
        return (
            <nLayoutHeader
                style={headStyle}
                bordered={true}
            >
                <div class="mint-layout-header-left" style={left}>
                    <Breadcrumb style={{ marginLeft: '15px' }} />
                </div>
                <div class="mint-layout-header-right" style={right}>
                    {component.map(v => {
                        return (
                            < Suspense >
                                {{
                                    default: () => v,
                                    fallback: () => <nSpin size="small" />,
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