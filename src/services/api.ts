import axios from "axios";

const api = axios.create({
  // Mac
   baseURL: 'https://bulify-tcc.herokuapp.com/',
  // Linux
  //baseURL: "http://192.168.0.104:3333",
});

export default api;
