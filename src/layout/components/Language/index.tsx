import { LanguageOutline } from '@vicons/ionicons5'
const selectStyel = {
    backgroundColor: '#e3f4fc',
    color: '#18a058'
}
export const Language = defineComponent({
    name: 'language',
    components: { LanguageOutline },
    setup() {
        return {
            options: [
                {
                    label: '简体中文',
                    key: 'zh',
                    props: {
                        style: {
                            ...selectStyel
                        }
                    }
                },
                {
                    label: 'English',
                    key: 'en',
                }
            ]
        }
    },
    render() {
        const { options } = this
        return (
            <nDropdown options={options} trigger="click" show-arrow={true} >
                <nButton
                    quaternary
                    circle
                    style="font-size: 20px;"
                >
                    <nIcon>
                        <LanguageOutline />
                    </nIcon>
                </nButton>
            </nDropdown >
        )
    }
})
export default Language