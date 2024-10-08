import React from 'react';
import { useGetAllProductsQuery } from '../../api/makeupApi';
import { Link } from 'react-router-dom';
import beautys from "../../assets/beauty.png";
import { Product } from '../../api/makeupApi';


interface BannerProps {
  featuredProduct: Product & { price_sign?: string | null };
}

 

const Banner: React.FC<BannerProps> = ({ featuredProduct }) => {
  const { data: products, error, isLoading } = useGetAllProductsQuery();

  
  if (isLoading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error fetching products</div>;
  }

  if (featuredProduct) {
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl p-4 font-bold mb-4 text-center text-pink-600">Top Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products && products.length > 0 ? (
          products.slice(100, 104).map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 relative transform hover:scale-105"
            >
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image_link}
                  alt={product.name}
                  className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
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
          ))
        ) : (
          <div className="text-center py-8">No products available</div>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-[100px] items-center p-8 max-w-[1600px] mx-auto mt-[100px] rounded-[50px]">
        <div className="flex-1 flex justify-center"> 
          <img 
            src={beautys} 
            alt="Beauty Products" 
            className="w-full h-auto max-w-md rounded-full shadow-md border-4 border-white" 
          />
        </div>
        <div className="flex-1 p-6 text-center text-white">
          <p className="mb-6 text-[20px] leading-relaxed text-gray-500">
            Looking for five-star formulas, minus the price tag? From skincare essentials to makeup must-haves and results-driven haircare, BY BEAUTY BAY has everything you need to discover your next best obsession.
          </p>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-500 transition duration-300 shadow-md">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

}

export default Banner;
