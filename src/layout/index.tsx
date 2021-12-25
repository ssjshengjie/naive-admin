import { defaultLayout as Defaults } from '@/layout/defaults'
import { obtainAppStore } from '@/store/modules/appConfig'
export default defineComponent({
    name: 'layout',
    components: {
        Defaults
    },
    setup() {
        const store = obtainAppStore()
        const LayoutName = computed(() => store.GET_LAYOUT)
        const isLayout = (name: string) => {
            switch (name) {
                case 'Defaults':
                    return <Defaults />
                default:
                    return <Defaults />
            }
        }
        return () => <> {isLayout(LayoutName.value)} </>
    }
})