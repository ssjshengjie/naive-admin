import type { App } from "vue";
//naive ui
import naive from "naive-ui";
// 通用字体
import "vfonts/Lato.css";
// 等宽字体
import "vfonts/FiraCode.css";
export function setupLibs(app: App<Element>) {
  app.use(naive);
}
