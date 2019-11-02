<template>
    <div>
        <h1>用户编辑页面</h1>
        <p>编辑用户！</p>
        <p>{{age}}</p>
        <button @click="editAge">编辑年龄</button>
    </div>
</template>

<script>
import {EventBus} from '../main.js';
export default {
    data(){
        return{
            age: 10
        }
    },
    // props:{
    //     "age": Number,
    // },
    methods: {
        editAge(){
            this.age= 20;
            // this.$emit('editAge',20)
            EventBus.$emit('editAge',this.age);
        }
    }
}
</script>

<style scoped>
div{
    border: 1px solid #000;
    background-color: rgb(140,216,123);
    padding: 20px;
}
</style>
