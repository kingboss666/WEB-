<template>
   <div class="container">
       <div class="row">
           <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
               <h1>Animations</h1>
               <hr>
               <!-- CSS过渡 -->
               <button class="btn btn-primary" @click="show = !show">点击</button>
               <br><br>
               <select v-model="animatedName" class="form-control">
                   <option value="fade">fade</option>
                   <option value="slide">slide</option>
               </select>
               <br> <br>
               <transition :name="animatedName" @enter-cancelled="enterCancelled">
                   <div class="alert alert-info" v-if="show">我是第一句提示语句</div>
               </transition>
               <transition name="slide" type="animation" appear>
                   <div class="alert alert-info" v-if="show">我是第二句提示语句</div>
               </transition>
               <transition 
                    enter-active-class="animated bounce"
                    leave-active-class="animated shake"
                    appear>
                   <div class="alert alert-info" v-if="show">我是第三句提示语句</div>
               </transition>
               <transition name="slide" type="animation" mode="out-in">
                   <div class="alert alert-info" v-if="show" key="info">我是第四句提示语句</div>
                   <div class="alert alert-warning" v-else key="warning">我是第五句提示语句</div>
               </transition>
               <!-- JS过渡 -->
               <hr>
                <button class="btn btn-primary" @click="load = !load">点击</button>
                <br> <br>
                <transition
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"

                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled"
                    name="=slide"
                    :class="false">
                    <div style="height: 100px;background: red;" v-if="load"></div>
                </transition>
                <hr>
                <!-- 组件之间切换的动画 -->
                <button class="btn btn-primary" @click="selectComponent === 'app-alert-danger' ? selectComponent = 'app-alert-success' : selectComponent = 'app-alert-danger' ">切换组件</button>
                <br> <br>
                <transition name="slide" mode="out-in">
                    <component :is="selectComponent"></component>
                </transition>
                <hr>
                <!-- transition-group -->
                <button class="btn btn-primary" @click="addItem">添加列表</button>
                <br> <br>
                <transition-group tag="ul" name="slide" class="list-group">
                    <li 
                        class="list-group-item"
                        v-for="(list,index) in lists"
                        :key="list"
                        @click="removeItem(index)"
                        style="cursor: pointer;">
                    {{list}}</li>
                </transition-group>
           </div>
       </div>
   </div>
</template>

<script>
import alertDanger from './components/alertDanger.vue';
import alertSuccess from './components/alertSuccess.vue';
export default {
    data(){
        return{
            show: false,
            load: false,
            animatedName: 'fade',
            width: 0,
            selectComponent: 'app-alert-danger',
            lists: [1,2,3,4,5]
        }
    },
    components: {
        "app-alert-danger": alertDanger,
        "app-alert-success": alertSuccess,
    },
    methods:{
        addItem(){
            const pos = Math.floor(Math.random() * this.lists.length);
            this.lists.splice(pos,0,this.lists.length + 1);
        },
        removeItem(index){
            this.lists.splice(index,1);
        },
        beforeEnter(el){
            this.width = 0;
            el.style.width = this.width + 'px';
        },
        enter(el,done){
            let round = 1;
            let timer = setInterval(()=>{
                el.style.width = (this.width + round * 10)+ 'px';
                round ++;
                if(round >= 30){
                    clearInterval(timer);
                    done();
                }
            },16)
        },
        afterEnter(el){
            this.width = 300;
            el.style.width = this.width + 'px';
        },
        enterCancelled(){
            console.log('enterCancelled');
        },
        beforeLeave(el){
            this.width = 300;
            el.style.width = this.width + 'px';
        },
        leave(el,done){
             let round = 1;
            let timer = setInterval(()=>{
                el.style.width = (this.width - round * 10)+ 'px';
                round ++;
                if(round >= 30){
                    clearInterval(timer);
                    done();
                }
            },16)
        },
        afterLeave(el){
            this.width = 0;
            el.style.width = this.width + 'px';
        },
        leaveCancelled(){
            console.log('leaveCancelled');
        }
    }
}
</script>

<style scoped>
    .fade-enter{
        opacity: 0;
    }
    .fade-enter-active{
        transition: opacity 1s;
    }
    .fade-enter-to{
        opacity: 1;
    }
    .fade-leave{
        opacity: 1;
    }
    .fade-leave-active{
        transition: opacity 1s;
    }
    .fade-leave-to{
        opacity: 0;
    }

    .slide-enter{
        opacity: 0;
    }
    .slide-enter-active{
        animation: slide-in 1s ease-out;
        transition: opacity 1s;
    }
    .slide-enter-to{
        opacity: 1;
    }
    .slide-leave{
        opacity: 1;
    }
    .slide-leave-active{
        animation: slide-out 1s ease-out;
        transition: opacity 1s;
        position: absolute;
    }
    .slide-move{
        transition: transform 1s;
    }
    .slide-leave-to{
        opacity: 0; 
    }
    @keyframes slide-in{
        from{
            transform: translateY(20px)
        }
        to{
            transform: translateY(0)
        }
    }
    @keyframes slide-out{
        from{
            transform: translateY(0)
        }
        to{
            transform: translateY(20px)
        }
    }
    button:focus{
        outline: 0;
    }   
</style>