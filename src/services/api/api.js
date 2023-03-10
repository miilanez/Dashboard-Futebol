import axios from "axios";

const options = {
  baseURL: "https://football98.p.rapidapi.com/",
};

const api = axios.create(options);
api.defaults.headers["X-RapidAPI-Key"] =
  "7c21668318msh60a1854532597c4p1919f8jsn0a2ebae56ed2";
api.defaults.headers["X-RapidAPI-Host"] = "football98.p.rapidapi.com";

export default api;
