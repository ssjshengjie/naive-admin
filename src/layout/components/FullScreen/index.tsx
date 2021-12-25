import { FullscreenOutlined, FullscreenExitOutlined } from '@vicons/antd'
import { Icon } from '@vicons/utils'
import HeadItem from '../HeadItem'
import { obtainAppStore } from '@/store/modules/appConfig'
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
        const iconStyle = computed(() => store.GET_APP_ICON)
        const showfullScreen = () => {
            isfull.value = true;
            const element: any = document.documentElement;
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
            } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
            }
        };
        const exitFullscreen = () => {
            isfull.value = false;
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        };
        const isFull = () => {
            var isFull =
                document.mozFullScreen ||
                document.fullScreen ||
                //谷歌浏览器及Webkit内核浏览器
                document.webkitIsFullScreen ||
                document.webkitRequestFullScreen ||
                document.mozRequestFullScreen ||
                document.msFullscreenEnabled;
            if (isFull === undefined) isFull = false;
            //console.log("isFull："+isFull)
            return isFull;
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
            <>
                {/* @ts-ignore */}
                <HeadItem onClick={() => isfull ? exitFullscreen() : showfullScreen()} style={{ fontSize: this.iconStyle }}>
                    {{
                        default: () => { return <Icon>{isScreen()}</Icon> },
                    }}
                </HeadItem>
            </>
        )
    }
})
export default FullScreen