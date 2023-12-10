import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

const ContactPage = () => {
  return (
    <div className="page">
      <Header />
      <main className="main radical-container">
        <section className="section radical-section">
          <h1 className="radical-heading">Contact Us</h1>
          <p className="radical-description">Reach out to us for any inquiries or collaborations. We're here to assist you.</p>
          {/* Add a contact form or contact details */}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;