import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../pages/Card';

const ProductDisplay = () => {
  const { data, status, error } = useSelector(state => state.prodReducer);

  if (status === 'Loading') {
    return <p>Loading...</p>;
  }

  if (status === 'Failure') {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        {data.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
