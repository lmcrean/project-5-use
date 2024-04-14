import axios from "axios";

axios.defaults.baseURL = "https://project5-lmcrean-1b4c7e21126b. herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();