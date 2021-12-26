import { useMessage } from "naive-ui";
export const MessageContent = defineComponent({
    name: "MessageContent",
    setup() {
        //挂载在 window 方便与在js中使用
        //@ts-ignore
        window["$message"] = useMessage();
        return () => { }
    },
})
export default MessageContent