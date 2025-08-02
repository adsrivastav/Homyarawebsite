import './about.css';

function About() {
  return (
    <div className="page about-page">
      <h2>About Us</h2>
      <p className="intro-text">
        Homyara Services and Solutions is your trusted partner in cleanliness. Our mission is to deliver 
        reliable and affordable cleaning services tailored to your needs. Whether you live in a small apartment 
        or manage a commercial office, we have trained professionals who ensure every corner is cleaned with care.
      </p>

      <div className="about-section">
        <h3>Our Vision</h3>
        <p>
          To become India’s most preferred and reliable cleaning brand, known for eco-friendly solutions,
          transparency, and top-quality service.
        </p>
      </div>

      <div className="about-section">
        <h3>Our Services</h3>
        <p>
          We offer:
          <ul>
            <li>✓ Full Home Deep Cleaning (1BHK to 4BHK)</li>
            <li>✓ Kitchen & Bathroom Sanitization</li>
            <li>✓ Sofa & Carpet Shampooing</li>
            <li>✓ Post-Construction Cleanup</li>
            <li>✓ Office & Commercial Cleaning</li>
          </ul>
        </p>
      </div>

      <div className="about-section">
        <h3>Why Choose Us?</h3>
        <p>
          ✓ Professional and trained staff<br />
          ✓ Affordable and customizable packages<br />
          ✓ Use of non-toxic, eco-friendly products<br />
          ✓ 100% customer satisfaction guarantee
        </p>
      </div>

      <div className="highlight-quote">
        <strong>“Give us a chance – we promise better cleaning at less price, with no compromise on quality.”</strong>
      </div>
    </div>
  );
}

export default About;
