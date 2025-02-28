import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/routes/home/Home";
import Login from "../../components/auth/login/Login";
import SignUp from "../../components/auth/signup/SignUp";

const router = createBrowserRouter([
  {
    path: "",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

export default router;
