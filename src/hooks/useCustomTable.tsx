import { useMemo } from "react";
import type { Column } from "react-table";
import { usePagination, useTable } from "react-table";
import type { IOrder } from "../types/order";

interface IProps {
  orders?: IOrder[];
  pageIndex: number;
  pageSize: number;
}

const useCustomTable = ({ orders, pageIndex, pageSize }: IProps) => {
  const columns = useMemo<readonly Column<IOrder>[]>(
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
        Cell: ({ value }: { value: boolean }) => (
          <span>{value ? "처리완료" : "처리중"} </span>
        ),
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
    return [...orders].slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
  }, [orders, pageIndex]);

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
