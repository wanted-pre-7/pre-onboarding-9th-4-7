import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Main from "../pages/Main";

describe("<Main/>", () => {
  it("should rendering with initial UI", async () => {
    setup();
    const title = screen.getByText("주문내역 관리");
    const searchInput = await screen.findByPlaceholderText("고객명");
    const searchButton = await screen.findByText("검색");
    const timeStamp = screen.getByText("0초 전 업데이트");
    const searchResultText = screen.getByText("2023-03-08 검색 결과");
    const table = screen.getByRole("table");

    expect(
      title &&
        searchInput &&
        searchButton &&
        timeStamp &&
        searchResultText &&
        table,
    ).toBeInTheDocument;
  });

  it("outputs the text that includes the name you have searched for", async () => {
    setup();
    const searchInput = await screen.findByPlaceholderText("고객명");
    const searchButton = screen.getByRole("button", { name: /검색/i });
    const searchResultText = screen.getByText("2023-03-08 검색 결과");
    expect(searchResultText).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: "john" } });
    fireEvent.click(searchButton);
    expect(screen.getByText(/john/i)).toBeInTheDocument();
  });
});

function setup() {
  const queryClient = new QueryClient();
  render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </QueryClientProvider>,
  );
}
