import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.headers.common["Authorization"] =
  "Bearer " + import.meta.env.VITE_API_TOKEN;

export const getData = async (url, config = {}) => {
  return (await axios.get(url, config)).data;
};
