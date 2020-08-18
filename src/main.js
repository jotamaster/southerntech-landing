import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueLand from "./plugins/Vueland.kit";
// import on your project (less then 1KB gziped)
import vueSmoothScroll from "vue2-smooth-scroll";

Vue.use(vueSmoothScroll);

Vue.use(VueLand);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
