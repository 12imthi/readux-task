import React from 'react';

const Card = ({ product }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <img src={product} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
              <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
            </div>
            <small className="text-muted">${product.price}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
