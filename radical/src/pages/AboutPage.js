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
          <p className="radical-description">Discover the history and passion that drive Radical's commitment to fashion innovation.</p>
        </section>
        {/* Add more sections or components for brand story, team, etc. */}
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;