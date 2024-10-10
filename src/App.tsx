import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import ProductDetails from './pages/Product/ProductDetails';
import CategoryPage from './pages/Category/CategoryPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from './components/Spinner/Spinner'; 
import Cart from './components/cart/Cart';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    const fetchData = async () => {
      
      await new Promise((resolve) => setTimeout(resolve, 2000)); 
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {loading ? ( 
          <Spinner />
        ) : (
          <>
            <Header />
            <ToastContainer />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/category" element={<CategoryPage />} />
                <Route path="/category/:category" element={<CategoryPage />} />
                <Route path="*" element={<div>Page not found</div>} />
                <Route path='/cart' element ={<Cart/>} />
              </Routes>
            </main>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
