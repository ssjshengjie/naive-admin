
import HeadCom from "./head"
export const defaultLayoutContent = defineComponent({
    name:'content',
    components: { HeadCom },
    setup() {
        // return () => {
        //     return (
        //         <div>123</div>
        //     )
        // }
    },
    render() {
        return (
            <nLayout>
                <HeadCom />
                {/* <n-layout-content content-style="padding: 24px;">平山道</n-layout-content>
                <n-layout-footer>成府路</n-layout-footer> */}
            </nLayout>
        )
    }
})
export default defaultLayoutContent