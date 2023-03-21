import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getList } from "../api";
import type { IList } from "../types";

export const useNameMutation = (formValue: string) => {
  const queryClient = useQueryClient();
  return useMutation(getList, {
    onSuccess: (prev) => {
      const newData = {
        ...prev,
        data: prev.data.filter((list: IList) =>
          list.customer_name.includes(formValue),
        ),
      };
      queryClient.setQueryData(["listData"], newData);
    },
  });
};
