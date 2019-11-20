import Vue from 'vue'
import App from './App.vue'
import store from './store/store'

//引入ant design 组件库
import Antd from 'ant-design-vue';
import Notification from 'ant-design-vue/lib/notification';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);
Vue.$notification = Notification;

// 引入vee-validate 验证
import VeeValidate, { Validator } from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'// 引入中文文件
// 配置中文
Validator.addLocale(zh_CN)
Validator.localize("zh-CN",zh_CN)
Vue.use(VeeValidate)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
