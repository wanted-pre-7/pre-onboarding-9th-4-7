import GlobalStyles from "@mui/material/GlobalStyles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import App from "./App";
import { router } from "./Router";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <GlobalStyles
      styles={{ body: { backgroundColor: "rgba(59,70,85,0.1)" } }}
    />
    <App />
    <ReactQueryDevtools />
  </QueryClientProvider>,
);
