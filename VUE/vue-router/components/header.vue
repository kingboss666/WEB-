<template>
    <div>
        <ul class="nav nav-pills">
            <router-link tag="li" :to="{name:'home'}" active-class="active" exact><a>Home</a></router-link>
            <router-link tag="li" to="/user?a=1" active-class="active"><a>User</a></router-link>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    
</style>