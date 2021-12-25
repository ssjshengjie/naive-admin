import './index.less'
export const HeadItem = defineComponent({
    name: "head-item",
    render() {
        const { $slots } = this
        return (
            <div class="mint-layout-header-item">
                {$slots.default ? $slots.default() : null}
            </div>
        )
    }
})
export default HeadItem