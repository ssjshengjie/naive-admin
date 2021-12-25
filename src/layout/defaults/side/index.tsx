import Logo from './Logo'
import {Menu as Menus}  from './menu'
export const defaultLayoutSideBar = defineComponent({
    name:'sided-bar',
    components: {
        Logo,
        Menus
    },
    setup() {

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
                show-trigger
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