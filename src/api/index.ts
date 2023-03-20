import axios from "axios";

export const getList = () => {
  return axios.get(import.meta.env.VITE_MOCKDATA);
};
