import { useQuery } from "@tanstack/react-query";
import { fetchOrderData } from "../api/apis";
import type { IOrderData } from "../types";

const useFetchOrderData = () => {
  return useQuery(["orderData"], fetchOrderData, {
    refetchInterval: 5000,
    refetchOnWindowFocus: false,
    select: (data) => {
      const orderData: IOrderData[] = data.data?.filter((v: IOrderData) =>
        v.transaction_time.includes("2023-03-08"),
      );

      return orderData;
    },
  });
};

export default useFetchOrderData;
