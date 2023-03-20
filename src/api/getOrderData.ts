import axios from "axios";
const DATA_URL = "/mock/data.json";

export const getOrderData = () => {
  return axios.get(DATA_URL);
};
