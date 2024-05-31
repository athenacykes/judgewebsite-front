 
import axios from "axios";
import qs from "qs";
import gloabal from "../../static/config/config";
axios.defaults.withCredentials = true;
// 创建axios实例
const service = axios.create({ 
});

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// request拦截器
service.interceptors.request.use(
  config => {
    if (gloabal.id != null) {
      console.log(gloabal.id);
      config.headers.Authorization = gloabal.id;
    }
    if (config.method != "get") {
      config.data = qs.stringify(config.data);
    }
    // if (getCookie("session_id")) {
    //   config.headers.Authorization = getCookie("session_id");
    // }
    return config;
  },
  error => {
    console.warn(error);
    return Promise.reject(error);
  }
);

// response拦截器
service.interceptors.response.use(
  response => response,
  error => {
    console.warn(error);
    return Promise.reject(error);
  }
);

export default service;
