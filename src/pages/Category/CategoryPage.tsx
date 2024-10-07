import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductsByCategoryQuery } from '../../api/makeupApi';
import ProductList from '../../components/ProductList/ProductList';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  const { data: products, error, isLoading } = useGetProductsByCategoryQuery({
    brand: 'covergirl', 
    product_type: category || 'lipstick',
  });

 
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
      </div>
    );
  }

  
  if (error) {
    return <div className="text-center text-red-500">Error loading products: {error.message || "Please try again later."}</div>;
  }

  
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 capitalize">
        {category}
      </h2>

      <ProductList products={products} />
    </div>
  );
};

export default CategoryPage;
