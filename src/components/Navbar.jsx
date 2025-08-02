// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaShoppingCart } from "react-icons/fa";
import logo from '../assets/mainlogo.jpg';
import { useCart } from './CartContext';

function Navbar() {
  const { cartItems } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-link">Homyara Services and Solutions</Link>
        <img src={logo} alt="Homyara Logo" className="logo-image" />
      </div>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <form className="navbar-search">
        <input type="text" placeholder="Search services..." />
        <button type="submit">Search</button>
      </form>

      <div className="cart-icon">
        <Link to="/cart">
          <FaShoppingCart size={24} />
          {cartItems.length > 0 && (
            <span className="cart-badge">{cartItems.length}</span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
