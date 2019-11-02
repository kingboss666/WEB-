<template>
    <div>
        <div id="on" 
        @click="changeParent(true)"
        :class="{active: isOn}">开</div>
        <div id="off" 
        @click="changeParent(false)"
        :class="{active: !isOn}">关</div>
    </div>
</template>

<script>
export default {
    props: ['value'],
    data(){
        return{
            isOn: this.value,
        }
    },
    methods: {
        changeParent(value){
            this.isOn = value;
            this.$emit('input', value)
        }
    }
}
</script>

<style scoped>
    #on,#off{
        width: 40px;
        height: 24px;
        background-color: lightgray;
        display: inline-block;
        text-align: center;
        margin: 10px 0;
        cursor: pointer;
    }
    #on:hover, #on.active{
        background-color: lightgreen;
    }
    #off:hover,#off.active{
        background-color: lightsalmon;
    }
</style>