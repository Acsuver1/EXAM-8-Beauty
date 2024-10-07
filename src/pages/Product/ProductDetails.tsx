// src/pages/Product/ProductDetails.tsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../api/makeupApi';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, error, isLoading } = useGetProductByIdQuery(Number(id));
  const dispatch = useDispatch();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
      </div>
    );
  }

  if (error || !product) {
    return <div className="text-center text-red-500">Error loading product.</div>;
  }
const handleAddToCart = () => {
  const cartItem = {
    id: product.id,
    name: product.name,
    price: parseFloat(product.price), 
    image: product.image_link,
    quantity: 1,
  };

  dispatch(addToCart(cartItem));

  const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
  savedCart.push(cartItem);
  localStorage.setItem('cart', JSON.stringify(savedCart));

 
};

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
      
      <div className="md:w-1/2 flex justify-center">
        <img
          src={product.image_link}
          alt={product.name}
          className="w-80 h-90 rounded-lg shadow-md object-contain"
        />
      </div>

     
      <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
        <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
        <p className="mt-4 text-pink-600 text-2xl font-semibold">
          {product.price_sign}{product.price}
        </p>
        <p className="mt-6 text-gray-700">{product.description}</p>

        
        <div className="mt-6">
          <p><span className="font-semibold">Brand:</span> {product.brand || 'N/A'}</p>
          <p><span className="font-semibold">Category:</span> {product.category || 'N/A'}</p>
          <p><span className="font-semibold">Rating:</span> {product.rating || 'N/A'}</p>
        </div>

       
        <div className="mt-8 flex space-x-4">
          <a
            href={product.product_link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 text-white px-6 py-3 rounded hover:bg-pink-700 transition flex items-center"
          >
            <ShoppingCartIcon className="h-5 w-5 mr-2" />
            Buy Now
          </a>  
          <button 
            className="border border-pink-600 text-pink-600 px-6 py-3 rounded hover:bg-pink-600 hover:text-white transition" 
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
  