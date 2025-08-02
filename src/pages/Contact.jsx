import './contact.css';

function Contact() {
  return (
    <div className="page contact-container">
      <div className="contact-info">
        <h2>Have Questions? Contact Us!</h2>
        <p>If you would like to schedule a service or have any inquiries, feel free to reach out.</p>
        <p><strong>📞 Phone:</strong> <a href="tel:9220317499">92203 17499</a></p>
        <p><strong>📧 Email:</strong> <a href="mailto:homyaraservices@gmail.com">homyaraservices@gmail.com</a></p>
        <p><strong>📍 Address:</strong> All India Services – We come to your doorstep!</p>

        <div className="social-links">
          <a href="https://www.instagram.com/officalhomyara?igsh=MThjb3RsNWpkbjhjMg==" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="https://www.facebook.com/share/1YtMPXYrCZ/" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook"></i> Facebook
          </a>
        </div>

        <a
          href="https://wa.me/919220317499?text=Hi%20Homyara%2C%20I%20want%20to%20inquire%20about%20your%20cleaning%20services."
          className="whatsapp-button"
          target="_blank"
          rel="noreferrer"
        >
          💬 Send a Message on WhatsApp
        </a>
      </div>

      <div className="contact-form">
        <h3>Send Us a Message</h3>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
