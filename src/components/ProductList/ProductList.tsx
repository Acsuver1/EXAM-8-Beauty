

import React from 'react';
import { Product } from '../../api/makeupApi';
import ProductCard from '../ProductCard/ProductCard';

interface ProductListProps {
  products: Product[];
  setLikedItems: React.Dispatch<React.SetStateAction<Product[]>>; 
}


const ProductList: React.FC<ProductListProps> = ({ products, }) => {
  const displayedProducts = products.slice(123,127); 

  return (
    <div className="container mx-auto px-4 py-8">
      {displayedProducts.length === 0 ? (
        <p className="text-center text-gray-600">No products found.</p>
      ) : (
       <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
            <ProductCard 
              product={product} 
              key={product.id}
            /> 
          ))}
        </div>

        
       </>
      )}
    </div>
  );
};

export default ProductList;
