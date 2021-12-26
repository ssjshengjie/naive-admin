import { useDialog } from "naive-ui";
export const DialogContent = defineComponent({
    name: "DialogContent",
    setup() {
        //挂载在 window 方便与在js中使用
        //@ts-ignore
        window["$dialog"] = useDialog();
        return () => { }
    },
})
export default DialogContent