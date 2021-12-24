import { createApp } from "vue";
import "vue-global-api";
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
