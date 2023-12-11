import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

const AboutPage = () => {
  return (
    <div className="page">
      <Header />
      <main className="main radical-container">
        <section className="section radical-section">
          <h1 className="radical-heading">Our Story</h1>
          <p className="radical-description">Radical is a fashion label established in 2023. It was born from a desire for more striking and experimental works which could be used in a variety of settings.</p>
          <h1 className="radical-heading">Our Commitment to the planet</h1>
          <p className="radical-description">Radical is commited to sustainable fashion. We source only sustainable materials, and use recyclable packaging.</p>
        </section>
        {/* Add more sections or components for brand story, team, etc. */}
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;