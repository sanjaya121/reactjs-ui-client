import { useEffect } from "react";
import ProductCatalog from "./products/ProductCatalog";

const Home = () => {
  useEffect(() => {
    document.title = "Saanbi Estore:: Home";
  });

  return (
    <div className="home-componenet container">
      <ProductCatalog></ProductCatalog>
    </div>
  );
};
export default Home;
