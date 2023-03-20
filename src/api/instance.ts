import type { AxiosRequestConfig } from "axios";
import axios from "axios";

const config: AxiosRequestConfig = {
  baseURL: "/mock/data.json",
};
const axiosInstance = axios.create(config);

export default axiosInstance;
