import { useQuery } from "@tanstack/react-query";
import { fetchOrderData } from "../api/apis";
import { DROPDOWN_OPTIONS } from "../components/OrderAdmin/FilterDropdown";
import type { IOrderData } from "../types";
import useGetSearchParams from "./useGetSearchParams";

const TODAY_DATE = "2023-03-08";

const useFetchOrderData = () => {
  const { name, status, sortOption } = useGetSearchParams();

  return useQuery(["orderData"], fetchOrderData, {
    refetchInterval: 5000,
    refetchOnWindowFocus: false,
    select: (data) => {
      const orderData: IOrderData[] = data.data
        ?.filter((v: IOrderData) => v.transaction_time.includes(TODAY_DATE))
        .filter((v: IOrderData) => {
          if (DROPDOWN_OPTIONS.includes(status as string)) {
            return v.status === (status === "True" ? true : false);
          }
          return v;
        })

        .filter((v: IOrderData) => {
          if (name) {
            return v.customer_name
              .toLowerCase()
              .includes(name?.toLowerCase() as string);
          }
          return v;
        });

      return orderData.sort((a, b) => {
        if (sortOption === "id") return b.id - a.id;
        else if (sortOption === "transaction_time") {
          return +new Date(b.transaction_time) - +new Date(a.transaction_time);
        }
        return a.id - b.id;
      });
    },
  });
};

export default useFetchOrderData;
