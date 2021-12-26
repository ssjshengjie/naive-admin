import Logo from './Logo'
import { Menu as Menus } from './menu'
import { obtainAppStore } from '@/store/modules/appConfig'
export const defaultLayoutSideBar = defineComponent({
    name: 'sided-bar',
    components: {
        Logo,
        Menus
    },
    setup() {
        const store = obtainAppStore()
        const collapsed = computed(() => store.GET_COLLAPSED)
        const siderWidth = computed(() => store.GET_MENU_WIDTH)
        const siderMinWidth = computed(() => store.GET_MIN_MENU_WIDTH)
        const showLogo = computed(() => store.GET_LOGO)
        return {
            store,
            collapsed,
            siderWidth,
            siderMinWidth,
            showLogo
        }
    },
    render() {
        // 是否显示Logo
        const showLogo = () => {
            if (this.showLogo) return <Logo />
        }
        return (
            <nLayoutSider
                show-trigger="bar"
                style={{ height: "100vh" }}
                collapse-mode="width"
                width={this.siderWidth}
                collapsed-width={this.siderMinWidth}
                bordered={true}
                inverted={true}
                collapsed={this.collapsed}
                onCollapse={() => this.store.SET_COLLAPSED(true)}
                onExpand={() => this.store.SET_COLLAPSED(false)}
                native-scrollbar={false}
            >
                {showLogo()}
                <Menus />
            </nLayoutSider>
        )
    }
})
export default defaultLayoutSideBar