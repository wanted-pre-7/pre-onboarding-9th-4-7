import { useQuery } from "@tanstack/react-query";
import type { IOrder } from "../../types/order";
import client from "../axios";

const ReadOrderList = () => {
  return useQuery<IOrder[]>(
    ["orderList"],
    async () => {
      const response = await client.get("");
      return response.data;
    },
    {
      select: (data) => {
        const filterData = data.filter(
          (item) => item.transaction_time.split(" ")[0] === "2023-03-08",
        );
        return filterData;
      },
    },
  );
};

const OrderService = { ReadOrderList };

export default OrderService;
