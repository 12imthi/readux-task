import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductCard = ({ product, onIncrease, onDecrease }) => {
  return (
    <div className="col-12 mb-4" style={{ display: "flex" }}>
      <div
        className="card border-0 shadow-sm col-12"
        style={{ display: "flex" }}
      >
        <div className="col-4">
          <img
            src={product.thumbnail}
            className="card-img-top"
            alt={product.title}
            style={{ height: "200px", objectFit: "cover" }}
          />
        </div>
        <div className="card-body d-flex col-6">
          <div className="col-10">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">Price: ${product.price}</p>
            <p className="card-text">Stock: {product.stock}</p>
            <p className="card-text">Quantity: {product.quantity}</p>
          </div>
          <div className="d-flex align-items-center mb-2 justify-content-start">
            <button
              className="btn btn-primary m-2"
              onClick={() => onDecrease(product.id)}
            >
              -
            </button>
            <button
              className="btn btn-primary ml-2"
              onClick={() => onIncrease(product.id)}
            >
              +
            </button>
          </div>
        </div>
        <div className="col-2">
          <p className="card-text mt-2 font-weight-bold">
            Total: ${product.price * product.quantity}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
