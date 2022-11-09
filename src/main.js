import Vue from "vue";
import App from "./App.vue";
// import router from "./router";
import VueRouter from "vue-router";
import { routes } from "./routes";
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes,
});
Vue.config.productionTip = false;

export const EventBus = new Vue();
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
