<template>
    <div class="container">
        <h1>Filters & Mixins</h1>
        <p>{{msg | toUpperCase | toLowerCase}}</p>
        <input type="text" v-model="inputText">
        <ul>
            <li v-for="fruit in fruitFilter" :key="fruit">{{fruit}}</li>
        </ul>
        <hr>
        <app-list></app-list>
    </div>
</template>

<script>
import appList from './components/list.vue';
import listMixins from './components/listMixins.js';
export default {
    mixins: [listMixins],
    components: {
        'app-list': appList,
    },
    data(){
        return{
            msg: 'hello',
        }
    },
    filters: {
        toUpperCase(value){
            // 两个使用场景 {{数据绑定}} v-bind指令
            return value.toUpperCase();
        }
    }
}
</script>

<style scoped>
    p{
        font-size: 22px
    }
</style>