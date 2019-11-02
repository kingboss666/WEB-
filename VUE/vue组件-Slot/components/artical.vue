<template>
    <div>
        <div class="title">
            <slot name="title"></slot>
            <span><slot name="subTitle">这是子标题</slot></span>
        </div>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    div{
        padding: 30px;
        text-align: center;
        border:1px solid #ccc;
        box-shadow: 1px 1px 1px black;
    }
    h1{
        color: red;
    }
    .title{
        font-style: italic;
    }
</style>