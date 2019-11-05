<template>
    <div class="phone-body">
       <div class="feed" v-if="step === 1" v-dragscroll>
          <vuegram-post 
            v-for="(post,index) in posts"
            :key="index"
            :post="post">
          </vuegram-post>
       </div>
        <div v-if="step === 2">
            <div
                class="selected-image"
                :class="selectFilter"
                :style="{backgroundImage: 'url('+image+')'}">
            </div>
            <div class="filter-container" v-dragscroll>
                <file-type
                    v-for="filter in filters"
                    :key="filter.name"
                    :filter="filter"
                    :image="image">
                </file-type>
            </div>
        </div>
        <div v-if="step === 3">
            <div
                class="selected-image"
                :class="selectFilter"
                :style="{backgroundImage: 'url('+image+')'}">
            </div>
            <div class="caption-container">
                <textarea 
                    placeholder="Write a caption..."
                    :value = 'value'
                    @input="inputText">
                </textarea>
            </div>
       </div>
    </div>
</template>

<script>
import vueGramPost from './vueGramPost.vue'
import fileType from './fileType.vue'
export default {
    props:{
        posts: Array,
        filters: Array,
        step: Number,
        image: String,
        selectFilter: String,
        value: String
    },
    components:{
        "vuegram-post": vueGramPost,
        "file-type": fileType
    },
    methods:{
        inputText(event){
            this.$emit("input",event.target.value);
        }
    }
}
</script>

<style lang="scss" src="../styles/phone-body.scss">

</style>