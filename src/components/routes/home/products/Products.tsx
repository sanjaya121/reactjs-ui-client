import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store/store";
import { useEffect } from "react";
import { fetchProducts } from "../../../../redux/productsSlice";

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();

  const products = useSelector((state: RootState) => state.products.data);
  console.log("Products111111", products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="products-page">
      <div className="row">
      {products.map((product, index) => (
        <div className="col-lg-4 my-3">
          <div className="card" key={index} style={{ width: "18rem" }}>
            <img src={product.image} />
            <div className="card-body">
              <h2>{product.name}</h2>
              <p className="card-text">{product.detail}</p>
            </div>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      ))}
      </div>
     
    </div>
  );
};
export default Products;
