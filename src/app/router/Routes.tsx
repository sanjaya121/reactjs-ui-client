import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/routes/home/Home";
import Login from "../../components/auth/login/Login";

const router = createBrowserRouter([
  {
    path: "",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
