import { useQuery } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import { useMemo } from "react";
import getData from "../api";
import type { Data } from "../types";
import useSearchParameters from "./useSearchParameters";

const useData = (today: string, dataPerPage: number) => {
  const { page, status, sort, customer } = useSearchParameters();
  const query = useQuery<AxiosResponse<Data[]>, Error>(["data"], getData, {
    refetchOnWindowFocus: false,
    refetchInterval: 5000,
  });

  const data = useMemo(
    () =>
      query.data?.data
        .filter((el) => el.transaction_time.substring(0, 10) === today)
        .filter((el) => {
          if (status === "완료") return el.status;
          if (status === "미완료") return !el.status;
          return el;
        })
        .sort((a, b) => {
          if (sort === "주문번호") return b.id - a.id;
          if (sort === "거래시간")
            return (
              new Date(b.transaction_time).getTime() -
              new Date(a.transaction_time).getTime()
            );
          return a.id - b.id;
        })
        .filter((el) => {
          if (customer)
            return el.customer_name
              .toLowerCase()
              .includes(customer?.toLowerCase());
          return el;
        }),
    [query],
  );

  const firstIdx = dataPerPage * (Number(page) - 1);
  const lastIdx = firstIdx + dataPerPage;
  const currentPageData = useMemo(() => data?.slice(firstIdx, lastIdx), [data]);

  return { query, data, currentPageData };
};
export default useData;
