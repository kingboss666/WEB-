<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li 
            class="list-group-item" 
            :key="index" 
            v-for="index in 5">
                服务器 #{{ index }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {

    };
</script>
    
<style scoped>
    div{
        border: 1px solid red;
        
    }
</style>