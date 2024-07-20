import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/home";
import RouterLayout from "./Component/Router/RouterLayout";
import { useState } from "react";
import ForgotPassword from "./Component/forgot/ForgotPassword";

const App = () => {
  const [signIn, setSignIn] = useState(true);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RouterLayout />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/signup",
          element: <Home signIn={!signIn} setSignIn={setSignIn} />,
        },
        { path: "/forgotpassword", element: <ForgotPassword /> },
        {
          path: "/signin",
          element: <Home signIn={signIn} setSignIn={setSignIn} />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
