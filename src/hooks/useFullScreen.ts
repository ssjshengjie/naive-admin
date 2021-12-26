interface HTMLElement {
    // 进入全屏
    webkitRequestFullscreen(options?: FullscreenOptions): Promise<void>;
    webkitRequestFullScreen(options?: FullscreenOptions): Promise<void>;
    msRequestFullscreen(options?: FullscreenOptions): Promise<void>;
    mozRequestFullScreen(options?: FullscreenOptions): Promise<void>;
    // 监听全屏
    onwebkitfullscreenchange: ((this: Element, ev: Event) => any) | null;
    onmozfullscreenchange: ((this: Element, ev: Event) => any) | null;
    MSFullscreenChange: ((this: Element, ev: Event) => any) | null;
}

interface Document {
    // 当前全屏的元素
    readonly webkitFullscreenElement: Element | null;
    readonly msFullscreenElement: Element | null;
    readonly mozFullScreenElement: Element | null;
    // 退出全屏
    webkitExitFullscreen(): Promise<void>;
    msExitFullscreen(): Promise<void>;
    mozCancelFullScreen(): Promise<void>;
}

type RFSMethodName = 'webkitRequestFullScreen' | 'requestFullscreen' | 'msRequestFullscreen' | 'mozRequestFullScreen';
type EFSMethodName = 'webkitExitFullscreen' | 'msExitFullscreen' | 'mozCancelFullScreen' | 'exitFullscreen';
type FSEPropName = 'webkitFullscreenElement' | 'msFullscreenElement' | 'mozFullScreenElement' | 'fullscreenElement';
type ONFSCPropName = 'onfullscreenchange' | 'onwebkitfullscreenchange' | 'onmozfullscreenchange' | 'MSFullscreenChange';

const DOC_EL: any = document.documentElement;
let RFC_METHOD_NAME: RFSMethodName | any = 'requestFullscreen';
let EFS_METHOD_NAME: EFSMethodName | any = 'exitFullscreen';
let FSE_PROP_NAME: FSEPropName | any = 'fullscreenElement';
let ON_FSC_PROP_NAME: ONFSCPropName | any = 'onfullscreenchange';

if (`webkitRequestFullScreen` in DOC_EL) {
    RFC_METHOD_NAME = 'webkitRequestFullScreen';
    EFS_METHOD_NAME = 'webkitExitFullscreen';
    FSE_PROP_NAME = 'webkitFullscreenElement';
    ON_FSC_PROP_NAME = 'onwebkitfullscreenchange';
} else if (`msRequestFullscreen` in DOC_EL) {
    RFC_METHOD_NAME = 'msRequestFullscreen';
    EFS_METHOD_NAME = 'msExitFullscreen';
    FSE_PROP_NAME = 'msFullscreenElement';
    ON_FSC_PROP_NAME = 'MSFullscreenChange';
} else if (`mozRequestFullScreen` in DOC_EL) {
    RFC_METHOD_NAME = 'mozRequestFullScreen';
    EFS_METHOD_NAME = 'mozCancelFullScreen';
    FSE_PROP_NAME = 'mozFullScreenElement';
    ON_FSC_PROP_NAME = 'onmozfullscreenchange';
} else if (!(`requestFullscreen` in DOC_EL)) {
    throw `当前浏览器不支持Fullscreen API !`;
}
export const useFullScreen = () => {
    //全屏
    const beFull = (el: HTMLElement = DOC_EL, options?: FullscreenOptions): Promise<void> => {
        //@ts-ignore
        return el[RFC_METHOD_NAME](options);
    }
    //退出全屏
    const exitFull = (): Promise<void> => {
        //@ts-ignore
        return document[EFS_METHOD_NAME]();
    }
    //是否全屏 esc 事件 
    const isFull = (el: HTMLElement | EventTarget = DOC_EL): boolean => {
        //@ts-ignore
        return el === document[FSE_PROP_NAME]
    }
    return {
        beFull,
        exitFull,
        isFull
    }
}
export default useFullScreen