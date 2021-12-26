import { FullscreenOutlined, FullscreenExitOutlined } from '@vicons/antd'
import { Icon } from '@vicons/utils'
import HeadItem from '../HeadItem'
import { obtainAppStore } from '@/store/modules/appConfig'
import useFullScreen from '@/hooks/useFullScreen'
export const FullScreen = defineComponent({
    name: 'full-screen',
    components: {
        FullscreenOutlined,
        FullscreenExitOutlined,
        Icon,
        HeadItem,
    },
    setup() {
        const store = obtainAppStore()
        const isfull = ref<boolean>(false)
        const iconStyle = computed(() => store.GET_ICON_SIZE)
        const { beFull, exitFull, isFull } = useFullScreen()
        const showfullScreen = () => {
            isfull.value = true;
            beFull()
        };
        const exitFullscreen = () => {
            isfull.value = false;
            exitFull()
        };
        window.onresize = function () {
            if (!isFull()) {
                // 退出全屏后要执行的动作
                isfull.value = false;
            }
        };
        return {
            isfull,
            iconStyle,
            showfullScreen,
            exitFullscreen
        }
    },
    render() {
        const { isfull, exitFullscreen, showfullScreen } = this
        const isScreen = () => {
            if (!isfull) return <nIcon><FullscreenOutlined /></nIcon>
            else return <nIcon><FullscreenExitOutlined /></nIcon>
        }
        return (
            <n-popover trigger="hover">
                {{
                    trigger: () => {
                        return (
                            <>
                                {/* @ts-ignore */}
                                <HeadItem onClick={() => isfull ? exitFullscreen() : showfullScreen()} style={{ fontSize: this.iconStyle }}>
                                    {{
                                        default: () => { return <Icon>{isScreen()}</Icon> },
                                    }}
                                </HeadItem>
                            </>
                        )
                    },
                    default: () => {
                        return (
                            <span>{this.isfull ? this.$t("i18n.head.exitfullscreen") : this.$t("i18n.head.fullscreen")}</span>
                        )
                    }
                }}
            </n-popover>
        )
    }
})
export default FullScreen