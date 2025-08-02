// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Cart from './components/Cart';
import { useCart } from './components/CartContext';

import './App.css';
//import './Cart.css';
import { CartProvider } from './components/CartContext';
import PopupMessage from './components/PopupMessage';
function AppWrapper() {
  const { popupMessage } = useCart();

  return <PopupMessage message={popupMessage} />;
}

function App() {
  return (
    <CartProvider>
      <Router>
        <AppWrapper />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </CartProvider>
  );
}
export default App;
