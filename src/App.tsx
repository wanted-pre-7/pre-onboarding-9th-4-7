import { RouterProvider } from "react-router-dom";
import Router from "./Router";
import "./style/style.scss";

const App = () => {
  return <RouterProvider router={Router} />;
};

export default App;
