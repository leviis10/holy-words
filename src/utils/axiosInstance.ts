import axios from "axios";
import { AXIOS_BASE_URL } from "../constants";

const axiosInstance = axios.create({
  baseURL: AXIOS_BASE_URL,
  timeout: 5000,
});

export default axiosInstance;
