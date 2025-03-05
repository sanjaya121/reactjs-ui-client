import {
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import Header from "./components/common/header/Header";
import Home from "./components/routes/home/Home";
import NotFound from "./components/routes/not-found/NotFound";
import Cart from "./components/routes/cart/Cart";
import ProductsDetails from "./components/routes/home/products/products-details/ProductsDetails";
import JsPractice from "./components/routes/js-practice/JsPractice";

function App() {
;

  useEffect(() => {

  });

  return (
    <div className="">
      <div className="header">
        <Header />
      </div>
      <div className="main-content container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shopping-cart" element={<Cart/>}></Route>
          <Route path="/js-practice" element={<JsPractice/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
          <Route path="/products/:id" element={<ProductsDetails/>}></Route>
        </Routes>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
