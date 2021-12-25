import { IosSearch } from '@vicons/ionicons4'
import { Icon } from '@vicons/utils'
import HeadItem from '../HeadItem'
import { obtainAppStore } from '@/store/modules/appConfig'
export const Search = defineComponent({
    name: 'search',
    components: {
        IosSearch,
        Icon,
        HeadItem,
    },
    setup() {
        const store = obtainAppStore()
        const showModal = ref<boolean>(false)
        const iconStyle = computed(() => store.GET_APP_ICON)
        const onchangeButton = () => {
            showModal.value = true
        }
        return {
            showModal,
            iconStyle,
            onchangeButton
        }
    },
    render() {
        const { onchangeButton } = this
        return (
            <>
                {/* @ts-ignore */}
                <HeadItem onClick={() => onchangeButton()} style={{ fontSize: this.iconStyle }}>
                    {{
                        default: () => { return <Icon><IosSearch /></Icon> },
                    }}
                </HeadItem>
                <nModal v-model:show={this.showModal}>
                    <nCard style="width: 600px;" title="模态框" bordered={false} size="huge">
                        {/* <template v-solts="#"> 噢！ </template>
                        {renderSlot($slots, 'header-extra', {}, () => [this])} */}
                        内容
                        {/* <div solt=''> 尾部 </div> */}
                    </nCard>
                </nModal>
            </>
        )
    }
})
export default Search