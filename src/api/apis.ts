import axios from "axios";
const BASE_URL = "/mock/data.json";

export const fetchOrderData = () => {
  return axios.get(BASE_URL);
};
