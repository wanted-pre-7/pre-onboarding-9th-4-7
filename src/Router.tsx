import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Main from "./pages/Main";

const Router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Main />} />),
);

export default Router;
