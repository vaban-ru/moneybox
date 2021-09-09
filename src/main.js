import "@/css/reset.css";
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  created() {
    this.$store.dispatch("getAllBoxes");
  },
}).$mount("#app");
