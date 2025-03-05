import { useEffect } from "react";
import "./product-details.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { ProductDetails } from "../../../../../models/productDetails";
const ProductsDetails = () => {
  const products = useSelector((state: RootState) => state.products.data);
  const { id } = useParams();

  const [details, setDetails] = useState<ProductDetails>();
  const [quantity,setQuantity]=useState(1)

  useEffect(() => {
    const productDetails = products.filter((product) => product.id == id);

    if (productDetails.length > 0) {
      setDetails(productDetails[0]);
    } else {
      window.location.href = "/";
    }
    // console.log("Intersection",arr3.filter((value)=>arr4.includes(value)))
  }, []);

  return (
    console.log("products", details),
    (
     <div className="products-details">
        <div className="row">
          <div className="col-lg-6">kleft</div>
          <div className="col-lg-6">right</div>
        </div>
     </div>
    )
  );
};

export default ProductsDetails;
