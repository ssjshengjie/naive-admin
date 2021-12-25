import defaultLayoutSideBar from './side'
import defaultLayoutContent from './content'
export const defaultLayout = defineComponent({
    name:'default-layout',
    components: {
        defaultLayoutSideBar,
        defaultLayoutContent
    },
    render() {
        return (
            <nLayout
                has-sider
                native-scrollbar={false}
            >
                <defaultLayoutSideBar />
                <defaultLayoutContent />
            </nLayout>
        )
    }
})
export default defaultLayout