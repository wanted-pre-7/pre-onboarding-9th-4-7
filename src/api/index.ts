import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:5173/",
});

export const getList = () => {
  return client.get(import.meta.env.VITE_MOCKDATA);
};
