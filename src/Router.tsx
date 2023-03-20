import { createBrowserRouter, Navigate } from "react-router-dom";
import OrderAdmin from "./pages/OrderAdmin";

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/admin",
        element: <OrderAdmin />,
      },
      {
        path: "/:id",
        element: <OrderAdmin />,
      },
      {
        path: "*",
        element: <Navigate to="/admin" replace />,
      },
    ],
  },
]);

export default router;
