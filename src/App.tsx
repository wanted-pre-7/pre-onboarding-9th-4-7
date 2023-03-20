import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminMain from "./page/AdminMain";

const router = createBrowserRouter([{ path: "/", element: <AdminMain /> }]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
