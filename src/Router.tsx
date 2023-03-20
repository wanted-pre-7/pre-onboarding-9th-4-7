import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import Main from "./pages/Main";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="*" element={<Navigate to="/main" />} />
      <Route path="/main" element={<Main />} />
    </>,
  ),
);

export default Router;
