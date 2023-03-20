import { useQuery } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import { getList } from "../api";
import type { IList } from "../types";

export const useListData = () => {
  const { data, isLoading } = useQuery(["listData"], getList, {
    // eslint-disable-next-line no-shadow
    select: (data: AxiosResponse<IList[]>) =>
      data.data
        .filter((list) => list.transaction_time.includes("2023-03-08"))
        .sort((a, b) => a.id - b.id),
  });

  return { data, isLoading };
};
