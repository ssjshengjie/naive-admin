import { obtainAppStore } from '@/store/modules/appConfig'
const logoStyle = {
    display: "flex",
    alignItems: "center",
    cursor: 'pointer',
    transition: 'all .2s ease',
    height: '48px',
    padding: '10px 4px 10px 10px'
}
const imgStyle = {
    width: "auto",
    height: "32px",
}
const titleStyle = {
    marginLeft: '10px',
}
export const Logo = defineComponent({
    name: 'logo',
    setup() {
        const store = obtainAppStore()
        const collapsed = computed(() => store.GET_COLLAPSED)
        return {
            collapsed
        }
    },
    render() {
        return (
            <div style={logoStyle}>
                <img src="https://vvbin.cn/next/assets/logo.63028018.png" alt="" style={imgStyle} />
                <h2 v-show={!this.collapsed} style={titleStyle}>NaiveUiAdmin</h2>
            </div>
        )
    }
})
export default Logo