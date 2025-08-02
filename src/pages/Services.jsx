// components/Services.jsx
import React, { useContext } from 'react';
import './Services.css';
import { CartContext } from '../components/CartContext';

// Images
import bhkHome from '../assetshome/bhkhome.jpg';
import bathroom from '../assetshome/bathroom.jpg';
import sofaSet from '../assetshome/sofaset.jpg';
import balcony from '../assetshome/balcony.jpg';
import kitchen from '../assetshome/kitchen.jpg';
import fridge from '../assetshome/fridege.jpg';
import oven from '../assetshome/heaaterovenpizza.jpg';
import washingMachine from '../assetshome/washingmachine.jpg';
import chimney from '../assetshome/chimneys.jpg';
import tvUnit from '../assetshome/wallwithtv.jpg';
import carpet from '../assetshome/carpet.webp';
import drycleaningsofa from '../assetshome/drycleaningsofaset.jpg'

const servicesData = [
  {
    category: 'Full Home Cleaning',
    items: [
      { title: '1 BHK Home Cleaning', price: '₹3,149', image: bhkHome },
      { title: '2 BHK Home Cleaning', price: '₹3,449', image: bhkHome },
      { title: '3 BHK Home Cleaning', price: '₹4,499', image: bhkHome },
    ],
  },
  {
    category: 'Bathroom & Toilet Cleaning',
    items: [
      { title: 'Bathroom Cleaning', price: '₹499', image: bathroom },
    ],
  },
  {
    category: 'Sofa & Upholstery Cleaning',
    items: [
      { title: 'Sofa Cleaning ', price: 'Starting at ₹549', image: sofaSet },
      { title: 'Carpet & Rug Cleaning', price: 'Starting at ₹449', image: carpet },
      {
        title: 'Dry Cleaning – Sofa / Carpet / MaMattress.',
        price: 'Starting at ₹499',
        image: drycleaningsofa,
      },
    ],
  },
  {
    category: 'Balcony & Outdoor Area Cleaning',
    items: [
      { title: 'Balcony Cleaning', price: '₹499', image: balcony },
    ],
  },
  {
    category: 'Kitchen & Appliance Cleaning',
    items: [
      { title: 'Kitchen Deep Cleaning', price: 'Starting at ₹1549', image: kitchen },
      { title: 'Refrigerator Cleaning', price: 'Starting at ₹499 ', image: fridge },
      { title: 'Microwave & Oven Cleaning', price: '₹249', image: oven },
      { title: 'Chimney & Exhaust Cleaning', price: '₹499', image: chimney },
      { title: 'Washing Machine Cleaning', price: '₹349', image: washingMachine },
    ],
  },
  {
    category: 'Electronics & Furniture Cleaning',
    items: [
      { title: 'TV & Entertainment Unit Cleaning', price: '₹349', image: tvUnit },
    ],
  },
];


const Services = () => {
  const { addToCart, notification } = useContext(CartContext);

  return (
    
    <div className="services-container">
      {notification && (
        <div className="cart-popup">
          ✔️ Item added to cart! <a href="/cart">Go to Cart</a>
        </div>
      )}
   <h1 className="services-heading">🏠 Our Specialized Services</h1>

      {servicesData.map((section, index) => (
        <div key={index} className="service-category">
          <h2>{section.category}</h2>
          <div className="cards-container">
            {section.items.map((item, idx) => (
              <div className="service-card" key={idx}>
                {item.image && (
                  <img src={item.image} alt={item.title} className="card-image" />
                )}
                <h3>{item.title}</h3>
                <p className="price">{item.price}</p>
                <button
                  className="add-to-cart"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
