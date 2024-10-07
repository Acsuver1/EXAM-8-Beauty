// src/components/ProductCard.tsx
import React from 'react';
import { Product } from '../../api/makeupApi';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 relative">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image_link}
          alt={product.name}
          className="w-full h-56 object-cover"
        />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 hover:text-pink-600 transition">
          {product.name}
        </h3>
        <p className="mt-2 text-pink-600 font-bold text-xl">
          {product.price_sign}{product.price}
        </p>

        

        <Link
          to={`/product/${product.id}`}
          className="mt-4 inline-block bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
