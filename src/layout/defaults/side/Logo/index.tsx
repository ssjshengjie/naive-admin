const logoStyle = {
    display: "flex",
    alignItems: "center",
    cursor: 'pointer',
    transition: 'all .2s ease',
    height: '28px',
    padding: '10px 4px 10px 10px'
}
export const Logo = defineComponent({
    name: 'logo',
    render() {
        return (
            <div style={logoStyle}>
                <img src="" alt="" />
                <span>Logo</span>
            </div>
        )
    }
})
export default Logo