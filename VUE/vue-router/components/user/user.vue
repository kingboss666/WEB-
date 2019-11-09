<template>
    <div>
        <h1>The User Page</h1>
        <button class="btn btn-primary" @click="goToHome">跳转到Home页面</button>
        <hr>
        <router-view></router-view>
        <!-- <p>{{id}}</p> -->
    </div>
</template>

<script>
export default {
    // data(){
    //     return{
    //         id: this.$route.params.id
    //     }
    // },
    // watch: {
    //     $route(to){
    //        this.id = to.params.id; 
    //     }
    // },
    methods:{
        goToHome(){
            this.$router.push({
                name: 'home'
            });
        }
    }
}
</script>

<style scoped>

</style>