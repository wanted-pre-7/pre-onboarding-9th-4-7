import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

export function renderWithRouterMatch(
  ui: JSX.Element,
  { path = "/", route = "/" } = {},
) {
  return {
    ...render(
      <QueryClientProvider client={new QueryClient()}>
        <MemoryRouter initialEntries={[route]}>
          <Routes>
            <Route path={path} element={ui} />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>,
    ),
  };
}
