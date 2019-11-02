<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <button @click="selectCom = 'app-artical'">app-artical</button>
                <button @click="selectCom = 'app-author'">app-author</button>
                <button @click="selectCom = 'app-news'">app-news</button>
                <hr>
                <p>{{selectCom}}</p>
                <keep-alive>
                    <component :is="selectCom">
                        <h1 slot="title">{{title}}</h1>
                        <h3 slot="subTitle">这是H3子标题</h3>
                        <p>这是一个段落</p>
                        <p>这是第二个段落</p>
                    </component>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
    import Artical from './components/artical.vue'
    import Author from './components/author.vue'
    import News from './components/news.vue'
    export default {
        data(){
            return{
                title: '我是一个title标题',
                selectCom: 'app-artical'
            }
        },
        components: {
            'app-artical': Artical,
            'app-author': Author,
            'app-news': News
        }
    };
</script>

<style scoped>

</style>