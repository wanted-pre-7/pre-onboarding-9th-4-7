import type { Router as RemixRouter } from "@remix-run/router/dist/router";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./pages/Home";

export const router: RemixRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/*",
    element: <Navigate to="/" />,
  },
]);
