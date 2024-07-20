import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/home";
import RouterLayout from "./Component/Router/RouterLayout";

import ForgotPassword from "./Component/forgot/ForgotPassword";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RouterLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/signup", element: <Home /> },
        { path: "/forgotpassword", element: <ForgotPassword /> },
        { path: "/signin", element: <Home /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
