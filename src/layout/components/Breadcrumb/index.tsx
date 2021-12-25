import { MdCash } from '@vicons/ionicons4'
export const Breadcrumb = defineComponent({
    name:'breadcrumb',
    components: { MdCash },
    render() {
        return (
            <nBreadcrumb>
                <n-breadcrumb-item href="#">
                    <n-icon><md-cash /></n-icon> 北京总行
                </n-breadcrumb-item>
                <n-breadcrumb-item href="#">
                    <n-icon><md-cash /></n-icon> 天津分行
                </n-breadcrumb-item>
                <n-breadcrumb-item href="#">
                    <n-icon><md-cash /></n-icon> 平山道支行
                </n-breadcrumb-item>
            </nBreadcrumb>
        )
    }
})
export default Breadcrumb