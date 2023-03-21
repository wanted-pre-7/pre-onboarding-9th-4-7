import type { Router as RemixRouter } from "@remix-run/router/dist/router";
import { Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Spinner from "./components/Spinner";
import Home from "./pages/Home";

export const router: RemixRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Spinner />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/*",
    element: <Navigate to="/" />,
  },
]);
