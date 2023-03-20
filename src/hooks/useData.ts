import { useQuery } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import getData from "../api";
import type { Data } from "../types";

const useData = () => {
  return useQuery<AxiosResponse<Data[]>, Error>(["data"], getData, {
    refetchOnWindowFocus: false,
    refetchInterval: 5000,
  });
};
export default useData;
