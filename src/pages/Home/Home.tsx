import React, { useState, useRef } from 'react'; 
import { useGetAllProductsQuery } from '../../api/makeupApi';
import intro from '../../assets/liv.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons'; 
import Cards from '../../components/cards/Cards';
import Section from '../../components/section/Section';
import Banner from '../../components/banner/Banner';
import ProductCard from '../../components/ProductCard/ProductCard'; 
import "./Home.css"

const Home: React.FC = () => {
  const { data: products, error, isLoading } = useGetAllProductsQuery();
  const [isMuted, setIsMuted] = useState(true); 
  const videoRef = useRef<HTMLVideoElement>(null); 

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted; 
      setIsMuted(!isMuted); 
    }
  };

  if (error) {
    return <div className="text-center text-red-500">Error loading products.</div>;
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
      </div>
    );
  }

  const featuredProducts = products ? products.slice(123,127) : []; 
  const featuredProduct = products && products.length > 0 ? products[0] : null;

  return (
    <>
      <div>
        <section className="h-screen text-white py-20 relative">
          <video
            ref={videoRef} 
            src={intro}
            autoPlay
            loop
            muted={isMuted} 
            className="w-full h-full object-cover absolute top-0 left-0 z-[-1] video"
            style={{ filter: ' blur(0.5px)' }} 
          ></video>

          <div className="container mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-6xl font-extrabold mb-6 text-pink-300    ">Welcome to BeautyBay Clone</h1>
            <p className="text-lg mb-6 flex flex-col items-center justify-center">
              Discover a wide range of beauty products curated just for you.
            </p>
            <a
              href="#products"
              className="bg-gray-100 text-pink-600 px-6 py-3 rounded-full font-bold hover:bg-pink-600 hover:text-white transition"
            >
              Shop Now
            </a>
          </div>

          <button
            onClick={toggleMute}
            className="absolute bottom-5 right-5 bg-white text-pink-600 p-2 rounded-full font-semibold hover:bg-gray-100 transition flex items-center justify-center"
          >
            <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} className="mr-2" />
            <span className="text-lg font-extrabold">{isMuted ? '' : ''}</span>
          </button>
        </section>

        <section id="products" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-pink-600 mb-8">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </div>
      
      <Cards />
      <Section />

      {featuredProduct && <Banner   featuredProduct={featuredProduct} />}
    </>
  );
};

export default Home;
