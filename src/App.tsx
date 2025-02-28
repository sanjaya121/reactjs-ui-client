import { Outlet } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/login/Login";

function App() {
  return (
    <div className="cointainer">
     <Outlet/>
    </div>
  );
}

export default App;
