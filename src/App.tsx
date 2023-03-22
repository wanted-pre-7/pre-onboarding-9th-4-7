import { Global } from "@emotion/react";
import { RouterProvider } from "react-router-dom";
import reset from "./components/common/reset";
import router from "./Router";

const App = () => {
  return (
    <>
      <Global styles={reset} />
      <RouterProvider router={router} />
    </>
  );
};
export default App;
