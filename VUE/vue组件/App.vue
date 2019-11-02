<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <app-server></app-server>
            <app-server-detali></app-server-detali>
        </div>
        <hr>
       <app-footer></app-footer>
    </div>
</template>

<script>
    import server from './components/server/server.vue'
    import serverDetali from './components/server/serverDetali.vue'
    export default{
        components: {
            'app-server': server,
            'app-server-detali': serverDetali,
        }
    }
</script>

<style>

</style>
