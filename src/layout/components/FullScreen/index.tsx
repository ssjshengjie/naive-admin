import { FullscreenOutlined, FullscreenExitOutlined } from '@vicons/antd'
export const FullScreen = defineComponent({
    name: 'full-screen',
    components: { FullscreenOutlined, FullscreenExitOutlined },
    setup() {
        const isfull = ref<boolean>(false)
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
            <nButton
                quaternary
                circle
                onClick={() => isfull ? exitFullscreen() : showfullScreen()}
                style="font-size: 20px;"
            >
                {isScreen()}
            </nButton>
        )
    }
})
export default FullScreen