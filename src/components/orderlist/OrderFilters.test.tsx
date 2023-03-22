import { fireEvent, render, screen } from "@testing-library/react";
import type { IOrderFiltersProps } from "./OrderFilters";
import OrderFilters from "./OrderFilters";

function renderOrderFilters(props?: Partial<IOrderFiltersProps>) {
  const status = "";
  const customer_name = "";
  const updateStatus = jest.fn();
  const updateCustomerName = jest.fn();

  render(
    <OrderFilters
      status={status}
      customer_name={customer_name}
      updateStatus={updateStatus}
      updateCustomerName={updateCustomerName}
      {...props}
    />,
  );

  const orderStatusText = screen.getByText(/주문처리상태 :/i);

  const select = screen.getByTestId("test-select");
  const input = screen.getByTestId("test-input");

  function changeSelect(val: string) {
    fireEvent.change(select, { target: { value: val } });
  }

  function changeInput(name: string) {
    fireEvent.change(input, { target: { value: name } });
  }

  return {
    updateStatus,
    updateCustomerName,
    orderStatusText,
    select,
    input,
    changeSelect,
    changeInput,
  };
}

describe("OrderFilters", () => {
  it("OrderList renders", () => {
    const { orderStatusText, select, input } = renderOrderFilters();

    expect(orderStatusText).toBeInTheDocument();
    expect(select).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it("status change event", () => {
    const { updateStatus, changeSelect } = renderOrderFilters();

    changeSelect("true");
    expect(updateStatus).toHaveBeenCalledTimes(1);
    expect(updateStatus).toHaveBeenCalledWith("true");

    changeSelect("false");
    expect(updateStatus).toHaveBeenCalledTimes(2);
    expect(updateStatus).toHaveBeenCalledWith("false");

    changeSelect("");
    expect(updateStatus).toHaveBeenCalledTimes(3);
    expect(updateStatus).toHaveBeenCalledWith("");
  });

  it("customer name change event", () => {
    const { updateCustomerName, changeInput } = renderOrderFilters();

    changeInput("customer name");
    expect(updateCustomerName).toHaveBeenCalledTimes(1);
    expect(updateCustomerName).toHaveBeenCalledWith("customer name");
  });
});
