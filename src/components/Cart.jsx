// Cart.js
import React, { useContext } from 'react';
import './Cart.css';
import { CartContext } from './CartContext';

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const parsePrice = (price) => {
    const match = price.toString().replace(/[^0-9]/g, '');
    return parseInt(match, 10) || 0;
  };

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + parsePrice(item.price), 0);
  };

  const formatNumber = (num) => num.toLocaleString('en-IN');

  const generateWhatsAppMessage = () => {
    let message = "🛒 *Your Cart Items:*\n\n";
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.title} - ₹${formatNumber(parsePrice(item.price))}\n`;
    });
    message += `\n*Total:* ₹${formatNumber(calculateTotal())}`;
    return encodeURIComponent(message);
  };

  const whatsappURL = `https://wa.me/919220317499?text=${generateWhatsAppMessage()}`;

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <h3>{item.title}</h3>
              <p>Price: ₹{formatNumber(parsePrice(item.price))}</p>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          ))}

          <div className="total-price">
            <strong>Total: ₹{formatNumber(calculateTotal())}</strong>
          </div>

          <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            Send to WhatsApp
          </a>
        </>
      )}
    </div>
  );
}

export default Cart;