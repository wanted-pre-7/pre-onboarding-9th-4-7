import React, { useMemo } from "react";
import { usePagination, useTable } from "react-table";
import OrderService from "../api/service/order";
import useCustomTable from "../hooks/useCustomTable";
import type { IOrder } from "../types/order";

const Table = () => {
  const { data: orders } = OrderService.ReadOrderList();

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useCustomTable({ orders });

  return (
    <table {...getTableProps()}>
      <thead>
        {React.Children.toArray(
          headerGroups.map((headerGroup, idx) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, idx) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          )),
        )}
      </thead>
      <tbody {...getTableBodyProps()}>
        {React.Children.toArray(
          rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          }),
        )}
      </tbody>
    </table>
  );
};

export default Table;
