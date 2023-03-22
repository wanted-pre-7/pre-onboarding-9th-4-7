import { useMemo } from "react";
import { usePagination, useTable } from "react-table";
import type { IColumn, IOrder } from "../types/order";

interface IProps {
  orders?: IOrder[];
}

const useCustomTable = ({ orders }: IProps) => {
  const columns = useMemo<IColumn[]>(
    () => [
      {
        Header: "주문번호",
        accessor: "id",
      },
      {
        Header: "거래시간",
        accessor: "transaction_time",
      },
      {
        Header: "주문처리상태",
        accessor: "status",
        Cell: ({ value }: { value: boolean }) =>
          value ? "처리완료" : "처리중",
      },
      {
        Header: "고객번호",
        accessor: "customer_id",
      },
      {
        Header: "고객이름",
        accessor: "customer_name",
      },
      {
        Header: "가격",
        accessor: "currency",
      },
    ],
    [],
  );

  const data = useMemo<IOrder[]>(() => {
    if (!orders) return [];
    return orders;
  }, [orders]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    usePagination,
  );
  return tableInstance;
};

export default useCustomTable;
