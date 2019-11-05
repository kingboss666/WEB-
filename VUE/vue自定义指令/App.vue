<template>
    <div class="container">
        <h1>自定义指令</h1>
        <p v-myOn:click.prevent.stop="alert">点击我</p>
    </div>
</template>

<script>
export default {
    methods:{
        alert(){
            alert(111);
        }
    }
}
</script>

<style scoped>
    p{
        font-size: 22px;
    }
</style>