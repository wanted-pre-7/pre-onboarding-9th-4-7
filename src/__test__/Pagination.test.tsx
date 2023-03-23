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
  it("click LastPageButton to disable LastPageButton", async () => {
    setup(mockData);
    const lastPageButton = screen.getByTestId("last-page-button");

    expect(lastPageButton).toBeEnabled();
    fireEvent.click(lastPageButton);
    expect(lastPageButton).toBeDisabled();
  });
  it("click prevButton to activate lastPageButton", async () => {
    setup(mockData);
    const lastPageButton = screen.getByTestId("last-page-button");
    const prevButton = screen.getByTestId("prev-button");

    expect(lastPageButton).toBeDisabled();
    fireEvent.click(prevButton);
    expect(lastPageButton).toBeEnabled();
  });
  it("click FirstPageButton to disable FirstPageButton", async () => {
    setup(mockData);
    const firstPageButton = screen.getByTestId("first-page-button");

    expect(firstPageButton).toBeEnabled();
    fireEvent.click(firstPageButton);
    expect(firstPageButton).toBeDisabled();
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
