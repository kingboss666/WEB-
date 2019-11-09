<template>
    <div>
        <h3>用户编辑页面</h3>
        <p>{{$route.query.a}}</p>
        <p>{{$route.query.b}}</p>
        <button class="btn btn-primary" @click="confirm=true">确定</button>
        <div style="height: 1000px"></div>
        <button class="btn btn-primary" id="btn">按钮</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            confirm: false
        }
    },
    beforeRouteEnter(to,from,next){
        console.log('edit组件守卫');
        next((vm)=>{
            console.log(vm)
        });
    },
    beforeRouteLeave(to,from,next){
        if(this.confirm){
            next();
        }else{
            if(confirm('你确定要走吗')){
                return next();
            }else{
                next(false);
            }
        }
    }
}
</script>