import {api} from '../../utils/api.js'

const state = {
    loggedIn: false,
    info: {},
}

const getters = {

}

const mutations = {
    login(state,data){
        state.loggedIn = true
        state.info = data
        api.defaults.headers.common["Token"] = state.info.token
    },
    updateToken(state,token){
        state.info.token = token;
    },
    logout(state){
        state.loggedIn = false
        state.info = {}
        api.defaults.headers.common["Token"] = ""
    }
}

const actions = {
    login({commit},form){
        api.post('/auth/login',form).then( result => {
            commit('login',result)
        })
    },
    checkedLogin({commit,state,dispatch}){
        api.defaults.headers.common["Token"] = state.info.token;
        api.post("/auth/refreshToken",{},{headers: {'_slient': true}}).then((token) => {
            commit('updateToken',token)
        }).catch(() => {
            dispatch('logout')
        })
    },
    logout({commit}){
        commit('logout');
    }
}
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}