import React from 'react';
import { useGetAllProductsQuery } from '../../api/makeupApi';
import { Product } from '../../api/makeupApi';

const ProductList = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error && 'message' in error) {
    return <div>Error: {error.message}</div>;
  }

  if (error) {
    return <div>Error: An unknown error occurred</div>;
  }

  return (
    <ul>
      {data?.map((product) => (
        <li key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
        </li>
      ))}
    </ul>
  );
};