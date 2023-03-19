import type { AxiosResponse } from "axios";
import type { ITransaction } from "../types/transaction";
import client from "./axios";

export const getTransactionData = async () => {
  const { data }: AxiosResponse<ITransaction[]> = await client({
    method: "get",
  });

  return data.filter((info) => info.transaction_time.includes("2023-03-08"));
};
