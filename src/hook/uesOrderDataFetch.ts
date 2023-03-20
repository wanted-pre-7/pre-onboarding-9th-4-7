import { useQuery } from "@tanstack/react-query";
import { getOrderData } from "../api/apis";
import type { IOrderData } from "../type/orderDataType";

interface Props {
  time: string;
}

const useOrderDataFetch = ({ time }: Props) => {
  return useQuery(["orderData"], getOrderData, {
    retry: 0,
    refetchInterval: 5000,
    refetchIntervalInBackground: true,
    select: (data) => {
      const orderData = data.data?.filter((el: IOrderData) => {
        return el.transaction_time.includes(time);
      });
      return orderData;
    },
  });
};
export default useOrderDataFetch;
