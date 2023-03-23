import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import mockData from "../../public/mock/data.json";
import Pagination from "../components/Pagination";
import type { Data } from "../types";

describe("<Pagination/>", () => {
  it("PrevButton is initially disabled, Click next-button to activate PrevButton ", async () => {
    setup(mockData);
    const prevButton = screen.getByTestId("prev-button");
    const nextButton = screen.getByTestId("next-button");

    expect(prevButton).toBeDisabled();
    fireEvent.click(nextButton);
    expect(prevButton).toBeEnabled();
  });
  it("PrevPageButton is initially disabled, Click next-page-button to activate PrevPageButton ", async () => {
    setup(mockData);
    const prevPageButton = screen.getByTestId("prev-page-button");
    const nextPageButton = screen.getByTestId("next-page-button");

    expect(prevPageButton).toBeDisabled();
    fireEvent.click(nextPageButton);
    expect(prevPageButton).toBeEnabled();
  });
  it("click prevButton to activate lastPageButton", async () => {
    setup(mockData);
    const nextPageButton = screen.getByTestId("next-page-button");
    const prevButton = screen.getByTestId("prev-button");

    expect(nextPageButton).toBeDisabled();
    fireEvent.click(prevButton);
    expect(nextPageButton).toBeEnabled();
  });
  it("click nextPageButton to disable nextPageButton", async () => {
    setup(mockData);
    const nextPageButton = screen.getByTestId("next-page-button");

    expect(nextPageButton).toBeEnabled();
    fireEvent.click(nextPageButton);
    expect(nextPageButton).toBeDisabled();
  });
});

function setup(data: Data[] = []) {
  const queryClient = new QueryClient();
  render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Pagination data={data} />
      </BrowserRouter>
    </QueryClientProvider>,
  );
}
