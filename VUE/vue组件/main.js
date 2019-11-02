import Vue from 'vue'
import App from './App.vue'
import Header from './components/common/header.vue'
import Footer from './components/common/footer.vue'

Vue.config.productionTip = false
Vue.component('app-header',Header)
Vue.component('app-footer',Footer)

new Vue({
  render: function(createElement){
    return createElement(App);
  },
}).$mount('#app')
