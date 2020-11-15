import axios from "axios";

const api = axios.create({
  // Mac
   baseURL: 'http://192.168.0.97:3333',

  // Linux
  //baseURL: "http://192.168.0.104:3333",
});

export default api;
