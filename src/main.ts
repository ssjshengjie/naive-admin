import "vue-global-api";
import '@/design/common.less'
import { createApp } from "vue";
import App from "./App.vue";
import { router, setupRouter } from "@/router";
import { setupStore } from "@/store";
import { setupLibs } from "@/libs";
import { setupI18n } from '@/i18n'
import { AppProvider } from '@/components/AppProvider';
const app = createApp(App);
const appProvider = createApp(AppProvider);
async function bootApp() {
  setupStore(app);
  setupLibs(app);
  appProvider.mount('#appProvider', true);
  await setupI18n(app)
  await setupRouter(app);
  await router.isReady();
  app.mount("#app", true);
}
void bootApp();
