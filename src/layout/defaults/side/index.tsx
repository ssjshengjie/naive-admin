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
        const Collapsed = computed(() => store.GET_COLLAPSED)
        return {
            Collapsed
        }
    },
    render() {
        // 是否显示Logo
        const showLogo = () => {
            if (true) return <Logo />
        }
        return (
            <nLayoutSider
                style={{ height: "100vh" }}
                bordered
                inverted={true}
                collapsed={this.Collapsed}
                collapse-mode="width"
                collapsed-width={64}
                width={240}
                native-scrollbar={false}
            >
                {showLogo()}
                <Menus />
            </nLayoutSider>
        )
    }
})
export default defaultLayoutSideBar