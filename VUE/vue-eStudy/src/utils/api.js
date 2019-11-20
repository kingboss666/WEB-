import axios from 'axios'
import Vue from 'vue'

const api = axios.create({
    baseURL: 'http://sandbox_api.estudy.chanke.xyz',
})

api.defaults.headers.post['Content-Type'] = "application/json";
api.defaults.withCredentials = true;

// 拦截器
api.interceptors.response.use(response => {
    return response.data.data
}, error => {
    // console.dir(error)
    const headers = error.config.headers;
    const response = error.response
    if(!headers._slient){
        Vue.$notification.error({
            message: "API Error",
            description: response.data.errorMessage
        })
    }
    return Promise.reject(error);
})

export {api}