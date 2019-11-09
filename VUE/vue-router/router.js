import Vue from 'vue'
import vueRouter from 'vue-router'
import Home from './components/home.vue'
const User = () => import('./components/user/user.vue')
const UserStart = () => import('./components/user/userStart.vue')
const UserDetali = () => import('./components/user/userDetali.vue')
const UserEdit = () => import('./components/user/UserEdit.vue')
import Header from './components/header.vue'
Vue.use(vueRouter);

const router =  new vueRouter({
  routes: [
    {path: '/', components: {
      default: Home,
      "header-top": Header,
    }, name: "home"},
    {
      path: '/user', 
      component: User,
      children: [{
        path: '',
        component: UserStart
      },
      {
        path: ':id',
        component: UserDetali,
        beforeEnter(to,from,next){
          console.log('局部守卫');
          next()
        }
      },
      {
        path: ':id/edit',
        component: UserEdit,
        name: 'userEdit'
      }]
    },{
      path: '/abc',
      redirect: '/user'
    },
    {
      path: '*',
      redirect: {name: 'home'}
    }
  ],
  mode: "history",
  scrollBehavior(to,savePostion){
    if(savePostion){
      return savePostion;
    }
    if(to.hash){
      return {selector: to.hash}
    }
    return {x:0,y:0}
  }
})
router.beforeEach((to,from,next)=>{
  console.log('全局守卫');
  next();
})

export {router}