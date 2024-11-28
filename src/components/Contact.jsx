import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., email service or API call)
    alert("Message sent!");
  };

  return (
    <section className="contact-us-section" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <div className="info-item">
            <i className="fas fa-phone-alt"></i>
            <p>+123 456 7890</p>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <p>seyfadin@zcrypto.com</p>
          </div>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>123 ZCrypto St, Addis Ababa, Ethiopia</p>
          </div>
        </div>

        <div className="map-container">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.940058223047!2d38.80717847319144!3d8.885165391170542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b835c65fc8c91%3A0x35034d337aa7b867!2sAASTU%20Administration%20Building!5e0!3m2!1sen!2set!4v1732736513572!5m2!1sen!2set"
    frameBorder="0"
    style={{ border: 0, width: '100%', height: '100%' }}
    allowFullScreen=""
    aria-hidden="false"
    tabIndex="0"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>


        <div className="contact-form-container">
          <h3>Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
