import { SettingsOutline } from '@vicons/ionicons5'
export const Setting = defineComponent({
    name: 'setting',
    components: { SettingsOutline },
    setup() {
        const onchangeButton = () => { }
        return {
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
                    <nIcon><SettingsOutline /></nIcon>
                </nButton>
            </>
        )
    }
})
export default Setting