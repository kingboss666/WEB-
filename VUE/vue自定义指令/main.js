import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.directive('myOn',{
    bind(el,binding,vnode){
      console.log(el);
      console.log(binding);
      console.log(vnode);
      const myFun = (e)=> {
        binding.value();
        if(binding.modifiers.prevent){
          console.log(e);
          e.preventDefault();
        }
      } 
      
      
      el.addEventListener(binding.arg,myFun,!binding.modifiers.stop);
    }
})
new Vue({
  render: h => h(App),
}).$mount('#app')
