import { fireEvent, render, screen } from "@testing-library/react";
import Pagination from "./Pagination";

function renderPagination(total: number, page: string) {
  const setPage = jest.fn();

  render(<Pagination total={total} page={page} setPage={setPage} />);

  const first_button = screen.getByTestId("test-first-button");
  const left_button = screen.getByTestId("test-left-button");
  const right_button = screen.getByTestId("test-right-button");
  const last_button = screen.getByTestId("test-last-button");

  return {
    setPage,
    first_button,
    left_button,
    right_button,
    last_button,
  };
}

describe("Pagination", () => {
  it("Pagination renders", () => {
    const { setPage, first_button, left_button, right_button, last_button } =
      renderPagination(267, "1");

    const number1_button = screen.getByText(/1/i);
    const number2_button = screen.getByText(/2/i);
    const number3_button = screen.getByText(/3/i);
    const number4_button = screen.getByText(/4/i);
    const number5_button = screen.getByText(/5/i);

    expect(first_button).toBeInTheDocument();
    expect(left_button).toBeInTheDocument();
    expect(right_button).toBeInTheDocument();
    expect(last_button).toBeInTheDocument();
    expect(number1_button).toBeInTheDocument();
    expect(number2_button).toBeInTheDocument();
    expect(number3_button).toBeInTheDocument();
    expect(number4_button).toBeInTheDocument();
    expect(number5_button).toBeInTheDocument();

    fireEvent.click(right_button);
    expect(setPage).toHaveBeenCalledTimes(1);
    expect(setPage).toHaveBeenCalledWith("1");

    fireEvent.click(number1_button);
    expect(setPage).toHaveBeenCalledTimes(2);
    expect(setPage).toHaveBeenCalledWith("0");

    fireEvent.click(number2_button);
    expect(setPage).toHaveBeenCalledTimes(3);
    expect(setPage).toHaveBeenCalledWith("1");

    fireEvent.click(number3_button);
    expect(setPage).toHaveBeenCalledTimes(4);
    expect(setPage).toHaveBeenCalledWith("2");

    fireEvent.click(number4_button);
    expect(setPage).toHaveBeenCalledTimes(5);
    expect(setPage).toHaveBeenCalledWith("3");

    fireEvent.click(number5_button);
    expect(setPage).toHaveBeenCalledTimes(6);
    expect(setPage).toHaveBeenCalledWith("4");

    fireEvent.click(last_button);
    expect(setPage).toHaveBeenCalledTimes(7);
    expect(setPage).toHaveBeenCalledWith("5");
  });

  it("click on page 1 of 6", () => {
    const { setPage, first_button, left_button } = renderPagination(267, "1");

    expect(first_button).toBeDisabled();
    fireEvent.click(first_button);
    expect(setPage).toHaveBeenCalledTimes(0);

    expect(left_button).toBeDisabled();
    fireEvent.click(left_button);
    expect(setPage).toHaveBeenCalledTimes(0);
  });

  it("click on page 6 of 6", () => {
    const { setPage, first_button, left_button, right_button, last_button } =
      renderPagination(267, "6");

    expect(right_button).toBeDisabled();
    fireEvent.click(right_button);
    expect(setPage).toHaveBeenCalledTimes(0);

    expect(last_button).toBeDisabled();
    fireEvent.click(last_button);
    expect(setPage).toHaveBeenCalledTimes(0);

    fireEvent.click(first_button);
    expect(setPage).toHaveBeenCalledTimes(1);
    expect(setPage).toHaveBeenCalledWith("0");

    fireEvent.click(left_button);
    expect(setPage).toHaveBeenCalledTimes(2);
    expect(setPage).toHaveBeenCalledWith("4");
  });

  it("click on page 1 of 6", () => {
    const { setPage, first_button, left_button } = renderPagination(267, "1");

    expect(first_button).toBeDisabled();
    fireEvent.click(first_button);
    expect(setPage).toHaveBeenCalledTimes(0);

    expect(left_button).toBeDisabled();
    fireEvent.click(left_button);
    expect(setPage).toHaveBeenCalledTimes(0);
  });

  it("click on page 20 of 6", () => {
    const { setPage, first_button, left_button, right_button, last_button } =
      renderPagination(267, "20");

    expect(first_button).toBeDisabled();
    fireEvent.click(first_button);
    expect(setPage).toHaveBeenCalledTimes(0);

    expect(left_button).toBeDisabled();
    fireEvent.click(left_button);
    expect(setPage).toHaveBeenCalledTimes(0);

    fireEvent.click(right_button);
    expect(setPage).toHaveBeenCalledTimes(1);
    expect(setPage).toHaveBeenCalledWith("1");

    fireEvent.click(last_button);
    expect(setPage).toHaveBeenCalledTimes(2);
    expect(setPage).toHaveBeenCalledWith("0");
  });

  it("click on page 3 of 3", () => {
    const { setPage, first_button, left_button, right_button, last_button } =
      renderPagination(140, "3");

    expect(first_button).toBeDisabled();
    fireEvent.click(first_button);
    expect(setPage).toHaveBeenCalledTimes(0);

    fireEvent.click(left_button);
    expect(setPage).toHaveBeenCalledTimes(1);
    expect(setPage).toHaveBeenCalledWith("1");

    expect(right_button).toBeDisabled();
    fireEvent.click(right_button);
    expect(setPage).toHaveBeenCalledTimes(1);

    expect(last_button).toBeDisabled();
    fireEvent.click(last_button);
    expect(setPage).toHaveBeenCalledTimes(1);
  });
});
