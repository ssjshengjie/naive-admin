import { defaultLayout as Defaults } from '@/layout/defaults'
export default defineComponent({
    name: 'layout',
    components: {
        Defaults
    },
    setup() {
        const LayoutName = ref<string>('Defaults')
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