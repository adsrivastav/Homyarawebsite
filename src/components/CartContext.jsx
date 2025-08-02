// CartContext.js
import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [popupMessage, setPopupMessage] = useState('');

  const addToCart = (item) => {
    console.log("Adding item:", item);
    setCartItems((prev) => [...prev, item]);
    setPopupMessage('Item added to cart!');
    setTimeout(() => {
    setPopupMessage('');
  }, 2000); // 2000 ms = 2 seconds

    
  };
  

  const removeFromCart = (index) => {
    const newItems = [...cartItems];
    newItems.splice(index, 1);
    setCartItems(newItems);
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart,popupMessage}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

