import originAxios from "axios";
import { message } from "antd";

const axios = originAxios.create({ timeout: 2000 });

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    /*
      successful response:
      {"flag": 0, "data": ""}

      unsuccessful response:
      {"flag": 1, "msg": "error"}
     */
    if (response.data && response.data.flag === 1) {
      const errorMsg = response.data.msg;
      message.error(errorMsg);
      return Promise.reject(errorMsg);
    }
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 对 get/post 进行封装

export function get(url: string, data: any) {
  return axios.get(url, { params: data });
}

// axios.post 默认会将 js对象 序列化成 json 格式。
export function post(url: string, data: any) {
  return axios({ method: "post", url, data });
}
