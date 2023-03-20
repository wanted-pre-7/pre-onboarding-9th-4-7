import { useQuery } from "@tanstack/react-query";
import { fetchOrderData } from "../api/apis";
import type { IOrderData } from "../types";

const TODAY_DATE = "2023-03-08";

const useFetchOrderData = () => {
  return useQuery(["orderData"], fetchOrderData, {
    refetchInterval: 5000,
    refetchOnWindowFocus: false,
    select: (data) => {
      const orderData: IOrderData[] = data.data?.filter((v: IOrderData) =>
        v.transaction_time.includes(TODAY_DATE),
      );

      return orderData.sort((a, b) => a.id - b.id);
    },
  });
};

export default useFetchOrderData;
