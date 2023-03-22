import { fireEvent, screen } from "@testing-library/react";
import { renderWithRouterMatch } from "../__test__/util";

import OrderList from "./OrderList";

function renderOrderList(path: string, route: string) {
  renderWithRouterMatch(<OrderList />, {
    path: path,
    route: route,
  });

  const header = screen.getByText(/주문 목록/i);

  //OrderFilter
  const orderStatusText = screen.getByText(/주문처리상태 :/i);

  const orderFilterSelect = screen.getByTestId("test-select");
  const orderFilterInput = screen.getByTestId("test-input");

  function changeFilterSelect(val: string) {
    fireEvent.change(orderFilterSelect, { target: { value: val } });
  }

  function changeFilterInput(name: string) {
    fireEvent.change(orderFilterInput, { target: { value: name } });
  }

  return {
    header,
    orderStatusText,
    orderFilterSelect,
    orderFilterInput,
    changeFilterSelect,
    changeFilterInput,
  };
}

describe("OrderList", () => {
  it("OrderList renders expected search params", () => {
    const { header, orderStatusText, orderFilterSelect, orderFilterInput } =
      renderOrderList("/orderlist", "/orderlist");
    expect(header).toBeInTheDocument();
    expect(orderStatusText).toBeInTheDocument();
    expect(orderFilterSelect).toBeInTheDocument();
    expect(orderFilterInput).toBeInTheDocument();
  });
});
