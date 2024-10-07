
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Product {
  id: number;
  brand: string;
  name: string;
  price: string;
  price_sign: string | null;
  currency: string | null;
  image_link: string;
  product_link: string;
  website_link: string;
  description: string;
  rating: number | null;
  category: string | null;
  product_type: string;
 
}

export const makeupApi = createApi({
  reducerPath: 'makeupApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://makeup-api.herokuapp.com/api/v1/' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<Product[], void>({
      query: () => 'products.json',
    }),
    getProductsByCategory: builder.query<Product[], { brand: string; product_type: string }>({
      query: ({ brand, product_type }) =>
        `products.json?brand=${brand}&product_type=${product_type}`,
    }),
    getProductById: builder.query<Product, number>({
      query: (id) => `products/${id}.json`,
    }),
  
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductsByCategoryQuery,
  useGetProductByIdQuery,
} = makeupApi;
