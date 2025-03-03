import {
  BrowserRouter,
  Outlet,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import "./App.css";
import router from "./app/router/Routes";
import { useEffect } from "react";
import Navigation from "./components/common/navigation/Navigation";
import Header from "./components/common/header/Header";
import Home from "./components/routes/home/Home";
import NotFound from "./components/routes/not-found/NotFound";

function App() {
  /// sort Array
  const array = [1, 2, 5, 7, 4, 6, 3, 9, 8];
  const stringArray = ["lift", "shift", "gift"];

  //fxn to sort array;
  const SortArray = (array) => {
    console.log("Sort Array", array);
    console.log(array.sort((a, b) => b - a));
  };

  // const findCommonCharacter = (array) => {

  //   for (let i = 0; i < array.length; i++) {

  //   }

  // };

  //find common character;
  const Truthy = () => {
    let a = undefined;
    if (a) {
      console.log("a");
    } else {
      console.log("b");
    }
  };

  useEffect(() => {
    Truthy();
  });

  return (
    <div className="cointainer">
      <div className="header">
        <Header />
      </div>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
