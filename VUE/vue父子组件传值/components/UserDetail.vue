<template>
    <div>
        <h1>这是用户的详细信息</h1>
        <p>更多的信息</p>
        <p>{{name}}</p>
        <p>{{age}}</p>
        <p>{{switchName()}}</p>
        <!-- <button @click="changeParentName">改变父组件属性</button> -->
        <button @click="callback('xiaohong')">改变父组件属性</button>
    </div>
</template>

<script>
import {EventBus} from '../main.js';
export default {
    props: {
        "myName": {
            type: String,
            // required: true,
            default: 'xiaoming'
        },
        // "age": Number,
        "callback": Function
    },
    data(){
        return{
            name: this.myName,
            age : 10
        }
    },
    methods: {
        changeName(){
            this.name = 'jin'
        },
        switchName(){
            return this.myName.split("").reverse().join("");
        },
        changeParentName: function(){
            // this.name = "xiaohong";
            this.$emit('changeParentName','xiaohong');
        }
    },
    created(){
        EventBus.$on('editAge',(age)=>{
            console.log(111)
            this.age = age;
        })
    }
}
</script>

<style scoped>
div{
    border: 1px solid #000;
    background-color: rgb(206,121,114);
    padding: 20px;
}
</style>
