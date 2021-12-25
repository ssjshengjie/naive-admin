import { IosSearch } from '@vicons/ionicons4'
export const Search = defineComponent({
    name: 'search',
    components: {
        IosSearch
    },
    setup() {
        const showModal = ref<boolean>(false)
        const onchangeButton = () => {
            showModal.value = true
        }
        return {
            showModal,
            onchangeButton
        }
    },
    render() {
        const { onchangeButton } = this
        return (
            <>
                <nButton
                    quaternary
                    circle
                    onClick={() => onchangeButton()}
                    style="font-size: 20px;"
                >
                    <nIcon><IosSearch /></nIcon>
                </nButton>
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