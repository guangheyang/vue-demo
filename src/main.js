import Vue from 'vue'
import App from './App.vue'
import "./assets/reset.css";
import router from './router'
import axios from './http'


Vue.config.productionTip = false
Vue.prototype.$axios = axios
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
