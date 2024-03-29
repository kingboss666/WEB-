import Vue from 'vue'
import App from './App.vue'
import {router} from './router.js'
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
}).$mount('#app')