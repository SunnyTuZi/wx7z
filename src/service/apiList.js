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











