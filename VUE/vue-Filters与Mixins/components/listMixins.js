export default {
    data(){
        return{
            inputText: '',
            fruitArr: ['Apple','Banana','Mongo']
        }
    },
    computed: {
        fruitFilter(){
            return this.fruitArr.filter((fruit)=>{
                return fruit.match(this.inputText);
            })
        }
    },
    created(){
        console.log('listMixins的creaqted')
    }
}