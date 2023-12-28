import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
/** plugins */
import VueLazyLoad from "vue3-lazyload";

const pinia = createPinia();
const app = createApp(App);

app.use(VueLazyLoad);
app.use(pinia);
app.mount("#app");
