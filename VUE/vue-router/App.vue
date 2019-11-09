<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing</h1>
                <router-view name="header-top"></router-view>
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
    .fade-enter{
        opacity: 0;
    }
    .fade-enter-to{
        opacity: 1;
    }
    .fade-enter-active{
        transition: opacity 1s;
    }
    .fade-leave{
        opacity: 1;
    }
    .fade-leave-to{
        opacity: 0;
    }
    .fade-leave-active{
        transition: opacity 1s;
    }
</style>