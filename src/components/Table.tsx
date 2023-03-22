import React, { useMemo, useState } from "react";
import OrderService from "../api/service/order";
import useCustomTable from "../hooks/useCustomTable";
import PageBtns from "./PageBtns";

const Table = () => {
  const { data: orders } = OrderService.ReadOrderList();
  const [pageIndex, setPageIndex] = useState(0);

  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
    useCustomTable({ orders, pageIndex, pageSize: 50 });

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {React.Children.toArray(
            headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
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
      <PageBtns
        orders={orders}
        setPageIndex={setPageIndex}
        pageIdx={pageIndex}
      />
    </>
  );
};

export default Table;
