import { MdCash } from '@vicons/ionicons4'
import { obtainAppStore } from '@/store/modules/appConfig'
const breadcrumbStyle = {
    height: '48px',
    display: 'flex',
    alignItems: 'center',
}
export const Breadcrumb = defineComponent({
    name: 'breadcrumb',
    components: { MdCash },
    setup() {
        const store = obtainAppStore()
        const iconStyle = computed(() => store.GET_ICON_SIZE)
        return {
            iconStyle
        }
    },
    render() {
        return (
            <nBreadcrumb style={breadcrumbStyle}>
                <nBreadcrumbItem href="#">
                    <n-icon style={{ fontSize: this.iconStyle }}>
                        <md-cash />
                    </n-icon>
                    <span style={{ marginLeft: '5px' }}>
                        北京总行
                    </span>
                </nBreadcrumbItem>
            </nBreadcrumb>
        )
    }
})
export default Breadcrumb