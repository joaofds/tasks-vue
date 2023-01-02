import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";

//icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);
Vue.component("font-awesome-icon", FontAwesomeIcon);

import "./assets/css/main.css";

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
