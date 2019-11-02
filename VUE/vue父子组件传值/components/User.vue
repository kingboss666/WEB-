<template>
  <div class="component">
    <h1>用户管理界面</h1>
    <p>我是一个用户</p>
    <p>{{name}}</p>
    <p>{{age}}</p>
    <hr>
    <div class="row">
        <div class="col-xs-12 col-sm-6">
            <app-user-datail :myName="name" :age="age" @changeParentName="changeName" :callback="callback"></app-user-datail>
        </div>
        <div class="col-xs-12 col-sm-6">
            <app-user-edit  :age="age" @editAge="changeAge"></app-user-edit>
        </div>
    </div>
  </div>
</template>

<script>
import userDatail from './UserDetail.vue'
import userEdit from './UserEdit.vue'
export default {
    data(){
        return{
            name: 'king',
            age: 10
        }
    },
    components: {
        "app-user-datail": userDatail,
        "app-user-edit": userEdit,
    },
    methods:{
        changeName(name){
            this.name = name;
        },
        callback(name){
            this.name = name;
        },
        changeAge(age){
            this.age = age;
        }
    }
}
</script>

<style>
.component{
    width: 700px;
    background: rgb(162, 192, 212);
    border:1px solid #000;
    padding: 25px
}
</style>
