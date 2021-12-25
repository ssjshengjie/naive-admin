export const User = defineComponent({
    name: 'user',
    components: {},
    setup() {
        return {
            options: [
                {
                    label: '退出',
                    key: 'out',
                },
            ]
        }
    },
    render() {
        const { options } = this
        return (
            <nDropdown options={options} show-arrow={true} >
                <nButton
                    quaternary
                    style="font-size: 20px;"
                >
                    <n-avatar
                        round
                        size="small"
                        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
                    />
                    <span style={{ fontSize: '14px', marginLeft: '10px' }}>Mint Admin</span>
                </nButton>
            </nDropdown >
        )
    }
})
export default User