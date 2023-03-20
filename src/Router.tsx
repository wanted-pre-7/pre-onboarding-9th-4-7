import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import OrderList from "./pages/OrderList";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Navigate to="/orderlist" replace />,
      },
      {
        path: "/orderlist",
        element: <OrderList />,
      },
      {
        path: "*",
        element: <Navigate to="/orderlist" replace />,
      },
    ],
  },
]);

export default Router;
