import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/main.css";
import Vuelidate from "vuelidate";

Vue.config.productionTip = false;

Vue.use(Vuelidate);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
