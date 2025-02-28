import { Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./app/router/Routes";


function App() {
  return (
    <div className="cointainer">
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
