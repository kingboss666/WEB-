<template>
    <div>
        <h3>用户详情界面</h3>
        <p>{{ $route.params.id }}</p>
        <router-link 
            :to="{
                name: 'userEdit',
                params:{id: $route.params.id},
                query: {a: 1,b: 2},
                hash: '#btn'
            }" 
            tag="button" 
            class="btn btn-primary">编辑
        </router-link>
    </div>
</template>