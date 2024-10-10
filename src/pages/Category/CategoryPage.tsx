import React, { useState, useEffect, ChangeEvent } from 'react';
import { useGetProductsByCategoryQuery } from '../../api/makeupApi';
import { useParams, Link } from 'react-router-dom';
import { Product } from '../../api/makeupApi';
import './Category.css';

const CategoryPage: React.FC = () => {
  const { category: urlCategory } = useParams<{ category: string }>();
  const [category, setCategory] = useState<string>(urlCategory || 'all');
  const [brand, setBrand] = useState<string>('all');
  const [color, setColor] = useState<string>('all');
  const [minPrice, setMinPrice] = useState<number | ''>('');
  const [maxPrice, setMaxPrice] = useState<number | ''>('');
  const [searchQuery, setSearchQuery] = useState<string>(''); 

  useEffect(() => {
    if (urlCategory) {
      setCategory(urlCategory);
    } else {
      setCategory('all');
    }
  }, [urlCategory]);

  const { data, error, isLoading } = useGetProductsByCategoryQuery({
    category: category !== 'all' ? category : '',
    brand: brand !== 'all' ? brand : '',
    product_type: color !== 'all' ? color : '',
  });

  const brands = ['all', 'BY BEAUTY BAY', 'AVENE', 'BEAUTY OF JOSEON', 'SKIN1004'];
  const colors = ['all', 'Red', 'Pink', 'Blue', 'Green', 'Black', 'White'];

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleBrandChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setBrand(e.target.value);
  };

  const handleColorChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setColor(e.target.value);
  };

  const handleMinPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMinPrice(e.target.value ? Number(e.target.value) : '');
  };

  const handleMaxPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(e.target.value ? Number(e.target.value) : '');
  };

  const uniqueProducts = data ? Array.from(new Set(data.map(p => p.id))).map(id => data.find(p => p.id === id)) : [];

  const filteredProducts = uniqueProducts.filter((product = {} as Product): product is Product => {
    const isBrandMatch = brand === 'all' || product.brand === brand;
    const isPriceMatch =
      (minPrice === '' || parseFloat(product.price) >= minPrice) &&
      (maxPrice === '' || parseFloat(product.price) <= maxPrice);
    const isSearchMatch = product.name.toLowerCase().includes(searchQuery.toLowerCase()); 

    return isBrandMatch && isPriceMatch && isSearchMatch;  
  });  

  const displayedProducts = filteredProducts.slice(170, 250); 

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {category === 'all' ? 'All Products' : `${category} Products`}
      </h1>

      <div className="mb-6 flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
        <div className="hidden">
          <label htmlFor="category-select" className="sr-only">
            Category
          </label>
          <select
            id="category-select"
            value={category}
            onChange={handleCategoryChange}
            className="border border-gray-300 p-2 rounded-md"
          >
            <option value="all">All Categories</option>
            <option value="lipstick">Lipstick</option>
            <option value="foundation">Foundation</option>
            <option value="eyeshadow">Eyeshadow</option>
          </select>
        </div>

        <div>
          <label htmlFor="brand-select" className="block text-sm font-medium text-gray-700 mb-1">
            Brand
          </label>
          <select
            id="brand-select"
            value={brand}
            onChange={handleBrandChange}
            className="border border-gray-300 p-2 rounded-md w-full md:w-48"
          >
            {brands.map((b) => (
              <option key={b} value={b}>
                {b === 'all' ? 'All Brands' : b}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="color-select" className="block text-sm font-medium text-gray-700 mb-1">
            Color
          </label>
          <select
            id="color-select"
            value={color}
            onChange={handleColorChange}
            className="border border-gray-300 p-2 rounded-md w-full md:w-48"
          >
            {colors.map((c) => (
              <option key={c} value={c}>
                {c === 'all' ? 'All Colors' : c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="min-price" className="block text-sm font-medium text-gray-700 mb-1">
            Min Price
          </label>
          <input
            type="number"
            id="min-price"
            value={minPrice}
            onChange={handleMinPriceChange}
            className="border border-gray-300 p-2 rounded-md w-full md:w-48"
            placeholder="Min Price"
          />
        </div>

        <div>
          <label htmlFor="max-price" className="block text-sm font-medium text-gray-700 mb-1">
            Max Price
          </label>
          <input
            type="number"
            id="max-price"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            className="border border-gray-300 p-2 rounded-md w-full md:w-48"
            placeholder="Max Price"
          />
        </div>

        {/* Search Input Field */}
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
            Search
          </label>
          <input
            type="text"
            id="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 p-2 rounded-md w-full md:w-48"
            placeholder="Search Products"
          />
        </div>
      </div>

      {isLoading && (
        <div className="text-center">
          <div className="spinner"></div>
          <p className="text-gray-600 mt-2">Loading...</p>
        </div>
      )}
      {error && (
        <div className="text-center text-red-500">
          {('message' in error)
            ? `Error: ${error.message}`
            : 'Error: An unknown error occurred'}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedProducts.length === 0 ? (
          <p className="text-center text-gray-600"></p>
        ) : (
          displayedProducts.map((product: Product) => (
            <div key={product.id} className="border border-gray-300 rounded-lg p-4">
              <Link to={`/product/${product.id}`}>
                <img src={product.image_link} alt={product.name} className="w-full h-48 object-contain mb-4 rounded-md" />
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-600">Price: ${product.price}</p>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
