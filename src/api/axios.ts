import type { QueryFunctionContext } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import type { IDataResponse, IResponse } from "../types";
import { getEndNumber, getStartNumber } from "../utils/pageUtil";
import axiosInstance from "./instance";

export const getData = async ({
  queryKey,
}: QueryFunctionContext): Promise<IResponse> => {
  const [_, status, customer_name, page, sortKey, sortDir] = queryKey;

  const today = "2023-03-08";

  const { data }: AxiosResponse<IDataResponse[]> = await axiosInstance.get("");

  const startPageNumber = getStartNumber(typeof page === "string" ? page : "1");

  const filterData = data.filter((item) => {
    return (
      item.transaction_time.split(" ")[0] === today &&
      (status ? item.status + "" == status : true) &&
      (typeof customer_name == "string"
        ? item.customer_name.includes(customer_name)
        : true)
    );
  });

  if (typeof sortKey === "string") {
    filterData.sort((a: Record<string, any>, b: Record<string, any>) => {
      if (a[sortKey] < b[sortKey]) {
        return sortDir && sortDir === "desc" ? 1 : -1;
      }
      if (a[sortKey] > b[sortKey]) {
        return sortDir && sortDir === "desc" ? -1 : 1;
      }
      return 0;
    });
  }

  return {
    data: filterData.slice(startPageNumber, getEndNumber(startPageNumber)),
    total: filterData.length,
  };
};
