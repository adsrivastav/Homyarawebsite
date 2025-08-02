// src/components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/mainlogo.jpg';
import { useCart } from './CartContext';

function Navbar() {
  const { cartItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-link" onClick={closeMenu}>Homyara Services and Solutions</Link>
        <img src={logo} alt="Homyara Logo" className="logo-image" />
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
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
