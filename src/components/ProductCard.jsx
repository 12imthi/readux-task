import React from "react";


const ProductCard = ({ product, onIncrease, onDecrease }) => {
  return (
    <div className="col-12 mb-4" style={{ display: "flex" }}>
      <div
        className="card border-0 shadow-sm col-12"
        style={{ display: "flex", background: '#f8f9fa', borderRadius: '10px' }}
      >
        <div className="col-4 p-3" style={{ background: '#007bff', borderRadius: '10px 0 0 10px' }}>
          <img
            src={product.thumbnail}
            className="card-img-top"
            alt={product.title}
            style={{ height: "200px", objectFit: "cover", borderRadius: '10px 0 0 10px' }}
          />
        </div>
        <div className="card-body d-flex col-6" style={{ background: '#e9ecef' }}>
          <div className="col-10">
            <h5 className="card-title" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', color: '#343a40' }}>
              {product.title}
            </h5>
            <p className="card-text" style={{ fontFamily: 'Arial, sans-serif', color: '#6c757d' }}>
              {product.description}
            </p>
            <p className="card-text" style={{ fontFamily: 'Arial, sans-serif', color: '#007bff' }}>
              Price: ${product.price}
            </p>
            <p className="card-text" style={{ fontFamily: 'Arial, sans-serif', color: '#28a745' }}>
              Stock: {product.stock}
            </p>
            <p className="card-text" style={{ fontFamily: 'Arial, sans-serif', color: '#dc3545' }}>
              Quantity: {product.quantity}
            </p>
          </div>
          <div className="d-flex align-items-center mb-2 justify-content-start">
            <button
              className="btn btn-danger m-2"
              onClick={() => onDecrease(product.id)}
            >
              -
            </button>
            <button
              className="btn btn-success ml-2"
              onClick={() => onIncrease(product.id)}
            >
              +
            </button>
          </div>
        </div>
        <div className="col-2 d-flex align-items-center justify-content-center" style={{ background: '#343a40', borderRadius: '0 10px 10px 0' }}>
          <p className="card-text font-weight-bold" style={{ color: '#f8f9fa', fontFamily: 'Arial, sans-serif',fontWeight: 'bold' }}>
            Total: ${product.price * product.quantity}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
