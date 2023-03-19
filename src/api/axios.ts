import type { AxiosRequestConfig } from "axios";
import axios from "axios";

const config: AxiosRequestConfig = {
  baseURL: "/mock/data.json",
};
const client = axios.create(config);

export default client;
