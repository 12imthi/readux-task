import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductCard = ({ product, onIncrease, onDecrease }) => {
  return (
    <div className="col-6 mb-4" style={{display: 'flex',}}>
      <div className="card border-0 shadow-sm col-12" style={{display: 'flex !important',}}>
        <div >
          <img
            src={product.thumbnail}
            className="card-img-top"
            alt={product.title}
            style={{ height: "200px", objectFit: "cover" }}
          />
        </div>
        <div className="card-body" >
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">Price: ${product.price}</p>
          <p className="card-text">Stock: {product.stock}</p>
          <p className="card-text">Quantity: {product.quantity}</p>
          <div className="d-flex align-items-center mb-2">
            <button
              className="btn btn-primary"
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
        <div >
          {" "}
          <p className="card-text mt-2 font-weight-bold">
            Total: ${product.price * product.quantity}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
