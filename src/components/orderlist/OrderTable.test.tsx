import { fireEvent, render, screen } from "@testing-library/react";
import type { IOrderTableProps } from "./OrderTable";
import OrderTable from "./OrderTable";

function renderOrderTable(props?: Partial<IOrderTableProps>) {
  const data = [
    {
      id: 1,
      transaction_time: "2023-03-07 17:39:50",
      status: true,
      customer_id: 15,
      customer_name: "Holmes Howard",
      currency: "$5.61",
    },
    {
      id: 2,
      transaction_time: "2023-03-08 06:59:37",
      status: true,
      customer_id: 16,
      customer_name: "Cynthia Terrell",
      currency: "$10.99",
    },
    {
      id: 3,
      transaction_time: "2023-03-08 00:41:58",
      status: true,
      customer_id: 17,
      customer_name: "Ann Barron",
      currency: "$37.87",
    },
  ];
  const sortKey = "";
  const sortDir = "";
  const setSortConfig = jest.fn();

  render(
    <OrderTable
      data={data}
      sortKey={sortKey}
      sortDir={sortDir}
      setSortConfig={setSortConfig}
      {...props}
    />,
  );

  const th_id = screen.getByText(/주문번호/i);
  const th_transaction_time = screen.getByText(/거래일/i);
  const th_status = screen.getByText(/주문처리상태/i);
  const th_customer_id = screen.getByText(/고객번호/i);
  const th_customer_name = screen.getByText(/고객이름/i);
  const th_currency = screen.getByText(/가격/i);

  const id_th = screen.getByTestId("test-id-th");
  const transaction_time_th = screen.getByTestId("test-transaction-time-th");

  const tbodyTrElement = screen
    .getByRole("table")
    .querySelector("tbody")
    ?.querySelectorAll("tr");

  function clickIdTh() {
    fireEvent.click(id_th);
  }

  function clickIdTransactionTimeTh() {
    fireEvent.click(transaction_time_th);
  }

  return {
    setSortConfig,
    th_id,
    th_transaction_time,
    th_status,
    th_customer_id,
    th_customer_name,
    th_currency,
    tbodyTrElement,
    id_th,
    transaction_time_th,
    clickIdTh,
    clickIdTransactionTimeTh,
  };
}

describe("OrderTable", () => {
  it("OrderTable renders", () => {
    const {
      th_id,
      th_transaction_time,
      th_status,
      th_customer_id,
      th_customer_name,
      th_currency,
      tbodyTrElement,
    } = renderOrderTable();

    expect(th_id).toBeInTheDocument();
    expect(th_transaction_time).toBeInTheDocument();
    expect(th_status).toBeInTheDocument();
    expect(th_customer_id).toBeInTheDocument();
    expect(th_customer_name).toBeInTheDocument();
    expect(th_currency).toBeInTheDocument();
    expect(tbodyTrElement?.length).toBe(3);
  });

  it("tr click event", () => {
    const { setSortConfig, clickIdTh, clickIdTransactionTimeTh } =
      renderOrderTable();

    clickIdTh();
    expect(setSortConfig).toHaveBeenCalledTimes(1);
    expect(setSortConfig).toHaveBeenCalledWith("id");

    clickIdTransactionTimeTh();
    expect(setSortConfig).toHaveBeenCalledTimes(2);
    expect(setSortConfig).toHaveBeenCalledWith("transaction_time");
  });
});
