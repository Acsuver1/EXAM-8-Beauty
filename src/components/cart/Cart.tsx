import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../../store/cartSlice';
import { RootState } from '../../store'; // Adjust this import based on your file structure

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  
  // Accessing the cart state from the Redux store
  const cartItems = useSelector((state: RootState) => state.cart);

  if (!cartItems || !Array.isArray(cartItems)) {
    console.error('Cart items state is invalid:', cartItems);
    return <div>Error: Cart items are not in the expected format</div>;
  }

  // Handle item removal from the cart
  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  // Handle clearing the entire cart
  const handleClearCart = () => {
    dispatch(clearCart());  
  };

  // Calculate the total price of the items in the cart
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + Number(item.price), 0).toFixed(2);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl p-4 font-bold mb-4 text-center text-pink-600">Cart</h2>
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-700">Your cart is empty!</div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 relative transform hover:scale-105"
              >
                <img
                  src={item.image_link}
                  alt={item.name}
                  className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 hover:text-pink-600 transition">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-pink-600 font-bold text-xl">
                    {item.price_sign}{item.price}
                  </p>
                  <button
                    className="mt-4 inline-block bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-8">
            <button
              className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
            <p className="text-lg font-bold text-pink-600">Total: {calculateTotal()}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
