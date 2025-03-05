import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store/store";
import { useEffect } from "react";
import { fetchProducts } from "../../../../redux/productsSlice";
import { addToCard } from "../../../../redux/addToCartSlice";
import { Link } from "react-router-dom";
const Products = () => {
  const dispatch = useDispatch<AppDispatch>();

  const products = useSelector((state: RootState) => state.products.data);
  console.log("Products111111", products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const addProductsToCart = (product) => {
    console.log("product", product);

    dispatch(addToCard(product));
  };

  return (
    <div className="products-page">
      <div className="row">
        {products.map((product, index) => (
          <div className="col-lg-3 my-3" key={index}>
         
            <div className="card" style={{ width: "18rem" }} >
              <img src={product.image} />
              <div className="card-body">
                <h2>{product.name}</h2>
                <p className="card-text">{product.detail}</p>
              </div>
              <Link to={`/products/${product.id}`}>
              <button
                className="btn btn-primary"
                onClick={() => addProductsToCart(product)}
              >
               View Details
              </button>
              </Link>
            </div>
            
        
          </div>
        ))}
      </div>
    </div>
  );
};
export default Products;
