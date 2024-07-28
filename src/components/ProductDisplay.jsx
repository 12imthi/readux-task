import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, updateTotals } from "../feature/ProductSlice";
import ProductCard from './ProductCard'; // Import the new ProductCard component

const ProductDisplay = () => {
  const products = useSelector((state) => state.products.data);
  const totalQuantity = useSelector((state) => state.products.totalQuantity);
  const totalAmount = useSelector((state) => state.products.totalAmount);
  const dispatch = useDispatch();

  // console.log("dispatch : ",dispatch);

  useEffect(() => {
    // dispatch(updateTotals());
  }, [products, dispatch]);

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  return (
    <div className="container">
      <div className="sticky-top p-3 shadow-sm totals-bar d-flex flex-column align-items-end" style={{ backgroundColor: '#f8f9fa' }}>
  <div className=" w-100 d-flex justify-content-between " style={{ borderBottom: '2px solid #6c757d' }}>
    <h5 className="mb-0" style={{ color: '#007bff' }}>SUBTOTAL:</h5>
    <h5 className="mb-0" style={{ color: '#007bff' }}>{totalQuantity}</h5>
  </div>
  <div className=" w-100 d-flex justify-content-between">
    <h5 className="mb-0" style={{ color: '#28a745' }}>SHIPPING:</h5>
    <h5 className="mb-0" style={{ color: '#28a745' }}>Free</h5>
  </div>
  <div className="w-100 d-flex justify-content-between font-weight-bold" style={{ borderTop: '2px solid #6c757d', paddingTop: '10px' }}>
    <h5 className="mb-0" style={{ color: '#dc3545' }}>TOTAL:</h5>
    <h5 className="mb-0" style={{ color: '#dc3545' }}>${totalAmount.toFixed(2)}</h5>
  </div>
</div>

      <div className="row mt-4">
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
