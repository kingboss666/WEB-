<template>
    <div class="authrization">
        <form @submit.prevent="submit">
            <div class="filed">
                <a-input 
                    type="text" 
                    placeholder="请输入用户名"
                    v-validate="'required'"
                    name="name" data-vv-as="用户名"
                    v-model="form.name"
                    :class="{error: errors.first('name')}">
                    <a-icon slot="prefix" type="user" class="icon"></a-icon>
                </a-input>
                <span class="error-tip">{{ errors.first('name') }}</span>
            </div>

            <div class="filed">
                <a-input 
                    type="password" 
                    placeholder="请输入密码"
                    v-validate="'required'"
                    name="pwd" data-vv-as="密码"
                    v-model="form.password"
                    :class="{error: errors.first('pwd')}">
                    <a-icon slot="prefix" type="lock" class="icon"></a-icon>
                </a-input>
                 <span  class="error-tip">{{ errors.first('pwd') }}</span>
            </div>

            <div class="filed">
                <a-button type="primary" htmlType="submit">提交</a-button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            form: {
                name: "",
                password: ""
            }
        }
    },
    methods:{
        submit(){
            this.$validator.validateAll().then(result => {
                if(result){
                    this.$store.dispatch('user/login',this.form)
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .error{
        border: 1px solid red;
    }
    .error-tip{
        color: red;
        font-size: 12px;
    }
    .authrization{
        display: flex;
        justify-content: center;
    }
    form{
        width: 400px;
        .filed{
            margin: 20px;
            button{
                width: 100%;
            }
        }
        .icon{
            color: rgba(0,0,0,0.25);
        }
    }
    
</style>