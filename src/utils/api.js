import axios from "axios";

const api = axios.create({
  baseURL: "https://smartmenuapi.herokuapp.com/",
});

export default api;
