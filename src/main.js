import Vue from 'vue'
import App from './App.vue'
import 'animate.css'
import 'velocity-animate'

// console.log(Velocity)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
