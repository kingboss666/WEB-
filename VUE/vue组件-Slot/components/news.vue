<template>
    <div>
        <h1>我是一篇文章</h1>
        <button @click="num++">{{num}}</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            num: 0
        }
    },
    destroyed(){
        console.log('destroyed');
    },
    activated(){
        console.log('activated');
    },
    deactivated(){
        console.log('deactivated');
    }
}
</script>

<style scoped>

</style>