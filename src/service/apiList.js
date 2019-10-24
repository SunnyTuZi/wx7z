/**
 * Create by Zwl on 2019/5/9
 * @Description: 接口清单
 */

'use strict';

import axios from '../until/axios';

/**
 * 统一post请求
 * @param url
 * @param data
 * @returns {Promise<void>}
 */
const postAjax = async (url,data) => {
  return await axios.post(url,data).then(
    (result) =>{
      return result;
    }
  )
};
/**
 * 统一get请求
 * @param url
 * @param data
 * @returns {Promise<T | *>}
 */
const getAjax = async(url,data) => {
  return await axios.get(url,{params:data}).then(
    (result) =>{
      return result;
    }
  )
};


export const getKey = (data) => postAjax('/api/getPostData',data);

export const login = (data) => postAjax('/api/getPostData',data);

export const wdLogin = (data) => postAjax('/wdapi/member/userStatuSynchronous',data);

export const addVisit = (data) => postAjax('/ckwdapi/getPostData',data);

export const getUserInfo = (data) => postAjax('/ckwdapi/getPostData',data);

export const ckwdAjax = (data) => postAjax('/ckwdapi/getPostData',data);

export const getCode = (data) => postAjax('/verify',data);

export const adminLogin = (data) => getAjax('/Login/checkin',data);











