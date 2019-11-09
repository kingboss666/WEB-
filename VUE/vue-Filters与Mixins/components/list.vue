<template>
    <div class="container">
        <h1>Filters & Mixins</h1>
        <button @click="fruitArr.push('山竹')">添加水果</button>
        <input type="text" v-model="inputText">
        <ul>
            <li v-for="fruit in fruitFilter" :key="fruit">{{fruit}}</li>
        </ul>
    </div>
</template>

<script>
import listMixins from './listMixins.js';
export default {
    mixins: [listMixins],
    data(){
        return{
            inputText: 'A',
        }
    },
    created(){
        console.log('list的creaqted')
    }
}
</script>
<style scoped>
    p{
        font-size: 22px
    }
</style>