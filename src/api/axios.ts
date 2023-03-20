import type { QueryFunctionContext } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import type { dataResponse } from "../types";
import axiosInstance from "./instance";

export const getData = async ({
  queryKey,
}: QueryFunctionContext): Promise<dataResponse[]> => {
  const [_, status, customer_name] = queryKey;

  const today = "2023-03-08";

  const { data }: AxiosResponse<dataResponse[]> = await axiosInstance.get("");

  return data.filter((item) => {
    return (
      item.transaction_time.split(" ")[0] === today &&
      (status ? item.status + "" == status : true) &&
      (typeof customer_name == "string"
        ? item.customer_name.includes(customer_name)
        : true)
    );
  });
};
