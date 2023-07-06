import axios from "axios";

// 调用 axios.create() 函数，创建一个 axios 的实例对象，用 request 来接收
const request = axios.create({
  // 指定请求的根路径
  baseURL: "http://47.113.178.76:8999/"
});
// http request拦截器 添加一个请求拦截器
axios.interceptors.request.use(
  config => {
    let token = localStorage.getItem("satoken");
    if (token) {
      config.headers["satoken"] = token; // 将token放到请求头发送给服务器
      return config;
      // 将token值配置到tokenkey中，将tokenkey放在请求头中
    }
  },
  function(error) {
    console.log(error);
    return Promise.reject(error);
  }
);
export default request;
