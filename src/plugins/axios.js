"use strict"

import axios from "axios"
import router from "@/router";
import store from "@/store/index"

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || ''
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

let config = {
    // baseURL: "http://127.0.0.1:8081"
    // timeout: 60 * 1000, // Timeout
    withCredentials: true, // Check cross-site Access-Control
};

// 创建Axios对象
const Axios = axios.create(config)

// 请求拦截器
Axios.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        // 判断是否存在token，如果存在的话，则每个http header都加上token
        if (store.state.token!="") {
            config.headers.Authorization = `token ${store.state.token}`;
        }
        return config
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error)
    }
);

// 响应拦截器
Axios.interceptors.response.use(
    function (response) {
        // Do something with response data
        if (response.data.code==-1) {
            // 返回 -1 清除token信息并跳转到登录页面
            store.commit("retoken");
            window.localStorage.removeItem('store');
            window.localStorage.removeItem('loged');
            router.replace({
                path: 'login',
                query: {redirect: router.currentRoute.fullPath}
            })
        }
        return response
    },
    function (error) {
        // Do something with response error
        return Promise.reject(error)
    }
);

export default Axios
