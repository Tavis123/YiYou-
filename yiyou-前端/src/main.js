import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "element-ui/lib/theme-chalk/index.css";
import "element-ui/lib/theme-chalk/base.css";
import CollapseTransition from "element-ui/lib/transitions/collapse-transition";
import ElementUI from "element-ui";
import axios from "axios";
import "@/assets/style/reset.css";
import "@/assets/style/global.css";
import "@/assets/font/font.css"
import "@/icons/index.js"

Vue.prototype.$axios = axios;
Vue.use(ElementUI);
Vue.component(CollapseTransition.name, CollapseTransition)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
