import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import store from "./store";
import Routes from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
});

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
  router,
}).$mount("#app");
