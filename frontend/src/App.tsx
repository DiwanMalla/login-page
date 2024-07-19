import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/home";
import RouterLayout from "./Component/Router/RouterLayout";
import SignUpHome from "./Component/SignUp/SignUpHome";
import ForgotPassword from "./Component/forgot/ForgotPassword";
import SignInHome from "./Component/SignIn/home";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RouterLayout />,
      children: [
        { path: "/", element: <SignInHome /> },
        { path: "/signup", element: <SignUpHome /> },
        { path: "/forgotpassword", element: <ForgotPassword /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
