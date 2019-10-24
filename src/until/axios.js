/**
 * Create by Zwl on 2019/4/15
 * @Description: 接口请求拦截器
 */


'use strict';

import { Toast } from 'vant';
import axios from 'axios';
import qs from 'qs';
import { getStore, setStore } from "./localStorage";


const _axios = axios.create({
    headers: {'Content-Type':'application/x-www-form-urlencoded'}
});

//请求失败统一处理
const commonError = (error) =>{
    let res = error.response;
    Toast.fail('失败文案');
  return new Promise.reject(error)
}

// 添加一个请求拦截器
_axios.interceptors.request.use(function (config) {
    const token = getStore('token');
    config.headers.common['Authorization'] = 'Bearer ' + token;
    config.data = qs.stringify(config.data);
    return config;
}, function (error) {
    commonError(error)
});


// 添加一个响应拦截器
_axios.interceptors.response.use(function (response) {
    if(response.status == 200){
        // if(response.data.code == 1){
        //
        // }else{
        //     Toast.fail(response.data.msg);
        // }
    }else{
        Toast.fail('请求失败');
    }
    return response.data;
}, function (error) {
    commonError(error)
});



export default _axios;

