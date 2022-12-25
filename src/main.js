import Vue from "vue";
import App from "./App.vue";
import router from "./router";

//icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);
Vue.component("font-awesome-icon", FontAwesomeIcon);

import "./assets/main.css";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
