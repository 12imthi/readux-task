import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, updateTotals } from "../feature/ProductSlice";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from './ProductCard'; // Import the new ProductCard component

const ProductDisplay = () => {
  const products = useSelector((state) => state.products.data);
  const totalQuantity = useSelector((state) => state.products.totalQuantity);
  const totalAmount = useSelector((state) => state.products.totalAmount);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTotals());
  }, [products, dispatch]);

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  return (
    <div className="container">
      <div className="sticky-top bg-white p-3 shadow-sm totals-bar">
        <h5>Total Quantity: {totalQuantity}</h5>
        <h5>Total Amount: ${totalAmount}</h5>
      </div>
      <div className="row mt-5">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
