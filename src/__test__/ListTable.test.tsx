import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, renderHook, screen, waitFor } from "@testing-library/react";
import type { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import { useListData } from "../hooks/useListData";
import Home from "../pages/Home";

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>{children}</BrowserRouter>
  </QueryClientProvider>
);

describe("something truthy and falsy", async () => {
  it("is useListData custom hook worked", async () => {
    const { result } = renderHook(() => useListData(), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
  });

  it("is listTable rendered?", async () => {
    render(<Home />, { wrapper: wrapper });

    const search = screen.getByTestId("SearchIcon");
    const checkBoxes = screen.getAllByTestId("CheckBoxOutlineBlankIcon");
    const arrows = screen.getAllByTestId("ArrowDownwardIcon");

    await waitFor(() => {
      expect(search).toBeInTheDocument();
      checkBoxes.forEach((checkBox) => expect(checkBox).toBeInTheDocument());
      arrows.forEach((arrow) => expect(arrow).toBeInTheDocument());
    });
  });

  /* it("is useSearchParams worked", async () => {
    vi.mock("react-router-dom", async () => {
      const actual: object = await vi.importActual("react-router-dom");
      return {
        ...actual,
        useSearchParams: () => [new URLSearchParams({ order : 'asc'})],
      };
    });

    const { result } = renderHook(() => useListData(), { wrapper });
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    render(<ListTable data={result.current.data} />, { wrapper: wrapper });
    const ascCell = screen.getAllByTestId("tableCell");
    console.log(ascCell);
  }); */
});
