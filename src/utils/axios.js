import Vue from "vue";
import axios from "axios";

// axios.defaults.baseURL = 'https://api.example.com';
// 添加请求拦截器
axios.interceptors.request.use(
  function(config) {
    //全局加token
    // let token=localStorage.getItem('token');
    // if(token){
    //   config.headers.Authorization=token;
    // }
    // console.log(config)
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    return response;
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
export default axios;
