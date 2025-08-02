import './Page.css';
import mainlogo from '../assets/mainlogo.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import HomeBHK from '../assetshome/bhkhome.jpg';
import Bathroom from '../assetshome/bathroom.jpg';
import Sofa from '../assetshome/sofaset.jpg';
import Balcony from '../assetshome/balcony.jpg';
import Kitchen from '../assetshome/kitchen.jpg';
import Refrigerator from '../assetshome/fridege.jpg';
import Oven from '../assetshome/heaaterovenpizza.jpg';
import WashingMachine from '../assetshome/washingmachine.jpg';
import Chimney from '../assetshome/chimneys.jpg';
import Television from '../assetshome/wallwithtv.jpg';
import Carpet from '../assetshome/carpet.webp';
import dry from '../assetshome/drycleaningsofaset.jpg';

import { useState } from 'react';
import { useCart } from '../components/CartContext'; // 👈 import the hook

function Home() {
  const { addToCart } = useCart(); // 👈 use context

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.service) {
      alert('Please fill in all required fields.');
      return;
    }
    const whatsappMessage = `https://wa.me/919220317499?text=Hi, I'm ${formData.name}. I want to book ${formData.service}. ${formData.message}`;
    window.open(whatsappMessage, '_blank');
  };

  const cleaningServices = [
    {
      image: HomeBHK,
      title: "Full Home Cleaning (1 BHK, 2 BHK, 3 BHK)",
      desc: "Professional deep cleaning for your entire home. Includes bedroom, bathroom, kitchen, living area, and balcony. Choose your BHK size as per requirement.",
      price: "Starting at ₹3,149"
    },
    {
      image: Bathroom,
      title: "Bathroom Cleaning",
      desc: "Intensive cleaning and sanitization of toilet, floor, tiles, and fittings.",
      price: "₹549"
    },
    {
      image: Sofa,
      title: "Sofa Cleaning",
      desc: "Deep cleaning and shampooing of fabric or leather sofas to remove dust and stains.",
      price: "Starting at ₹549"
    },
    {
      image: Balcony,
      title: "Balcony Cleaning",
      desc: "Sweeping, scrubbing, and mopping of balcony floor and railing.",
      price: "₹499"
    },
    {
      image: Kitchen,
      title: "Kitchen Cleaning",
      desc: "Degreasing countertops, tiles, shelves, and kitchen appliances.",
      price: " Starting at ₹1549"
    },
    {
      image: Refrigerator,
      title: "Refrigerator Cleaning",
      desc: "Interior and exterior cleaning with safe products for hygiene.",
      price: "Starting at ₹499"
    },
    {
      image: Oven,
      title: "Microwave & Oven Cleaning",
      desc: "Thorough cleaning to remove grease and burnt food inside and outside.",
      price: "₹249"
    },
    {
      image: WashingMachine,
      title: "Washing Machine Cleaning",
      desc: "Drum, detergent drawer, and outer body cleaned for better efficiency.",
      price: "₹349"
    },
    {
      image: Chimney,
      title: "Chimney & Exhaust Cleaning",
      desc: "Removal of stubborn oil stains and deep scrubbing of filters.",
      price: "₹499"
    },
    {
      image: Television,
      title: "TV & Entertainment Unit Cleaning",
      desc: "Dusting and polishing of your TV setup and furniture.",
      price: "₹349"
    },
    {
      image: Carpet,
      title: "Carpet & Rug Cleaning",
      desc: "Shampooing and deep cleaning for stain-free, fresh-smelling carpets.",
      price: " Starting at ₹499"
    },
    {
      image: dry,
      title: "Dry Cleaning Services",
      desc: "Professional dry cleaning for Sofa, Carpet, and Mattress.",
      price: "Starting at ₹499"
    }
  ];

  const reviews = [
    {
      name: "Amit Sharma",
      comment: "Great service! My home looks spotless. Will definitely book again.",
      rating: 5
    },
    {
      name: "Priya Mehta",
      comment: "Very professional and on time. Highly recommended!",
      rating: 4
    },
    {
      name: "Ravi Patel",
      comment: "Affordable and clean work. Booking process was super easy.",
      rating: 5
    }
  ];

  return (
    <div className="home-container">
      <div className="intro-section main-container">
        <div className="intro-left">
          <img src={mainlogo} alt="Homyara Logo" className="logo" />
        </div>

        <div className="intro-right">
          <div className="form-section">
            <div className="service-intro">
              <div className="welcome-text">Welcome to Homyara Services & Solutions</div>
              <p>
                <strong>Homyara Services & Solutions</strong> — your trusted provider of affordable, high-quality home services.
                We specialize in kitchen and bedroom setups, deep cleaning, furniture delivery, and appliance care — all handled by skilled professionals focused on quality and satisfaction.
                <br /><br />
                Booking your service is simple and hassle-free. Just fill out the form below — our team will get in touch promptly to confirm all details and ensure a smooth experience.
                <strong> So, book now on WhatsApp!</strong>
              </p>
            </div>

            <form className="booking-form" onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
              <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required />
              <input type="text" name="service" placeholder="Service/Product (e.g. Sofa Set)" onChange={handleChange} required />
              <textarea name="message" placeholder="Additional Message (optional)" onChange={handleChange}></textarea>
              <button type="submit">Book Now on WhatsApp</button>
            </form>
          </div>
        </div>
      </div>

      <div className="section-slider">
        <h2>Cleaning Services</h2>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {cleaningServices.map((service, idx) => (
            <SwiperSlide key={idx}>
              <div className="service-card">
                <img src={service.image} alt={service.title} className="card-image" />
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <span className="price-tag">{service.price}</span>
                <button className="add-to-cart-btn" onClick={() => addToCart(service)}>
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="review-section">
        <h2>What Our Customers Say</h2>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {reviews.map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className="review-card">
                <p className="review-comment">“{review.comment}”</p>
                <div className="stars">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className={i < review.rating ? 'star filled' : 'star'}>★</span>
                  ))}
                </div>
                <h4 className="review-name">– {review.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Home;
