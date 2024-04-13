import axios from "axios";

axios.defaults.baseURL = "https://project5-react-lmcrean-f1b3523e8fec.herokuapp.com";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;