import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.filter('toLowerCase',(value)=>{
    return value.toLowerCase();
})
Vue.mixin({
  created(){
    console.log('全局的creaqted')
  }
})
new Vue({
  render: h => h(App),
}).$mount('#app')
