import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Pagination from "../components/Pagination";

describe("<Pagination/>", () => {
  it("firstPageButton is initially disabled, Click nextButton to activate firstPageButton ", async () => {
    setup();
    const firstPageButton = screen.getByTestId("first-page-button");
    const nextButton = screen.getByTestId("next-button");

    expect(firstPageButton).toBeDisabled();
    fireEvent.click(nextButton);
    expect(firstPageButton).toBeEnabled();
  });

  it("click lastPageButton to disable lastPageButton", async () => {
    setup();
    const lastPageButton = screen.getByTestId("last-page-button");

    expect(lastPageButton).toBeEnabled();
    fireEvent.click(lastPageButton);
    expect(lastPageButton).toBeDisabled();
  });
});

function setup() {
  const queryClient = new QueryClient();
  render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Pagination data={[]} />
      </BrowserRouter>
    </QueryClientProvider>,
  );
}
