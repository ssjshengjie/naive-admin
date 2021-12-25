import "vue-global-api";
import '@/design/common.less'
import { createApp } from "vue";
import App from "./App.vue";
import { router, setupRouter } from "@/router";
import { setupStore } from "@/store";
import { setupLibs } from "@/libs";
const app = createApp(App);
async function bootApp() {
  setupRouter(app);
  setupStore(app);
  setupLibs(app);
  //setupRouterGuard(router);
  app.mount("#app");
}
void bootApp();
